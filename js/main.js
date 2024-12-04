//mobile menu, click .ham thì .mgnb_wrap {left:0} animate 외어라
$(".ham").click(function () {
  $(".mgnb_wrap").animate({
    left: "0"
  });
});
$(".mgnb_close").click(function () {
  $(".mgnb_wrap").animate({
    left: "100%"
  });
});

$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").stop().slideUp();
});


$(".gnb>li").hover(function () {
  $(this).find(".depth2").stop().slideToggle()
}); //giống ở trên, giúp cho từng 2차menu slidedown

const banner_list = new Swiper('.banner_list', {
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});

const menu_list = new Swiper('.menu_list', {
  centeredSlides: true, //활성화된 slide가 가운데
  loop: true,
  speed: 2000,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  //add more 반응형 slide option 
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    768: { //768px 이상에서 
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
