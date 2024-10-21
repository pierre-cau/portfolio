// Menu Sticky
const menu = document.querySelector(".Menu");
const closeMenu = document.querySelectorAll(".Navigation"); // Use querySelectorAll to get a NodeList
const removeAct = document.querySelector(".Menu");

function menu_sticky() {
    console.log("Menu Sticky");
    const scroll = window.scrollY;
    if (scroll > 0) {
        menu.classList.add("sticky");
        closeMenu.forEach(function(element) {
            element.classList.remove("active");
        });
    } else {
        menu.classList.remove("sticky");
        removeAct.classList.remove("act");
    }
}

window.addEventListener('scroll', function() {
    menu_sticky();
});

// Menu Mobile
function menuMobile() {
    console.log("Menu Mobile");
    const mobile = document.querySelectorAll(".Navigation"); // Use querySelectorAll to get a NodeList
    const menuAct = document.querySelector(".Menu");

    mobile.forEach(function(element) {element.classList.toggle("active");});
    menuAct.classList.toggle("act");
}

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


// script.js
function setLanguage(lang) {
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