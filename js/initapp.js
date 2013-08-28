/**
 * this method should be called at least to init the app
 */
var initSc5 = function(){
    initAppColor();
    initScrumPointsSegment();
    initInfoSegment();
    initSettingsSegment();
    initThemesSegment();
    resizeElementDimensions();
}

/**
 * Handle window resize
 */
window.addEventListener("resize", function() {
    resizeElementDimensions();
}, false);