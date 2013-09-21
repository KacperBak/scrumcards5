/*
 * key constants
 */
var LS_VISIBLE_MAIN_SYMBOL                      = "LS_VISIBLE_MAIN_SYMBOL";
var LS_SMALL_MAIN_SYMBOL                        = "LS_SMALL_MAIN_SYMBOL";

var LS_SMALL_FONT_SIZE_INIT_FACTOR   = "LS_SMALL_FONT_SIZE_INIT_FACTOR";        // 0.5
var LS_NORMAL_FONT_SIZE_INIT_FACTOR  = "LS_NORMAL_FONT_SIZE_INIT_FACTOR";       // 1.0

/*
 * type constants
 */
var TYPE_STRING     = "String";
var TYPE_BOOLEAN    = "Boolean";
var TYPE_FLOAT      = "Float";

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

/*
 * get storage states
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

/*
 * set default values in the application
 */
var initLocalStorage = function(){
    if(notInitialized()){
        setDefaultValues();
    }
}

var notInitialized = function(){
    return isMainSymbolSmall() === null || isMainSymbolVisible() === null || getSmallFontSizeInitFactor() === null || getNormalFontSizeInitFactor() === null;
}

var setDefaultValues = function(){
    clearLocalStorage();
    writeToLocalStorage(LS_VISIBLE_MAIN_SYMBOL,             "true");
    writeToLocalStorage(LS_SMALL_MAIN_SYMBOL,               "false");
    writeToLocalStorage(LS_SMALL_FONT_SIZE_INIT_FACTOR,     "0.5");
    writeToLocalStorage(LS_NORMAL_FONT_SIZE_INIT_FACTOR,    "1.0");
}


/*
 * debug
 */
var getStorgeState = function(){
    console.log(LS_VISIBLE_MAIN_SYMBOL                      + " : " + isMainSymbolVisible());
    console.log(LS_SMALL_MAIN_SYMBOL                        + " : " + isMainSymbolSmall());
    console.log(LS_SMALL_FONT_SIZE_INIT_FACTOR              + " : " + getSmallFontSizeInitFactor());
    console.log(LS_NORMAL_FONT_SIZE_INIT_FACTOR             + " : " + getNormalFontSizeInitFactor());
}

