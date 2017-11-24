jQuery(window).scroll(function() {
    var the_top = jQuery(document).scrollTop();
    if (the_top > 667) {
        jQuery('.main-navigation').addClass('main-navigation--fixed');
    }
    else {
        jQuery('.main-navigation').removeClass('main-navigation--fixed');
    }
});
