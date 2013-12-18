var silverMainColor = "#a7a7a7";
var silverLightMainColor = "#E7E7E7";
var silverUltraLightMainColor = "#FFFFFF";
var silverFontColor = "#000000";

var redMainColor = "#C82040";
var redLightMainColor = "#FFFFFF";
var redUltraLightMainColor = "#FFFFFF";
var redFontColor = "#000000";

var greenMainColor = "#2ca02c";
var greenLightMainColor = "#FFFFFF";
var greenUltraLightMainColor = "#FFFFFF";
var greenFontColor = "#000000";

var blueMainColor = "#0066ff";
var blueLightMainColor = "#FFFFFF";
var blueUltraLightMainColor = "#FFFFFF";
var blueFontColor = "#000000";

var yellowMainColor = "#ffd42a";
var yellowLightMainColor = "#ffffff";
var yellowUltraLightMainColor = "#FFFFFF";
var yellowFontColor = "#000000";

var mainColor = [silverMainColor, redMainColor, greenMainColor, blueMainColor, yellowMainColor];
var mainColorLight = [silverLightMainColor, redLightMainColor, greenLightMainColor, blueLightMainColor, yellowLightMainColor];
var mainColorUltraLight = [silverUltraLightMainColor, redUltraLightMainColor, greenUltraLightMainColor, blueUltraLightMainColor, yellowUltraLightMainColor];
var fontColor = [silverFontColor, redFontColor, greenFontColor, blueFontColor, yellowFontColor];
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

var applyOpacityToMainSymbol = function(){
    $(".large-figure").css("color", getFontColor());
    $(".large-figure").css("opacity", getOpacityFactorBasedOnIndex());
}

var applyMainColorToMainSymbol = function(){
    $(".large-figure").css("color", getFontColor());
    $(".large-figure").css("opacity", "1.0");
}

var switchLargeFigureColor = function(opacityTrigger){
    if(opacityTrigger){
        applyOpacityToMainSymbol();
    }else{
        applyMainColorToMainSymbol();
    }
}

var switchLargeFigureBackground = function(lightColorTrigger){

    if(lightColorTrigger){

        $("body").css("background", getMainColor());

    } else{

        //set uni-color-bg for compatibility of old browsers
        $("body").css("background", getMainColorLight());

        //set color gradients of CSS3 browsers
        var lightGradient = "top,"+  getMainColor() + "," + getMainColorLight() + "," +  getMainColorUltraLight() + "," +  getMainColorLight() + "," + getMainColor();
        applyGradientToBackground(lightGradient);
    }
}

var applyGradientToBackground = function(gradient){
    $("body").css({background: composeBackGround("-moz-linear-gradient", gradient)});
    $("body").css({background: composeBackGround("-webkit-linear-gradient", gradient)});
    $("body").css({background: composeBackGround("-o-linear-gradient", gradient)});
    $("body").css({background: composeBackGround("-ms-linear-gradient", gradient)});
    $("body").css({background: composeBackGround("linear-gradient", gradient)});
}

var composeBackGround = function(browser, gradient){
    return browser + "(" + gradient + ")";
}

var changeTheme = function(){
    //background
    $("body").css("background-color", getMainColor());

    //font
    $(".selectValue").css("color", getFontColor());
}

var initAppColor = function(){

    //deck
    deckIndex = getDeckIndexFromLocalStorage();

    //main color
    colorIndex = getColorIndexFromLocalStorage();

    //main font color opacity
    opacityIndex = getOpacityIndexFromLocalStorage();

    //background
    $("body").css("background-color", getMainColor());

    //font
    applyOpacityToMainSymbol();
}

var resetColor = function(){
    colorIndex = 0;
}



