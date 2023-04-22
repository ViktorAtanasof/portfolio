// MOBILE MENU
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
};

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
};

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    // when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
};

navLink.forEach((n) => n.addEventListener('click', linkAction));

// CHANGE HEADER'S BACKGROUND
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    header.classList.toggle('scroll-header', this.scrollY >= 80);
};

window.addEventListener('scroll', scrollHeader);

// SHOW SCROLL UP
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is greater than 350 viewport height, add the show-scroll class to the scroll-up class
    scrollUp.classList.toggle('show-scroll', this.scrollY >= 350);
};

window.addEventListener('scroll', scrollUp);

// ABOUT SECTION'S TABS
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        });

        target.classList.add('tab__active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });

        tab.classList.add('tab__active');
    });
});