let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu');
let close = document.querySelector('.close');

burger.addEventListener('click', () => {
 menu.classList.add('active');
})

close.addEventListener('click', () => {
 menu.classList.remove('active');
})