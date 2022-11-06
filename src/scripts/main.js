import Swiper, { Navigation, Pagination } from 'swiper'
import burger from './modules/burger.js'
import { reviews, choose } from './modules/lending.js'
import quizPage from './modules/quiz.js'
import catalogue from './modules/catalogue.js'
import card from './modules/card.js'
import checkout from './modules/checkout.js'
import cart from './modules/bag.js'
import singUpTab from './modules/singUp.js'
import profile from './modules/profile.js'

window.addEventListener('DOMContentLoaded', () => {
  const cataloguePage = document.querySelector('.cataloguePage')
  const mainPage = document.querySelector('#mainPage')
  const quiz = document.querySelector('#quizPage')
  const cardPage1 = document.querySelector('.cardPage1')
  const checkoutPage = document.querySelector('#checkoutPage')
  const singUpPage = document.querySelector('#singUpPage')
  const profilePage = document.querySelector('.profileHTML')
  const packPage = document.querySelector('#packPge')

  if (mainPage) {
    choose()
    reviews()
    // burger()
    // cart()
  }
  if (quiz) {
    quizPage()
  }
  if (cataloguePage) {
    catalogue()
    reviews()
    burger()
  }
  if (cardPage1) {
    card()
    burger()
  }
  if (checkoutPage) {
    burger()
    checkout()
    cart()
  }
  if (singUpPage) {
    singUpTab()
    cart()
  }
  if (profilePage) {
    burger()
    profile()
  }
  if (packPage) {
    burger()
    cart()
  }
})
