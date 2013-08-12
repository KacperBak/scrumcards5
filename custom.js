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
        var scrumCardValue = lastScrumValue();
        var replaceFragment = getReplaceFragment(buttonsVisible, scrumCardValue);
        $("div#point4").remove();
        $("div#point5").remove();
        $("div#point6").remove();
        $("div#row2").append(replaceFragment);
    }
});

/**
 * Point button handler
 */
$( "button#point").click(function(){
    switchPointsDisplay();
});

/**
 * Plus button handler
 */
$( "button#plus" ).click(function() {
    if(!pointsAreVisible){
        var scrumCardValue = nextScrumValue();
        var replaceFragment = getReplaceFragment(buttonsVisible, scrumCardValue);
        $("div#point4").remove();
        $("div#point5").remove();
        $("div#point6").remove();
        $("div#row2").append(replaceFragment);
    }
});

/**
 * Handle window resize
 */
window.addEventListener("resize", function() {
    resizeScreenDimension();
}, false);