// Theme switcher script
document.addEventListener('DOMContentLoaded', () => {
    let themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        // Check for saved theme preference or default to system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const icon = themeToggle.querySelector('i');
        
        if (savedTheme === 'light') {
            document.body.setAttribute('data-theme', 'light');
            icon.classList.remove('fa-moon-o');
            icon.classList.add('fa-sun-o');
        } else if (savedTheme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            icon.classList.remove('fa-sun-o');
            icon.classList.add('fa-moon-o');
        } else if (systemPrefersDark) {
            document.body.setAttribute('data-theme', 'dark');
            icon.classList.remove('fa-sun-o');
            icon.classList.add('fa-moon-o');
        } else {
            document.body.setAttribute('data-theme', 'light');
            icon.classList.remove('fa-moon-o');
            icon.classList.add('fa-sun-o');
        }
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            
            if (currentTheme === 'dark') {
                document.body.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                icon.classList.remove('fa-moon-o');
                icon.classList.add('fa-sun-o');
            } else {
                document.body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                icon.classList.remove('fa-sun-o');
                icon.classList.add('fa-moon-o');
            }
        });
    } else {
        console.warn('Theme toggle element not found');
    }
});
