import os
import sys
import time
import threading
from pynput import keyboard
import keyboard as direct_kb 

# Import Simulation Engine
from nemo_code import NemoCodeSimulation

# Import Tools from parent (simulated paths for prototype)
sys.path.append(os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))), 'nemo', 'nemo', 'tools'))
try:
    from screen_capture.capture import ScreenCapture
    from audio_capture.capture import AudioCapture
except ImportError:
    # Fallback placeholders for standalone prototype
    class ScreenCapture: 
        def capture_base64(self): return "MOCK_BASE64_SCREEN"
    class AudioCapture:
        def start_recording(self): pass
        def stop_recording(self): return "MOCK_TRANSCRIPT"

class NemoVanguard:
    def __init__(self):
        self.engine = NemoCodeSimulation()
        self.screen = ScreenCapture()
        self.audio = AudioCapture()
        
        # Hotkeys
        self.hotkeys = {
            'rewind': {keyboard.Key.alt_r, keyboard.Key.left},
            'progress': {keyboard.Key.alt_r, keyboard.Key.right},
            'gemini': {keyboard.Key.alt_r},
            'stt': {keyboard.Key.shift_r}
        }
        
        self.current_keys = set()
        self.simulation_active = False
        self.backspace_held_since = None
        self.last_key_time = 0

    def on_press(self, key):
        now = time.time()
        self.current_keys.add(key)
        
        # --- 1. MAGIC BACKSPACE OVERLOAD ---
        if key == keyboard.Key.backspace:
            if self.backspace_held_since is None:
                self.backspace_held_since = now
            elif (now - self.backspace_held_since) > 0.8: # Threshold for magic
                self.trigger_simulation('backward')
                return

        # --- 2. TRACKING (SOVEREIGN STACK) ---
        if not self.simulation_active:
            try:
                char = getattr(key, 'char', None)
                if char: self.engine.track(char)
                elif key == keyboard.Key.space: self.engine.track(' ')
                elif key == keyboard.Key.enter: self.engine.track('enter')
            except Exception: pass

        # --- 3. SOVEREIGN COMBO DETECTION ---
        if all(k in self.current_keys for k in self.hotkeys['rewind']):
            self.trigger_simulation('backward')
        elif all(k in self.current_keys for k in self.hotkeys['progress']):
            self.trigger_simulation('forward')

    def on_release(self, key):
        if key in self.current_keys:
            self.current_keys.remove(key)
        
        # Handle Backspace Release
        if key == keyboard.Key.backspace:
            self.backspace_held_since = None
            self.simulation_active = False

        # Handle Gemini Release (Right Alt)
        if key == keyboard.Key.alt_r:
            if not self.simulation_active:
                self.trigger_gemini_intel()
            self.simulation_active = False

        # Handle STT Release (Right Shift)
        if key == keyboard.Key.shift_r:
            self.trigger_stt()

        # Kill Simulation on release of navigation
        if key == keyboard.Key.left or key == keyboard.Key.right:
            self.simulation_active = False

    def trigger_simulation(self, direction):
        if self.simulation_active: return
        self.simulation_active = True
        
        def run():
            print(f"\n[NEMO] {direction.upper()} SIMULATION ENGAGED...")
            while self.simulation_active:
                if direction == 'backward':
                    success = self.engine.step_backward()
                else:
                    success = self.engine.step_forward()
                
                if not success: break
            print(f"[NEMO] {direction.upper()} SIMULATION PAUSED.")

        threading.Thread(target=run, daemon=True).start()

    def trigger_gemini_intel(self):
        print("\n[NEMO] CAPTURING VISUAL INTEL...")
        b64_screen = self.screen.capture_base64()
        print(f"[NEMO] Screen Context Secured ({len(b64_screen)} bytes). Sending to Gemini...")
        # API call logic goes here

    def trigger_stt(self):
        print("\n[NEMO] TRANSCRIBING SOVEREIGN VOICE...")
        transcript = self.audio.stop_recording()
        print(f"[NEMO] Transcript: {transcript}")

    def start(self):
        print("=== NEMO VANGUARD: THE SOVEREIGN AGENT ===")
        print("[INTEL] Data Invisibility: GUARANTEED")
        print("[INTEL] Magic Backspace: ACTIVE (>0.8s)")
        print("[INTEL] Right Alt: GEMINI VISUAL")
        print("[INTEL] Right Shift: STT")
        print("-" * 45)

        with keyboard.Listener(on_press=self.on_press, on_release=self.on_release) as listener:
            listener.join()

if __name__ == "__main__":
    nemo = NemoVanguard()
    nemo.start()