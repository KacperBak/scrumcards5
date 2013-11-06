/**
 * handler
 */
$("button#normal").click( function(){
    displayDecksSegment();
});

$("button#special").click( function(){
    displayDecksSegment();
});

/**
 * display
 */
var isDecksSegmentVisible = false;

var displayDecksSegment = function(){
    if(isDecksSegmentVisible){
        $("div#decksSegment").hide();
        $("div#mainSegment").show();

        $("button#fullscreen").fadeIn();
        $("button#settings").fadeIn();
        $("button#minus").fadeIn();
        $("button#scrumPoints").fadeIn();
        $("button#plus").fadeIn();
        isDecksSegmentVisible = false;
    }else{
        $("div#mainSegment").hide();
        $("div#decksSegment").show();

        $("button#fullscreen").fadeOut();
        $("button#settings").fadeOut();
        $("button#minus").fadeOut();
        $("button#scrumPoints").fadeOut();
        $("button#plus").fadeOut();
        isDecksSegmentVisible = true;
    }
}
/*
 * app logic
 */


/**
 * init
 */
var initDecksSegment = function(){
    $("div#decksSegment").hide();
}
