/**
 * this method should be called at least to init the app
 */
var initSc5 = function(){

    initLocalStorage();
    initAppColor();
    initScrumPointsSegment();
    initSpecialCharsSegment();
    initInfoSegment();
    initMainSymbolSegment();
    initMainSymbolPreviewFontSizeSegment();
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
