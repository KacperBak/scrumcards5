/**
 * handler
 */

$( "button#themeSilver").click(function(){
    switchTheme(0);
});

$( "button#themeRed").click(function(){
    switchTheme(1);
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

var backToMain = function(){
    displayThemes();
    displaySettings();
}

/**
 * logic
 */

var switchTheme = function(i){
    colorIndex = i;
    changeTheme();
    backToMain();
}

/**
 * init
 */
var initThemesSegment = function(){
    $("div#themesSegment").hide();
}