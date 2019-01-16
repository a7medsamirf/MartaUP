/*************************************

Template Name: MartaUP | Personal Portfolio HTML5 Template
Author: Ahmed Samir
Author URI: https://www.facebook.com/a7med.samir.f
Description: Meruem | Personal Portfolio HTML5 Template
Version: 1.0

NOTE: This is active js file of the template.

****************************************/

/*global $ , alert, console*/

/* ==================================
      Start bootstrap Material Design
===================================== */
$(document).ready(function () {
  $('body').bootstrapMaterialDesign();
});

/* =============================
      Start niceScroll
============================== */
$(document).ready(function () {
  $("html").niceScroll({
    scrollspeed: "100",
    cursorcolor: "#FFCA00",
    cursorborder: "3px solid #FFCA00",
    cursorborderradius: 0,
    sensitiverail: true,
    horizrailenabled: false,
  });
});

/* ==================================
      Start Check the scroll position
===================================== */
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    event.preventDefault();
    $(".scrollToTop").css({
      'transform': 'translate(0px, 0px)'
    });
  } else {
    $(".scrollToTop").css({
      'transform': 'translate(80px, 0px)'
    });
  }
});

/* ======================================
      Start Click and scrolls top effect
======================================== */
$('.scrollToTop').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});

/* ==================================
      Start WOW
===================================== */
$(document).ready(function () {
  new WOW({
    offset: 160
  }).init()
});

/* ==================================
      Start SmoothScroll
===================================== */
$(document).ready(function () {
  var scroll = new SmoothScroll('a[href*="#"]');
});

/* ==================================
      Start scrollTop
===================================== */
$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

/* ==================================
    Start dropdown
===================================== */
$('.dropdown').on('show.bs.dropdown', function (e) {
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});
$('.dropdown').on('hide.bs.dropdown', function (e) {
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

/* ==================================
      Start slick slider
===================================== */
$(document).ready(function () {
  $('#header-slick').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

/* ==================================
      Start scroll position
===================================== */
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    event.preventDefault();
    $(".scrollToTop").css({
      'transform': 'translate(0px, 0px)'
    });
  } else {
    $(".scrollToTop").css({
      'transform': 'translate(80px, 0px)'
    });
  }
});

