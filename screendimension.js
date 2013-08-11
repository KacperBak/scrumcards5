/**
 * DEBUG
 */
var DEBUG_MODE = true;

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
    var replaceFragment = null;
    if(buttonsVisible){
        replaceFragment = $('<div id="points" class="text-center large-figure muted">'+ currentHeight +'</div>');
    }else{
        replaceFragment = $('<div id="points" class="text-center large-figure">'+ currentHeight +'</div>');
    }

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



