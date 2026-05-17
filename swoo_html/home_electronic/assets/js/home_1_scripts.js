$( function() {
    
    // ------------ countdown -----------
    $(document).ready(function(){
        const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        week = hour * 24 * 7;

        let countDown = new Date('Oct 29, 2023 11:30').getTime(),
            x = setInterval(function() {

                let now = new Date().getTime(),
                    distance = countDown - now;

                document.getElementById('days').innerText = Math.floor(distance / (day)),
                document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

                //do something later when date is reached
                //if (distance < 0) {
                //  clearInterval(x);
                //  'IT'S MY BIRTHDAY!;
                //}

        }, second)
    });

});


// ------------ swiper sliders -----------
$(document).ready(function() {

    // ------------ tc-header-style1 -----------
    var swiper = new Swiper('.tc-header-style1 .main-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });

    // ------------ tc-best-seller-style1 -----------
    var swiper = new Swiper('.tc-best-seller-style1 .products-slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        // centeredSlides: true,
        speed: 1000,
        pagination: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });


    // ------------ tc-pupolar-brands-style1 -----------
    var swiper = new Swiper('.tc-pupolar-brands-style1 .pupolar-slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1000,
        pagination: false,
        pagination: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


    // ------------ tc-best-single-style1 -----------
    var swiper = new Swiper('.tc-best-single-style1 .best-single-slider', {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
        speed: 1000,
        pagination: false,
        pagination: false,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


    // ------------ tc-header-style1 -----------
    var swiper = new Swiper('.tc-testimonials-style1 .blog-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });


});





