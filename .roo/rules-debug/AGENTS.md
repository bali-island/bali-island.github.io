# AGENTS.md

This file provides debugging guidance to agents working with this repository.

## CSS Debugging Workflow
1. Create local debug folder: `mkdir -p debug/css`
2. Download production assets:
   ```
   wget -P debug/css https://bali-island.github.io/assets/css/theme-variables.css
   wget -P debug/css https://bali-island.github.io/assets/css/post.css
   ```
3. Use Chrome DevTools (port 9222) for remote debugging
4. Reference system info in `tmp/sysinfo.md` for network/port configurations

## Nginx Debugging
- Mount point: `/media/hakim/HDD/f-docker/my-web-server`
- Use `nginx -t` to test config changes
- Access logs via Docker container

## Theme Debugging
- Toggle between themes using `theme-switcher.js`
- Verify CSS variable propagation in DevTools
- Check console for theme switch errors