function profile () {
  const elemToHide = document.querySelectorAll('.profile__list *:not(.profile__title)')
  const elemToShow = document.querySelector('.profile__title')

  console.log(elemToHide, elemToShow)

  if (window.innerWidth <= 1439) {
    elemToHide.forEach(item => {
      item.classList.toggle('active')
    })
  }
  elemToShow.addEventListener('click', () => {
    elemToHide.forEach(item => {
      item.classList.toggle('active')
    })
    elemToShow.classList.toggle('active1')
  })
}

export default profile
