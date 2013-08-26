var silverMainColor = "#a7a7a7";
var silverLightMainColor = "#E7E7E7";
var silverFontColor = "#000000";
var silverLightFontColor = "#999999";

var redMainColor = "#C82040";
var redLightMainColor = "#E45234";
var redFontColor = "#790000";
var redLightFontColor = "#C52040";

var mainColor = [silverMainColor, redMainColor];
var mainColorLight = [silverLightMainColor, redLightMainColor];
var fontColor = [silverFontColor, redFontColor];
var fontColorLight = [silverLightFontColor, redLightFontColor];
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


var setAppColor = function(){
    $("div#main").css("background-color", getMainColor());
    $(".large-figure").css("background-color", getMainColor());
    $(".header").css("background-color", getMainColor());
    $(".footer").css("background-color", getMainColor());
    $(".spRow1").css("background-color", getMainColor());
    $(".spRow2").css("background-color", getMainColor());
    $(".spRow3").css("background-color", getMainColor());
    $(".spRow4").css("background-color", getMainColor());
}



