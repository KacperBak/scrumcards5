/* main view */
var buttonsVisible = true;

var togglePoints = function(){
    $("span#points").toggleClass("muted");
}

var toggleButtonsVisible = function(){
    if(buttonsVisible){
        buttonsVisible = false;
    }else{
        buttonsVisible = true;
    }
}

var showAndHideButtons= function(){
    if(buttonsVisible){
        $("button").fadeOut();
        $("div#points").toggleClass("muted");
        toggleButtonsVisible();
    }else{
        $("button").fadeIn();
        $("div#points").toggleClass("muted");
        toggleButtonsVisible();
    }
}

/**
 * Main content handler
 */
$( "div#main" ).click(function() {
    showAndHideButtons();
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