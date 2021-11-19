/** @format */

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 10) {
      $(".navbar1").addClass("sticky");
    } else {
      $(".navbar1").removeClass("sticky");
    }
  });
  $(".menu-btn").click(function () {
    $(".navbar1 .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});


