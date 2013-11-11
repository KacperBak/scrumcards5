/**
 * normal deck with index = 0
 */
var sv0 = 0;
var sv1 = "&#189;";
var sv2 = 1;
var sv3 = 2;
var sv4 = 3;
var sv5 = 5;
var sv6 = 8;
var sv7 = 13;
var sv8 = 20;
var sv9 = 40;
var sv10 = 100;
var sv11 = "&#63;";

/**
 * special character deck with index = 1
 */
var sc0 = "&#xe007;";
var sc1 = "&#xe009;";
var sc2 = "&#xe008;";
var sc3 = "&#xe004;";
var sc4 = "&#xe000;";
var sc5 = "&#xe005;";
var sc6 = "&#xe003;";
var sc7 = "&#xe00b;";
var sc8 = "&#xe00a;";
var sc9 = "&#xe00c;";
var sc10 = "&#xe00e;";
var sc11 = "&#xe00d;";

var scrumValues             = [sv0, sv1, sv2, sv3, sv4, sv5, sv6, sv7, sv8, sv9, sv10, sv11];
var specialCharacterValues  = [sc0, sc1, sc2, sc3, sc4, sc5, sc6, sc7, sc8, sc9, sc10, sc11];
var deckValues              = [scrumValues, specialCharacterValues];

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