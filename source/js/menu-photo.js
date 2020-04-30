let menuLink = $(".header__menu-link--menu");
let closeLink = $(".header__menu-link--close");
let menuList = $(".header-photo__nav-list");
let header = $(".header-photo");
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

$(window).resize(function () {
  if ($(window).width() >= "1200") {
    closeLink.hide();
    menuLink.hide();
    menuList.css("display", "flex");
    header.css("height", "395px");
    headerContainer.css("background-color", "transparent");
  } else if ($(window).width() >= "660") {
    menuList.css("display", "block");
    closeLink.hide();
    menuLink.show();
    menuList.hide();
    headerContainer.css("background-color", "rgba(0, 0, 0, 0.3)");
    header.css({
      height: "440px",
      display: "block",
    });
    menuList.css("display", "none");
  } else if ($(window).width() >= "320") {
    menuList.css("display", "block");
    closeLink.hide();
    menuLink.show();
    menuList.hide();
    headerContainer.css("background-color", "rgba(0, 0, 0, 0.3)");
    header.css({
      height: "233px",
      display: "block",
    });
  }
});

closeLink.on("click", function (evt) {
  evt.preventDefault();
  closeLink.hide();
  menuLink.show();
  menuList.hide();
  header.css({
    height: "233px",
    "background-position": "top",
  });
  if ($(window).width() >= "660") {
    header.css({
      height: "440px",
    });
  }
  header.removeClass("header-menu").addClass("header-photo");
  headerContainer.css("background-color", "rgba(0, 0, 0, 0.3)");
});

menuLink.on("click", function (evt) {
  evt.preventDefault();
  closeLink.show();
  menuLink.hide();
  menuList.show();
  header.css({
    height: "490px",
    "background-position": "center 250px",
  });
  if ($(window).width() >= "660") {
    header.css({
      height: "678px",
    });
  }
  header.removeClass("header-menu").addClass("header-photo");
  headerContainer.css("background-color", "#283645");
});

$(function () {
  $('.variant__common').on("input", function () {
    duplicate($(".variant__common").val());
  });
})

function duplicate(count) {
  if ($('.variant__img--active').hasClass('variant__img--crop')) {
    $(".filter__img").css("transform", 'scale('+count/100+')');
  } else if ($('.variant__img--active').hasClass('variant__img--contrast')) {
    $(".filter__img").css("opacity", +count/100+'');
  } else if ($('.variant__img--active').hasClass('variant__img--fill')) {
    $(".filter__img").css("filter", 'hue-rotate('+count*3.6+'deg)');
}
}

function duplicateTablet() {
  $('.variant__input--crop').on('input', function () {
      $(".filter__img").css("transform", 'scale('+$(".variant__input--crop").val()/100+')');
  });
  $('.variant__input--fill').on('input', function () {
      $(".filter__img").css("opacity", +$(".variant__input--fill").val()/100+'');
    });
  $('.variant__input--contrast').on('input', function () {
    $(".filter__img").css("filter", 'hue-rotate('+$(".variant__input--contrast").val()*3.6+'deg)');
  });
  }
duplicateTablet();

  $(".filter__wrap-tablet").on("click",function (evt) {
    if($(evt.target).is("svg" || "use" || "li" || "path")) {
      $('.variant__common').val(80);
      $(".variant__img").removeClass("variant__img--active");
      $(evt.target).addClass("variant__img--active");}
})

