/**
 * this method should be called at least to init the app
 */
var initSc5 = function(){

    initLocalStorage();
    initAppColor();
    initInfoSegment();
    initMainSymbolSegment();
    initDecksSegment();
    initDeck0Segment();
    initDeck1Segment();
    initMainSymbolPreviewFontSizeSegment();
    initMainSymbolPresentFontSizeSegment();
    initMainSymbolOpacitySegment();
    initSettingsSegment();
    initThemesSegment();
    resizeElementDimensions(getMainSymbolFontSize(), getMainContentHeight());
}

/**
 * Handle window resize
 */
window.addEventListener("resize", function() {
    resizeElementDimensions(getMainSymbolFontSize(), getMainContentHeight());
}, false);
