jQuery.noConflict();
(function ($) {
    $(function () {        

        // Header goes up on scroll and show when reverse scroll
        let lastScrollTop = 0;
        const header = document.querySelector("header");

        window.addEventListener("scroll", () => {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Scrolling down
                header.style.top = "-100px"; // hide header
            } else {
                // Scrolling up
                header.style.top = "0"; // show header
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // avoid negative scroll
        });

        //Header Menu
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');

        hamburger.addEventListener('click', () => {
            const isOpen = hamburger.classList.toggle('is-open');
            mobileMenu.classList.toggle('is-open', isOpen);
            hamburger.setAttribute('aria-expanded', String(isOpen));
        });

        // Close on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('is-open');
                mobileMenu.classList.remove('is-open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });

        // Close on resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 900) {
                hamburger.classList.remove('is-open');
                mobileMenu.classList.remove('is-open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });

        //logo carousel
        $(".logo-carousel").slick({
            speed: 6000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            swipeToSlide: true,
            centerMode: true,
            focusOnSelect: true,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                    }
                }
            ]
        });

    });
})(jQuery);

// service tab
function switchTab(idx) {
    const btns = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');
    btns.forEach((b, i) => {
        b.classList.toggle('active', i === idx);
        b.setAttribute('aria-selected', i === idx ? 'true' : 'false');
    });
    panels.forEach((p, i) => p.classList.toggle('active', i === idx));
    btns[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
}

const bar = document.getElementById('tab-bar');
const fadeL = document.getElementById('fade-left');
const fadeR = document.getElementById('fade-right');
function updateFades() {
    fadeL.style.opacity = bar.scrollLeft > 8 ? '1' : '0';
    fadeR.style.opacity = bar.scrollLeft < bar.scrollWidth - bar.clientWidth - 8 ? '1' : '0';
}
bar.addEventListener('scroll', updateFades);
window.addEventListener('resize', updateFades);
updateFades();

