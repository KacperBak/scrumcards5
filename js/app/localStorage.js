/*
 * key constants
 */
var LS_VISIBLE_MAIN_SYMBOL                      = "LS_VISIBLE_MAIN_SYMBOL";
var LS_SMALL_MAIN_SYMBOL                        = "LS_SMALL_MAIN_SYMBOL";

var LS_SMALL_FONT_SIZE_INIT_FACTOR   = "LS_SMALL_FONT_SIZE_INIT_FACTOR";        // 0.5
var LS_NORMAL_FONT_SIZE_INIT_FACTOR  = "LS_NORMAL_FONT_SIZE_INIT_FACTOR";       // 1.0

var LS_COLOR_INDEX = "LS_COLOR_INDEX";  // 0
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
var isMainSymbolVisible = function(){
    return readFromLocalStorage(LS_VISIBLE_MAIN_SYMBOL, TYPE_BOOLEAN);
}

var isMainSymbolSmall = function(){
    return readFromLocalStorage(LS_SMALL_MAIN_SYMBOL, TYPE_BOOLEAN);
}

var getSmallFontSizeInitFactor = function(){
    return readFromLocalStorage(LS_SMALL_FONT_SIZE_INIT_FACTOR , TYPE_FLOAT);
}

var getNormalFontSizeInitFactor = function(){
    return readFromLocalStorage(LS_NORMAL_FONT_SIZE_INIT_FACTOR , TYPE_FLOAT);
}

var getColorIndexFromLocalStorage = function(){
    return readFromLocalStorage(LS_COLOR_INDEX, TYPE_INTEGER);
}

/*
 * SETTER
 */
var setColorIndexInLocalStorage = function(i){
    writeToLocalStorage(LS_COLOR_INDEX, i);
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
    return isMainSymbolSmall() === null || isMainSymbolVisible() === null || getSmallFontSizeInitFactor() === null || getNormalFontSizeInitFactor() === null || getColorIndexFromLocalStorage() === null;
}

var setLocalStorageDefaultValues = function(){
    clearLocalStorage();
    writeToLocalStorage(LS_VISIBLE_MAIN_SYMBOL,             "true");
    writeToLocalStorage(LS_SMALL_MAIN_SYMBOL,               "false");
    writeToLocalStorage(LS_SMALL_FONT_SIZE_INIT_FACTOR,     "0.5");
    writeToLocalStorage(LS_NORMAL_FONT_SIZE_INIT_FACTOR,    "1.0");
    writeToLocalStorage(LS_COLOR_INDEX,                     "0");
    console.log(MESSAGE_TYPE_INFO + " - LocalStorageDefaultValues has been set.");
}


/*
 * debug
 */
var getStorgeState = function(){
    console.log(LS_VISIBLE_MAIN_SYMBOL                      + " : " + isMainSymbolVisible());
    console.log(LS_SMALL_MAIN_SYMBOL                        + " : " + isMainSymbolSmall());
    console.log(LS_SMALL_FONT_SIZE_INIT_FACTOR              + " : " + getSmallFontSizeInitFactor());
    console.log(LS_NORMAL_FONT_SIZE_INIT_FACTOR             + " : " + getNormalFontSizeInitFactor());
    console.log(LS_COLOR_INDEX                              + " : " + getColorIndexFromLocalStorage());
}

