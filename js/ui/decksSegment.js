/**
 * handler
 */
$("button#normal").click( function(){
    applyDeckIndex(0);
});

$("button#special").click( function(){
    applyDeckIndex(1);
});

$("button#fibonacci").click( function(){
    applyDeckIndex(2);
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
var applyDeckIndex = function(i){
    deckIndex = i;
    setDeckIndexInLocalStorage(i);
    replaceMainValue();
    displayDecksSegment();
}


/**
 * init
 */
var initDecksSegment = function(){
    $("div#decksSegment").hide();
}
