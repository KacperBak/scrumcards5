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
    var scrumValuesFontSize = calcFontSize(scrumValesHeight, 1100, 10);
    setScrumRowsRatioValues( scrumValesHeight, scrumValuesFontSize);
}

/**
 * Toggle button fade IN/OUT and muting the points
 */
var buttonsVisible = true;

var toggleButtonsVisible = function(){
    if(!isScrumPointsVisible && !isInfoVisible){
        if(buttonsVisible){
            $("button").fadeOut();
            $("div#mainContent").toggleClass("muted");
            $(".large-figure").css("background", "#E7E7E7");
            $(".large-figure").css({background: "-moz-linear-gradient(top, #a7a7a7 , #E7E7E7, #FAFAFA , #E7E7E7, #a7a7a7)"});
            $(".large-figure").css({background: "-webkit-linear-gradient(top, #a7a7a7 , #E7E7E7, #FAFAFA , #E7E7E7, #a7a7a7)"});
            $(".large-figure").css({background: "-o-linear-gradient(top, #a7a7a7 , #E7E7E7, #FAFAFA , #E7E7E7, #a7a7a7)"});
            $(".large-figure").css({background: "-ms-linear-gradient(top, #a7a7a7 , #E7E7E7, #FAFAFA , #E7E7E7, #a7a7a7)"});
            $(".large-figure").css({background: "linear-gradient(top, #a7a7a7 , #E7E7E7, #FAFAFA , #E7E7E7, #a7a7a7)"});
            buttonsVisible = false;
        }else{
            $("button").fadeIn();
            $("div#mainContent").toggleClass("muted");
            $(".large-figure").css("background", "#a7a7a7");
            $(".large-figure").css({background: "-moz-linear-gradient(top, #a7a7a7 , #a7a7a7, #a7a7a7)"});
            $(".large-figure").css({background: "-webkit-linear-gradient(top, #a7a7a7 , #a7a7a7, #a7a7a7)"});
            $(".large-figure").css({background: "-o-linear-gradient(top, #a7a7a7 , #a7a7a7, #a7a7a7)"});
            $(".large-figure").css({background: "-ms-linear-gradient(top, #a7a7a7 , #a7a7a7, #a7a7a7)"});
            $(".large-figure").css({background: "linear-gradient(top, #a7a7a7 , #a7a7a7, #a7a7a7)"});
            buttonsVisible = true;
        }
    }
}

/**
 * shared functions
 */

var getReplaceFragment = function(buttonsVisibleState, innerValue){
    var result = null;
    if(buttonsVisibleState){
        result = $( '<div id="mainContent" class="span12 text-center large-figure muted">'+ innerValue +'</div>');
    }else{
        result = $( '<div id="mainContent" class="span12 text-center large-figure">'+ innerValue +'</div>' );
    }
    return result;
}

/**
 * Scrum values
 */


var replaceScrumValueByPlusOrMinus = function(scrumCardValue){
    if(!isScrumPointsVisible && !isInfoVisible){
        replaceScrumValue(scrumCardValue);
    }
}

var replaceScrumValue = function(scrumCardValue){
    var replaceFragment = getReplaceFragment(buttonsVisible, scrumCardValue);
    $("div#mainContent").remove();
    $("div#mainSegment").append(replaceFragment);
    resizeElementDimensions();
}

/**
 * this method should be called at least to init the app
 */
var initSc5 = function(){
    initScrumPointsSegment();
    initInfoSegment();
    initSettingsSegment();
    initThemesSegment();
    resizeElementDimensions();
}

/**
 * Handle window resize
 */
window.addEventListener("resize", function() {
    resizeElementDimensions();
}, false);