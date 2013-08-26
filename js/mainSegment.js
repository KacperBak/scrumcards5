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
            switchLargeFigureColor();
//            $(".large-figure").css("background", "#E7E7E7");
//            $(".large-figure").css("background", getMainColorLight());
//            $(".large-figure").css({background: "-moz-linear-gradient(top, #a7a7a7 , #E7E7E7, #FAFAFA , #E7E7E7, #a7a7a7)"});
//            $(".large-figure").css({background: "-webkit-linear-gradient(top, #a7a7a7 , #E7E7E7, #FAFAFA , #E7E7E7, #a7a7a7)"});
//            $(".large-figure").css({background: "-o-linear-gradient(top, #a7a7a7 , #E7E7E7, #FAFAFA , #E7E7E7, #a7a7a7)"});
//            $(".large-figure").css({background: "-ms-linear-gradient(top, #a7a7a7 , #E7E7E7, #FAFAFA , #E7E7E7, #a7a7a7)"});
//            $(".large-figure").css({background: "linear-gradient(top, #a7a7a7 , #E7E7E7, #FAFAFA , #E7E7E7, #a7a7a7)"});
            isControlButtonsVisible = false;
        }else{
            $("button").fadeIn();
            switchLargeFigureColor();
//            $(".large-figure").css("background", "#a7a7a7");
//            $(".large-figure").css("background", getMainColor());
//            $(".large-figure").css({background: "-moz-linear-gradient(top, #a7a7a7 , #a7a7a7, #a7a7a7)"});
//            $(".large-figure").css({background: "-webkit-linear-gradient(top, #a7a7a7 , #a7a7a7, #a7a7a7)"});
//            $(".large-figure").css({background: "-o-linear-gradient(top, #a7a7a7 , #a7a7a7, #a7a7a7)"});
//            $(".large-figure").css({background: "-ms-linear-gradient(top, #a7a7a7 , #a7a7a7, #a7a7a7)"});
//            $(".large-figure").css({background: "linear-gradient(top, #a7a7a7 , #a7a7a7, #a7a7a7)"});
            isControlButtonsVisible = true;
        }
    }
}

var replaceScrumValue = function(scrumCardValue){
    var replaceFragment = null;
    if(isControlButtonsVisible){
        replaceFragment = $( '<div id="mainContent" class="span12 text-center large-figure muted">'+ scrumCardValue +'</div>');
    }else{
        replaceFragment = $( '<div id="mainContent" class="span12 text-center large-figure">'+ scrumCardValue +'</div>' );
    }
    replaceMainContent(replaceFragment);
}

var setAppIcon = function (){
    var replaceFragment = $('<div id="mainContent" class="span12 text-center large-figure muted" data-icon="&#xe000;"></div>');
    replaceMainContent(replaceFragment);
}

var replaceMainContent = function(replaceFragment){
    $("div#mainContent").remove();
    $("div#mainSegment").append(replaceFragment);
    resizeElementDimensions();
}

var switchLargeFigureColor = function(){
    if(isControlButtonsVisible){
        $(".large-figure").css("color", getFontColor());
    }else{
        $(".large-figure").css("color", getFontColorLight());
    }
}

