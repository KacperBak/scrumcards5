/**
 * handler
 */

/**
 * display
 */
var isInfoVisible = false;

var displayInfo = function(){
    if(isInfoVisible){
        $("#infoSegment").hide();
        $("#settingsSegment").show();
        isInfoVisible = false;
    }else{
        $("#settingsSegment").hide();
        $("#infoSegment").show();
        isInfoVisible = true;
    }
}

var initInfoSegment = function(){
    $("div#infoSegment").hide();
}
