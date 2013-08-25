/**
 * handler
 */
$( "button#settings" ).click(function() {
    if( isSettingsVisible && isThemesVisible){
        displayThemes();
    }else{
        displaySettings();
    }
});

$( "button#themes").click(function(){
    displayThemes();
});

$( "button#resetApp").click(function(){
    setAppIcon();

    //call this at least...
    initSc5();
});

/**
 * display
 */
var isSettingsVisible = false;

var displaySettings = function(){
    if(isSettingsVisible){
        $("div#settingsSegment").hide();
        $("div#mainSegment").show();
        $("#info").fadeIn();
        $("#fullscreen").fadeIn();
        $("#minus").fadeIn();
        $("#scrumPoints").fadeIn();
        $("#plus").fadeIn();
        isSettingsVisible = false;
    }else{
        $("div#mainSegment").hide();
        $("div#settingsSegment").show();
        $("#info").fadeOut();
        $("#fullscreen").fadeOut();
        $("#minus").fadeOut();
        $("#scrumPoints").fadeOut();
        $("#plus").fadeOut();
        isSettingsVisible = true;
    }
}

/**
 * init
 */

var initSettingsSegment = function(){
    $("div#settingsSegment").hide();
}