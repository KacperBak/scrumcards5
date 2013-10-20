/**
 * handler
 */
$("button#mainSymbolFontSizeOn").click(function() {
    writeToLocalStorage(LS_OVERRIDE_PREVIEW_FONT_SIZE_MAIN_SYMBOL, true);
    updateMainSymbol();
});

$("button#mainSymbolFontSizeOff").click(function() {
    writeToLocalStorage(LS_OVERRIDE_PREVIEW_FONT_SIZE_MAIN_SYMBOL, false);
    updateMainSymbol();
});

$("button#mainSymbolFontSizeMinus").click(function() {
    decreaseCustomFontSize();
    setCustomizedFontSizeValueToUi(getPreviewFontSizeFactor());
    updateMainSymbol();
});

$("button#mainSymbolFontSizePlus").click(function() {
    increaseCustomFontSize();
    setCustomizedFontSizeValueToUi(getPreviewFontSizeFactor());
    updateMainSymbol();
});

/**
 * display
 */
var isMainSymbolFontSizeSegmentVisible = false;

var displayMainSymbolFontSizeSegment = function(){
    if(isMainSymbolFontSizeSegmentVisible){

        //fontSizeSegment
        $("#mainSymbolFontSizeSegment").hide();
        $("#mainSymbolSegment").show();
        isMainSymbolFontSizeSegmentVisible = false;

        //mainSegment
        $("div#mainSegment").hide();
    }else{

        //fontSizeSegment
        updateUiBasedOnLocalStorage(isPreviewOverrideActive(), "button#mainSymbolFontSizeOn", "button#mainSymbolFontSizeOff" );
        $("#mainSymbolSegment").hide();
        $("#mainSymbolFontSizeSegment").show();
        isMainSymbolFontSizeSegmentVisible = true;

        //mainSegment
        $("div#mainSegment").show();
        updateMainSymbol();
        setCustomizedFontSizeValueToUi(getPreviewFontSizeFactor());
    }
}

var updateMainSymbol = function(){
    setVisibleMainSymbol();
    var segmentHeight = $("#mainSymbolFontSizeSegment").outerHeight(true);
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
var initMainSymbolFontSizeSegment = function(){
    $("div#mainSymbolFontSizeSegment").hide();
}
