/**
 * handler
 */
$("button#mainSymbolPreviewFontSizeMinus").click(function() {
    decreasePreviewFontSize();
    setPreviewFontSizeValueToUi(getPreviewFontSizeFactor());
    updatePreviewMainSymbol();
});

$("button#mainSymbolPreviewFontSizePlus").click(function() {
    increasePreviewFontSize();
    setPreviewFontSizeValueToUi(getPreviewFontSizeFactor());
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
        setPreviewFontSizeValueToUi(getPreviewFontSizeFactor());
    }
}

var updatePreviewMainSymbol = function(){
    var segmentHeight = $("#mainSymbolPreviewFontSizeSegment").outerHeight(true);
    resizeElementDimensions(getPreviewFontSizeFactor(), getMainContentHeightForSettings(segmentHeight));
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
