import os
import sys
import argparse
import subprocess

# Add project root to path for module discovery
ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(os.path.join(ROOT_DIR, 'spectre', 'prototype'))

try:
    from spectre_id import SpectreID
except ImportError:
    SpectreID = None

VERSION = "1.0.0-BETA"
BANNER = f"""
██╗   ██╗██╗   ██╗██╗  ██╗ ██████╗ ██████╗  █████╗ 
╚██╗ ██╔╝██║   ██║██║ ██╔╝██╔═══██╗██╔══██╗██╔══██╗
 ╚████╔╝ ██║   ██║█████╔╝ ██║   ██║██████╔╝███████║
  ╚██╔╝  ██║   ██║██╔═██╗ ██║   ██║██╔══██╗██╔══██║
   ██║   ╚██████╔╝██║  ██║╚██████╔╝██║  ██║██║  ██║
   ╚═╝    ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
           SOVEREIGN OPERATING LAYER v{VERSION}
"""

class YukoraNexus:
    def __init__(self):
        self.spectre = SpectreID() if SpectreID else None
        self.verified = False

    def authenticate(self):
        print("[-] Initializing SpectreID Handshake...")
        if not self.spectre:
            print("[!] CRITICAL: SpectreID Protocol not found. Reinstall Nexus.")
            return False
        
        # Deterministic Hardware Scan
        ghost_key = self.spectre.generate_ghost_key()
        print(f"[+] Device Authenticated: {ghost_key[:16]}... (Hardware Verified)")
        self.verified = True
        return True

    def list_marketplace(self):
        print("\n--- YUKORA SOVEREIGN MARKETPLACE ---")
        print("Uncensorable. Local-First. Private.")
        print("-" * 36)
        apps = [
            {"id": "spectre", "name": "SpectreID", "desc": "Hardware-bound Identity Protocol", "status": "INSTALLED"},
            {"id": "vault", "name": "VaultZero", "desc": "Distributed Secure Storage", "status": "INSTALLED"},
            {"id": "mech", "name": "Ghost Mech", "desc": "P2P Sovereign Messaging", "status": "INSTALLED"},
            {"id": "nemo", "name": "Nemo AI", "desc": "Keyboard AI Assistant", "status": "AVAILABLE"},
            {"id": "prism", "name": "Prism", "desc": "Invisible Headless Browser", "status": "CONCEPT"},
            {"id": "aegis", "name": "Aegis", "desc": "Application Network Firewall", "status": "BETA"},
        ] 
        
        for app in apps:
            status_color = "[+]" if app['status'] == "INSTALLED" else "[ ]"
            print(f"{status_color} {app['name']:<12} | {app['status']:<10} | {app['desc']}")
        print("-" * 36)

    def launch_module(self, module_name):
        if not self.verified:
            print("[!] Error: System not authenticated. Run 'yukora auth'.")
            return

        paths = {
            "spectre": os.path.join(ROOT_DIR, "spectre", "prototype", "spectre_id.py"),
            "vault": os.path.join(ROOT_DIR, "vaultzero", "prototype", "secure_vault.py"),
            "mech": os.path.join(ROOT_DIR, "ghostmech", "prototype", "ghost_mech.py"),
        }

        if module_name in paths:
            path = paths[module_name]
            if os.path.exists(path):
                print(f"[-] Launching {module_name} in sovereign space...")
                subprocess.run([sys.executable, path])
            else:
                print(f"[!] Error: Module {module_name} source not found at {path}")
        else:
            print(f"[!] Error: Module '{module_name}' is not installed or recognized.")

def main():
    parser = argparse.ArgumentParser(description="Yukora Nexus - The Sovereign Operating Layer")
    parser.add_argument("command", choices=["auth", "list", "run", "status"], help="Command to execute")
    parser.add_argument("app", nargs="?", help="App name for 'run' command")
    
    if len(sys.argv) == 1:
        print(BANNER)
        parser.print_help()
        sys.exit(0)

    args = parser.parse_args()
    nexus = YukoraNexus()

    if args.command == "auth":
        nexus.authenticate()
    elif args.command == "list":
        nexus.list_marketplace()
    elif args.command == "run":
        if not args.app:
            print("[!] Error: Specify an app to run (e.g., 'yukora run mech')")
        else:
            if nexus.authenticate():
                nexus.launch_module(args.app)
    elif args.command == "status":
        print(f"Yukora Nexus v{VERSION}")
        print("Status: Operational")
        print(f"Root: {ROOT_DIR}")

if __name__ == "__main__":
    main()
