$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,

    navText: [
        '<i class="fa fa-fw fa-chevron-left" ></i>',
        '<i class="fa fa-fw fa-chevron-right" ></i>'
    ],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        700: {
            items: 2
        },
        1020: {
            items: 3
        }
    }


});
