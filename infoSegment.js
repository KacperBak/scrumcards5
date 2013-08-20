/**
 * Info display
 */
var infoIsVisible = false;

var displayInfo = function(){
    if(infoIsVisible){
        $("div#infoSegment").hide();
        $("div#mainPointSegment").show();
        infoIsVisible = false;
    }else{
        $("div#mainPointSegment").hide();
        $("div#infoSegment").show();
        infoIsVisible = true;
    }
}

var setInfoRatioValues = function(height){
    $('.content').css('height', height + "em");
}

var initInfoDisplay = function(){
    $("div#infoSegment").hide();
}
