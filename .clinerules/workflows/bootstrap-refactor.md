---
file: bootstrap-refactor.md
type: Cline WORKFLOW 
---
## role: Senior Frontend Engineer (UI/UX Architect)

**details**:
- Replace Bootstrap 3 legacy grid with modern CSS Flexbox.
- Switch icons from FontAwesome to Material Design Icons (MDI).
- Implement the "5-line" subnav fix using max-height and native stacking.
- Maintain CSS variables (--vars) for all styling.
- Locale: en_EN.

# TASK:
## 1. Update `header.html` with this clean Flexbox structure:
~~~html
 <header id="l-header">
    <div class="container header-content">
        <div class="logo-section">
            <div class="brand">
                <h1>{{ site.name }}</h1>
            </div>
            <div class="shoutbox">
                {% for line in site.shout %}
                <p>{{ line }}</p>
                {% endfor %}
            </div>
        </div>
        <div class="navicon">
            <a href="javascript:void(0)"><span class="material-icons">menu</span></a>
        </div>
        <div class="navbar">
            <nav class="main-nav">
                <ul>
                    <li><a href=\"{{ '/' | relative_url }}\">HOME</a></li>
                    <li class=\"has-subnav\">
                        <ul class=\"subnav\">
                            <li class=\"subnav-trigger\">
                                <a href=\"javascript:void(0)\">POST <span class=\"material-icons\">expand_more</span></a>
                            </li>
                            <li><a href=\"{{ '/category' | relative_url }}\">CATEGORY</a></li>
                            <li><a href=\"{{ '/tag' | relative_url }}\">TAG</a></li>
                        </ul>
                    </li>
                    <li><a href=\"{{ '/series' | relative_url }}\">SERIES</a></li>
                    <li><a href=\"{{ '/about' | relative_url }}\">ABOUT</a></li>
                </ul>
            </nav>
            <div class=\"search-and-theme\">
                <div class=\"search\">
                    <form>
                        <div class=\"search-container\">
                            <input id=\"search-input\" name=\"search\" type=\"text\" placeholder=\"Search...\">
                            <button type=\"submit\" class=\"search-icon\"><span class=\"material-icons\">search</span></button>
                        </div>
                    </form>
                </div>
                <div class=\"theme-switcher\">
                    <button id=\"theme-toggle\" class=\"theme-toggle-button\"><span class=\"material-icons\">dark_mode</span></button>
                </div>
            </div>
        </div>
    </div>
</header>
~~~
## 2. Refactor _header.scss using this optimized logic:

~~~css
nav > ul > li { 
    overflow: visible; 
    position: relative; 
    display: flex; 
    align-items: center; 
}
.subnav { 
    max-height: 0; 
    overflow: hidden; 
    position: absolute; 
    top: 100%; 
    left: 0; 
    transition: max-height 0.3s ease; 
    background: var(--nav-bg); 
    min-width: 200px;
}
nav > ul > li:hover .subnav { 
    max-height: 500px; 
}
.subnav li { 
    position: static; 
    display: block; 
    width: 100%; 
    opacity: 1; 
    visibility: visible; 
}
/* Ensure logo-section and navbar use display: flex instead of floats */
.logo-section, .navbar { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
}
~~~

## Workflow:
1. **HTML Overhaul:** Replace the entire content of `header.html` with the provided Flexbox code.
2. **Icon Setup:** Ensure Material Icons CSS link is present in `head.html`.
3. **SASS Cleanup:** Delete all `z-index`, `float`, and `nth-child` delay blocks from `_header.scss`.
4. **Flex Implementation:** Apply `display: flex` to `.logo-section` and `.navbar` containers.
5. **Animation Fix:** Apply the `max-height` transition logic to `.subnav`.
6. **Validation:** Verify the dropdown overlays 'ABOUT' correctly without any z-index hacks.
