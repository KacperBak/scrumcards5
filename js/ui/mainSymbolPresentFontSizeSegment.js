/**
 * handler
 */
$("button#mainSymbolPresentFontSizeMinus").click(function() {
    decreasePresentFontSize();
    setPresentFontSizeValueToUi(getPresentFontSizeFactorFromLocalStorage());
    updatePresentMainSymbol();
});

$("button#mainSymbolPresentFontSizePlus").click(function() {
    increasePresentFontSize();
    setPresentFontSizeValueToUi(getPresentFontSizeFactorFromLocalStorage());
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
        setPresentFontSizeValueToUi(getPresentFontSizeFactorFromLocalStorage());
    }
}

var updatePresentMainSymbol = function(){
    var segmentHeight = $("#mainSymbolPresentFontSizeSegment").outerHeight(true);
    resizeElementDimensions(getPresentFontSizeFactorFromLocalStorage(), getMainContentHeightForSettings(segmentHeight));
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
    var currentFontSize = getPresentFontSizeFactorFromLocalStorage();
    currentFontSize = currentFontSize + 0.1;
    setPresentFontSizeFactorInLocalStorage(currentFontSize);
}

var decreasePresentFontSize = function(){
    var currentFontSize = getPresentFontSizeFactorFromLocalStorage();
    currentFontSize = currentFontSize - 0.1;
    if(currentFontSize > 0){
        setPresentFontSizeFactorInLocalStorage(currentFontSize);
    }
}

/**
 * init
 */
var initMainSymbolPresentFontSizeSegment = function(){
    $("div#mainSymbolPresentFontSizeSegment").hide();
}
