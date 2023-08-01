$('.slider').slick({
  dots: true,
  adaptiveHeight: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  waitForAnimate: false,
  pauseOnFocus: false,

  // variableWidth: true,
  // lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoints: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoints: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  mobileFirst: true,
});
