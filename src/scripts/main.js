import Swiper, { Navigation, Pagination } from 'swiper'
import burger from './modules/burger.js'
import { reviews, choose } from './modules/lending.js'
import quizPage from './modules/quiz.js'
import catalogue from './modules/catalogue.js'

window.addEventListener('DOMContentLoaded', () => {
  const cataloguePage = document.querySelector('.cataloguePage')
  const mainPage = document.querySelector('#mainPage')
  const quiz = document.querySelector('#quizPage')
  if (mainPage) {
    choose()
    reviews()
  }
  if (quiz) {
    quizPage()
  }
  if (cataloguePage) {
    catalogue()
  }

  burger()
})
