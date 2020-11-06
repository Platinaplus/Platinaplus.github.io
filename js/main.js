$(function () {
  $(".blog__slider").slick({
    arrows: false,
    dots: true,
  });

  $(".menu__btn, .menu a").on("click", function () {
    $(".menu").toggleClass("menu-active");
    $(".close").toggleClass("active");
    $(".open").toggleClass("hidden");
  });

  $(".menu a, .footer a, .logo").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  var mixer = mixitup(".gallery__photo");
});
