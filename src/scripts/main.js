import Swiper, { Navigation, Pagination } from 'swiper'
import burger from './modules/burger.js'
import './modules/lenidg.js'
import catalogue from './modules/catalogue.js'
import './modules/reviews.js'

window.addEventListener('DOMContentLoaded', () => {
  const cataloguePage = document.querySelector('.cataloguePage')

  if (cataloguePage) {
    catalogue()
  }

  burger()
})
