// Mobile Menu Toggle Functionality
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Testimonials Horizontal Slider Functionality
function scrollTestimonials(direction) {
    const slider = document.getElementById('testimonial-slider');
    if (slider) {
        const scrollAmount = 380; // Card width + gap size
        slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
}

// Login Form Submit Alert Handler
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Connecting to secure authentication backend...');
    });
}

// Theme Switching Logic (System, Light, Dark)
const themeSelector = document.getElementById('theme-selector');
const mobileThemeSelector = document.getElementById('mobile-theme-selector');

function applyTheme(theme) {
    const root = document.documentElement;
    
    if (theme === 'dark') {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        // System Default
        localStorage.removeItem('theme');
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }
}

// Initialize theme on page load based on saved preference or system
const savedTheme = localStorage.getItem('theme') || 'system';
if (themeSelector) themeSelector.value = savedTheme;
if (mobileThemeSelector) mobileThemeSelector.value = savedTheme;
applyTheme(savedTheme);

// Event Listeners for Theme Dropdowns
if (themeSelector) {
    themeSelector.addEventListener('change', (e) => {
        applyTheme(e.target.value);
        if (mobileThemeSelector) mobileThemeSelector.value = e.target.value;
    });
}

if (mobileThemeSelector) {
    mobileThemeSelector.addEventListener('change', (e) => {
        applyTheme(e.target.value);
        if (themeSelector) themeSelector.value = e.target.value;
    });
}