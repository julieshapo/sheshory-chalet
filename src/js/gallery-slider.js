$('.slider').slick({
  dots: true,
  adaptiveHeight: true,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  waitForAnimate: false,
  pauseOnFocus: false,
  lazyLoad: 'ondemand',

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 485,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  // mobileFirst: true,
});
