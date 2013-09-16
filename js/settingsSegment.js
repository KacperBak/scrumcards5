/**
 * handler
 */
$( "button#themes").click(function(){
    displayThemes();
});

$( "button#info").click(function(){
    displayInfo();
});

$( "button#afterSelect").click(function(){
    displayAfterSelect();
});

$( "button#resetApp").click(function(){
    setAppIcon();

    //reset
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

        $("button#specialChars").fadeIn();
        $("button#fullscreen").fadeIn();
        $("button#minus").fadeIn();
        $("button#scrumPoints").fadeIn();
        $("button#plus").fadeIn();
        isSettingsVisible = false;
        setVisibleMainSymbol();
        resizeElementDimensions(getMainSymbolFontSize());
    }else{
        $("div#mainSegment").hide();
        $("div#settingsSegment").show();

        $("button#specialChars").fadeOut();
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