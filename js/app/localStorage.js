/*
 * key constants
 */
var LS_OVERRIDE_OPACITY_MAIN_SYMBOL                      = "LS_OVERRIDE_OPACITY_MAIN_SYMBOL";

var LS_OPACITY_FACTOR             = "LS_OPACITY_FACTOR";                    // 0.5
var LS_PREVIEW_FONT_SIZE_FACTOR   = "LS_PREVIEW_FONT_SIZE_FACTOR";          // 1.0
var LS_PRESENT_FONT_SIZE_FACTOR   = "LS_PRESENT_FONT_SIZE_FACTOR";          // 1.0

var LS_COLOR_INDEX                = "LS_COLOR_INDEX";                         // 0
var LS_OPACITY_INDEX              = "LS_OPACITY_INDEX";                       // 4

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
var getPreviewFontSizeFactor = function(){
    return readFromLocalStorage(LS_PREVIEW_FONT_SIZE_FACTOR , TYPE_FLOAT);
}

var getPresentFontSizeFactor = function(){
    return readFromLocalStorage(LS_PRESENT_FONT_SIZE_FACTOR , TYPE_FLOAT);
}

var getOpacityFactor = function(){
    return readFromLocalStorage(LS_OPACITY_FACTOR, TYPE_FLOAT);
}

var getOpacityIndexFromLocalStorage = function(){
    return readFromLocalStorage(LS_OPACITY_INDEX, TYPE_INTEGER);
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

var setPreviewFontSizeFactor = function(factor){
    writeToLocalStorage(LS_PREVIEW_FONT_SIZE_FACTOR , factor);
}

var setPresentFontSizeFactor = function(factor){
    writeToLocalStorage(LS_PRESENT_FONT_SIZE_FACTOR , factor);
}

var setOpacityFactor = function(factor){
    writeToLocalStorage(LS_OPACITY_FACTOR, factor);
}

var setOpacityIndex = function(index){
    writeToLocalStorage(LS_OPACITY_INDEX, index);
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
    return  getPreviewFontSizeFactor() === null ||
            getPresentFontSizeFactor() === null ||
            getOpacityIndexFromLocalStorage() === null ||
            getColorIndexFromLocalStorage() === null;
}

var setLocalStorageDefaultValues = function(){
    clearLocalStorage();

    //factors
    writeToLocalStorage(LS_PREVIEW_FONT_SIZE_FACTOR,                        "1.0");
    writeToLocalStorage(LS_PRESENT_FONT_SIZE_FACTOR,                        "1.0");
    writeToLocalStorage(LS_OPACITY_FACTOR,                                  "0.5");

    //start color
    writeToLocalStorage(LS_COLOR_INDEX,                                     "0");
    writeToLocalStorage(LS_OPACITY_INDEX,                                   "6");

    //debug
    console.log(MESSAGE_TYPE_INFO + " - LocalStorageDefaultValues has been set.");
}


/*
 * debug
 */
var getStorgeState = function(){
    console.log(LS_PREVIEW_FONT_SIZE_FACTOR                          + " : " + getPreviewFontSizeFactor());
    console.log(LS_PRESENT_FONT_SIZE_FACTOR                          + " : " + getPresentFontSizeFactor());
    console.log(LS_COLOR_INDEX                                       + " : " + getColorIndexFromLocalStorage());
}

