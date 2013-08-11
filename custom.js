/**
 * Main content handler
 */
$( "div#main" ).click(function() {
    toggleButtonsVisible();
});

/**
 * Minus button handler
 */
$( "button#minus" ).click(function() {
    var number = $('<span id="points">'+ counter +'</span>');
    $("span#points").remove();
    $("p").append(number);
});

/**
 * Plus button handler
 */
$( "button#plus" ).click(function() {
    var number = $('<span id="points">'+ counter +'</span>');
    $("span#points").remove();
    $("p").append(number);
});

/**
 * Handle window resize
 */
window.addEventListener("resize", function() {
    resizeScreenDimension();
}, false);