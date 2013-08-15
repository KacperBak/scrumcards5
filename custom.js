/**
 * Main content handler
 */
$( "div#segmentMainPoint" ).click(function() {
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
 * Scrum points handler
 */
$( "div#point0" ).click(function() {
    setScrumValueBasedOnIndex(0);
});
$( "div#point1" ).click(function() {
    setScrumValueBasedOnIndex(1);
});
$( "div#point2" ).click(function() {
    setScrumValueBasedOnIndex(2);
});
$( "div#point3" ).click(function() {
    setScrumValueBasedOnIndex(3);
});
$( "div#point4" ).click(function() {
    setScrumValueBasedOnIndex(4);
});
$( "div#point5" ).click(function() {
    setScrumValueBasedOnIndex(5);
});
$( "div#point6" ).click(function() {
    setScrumValueBasedOnIndex(6);
});
$( "div#point7" ).click(function() {
    setScrumValueBasedOnIndex(7);
});
$( "div#point8" ).click(function() {
    setScrumValueBasedOnIndex(8);
});
$( "div#point9" ).click(function() {
    setScrumValueBasedOnIndex(9);
});
$( "div#point10" ).click(function() {
    setScrumValueBasedOnIndex(10);
});
$( "div#point11" ).click(function() {
    setScrumValueBasedOnIndex(11);
});

/**
 * Handle window resize
 */
window.addEventListener("resize", function() {
    resizeElementDimensions();
}, false);

