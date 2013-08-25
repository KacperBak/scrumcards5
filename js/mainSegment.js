/**
 * handler
 */

$( "button#fullscreen" ).click(function() {
    toggleButtonsVisible();
});

$( "div#mainSegment" ).click(function() {
    toggleButtonsVisible();
});

$( "button#minus" ).click(function() {
    replaceScrumValueByPlusOrMinus(lastScrumValue());
});

$( "button#scrumPoints").click(function(){
    displayScrumPoints();
});

$( "button#plus" ).click(function() {
    replaceScrumValueByPlusOrMinus(nextScrumValue());
});

/**
 * display
 */
var isControlButtonsVisible = true;

var toggleButtonsVisible = function(){
    if(!isScrumPointsVisible){
        if(isControlButtonsVisible){
            $("button").fadeOut();
            $("div#mainContent").toggleClass("muted");
            $(".large-figure").css("background", "#E7E7E7");
            $(".large-figure").css({background: "-moz-linear-gradient(top, #a7a7a7 , #E7E7E7, #FAFAFA , #E7E7E7, #a7a7a7)"});
            $(".large-figure").css({background: "-webkit-linear-gradient(top, #a7a7a7 , #E7E7E7, #FAFAFA , #E7E7E7, #a7a7a7)"});
            $(".large-figure").css({background: "-o-linear-gradient(top, #a7a7a7 , #E7E7E7, #FAFAFA , #E7E7E7, #a7a7a7)"});
            $(".large-figure").css({background: "-ms-linear-gradient(top, #a7a7a7 , #E7E7E7, #FAFAFA , #E7E7E7, #a7a7a7)"});
            $(".large-figure").css({background: "linear-gradient(top, #a7a7a7 , #E7E7E7, #FAFAFA , #E7E7E7, #a7a7a7)"});
            isControlButtonsVisible = false;
        }else{
            $("button").fadeIn();
            $("div#mainContent").toggleClass("muted");
            $(".large-figure").css("background", "#a7a7a7");
            $(".large-figure").css({background: "-moz-linear-gradient(top, #a7a7a7 , #a7a7a7, #a7a7a7)"});
            $(".large-figure").css({background: "-webkit-linear-gradient(top, #a7a7a7 , #a7a7a7, #a7a7a7)"});
            $(".large-figure").css({background: "-o-linear-gradient(top, #a7a7a7 , #a7a7a7, #a7a7a7)"});
            $(".large-figure").css({background: "-ms-linear-gradient(top, #a7a7a7 , #a7a7a7, #a7a7a7)"});
            $(".large-figure").css({background: "linear-gradient(top, #a7a7a7 , #a7a7a7, #a7a7a7)"});
            isControlButtonsVisible = true;
        }
    }
}

var getReplaceFragment = function(buttonsVisibleState, innerValue){
    var result = null;
    if(buttonsVisibleState){
        result = $( '<div id="mainContent" class="span12 text-center large-figure muted">'+ innerValue +'</div>');
    }else{
        result = $( '<div id="mainContent" class="span12 text-center large-figure">'+ innerValue +'</div>' );
    }
    return result;
}

var replaceScrumValue = function(scrumCardValue){
    var replaceFragment = getReplaceFragment(isControlButtonsVisible, scrumCardValue);
    $("div#mainContent").remove();
    $("div#mainSegment").append(replaceFragment);
    resizeElementDimensions();
}