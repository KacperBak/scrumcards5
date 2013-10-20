/**
 * handler
 */
$("button#mainSymbolPreviewFontSizeOn").click(function() {
    writeToLocalStorage(LS_OVERRIDE_PREVIEW_FONT_SIZE_MAIN_SYMBOL, true);
    updateMainSymbol();
});

$("button#mainSymbolPreviewFontSizeOff").click(function() {
    writeToLocalStorage(LS_OVERRIDE_PREVIEW_FONT_SIZE_MAIN_SYMBOL, false);
    updateMainSymbol();
});

$("button#mainSymbolPreviewFontSizeMinus").click(function() {
    decreaseCustomFontSize();
    setCustomizedFontSizeValueToUi(getPreviewFontSizeFactor());
    updateMainSymbol();
});

$("button#mainSymbolPreviewFontSizePlus").click(function() {
    increaseCustomFontSize();
    setCustomizedFontSizeValueToUi(getPreviewFontSizeFactor());
    updateMainSymbol();
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
        updateUiBasedOnLocalStorage(isPreviewOverrideActive(), "button#mainSymbolPreviewFontSizeOn", "button#mainSymbolPreviewFontSizeOff" );
        $("#mainSymbolSegment").hide();
        $("#mainSymbolPreviewFontSizeSegment").show();
        isMainSymbolPreviewFontSizeSegmentVisible = true;

        //mainSegment
        $("div#mainSegment").show();
        updateMainSymbol();
        setCustomizedFontSizeValueToUi(getPreviewFontSizeFactor());
    }
}

var updateMainSymbol = function(){
    setVisibleMainSymbol();
    var segmentHeight = $("#mainSymbolPreviewFontSizeSegment").outerHeight(true);
    resizeElementDimensions(getMainSymbolFontSize(), getMainContentHeightForSettings(segmentHeight));
}

var setCustomizedFontSizeValueToUi = function(customizedValue){
    var child = "span#customizedFontSizeValue";
    var parent = "h4#customizedFontSizeParent";
    var replaceFragment = $('<span id="customizedFontSizeValue">Customized font size: '+ customizedValue +'</span>');
    replaceContent(parent, child, replaceFragment);
}
/*
 * app logic
 */
var increaseCustomFontSize = function(){
    var currentFontSize = getPreviewFontSizeFactor();
    currentFontSize = currentFontSize + 0.1;
    setPreviewFontSizeFactor(currentFontSize);
}

var decreaseCustomFontSize = function(){
    var currentFontSize = getPreviewFontSizeFactor();
    currentFontSize = currentFontSize - 0.1;
    if(currentFontSize > 0){
        setPreviewFontSizeFactor(currentFontSize);
    }
}


/**
 * init
 */
var initMainSymbolPreviewFontSizeSegment = function(){
    $("div#mainSymbolPreviewFontSizeSegment").hide();
}
