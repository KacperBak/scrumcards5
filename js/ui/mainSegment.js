/**
 * handler
 */
$("button#decks").click(function() {
    displayDecksSegment();
});

$("button#fullscreen").click(function() {
    toggleButtonsVisible();
});

$("button#settings").click(function() {

    if( isSettingsVisible && isThemesVisible){

        //back from themes
        displayThemes();

    } else if(isSettingsVisible && isInfoVisible){

        //back from info
        displayInfo();

    } else if(isSettingsVisible && isMainSymbolSegmentVisible && isMainSymbolPreviewFontSizeSegmentVisible) {

        //back from mainSymbolPreviewFontSizeSegment
        displayMainSymbolPreviewFontSizeSegment();

    } else if(isSettingsVisible && isMainSymbolSegmentVisible && isMainSymbolOpacitySegmentVisible) {

        //back from mainSymbolFontSizeSegment
        displayMainSymbolOpacitySegment();

    } else if(isSettingsVisible && isMainSymbolSegmentVisible && isMainSymbolPresentFontSizeSegmentVisible) {

        //back from mainSymbolPresentFontSizeSegment
        displayMainSymbolPresentFontSizeSegment();

    } else if (isSettingsVisible && isMainSymbolSegmentVisible){

        //back from mainSymbolSegment
        displayMainSymbolSegment();

    }  else {
        displaySettings();
    }
});

$("div#mainSegment").click(function() {
    if(!isMainSymbolPresentFontSizeSegmentVisible && !isMainSymbolPreviewFontSizeSegmentVisible){
        toggleButtonsVisible();
    }
});

$("button#minus").click(function() {
    lastDeckValue();
    replaceDeckValueByPlusOrMinus();
});

$("button#scrumPoints").click(function(){
    displaySelectedDeck();
});

$("button#plus").click(function() {
    nextDeckValue();
    replaceDeckValueByPlusOrMinus();
});

/**
 * display
 */
var isControlButtonsVisible = true;

var toggleButtonsVisible = function(){
    if(!isDeck0Visible){
        if(isControlButtonsVisible){
            isControlButtonsVisible = false;
            $("button").fadeOut();
            switchLargeFigureColor(isControlButtonsVisible);
            switchLargeFigureBackground(isControlButtonsVisible);
            resizeElementDimensions(getMainSymbolFontSize(), getMainContentHeight());
        }else{
            isControlButtonsVisible = true;
            $("button").fadeIn();
            switchLargeFigureColor(isControlButtonsVisible);
            switchLargeFigureBackground(isControlButtonsVisible);
            resizeElementDimensions(getMainSymbolFontSize(), getMainContentHeight());
        }
    }
}

var replaceMainValue = function(){
    var replaceFragment = getReplaceFragment();
    replaceMainContent( mainContentParent, mainContentChild, replaceFragment);
    switchLargeFigureColor(isControlButtonsVisible);
}

var setAppIcon = function (){
    var replaceFragment = $('<div id="mainContent" class="span12 text-center large-figure" data-icon="&#xe00e;"></div>');
    replaceMainContent(mainContentParent, mainContentChild ,replaceFragment);
}

var replaceMainContent = function(parent, child, replaceFragment){
    replaceContent(parent, child, replaceFragment);
    resizeElementDimensions(getMainSymbolFontSize(), getMainContentHeight());
}