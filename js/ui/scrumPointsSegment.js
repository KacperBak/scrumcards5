/**
 * handler
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

/*
 * display
 */

var isScrumPointsVisible = false;

var displayScrumPoints = function(){
    $("button").fadeOut();
    if(isScrumPointsVisible){
        isScrumPointsVisible = false;
        $("div#mainSegment").show();
        $("div#scrumPointsSegment").hide();
        switchLargeFigureColor(!isScrumPointsVisible);
    }else{
        isScrumPointsVisible = true;
        $("div#mainSegment").hide();
        $("div#scrumPointsSegment").show();
        switchLargeFigureColor(!isScrumPointsVisible);
    }
}

var setScrumValueBasedOnIndex = function(i){
    if(isScrumPointsVisible){
        valueIndex = i;
        replaceScrumValue(getValueBasedOnDeckIndex());
        displayScrumPoints();
        $("button").fadeIn();
    }
}

var replaceScrumValueByPlusOrMinus = function(scrumCardValue){
    if(!isScrumPointsVisible){
        replaceScrumValue(scrumCardValue);
    }
}

/*
 * app logic
 */


/**
 * init
 */

var initScrumPointsSegment = function(){
    $("div#scrumPointsSegment").hide();
}
