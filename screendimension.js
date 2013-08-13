/**
 * DEBUG
 */
var DEBUG_MODE = false;

/**
 * calculate screen dimension
 */
var PX_240 = 240;
var EM_240 = 1064;
var EM_DELTA = 1714;
var DIVISOR = 100;

/**
 *  320px -> 1484em
 *  640px -> 3562em
 *  Delta -> 2078em
 */

var setNewFontSize = function(size){
    var valueToSet = size + "em";
    $('.content').css('height', valueToSet);
}

var getWindowHeight = function(){
    var currentHeight = $(window).height();
    return currentHeight;
}

var calculateFontSizeFactor = function(){
    return EM_DELTA / PX_240;
}

var calculateNewFontSize = function(currentHeight){
    var result = PX_240;
    if(currentHeight >= PX_240){
        var pxDelta = currentHeight - PX_240;
        var emFactor = calculateFontSizeFactor();
        result = (pxDelta * emFactor + EM_240) / DIVISOR;
    }
    return result;
}

var displayCurrentHeight = function(){

    var currentHeight = getWindowHeight();
    var replaceFragment = getReplaceFragment(buttonsVisible, currentHeight);
    $("#points").remove();
    $("#main").append(replaceFragment);
    return currentHeight;
}

var resizeScreenDimension = function(){
    if(DEBUG_MODE){ console.log("resize: " + displayCurrentHeight()); }
    setNewFontSize(calculateNewFontSize(getWindowHeight()));
}

/**
 * Toggle button fade IN/OUT and muting the points
 */
var buttonsVisible = true;

var toggleButtonsVisible = function(){
    if(buttonsVisible){
        $("button").fadeOut();
        $("div#points").toggleClass("muted");
        buttonsVisible = false;
    }else{
        $("button").fadeIn();
        $("div#points").toggleClass("muted");
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

var scrumValues             = [1, 2, 3 , 5, 8, 13, 20, 40, 100];
var currentScrumValueIndex  = 0;
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














