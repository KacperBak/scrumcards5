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

var replaceContent = function(parent, child, replaceFragment){
    $(child).remove();
    $(parent).append(replaceFragment);
}