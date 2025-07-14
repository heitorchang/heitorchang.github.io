$(document).ready(function () {
  if (window.page != "#about") {
    $(".menu").find("li[data-target=" + window.page + "]").trigger("click");
  }
});

$(window).on("resize", function () {
  $("html, body").height($(window).height());
  // $(".main, .menu").height($(window).height() - $(".header-panel").outerHeight() - $("#navbar").height());
  // $(".main, .submenu").height($(window).height() - $(".header-panel").outerHeight() - $("#navbar").height());

  $(".main, .menu").height($(window).height() - $("#navbar").height());
  $(".main, .submenu").height($(window).height() - $("#navbar").height());
  $(".pages").height($(window).height());
}).trigger("resize");


// Menu
$(".menu li").click(function () {
  if (!$(this).data("target")) return;
  if ($(this).is(".active")) return;
  $(".menu li").not($(this)).removeClass("active");
  $(".page").not(page).removeClass("active").hide();
  window.page = $(this).data("target");
  var page = $(window.page);
  window.location.hash = window.page;
  $(this).addClass("active");
});

$(".submenu li").click(function () {
  if (!$(this).data("target")) return;
  if ($(this).is(".active")) {
    window.location.hash = "";
  }
  $(".submenu li").not($(this)).removeClass("active");
  $(".page").not(page).removeClass("active").hide();
  window.page = $(this).data("target");

  var page = $(window.page);
  window.location.hash = window.page;
  $(this).addClass("active");

  // move the panels down that would otherwise be covered by navbar 
  window.scrollTo(window.scrollX, window.scrollY - 70);
  
  // page.show();

  /*
  var totop = setInterval(function () {
    $(".panels").animate({scrollTop: 0}, 0);
  }, 1);

  setTimeout(function () {
    page.addClass("active");
    setTimeout(function () {
      clearInterval(totop);
    }, 1000);
  }, 100);
  */
});
