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
    var scrumCardValue = lastScrumValue();
    var replaceFragment = getReplaceFragment(buttonsVisible, scrumCardValue);
    $("div#points").remove();
    $("div#main").append(replaceFragment);
});

/**
 * Plus button handler
 */
$( "button#plus" ).click(function() {
    var scrumCardValue = nextScrumValue();
    var replaceFragment = getReplaceFragment(buttonsVisible, scrumCardValue);
    $("div#points").remove();
    $("div#main").append(replaceFragment);
});

/**
 * Handle window resize
 */
window.addEventListener("resize", function() {
    resizeScreenDimension();
}, false);