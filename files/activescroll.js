$(window).scroll(function() {

//After scrolling 100px from the top...
if ( $(window).scrollTop() >= 300 ) {
    $('#nav').css('background-color', '#282826');

//Otherwise remove inline styles and thereby revert to original stying
} else {
    $('#nav').removeAttr('style');

}
});