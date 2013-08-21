/**
 * Off button handler
 */
$( "button#info" ).click(function() {
    displayInfo();
});

$( "button#fullscreen" ).click(function() {
    toggleButtonsVisible();
});

/**
 * Settings
 */
$( "button#settings" ).click(function() {
    if( settingsAreVisible && isConf1Visible){
        displayConf1();
    }else{
        displaySettings();
    }
});

$( "button#conf1").click(function(){
    displayConf1();
});

$( "button#themeSilver").click(function(){
    displayConf1();
});

$( "button#themeRed").click(function(){
    displayConf1();
});

$( "button#themeBlue").click(function(){
    displayConf1();
});


/**
 * Main content handler
 */
$( "div#mainPointSegment" ).click(function() {
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
    toggleScrumPointsDisplay();
});

/**
 * Plus button handler
 */
$( "button#plus" ).click(function() {
    replaceScrumValueByPlusOrMinus(nextScrumValue());
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

