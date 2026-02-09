# Jekyll & Chrome-DevTools Specialized Rules

## 1. Environment Context
- **Architecture:** Jekyll (Liquid templates + SASS).
- **Source vs Output:** Source files are in `_includes/`, `_layouts/`, and `_sass/`. Output is rendered in Chrome via `http://localhost:4000` (or GitHub Pages).
- **Tooling:** Use `chrome-devtools` MCP via port 9222 to verify the rendered DOM before editing source files.

## 2. Debugging Workflow (Mandatory)
Before modifying any Navbar or UI component:
1. **Locate:** Find the source template (e.g., `_includes/navbar.html`).
2. **Inspect:** Use `chrome-devtools:list_pages` and `evaluate_script` to get the **computed styles** and actual class names from the browser.
3. **Compare:** Verify if a class is hardcoded in HTML or generated via Liquid (e.g., `{% if page.url == ... %}`).
4. **Style Trace:** If changing CSS, locate the specific SASS partial in `_sass/` instead of editing the main CSS file.

## 3. Tool-Specific Instructions
- **list_pages:** Always use this first to grab the `targetId`.
- **take_screenshot:** Use this to verify layout shifts on the Intel HD 500 (Celeron J3455) after CSS changes.
- **evaluate_script:** Use to check element visibility: `document.querySelector('.navbar').offsetHeight`.

## 4. Jekyll Constraints
- Never edit files in `_site/` (it is overwritten on build).
- When editing `_config.yml`, remember that a Jekyll restart might be required (though `jekyll serve --livereload` usually handles it).
- Liquid logic issues (like missing menu items) must be debugged by checking `_data/` files or Front Matter.

## 5. Chrome Launch Persistence
If MCP fails to connect:
- Check if Chrome is running with `--remote-debugging-port=9222`.
- Run `curl -s http://127.0.0.1:9222/json` to verify the socket.