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
        switchLargeFigureBackground(!isInfoVisible);
    }else{
        $("#settingsSegment").hide();
        $("#infoSegment").show();
        isInfoVisible = true;
        switchLargeFigureBackground(!isInfoVisible);
    }
}

var initInfoSegment = function(){
    $("div#infoSegment").hide();
}
