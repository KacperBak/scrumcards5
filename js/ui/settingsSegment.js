/**
 * handler
 */
$( "button#themes").click(function(){
    displayThemes();
});

$( "button#info").click(function(){
    displayInfo();
});

$( "button#mainSymbol").click(function(){
    displayMainSymbolSegment();
});

$( "button#resetApp").click(function(){
    //reset
    setLocalStorageDefaultValues();
    setAppIcon();
    resetColor();

    //re-init
    initSc5();

    //back to main
    displaySettings();
});

/**
 * display
 */
var isSettingsVisible = false;

var displaySettings = function(){
    if(isSettingsVisible){
        $("div#settingsSegment").hide();
        $("div#mainSegment").show();

        $("button#decks").fadeIn();
        $("button#fullscreen").fadeIn();
        $("button#minus").fadeIn();
        $("button#scrumPoints").fadeIn();
        $("button#plus").fadeIn();
        isSettingsVisible = false;
        resizeElementDimensions(getMainSymbolFontSize(), getMainContentHeight());
    }else{
        $("div#mainSegment").hide();
        $("div#settingsSegment").show();

        $("button#decks").fadeOut();
        $("button#fullscreen").fadeOut();
        $("button#minus").fadeOut();
        $("button#scrumPoints").fadeOut();
        $("button#plus").fadeOut();
        isSettingsVisible = true;
    }
}

/**
 * init
 */

var initSettingsSegment = function(){
    $("div#settingsSegment").hide();
}