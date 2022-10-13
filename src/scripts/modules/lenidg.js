const chooseSwiper = document.querySelector('.swiper-choose')

const newsSwiper = new Swiper(chooseSwiper, {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 33,
  effect: 'slide',
  breakpoints: {
    320: {
      slidesPerView: 1.09,
      spaceBetween: 10
    },
    375: {
      slidesPerView: 1.07,
      spaceBetween: 10
    },
    891: {
      slidesPerView: 2,
      spaceBetween: 33
    }
  }
})
