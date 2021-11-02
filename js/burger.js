const burger = document.getElementById('navToggle');
const sidebar = document.getElementById('sidebar');
const page = document.getElementById('page');
const body = document.body;
const element = document.querySelectorAll('.nav__list--mobile > .nav__item > .nav__link');

burger.addEventListener('click', event => {
    if( body.classList.contains('show-sidebar') ) {
        closeSidebar();
    } else {
        showSidebar();
    }
});

function showSidebar() {
    const mask = document.createElement('div');
    mask.classList.add('page__mask');
    mask.addEventListener('click', closeSidebar);
    // nav_link.addEventListener('click', closeSidebar());
    page.appendChild(mask);
    
    body.classList.add('show-sidebar');
}

function closeSidebar() {
    body.classList.remove('show-sidebar');
    document.querySelector('.page__mask').remove();
}

for(let elem of element){
    elem.addEventListener('click', closeSidebar);
}