//Поисковик
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector(".header-nav__btn-icon").addEventListener('click', function() {
    // document.querySelector(".header-nav__btn-search").classList.toggle("active");
    document.querySelector(".header-nav__btn-input").classList.toggle("active");
    document.querySelector(".header-nav__btn-icon").classList.toggle("active");
    document.querySelector("input[type='text']").focus();
  });
});


