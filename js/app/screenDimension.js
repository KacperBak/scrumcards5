
var PX_240 = 240;

var HEADER_AND_FOOTER_HEIGHT = 90;

/**
 * some voodoo composed math
 */
var calcMostFittingFontSize = function(height, basis, divisor){
    var pxDelta = height - PX_240;
    var emFactor = basis / PX_240;
    return (pxDelta * emFactor + basis) / divisor;
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

/**
 * content = window - header - footer; (in px)
 */
var getMainContentHeight = function(){
    return getWindowDeviceHeight() - HEADER_AND_FOOTER_HEIGHT;
}

var getMainContentHeightForSettings = function(segmentHeight){
    return getWindowDeviceHeight() - segmentHeight -  HEADER_AND_FOOTER_HEIGHT;
}

/**
 * Absolut heigt of device
 */
var getWindowDeviceHeight = function(){
    return $(window).height();
}

var resizeElementDimensions = function(fontSizeFactor, mainContentHeight){
    //main content
    var actualHeight = getWindowDeviceHeight();
    var mainContentFontSize = calcMostFittingFontSize(actualHeight, 5500, 1000);
    setMainContentRatioValues(mainContentHeight, mainContentFontSize * fontSizeFactor, mainContentHeight);

    //scrum values
    var ROWS = 4.0;
    var selectValueHeight = mainContentHeight / ROWS;
    var selectValueFontSize = calcMostFittingFontSize(selectValueHeight, 7950, 1000);
    setScrumRowsRatioValues( selectValueHeight, selectValueFontSize);
}

var getMainSymbolFontSize = function(){
    var smallFontSize    = getCustomFontSizeFactor();
    var normaFontSize    = getNormalFontSizeFactor();
    var result = normaFontSize;

    if(isMainSymbolSmall()){
        result = smallFontSize;
    }
    if(!isControlButtonsVisible){
        result = normaFontSize;
    }
    return result;
}

