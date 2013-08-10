var size = 1.0;
var PX_320 = 320;
var EM_320 = 1484;
var EM_DELTA = 2078;
var DIVISOR = 1000;

/**
 *  320px -> 1484em
 *  640px -> 3562em
 *  Delta -> 2078em
 */

var setNewFontSize = function(size){
    var valueToSet = size + "em";
    $('.large-figure').css('line-height', valueToSet);
}

var getWindowHeight = function(){
    var currentHeight = $(window).height();
    console.log("height: " + currentHeight);
    return currentHeight;
}

var calculateFontSizeFactor = function(){
    return EM_DELTA / PX_320;
}

var calculateNewFontSize = function(currentHeight){
    var result = PX_320;
    if(currentHeight >= PX_320){
        var pxDelta = currentHeight - PX_320;
        var emFactor = calculateFontSizeFactor();
        result = (pxDelta * emFactor + EM_320) / DIVISOR;
    }
    return result;
}

/**
 * Handle window resize
 */
window.addEventListener("resize", function() {
    setNewFontSize(calculateNewFontSize(getWindowHeight()));
}, false);

