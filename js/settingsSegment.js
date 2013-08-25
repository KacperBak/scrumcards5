/**
 * Settings display
 */
var settingsAreVisible = false;

var displaySettings = function(){
    if(settingsAreVisible){
        $("div#settingsSegment").hide();
        $("div#mainPointSegment").show();
        $("#info").fadeIn();
        $("#fullscreen").fadeIn();
        $("#minus").fadeIn();
        $("#point").fadeIn();
        $("#plus").fadeIn();
        settingsAreVisible = false;
    }else{
        $("div#mainPointSegment").hide();
        $("div#settingsSegment").show();
        $("#info").fadeOut();
        $("#fullscreen").fadeOut();
        $("#minus").fadeOut();
        $("#point").fadeOut();
        $("#plus").fadeOut();
        settingsAreVisible = true;
    }
}

var initSettingsSegment = function(){
    $("div#settingsSegment").hide();
}