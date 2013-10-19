/**
 * handler
 */
$( "button#mainSymbolOpacityOn" ).click(function() {
    writeToLocalStorage(LS_VISIBLE_MAIN_SYMBOL, true);
});

$( "button#mainSymbolOpacityOff" ).click(function() {
    writeToLocalStorage(LS_VISIBLE_MAIN_SYMBOL, false);
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
        updateUiBasedOnLocalStorage();
        $("#mainSymbolSegment").hide();
        $("#mainSymbolOpacitySegment").show();
        isMainSymbolOpacitySegmentVisible = true;
    }
}

var updateUiBasedOnLocalStorage = function(){
    if(isMainSymbolVisible()){
        setActive(   "button#mainSymbolOpacityOn"  );
        setInactive( "button#mainSymbolOpacityOff" );
    }else{
        setActive(   "button#mainSymbolOpacityOff" );
        setInactive( "button#mainSymbolOpacityOn"  );
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
