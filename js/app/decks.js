var scrumValues             = [0, "&#189;", 1, 2, 3, 5, 8, 13, 20, 40, 100, "&#63;"];
var specialCharacterValues  = ["&#xe007;", "&#xe009;", "&#xe008;", "&#xe004;", "&#xe000;", "&#xe005;", "&#xe003;", "&#xe00b;", "&#xe00a;", "&#xe00c;", "&#xe00e;", "&#xe00d;"];
var fibonacciValues         = [0, 1, 2 , 3, 5, 8, 13, 21, 34, 55, 89, 144];
var deckValues              = [scrumValues, specialCharacterValues, fibonacciValues];

var valueIndex              = 0;
var deckIndex               = 0;
var valueMaxIndex      = _.size(deckValues[deckIndex]) - 1;

/**
 * return the raw value from array, based on deck- and valueIndex
 */
var getValueBasedOnDeckIndex = function(){
    return deckValues[deckIndex][valueIndex];
}

var nextDeckValue = function(){
    if( valueIndex + 1 <= valueMaxIndex){
        valueIndex++;
    }else{
        valueIndex = 0;
    }
    return getValueBasedOnDeckIndex();
}

var lastDeckValue = function(){
    if( valueIndex - 1 >= 0 ){
        valueIndex--;
    }else{
        valueIndex = valueMaxIndex;
    }
    return getValueBasedOnDeckIndex();
}