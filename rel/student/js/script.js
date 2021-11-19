/** @format */

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 10) {
      $(".navbar11").addClass("sticky");
    } else {
      $(".navbar11").removeClass("sticky");
    }
  });
  $(".menu-btn").click(function () {
    $(".navbar11 .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});


const clearInput = () => {
  const input = document.getElementsByTagName("input")[0];
  input.value = "";
}

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearInput);
