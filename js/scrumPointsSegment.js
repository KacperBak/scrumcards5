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
//        switchLargeFigureColor(!isScrumPointsVisible);
    }else{
        isScrumPointsVisible = true;
        $("div#mainSegment").hide();
        $("div#scrumPointsSegment").show();
//        switchLargeFigureColor(!isScrumPointsVisible);
    }
}

var setScrumValueBasedOnIndex = function(i){
    if(isScrumPointsVisible){
        currentIndex = i;
        replaceScrumValue(scrumValues[currentIndex]);
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

var sv0 = 0;
var sv1 = "&#189;";
var sv2 = 1;
var sv3 = 2;
var sv4 = 3;
var sv5 = 5;
var sv6 = 8;
var sv7 = 13;
var sv8 = 20;
var sv9 = 40;
var sv10 = 100;
var sv11 = "&#63;";

var scrumValues             = [sv0, sv1, sv2, sv3, sv4, sv5, sv6, sv7, sv8, sv9, sv10, sv11];
var currentIndex            = 0;
var scrumValueMaxIndex      = _.size(scrumValues) - 1;

var nextScrumValue = function(){
    var result = scrumValues[0];
    if( currentIndex + 1 <= scrumValueMaxIndex){
        currentIndex++;
        result = scrumValues[currentIndex];
    }else{
        currentIndex = 0;
    }
    return result;
}

var lastScrumValue = function(){
    var result = scrumValues[scrumValueMaxIndex];
    if( currentIndex - 1 >= 0 ){
        currentIndex--;
        result = scrumValues[currentIndex];
    }else{
        currentIndex = scrumValueMaxIndex;
    }
    return result;
}

/**
 * init
 */

var initScrumPointsSegment = function(){
    $("div#scrumPointsSegment").hide();
}
