/**
 * handler
 */
$( "div#specialChar0" ).click(function() {
    setSpecialCharacterBasedOnIndex(0);
});

/*
$( "div#specialChar1" ).click(function() {
    setSpecialCharacterBasedOnIndex(1);
});

$( "div#specialChar2" ).click(function() {
    setSpecialCharacterBasedOnIndex(2);
});

$( "div#specialChar3" ).click(function() {
    setSpecialCharacterBasedOnIndex(3);
});

$( "div#specialChar4" ).click(function() {
    setSpecialCharacterBasedOnIndex(4);
});

$( "div#specialChar5" ).click(function() {
    setSpecialCharacterBasedOnIndex(5);
});

$( "div#specialChar6" ).click(function() {
    setSpecialCharacterBasedOnIndex(6);
});

$( "div#specialChar7" ).click(function() {
    setSpecialCharacterBasedOnIndex(7);
});

$( "div#specialChar8" ).click(function() {
    setSpecialCharacterBasedOnIndex(8);
});

$( "div#specialChar9" ).click(function() {
    setSpecialCharacterBasedOnIndex(9);
});


$( "div#specialChar10" ).click(function() {
    setSpecialCharacterBasedOnIndex(10);
});

$( "div#specialChar11" ).click(function() {
    setSpecialCharacterBasedOnIndex(11);
});
*/

/*
 * display
 */

var isSpecialCharsVisible = false;

var displaySpecialChars = function(){
    $("button").fadeOut();
    if(isSpecialCharsVisible){
        isSpecialCharsVisible = false;
        $("div#mainSegment").show();
        $("div#specialCharsSegment").hide();
        switchLargeFigureColor(!isSpecialCharsVisible);
    }else{
        isSpecialCharsVisible = true;
        $("div#mainSegment").hide();
        $("div#specialCharsSegment").show();
        switchLargeFigureColor(!isScrumPointsVisible);
    }
}

var setSpecialCharacterBasedOnIndex = function(i){
    if(isSpecialCharsVisible){
        specialCharacterIndex = i;
        replaceScrumValue(scrumValues[currentIndex]);
        replaceScrumValue(specialCharacterValues[specialCharacterIndex]);
        displaySpecialChars()
        $("button").fadeIn();
    }
}


/*
 * app logic
 */

var sc0 = "sc0";
var sc1 = "sc1";
var sc2 = "sc2";
var sc3 = "sc3";
var sc4 = "sc4";
var sc5 = "sc5";
var sc6 = "sc6";
var sc7 = "sc7";
var sc8 = "sc8";
var sc9 = "sc9";
var sc10 = "sc10";
var sc11 = "sc11";

var specialCharacterValues  = [sc0, sc1, sc2, sc3, sc4, sc5, sc6, sc7, sc8, sc9, sc10, sc11];
var specialCharacterIndex   = 0;


/**
 * init
 */
var initSpecialCharsSegment = function(){
    $("div#specialCharsSegment").hide();
}
