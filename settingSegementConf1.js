/**
 * conf1
 */
var isConf1Visible = false;

var displayConf1 = function(){
    if(isConf1Visible){
        $("#settingsSegmentConf1").hide();
        $("#settingsSegment").show();
        isConf1Visible = false;
    }else{
        $("#settingsSegment").hide();
        $("#settingsSegmentConf1").show();
        isConf1Visible = true;
    }
}

var initSettingsSegmentConf1 = function(){
    $("div#settingsSegmentConf1").hide();
}