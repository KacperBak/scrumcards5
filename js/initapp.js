/**
 * this method should be called at least to init the app
 */
var initSc5 = function(){
    initAppColor();
    initScrumPointsSegment();
    initSpecialCharsSegment();
    initInfoSegment();
    initAfterSelect();
    initSettingsSegment();
    initThemesSegment();
    resizeElementDimensions();
    getStorgeState();
}

/**
 * Handle window resize
 */
window.addEventListener("resize", function() {
    resizeElementDimensions();
}, false);