import slider from 'swiper'
import Swiper, { Navigation, Pagination } from 'swiper'

function catalogue () {
  const swiper = new Swiper('.swiper-catalogue', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '.swiper-catalogue-button-next',
      prevEl: '.swiper-catalogue-button-prev'
    },
    speed: 700,
    breakpoints: {
      481: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        modules: [Navigation, Pagination],
        navigation: {
          nextEl: '.swiper-catalogue-button-next',
          prevEl: '.swiper-catalogue-button-prev'
        }
      },
      1: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        modules: [Pagination],
        pagination: {
          el: '.swiper-catalogue-pagination',
          type: 'bullets'
        }
      }
    }
  })
}
export default catalogue
