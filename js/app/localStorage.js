/*
 * key constants
 */
var LS_PREVIEW_FONT_SIZE_FACTOR   = "LS_PREVIEW_FONT_SIZE_FACTOR";          // 1.0
var LS_PRESENT_FONT_SIZE_FACTOR   = "LS_PRESENT_FONT_SIZE_FACTOR";          // 1.0

var LS_COLOR_INDEX                = "LS_COLOR_INDEX";                         // 0
var LS_OPACITY_INDEX              = "LS_OPACITY_INDEX";                       // 6
var LS_DECK_INDEX                 = "LS_DECK_INDEX";                          // 0

/*
 * type constants
 */
var TYPE_STRING     = "String";
var TYPE_BOOLEAN    = "Boolean";
var TYPE_FLOAT      = "Float";
var TYPE_INTEGER    = "Integer";

/*
 * CRUD operations
 */
var clearLocalStorage = function(){
    localStorage.clear();
}

var writeToLocalStorage = function(key, value){
    localStorage.setItem(key, value);
}

/**
 *
 * @param key
 * @param expectedReturnType {"Boolean", "String", *}
 * @returns {Boolean, String, String}
 */
var readFromLocalStorage = function(key, expectedReturnType){

    var result = null;

    expectedReturnType = typeof expectedReturnType !== 'undefined' ? expectedReturnType : TYPE_STRING;

    if(S(expectedReturnType).contains(TYPE_BOOLEAN)){

        result = extractBoolean( localStorage.getItem(key) );

    } else if(S(expectedReturnType).contains(TYPE_FLOAT)){

        result = extractFloat( localStorage.getItem(key) );

    } else if(S(expectedReturnType).contains(TYPE_INTEGER)){

        result = extractInteger( localStorage.getItem(key) );

    } else if(S(expectedReturnType).contains(TYPE_STRING)){

        result = localStorage.getItem(key);
    }

    return result;
}

/*
 * Type extractors
 */
var extractBoolean = function(string){
    var result = null;
    if( _.isString(string) ){
        result =  S(string).toBoolean();
    }
    return result;
}

var extractFloat = function(string){
    var result = null;
    if( _.isString(string) ){
        result =  S(string).toFloat(1);
    }
    return result;
}

var extractInteger = function(string){
    var result = null;
    if( _.isString(string) ){
        result =  S(string).toInt();
    }
    return result;
}

/*
 * GETTER
 */
var getPreviewFontSizeFactorFromLocalStorage = function(){
    return readFromLocalStorage(LS_PREVIEW_FONT_SIZE_FACTOR , TYPE_FLOAT);
}

var getPresentFontSizeFactorFromLocalStorage = function(){
    return readFromLocalStorage(LS_PRESENT_FONT_SIZE_FACTOR , TYPE_FLOAT);
}

var getOpacityIndexFromLocalStorage = function(){
    return readFromLocalStorage(LS_OPACITY_INDEX, TYPE_INTEGER);
}

var getColorIndexFromLocalStorage = function(){
    return readFromLocalStorage(LS_COLOR_INDEX, TYPE_INTEGER);
}

var getDeckIndexFromLocalStorage = function(){
    return readFromLocalStorage(LS_DECK_INDEX, TYPE_INTEGER);
}


/*
 * SETTER
 */
var setColorIndexInLocalStorage = function(i){
    writeToLocalStorage(LS_COLOR_INDEX, i);
}

var setPreviewFontSizeFactorInLocalStorage = function(factor){
    writeToLocalStorage(LS_PREVIEW_FONT_SIZE_FACTOR , factor);
}

var setPresentFontSizeFactorInLocalStorage = function(factor){
    writeToLocalStorage(LS_PRESENT_FONT_SIZE_FACTOR , factor);
}

var setOpacityIndexInLocalStorage = function(index){
    writeToLocalStorage(LS_OPACITY_INDEX, index);
}

var setDeckIndexInLocalStorage = function(index){
    writeToLocalStorage(LS_DECK_INDEX, index);
}



/*
 * set default values in the application
 */
var initLocalStorage = function(){
    if(notInitialized()){
        setLocalStorageDefaultValues();
    }
}

var notInitialized = function(){
     return getPresentFontSizeFactorFromLocalStorage() === null ||
            getPreviewFontSizeFactorFromLocalStorage() === null ||
            getOpacityIndexFromLocalStorage() === null ||
            getColorIndexFromLocalStorage() === null ||
            getDeckIndexFromLocalStorage() === null;
}

var setLocalStorageDefaultValues = function(){
    clearLocalStorage();

    //factors
    writeToLocalStorage(LS_PREVIEW_FONT_SIZE_FACTOR,                        "1.0");
    writeToLocalStorage(LS_PRESENT_FONT_SIZE_FACTOR,                        "1.0");

    //start color
    writeToLocalStorage(LS_COLOR_INDEX,                                     "0");
    writeToLocalStorage(LS_OPACITY_INDEX,                                   "6");
    writeToLocalStorage(LS_DECK_INDEX,                                      "0");

    //debug
    console.log(MESSAGE_TYPE_INFO + " - LocalStorageDefaultValues has been set.");
}


/*
 * debug
 */
var getStorgeState = function(){
    console.log(LS_PREVIEW_FONT_SIZE_FACTOR                          + " : " + getPreviewFontSizeFactorFromLocalStorage());
    console.log(LS_COLOR_INDEX                                       + " : " + getColorIndexFromLocalStorage());
}

