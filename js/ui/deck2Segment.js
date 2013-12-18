/**
 * handler
 */
$( "div#d2p0" ).click(function() {
    setDeckValueBasedOnIndex(0);
});
$( "div#d2p1" ).click(function() {
    setDeckValueBasedOnIndex(1);
});
$( "div#d2p2" ).click(function() {
    setDeckValueBasedOnIndex(2);
});
$( "div#d2p3" ).click(function() {
    setDeckValueBasedOnIndex(3);
});
$( "div#d2p4" ).click(function() {
    setDeckValueBasedOnIndex(4);
});
$( "div#d2p5" ).click(function() {
    setDeckValueBasedOnIndex(5);
});
$( "div#d2p6" ).click(function() {
    setDeckValueBasedOnIndex(6);
});
$( "div#d2p7" ).click(function() {
    setDeckValueBasedOnIndex(7);
});
$( "div#d2p8" ).click(function() {
    setDeckValueBasedOnIndex(8);
});
$( "div#d2p9" ).click(function() {
    setDeckValueBasedOnIndex(9);
});
$( "div#d2p10" ).click(function() {
    setDeckValueBasedOnIndex(10);
});
$( "div#d2p11" ).click(function() {
    setDeckValueBasedOnIndex(11);
});

/*
 * display
 */

var isDeck2Visible = false;

var displayDeck2 = function(){
    $("button").fadeOut();
    if(isDeck2Visible){
        isDeck2Visible = false;
        $("div#mainSegment").show();
        $("div#deck2Segment").hide();
        switchLargeFigureColor(!isDeck2Visible);
    }else{
        isDeck2Visible = true;
        $("div#mainSegment").hide();
        $("div#deck2Segment").show();
        switchLargeFigureColor(!isDeck2Visible);
    }
}
/*
 * app logic
 */

/**
 * init
 */
var initDeck2Segment = function(){
    $("div#deck2Segment").hide();
}
