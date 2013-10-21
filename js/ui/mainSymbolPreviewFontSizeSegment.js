/**
 * handler
 */
$("button#mainSymbolPreviewFontSizeMinus").click(function() {
    decreasePreviewFontSize();
    setPreviewFontSizeValueToUi(getPreviewFontSizeFactor());
    updateMainSymbol();
});

$("button#mainSymbolPreviewFontSizePlus").click(function() {
    increasePreviewFontSize();
    setPreviewFontSizeValueToUi(getPreviewFontSizeFactor());
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
        $("#mainSymbolSegment").hide();
        $("#mainSymbolPreviewFontSizeSegment").show();
        isMainSymbolPreviewFontSizeSegmentVisible = true;

        //mainSegment
        $("div#mainSegment").show();
        updateMainSymbol();
        setPreviewFontSizeValueToUi(getPreviewFontSizeFactor());
    }
}

var updateMainSymbol = function(){
    setVisibleMainSymbol();
    var segmentHeight = $("#mainSymbolPreviewFontSizeSegment").outerHeight(true);
    resizeElementDimensions(getMainSymbolFontSize(), getMainContentHeightForSettings(segmentHeight));
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
    var currentFontSize = getPreviewFontSizeFactor();
    currentFontSize = currentFontSize + 0.1;
    setPreviewFontSizeFactor(currentFontSize);
}

var decreasePreviewFontSize = function(){
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
