//////////////////////////////////////////////////////////////////
// [ Fixed headers ]

window.addEventListener('scroll', function() {
    const fixedHeader = document.querySelector('.fixed-header');
    const mainHeader = document.querySelector('.main-header');
    
    if (window.scrollY > 100) {
        mainHeader.classList.add('fixed-active');
    } else {
        mainHeader.classList.remove('fixed-active');
    }
});

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