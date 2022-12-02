let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu');
let close = document.querySelector('.close');

burger.addEventListener('click', () => {
 menu.classList.add('active');
})

close.addEventListener('click', () => {
 menu.classList.remove('active');
})

$(document).ready(function () {
 $("#form").change(function () {
  $('.submit').css("background", '#1d70b7')
  $('.submit').removeAttr("disabled")
 });
});

$(document).ready(function () {
 $("#form-2").change(function () {
  $('.submit-2').css("background", '#1d70b7')
  $('.submit-2').removeAttr("disabled")
 });
});