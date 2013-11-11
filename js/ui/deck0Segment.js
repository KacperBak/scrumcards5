/**
 * handler
 */
$( "div#d0p0" ).click(function() {
    setDeckValueBasedOnIndex(0);
});
$( "div#d0p1" ).click(function() {
    setDeckValueBasedOnIndex(1);
});
$( "div#d0p2" ).click(function() {
    setDeckValueBasedOnIndex(2);
});
$( "div#d0p3" ).click(function() {
    setDeckValueBasedOnIndex(3);
});
$( "div#d0p4" ).click(function() {
    setDeckValueBasedOnIndex(4);
});
$( "div#d0p5" ).click(function() {
    setDeckValueBasedOnIndex(5);
});
$( "div#d0p6" ).click(function() {
    setDeckValueBasedOnIndex(6);
});
$( "div#d0p7" ).click(function() {
    setDeckValueBasedOnIndex(7);
});
$( "div#d0p8" ).click(function() {
    setDeckValueBasedOnIndex(8);
});
$( "div#d0p9" ).click(function() {
    setDeckValueBasedOnIndex(9);
});
$( "div#d0p10" ).click(function() {
    setDeckValueBasedOnIndex(10);
});
$( "div#d0p11" ).click(function() {
    setDeckValueBasedOnIndex(11);
});

/*
 * display
 */

var isDeck0Visible = false;

var displayDeck0 = function(){
    $("button").fadeOut();
    if(isDeck0Visible){
        isDeck0Visible = false;
        $("div#mainSegment").show();
        $("div#deck0Segment").hide();
        switchLargeFigureColor(!isDeck0Visible);
    }else{
        isDeck0Visible = true;
        $("div#mainSegment").hide();
        $("div#deck0Segment").show();
        switchLargeFigureColor(!isDeck0Visible);
    }
}
/*
 * app logic
 */

/**
 * init
 */
var initDeck0Segment = function(){
    $("div#deck0Segment").hide();
}
