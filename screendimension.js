/**
 * DEBUG
 */
var DEBUG_MODE = false;

/**
 * calculate dynamic height
 */
var PX_240 = 240;

var getWindowHeight = function(){
    var currentHeight = $(window).height();
    return currentHeight;
}

var calcHeight = function(height, basis, delta, divisor){
    var result = basis / divisor;
    if(height >= PX_240){
        var pxDelta = height - PX_240;
        var emFactor = delta / PX_240;
        result = (pxDelta * emFactor + basis) / divisor;
    }
    return result;
}

var calcFontSize = function(height, basis, divisor){
    var pxDelta = height - PX_240;
    var emFactor = basis / PX_240;
    return (pxDelta * emFactor + basis) / divisor;
}

/**
 *
 * @param calculatedHeight
 * @param scaleFactor
 * @returns {number}
 */
var calcLineHeight = function(calculatedHeight, actualHeight,  scaleFactor){
    return calculatedHeight / ( actualHeight / scaleFactor );
}

/**
 * resize screen elements
 */

var setMainContentRatioValues = function(height, fontSize, lineHeight){
    $('.content').css('height', height + "em");
    $('.large-figure').css('font-size', fontSize + "em");
    $('.large-figure').css('line-height', lineHeight + "em");
}

var setScrumRowsRatioValues = function(height, fontSize){
    $('.spRow1').css('height', height + "em");
    $('.spRow2').css('height', height + "em");
    $('.spRow3').css('height', height + "em");
    $('.spRow4').css('height', height + "em");

    $('.scrumValue').css('font-size', fontSize + "em");
}

var resizeElementDimensions = function(){
    //main content
    var actualHeight = getWindowHeight();
    var mainContentHeight = calcHeight(actualHeight, 1064, 1714, 100);
    var mainContentFontSize = calcFontSize(actualHeight, 5500, 1000);
    var mainContentLineHeight = calcLineHeight(mainContentHeight, actualHeight, 43.6);
    setMainContentRatioValues(mainContentHeight, mainContentFontSize, mainContentLineHeight);

    //scrum values
    var ROWS = 4.0;
    var scrumValesHeight = mainContentHeight / ROWS;
    var scrumValuesFontSize = calcFontSize(scrumValesHeight, 1300, 10);
    setScrumRowsRatioValues( scrumValesHeight, scrumValuesFontSize);
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
    resizeElementDimensions();
}

var setScrumValueBasedOnIndex = function(i){
    if(pointsAreVisible){
        currentIndex = i;
        replaceScrumValue(scrumValues[currentIndex]);
        togglePointsDisplay();
        $("button").fadeIn();
    }
}

/**
 * Scrum values display
 */
var pointsAreVisible = false;

var togglePointsDisplay = function(){
    $("button").fadeOut();
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














