# AGENTS.md

This file provides CSS/refactoring guidance to agents.

## CSS Rules
- Use CSS variables (--vars) for all colors
- Never hardcode color values
- Reference `.clinerules/workflows/bootstrap-refactor.md` for legacy patterns
- Track z-index usage in `_header.scss`

## Refactoring Quality
1. Weekly audit of CSS variables
2. Verify removal of Bootstrap artifacts
3. Check for inline style overrides
4. Monitor transition/animation performance

## Tracking Process
```mermaid
flowchart TD
    A[Start Refactor] --> B{Check bootstrap-refactor.md}
    B -->|Yes| C[Implement Changes]
    B -->|No| D[Create New Rule]
    C --> E[Verify CSS Vars]
    E --> F[Test Cross-Browser]
    F --> G[Update Documentation]