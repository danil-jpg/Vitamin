function card () {
  const defaultLogo = document.querySelector('.header__logo-icon img')

  const minusBtn = document.querySelector('.card__counter-left')
  const plusBtn = document.querySelector('.card__counter-right')
  const counterBlock = document.querySelector('.card__counter-num')
  const priceBlock = document.querySelector('.card__border-block-bottom_text')

  let counter = 1

  minusBtn.addEventListener('click', () => {
    counter = counter - 1
    counterBlock.textContent = counter
    priceBlock.textContent = counter

    if (counter <= 0) {
      counter = 0
      counterBlock.textContent = counter
      priceBlock.textContent = `$${(counter * 61.98).toFixed(2)}`
    }
  })

  plusBtn.addEventListener('click', () => {
    counter = counter + 1
    counterBlock.textContent = counter
    priceBlock.textContent = `$${(counter * 61.98).toFixed(2)}`
  })

  defaultLogo.setAttribute('src', 'img/cardPage/white-logo.svg')
}

export default card
