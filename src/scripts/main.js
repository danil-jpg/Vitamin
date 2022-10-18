import Swiper, { Navigation, Pagination } from 'swiper'
import burger from './modules/burger.js'
import { reviews, choose } from './modules/lending.js'
import quizPage from './modules/quiz.js'
import catalogue from './modules/catalogue.js'
import card from './modules/card.js'

window.addEventListener('DOMContentLoaded', () => {
  const cataloguePage = document.querySelector('.cataloguePage')
  const mainPage = document.querySelector('#mainPage')
  const quiz = document.querySelector('#quizPage')
  const cardPage1 = document.querySelector('.cardPage1')

  if (mainPage) {
    choose()
    reviews()
  }
  if (quiz) {
    quizPage()
  }
  if (cataloguePage) {
    catalogue()
    reviews()
  }
  if (cardPage1) {
    card()
  }

  burger()
})
