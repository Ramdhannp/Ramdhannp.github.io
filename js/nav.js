const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const navShadow = document.querySelector('nav');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

window.addEventListener('scroll', function () {
    scrollposition = window.scrollY;

    if (scrollposition >= 60) {
        navShadow.classList.add('nav-white');
    } else if (scrollposition <= 60) {
        navShadow.classList.remove('nav-white');
    }
})