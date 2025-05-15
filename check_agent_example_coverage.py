#!/usr/bin/env python
"""
check_agent_example_coverage.py
────────────────────────────────
Scan every .py file beneath the current directory (or the paths you provide)
and report which public methods of livekit.agents.voice.Agent and
AgentSession are already exercised or overridden in the example code.

USAGE
=====

    # Scan the whole repo
    python check_agent_example_coverage.py

    # Or cherry-pick folders
    python check_agent_example_coverage.py basics/ pipeline-stt/

The report looks like:

Agent (7/9 methods used)
  ✔ generate_reply
  ✔ on_enter
  ✘ on_exit
  …

AgentSession (5/8 methods used)
  ✔ start
  ✔ stop
  ✘ reconnect
  …

"""

from __future__ import annotations

import inspect
import sys
from pathlib import Path
from collections import defaultdict
from livekit.agents.voice import Agent, AgentSession


EXCLUDE_DIRS = {
    ".git",
    ".hg",
    ".svn",
    "__pycache__",
    "venv",
    ".venv",
    "env",
    ".env",
    "build",
    "dist",
}

def _public_methods(cls) -> set[str]:
    return {
        name
        for name, obj in inspect.getmembers(cls, inspect.isfunction)
        if not name.startswith("_")
    }


AGENT_METHODS = _public_methods(Agent)
SESSION_METHODS = _public_methods(AgentSession)

def _scan(paths: list[Path]):
    """Return a dict {'Agent': {m: bool}, 'AgentSession': {m: bool}}."""
    found = {
        "Agent": defaultdict(bool, {m: False for m in AGENT_METHODS}),
        "AgentSession": defaultdict(bool, {m: False for m in SESSION_METHODS}),
    }

    for base in paths:
        for py in base.rglob("*.py"):
            if any(part in EXCLUDE_DIRS for part in py.parts):
                continue

            try:
                code = py.read_text(encoding="utf-8", errors="ignore")
            except Exception:
                continue

            for m in AGENT_METHODS:
                call_pat = f".{m}("
                def_pat = f"def {m}("
                if call_pat in code or def_pat in code:
                    found["Agent"][m] = True
            for m in SESSION_METHODS:
                call_pat = f".{m}("
                def_pat = f"def {m}("
                if call_pat in code or def_pat in code:
                    found["AgentSession"][m] = True
    return found

def _report(found: dict[str, dict[str, bool]]):
    for cls, methods in found.items():
        total = len(methods)
        used = sum(methods.values())
        print(f"\n{cls} ({used}/{total} methods used)")
        for m in sorted(methods):
            tick = "✔" if methods[m] else "✘"
            print(f"  {tick} {m}")

if __name__ == "__main__":
    bases = [Path(p) for p in (sys.argv[1:] or [Path.cwd()])]
    coverage = _scan(bases)
    _report(coverage)