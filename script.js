document.addEventListener('DOMContentLoaded', function() {
    // Initialisation de la langue
    window.lang = 'en';

    // Menu Sticky
    const menu = document.querySelector(".Menu");
    const closeMenu = document.querySelectorAll(".Navigation");
    const lang_button_container = document.querySelector(".language-switcher");
    const removeAct = document.querySelector(".Menu");
    
    // Appliquer la langue après que les éléments DOM sont disponibles
    setLanguage('en');

    function menu_sticky() {
        const scroll = window.scrollY;
        if (scroll > 0) {
            menu.classList.add("sticky");
            closeMenu.forEach(function(element) {
                element.classList.remove("active");
            });
            lang_button_container.classList.remove("upward");
        } else {
            menu.classList.remove("sticky");
            removeAct.classList.remove("act");
        }
    }

    window.addEventListener('scroll', function() {
        menu_sticky();
    });

    // Debounce of Lodash
    const debounce = function(func, wait, immediate) {
        let timeout;
        return function(...args) {
            const context = this;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    // Animate On Scroll
    const target = document.querySelectorAll('[data-anime]');
    const animationClass = 'animate';

    function animeScroll() {
        const windowTop = window.scrollY + (window.innerHeight * 1);
        target.forEach(function(element) {
            if (windowTop > element.offsetTop) {
                element.classList.add(animationClass);
                // Ajouter la classe animate aux parents pour les pseudo-éléments
                if (element.classList.contains('Text') || 
                    element.classList.contains('Image') || 
                    element.classList.contains('Content')) {
                    element.classList.add(animationClass);
                }
                // Ajouter la classe aux sections Home
                const homeSection = element.closest('.Home');
                if (homeSection) {
                    homeSection.classList.add(animationClass);
                }
            } else {
                element.classList.remove(animationClass);
                // Retirer la classe animate des parents
                if (element.classList.contains('Text') || 
                    element.classList.contains('Image') || 
                    element.classList.contains('Content')) {
                    element.classList.remove(animationClass);
                }
            }
        });
    }

    window.addEventListener('scroll', debounce(function() {
        animeScroll();
    }, 100));
    
    animeScroll();

    // Close language menu when clicking outside
    document.addEventListener('click', function(e) {
        const languageMenu = document.querySelector('.language-menu');
        if (!e.target.closest('.language-switcher')) {
            languageMenu.classList.remove('show');
        }
    });

    // Photo click handler
    document.querySelector('.Photo').addEventListener('click', function() {
        window.open("scan_me.html", '_blank');
    });
});

// Language Switcher
function toggleLanguageMenu() {
    const menu = document.querySelector('.language-menu');
    menu.classList.toggle('show');
}

function setLanguage(lang) {
    window.lang = lang;
    const elements = document.querySelectorAll('[data-lang]');
    
    elements.forEach(element => {
        if (element.getAttribute('data-lang') === lang) {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
    });

    // Fermer le menu après la sélection
    const menu = document.querySelector('.language-menu');
    if (menu) { // Vérifier si le menu existe avant d'accéder à classList
        menu.classList.remove('show');
    }
}

// CV Management - Modal
function openCVModal() {
    const modal = document.getElementById('cvModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeCVModal() {
    const modal = document.getElementById('cvModal');
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restore scrolling
}

function downloadCV(lang) {
    window.open(`./documents/cv-${lang}.pdf`, '_blank');
    closeCVModal();
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCVModal();
    }
});

// Mobile Menu
function menuMobile() {
    const mobile = document.querySelectorAll(".Navigation");
    const menuAct = document.querySelector(".Menu");
    const lang_button_container = document.querySelector(".language-switcher");
    const lang = window.lang;

    mobile.forEach(function(element) {
        const target_lang = element.getAttribute("data-lang");
        if (lang === target_lang) {
            element.classList.toggle("active");
        }
    });
    menuAct.classList.toggle("act");
    lang_button_container.classList.toggle("upward");
}