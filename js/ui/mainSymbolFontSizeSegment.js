/**
 * handler
 */
$( "button#smallMainSymbolOn" ).click(function() {
    writeToLocalStorage(LS_SMALL_MAIN_SYMBOL, true);
});

$( "button#smallMainSymbolOff" ).click(function() {
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
        updateUiBasedOnLocalStorage();
        $("#mainSymbolSegment").hide();
        $("#mainSymbolFontSizeSegment").show();
        isMainSymbolFontSizeSegmentVisible = true;
    }
}

var updateUiBasedOnLocalStorage = function(){
    if(isMainSymbolSmall()){
        setActive(   "button#smallMainSymbolOn"  );
        setInactive( "button#smallMainSymbolOff" );
    }else{
        setActive(   "button#smallMainSymbolOff" );
        setInactive( "button#smallMainSymbolOn"  );
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
