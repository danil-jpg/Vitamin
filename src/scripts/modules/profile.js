function profile () {
  const titlesList = document.querySelectorAll('.profile__item a')
  const preChosenTab = document.querySelector('.tabs-block_chosen')
  const elemToHide = document.querySelectorAll('.profile__list *:not(.profile__title)')
  const elemToShow = document.querySelector('.profile__title')
  const unsubscribeBtn = document.querySelectorAll('.subscriptions__card-btn')
  const profileCheckoutBtn = document.querySelector('.checkout-form__profile-btn')
  const popUp = document.querySelectorAll('.pop-up')
  const itemTogglers = document.querySelectorAll('.orders__block-top-text-wr')
  const orderArrow = document.querySelectorAll('.orders__bottom-text')

  titlesList.forEach(item => {
    item.addEventListener('click', (e) => {
      preChosenTab.classList.remove('tabs-block_chosen')
      titlesList.forEach(item => {
        item.classList.remove('profile__title')
        elemToShow.classList.remove('profile__title')
      })
      e.target.classList.add('profile__title')
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
  })

  if (window.innerWidth <= 1439) {
    elemToHide.forEach(item => {
      item.classList.toggle('active')
    })

    elemToShow.addEventListener('click', () => {
      elemToHide.forEach(item => {
        item.classList.toggle('active')
      })
    })

    collapseCard(0)
    collapseCard(1)
  }

  function collapseCard (i) {
    itemTogglers[i].addEventListener('click', () => {
      const elemsToHide2 = document.querySelectorAll(`.orders__block-wr:nth-of-type(${i + 1}) > *:not(.orders__block-top-text-wr)`)
      console.log(i)
      elemsToHide2.forEach(item => {
        item.classList.toggle('order-collapse')
        orderArrow[i].classList.toggle('order-rotate-arrow')
      })
    })
  }

  for (let i = 1; i <= 3; i++) {
    hideCard(i, i)
  }

  function hideCard (num, i) {
    unsubscribeBtn[i - 1]
      .addEventListener('click', () => {
        const parentCard = document.querySelector(`.subscriptions__card-wr:nth-of-type(${num})`)
        parentCard.classList.add('active')
      })
  }
  // ==========================================================
  profileCheckoutBtn.addEventListener('click', () => {
    popUp.classList.toggle('active')
    setTimeout(function() {
      popUp.classList.remove('active');
    }, 1500);
  })

  // ==========================================================
}

export default profile
