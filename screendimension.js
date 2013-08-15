/**
 * DEBUG
 */
var DEBUG_MODE = false;

/**
 * calculate dynamic height
 */
var PX_240 = 240;
var EM_240 = 1064;
var EM_DELTA = 1714;
var DIVISOR = 100;

var getWindowHeight = function(){
    var currentHeight = $(window).height();
    return currentHeight;
}

var calculateNewHeight = function(currentHeight){
    var result = EM_240 / DIVISOR;
    if(currentHeight >= PX_240){
        var pxDelta = currentHeight - PX_240;
        var emFactor = EM_DELTA / PX_240;
        result = (pxDelta * emFactor + EM_240) / DIVISOR;
    }
    return result;
}

/**
 * calculate dynamic font size
 */
var FONTSIZE_240 = 6000;
var FONTSIZE_DIVISOR = 1000;

var calculateNewFontSize = function(currentHeight){
    var result = FONTSIZE_240 / FONTSIZE_DIVISOR;
    if(currentHeight >= PX_240){
        var pxDelta = currentHeight - PX_240;
        var emFactor = FONTSIZE_240 / PX_240;
        result = (pxDelta * emFactor + FONTSIZE_240) / FONTSIZE_DIVISOR;
    }
    return result;
}

/**
 * fontsize 7000 -> scaleFactor 34.26
 * fontsize 8000 -> scaleFactor 29
 *
 * @param calculatedHeight
 * @param scaleFactor
 * @returns {number}
 */
var calculateNewLineHeight = function(calculatedHeight, scaleFactor){
    return calculatedHeight / ( getWindowHeight() / scaleFactor );
}

/**
 * resize screen elements
 */

var setContentHeight = function(size){
    var ROWS = 4.0;
    $('.content').css('height', size + "em");
    $('.spRow1').css('height', (size / ROWS) + "em");
    $('.spRow2').css('height', (size / ROWS) + "em");
    $('.spRow3').css('height', (size / ROWS) + "em");
    $('.spRow4').css('height', (size / ROWS) + "em");
}

var setContentFontSize = function(size){
    $('.large-figure').css('font-size', size + "em");
}

var setContentLineHeight = function(size){
    $('.large-figure').css('line-height', size + "em");
}

var resizeScreenDimension = function(){
    var currentContentHeight = calculateNewHeight(getWindowHeight());
    setContentHeight(currentContentHeight);

    var currentFontSize = calculateNewFontSize(getWindowHeight());
    setContentFontSize(currentFontSize);

    var lineHeight = calculateNewLineHeight(currentContentHeight, 39.958);
    setContentLineHeight(lineHeight);
}

var resizeScrumValueDimension = function(){

}

/**
 * Toggle button fade IN/OUT and muting the points
 */
var buttonsVisible = true;

var toggleButtonsVisible = function(){
    if(buttonsVisible){
        $("button").fadeOut();
        $("div#mainPointContent").toggleClass("muted");
        buttonsVisible = false;
    }else{
        $("button").fadeIn();
        $("div#mainPointContent").toggleClass("muted");
        buttonsVisible = true;
    }
}

/**
 * shared functions
 */

var getReplaceFragment = function(buttonsVisibleState, innerValue){
    var result = null;
    if(buttonsVisibleState){
        result = $( '<div id="mainPointContent" class="span12 text-center large-figure muted">'+ innerValue +'</div>');
    }else{
        result = $( '<div id="mainPointContent" class="span12 text-center large-figure">'+ innerValue +'</div>' );
    }
    return result;
}

/**
 * Scrum values
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

var replaceScrumValue = function(scrumCardValue){
    var replaceFragment = getReplaceFragment(buttonsVisible, scrumCardValue);
    $("div#mainPointContent").remove();
    $("div#segmentMainPoint").append(replaceFragment);
    resizeScreenDimension();
}

var setScrumValueBasedOnIndex = function(i){
    if(pointsAreVisible){
        currentIndex = i;
        replaceScrumValue(scrumValues[currentIndex]);
        togglePointsDisplay();
    }
}

/**
 * Scrum values display
 */
var pointsAreVisible = false;

var togglePointsDisplay = function(){
    if(pointsAreVisible){
        $("div#segmentMainPoint").show();
        $("div#segmentScrumPoints").hide();
        pointsAreVisible = false;
    }else{
        $("div#segmentMainPoint").hide();
        $("div#segmentScrumPoints").show();
        pointsAreVisible = true;
    }
}

var initPointsDisplay = function(){
    $("div#segmentScrumPoints").hide();
}














