import os
import sys
import json
import time
import threading
from pynput import keyboard
from cryptography.fernet import Fernet

# Add project root to path
ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(os.path.join(ROOT_DIR, 'spectre', 'prototype'))
sys.path.append(os.path.join(ROOT_DIR, 'vaultzero', 'prototype'))

try:
    from spectre_id import SpectreID
    from secure_vault import SecureVault
except ImportError:
    SpectreID = None
    SecureVault = None

class NemoAgent:
    def __init__(self):
        self.spectre = SpectreID()
        self.vault = SecureVault()
        self.active = False
        self.running = True
        self.history = []
        self.hotkeys = {
            'activate': {keyboard.Key.ctrl_l, keyboard.Key.alt_l, keyboard.KeyCode.from_char('n')},
            'kill': {keyboard.Key.ctrl_l, keyboard.Key.alt_l, keyboard.KeyCode.from_char('q')}
        }
        self.current_keys = set()

    def load_memory(self):
        """Loads encrypted memory from VaultZero."""
        print("[-] Nemo accessing sovereign memory...")
        data = self.vault.unlock_data()
        if data and data.startswith("NEMO_MEMORY:"):
            self.history = json.loads(data.replace("NEMO_MEMORY:", ""))
            print(f"[+] Restored {len(self.history)} historical context nodes.")
        else:
            print("[*] Initializing fresh consciousness.")

    def save_memory(self):
        """Saves encrypted memory to VaultZero."""
        memory_data = "NEMO_MEMORY:" + json.dumps(self.history)
        self.vault.lock_data(memory_data)

    def process_query(self, query):
        """Simulates local AI processing."""
        # In production, this would call a local Llama/Mistral model via llama-cpp-python or similar.
        print(f"\n[NEMO REASONING]: Processing '{query}' locally...")
        time.sleep(1) # Simulate thought
        
        response = f"As your sovereign agent, I've analyzed '{query}'. No data has left this machine. My recommendation: Continue building the Ghost Tech line."
        
        self.history.append({"q": query, "a": response, "ts": time.time()})
        self.save_memory()
        return response

    def on_press(self, key):
        if any([key in combo for combo in self.hotkeys.values()]):
            self.current_keys.add(key)
            
            if all(k in self.current_keys for k in self.hotkeys['activate']):
                self.trigger_agent()
            elif all(k in self.current_keys for k in self.hotkeys['kill']):
                print("\n[!] Nemo Disconnecting...")
                self.running = False
                return False

    def on_release(self, key):
        try:
            self.current_keys.remove(key)
        except KeyError:
            pass

    def trigger_agent(self):
        if self.active: return
        self.active = True
        print("\n" + "="*40)
        print(" NEMO ACTIVATED: How can I assist your sovereignty?")
        print("="*40)
        query = input("nemo > ")
        if query.strip():
            response = self.process_query(query)
            print(f"\nNEMO: {response}")
        print("\n[-] Nemo returning to background. (Ctrl+Alt+N to wake)")
        self.active = False

    def start(self):
        print("=== NEMO AI AGENT V1.0 (PROTOTYPE) ===")
        print("[-] Initializing Data Invisibility Shield...")
        
        # 1. Hardware Authentication
        if self.spectre:
            ghost_key = self.spectre.generate_ghost_key()
            print(f"[+] Device Authenticated: {ghost_key[:16]}...")
        
        # 2. Memory Access
        if self.vault:
            self.load_memory()
        
        print("\n[STATUS]: Nemo is now a 'Ghost in the Machine'.")
        print("[HOTKEY]: Ctrl + Alt + N to activate.")
        print("[HOTKEY]: Ctrl + Alt + Q to terminate.")
        print("-" * 40)

        with keyboard.Listener(on_press=self.on_press, on_release=self.on_release) as listener:
            listener.join()

if __name__ == "__main__":
    nemo = NemoAgent()
    nemo.start()
