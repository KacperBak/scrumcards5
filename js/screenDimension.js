
var PX_240 = 240;

var getWindowHeight = function(){
    return $(window).height();
}

/**
 * some voodoo composed math
 */
var calcMostFittingFontSize = function(height, basis, divisor){
    var pxDelta = height - PX_240;
    var emFactor = basis / PX_240;
    return (pxDelta * emFactor + basis) / divisor;
}

/**
 * content = window - header - footer; (in px)
 */
var calcHeight = function(windowHeight){
    return windowHeight - 90;
}

/**
 * resize screen elements
 */
var setMainContentRatioValues = function(height, fontSize, lineHeight){
    $('.content').css('height', height + "px");
    $('.large-figure').css('font-size', fontSize + "em");
    $('.large-figure').css('line-height', lineHeight + "px");
}

var setScrumRowsRatioValues = function(height, fontSize){
    $('.spRow1').css('height', height + "px");
    $('.spRow2').css('height', height + "px");
    $('.spRow3').css('height', height + "px");
    $('.spRow4').css('height', height + "px");
    $('.selectValue').css('font-size', fontSize + "em");
}

var resizeElementDimensions = function(fontSizeFactor){
    //main content
    var actualHeight = getWindowHeight();
    var mainContentHeight = calcHeight(actualHeight);
    var mainContentFontSize = calcMostFittingFontSize(actualHeight, 5500, 1000);
    setMainContentRatioValues(mainContentHeight, mainContentFontSize * fontSizeFactor, mainContentHeight);

    //scrum values
    var ROWS = 4.0;
    var selectValueHeight = mainContentHeight / ROWS;
    var selectValueFontSize = calcMostFittingFontSize(selectValueHeight, 7950, 1000);
    setScrumRowsRatioValues( selectValueHeight, selectValueFontSize);
}

var getMainSymbolFontSize = function(){
    var smallFontSize    = getSmallFontSizeInitFactor();
    var normaFontSize    = getNormalFontSizeInitFactor();
    var result = normaFontSize;

    if(isMainSymbolSmall()){
        result = smallFontSize;
    }
    if(!isControlButtonsVisible){
        result = normaFontSize;
    }
    return result;
}

