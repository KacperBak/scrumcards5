/**
 * handler
 */
$("button#mainSymbolPreviewFontSize").click( function(){
    displayMainSymbolPreviewFontSizeSegment();
});

$("button#mainSymbolPresentFontSize").click( function(){
    displayMainSymbolPresentFontSizeSegment();
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
