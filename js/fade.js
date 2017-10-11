$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height() / 2;
    $('.innercover, .slogan').css({
        'opacity': ((height - scrollTop) / height)
    });
});