// Site Preloader
(function($) {
    $(document).ready(function() {
        setTimeout(function(){
            $('body').addClass('loaded');
        }, 1000);
    });
})(jQuery);


// Shrink header on scroll.
(function($) {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 80) {
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top');
        }

    });
})(jQuery);


// Toggle buttons for navigation.
(function($) {
    $('[data-toggle="push"]').each(function() {
        var $this = $(this);

        var $target = $($this.data('target') || $this.attr('href') || '#navbar');

        var $canvas = $($this.data('canvas') || '.menu-top-navigation-container');

        var $sidebar = $($this.data('sidebar') || 'body');

        $this.on('click', function(e) {
            $this.toggleClass('active');
            $target.toggleClass('active');
            $canvas.toggleClass('active');
            $sidebar.toggleClass('sidebar-active');

        });

        $('.overlay, .nav-link').on('click', function(e) {
            $this.removeClass('active');
            $target.removeClass('active');
            $canvas.removeClass('active');
            $sidebar.removeClass('sidebar-active');
        });

        $(window).on('resize', function(e) {
            var win = $(this);
            if (win.width() > 992) {
                $this.removeClass('active');
                $target.removeClass('active');
                $canvas.removeClass('active');
                $sidebar.removeClass('sidebar-active');
            }
        });
    });
})(jQuery);


// Intro Carousel
(function($) {
    $('.intro-carousel').slick({
        dots: false,
        infinite: true,
        speed: 500,
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: false,
        centerMode: false,
        cssEase: 'ease',
        nextArrow: '<div class="slick-next"></div>',
        prevArrow: '<div class="slick-prev"></div>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                centerMode: true,
                slidesToShow: 3
            }
        }, {
            breakpoint: 992,
            settings: {
                centerMode: true,
                slidesToShow: 2
            }
        }, {
            breakpoint: 576,
            settings: {
                centerMode: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 5000,
                slidesToShow: 1
            }
        }]
    });

})(jQuery);


// Homepage Apple Carousel
// (function($) {
//     $('.apple-carousel').slick({
//         dots: false,
//         arrows: false,
//         infinite: true,
//         autoplay: false,
//         fade: true,
//         variableWidth: false,
//         autoplaySpeed: 5000,
//         pauseOnHover: false,
//         speed: 500,
//         touchMove: false,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         centerMode: false,
//         cssEase: 'ease'
//     });
// })(jQuery);


// Client Carousel
(function($) {
    $('.client-carousel').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        variableWidth: true,
        autoplaySpeed: 3000,
        speed: 500,
        touchMove: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        cssEase: 'ease',
        responsive: [{
            breakpoint: 576,
            settings: {
                centerMode: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 5000,
                slidesToShow: 1
            }
        }]
    });
})(jQuery);


jQuery('[data-fancybox]').fancybox({
    keyboard : true,
    buttons : [
        'slideShow',
        'fullScreen',
        'thumbs',
        'close'
    ],
    animationEffect : "fade",
    transitionEffect : "fade"
});


// Flipped
(function($) {
    $(".home .intro-carousel .front").click(function(){
        $(this).parents(".flip").addClass("flipped");});

    $(".home .intro-carousel .back").click(function(){
        $(this).parents(".flip").removeClass("flipped");});
})(jQuery);



// Random Stars
(function($) {
    var generateStars = function($galaxy, threshold) {

        var i = 0;

        while (i <= threshold) {
            var xposition = Math.random();
            var yposition = Math.random();
            var star_type = Math.floor((Math.random() * threshold) + 1);
            var position = {
                "x": $galaxy.width() * xposition,
                "y": $galaxy.height() * yposition,
            };

            $('<div class="star star-type-' + star_type + '"></div>').appendTo($galaxy).css({
                "top": position.y,
                "left": position.x
            });

            i++;
        }
    };

    var $galaxy1 = $(".galaxy-01");
    var $galaxy2 = $(".galaxy-02");
    var $galaxy3 = $(".galaxy-03");

    generateStars($galaxy1, 10);
    generateStars($galaxy2, 10);
    generateStars($galaxy3, 10);
})(jQuery);


// Smooth Scroll
(function($) {
    $("#main-menu li a[href^='#'], a[href^='#responsive'], a[href^='#managed'], a[href^='#launch'], a[href^='#showcase']").on('click', function(e) {

        var hash = this.hash;
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $(hash).offset().top  - 50
        }, 900);

    });
})(jQuery);


// SVG Logos
(function($) {

    window.onload = svg_clients;

    function svg_clients() {
        $('.client-work rect, .client-work circle, .client-work path, .client-work polygon').css({ fill: "#CCCCCC" });

        $('.client-work').mouseenter(function() {
            $('rect, path, polygon, circle', this).css('fill', '');
        }).mouseleave(function() {
            $('rect, path, polygon, circle', this).css('fill', '#CCCCCC');
        });
    }

})(jQuery);

// ScrollSpy
(function($) {
    $(document).ready(function(){
        $("body").scrollspy({
            target: "#scrollspy-nav",
            offset: 70
        });
    });
})(jQuery);

// Add prettyprint to any code block
(function($) {
    $(document).ready(function(){ $('code').addClass('prettyprint linenums'); });
})(jQuery);
