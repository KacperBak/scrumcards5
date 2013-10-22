/**
 * handler
 */
$("button#mainSymbolPresentFontSizeMinus").click(function() {
    decreasePresentFontSize();
    setPresentFontSizeValueToUi(getPresentFontSizeFactor());
    updatePresentMainSymbol();
});

$("button#mainSymbolPresentFontSizePlus").click(function() {
    increasePresentFontSize();
    setPresentFontSizeValueToUi(getPresentFontSizeFactor());
    updatePresentMainSymbol();
});

/**
 * display
 */
var isMainSymbolPresentFontSizeSegmentVisible = false;

var displayMainSymbolPresentFontSizeSegment = function(){
    if(isMainSymbolPresentFontSizeSegmentVisible){

        //PresentFontSizeSegment
        $("#mainSymbolPresentFontSizeSegment").hide();
        $("#mainSymbolSegment").show();
        isMainSymbolPresentFontSizeSegmentVisible = false;

        //mainSegment
        $("div#mainSegment").hide();
        switchLargeFigureColor(!isMainSymbolPresentFontSizeSegmentVisible);
        switchLargeFigureBackground(!isMainSymbolPresentFontSizeSegmentVisible);
    }else{

        //PresentFontSizeSegment
        $("#mainSymbolSegment").hide();
        $("#mainSymbolPresentFontSizeSegment").show();
        isMainSymbolPresentFontSizeSegmentVisible = true;

        //mainSegment
        $("div#mainSegment").show();
        switchLargeFigureColor(!isMainSymbolPresentFontSizeSegmentVisible);
        switchLargeFigureBackground(!isMainSymbolPresentFontSizeSegmentVisible);
        updatePresentMainSymbol();
        setPresentFontSizeValueToUi(getPresentFontSizeFactor());
    }
}

var updatePresentMainSymbol = function(){
    var segmentHeight = $("#mainSymbolPresentFontSizeSegment").outerHeight(true);
    resizeElementDimensions(getPresentFontSizeFactor(), getMainContentHeightForSettings(segmentHeight));
}

var setPresentFontSizeValueToUi = function(customizedValue){
    var child = "span#customizedPresentFontSizeValue";
    var parent = "h4#customizedPresentFontSizeParent";
    var replaceFragment = $('<span id="customizedPresentFontSizeValue">Customized font size: '+ customizedValue +'</span>');
    replaceContent(parent, child, replaceFragment);
}
/*
 * app logic
 */
var increasePresentFontSize = function(){
    var currentFontSize = getPresentFontSizeFactor();
    currentFontSize = currentFontSize + 0.1;
    setPresentFontSizeFactor(currentFontSize);
}

var decreasePresentFontSize = function(){
    var currentFontSize = getPresentFontSizeFactor();
    currentFontSize = currentFontSize - 0.1;
    if(currentFontSize > 0){
        setPresentFontSizeFactor(currentFontSize);
    }
}

/**
 * init
 */
var initMainSymbolPresentFontSizeSegment = function(){
    $("div#mainSymbolPresentFontSizeSegment").hide();
}
