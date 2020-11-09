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

  $(".menu a, .footer a, .logo, .header__icon").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  const btnShowMore = document.querySelector(".gallery__more");
  const container = document.querySelector(".gallery__photo");

  btnShowMore.addEventListener("click", function (e) {
    e.preventDefault();

    if (btnShowMore.dataset.option == "hidden") {
      container.classList.add("add");
      btnShowMore.dataset.option = "visible";
      btnShowMore.innerText = "Скрыть";
    } else {
      container.classList.remove("add");
      btnShowMore.dataset.option = "hidden";
      btnShowMore.innerText = "Показать еще";
    }
  });

  $(window).scroll(function () {
    $(".header__top").toggleClass(
      "scroll",
      $(this).scrollTop() > $(".header").outerHeight()
    );
  });

  var mixer = mixitup(".gallery__photo");
});
