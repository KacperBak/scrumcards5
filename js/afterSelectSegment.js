/**
 * handler
 */

/**
 * display
 */
var isAfterSelectVisible = false;

var displayAfterSelect = function(){
    if(isAfterSelectVisible){
        $("#afterSelectSegment").hide();
        $("#settingsSegment").show();
        isAfterSelectVisible = false;
    }else{
        $("#settingsSegment").hide();
        $("#afterSelectSegment").show();
        isAfterSelectVisible = true;
    }
}

var initAfterSelect = function(){
    $("div#afterSelectSegment").hide();
}
