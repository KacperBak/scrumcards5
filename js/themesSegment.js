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

var initThemesSegment = function(){
    $("div#themesSegment").hide();
}