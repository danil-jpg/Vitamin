import slider from 'swiper'
import Swiper, { Navigation, Pagination } from 'swiper'

const reviewsSwiper = document.querySelector('.reviews-swiper')

const reviews = new Swiper(reviewsSwiper, {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 32,
  breakpoints: {
    320: {
      slidesPerView: 1.065,
      spaceBetween: 10
    },
    375: {
      slidesPerView: 1.06,
      spaceBetween: 10
    },
    912: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1460: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  }
})
