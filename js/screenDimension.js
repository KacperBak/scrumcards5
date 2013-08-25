/**
 * math
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