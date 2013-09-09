var silverMainColor = "#a7a7a7";
var silverLightMainColor = "#E7E7E7";
var silverUltraLightMainColor = "#FFFFFF";
var silverFontColor = "#000000";
var silverLightFontColor = "#999999";

var redMainColor = "#C82040";
//var redLightMainColor = "#fceef0";
var redLightMainColor = "#FFFFFF";
var redUltraLightMainColor = "#FFFFFF";
var redFontColor = "#C82040";
var redLightFontColor = "#a7123b";

var greenMainColor = "#2ca02c";
//var greenLightMainColor = "#d9f5d9";
var greenLightMainColor = "#FFFFFF";
var greenUltraLightMainColor = "#FFFFFF";
var greenFontColor = "#2ca02c";
var greenLightFontColor = "#225500";

var blueMainColor = "#0066ff";
//var blueLightMainColor = "#ebf3ff";
var blueLightMainColor = "#FFFFFF";
var blueUltraLightMainColor = "#FFFFFF";
var blueFontColor = "#0066ff";
var blueLightFontColor = "#0044aa";

var yellowMainColor = "#ffd42a";
//var yellowLightMainColor = "#fff5cf";
var yellowLightMainColor = "#ffffff";
var yellowUltraLightMainColor = "#FFFFFF";
var yellowFontColor = "#000000";
var yellowLightFontColor = "#ffeeaa";

var mainColor = [silverMainColor, redMainColor, greenMainColor, blueMainColor, yellowMainColor];
var mainColorLight = [silverLightMainColor, redLightMainColor, greenLightMainColor, blueLightMainColor, yellowLightMainColor];
var mainColorUltraLight = [silverUltraLightMainColor, redUltraLightMainColor, greenUltraLightMainColor, blueUltraLightMainColor, yellowUltraLightMainColor];
var fontColor = [silverFontColor, redFontColor, greenFontColor, blueFontColor, yellowFontColor];
var fontColorLight = [silverLightFontColor, redLightFontColor, greenLightFontColor, blueLightFontColor, yellowLightFontColor];
var colorIndex = 0;

var getMainColor = function(){
    return mainColor[colorIndex];
}

var getMainColorLight = function(){
    return mainColorLight[colorIndex];
}

var getMainColorUltraLight = function(){
    return mainColorUltraLight[colorIndex];
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

    if(lightColorTrigger){

        $(".large-figure").css("background", getMainColor());

    } else{

        //set uni-color-bg for compatibility of old browsers
        $(".large-figure").css("background", getMainColorLight());

        //set color gradients of CSS3 browsers
        var lightGradient = "top,"+  getMainColor() + "," + getMainColorLight() + "," +  getMainColorUltraLight() + "," +  getMainColorLight() + "," + getMainColor();
        applyGradientToBackground(lightGradient);
    }
}

var applyGradientToBackground = function(gradient){
    $(".large-figure").css({background: composeBackGround("-moz-linear-gradient", gradient)});
    $(".large-figure").css({background: composeBackGround("-webkit-linear-gradient", gradient)});
    $(".large-figure").css({background: composeBackGround("-o-linear-gradient", gradient)});
    $(".large-figure").css({background: composeBackGround("-ms-linear-gradient", gradient)});
    $(".large-figure").css({background: composeBackGround("linear-gradient", gradient)});
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



