$(document).ready(function () {
  var owlMob = $(".owl-mobile");
  var owlEc = $(".owl-ec");

  owlMob.owlCarousel({
    center: true,
    loop: true,
    items: 5,
    autoplay: false,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 3,
      },
      992: {
        items: 5,
      },
    },
  });

  owlEc.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 4,
      },
    },
  });

  var stat = 0;
  $(window).scroll(function () {
    var oTop = $("#counter").offset().top - window.innerHeight;
    if (stat == 0 && $(window).scrollTop() > oTop) {
      $(".counter-value").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 1500,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      });
      stat = 1;
    }
  });
});
