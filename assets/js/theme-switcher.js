// Theme switcher script
document.addEventListener('DOMContentLoaded', () => {
    let themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        // Check for saved theme preference or default to system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const icon = themeToggle.querySelector('span.material-icons');

        // Apply color scheme from config (sys-ui, linux, custom)
        const colorScheme = 'sys-ui'; // This would be injected by Jekyll from _config.yml
        document.body.setAttribute('data-color-scheme', colorScheme);
        
        const setIcon = (theme) => {
            if (theme === 'dark') {
                // If current theme is dark, button shows sun (to switch to light)
                icon.textContent = 'light_mode';
            } else {
                // If current theme is light, button shows moon (to switch to dark)
                icon.textContent = 'dark_mode';
            }
        };

        if (savedTheme === 'light') {
            document.body.setAttribute('data-theme', 'light');
            setIcon('light');
        } else if (savedTheme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            setIcon('dark');
        } else if (systemPrefersDark) {
            document.body.setAttribute('data-theme', 'dark');
            setIcon('dark');
        } else {
            document.body.setAttribute('data-theme', 'light');
            setIcon('light');
        }

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            
            if (currentTheme === 'dark') {
                document.body.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                setIcon('light');
            } else {
                document.body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                setIcon('dark');
            }
        });
    } else {
        console.warn('Theme toggle element not found');
    }
});
