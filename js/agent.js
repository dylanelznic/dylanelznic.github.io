$(window).scroll(function() {
  if ($(this).scrollTop() > $(window).height() * 1.5)
  {
    $('.agent-img').css({'visibility': 'visible'});
  } else {
    $('.agent-img').css({'visibility': 'hidden'});
  }
});