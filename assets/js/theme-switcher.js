// Theme switcher script
document.addEventListener('DOMContentLoaded', () => {
    let themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        // Check for saved theme preference or default to system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'light') {
            document.body.setAttribute('data-theme', 'light');
            themeToggle.checked = false;
        } else if (savedTheme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            themeToggle.checked = true;
        } else if (systemPrefersDark) {
            document.body.setAttribute('data-theme', 'dark');
            themeToggle.checked = true;
        } else {
            document.body.setAttribute('data-theme', 'light');
            themeToggle.checked = false;
        }
        
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                document.body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        });
    } else {
        console.warn('Theme toggle element not found');
    }
});
