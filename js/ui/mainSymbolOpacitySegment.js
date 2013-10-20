/**
 * handler
 */
$( "button#mainSymbolOpacityOn" ).click(function() {
    writeToLocalStorage(LS_OVERRIDE_OPACITY_MAIN_SYMBOL, true);
});

$( "button#mainSymbolOpacityOff" ).click(function() {
    writeToLocalStorage(LS_OVERRIDE_OPACITY_MAIN_SYMBOL, false);
});


/**
 * display
 */
var isMainSymbolOpacitySegmentVisible = false;

var displayMainSymbolOpacitySegment = function(){
    if(isMainSymbolOpacitySegmentVisible){
        $("#mainSymbolOpacitySegment").hide();
        $("#mainSymbolSegment").show();
        isMainSymbolOpacitySegmentVisible = false;
    }else{
        updateUiBasedOnLocalStorage(isOpacityOverrideActive(), "button#mainSymbolOpacityOn", "button#mainSymbolOpacityOff");
        $("#mainSymbolSegment").hide();
        $("#mainSymbolOpacitySegment").show();
        isMainSymbolOpacitySegmentVisible = true;
    }
}

/*
 * app logic
 */

/**
 * init
 */
var initMainSymbolOpacitySegment = function(){
    $("div#mainSymbolOpacitySegment").hide();
}
