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

    // swiperClients
    const swiperClients = document.querySelector('.swiperClients');
    if (swiperClients) {
        var swiper = new Swiper(swiperClients, {
            slidesPerView: 'auto',
            spaceBetween: 0,
            loop: true,
            speed: 5000,
            // centeredSlides: true,
            allowTouchMove: false,
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
            },
        });
    }

    // swiperHeroGlassCards
    const swiperHeroGlassCards = document.querySelector('.swiperHeroGlassCards');
    if (swiperHeroGlassCards) {
        var swiper = new Swiper(swiperHeroGlassCards, {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            speed: 3000,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                // clickable: true,
            },
        });
    }

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
                disableOnInteraction: false,
            },
        });
    }
}