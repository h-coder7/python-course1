$( function() {

    var wind = $(window);

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: false,
        live: false
    });
    wow.init();

    // ---------- background change -----------
    var pageSection = $(".bg-img");
    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // ---------- to top -----------

    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            toTop = $(".to_top")

        if (bodyScroll > 700) {

            toTop.addClass("show");

        } else {

            toTop.removeClass("show");
        }
    });

    $('.to_top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 0);
        return false;
    });

    // -------- counter --------
    $('.counter').countUp({
        delay: 10,
        time: 2000
    });


     /* ==  float_box_container button  == */
    $( ".float_box_container" ).mousemove(function(e) {
        var parentOffset = $(this).offset(); 
        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(".float_box").css({"left": relX, "top": relY });
        $(".float_box").addClass("show");
    });
    $( ".float_box_container" ).mouseleave(function(e) {
        $(".float_box").removeClass("show");
    });

    /* ==  Button Animation  == */
  $( ".button_su_inner" ).mouseenter(function(e) {
    var parentOffset = $(this).offset(); 
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("desplode-circle");
    $(this).prev(".su_button_circle").addClass("explode-circle");
  });
  
  $( ".button_su_inner" ).mouseleave(function(e) {
    var parentOffset = $(this).offset(); 
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("explode-circle");
    $(this).prev(".su_button_circle").addClass("desplode-circle");
  });

    // -------- fav-btn --------
    $(".fav-btn").on("click", function(){
        $(this).toggleClass("active");
    })

    // -------- cls --------
    $(".cls").on("click", function(){
        $(this).parent().fadeOut();
    })

    // --------- mobile bottom navbar ---------
    const list = document.querySelectorAll('.list');
    function activeLink(){
        list.forEach((item) => 
        item.classList.remove('active'));
        this.classList.add('active')
    }
    list.forEach((item) =>
    item.addEventListener('click',activeLink))

    // ------------ working in desktop -----------
    if ($(window).width() > 991) {
        $('.parallaxie').parallaxie({
        });
    }

    // ---------- tooltip -----------
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })
        
});



// ------------ Preloader -----------
$( function() {
    const svg = document.getElementById("svg");
    const tl = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
        delay: 1.5,
        y: -100,
        opacity: 0,
    });
    tl.to(svg, {
        duration: 0.5,
        attr: { d: curve },
        ease: "power2.easeIn",
    }).to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: "power2.easeOut",
    });
    tl.to(".loader-wrap", {
        y: -1500,
    });
    tl.to(".loader-wrap", {
        zIndex: -1,
        display: "none",
    });
    tl.from(
        "header",
        {
            y: 200,
        },
        "-=1.5"
    );
    tl.from(
        "header .container",
        {
            y: 40,
            opacity: 0,
            delay: 0.3,
        },
        "-=1.5"
    );
});


// --------- izi toast ---------
$( function() {
    // settings関数で初期設定 全体に適応させたい場合
    iziToast.settings({
        timeout: 3000, // default timeout
        resetOnHover: true,
        // icon: '', // icon class
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        onOpen: function() {
            console.log('callback abriu!');
        },
        onClose: function() {
            console.log("callback fechou!");
        }
    });

    // addCart toast
    $('.addCart').click(function() {

        iziToast.show({
            color: 'dark',
            icon: 'fal fa-cart-arrow-down',
            message: 'Added to cart successfully',
            position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
            progressBarColor: 'rgb(0, 0, 0)',
        });

    }); // ! .click()


    // info
    $('.infoClick').click(function() {
        iziToast.info({
            position: "center",
            title: 'Hello',
            message: 'iziToast.info()'
        });
    }); // ! click

    // success
    $('.successClick').click(function() {
        iziToast.success({
            position: "topRight",
            timeout: 5000,
            icon: 'fa fa-check',
            title: 'OK',
            message: 'iziToast.sucess() with custom icon!'
        });
    }); // ! .click

    // warning
    $('.warningClick').click(function() {
        iziToast.warning({
            position: "bottomLeft",
            title: 'Caution',
            message: '日本語環境のテスト'
        });
    });

    // error
    $('.errorClick').click(function() {
        iziToast.error({
            title: 'Error',
            message: 'Illegal operation'
        });
    });

    // custom toast
    $('.customClick').click(function() {

        iziToast.show({
            color: 'dark',
            icon: 'fa fa-user',
            title: 'Hey',
            message: 'Custom Toast!',
            position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
            progressBarColor: 'rgb(0, 255, 184)',
            buttons: [
                [
                    '<button>Ok</button>',
                    function(instance, toast) {
                        alert("Hello world!");
                    }
                ],
                [
                    '<button>Close</button>',
                    function(instance, toast) {
                        instance.hide({
                            transitionOut: 'fadeOutUp'
                        }, toast);
                    }
                ]
            ]
        });

    }); // ! .click()

    $('.any').click(function() {
        iziToast.error({
            title: 'Errorカラー',
            message: 'iziToast.error()'
        });
    });
});

$(window).on("load", function () {

    // ------------ Preloader -----------
    var body = $('body');
    body.addClass('loaded');
    setTimeout(function () {
        body.removeClass('loaded');
    }, 1500);

});




