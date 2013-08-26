/**
 * handler
 */

$( "button#themeSilver").click(function(){
    colorIndex = 0;
    setAppColor();
});

$( "button#themeRed").click(function(){
    colorIndex = 1;
    setAppColor();
});

$( "button#themeBlue").click(function(){
});

/**
 * display
 */
var isThemesVisible = false;

var displayThemes = function(){
    if(isThemesVisible){
        $("#themesSegment").hide();
        $("#settingsSegment").show();
        isThemesVisible = false;
    }else{
        $("#settingsSegment").hide();
        $("#themesSegment").show();
        isThemesVisible = true;
    }
}

/**
 * init
 */
var initThemesSegment = function(){
    $("div#themesSegment").hide();
}