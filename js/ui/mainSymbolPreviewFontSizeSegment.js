/**
 * handler
 */
$("button#mainSymbolPreviewFontSizeMinus").click(function() {
    decreasePreviewFontSize();
    setPreviewFontSizeValueToUi(getPreviewFontSizeFactorFromLocalStorage());
    updatePreviewMainSymbol();
});

$("button#mainSymbolPreviewFontSizePlus").click(function() {
    increasePreviewFontSize();
    setPreviewFontSizeValueToUi(getPreviewFontSizeFactorFromLocalStorage());
    updatePreviewMainSymbol();
});

/**
 * display
 */
var isMainSymbolPreviewFontSizeSegmentVisible = false;

var displayMainSymbolPreviewFontSizeSegment = function(){
    if(isMainSymbolPreviewFontSizeSegmentVisible){

        //previewFontSizeSegment
        $("#mainSymbolPreviewFontSizeSegment").hide();
        $("#mainSymbolSegment").show();
        isMainSymbolPreviewFontSizeSegmentVisible = false;

        //mainSegment
        $("div#mainSegment").hide();
    }else{

        //previewFontSizeSegment
        $("#mainSymbolSegment").hide();
        $("#mainSymbolPreviewFontSizeSegment").show();
        isMainSymbolPreviewFontSizeSegmentVisible = true;

        //mainSegment
        $("div#mainSegment").show();
        updatePreviewMainSymbol();
        setPreviewFontSizeValueToUi(getPreviewFontSizeFactorFromLocalStorage());
    }
}

var updatePreviewMainSymbol = function(){
    var segmentHeight = $("#mainSymbolPreviewFontSizeSegment").outerHeight(true);
    resizeElementDimensions(getPreviewFontSizeFactorFromLocalStorage(), getMainContentHeightForSettings(segmentHeight));
}

var setPreviewFontSizeValueToUi = function(customizedValue){
    var child = "span#customizedPreviewFontSizeValue";
    var parent = "h4#customizedPreviewFontSizeParent";
    var replaceFragment = $('<span id="customizedPreviewFontSizeValue">Customized font size: '+ customizedValue +'</span>');
    replaceContent(parent, child, replaceFragment);
}
/*
 * app logic
 */
var increasePreviewFontSize = function(){
    var currentFontSize = getPreviewFontSizeFactorFromLocalStorage();
    currentFontSize = currentFontSize + 0.1;
    setPreviewFontSizeFactorInLocalStorage(currentFontSize);
}

var decreasePreviewFontSize = function(){
    var currentFontSize = getPreviewFontSizeFactorFromLocalStorage();
    currentFontSize = currentFontSize - 0.1;
    if(currentFontSize > 0){
        setPreviewFontSizeFactorInLocalStorage(currentFontSize);
    }
}

/**
 * init
 */
var initMainSymbolPreviewFontSizeSegment = function(){
    $("div#mainSymbolPreviewFontSizeSegment").hide();
}
