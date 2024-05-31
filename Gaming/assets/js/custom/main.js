$(document).ready(function() {
    const heading = $('.heading');
    const windowHeight = $(window).height();
    const revealTrigger = $('#reveal-trigger');
    const revealOffset = revealTrigger.offset().top - windowHeight;

    let delayTimer;

    $(window).scroll(function() {
        const scrollPos = $(window).scrollTop();

        // Check if the scroll position is greater than or equal to the reveal offset
        if (scrollPos >= revealOffset) {
            clearTimeout(delayTimer);
            delayTimer = setTimeout(function() {
                heading.addClass('show');
            }, 300); // Adjust the delay time in milliseconds
        } else {
            heading.removeClass('show');
        }
    });
});