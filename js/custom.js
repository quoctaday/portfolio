// JavaScript Document

var typed = new Typed(".element", {
  strings: [
    "UX/UI Designer.",
    "Graphic Designer.",
    "Web Designer.",
    "Video Editor.",
    "Apps Designer.",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

$(document).ready(function () {
  $(".btn-toggle").click(function () {
    $(".menu").slideToggle();
  });
});

$(document).ready(function () {
  $('#myGallery').owlCarousel({
    margin: 10,
    loop: true,
    autoWidth: true,
    autoplay: true,
    
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:2,
            nav:false,
        },
        1000:{
            items:5,
            nav:true,
            loop:true,
        }
    }
  });
});

$(document).ready(function () {
  $("#myGallery-1").owlCarousel({
    margin: 10,
    loop: true,
    autoWidth: true,
    
    autoplay: true,
    
    rtl:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true,
        }
    }
  });
});
