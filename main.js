const menu_btn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menu_nav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
let showMenu = false;

menu_btn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        hamburger.classList.add('open');
        nav.classList.add('open');
        menu_nav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        showMenu = true;
        
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menu_nav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'))

        showMenu = false;
    }
}