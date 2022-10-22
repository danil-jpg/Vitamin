function cart () {
  price('.bag__card-wr_1')
  price('.bag__card-wr_2')

  const bagTrigger = document.querySelector('.header__cart-icon')
  const bagBlock = document.querySelector('.bag')
  const close = document.querySelector('.cross_big')
  const htmlElem = document.querySelector('html')

  bagTrigger.addEventListener('click', () => {
    bagBlock.classList.toggle('active')
    htmlElem.style.overflowY = 'hidden'
  })

  // При клике на триггер корзине добавляется класс эктив,скролл убирается

  close.addEventListener('click', () => {
    bagBlock.classList.toggle('active')
    htmlElem.style.overflowY = 'visible'
  })

  // При клике на крестик класс эктив убирается,скролл появляется

  function price (parentBlock) {
    const minus = document.querySelector(`${parentBlock} .bag__card-center_minus`)
    const plus = document.querySelector(`${parentBlock} .bag__card-center_plus`)
    const counterValue = document.querySelector(`${parentBlock} .bag__card-center-count`)
    const sum = document.querySelector(`${parentBlock} .bag__card-center-sum`)
    let counter = 1

    counterValue.textContent = counter

    minus.addEventListener('click', () => {
      counter -= 1
      counterValue.textContent = counter
      sum.textContent = `$${(counter * 84).toFixed(2)}`

      if (counter <= 0) {
        counter = 0
        counterValue.textContent = counter
        sum.textContent = `$${(counter * 84).toFixed(2)}`
      }
    })

    plus.addEventListener('click', () => {
      counter += 1
      counterValue.textContent = counter
      sum.textContent = `$${(counter * 84).toFixed(2)}`
    })
  }

  // Функция прайс,отвечает не за бургер
}

export default cart
