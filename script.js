var swiper = new Swiper(".container-content", {
  spaceBetween: 0.1,
  slidesPerView: 1,
  centeredSlides: true,
  grabCursor: "true",
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    380: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
