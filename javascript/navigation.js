/**
 * Performs a smooth page scroll to an anchor on the same page.y
 * @see https://css-tricks.com/snippets/jquery/smooth-scrolling/
 */
 
var initSmoothPageScroll = function () {
    var pathname = window.location.pathname;
    var selectpathname = pathname.replace('/', '\\/')+"#";
    var selector = "a[href*='"+selectpathname+"']:not([href='#'])";
    
    $(selector).click(function() {
        
        var href = $.attr(this, 'href');
        var index = href.indexOf('#');
        var id = href.substring(index, href.length);
        
        $('html, body').animate({
            scrollTop: $( id ).offset().top
        }, 500);
        return true;
    });
}