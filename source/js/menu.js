(function () {
  let menuLink = $(".header__menu-link--menu");
  let closeLink = $(".header__menu-link--close");
  let menuList = $(".header__nav-list");
  let header = $(".header");
  let headerContainer = $(".header__container");

  $(window).resize(function () {
    if ($(window).width() >= "1200") {
      menuLink.hide();
      menuList.show();
      headerContainer.css("background-color", "transparent");
    } else if ($(window).width() < " 1200") {
      closeLink.hide();
      menuLink.show();
      menuList.hide();
      headerContainer.css("background-color", "rgba(0, 0, 0, 0.3)");
    }
  });


  closeLink.on("click", function (evt) {
    evt.preventDefault();
    closeLink.hide();
    menuLink.show();
    menuList.hide();
    header.removeClass("header-menu").addClass("header");
    headerContainer.css("background-color", "rgba(0, 0, 0, 0.3)");
  });

  menuLink.on("click", function (evt) {
    evt.preventDefault();
    closeLink.show();
    menuLink.hide();
    menuList.show();
    header.removeClass("header-menu").addClass("header");
    headerContainer.css("background-color", "transparent");
  });

  $(".switch__item--one").on("click", function () {
    $(".switch__item").removeClass("switch__item--check");
    $(this).addClass("switch__item--check");
    $(".slider__slide").hide();
    $(".slider__slide--1").css("display", "flex");
  });

  $(".switch__item--two").on("click", function () {
    $(".switch__item").removeClass("switch__item--check");
    $(this).addClass("switch__item--check");
    $(".slider__slide").hide();
    $(".slider__slide--2").css("display", "flex");
  });

  $(".switch__item--three").on("click", function () {
    $(".switch__item").removeClass("switch__item--check");
    $(this).addClass("switch__item--check");
    $(".slider__slide").hide();
    $(".slider__slide--3").css("display", "flex");
  });

  if ($(window).width() >= "1200"){
  $(document).ready(function () {
    $("#lightSlider").lightSlider({
      auto: true,
      loop: true,
      pauseOnHover: true,
      controls: true,
      pager: true,
      enableDrag: true,
      item: 1,
      slideMove: 1,
      adaptiveHeight: true,
    });
  });}


  let table = $(".price__table");
  $(".price__switch-price").on('click',function (evt) {
    if ($(evt.target).is("li")) {
      $(".switch-price__item").removeClass("switch-price__item--check");
      $(evt.target).addClass("switch-price__item--check");
    }

    if ($(evt.target).hasClass("switch-price__item--one")) {
      table.css({marginLeft: "123px", transition: "0.3s",});
    } else if ($(evt.target).hasClass("switch-price__item--two")) {
      table.css({marginLeft: "-156px", transition: "0.3s",});
    } else if ($(evt.target).hasClass("switch-price__item--three")) {
      table.css({marginLeft: "-434px", transition: "0.3s",});
    }

  });
    })();
