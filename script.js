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

// Auth Tab Switcher (Login / Signup) for login.html
function switchTab(tab) {
    const loginForm = document.getElementById('form-login');
    const signupForm = document.getElementById('form-signup');
    const tabLogin = document.getElementById('tab-login');
    const tabSignup = document.getElementById('tab-signup');

    if (loginForm && signupForm && tabLogin && tabSignup) {
        if (tab === 'login') {
            loginForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
            tabLogin.className = "flex-1 py-2.5 rounded-xl text-xs font-bold transition bg-emerald-600 text-white shadow-sm";
            tabSignup.className = "flex-1 py-2.5 rounded-xl text-xs font-bold transition text-gray-600 dark:text-gray-400 hover:text-gray-900";
        } else {
            signupForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
            tabSignup.className = "flex-1 py-2.5 rounded-xl text-xs font-bold transition bg-emerald-600 text-white shadow-sm";
            tabLogin.className = "flex-1 py-2.5 rounded-xl text-xs font-bold transition text-gray-600 dark:text-gray-400 hover:text-gray-900";
        }
    }
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
        localStorage.removeItem('theme');
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }
}

const savedTheme = localStorage.getItem('theme') || 'system';
if (themeSelector) themeSelector.value = savedTheme;
if (mobileThemeSelector) mobileThemeSelector.value = savedTheme;
applyTheme(savedTheme);

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
