/*
 * key constants
 */
var LS_VISIBLE_MAIN_SYMBOL = "LS_VISIBLE_MAIN_SYMBOL";
var LS_SMALL_MAIN_SYMBOL = "LS_SMALL_MAIN_SYMBOL";

/*
 * type constants
 */
var TYPE_STRING     = "String";
var TYPE_BOOLEAN    = "Boolean";


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
    }
    if(S(expectedReturnType).contains(TYPE_STRING)){
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

/*
 * get storage states
 */
var isMainSymbolVisible = function(){
    return readFromLocalStorage(LS_VISIBLE_MAIN_SYMBOL, TYPE_BOOLEAN);
}

var isMainSymbolSmall = function(){
    return readFromLocalStorage(LS_SMALL_MAIN_SYMBOL, TYPE_BOOLEAN);
}

/*
 * set default values in the application
 */
var initLocalStorage = function(){
    writeToLocalStorage(LS_VISIBLE_MAIN_SYMBOL, true);
    writeToLocalStorage(LS_SMALL_MAIN_SYMBOL, false);
}

/*
 * debug
 */
var getStorgeState = function(){
    console.log(LS_VISIBLE_MAIN_SYMBOL + " : " + isMainSymbolVisible());
    console.log(LS_SMALL_MAIN_SYMBOL + " : " + isMainSymbolSmall());
}

