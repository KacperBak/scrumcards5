/* main view */
var toggleCounter = 1;

var togglePoints = function(){
    $("span#points").toggleClass("muted");
}

var slideUpAndDown= function(){
    toggleCounter++;
    if(toggleCounter % 2){
        $("button").fadeOut();
        $("div#points").toggleClass("muted");
    }else{
        $("button").fadeIn();
        $("div#points").toggleClass("muted");
    }
}

/**
 * Main content handler
 */
$( "div#main" ).click(function() {
    slideUpAndDown();
});

/**
 * Minus button handler
 */
$( "button#minus" ).click(function() {
    var number = $('<span id="points">'+ counter +'</span>');
    $("span#points").remove();
    $("p").append(number);
});

/**
 * Plus button handler
 */
$( "button#plus" ).click(function() {
    var number = $('<span id="points">'+ counter +'</span>');
    $("span#points").remove();
    $("p").append(number);
});