$( function() {

    // --------- thumbnails images ---------
    var products = document.querySelectorAll(".product-card");
    products.forEach(function(product) {
    var mainImage = product.querySelector(".main-image");
    var thumbnails = product.querySelectorAll(".thumbnail");

        thumbnails.forEach(function(thumbnail) {
            thumbnail.addEventListener("click", function() {
            // remove "selected" class from all thumbnails in this product
            thumbnails.forEach(function(thumbnail) {
                thumbnail.classList.remove("selected");
            });
            // add "selected" class to clicked thumbnail
            thumbnail.classList.add("selected");
            // set main image src to clicked thumbnail src
            mainImage.setAttribute("src", thumbnail.getAttribute("src"));
            });
        });
    });


    // --------- filter toggle ---------
    $(".filter-group .group-title").on("click" , function(){
        $(this).siblings(".group-body").slideToggle();
    })

    // --------- change view ---------
    $(".view-item .v-item").on("click" , function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
    $(".view-item .list-btn").on("click" , function(){
        $(".products").addClass("products-list");
    })
    $(".view-item .grid-btn").on("click" , function(){
        $(".products").removeClass("products-list");
    })

    // --------- show more text ---------
    $(".more-text .more-btn").on("click" , function(){
        $(this).parent(".more-text").css("max-height", "max-content");
        $(this).hide();
        $(this).siblings(".overlay").hide();
    })

    // ---------- background change -----------
    var pageSection = $(".bg-img");
    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

});



// ------------ swiper sliders -----------
$(document).ready(function() {

    // ------------ swiper sliders -----------
    var swiper = new Swiper('.header-slider6', {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        // centeredSlides: true,
        speed: 1000,
        pagination: {
            el: '.header-slider6 .swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.header-slider6 .swiper-button-next',
            prevEl: '.header-slider6 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
    });

    // ------------ tc-best-seller-style6 -----------
    var swiper = new Swiper('.best-seller .best-slider6', {
        slidesPerView: 5,
        spaceBetween: 5,
        // centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.best-seller .swiper-button-next',
            prevEl: '.best-seller .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: false,
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
                slidesPerView: 4,
            }
        }
    });

    // ------------ tc-recently-viewed-style6 -----------
    var swiper = new Swiper('.tc-recently-viewed-style6 .products-slider', {
        slidesPerView: 5,
        spaceBetween: 0,
        // centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-recently-viewed-style6 .swiper-button-next',
            prevEl: '.tc-recently-viewed-style6 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: false,
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
                slidesPerView: 4,
            }
        }
    });

    // ------------ product details 3 -----------
    var galleryThumbs = new Swiper('.sin-prod-pg-1 .product-main-details .gallery-thumbs', {
        spaceBetween: 20,
        slidesPerView: 5,
        loop: false,
        freeMode: true,
        loopedSlides: 4, //looped slides should be the same
        // direction: 'vertical',
    });
    var galleryTop = new Swiper('.sin-prod-pg-1 .product-main-details .gallery-top', {
        spaceBetween: 10,
        loop:false,
        loopedSlides: 4, //looped slides should be the same
        navigation: false,
        thumbs: {
            swiper: galleryThumbs,
        },
    });

    // ------------ related-products -----------
    var swiper = new Swiper('.related-products .products-slider', {
        slidesPerView: 5,
        spaceBetween: 0,
        // centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.related-products .swiper-button-next',
            prevEl: '.related-products .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: false,
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

    // ------------ partners-clients -----------
    var swiper = new Swiper('.partners-clients .clients-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        // centeredSlides: true,
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


        // ------------ tc-categories-pg-style2 -----------
        var swiper = new Swiper('.tc-categories-pg-style2 .tc-categories-slider', {
            // slidesPerView: 3,
            spaceBetween: 15,
            // centeredSlides: true,
            speed: 1000,
            pagination: false,
            pagination: false,
            pagination: {
                el: '.tc-categories-pg-style2 .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.tc-categories-pg-style2 .swiper-next',
                prevEl: '.tc-categories-pg-style2 .swiper-prev',
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
                    slidesPerView: 6,
                }
            }
        });

    
    // ------------ product details 3 -----------
    var galleryThumbs = new Swiper('.quick-view-modal .product-main-details .gallery-thumbs', {
        spaceBetween: 20,
        slidesPerView: 5,
        loop: false,
        freeMode: true,
        loopedSlides: 4, //looped slides should be the same
        // direction: 'vertical',
    });
    var galleryTop = new Swiper('.quick-view-modal .product-main-details .gallery-top', {
        spaceBetween: 10,
        loop:false,
        loopedSlides: 4, //looped slides should be the same
        navigation: false,
        thumbs: {
            swiper: galleryThumbs,
        },
    });
    
   
});


// ------------ scripts -----------

// ------------ price slider -----------
$(document).ready(function(){
    const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
    let priceGap = 1000;

    priceInput.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

            if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = (minPrice / rangeInput[0].max) * 100 + "%" ;
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
            }
        });
    });

    rangeInput.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

            if (maxVal - minVal < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
            } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        });
    });
});

// ------------ product count -----------
// $(document).ready(function(){
//     $(".qt-plus").click(function() {
//         $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);
//     });

//     $(".qt-minus").click(function() {

//         child = $(this).parent().children(".qt");

//         if (parseInt(child.html()) > 1) {
//             child.html(parseInt(child.html()) - 1);
//         }

//         $(this).parent().children(".full-price").addClass("minused");
//     });
// });

$(document).ready(function() {
    // Increment button click event
    $(".qt-plus").click(function() {
        var value = parseInt($(this).siblings(".qt").val()); // Get the current value
        $(this).siblings(".qt").val(value + 1); // Increment the value and set it
    });
    
    // Decrement button click event
    $(".qt-minus").click(function() {
    var value = parseInt($(this).siblings(".qt").val()); // Get the current value
    if (value > 0) {
        $(this).siblings(".qt").val(value - 1); // Decrement the value and set it
    }
    });
    
});

// ------------ filter style2 toggle -----------
$(document).ready(function() {
    
    $(".tc-filter-wrapper-style2 .filter-toggle").on("click", function(){
        $(".filter-body").slideToggle();
    })
    
});


// ------------ SHOW HIDE PASS ----------
$(document).ready(function() {
    $(".show_hide_password .show_pass").on('click', function(event) {
        event.preventDefault();
        if($(this).siblings("input").attr("type") == "text"){
            $(this).siblings("input").attr('type', 'password');
            $(this).addClass( "fa-eye-slash" );
            $(this).removeClass( "fa-eye" );
        }else if($(this).siblings("input").attr("type") == "password"){
            $(this).siblings("input").attr('type', 'text');
            $(this).removeClass( "fa-eye-slash" );
            $(this).addClass( "fa-eye" );
        }
    });
}); 

