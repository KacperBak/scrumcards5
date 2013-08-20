/**
 * Info display
 */
var infoIsVisible = false;

var displayInfo = function(){
    if(infoIsVisible){
        $("div#infoSegment").hide();
        $("div#mainPointSegment").show();
        $("#fullscreen").fadeIn();
        $("#settings").fadeIn();
        $("#minus").fadeIn();
        $("#point").fadeIn();
        $("#plus").fadeIn();
        infoIsVisible = false;
    }else{
        $("div#mainPointSegment").hide();
        $("div#infoSegment").show();
        $("div#infoSegment").show();
        $("#fullscreen").fadeOut();
        $("#settings").fadeOut();
        $("#minus").fadeOut();
        $("#point").fadeOut();
        $("#plus").fadeOut();
        infoIsVisible = true;
    }
}

var initInfoDisplay = function(){
    $("div#infoSegment").hide();
}
