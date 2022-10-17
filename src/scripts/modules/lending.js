// import slider from 'swiper'
// import Swiper from 'swiper'

export function choose () {

    const chooseSwiper = document.querySelector('.swiper-choose');
  
    const newsSwiper = new Swiper(chooseSwiper, {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 33,
        effect: "slide",
        breakpoints: {
            320: {
                slidesPerView: 1.09,
                spaceBetween: 10,
              },
            375: {
                slidesPerView: 1.07,
                spaceBetween: 10,
              },
            891: {
                slidesPerView: 2,
                spaceBetween: 33,
            },
        }
    });
  }
  

// import slider from 'swiper'
// import Swiper from 'swiper'

export function reviews (){

    const reviewsSwiper = document.querySelector('.reviews-swiper');
    
    const reviews = new Swiper(reviewsSwiper, {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 32,
        breakpoints: {
            320: {
                slidesPerView: 1.065,
                spaceBetween: 10,
              },
            375: {
            slidesPerView: 1.06,
            spaceBetween: 10,
            },
            912: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1460: {
            slidesPerView: 3,
            spaceBetween: 32,
            },
        }
    });
    }
    