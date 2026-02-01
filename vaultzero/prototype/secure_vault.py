import os
import base64
import sys
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC

# Import SpectreID logic (simulated for self-containment)
sys.path.append(os.path.join(os.getcwd(), 'spectre', 'prototype'))
try:
    from spectre_id import SpectreID
except ImportError:
    # Fallback if pathing fails
    print("[!] Warning: Could not find spectre_id module. Re-implementing logic.")
    class SpectreID:
        def generate_ghost_key(self):
            # This would be the hardware-bound logic we built
            import subprocess, uuid, hashlib
            def get_hwid(cmd):
                try: return subprocess.check_output(cmd, shell=True).decode().strip().split('\n')[-1]
                except: return "UNK"
            raw = f"{get_hwid('wmic cpu get processorid')}|{get_hwid('wmic baseboard get serialnumber')}|{hex(uuid.getnode())}"
            return hashlib.sha256(raw.encode()).hexdigest()

class SecureVault:
    def __init__(self):
        self.spectre = SpectreID()
        self.vault_file = "vault.bin"
        self.salt_file = "vault.salt"

    def get_encryption_key(self):
        """Derives a strong encryption key from the hardware-bound Ghost Key."""
        ghost_key = self.spectre.generate_ghost_key()
        
        # We use a salt to ensure the key is even more robust
        if os.path.exists(self.salt_file):
            with open(self.salt_file, 'rb') as f:
                salt = f.read()
        else:
            salt = os.urandom(16)
            with open(self.salt_file, 'wb') as f:
                f.write(salt)

        kdf = PBKDF2HMAC(
            algorithm=hashes.SHA256(),
            length=32,
            salt=salt,
            iterations=100000,
        )
        key = base64.urlsafe_b64encode(kdf.derive(ghost_key.encode()))
        return key

    def lock_data(self, sensitive_text):
        """Encrypts data using the Spectre key."""
        key = self.get_encryption_key()
        f = Fernet(key)
        encrypted_data = f.encrypt(sensitive_text.encode())
        
        with open(self.vault_file, 'wb') as v:
            v.write(encrypted_data)
        print(f"[SUCCESS] Data encrypted and locked in {self.vault_file}")

    def unlock_data(self):
        """Decrypts data only if the hardware signature matches."""
        if not os.path.exists(self.vault_file):
            print("[!] Error: No vault file found.")
            return None

        try:
            key = self.get_encryption_key()
            f = Fernet(key)
            
            with open(self.vault_file, 'rb') as v:
                encrypted_data = v.read()
            
            decrypted_text = f.decrypt(encrypted_data).decode()
            print("[SUCCESS] Hardware verified. Vault unlocked.")
            return decrypted_text
        except Exception:
            print("[CRITICAL] ACCESS DENIED: Hardware signature does not match or vault is corrupt.")
            return None

if __name__ == "__main__":
    vault = SecureVault()
    
    print("=== YUKORA SECURE VAULT (VAULTZERO ENGINE) ===")
    
    # Example Workflow
    secret = "SCHNITZELBANK DATA: Great-Grandfather Christopher was a Master Tailor. Identity: 0xALPHA-99."
    
    print("\n[1] Locking sensitive Schnitzelbank data...")
    vault.lock_data(secret)
    
    print("\n[2] Attempting to unlock data using current machine identity...")
    content = vault.unlock_data()
    
    if content:
        print(f"\nDECRYPTED DATA:\n> {content}")
    
    print("\n[Note] If you move 'vault.bin' and 'vault.salt' to another PC, decryption will fail.")
