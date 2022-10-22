function singUpTab (){
    const singUp = document.querySelector('.singUp__block-button')
    const singUpBtnLeft = document.querySelector('.singUp__regular-btn')
    const singUpBtnRight = document.querySelector('.singUp__wholesale-btn')
    const tabRegular = document.querySelector('.singUp-regular')
    const tabWholesale = document.querySelector('.singUp-wholesale')
    // menuTrigger.addEventListener('click', () => {
    //     singUpBtnLeft.classList.toggle('active')
    //     singUpBtnRight.classList.toggle('active')
    //   })
    singUp.addEventListener('click', () => {
        const activeSingUp = singUpBtnLeft.classList.toggle('active')
        const activeSingUpRight = singUpBtnRight.classList.toggle('active')
        if(activeSingUp){
            tabRegular.classList.add('active')
            tabWholesale.classList.remove('active')
        }
        else if(activeSingUpRight){
            tabWholesale.classList.add('active')
            tabRegular.classList.remove('active')
        }
    })
}
export default singUpTab