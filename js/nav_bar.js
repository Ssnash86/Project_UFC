

let menuButton = document.querySelector('#menu-button');
let menu = document.querySelector('#menu');

// show or hide
menuButton.addEventListener('click',function(){
  menu.classList.toggle('show-menu');
  menuButton.classList.toggle('close');
});