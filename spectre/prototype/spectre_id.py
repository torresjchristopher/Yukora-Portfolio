import subprocess
import hashlib
import json
import os
import uuid
import datetime

class SpectreID:
    def __init__(self):
        self.identity_file = "spectre_genesis.json"
        self.hardware_map = {}

    def get_windows_hwid(self, command):
        """Executes a wmic command to retrieve hardware IDs on Windows."""
        try:
            # Execute wmic command, ensuring we hide the window for cleaner CLI output
            startupinfo = subprocess.STARTUPINFO()
            startupinfo.dwFlags |= subprocess.STARTF_USESHOWWINDOW
            
            output = subprocess.check_output(command, startupinfo=startupinfo, shell=True).decode().strip()
            
            # wmic output usually has headers (Line 1) and value (Line 2)
            # We split by newlines and filter out empty lines
            lines = [line.strip() for line in output.split('\n') if line.strip()]
            
            if len(lines) > 1:
                return lines[1] # Return the value, skipping header
            return "UNKNOWN"
        except Exception as e:
            # Silently handle errors for prototype
            return "ERROR"

    def scan_hardware(self):
        print("[-] Scanning local hardware layer...")
        
        # 1. CPU Processor ID
        # Unique ID of the processor
        cpu_id = self.get_windows_hwid("wmic cpu get processorid")
        self.hardware_map['CPU_ID'] = cpu_id
        
        # 2. Motherboard Serial
        # Serial number of the baseboard
        mobo_id = self.get_windows_hwid("wmic baseboard get serialnumber")
        self.hardware_map['MOBO_SERIAL'] = mobo_id
        
        # 3. BIOS Serial
        # Serial number of the BIOS
        bios_id = self.get_windows_hwid("wmic bios get serialnumber")
        self.hardware_map['BIOS_SERIAL'] = bios_id
        
        # 4. MAC Address (Node)
        # Unique identifier of the network interface
        mac_addr = hex(uuid.getnode())
        self.hardware_map['MAC_NODE'] = mac_addr

        # 5. Disk Serial (System Drive)
        # Serial number of the physical media
        disk_id = self.get_windows_hwid("wmic diskdrive get serialnumber")
        self.hardware_map['DISK_SERIAL'] = disk_id
        
        print(f"[-] Hardware Map Built: {len(self.hardware_map)} Entropy Sources Captured.")
        return self.hardware_map

    def generate_ghost_key(self):
        """Generates a deterministic SHA-256 hash from the hardware map."""
        # Sort keys to ensure deterministic ordering (JSON key order isn't guaranteed)
        raw_string = ""
        for key in sorted(self.hardware_map.keys()):
            raw_string += f"{key}:{self.hardware_map[key]}|"
        
        # Create SHA-256 Hash
        # This is the "SpectreID" - irreproducible on any other machine
        ghost_hash = hashlib.sha256(raw_string.encode()).hexdigest()
        return ghost_hash

    def initialize(self):
        print("\n=== SPECTRE ID PROTOCOL V1.0 ===")
        self.scan_hardware()
        ghost_key = self.generate_ghost_key()
        
        data = {
            "spectre_version": "1.0.0",
            "timestamp": str(datetime.datetime.now()),
            "hardware_manifest": self.hardware_map, 
            "ghost_key": ghost_key
        }
        
        if os.path.exists(self.identity_file):
            print(f"\n[!] Existing Identity Block Found: {self.identity_file}")
            try:
                with open(self.identity_file, 'r') as f:
                    saved_data = json.load(f)
                
                # Verify Logic
                if saved_data.get('ghost_key') == ghost_key:
                    print("\n[SUCCESS] HARDWARE VERIFICATION PASSED.")
                    print(f"Device Identity Confirmed: {ghost_key}")
                    print("Access Granted to Yukora Suite.")
                else:
                    print("\n[CRITICAL] HARDWARE MISMATCH DETECTED.")
                    print("This identity file belongs to a different machine.")
                    print(f"Stored ID:  {saved_data.get('ghost_key')}")
                    print(f"Derived ID: {ghost_key}")
                    print("Access Denied.")
            except json.JSONDecodeError:
                print("[ERROR] Corrupt Genesis Block.")
        else:
            print(f"\n[*] Generating Genesis Block...")
            with open(self.identity_file, 'w') as f:
                json.dump(data, f, indent=4)
            print(f"[SUCCESS] New SpectreID Identity Created: {ghost_key}")
            print(f"Identity saved to {self.identity_file}")

if __name__ == "__main__":
    app = SpectreID()
    app.initialize()
