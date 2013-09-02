/**
 * handler
 */
$( "div#specialChar0" ).click(function() {
    setSpecialCharacterBasedOnIndex(0);
});

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
        replaceSpecialCharacterValue(specialCharacterValues[specialCharacterIndex]);
        displaySpecialChars()
        $("button").fadeIn();
    }
}

var replaceSpecialCharacterValue = function(scValue){
    replaceMainContent($( '<div id="mainContent" class="span12 text-center large-figure" data-icon="'+ scValue +'"></div>'));
    switchLargeFigureColor(isControlButtonsVisible);
}


/*
 * app logic
 */

var sc0 = "&#xe007;";
var sc1 = "&#xe009;";
var sc2 = "&#xe008;";
var sc3 = "&#xe004;";
var sc4 = "&#xe000;";
var sc5 = "&#xe005;";
var sc6 = "&#xe003;";
var sc7 = "&#xe00a;";
var sc8 = "&#xe00b;";
var sc9 = "&#xe00d;";
var sc10 = "&#xe00e;";
var sc11 = "&#xe00c;";

var specialCharacterValues  = [sc0, sc1, sc2, sc3, sc4, sc5, sc6, sc7, sc8, sc9, sc10, sc11];
var specialCharacterIndex   = 0;


/**
 * init
 */
var initSpecialCharsSegment = function(){
    $("div#specialCharsSegment").hide();
}
