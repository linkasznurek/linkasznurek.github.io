
$('.slick-c').slick({
    infinite: true,
    arrows: true,
    prevArrow: '<div class="slick-prev"><span class="iconify" data-icon="entypo:chevron-thin-left"></span></i></div>',
    nextArrow: '<div class="slick-next"><span class="iconify" data-icon="bi:chevron-left" data-rotate="180deg"></span></i></div>',
    autoplay:true,
    speed: 3000,
    mobileFirst:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
         
          
        }
      },
      
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });