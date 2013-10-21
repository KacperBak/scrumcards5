/**
 * handler
 */
$("button#mainSymbolPresentFontSizeMinus").click(function() {
    decreasePresentFontSize();
    setPresentFontSizeValueToUi(getPresentFontSizeFactor());
    updateMainSymbol();
});

$("button#mainSymbolPresentFontSizePlus").click(function() {
    increasePresentFontSize();
    setPresentFontSizeValueToUi(getPresentFontSizeFactor());
    updateMainSymbol();
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
    }else{

        //PresentFontSizeSegment
        $("#mainSymbolSegment").hide();
        $("#mainSymbolPresentFontSizeSegment").show();
        isMainSymbolPresentFontSizeSegmentVisible = true;

        //mainSegment
        $("div#mainSegment").show();
        updateMainSymbol();
        setPresentFontSizeValueToUi(getPresentFontSizeFactor());
    }
}

var updateMainSymbol = function(){
    setVisibleMainSymbol();
    var segmentHeight = $("#mainSymbolPresentFontSizeSegment").outerHeight(true);
    resizeElementDimensions(getMainSymbolFontSize(), getMainContentHeightForSettings(segmentHeight));
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
