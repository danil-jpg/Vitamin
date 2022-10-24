function profile () {
  const elemToHide = document.querySelectorAll('.profile__list *:not(.profile__title)')
  const elemToShow = document.querySelector('.profile__title')
  const unsubscribeBtn = document.querySelectorAll('.subscriptions__card-btn')

  if (window.innerWidth <= 1439) {
    elemToHide.forEach(item => {
      item.classList.toggle('active')
    })

    elemToShow.addEventListener('click', () => {
      elemToHide.forEach(item => {
        item.classList.toggle('active')
      })
      elemToShow.classList.toggle('active1')
    })
  }

  for (let i = 1; i <= 3; i++) {
    hideCard(i, i)
  }

  function hideCard (num, i) {
    unsubscribeBtn[i - 1]
      .addEventListener('click', () => {
        const parentCard = document.querySelector(`.subscriptions__card-wr:nth-of-type(${num})`)
        console.log(parentCard)
        parentCard.classList.add('active')
      })
  }
}

export default profile
