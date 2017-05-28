window.onload = function(){

    Waves.init({
    duration: 500,
    delay: 200
    });
};

jQuery(document).ready(function($) {
    $('.input_phone').mask("+7(999) 999-9999");

    $('.formstom__slider').owlCarousel({
        nav: true,
        navText: ['', ''],
        loop: true,
        dots: false,
        responsive : {
            0: {
                items: 1
            },
            992: {
                items: 2,
                margin: 20
            },
            1024: {
                items: 3,
                margin: 40
            }
        }
    });
    $('.scroll').jScrollPane({
        contentWidth: '0px'
    });

    Waves.attach(".button", [
        "waves-button",
        "waves-float",
        "waves-light"
    ]);
    Waves.attach(".uslugi__img", [
        "waves-circle",
        "waves-float",
        "waves-light"
    ]);
});