/**
 * handler
 */
$("button#mainSymbolFontSizeOn").click(function() {
    writeToLocalStorage(LS_SMALL_MAIN_SYMBOL, true);
    updateMainSymbol();
});

$("button#mainSymbolFontSizeOff").click(function() {
    writeToLocalStorage(LS_SMALL_MAIN_SYMBOL, false);
    updateMainSymbol();
});

$("button#mainSymbolFontSizeMinus").click(function() {
    decreaseCustomFontSize();
    setCustomizedFontSizeValueToUi(getCustomFontSizeFactor());
    updateMainSymbol();
});

$("button#mainSymbolFontSizePlus").click(function() {
    increaseCustomFontSize();
    setCustomizedFontSizeValueToUi(getCustomFontSizeFactor());
    updateMainSymbol();
});

/**
 * display
 */
var isMainSymbolFontSizeSegmentVisible = false;

var displayMainSymbolFontSizeSegment = function(){
    if(isMainSymbolFontSizeSegmentVisible){
        $("#mainSymbolFontSizeSegment").hide();
        $("#mainSymbolSegment").show();
        isMainSymbolFontSizeSegmentVisible = false;

        $("div#mainSegment").hide();
    }else{
        updateUiBasedOnLocalStorage(isMainSymbolSmall(), "button#mainSymbolFontSizeOn", "button#mainSymbolFontSizeOff" );
        $("#mainSymbolSegment").hide();
        $("#mainSymbolFontSizeSegment").show();
        isMainSymbolFontSizeSegmentVisible = true;

        $("div#mainSegment").show();
        updateMainSymbol();
        setCustomizedFontSizeValueToUi(getCustomFontSizeFactor());
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
    var currentFontSize = getCustomFontSizeFactor();
    currentFontSize = currentFontSize + 0.1;
    setCustomFontSizeFactor(currentFontSize);
}

var decreaseCustomFontSize = function(){
    var currentFontSize = getCustomFontSizeFactor();
    currentFontSize = currentFontSize - 0.1;
    if(currentFontSize > 0){
        setCustomFontSizeFactor(currentFontSize);
    }
}


/**
 * init
 */
var initMainSymbolFontSizeSegment = function(){
    $("div#mainSymbolFontSizeSegment").hide();
}
