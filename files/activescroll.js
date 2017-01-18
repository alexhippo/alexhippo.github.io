$(window).scroll(function() {

//After scrolling 100px from the top...
    if ( $(window).scrollTop() >= 300 ) {
        $('#nav').css('background-color', '#282826');

    //Otherwise remove inline styles and revert to original stying
    } else {
        $('#nav').removeAttr('style');
    }
});

$(document).on('click', '.nav-link', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
});

