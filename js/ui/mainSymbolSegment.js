/**
 * handler
 */

$( "button#visibleMainSymbolOn" ).click(function() {
    writeToLocalStorage(LS_VISIBLE_MAIN_SYMBOL, true);
});

$( "button#visibleMainSymbolOff" ).click(function() {
    writeToLocalStorage(LS_VISIBLE_MAIN_SYMBOL, false);
});

$( "button#smallMainSymbolOn" ).click(function() {
    writeToLocalStorage(LS_SMALL_MAIN_SYMBOL, true);
});

$( "button#smallMainSymbolOff" ).click(function() {
    writeToLocalStorage(LS_SMALL_MAIN_SYMBOL, false);
});

/**
 * display
 */
var isAfterSelectVisible = false;

var displayAfterSelect = function(){
    if(isAfterSelectVisible){
        $("#mainSymbolSegment").hide();
        $("#settingsSegment").show();
        isAfterSelectVisible = false;
    }else{
        updateUiBasedOnLocalStorage();
        $("#settingsSegment").hide();
        $("#mainSymbolSegment").show();
        isAfterSelectVisible = true;
    }
}

var setInactive = function(selector){
    $(selector).removeClass("active");
}

var setActive = function(selector){
    $(selector).addClass("active");
}

var updateUiBasedOnLocalStorage = function(){
    if(isMainSymbolVisible()){
        setActive(   "button#visibleMainSymbolOn"  );
        setInactive( "button#visibleMainSymbolOff" );
    }else{
        setActive(   "button#visibleMainSymbolOff" );
        setInactive( "button#visibleMainSymbolOn"  );
    }
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
var initAfterSelect = function(){
    $("div#mainSymbolSegment").hide();
}
