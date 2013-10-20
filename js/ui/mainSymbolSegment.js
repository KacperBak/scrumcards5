/**
 * handler
 */
$("button#mainSymbolFontSize").click( function(){
    displayMainSymbolPreviewFontSizeSegment();
});

$("button#mainSymbolOpacity").click( function(){
   displayMainSymbolOpacitySegment();
});

/**
 * display
 */
var isMainSymbolSegmentVisible = false;

var displayMainSymbolSegment = function(){
    if(isMainSymbolSegmentVisible){
        $("#mainSymbolSegment").hide();
        $("#settingsSegment").show();
        isMainSymbolSegmentVisible = false;
    }else{
        updateUiBasedOnLocalStorage();
        $("#settingsSegment").hide();
        $("#mainSymbolSegment").show();
        isMainSymbolSegmentVisible = true;
    }
}
/*
 * app logic
 */


/**
 * init
 */
var initMainSymbolSegment = function(){
    $("div#mainSymbolSegment").hide();
}
