/**
 * consts
 */
var mainContentParent = "div#mainSegment";
var mainContentChild = "div#mainContent";

/*
 * toggle button pressed CSS style
 */
var setInactive = function(selector){
    $(selector).removeClass("active");
}

var setActive = function(selector){
    $(selector).addClass("active");
}

var updateUiBasedOnLocalStorage = function(visibleState, onSelector, offSelector){
    if(visibleState){
        setActive(onSelector);
        setInactive(offSelector);
    }else{
        setActive(offSelector);
        setInactive(onSelector);
    }
}

var replaceContent = function(parent, child, replaceFragment){
    $(child).remove();
    $(parent).append(replaceFragment);
}