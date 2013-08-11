/* main view */
var buttonsVisible = true;

var toggleButtonsVisible = function(){
    if(buttonsVisible){
        $("button").fadeOut();
        $("div#points").toggleClass("muted");
        buttonsVisible = false;
    }else{
        $("button").fadeIn();
        $("div#points").toggleClass("muted");
        buttonsVisible = true;
    }
}

/**
 * Main content handler
 */
$( "div#main" ).click(function() {
    toggleButtonsVisible();
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