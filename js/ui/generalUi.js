/**
 * consts
 */
var mainContentParent = "div#mainSegment";
var mainContentChild = "div#mainContent";

var replaceContent = function(parent, child, replaceFragment){
    $(child).remove();
    $(parent).append(replaceFragment);
}

var setDeckValueBasedOnIndex = function(i){
    valueIndex = i;
    replaceMainValue();
    displaySelectedDeck();
    $("button").fadeIn();
}

var displaySelectedDeck = function(){
    if(deckIndex === 0){
        displayDeck0();
    } else if(deckIndex === 1){
        displayDeck1();
    } else if (deckIndex === 2){
        displayDeck2();
    }
}

var replaceDeckValueByPlusOrMinus = function(){
    replaceMainValue();
}

/**
 * returns the html fragment that has to be replaced, depending on the deckIndex
 */
var getReplaceFragment = function(){
    if(deckIndex === 0 || deckIndex === 2){
        return $('<div id="mainContent" class="span12 text-center large-figure">'+ getValueBasedOnDeckIndex() +'</div>');
    } else if(deckIndex === 1){
        return $('<div id="mainContent" class="span12 text-center large-figure" data-icon="'+ getValueBasedOnDeckIndex() +'"></div>');
    }
}