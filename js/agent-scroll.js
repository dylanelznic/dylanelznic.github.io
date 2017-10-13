$(window).scroll(function() {
      var contactHeight = $(".contact-container").height()
      var mapHeight = $(".map-container").height()
      var base = contactHeight + mapHeight - ($(window).height() * 0.63)

      $(".agent-img").css("bottom", Math.max(0, base - ($(document).height() - $(window).scrollTop() - $(window).height())));
});