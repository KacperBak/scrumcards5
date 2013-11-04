/**
 * handler
 */
$("button#mainSymbolPreviewOpacityMinus").click(function() {
    decreaseOpacity();
    setOpacityValueToUi(getOpacityFactorBasedOnIndex());
    updateOpacityMainSymbol();
});

$("button#mainSymbolPreviewOpacityPlus").click(function() {
    increaseOpacity();
    setOpacityValueToUi(getOpacityFactorBasedOnIndex());
    updateOpacityMainSymbol();
});

/**
 * display
 */
var isMainSymbolOpacitySegmentVisible = false;

var displayMainSymbolOpacitySegment = function(){
    if(isMainSymbolOpacitySegmentVisible){
        $("#mainSymbolOpacitySegment").hide();
        $("#mainSymbolSegment").show();
        isMainSymbolOpacitySegmentVisible = false;

        //mainSegment
        $("div#mainSegment").hide();
    }else{
        $("#mainSymbolSegment").hide();
        $("#mainSymbolOpacitySegment").show();
        isMainSymbolOpacitySegmentVisible = true;

        $("div#mainSegment").show();
        updateOpacityMainSymbol();
        setOpacityValueToUi(getOpacityFactorBasedOnIndex());
    }
}

var setOpacityValueToUi = function(customizedValue){
    var child = "span#customizedOpacityValue";
    var parent = "h4#customizedOpacityParent";
    var replaceFragment = $('<span id="customizedOpacityValue">Opacity factor: '+ customizedValue +'</span>');
    replaceContent(parent, child, replaceFragment);
}

var updateOpacityMainSymbol = function(){
    var segmentHeight = $("#mainSymbolOpacitySegment").outerHeight(true);
    resizeElementDimensions(getPresentFontSizeFactor(), getMainContentHeightForSettings(segmentHeight));
    switchLargeFigureColor(isControlButtonsVisible);
}

/*
 * app logic
 */
var opacityValues = [0.0 , 0.025 , 0.05 , 0.075 , 0.1 , 0.2 , 0.3 , 0.4 , 0.5 , 0.6 , 0.7 , 0.8 , 0.9, 1.0];
var opacityValueMaxIndex = _.size(opacityValues) - 1;
var opacityIndex = 0;

var getOpacityFactorBasedOnIndex = function(){
    return opacityValues[opacityIndex];
}

var nextOpacityValue = function(){
    if( opacityIndex + 1 <= opacityValueMaxIndex){
        opacityIndex++;
    } else {
        opacityIndex = 0;
    }
    return getOpacityFactorBasedOnIndex();
}

var lastOpacityValue = function(){
    if( opacityIndex - 1 >= 0 ){
        opacityIndex--;
    } else {
        opacityIndex = opacityValueMaxIndex;
    }
    return getOpacityFactorBasedOnIndex();
}

var decreaseOpacity = function(){
    var opacity = lastOpacityValue();
    setOpacityIndex(opacityIndex);
}

var increaseOpacity = function(){
    var opacity = nextOpacityValue();
    setOpacityIndex(opacityIndex);
}

/**
 * init
 */
var initMainSymbolOpacitySegment = function(){
    $("div#mainSymbolOpacitySegment").hide();
}
