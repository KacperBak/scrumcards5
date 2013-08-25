/**
 * conf1
 */
var isConf1Visible = false;

var displayConf1 = function(){
    if(isConf1Visible){
        $("#themesSegment").hide();
        $("#settingsSegment").show();
        isConf1Visible = false;
    }else{
        $("#settingsSegment").hide();
        $("#themesSegment").show();
        isConf1Visible = true;
    }
}

var initThemesSegment = function(){
    $("div#themesSegment").hide();
}