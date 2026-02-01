import socket
import threading
import time
import json
import os
import sys
from cryptography.fernet import Fernet

# Add SpectreID to path
sys.path.append(os.path.join(os.getcwd(), 'spectre', 'prototype'))
try:
    from spectre_id import SpectreID
except ImportError:
    # Minimal fallback for self-containment
    class SpectreID:
        def generate_ghost_key(self):
            return "GHOST_PROTOTYPE_KEY_001"

class GhostMech:
    def __init__(self, port=50505):
        self.port = port
        self.spectre = SpectreID()
        self.my_id = self.spectre.generate_ghost_key()[:12] # Short ID for UI
        self.peers = {} # {id: ip}
        self.running = True
        
        # Identity encryption (for this prototype, we use a fixed 'mesh' key for the group)
        # In V2, this would be a per-peer Diffie-Hellman exchange
        self.mesh_key = Fernet.generate_key() 
        self.cipher = Fernet(self.mesh_key)

    def discovery_listener(self):
        """Listens for UDP broadcasts from other Ghost Mech nodes."""
        sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        sock.bind(('', self.port))
        sock.settimeout(1.0)
        
        while self.running:
            try:
                data, addr = sock.recvfrom(1024)
                message = json.loads(data.decode())
                
                peer_id = message.get('id')
                if peer_id and peer_id != self.my_id:
                    if peer_id not in self.peers:
                        print(f"\n[+] GHOST DETECTED: {peer_id} at {addr[0]}")
                        self.peers[peer_id] = addr[0]
            except (socket.timeout, json.JSONDecodeError):
                continue
        sock.close()

    def discovery_broadcaster(self):
        """Broadcasts our SpectreID to the local network every few seconds."""
        sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        sock.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)
        
        message = json.dumps({"id": self.my_id, "status": "active"}).encode()
        
        while self.running:
            try:
                sock.sendto(message, ('<broadcast>', self.port))
                time.sleep(5)
            except Exception:
                break
        sock.close()

    def message_listener(self):
        """TCP server to receive direct, encrypted messages."""
        server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        server.bind(('0.0.0.0', self.port + 1))
        server.listen(5)
        server.settimeout(1.0)
        
        while self.running:
            try:
                conn, addr = server.accept()
                data = conn.recv(4096)
                if data:
                    # Decrypt incoming message
                    decrypted = self.cipher.decrypt(data).decode()
                    sender_id, msg_body = decrypted.split('|', 1)
                    print(f"\n[RECEIVED FROM {sender_id}]: {msg_body}")
                    print("ghost_mech > ", end="", flush=True)
                conn.close()
            except socket.timeout:
                continue
        server.close()

    def send_message(self, target_id, text):
        """Sends an encrypted TCP message to a peer."""
        if target_id not in self.peers:
            print(f"[!] Peer {target_id} not found.")
            return

        target_ip = self.peers[target_id]
        try:
            sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            sock.connect((target_ip, self.port + 1))
            
            # Encrypt: Identity | Message
            payload = f"{self.my_id}|{text}"
            encrypted_payload = self.cipher.encrypt(payload.encode())
            
            sock.send(encrypted_payload)
            sock.close()
            print(f"[SENT TO {target_id}]: {text}")
        except Exception as e:
            print(f"[!] Transmission failed: {e}")

    def start(self):
        print(f"=== GHOST MECH P2P PROTOCOL V1.0 ===")
        print(f"DEVICE_ID: {self.my_id}")
        print(f"STATUS: Listening on port {self.port} (UDP) and {self.port+1} (TCP)")
        print(f"------------------------------------")
        
        # Start Threads
        threading.Thread(target=self.discovery_listener, daemon=True).start()
        threading.Thread(target=self.discovery_broadcaster, daemon=True).start()
        threading.Thread(target=self.message_listener, daemon=True).start()

        print("Commands: 'list' to see peers, 'send <id> <msg>' to talk, 'exit' to quit.\n")
        
        while self.running:
            try:
                cmd = input("ghost_mech > ").strip()
                if not cmd: continue
                
                parts = cmd.split(' ', 2)
                action = parts[0].lower()
                
                if action == "exit":
                    self.running = False
                elif action == "list":
                    print(f"ACTIVE PEERS ({len(self.peers)}):")
                    for pid, pip in self.peers.items():
                        print(f" - {pid} [{pip}]")
                elif action == "send" and len(parts) == 3:
                    self.send_message(parts[1], parts[2])
                else:
                    print("Unknown command. Try 'list' or 'send <id> <msg>'.")
            except KeyboardInterrupt:
                self.running = False

if __name__ == "__main__":
    mech = GhostMech()
    mech.start()
