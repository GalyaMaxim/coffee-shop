const headerBurger = document.body.querySelector(".header__menu-burger");
const headerMenu = document.body.querySelector(".header__menu-list");

headerBurger.addEventListener("click", () => {
  headerMenu.classList.toggle("header__menu-list--active");

  document.body.classList.toggle("overflow-hidden");
});


const swiper = new Swiper(".swiper", {
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
  });





