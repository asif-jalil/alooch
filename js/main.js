(function ($) {

  "use strict";

  $(".sidebar-menu li").click(function () {
    $(this).toggleClass("active");
    // $(".sidebar-menu li").not($(this)).removeClass("active");
  });

  //sticky navbar
  $(".sidebar").sticky({
    topSpacing: 0,
    zIndex: 99,
  });

  $(".menu-close").click(function () {
    $(this).parent().removeClass("active");
  });

  $(".menu-open").click(function () {
    $(".sidebar").addClass("active");
  });

  $(".bottom-menu-open").click(function () {
    $(".bottom-main-menu").addClass("active");
  });

  // Prevent closing from click inside dropdown
  $(document).on('click', '.dropdown-menu', function (e) {
    e.stopPropagation();
  });




})(jQuery);