function checkout (){
    const checkoutClick = document.querySelector('.checkout-total-text');
    const checkoutOrder = document.querySelector('.checkout-order');
    const checkoutArrow = document.querySelector('.checkout-total-text');
    
    checkoutClick.addEventListener('click', () => {
        checkoutOrder.classList.toggle('active')
        checkoutArrow.classList.toggle('active')
    })
}

export default checkout