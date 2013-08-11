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
    $('.mainview-content').css('height', valueToSet);
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
        result = $('<div id="points" class="text-center large-figure muted">'+ innerValue +'</div>');
    }else{
        result = $('<div id="points" class="text-center large-figure">'+ innerValue +'</div>');
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
    if( currentScrumValueIndex + 1 <= scrumValueMaxIndex){
        currentScrumValueIndex++;
        result = scrumValues[currentScrumValueIndex];
    }else{
        currentScrumValueIndex = 0;
    }
    return result;
}

var lastScrumValue = function(){
    var result = scrumValues[scrumValueMaxIndex];
    if( currentScrumValueIndex - 1 >= 0 ){
        currentScrumValueIndex--;
        result = scrumValues[currentScrumValueIndex];
    }else{
        currentScrumValueIndex = scrumValueMaxIndex;
    }
    return result;
}









