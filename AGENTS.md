# AGENTS.md

This file serves as the central reference for all mode-specific agent rules in this repository. Each mode has its own dedicated AGENTS.md file with specialized guidance.

## Available Modes

### 💻 Code Mode
- **File**: [`.roo/rules-code/AGENTS.md`](.roo/rules-code/AGENTS.md)
- **Purpose**: General code development and implementation
- **Key Rules**:
  - Deploy to https://bali-island.github.io
  - Use `git push origin main` for deployment
  - Test via browser at production URL
  - Avoid local custom servers

### 🪲 Debug Mode
- **File**: [`.roo/rules-debug/AGENTS.md`](.roo/rules-debug/AGENTS.md)
- **Purpose**: Systematic debugging and troubleshooting
- **Key Rules**:
  - CSS debugging workflow with local debug folder
  - Chrome DevTools remote debugging (port 9222)
  - Nginx configuration testing
  - Theme debugging with `theme-switcher.js`

### ❓ Ask Mode
- **File**: [`.roo/rules-ask/AGENTS.md`](.roo/rules-ask/AGENTS.md)
- **Purpose**: Explanations, documentation, and recommendations
- **Key Rules**:
  - CSS variable usage (--vars) for all colors
  - Reference `bootstrap-refactor.md` for legacy patterns
  - Track z-index in `_header.scss`
  - Weekly CSS variable audits

### 🏗️ Architect Mode
- **File**: [`.roo/rules-architect/AGENTS.md`](.roo/rules-architect/AGENTS.md)
- **Purpose**: Planning, design, and system architecture
- **Key Rules**:
  - Production URL: https://bali-island.github.io
  - GitHub Pages deployment only
  - No local servers except Nginx
  - Network architecture with Tailscale VPN

## General Guidelines

- Always consult the mode-specific AGENTS.md file when working in that mode
- Follow the deployment workflow consistently across all modes
- Use browser DevTools for frontend debugging
- Reference `tmp/sysinfo.md` for network/port configurations
- Verify all changes by testing at https://bali-island.github.io

## Mode Selection

Choose the appropriate mode based on your task:
- **Code**: Writing, modifying, or refactoring code
- **Debug**: Troubleshooting errors or investigating issues
- **Ask**: Providing explanations or recommendations
- **Architect**: Planning, designing, or strategizing before implementation