// Theme switcher script
let themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
    }
});