var silverMainColor = "#a7a7a7";
var silverLightMainColor = "#E7E7E7";
var silverFontColor = "#000000";
var silverLightFontColor = "#999999";

var redMainColor = "#C82040";
var redLightMainColor = "#FFFFFF";
var redFontColor = "#C82040";
var redLightFontColor = "#a7123b";

var greenMainColor = "#2ca02c";
var greenLightMainColor = "#FFFFFF";
var greenFontColor = "#2ca02c";
var greenLightFontColor = "#225500";

var blueMainColor = "#0066ff";
var blueLightMainColor = "#FFFFFF";
var blueFontColor = "#0066ff";
var blueLightFontColor = "#0044aa";

//var yellowMainColor = "#ffd42a";
var yellowMainColor = "#ffd42a";
var yellowLightMainColor = "#ffd42a";
var yellowFontColor = "#000000";
var yellowLightFontColor = "#ffeeaa";

var mainColor = [silverMainColor, redMainColor, greenMainColor, blueMainColor, yellowMainColor];
var mainColorLight = [silverLightMainColor, redLightMainColor, greenLightMainColor, blueLightMainColor, yellowLightMainColor];
var fontColor = [silverFontColor, redFontColor, greenFontColor, blueFontColor, yellowFontColor];
var fontColorLight = [silverLightFontColor, redLightFontColor, greenLightFontColor, blueLightFontColor, yellowLightFontColor];
var colorIndex = 0;

var getMainColor = function(){
    return mainColor[colorIndex];
}

var getMainColorLight = function(){
    return mainColorLight[colorIndex];
}

var getFontColor = function(){
    return fontColor[colorIndex];
}

var getFontColorLight = function(){
    return fontColorLight[colorIndex];
}

var switchLargeFigureColor = function(lightColorTrigger){
    if(lightColorTrigger){
        $(".large-figure").css("color", getFontColorLight());
    }else{
        $(".large-figure").css("color", getFontColor());
    }
}

var switchLargeFigureBackground = function(lightColorTrigger){
    var mozillaBrowser      = "-moz-linear-gradient";
    var operaBrowser      = "-o-linear-gradient";
    var microsoftBrowser    = "-ms-linear-gradient";
    var webkitBrowser       = "-webkit-linear-gradient";
    var defaultBrowser      = "linear-gradient";

    if(lightColorTrigger){

        //set uni-color-bg for compatibility of old browsers
        $(".large-figure").css("background", getMainColor());

        //set color gradients of new browsers
        var colorGradient = "top, #a7a7a7 , #a7a7a7, #a7a7a7";

        $(".large-figure").css({background: composeBackGround(mozillaBrowser, colorGradient)});
        $(".large-figure").css({background: composeBackGround(webkitBrowser, colorGradient)});
        $(".large-figure").css({background: composeBackGround(operaBrowser, colorGradient)});
        $(".large-figure").css({background: composeBackGround(microsoftBrowser, colorGradient)});
        $(".large-figure").css({background: composeBackGround(defaultBrowser, colorGradient)});

    } else{
        //set uni-color-bg for compatibility of old browsers
        $(".large-figure").css("background", getMainColorLight());

        //set color gradients of new browsers
        var lightColorGradient = "top, #a7a7a7 , #E7E7E7, #FAFAFA , #E7E7E7, #a7a7a7";

        $(".large-figure").css({background: composeBackGround(mozillaBrowser, lightColorGradient)});
        $(".large-figure").css({background: composeBackGround(webkitBrowser, lightColorGradient)});
        $(".large-figure").css({background: composeBackGround(operaBrowser, lightColorGradient)});
        $(".large-figure").css({background: composeBackGround(microsoftBrowser, lightColorGradient)});
        $(".large-figure").css({background: composeBackGround(defaultBrowser, lightColorGradient)});
    }
}

var composeBackGround = function(browser, gradient){
    return browser + "(" + gradient + ")";
}

var changeTheme = function(){
    //background
    $("div#main").css("background-color", getMainColor());
    $(".large-figure").css("background-color", getMainColor());
    $(".header").css("background-color", getMainColor());
    $(".footer").css("background-color", getMainColor());
    $(".spRow1").css("background-color", getMainColor());
    $(".spRow2").css("background-color", getMainColor());
    $(".spRow3").css("background-color", getMainColor());
    $(".spRow4").css("background-color", getMainColor());

    //font
    $(".large-figure").css("color", getFontColorLight());
    $(".selectValue").css("color", getFontColor());
}

var initAppColor = function(){

    colorIndex = 0;

    $("div#main").css("background-color", getMainColor());
    $(".large-figure").css("background-color", getMainColor());
    $(".header").css("background-color", getMainColor());
    $(".footer").css("background-color", getMainColor());
    $(".spRow1").css("background-color", getMainColor());
    $(".spRow2").css("background-color", getMainColor());
    $(".spRow3").css("background-color", getMainColor());
    $(".spRow4").css("background-color", getMainColor());

    //font
    $(".large-figure").css("color", getFontColorLight());
    $(".selectValue").css("color", getFontColor());
}



