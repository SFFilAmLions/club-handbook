"""Check public handbook placeholders without flagging Markdown links or Mermaid."""

from pathlib import Path
import re
import sys

def validate(content):
    errors = []
    in_mermaid = False
    in_other_code = False
    for lineno, line in enumerate(content.splitlines(), 1):
        if line.strip().startswith("```"):
            lang = line.strip()[3:].strip().lower()
            if in_mermaid or in_other_code:
                in_mermaid = in_other_code = False
            else:
                in_mermaid = lang == "mermaid"
                in_other_code = lang not in ("", "text", "markdown", "md", "plaintext")
            continue
        if in_mermaid or in_other_code:
            continue
        for match in re.finditer(r"\[([A-Za-z][^\]\n]{0,80})\]", line):
            before = line[:match.start()]
            after = line[match.end():]
            if before.endswith(("]", "\\")) or re.match(r"\s*[\[(]", after) or after.startswith(":"):
                continue
            errors.append(f"{lineno}: replace [{match.group(1)}] with a curly-brace placeholder")
    return errors

if __name__ == "__main__":
    problems = []
    for path in sorted(Path("docs").rglob("*.md")):
        problems.extend(f"{path}:{issue}" for issue in validate(path.read_text()) )
    print("\n".join(problems) if problems else "Placeholder check passed")
    sys.exit(bool(problems))
