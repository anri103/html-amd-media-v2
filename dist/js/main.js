//////////////////////////////////////////////////////////////////
// [ Fixed headers ]

window.addEventListener('scroll', function() {
    const fixedHeader = document.querySelector('.header-fixed');
    // const mainHeader = document.querySelector('.main-header');
    
    if (window.scrollY > 100) {
        fixedHeader.classList.add('js-fixed');
    } else {
        fixedHeader.classList.remove('js-fixed');
    }
});

//////////////////////////////////////////////////////////////////
// [ swiper ]

window.onload = () => {

    // swiperPartners
    const swiperPartners = document.querySelector('.swiperPartners');
    if (swiperPartners) {
        var swiper = new Swiper(swiperPartners, {
            slidesPerView: 'auto',
            spaceBetween: 0,
            loop: true,
            speed: 5000,
            // centeredSlides: true,
            allowTouchMove: false,
            autoplay: {
                delay: 1,
                disableOnInteraction: false
            }
        });
    }
}