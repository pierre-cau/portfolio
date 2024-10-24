document.addEventListener('DOMContentLoaded', function() {
    // Menu Sticky
    const menu = document.querySelector(".Menu");
    const closeMenu = document.querySelectorAll(".Navigation"); // Use querySelectorAll to get a NodeList
    const lang_button_container = document.querySelector(".language-switcher");
    const removeAct = document.querySelector(".Menu");

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
            } else {
                element.classList.remove(animationClass);
            }
        });
    }

    window.addEventListener('scroll', debounce(function() {
        animeScroll();
    }, 200));
    
    animeScroll();
});


// script.js
function setLanguage(lang) {
    // Set the language globally
    window.lang = lang;
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        if (element.getAttribute('data-lang') === lang) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}

// Set default language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('en'); // Default to English
});

// Print the choice of the CV language once the download button is clicked
function toggleCVButtons() {
    console.log('toggleCVButtons'); 
    const cvButtons = document.getElementById('cv-buttons');
    cvButtons.style.display = cvButtons.style.display === 'none' ? 'block' : 'none';
}

// Open the CV in a new tab
function openCV(lang) {
    window.open(`./documents/cv-${lang}.pdf`, '_blank');
    // Close the CV buttons
    toggleCVButtons();
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.Photo').addEventListener('click', function() {
        const url = "scan_me.html";
        window.open(url, '_blank');
    });
});