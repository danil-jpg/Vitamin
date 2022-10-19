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

  const collapseTriggerButton = document.querySelector('.shop-catalogue__btn')
  const elementsToShow = document.querySelectorAll('.shop-catalogue__card-wr:not(.mobile-375)')

  const collapseListTrigger = document.querySelector('.shop-catalogue__content .menu__item:first-of-type')
  const elemListToShow = document.querySelectorAll('.shop-catalogue__content .menu__item:not(:first-of-type)')

  console.log(collapseListTrigger, elemListToShow)

  collapseTriggerButton.addEventListener('click', () => {
    elementsToShow.forEach((item) => {
      item.classList.toggle('active')
    })
  })

  collapseListTrigger.addEventListener('click', () => {
    elemListToShow.forEach(item => {
      item.classList.toggle('active')
    })
  })
}
export default catalogue
