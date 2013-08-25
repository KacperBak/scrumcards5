/**
 * handler
 */
$( "button#info" ).click(function() {
    displayInfo();
});

/**
 * display
 */
var isInfoVisible = false;

var displayInfo = function(){
    if(isInfoVisible){
        $("div#infoSegment").hide();
        $("div#mainSegment").show();
        $("#fullscreen").fadeIn();
        $("#settings").fadeIn();
        $("#minus").fadeIn();
        $("#point").fadeIn();
        $("#plus").fadeIn();
        isInfoVisible = false;
    }else{
        $("div#mainSegment").hide();
        $("div#infoSegment").show();
        $("#fullscreen").fadeOut();
        $("#settings").fadeOut();
        $("#minus").fadeOut();
        $("#point").fadeOut();
        $("#plus").fadeOut();
        isInfoVisible = true;
    }
}

var initInfoSegment = function(){
    $("div#infoSegment").hide();
}
