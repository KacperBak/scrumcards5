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

$( "button#themeSilver").click(function(){
    displayThemes();
});

$( "button#themeRed").click(function(){
    displayThemes();
});

$( "button#themeBlue").click(function(){
    displayThemes();
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
        $("#point").fadeIn();
        $("#plus").fadeIn();
        isSettingsVisible = false;
    }else{
        $("div#mainSegment").hide();
        $("div#settingsSegment").show();
        $("#info").fadeOut();
        $("#fullscreen").fadeOut();
        $("#minus").fadeOut();
        $("#point").fadeOut();
        $("#plus").fadeOut();
        isSettingsVisible = true;
    }
}

var initSettingsSegment = function(){
    $("div#settingsSegment").hide();
}