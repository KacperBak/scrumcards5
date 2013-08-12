/**
 * DEBUG
 */
var DEBUG_MODE = false;

/**
 * calculate screen dimension
 */
var PX_240 = 240;
var EM_240 = 1064;
var EM_DELTA = 1714;
var DIVISOR = 100;

/**
 *  320px -> 1484em
 *  640px -> 3562em
 *  Delta -> 2078em
 */

var setNewFontSize = function(size){
    var valueToSet = size + "em";
    $('.mainview-content').css('height', valueToSet);
}

var getWindowHeight = function(){
    var currentHeight = $(window).height();
    return currentHeight;
}

var calculateFontSizeFactor = function(){
    return EM_DELTA / PX_240;
}

var calculateNewFontSize = function(currentHeight){
    var result = PX_240;
    if(currentHeight >= PX_240){
        var pxDelta = currentHeight - PX_240;
        var emFactor = calculateFontSizeFactor();
        result = (pxDelta * emFactor + EM_240) / DIVISOR;
    }
    return result;
}

var displayCurrentHeight = function(){

    var currentHeight = getWindowHeight();
    var replaceFragment = getReplaceFragment(buttonsVisible, currentHeight);
    $("#points").remove();
    $("#main").append(replaceFragment);
    return currentHeight;
}

var resizeScreenDimension = function(){
    if(DEBUG_MODE){ console.log("resize: " + displayCurrentHeight()); }
    setNewFontSize(calculateNewFontSize(getWindowHeight()));
}

/**
 * Toggle button fade IN/OUT and muting the points
 */
var buttonsVisible = true;

var toggleButtonsVisible = function(){
    if(buttonsVisible){
        $("button").fadeOut();
        $("div#points").toggleClass("muted");
        buttonsVisible = false;
    }else{
        $("button").fadeIn();
        $("div#points").toggleClass("muted");
        buttonsVisible = true;
    }
}

/**
 * shared functions
 */

var getReplaceFragment = function(buttonsVisibleState, innerValue){
    var result = null;
    if(buttonsVisibleState){
        result = $( '<div id="point5" class="span12 text-center large-figure muted">'+ innerValue +'</div>');
    }else{
        result = $( '<div id="point5" class="span12 text-center large-figure">'+ innerValue +'</div>' );
    }
    return result;
}

/**
 * Scrum values
 */

var scrumValues             = [1, 2, 3 , 5, 8, 13, 20, 40, 100];
var currentScrumValueIndex  = 0;
var scrumValueMaxIndex      = _.size(scrumValues) - 1;

var nextScrumValue = function(){
    var result = scrumValues[0];
    if( currentScrumValueIndex + 1 <= scrumValueMaxIndex){
        currentScrumValueIndex++;
        result = scrumValues[currentScrumValueIndex];
    }else{
        currentScrumValueIndex = 0;
    }
    return result;
}

var lastScrumValue = function(){
    var result = scrumValues[scrumValueMaxIndex];
    if( currentScrumValueIndex - 1 >= 0 ){
        currentScrumValueIndex--;
        result = scrumValues[currentScrumValueIndex];
    }else{
        currentScrumValueIndex = scrumValueMaxIndex;
    }
    return result;
}



/**
 * Scrum values display
 */
var pointsAreVisible = false;

var switchPointsDisplay = function(){
    if(pointsAreVisible){
        displayMiddlePoint();
        pointsAreVisible = false;
    }else{
        displayAllPoints();
        pointsAreVisible = true;
    }
}


var displayMiddlePoint = function(){
    removeAllPoints();
    appendMiddlePoint(scrumValues[currentScrumValueIndex]);
}

var displayAllPoints = function(){
    removeAllPoints();
    appendAllPoints();
}

var appendAllPoints = function (){
    var point1 = $('<div id="point1" class="span4 text-center">1</div>');
    var point2 = $('<div id="point2" class="span4 text-center">2</div>');
    var point3 = $('<div id="point3" class="span4 text-center">3</div>');
    $("#row1").append(point1);
    $("#row1").append(point2);
    $("#row1").append(point3);

    var point4 = $('<div id="point4" class="span4 text-center">4</div>');
    var point5 = $('<div id="point5" class="span4 text-center">5</div>');
    var point6 = $('<div id="point6" class="span4 text-center">6</div>');
    $("#row2").append(point4);
    $("#row2").append(point5);
    $("#row2").append(point6);

    var point7 = $('<div id="point7" class="span4 text-center">7</div>');
    var point8 = $('<div id="point8" class="span4 text-center">8</div>');
    var point9 = $('<div id="point9" class="span4 text-center">9</div>');
    $("#row3").append(point7);
    $("#row3").append(point8);
    $("#row3").append(point9);
}

var removeAllPoints = function(){
    $("#point1").remove();
    $("#point2").remove();
    $("#point3").remove();
    $("#point4").remove();
    $("#point5").remove();
    $("#point6").remove();
    $("#point7").remove();
    $("#point8").remove();
    $("#point9").remove();
}

var appendEmptyUpperRow = function(){
    var point1 = $('<div id="point1" class="span4 text-center"></div>');
    var point2 = $('<div id="point2" class="span4 text-center"></div>');
    var point3 = $('<div id="point3" class="span4 text-center"></div>');
    $("#row1").append(point1);
    $("#row1").append(point2);
    $("#row1").append(point3);
}

var appendMiddlePoint = function(currentValue){
    appendEmptyUpperRow();
    var point5 = $('<div id="point5" class="span12 text-center large-figure muted">'+ currentValue +'</div>');
    $("#row2").append(point5);
    appendEmptyLowerRow();
}

var appendEmptyLowerRow = function(){
    var point7 = $('<div id="point7" class="span4 text-center"></div>');
    var point8 = $('<div id="point8" class="span4 text-center"></div>');
    var point9 = $('<div id="point9" class="span4 text-center"></div>');
    $("#row3").append(point7);
    $("#row3").append(point8);
    $("#row3").append(point9);
}










