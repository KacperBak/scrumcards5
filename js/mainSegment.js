/**
 * handler
 */
$( "button#specialChars" ).click(function() {
    displaySpecialChars();
});

$( "button#fullscreen" ).click(function() {
    toggleButtonsVisible();
});

$( "button#settings" ).click(function() {
    if( isSettingsVisible && isThemesVisible){
        displayThemes();
    }else{
        displaySettings();
    }
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
            isControlButtonsVisible = false;
            $("button").fadeOut();
            switchLargeFigureColor(isControlButtonsVisible);
//            $(".large-figure").css("background", "#E7E7E7");
            $(".large-figure").css("background", getMainColorLight());
//            $(".large-figure").css({background: "-moz-linear-gradient(top, #a7a7a7 , #E7E7E7, #FAFAFA , #E7E7E7, #a7a7a7)"});
//            $(".large-figure").css({background: "-webkit-linear-gradient(top, #a7a7a7 , #E7E7E7, #FAFAFA , #E7E7E7, #a7a7a7)"});
//            $(".large-figure").css({background: "-o-linear-gradient(top, #a7a7a7 , #E7E7E7, #FAFAFA , #E7E7E7, #a7a7a7)"});
//            $(".large-figure").css({background: "-ms-linear-gradient(top, #a7a7a7 , #E7E7E7, #FAFAFA , #E7E7E7, #a7a7a7)"});
//            $(".large-figure").css({background: "linear-gradient(top, #a7a7a7 , #E7E7E7, #FAFAFA , #E7E7E7, #a7a7a7)"});
        }else{
            isControlButtonsVisible = true;
            $("button").fadeIn();
            switchLargeFigureColor(isControlButtonsVisible);
//            $(".large-figure").css("background", "#a7a7a7");
            $(".large-figure").css("background", getMainColor());
//            $(".large-figure").css({background: "-moz-linear-gradient(top, #a7a7a7 , #a7a7a7, #a7a7a7)"});
//            $(".large-figure").css({background: "-webkit-linear-gradient(top, #a7a7a7 , #a7a7a7, #a7a7a7)"});
//            $(".large-figure").css({background: "-o-linear-gradient(top, #a7a7a7 , #a7a7a7, #a7a7a7)"});
//            $(".large-figure").css({background: "-ms-linear-gradient(top, #a7a7a7 , #a7a7a7, #a7a7a7)"});
//            $(".large-figure").css({background: "linear-gradient(top, #a7a7a7 , #a7a7a7, #a7a7a7)"});
        }
    }
}

var replaceScrumValue = function(scrumCardValue){
    replaceMainContent($( '<div id="mainContent" class="span12 text-center large-figure">'+ scrumCardValue +'</div>'));
    if(isControlButtonsVisible){
        $(".large-figure").css("color", getFontColorLight());
    }else{
        $(".large-figure").css("color", getFontColor());
    }

}

var setAppIcon = function (){
    var replaceFragment = $('<div id="mainContent" class="span12 text-center large-figure" data-icon="&#xe000;"></div>');
    replaceMainContent(replaceFragment);
}

var replaceMainContent = function(replaceFragment){
    $("div#mainContent").remove();
    $("div#mainSegment").append(replaceFragment);
    resizeElementDimensions();
}