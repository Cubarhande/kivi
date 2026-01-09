$(document).ready(function () {
    // Category Slider 1
    $('.category-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200, // screens smaller than 1200px
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992, // tablets landscape
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576, // mobile phones
                settings: {
                    slidesToShow: 1,
                    arrows: false // hide arrows on mobile
                }
            }
        ]
    });

    // Category Slider 2
    $('.category-slider-1').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024, // screens smaller than 1024px
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768, // tablets
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480, // mobile phones
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Category Slider 3
    $('.category-slider-2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 992, // tablets and below
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576, // mobile devices
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Category Slider 4
    $('.category-slider-3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992, // tablets and below
                settings: {
                    slidesToShow: 2,
                    arrows: false // hide arrows on tablets
                }
            },
            {
                breakpoint: 576, // mobile devices
                settings: {
                    slidesToShow: 1,
                    arrows: false // hide arrows on mobile
                }
            }
        ]
    });
});
