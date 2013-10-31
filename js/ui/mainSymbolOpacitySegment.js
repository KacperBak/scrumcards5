/**
 * handler
 */
$("button#mainSymbolPreviewOpacityMinus").click(function() {
    decreaseOpacity();
    setOpacityValueToUi(getOpacityFactor());
    updateOpacityMainSymbol();
});

$("button#mainSymbolPreviewOpacityPlus").click(function() {
    increaseOpacity();
    setOpacityValueToUi(getOpacityFactor());
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
        setOpacityValueToUi(getOpacityFactor());
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
}

/*
 * app logic
 */


var opacityValues = [0.0 , 0.025 , 0.05 , 0.075 , 0.1 , 0.2 , 0.3 , 0.4 , 0.5 , 0.6 , 0.7 , 0.8 , 0.9, 1.0];
var opacityValueMaxIndex = _.size(opacityValues) - 1;
var opacityIndex = opacityValueMaxIndex;

var nextOpacityValue = function(){
    var result = opacityValues[0];
    if( opacityIndex + 1 <= opacityValueMaxIndex){
        opacityIndex++;
        result = opacityValues[opacityIndex];
    } else {
        opacityIndex = 0;
    }
    return result;
}

var lastOpacityValue = function(){
    if( opacityIndex - 1 >= 0 ){
        opacityIndex--;
    } else {
        opacityIndex = opacityValueMaxIndex;
    }
    return opacityValues[opacityIndex];
}

var decreaseOpacity = function(){
    var opacity = lastOpacityValue();
    setOpacityFactor(opacity);
    console.log("decreaseOpacity to: " + opacity);
}

var increaseOpacity = function(){
    var opacity = nextOpacityValue();
    setOpacityFactor(opacity);
    console.log("increaseOpacity to: " + opacity);
}

/**
 * init
 */
var initMainSymbolOpacitySegment = function(){
    $("div#mainSymbolOpacitySegment").hide();
}
