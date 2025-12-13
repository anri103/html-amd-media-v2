document.addEventListener('DOMContentLoaded', () => {

    // Fixed header
    // window.addEventListener('scroll', function () {
    //     const fixedHeader = document.querySelector('.header-fixed');
    //     if (fixedHeader) {
    //     fixedHeader.classList.toggle('js-fixed', window.scrollY > 100);
    //     }
    // });

    // Phone mask
    var maskPhone = document.querySelectorAll('.maskPhone')
    maskPhone.forEach(function (el) {
        IMask(el, {
            mask: '+{7}(000)000-00-00'
        });
    });

    // Fancybox
    Fancybox.bind("[data-fancybox]", {});

    // swiperHeroGlassCards
    const swiperHeroGlassCards = document.querySelector('.swiperHeroGlassCards');
    if (swiperHeroGlassCards) {
        new Swiper(swiperHeroGlassCards, {
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

    // swiperClients
    const swiperClients = document.querySelector('.swiperClients');
    if (swiperClients) {
        new Swiper(swiperClients, {
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

    // swiperPartners
    const swiperPartners = document.querySelector('.swiperPartners');
    if (swiperPartners) {
        new Swiper(swiperPartners, {
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

    // swiperReviews
    const swiperReviews = document.querySelector('.swiperReviews');
    if (swiperReviews) {
        new Swiper(swiperReviews, {
            slidesPerView: 1,
            spaceBetween: 15,
            loop: true,
            navigation: {
                nextEl: '.section-reviews-slider .btn-swiper-right',
                prevEl: '.section-reviews-slider .btn-swiper-left',
            },
            pagination: {
                el: '.swiper-pagination',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1600: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                }
            },
        });
    }

    // swiperBlog
    const swiperBlog = document.querySelector('.swiperBlog');
    if (swiperBlog) {
        new Swiper(swiperBlog, {
            slidesPerView: 1,
            spaceBetween: 15,
            loop: true,
            navigation: {
                nextEl: '.section-blog-slider .btn-swiper-right',
                prevEl: '.section-blog-slider .btn-swiper-left',
            },
            pagination: {
                el: '.swiper-pagination',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                960: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1600: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            },
        });
    }

    // swiperDevCycle
    const swiperDevCycle = document.querySelector('.swiperDevCycle');
    if (swiperDevCycle) {
        new Swiper(swiperDevCycle, {
            slidesPerView: 'auto',
            spaceBetween: 10,
            loop: false,
            breakpoints: {
                768: {
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1600: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            },
        });
    }

    // swiperStages
    const swiperStages = document.querySelector('.swiperStages');
    if (swiperStages) {
        new Swiper(swiperStages, {
            slidesPerView: 'auto',
            spaceBetween: 10,
            loop: false,
            navigation: {
                nextEl: '.section-stages-slider .btn-swiper-right',
                prevEl: '.section-stages-slider .btn-swiper-left',
            },
            breakpoints: {
                768: {
                    spaceBetween: 20,
                }
            },
        });
    }

    // teamSwiper
    const teamSwiper = document.querySelector('.teamSwiper');
    if (teamSwiper) {
        new Swiper('.teamSwiper', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            loop: false,
            freeMode: true,
            grabCursor: true,
            navigation: {
                nextEl: '.section-about-photos .btn-swiper-right',
                prevEl: '.section-about-photos .btn-swiper-left',
            }
        });
    }

});