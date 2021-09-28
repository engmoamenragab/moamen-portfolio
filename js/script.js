$(document).ready(function () {
  "use strict";
  //ANCHOR preloader
  $(window).on("load", function () {
    $("#preloader").delay(600).fadeOut();
  });
  // navbar active state
  $(".navbar-nav li.nav-item").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  //ANCHOR sticky nav
  if ($(window).scrollTop() > 20) {
    if ($("#nav").attr('class').indexOf("bg-white") == -1) {
      $("#nav").addClass("bg-white");
      $("#nav a").addClass("text-color");
    } else {
      $("#nav").removeClass("bg-white");
      $("#nav a").removeClass("text-color");
    }
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $("#nav").addClass("bg-white");
      $("#nav a").addClass("text-color");
    } else {
      $("#nav").removeClass("bg-white");
      $("#nav a").removeClass("text-color");
    }
  });
  //ANCHOR navbar toggler
  $(".navbar-toggler").click(function () {
    if ($(window).scrollTop() <= 20) {
      if ($("#nav").attr('class').indexOf("bg-white") == -1) {
        $("#nav").addClass("bg-white");
        $("#nav a").addClass("text-color");
      } else {
        $("#nav").removeClass("bg-white");
        $("#nav a").removeClass("text-color");
      }
    }
  });
  //ANCHOR go top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#go-top").fadeIn();
    } else {
      $("#go-top").fadeOut();
    }
  });
  $("#go-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 600);
  });
});