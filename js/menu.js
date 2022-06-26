const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-nav__list");
const navList = document.querySelector(".header-menu__list");

hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navList.classList.toggle("active");
})

const menu = document.querySelector(".header-menu-music__tablet");
const menuMusic = document.querySelector(".header-menu-music");
const menuMusicIcon = document.querySelector(".header-menu-music__tablet-icon");


menu.addEventListener("click", () =>{
  menuMusic.classList.toggle("active");
  menuMusicIcon.classList.toggle("active");
})