import Swiper, { Navigation, Pagination } from 'swiper'
import burger from './modules/burger.js';
import {reviews , choose} from './modules/lending.js';
import quizPage from './modules/quiz.js'

window.addEventListener('DOMContentLoaded', () => {
    const mainPage = document.querySelector('#mainPage')
    const quiz = document.querySelector('#quizPage')
    if (mainPage) {
        burger() 
        choose()
        reviews()
    }
    if (quiz) {
        quizPage()
    }
})

