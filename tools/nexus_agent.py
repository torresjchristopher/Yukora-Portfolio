import os
import subprocess
import datetime
import json

# Configuration
REPO_PATH = os.getcwd()  # Assumes script runs from root or is directed here
OUTPUT_DIR = os.path.join(REPO_PATH, "releases")
VERSION_DATE = datetime.datetime.now().strftime("%Y.%m.%d")
PATCH_VERSION = f"1.{datetime.datetime.now().strftime('%m.%d')}"

def get_git_changes():
    """Fetches git log for the last 24 hours."""
    try:
        # Get commits from the last 24 hours
        cmd = ["git", "log", "--since=24.hours", "--pretty=format:%h|%an|%s"]
        result = subprocess.run(cmd, capture_output=True, text=True, cwd=REPO_PATH)
        
        if not result.stdout:
            return []
            
        commits = []
        for line in result.stdout.split('\n'):
            if line:
                hash_id, author, message = line.split('|', 2)
                commits.append({"hash": hash_id, "author": author, "message": message})
        return commits
    except Exception as e:
        print(f"Error fetching git logs: {e}")
        return []

def compose_patch_notes(commits):
    """
    In a full production environment, this would call an LLM API (Gemini/GPT).
    For this sovereign tool, we use a template-based generator based on commit prefixes.
    """
    
    if not commits:
        return "No updates recorded in the last 24 hours."

    report = [
        "--------------------------------------------------",
        f" YUKORA NEXUS AGENT | DAILY REPORT | {VERSION_DATE}",
        f" PATCH VERSION: {PATCH_VERSION}",
        "--------------------------------------------------",
        "",
        "SUMMARY:",
        f"Autonomous systems have detected {len(commits)} new commits committed to the main branch.",
        "Engineering efforts are focused on [UI Refinement] and [Protocol Initialization].",
        "",
        "DETAILED CHANGELOG:",
    ]

    for commit in commits:
        msg = commit['message']
        category = "[MISC]"
        
        # Simple categorization logic
        if "UI:" in msg: category = "[INTERFACE]"
        if "Web:" in msg: category = "[DEPLOYMENT]"
        if "Fix:" in msg: category = "[PATCH]"
        if "Feat:" in msg: category = "[FEATURE]"
        
        report.append(f" {category} {msg} ({commit['hash']})")

    report.append("")
    report.append("--------------------------------------------------")
    report.append(" END OF TRANSMISSION")
    
    return "\n".join(report)

def save_release_note(content):
    """Saves the release note to a local file."""
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        
    filename = f"release_{VERSION_DATE.replace('.', '_')}.txt"
    filepath = os.path.join(OUTPUT_DIR, filename)
    
    with open(filepath, "w") as f:
        f.write(content)
    
    print(f"Release note saved to: {filepath}")
    return filepath

if __name__ == "__main__":
    print("Initializing Yukora Release Agent...")
    changes = get_git_changes()
    note = compose_patch_notes(changes)
    print("\n" + note + "\n")
    save_release_note(note)
