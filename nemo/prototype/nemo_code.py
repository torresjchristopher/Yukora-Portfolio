import time
from typing import Tuple, Optional, List, Dict
import keyboard

class NemoCodeSimulation:
    """
    NEMO CODE - Playhead Simulation Engine
    
    A deterministic simulation engine that treats user actions as a reversible 
    mathematical stack. This allows for temporal scrubbing (Rewind/Progress)
    with zero data persistence beyond the 5-minute window.
    """

    # Instruction Map: Key -> (Inverse, Forward)
    INSTRUCTION_SET = {
        'a': ('backspace', 'a'), 'b': ('backspace', 'b'), 'c': ('backspace', 'c'),
        'd': ('backspace', 'd'), 'e': ('backspace', 'e'), 'f': ('backspace', 'f'),
        'g': ('backspace', 'g'), 'h': ('backspace', 'h'), 'i': ('backspace', 'i'),
        'j': ('backspace', 'j'), 'k': ('backspace', 'k'), 'l': ('backspace', 'l'),
        'm': ('backspace', 'm'), 'n': ('backspace', 'n'), 'o': ('backspace', 'o'),
        'p': ('backspace', 'p'), 'q': ('backspace', 'q'), 'r': ('backspace', 'r'),
        's': ('backspace', 's'), 't': ('backspace', 't'), 'u': ('backspace', 'u'),
        'v': ('backspace', 'v'), 'w': ('backspace', 'w'), 'x': ('backspace', 'x'),
        'y': ('backspace', 'y'), 'z': ('backspace', 'z'),
        ' ': ('backspace', ' '), 'enter': ('ctrl+z', 'enter'),
        'backspace': ('ctrl+z', 'backspace'), 'delete': ('ctrl+z', 'delete'),
        'left': ('right', 'left'), 'right': ('left', 'right'),
        'up': ('down', 'up'), 'down': ('up', 'down'),
    }

    MAX_HISTORY = 5000 

    def __init__(self):
        self.stack = []  # List of dicts: {'ts': float, 'forward': str, 'inverse': str}
        self.playhead = -1  # Index of the last action executed in 'real time'
        self.locked = True

    def track(self, key: str):
        """Captures an action and its inverse into the simulation stack."""
        if key in ('right shift', 'right alt'):
            return

        # If user types while playhead is rewound, we 'fork' time (truncate future)
        if self.playhead < len(self.stack) - 1:
            print(f"[NEMO] Temporal Fork: Overwriting {len(self.stack) - 1 - self.playhead} future actions.")
            self.stack = self.stack[:self.playhead + 1]

        instructions = self.INSTRUCTION_SET.get(key.lower())
        if instructions:
            self.stack.append({
                'ts': time.time(),
                'forward': instructions[1],
                'inverse': instructions[0]
            })
            self.playhead += 1

            # Rolling 5-minute window
            if len(self.stack) > self.MAX_HISTORY:
                self.stack.pop(0)
                self.playhead -= 1

    def step_backward(self) -> bool:
        """Simulates one step back in time."""
        if self.playhead < 0:
            return False
        
        action = self.stack[self.playhead]
        # Calculate speed based on original typing cadence
        if self.playhead > 0:
            delta = abs(action['ts'] - self.stack[self.playhead-1]['ts'])
            time.sleep(min(delta, 0.3)) # Replay at typed speed, max 300ms delay
        
        success = self.execute_instruction(action['inverse'])
        if success:
            self.playhead -= 1
        return success

    def step_forward(self) -> bool:
        """Simulates one step forward in time."""
        if self.playhead >= len(self.stack) - 1:
            return False
        
        self.playhead += 1
        action = self.stack[self.playhead]
        
        # Timing simulation
        if self.playhead > 0:
            delta = abs(action['ts'] - self.stack[self.playhead-1]['ts'])
            time.sleep(min(delta, 0.3))

        return self.execute_instruction(action['forward'])

    def execute_instruction(self, instr: str) -> bool:
        """Translates Nemo Code into physical hardware interaction."""
        try:
            if instr == 'backspace':
                keyboard.press_and_release('backspace')
            elif instr == 'ctrl+z':
                keyboard.hotkey('ctrl', 'z')
            elif instr == 'left':
                keyboard.press_and_release('left')
            elif instr == 'right':
                keyboard.press_and_release('right')
            elif instr == 'up':
                keyboard.press_and_release('up')
            elif instr == 'down':
                keyboard.press_and_release('down')
            elif len(instr) == 1: # Literal character replay
                keyboard.write(instr)
            return True
        except Exception:
            return False

    def get_status(self) -> dict:
        return {
            'stack_size': len(self.stack),
            'playhead_pos': self.playhead,
            'percent_life': (self.playhead + 1) / (len(self.stack) or 1) * 100
        }

if __name__ == "__main__":
    # Internal Test
    engine = NemoCodeSimulation()
    print("Testing Engine Track...")
    engine.track('h')
    engine.track('e')
    engine.track('l')
    print(f"Status: {engine.get_status()}")
