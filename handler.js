/**
 * Off button handler
 */
$( "button#fullscreen" ).click(function() {
    toggleButtonsVisible();
});

/**
 * Main content handler
 */
$( "div#mainSegment" ).click(function() {
    toggleButtonsVisible();
});

/**
 * Minus button handler
 */
$( "button#minus" ).click(function() {
    replaceScrumValueByPlusOrMinus(lastScrumValue());
});

/**
 * Point button handler
 */
$( "button#point").click(function(){
    displayScrumPoints();
});

/**
 * Plus button handler
 */
$( "button#plus" ).click(function() {
    replaceScrumValueByPlusOrMinus(nextScrumValue());
});





