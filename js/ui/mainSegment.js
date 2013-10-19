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

        //back from themes
        displayThemes();

    } else if(isSettingsVisible && isInfoVisible){

        //back from info
        displayInfo();

    } else if(isSettingsVisible && isMainSymbolSegmentVisible && isMainSymbolFontSizeSegmentVisible) {

        //back from mainSymbolFontSizeSegment
        displayMainSymbolFontSizeSegment();

    } else if (isSettingsVisible && isMainSymbolSegmentVisible){

        //back from mainSymbolSegment
        displayMainSymbolSegment();

    }  else {
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
            switchLargeFigureBackground(isControlButtonsVisible);
            resizeElementDimensions(getMainSymbolFontSize());
        }else{
            isControlButtonsVisible = true;
            $("button").fadeIn();
            switchLargeFigureColor(isControlButtonsVisible);
            switchLargeFigureBackground(isControlButtonsVisible);
            resizeElementDimensions(getMainSymbolFontSize());
        }
    }
}

var replaceScrumValue = function(scrumCardValue){
    replaceMainContent($( '<div id="mainContent" class="span12 text-center large-figure">'+ scrumCardValue +'</div>'));
    switchLargeFigureColor(isControlButtonsVisible);
}

var setAppIcon = function (){
    var replaceFragment = $('<div id="mainContent" class="span12 text-center large-figure" data-icon="&#xe00e;"></div>');
    replaceMainContent(replaceFragment);
}

var replaceMainContent = function(replaceFragment){
    $("div#mainContent").remove();
    $("div#mainSegment").append(replaceFragment);
    resizeElementDimensions(getMainSymbolFontSize());
}