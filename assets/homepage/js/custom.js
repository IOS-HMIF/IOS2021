(function ($) {
  "use strict";
  /* 1. Proloder */
  $(window).on('load', function () {
    $('#preloader-active').delay(450).fadeOut('slow');
    $('body').delay(450).css({
      'overflow': 'visible'
    });
  });
  // 2. Initiate the wowjs
  new WOW().init();



  // Scroll Up
  /*------------------
        Background Set
    --------------------*/
  $('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
  });
  /*------------------
        Carousel Slider
    --------------------*/
  var hero_s = $(".hs-slider");
  hero_s.owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: ['<span class="arrow_carrot-left"></span>', '<span class="arrow_carrot-right"></span>'],
    smartSpeed: 800,
    autoHeight: false,
    autoplay: true
  });
  /*------------------
          Product Slider
      --------------------*/
  $(".product-slider").owlCarousel({
    loop: true,
    margin: 25,
    nav: true,
    items: 4,
    dots: true,
    navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      }
    }
  });

  /*------------------
  product slider ends
  /*------------------
  /*------------------
        Team Slider
    --------------------*/
  $(".categories-slider").owlCarousel({
    loop: true,
    margin: 20,
    items: 3,
    dots: false,
    nav: true,
    navText: ['<span class="arrow_carrot-left"></span>', '<span class="arrow_carrot-right"></span>'],
    stagePadding: 120,
    smartSpeed: 800,
    autoHeight: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0
      },
      768: {
        items: 2,
        stagePadding: 0
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });
  // Testimonial Slider
  $('.testimonial-slider').slick({
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.testimonial-slider-nav'
  });
  $('.testimonial-slider-nav').slick({
    arrows: false,
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '22px',
    slidesToShow: 3,
    asNavFor: '.testimonial-slider'
  });
  $('.testimonial .slider-nav').css({
    "position": "relative",
    "height": "160px"
  });


  /*------------------
      Image Popup
  --------------------*/
  $('.image-popup').magnificPopup({
    type: 'image'
  });
  /*------------------
        Team Slider ends
    --------------------*/

  /* 7. data-background */
  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  });
  // popoup video
  var popUp = $('.popup-video');
  if (popUp.length) {
    popUp.magnificPopup({
      type: 'iframe'
    });
  }
  // $('.popup-video').magnificPopup({
  //   callbacks: {
  //     open: function () {
  //       $('.navbar').hide();
  //     }
  //     close: function () {
  //       $('.navbar').show();
  //     }
  //   }
  // });

  // jjs
  var review = $('.player_info_item');
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      autoplay: true,
      margin: 40,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      navText: [
        '<img src="img/icon/left.svg" alt="">',
        '<img src="img/icon/right.svg" alt="">'

      ],
      responsive: {
        0: {
          margin: 15,
        },
        600: {
          margin: 10,
        },
        1000: {
          margin: 10,
        }
      }
    });
  }
  $('.popup-youtube, .popup-vimeo').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });



  var review = $('.textimonial_iner');
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: false,
      responsive: {
        0: {
          margin: 15,
        },
        600: {
          margin: 10,
        },
        1000: {
          margin: 10,
        }
      }
    });
  }
  $(document).ready(function () {
    $('select').niceSelect();
  });
  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });

  //   $(document).ready(function(){

  //     var owl_1 = $('#owl-1');
  //     var owl_2 = $('#owl-2');

  //     owl_1.owlCarousel({
  //       loop:true,
  //       margin:10,
  //       nav:false,
  //       items: 1,
  //       dots: false,
  //       navText: false,
  //       autoplay: true,

  //     });
  //  owl_2.find(".item").click(function(){
  //     var slide_index = owl_2.find(".item").index(this);
  //     owl_1.trigger('to.owl.carousel',[slide_index,300]);
  //   });

  //     owl_2.owlCarousel({
  //       margin:50,
  //       nav: true,
  //       items: 3,
  //       dots: false,
  //       center: true,
  //       loop:true,
  //       navText: false,
  //       autoplay: true,
  //       center: true
  //     });

  //   });

  // ganti bagian labor start

  $('[data-switch]').on('click', function (e) {
    var $page = $('#page-2'),
      blockToShow = e.currentTarget.getAttribute('data-switch');

    // Hide all children.
    $page.children().hide();

    // And show the requested component.
    $page.children(blockToShow).show();
  });


  // ganti bagian labor ends
  $('.counter').counterUp({
    time: 2000
  });

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 300,
    infinite: true,
    asNavFor: '.slider-nav-thumbnails',
    autoplay: true,
    pauseOnFocus: true,
    dots: true,
  });

  $('.slider-nav-thumbnails').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    focusOnSelect: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    centerMode: true,
    responsive: [{
      breakpoint: 480,
      settings: {
        centerMode: false,
      }
    }]
  });

  //remove active class from all thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

  //set active class to first thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

  // On before slide change match active thumbnail to current slide
  $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
    $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
  });

  //UPDATED 

  $('.slider').on('afterChange', function (event, slick, currentSlide) {
    $('.content').hide();
    $('.content[data-id=' + (currentSlide + 1) + ']').show();
  });

  $('.gallery_img').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });




}(jQuery));