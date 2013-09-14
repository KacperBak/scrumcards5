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
        $("#afterSelectSegment").hide();
        $("#settingsSegment").show();
        isAfterSelectVisible = false;
    }else{
        updateUiBasedOnLocalStorage();
        $("#settingsSegment").hide();
        $("#afterSelectSegment").show();
        isAfterSelectVisible = true;
    }
}

/*
 * app logic
 */
var setInactive = function(selector){
    $(selector).removeClass("active");
}

var setActive = function(selector){
    $(selector).addClass("active");
}

var updateUiBasedOnLocalStorage = function(){
    //debug
//    analyse(readFromLocalStorage(LS_VISIBLE_MAIN_SYMBOL, TYPE_BOOLEAN));
//    analyse(readFromLocalStorage(LS_SMALL_MAIN_SYMBOL, TYPE_BOOLEAN));

    if(readFromLocalStorage(LS_VISIBLE_MAIN_SYMBOL, TYPE_BOOLEAN)){
        setActive(   "button#visibleMainSymbolOn"  );
        setInactive( "button#visibleMainSymbolOff" );
    }else{
        setActive(   "button#visibleMainSymbolOff" );
        setInactive( "button#visibleMainSymbolOn"  );
    }
    if(readFromLocalStorage(LS_SMALL_MAIN_SYMBOL, TYPE_BOOLEAN)){
        setActive(   "button#smallMainSymbolOn"  );
        setInactive( "button#smallMainSymbolOff" );
    }else{
        setActive(   "button#smallMainSymbolOff" );
        setInactive( "button#smallMainSymbolOn"  );
    }
}

/**
 * init
 */
var initAfterSelect = function(){
    $("div#afterSelectSegment").hide();
}
