/**
 * handler
 */

$( "button#themeSilver").click(function(){
    switchTheme(0);
});

$( "button#themeRed").click(function(){
    switchTheme(1);
});

$( "button#themeGreen").click(function(){
    switchTheme(2);
});

$( "button#themeBlue").click(function(){
    switchTheme(3);
});

$( "button#themeYellow").click(function(){
    switchTheme(4);
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
    setColorIndexInLocalStorage(i);
    changeTheme();
    backToMain();
}

/**
 * init
 */
var initThemesSegment = function(){
    $("div#themesSegment").hide();
}