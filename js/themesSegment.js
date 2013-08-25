/**
 * handler
 */

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