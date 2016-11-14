/**
 * Performs a smooth page scroll to an anchor on the same page.y
 * @see https://css-tricks.com/snippets/jquery/smooth-scrolling/
 */
 
var initSmoothPageScroll = function () {
    $('a[href*="#"]:not([href="#"])').click(function() {
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return true;
    });
}