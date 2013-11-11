/**
 * handler
 */
$( "div#d1p0" ).click(function() {
    setDeckValueBasedOnIndex(0);
});
$( "div#d1p1" ).click(function() {
    setDeckValueBasedOnIndex(1);
});
$( "div#d1p2" ).click(function() {
    setDeckValueBasedOnIndex(2);
});
$( "div#d1p3" ).click(function() {
    setDeckValueBasedOnIndex(3);
});
$( "div#d1p4" ).click(function() {
    setDeckValueBasedOnIndex(4);
});
$( "div#d1p5" ).click(function() {
    setDeckValueBasedOnIndex(5);
});
$( "div#d1p6" ).click(function() {
    setDeckValueBasedOnIndex(6);
});
$( "div#d1p7" ).click(function() {
    setDeckValueBasedOnIndex(7);
});
$( "div#d1p8" ).click(function() {
    setDeckValueBasedOnIndex(8);
});
$( "div#d1p9" ).click(function() {
    setDeckValueBasedOnIndex(9);
});
$( "div#d1p10" ).click(function() {
    setDeckValueBasedOnIndex(10);
});
$( "div#d1p11" ).click(function() {
    setDeckValueBasedOnIndex(11);
});

/*
 * display
 */
var isDeck1Visible = false;

var displayDeck1 = function(){
    $("button").fadeOut();
    if(isDeck1Visible){
        isDeck1Visible = false;
        $("div#mainSegment").show();
        $("div#deck1Segment").hide();
        switchLargeFigureColor(!isDeck1Visible);
    }else{
        isDeck1Visible = true;
        $("div#mainSegment").hide();
        $("div#deck1Segment").show();
        switchLargeFigureColor(!isDeck1Visible);
    }
}
/*
 * app logic
 */

/**
 * init
 */
var initDeck1Segment = function(){
    $("div#deck1Segment").hide();
}
