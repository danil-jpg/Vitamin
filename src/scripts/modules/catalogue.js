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
    speed: 700
  })
}
export default catalogue
