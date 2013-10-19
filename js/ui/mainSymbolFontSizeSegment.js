/**
 * handler
 */
$( "button#mainSymbolFontSizeOn" ).click(function() {
    writeToLocalStorage(LS_SMALL_MAIN_SYMBOL, true);
});

$( "button#mainSymbolFontSizeOff" ).click(function() {
    writeToLocalStorage(LS_SMALL_MAIN_SYMBOL, false);
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
    }else{
        updateUiBasedOnLocalStorage(isMainSymbolSmall(), "button#mainSymbolFontSizeOn", "button#mainSymbolFontSizeOff" );
        $("#mainSymbolSegment").hide();
        $("#mainSymbolFontSizeSegment").show();
        isMainSymbolFontSizeSegmentVisible = true;
    }
}

/*
 * app logic
 */

/**
 * init
 */
var initMainSymbolFontSizeSegment = function(){
    $("div#mainSymbolFontSizeSegment").hide();
}
