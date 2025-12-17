// Универсальная функция для переключения модальных окон
// На релизе УБРАТЬ
function closeOffcanvas() {
    // Находим и закрываем открытый offcanvas
    const openOffcanvas = document.querySelector('.offcanvas.show');
    if (openOffcanvas) {
        const offcanvasInstance = bootstrap.Offcanvas.getInstance(openOffcanvas);
        if (offcanvasInstance) {
            offcanvasInstance.hide();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {

    // Fixed header
    // window.addEventListener('scroll', function () {
    //     const fixedHeader = document.querySelector('.header-fixed');
    //     if (fixedHeader) {
    //     fixedHeader.classList.toggle('js-fixed', window.scrollY > 100);
    //     }
    // });

    // header-backdrop activate
    const header = document.querySelector('header.header');
    // const megaMenuItems = document.querySelectorAll('li.has-mega-menu');
    const backdrop = document.getElementById('headerBackdrop');
    if (!backdrop) {
        console.error('Элемент #headerBackdrop не найден!');
        return;
    }
    if (header) {
        header.addEventListener('mouseenter', () => {
            backdrop.classList.add('active');
        });

        header.addEventListener('mouseleave', () => {
            backdrop.classList.remove('active');
        });
    }
    // megaMenuItems.forEach(item => {
    //     item.addEventListener('mouseenter', () => {
    //         backdrop.classList.add('js-mega-menu-hover');
    //     });

    //     item.addEventListener('mouseleave', () => {
    //         backdrop.classList.remove('js-mega-menu-hover');
    //     });
    // });

    // megaMenu tabs
    const tabLinks = document.querySelectorAll('.mega-menu__nav-link');
    const tabPanes = document.querySelectorAll('.mega-menu__col-content .tab-pane');
    tabLinks.forEach(link => {
        link.addEventListener('mouseenter', function (e) {
            e.preventDefault();

            tabLinks.forEach(l => l.classList.remove('active'));
            tabPanes.forEach(p => {
                p.classList.remove('show', 'active');
                p.classList.add('fade');
            });

            this.classList.add('active');

            const targetId = this.getAttribute('href');
            const targetPane = document.querySelector(targetId);
            if (targetPane) {
                targetPane.classList.add('show', 'active');
                targetPane.classList.remove('fade');
            }
        });
    });

    // Mobile sub-menu
    const mobileSubmenuTogglers = document.querySelectorAll('.sub-menu-toggler');
    mobileSubmenuTogglers.forEach(toggler => {
        toggler.addEventListener('click', function () {
            const parentItem = this.closest('.has-sub-menu');
            if (!parentItem) return;

            const submenu = parentItem.querySelector('.sub-menu');
            if (submenu) {
                submenu.classList.toggle('open');
                this.classList.toggle('sub-menu-active');
            }
        });
    });

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