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

//////////////////////////////////////////////////////////////////
// [ footer widget ]

document.addEventListener('DOMContentLoaded', function() {
    // Делегирование события на все документе
    document.addEventListener('click', function(e) {
        // Проверяем, был ли клик по collapse-link
        if (e.target.classList.contains('collapse-link')) {
            e.preventDefault();
            
            const link = e.target;
            const widget = link.closest('.footer-widget');
            const collapseContainer = widget.querySelector('.collapse');
            
            if (collapseContainer) {
                // Переключаем collapse
                const bsCollapse = new bootstrap.Collapse(collapseContainer, {
                    toggle: true
                });
                
                // Обновляем состояние ссылки
                link.classList.toggle('collapsed');
                link.setAttribute('aria-expanded', 
                    link.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
                );
            }
        }
    });
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