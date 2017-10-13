$(window).scroll(function() {
      var contactHeight = $(".contact-container").height()
      var base = contactHeight * 0.5

	  $(".agent-img").css("bottom", Math.max(0, base - ($(document).height() - $(window).scrollTop() - $(window).height())));
});