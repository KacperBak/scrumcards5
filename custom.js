/**
 * Main content handler
 */
$( "div#main" ).click(function() {
    if(!pointsAreVisible){
        toggleButtonsVisible();
    }
});

/**
 * Minus button handler
 */
$( "button#minus" ).click(function() {
    if(!pointsAreVisible){
        replaceScrumValue(lastScrumValue());
    }
});

/**
 * Point button handler
 */
$( "button#point").click(function(){
    togglePointsDisplay();
});

/**
 * Plus button handler
 */
$( "button#plus" ).click(function() {
    if(!pointsAreVisible){
        replaceScrumValue(nextScrumValue());
    }
});

/**
 * Handle window resize
 */
window.addEventListener("resize", function() {
    resizeScreenDimension();
}, false);