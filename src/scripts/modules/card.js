function card () {
  const defaultLogo = document.querySelector('.header__logo-icon img')
  const defaultBag = document.querySelector('.header__cart-icon')
  const defaultBurger = document.querySelector('.header__account-icon_spec')

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
  console.log(defaultBurger)

  defaultLogo.setAttribute('src', 'img/cardPage/white-logo.svg')
  defaultBurger.setAttribute('src', 'img/cardPage/burger-white.svg')

  if (window.innerWidth <= 1439) {
    defaultBag.setAttribute('src', 'img/cardPage/bag.svg')
  }
}

export default card
