/**
 * this method should be called at least to init the app
 */
var initSc5 = function(){

    initLocalStorage();
    initAppColor();
    initScrumPointsSegment();
    initSpecialCharsSegment();
    initInfoSegment();
    initAfterSelect();
    initSettingsSegment();
    initThemesSegment();
    resizeElementDimensions(getMainSymbolFontSize());
}

/**
 * Handle window resize
 */
window.addEventListener("resize", function() {
    resizeElementDimensions(getMainSymbolFontSize());
}, false);