/*

 Don't forget to document your plugin! Include any assumptions that your plugin is making.

 */

$(document.head).append('<link rel="stylesheet" href="gymnasium-carousel/gymnasium-carousel-1.0.css"/>')

// Don't forget to add your own stylesheet.

$.fn.makeCarouselFor = function (selectorPrevButton, selectorNextButton, selectorItem) {
    // Set up our carousel.
    var $carousel = this;
    $carousel.cycle({
        fx: 'scrollHorz',
        speed: 400,
        height: $carousel.height(),
        width: $carousel.width(),
        fit: true
    }).cycle('pause');

    // Set up the carousel buttons.
    $(selectorPrevButton).click(function () {
        $carousel.cycle('prev');
    });
    $(selectorNextButton).click(function () {
        $carousel.cycle('next');
    });

    // Animate in.
    $(selectorItem).animate({ top: 0, left: 0 }, 700, 'easeOutBounce');

    // Set up hover effect.
    $(selectorItem).hover(
        function () {
            $(this).children('.meta').stop().animate({ bottom: 0 }, 250)
        },
        function () {
            $(this).children('.meta').stop().animate({ bottom: -22 }, 100)
        }
    )

};
