$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 280,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            arrows: true
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});

$('.sliderPrice').slick({
    dots: false,
    infinite: true,
    speed: 280,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            arrows: true
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1
        }
    }]
});


$('.slidershow').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 280,
    slidesToShow: 9,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            arrows: false
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1
        }
    }]
});