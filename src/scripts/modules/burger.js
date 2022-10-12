function burger () {
  const menuTrigger = document.querySelector('.burger-account')
  const menu = document.querySelector('.burger-menu__wrapper')
  const notMenu = document.querySelector('.header__container')
  const menuClose = document.querySelector('.burger-close')
  const shopTrigger = document.querySelectorAll('.shop-trigger *')
  const shopMenu = document.querySelector('.shop-menu__wrapper')
  const returnShopArrow = document.querySelector('.shop-return-arrow')
  const infoTrigger = document.querySelectorAll('.info-trigger *')
  const infoMenu = document.querySelector('.info-menu__wrapper')
  const returnInfoArrow = document.querySelector('.info-return-arrow')

  menuTrigger.addEventListener('click', () => {
    menu.classList.toggle('active')
    notMenu.classList.toggle('active')
  })

  menuClose.addEventListener('click', () => {
    menu.classList.toggle('active')
    notMenu.classList.toggle('active')
  })

  shopTrigger.forEach(item => {
    item.addEventListener('click', () => {
      shopMenu.classList.toggle('active')
      // notMenu.classList.toggle('active')
    })
  })

  infoTrigger.forEach(item => {
    item.addEventListener('click', () => {
      infoMenu.classList.toggle('active')
    })
  })

  returnShopArrow.addEventListener('click', () => {
    shopMenu.classList.toggle('active')
  })

  returnInfoArrow.addEventListener('click', () => {
    infoMenu.classList.toggle('active')
  })
}

export default burger
