
var analyse = function(value, ignoreStrictObject, displayRawValue){
    
    ignoreStrictObject  = typeof ignoreStrictObject !== 'undefined' ? ignoreStrictObject : true;
    displayRawValue     = typeof displayRawValue    !== 'undefined' ? displayRawValue    : true;
    
    console.log("-- START analyse with UNDERSCORE --");
    console.log("-- isObject()    -- value  is an OBJECT            : "         + _.isObject(value)     + " -- TRUE {Array, function} FALSE {String, Number}");
    console.log("-- isUndefined() -- value  is    Undefined         : "         + _.isUndefined(value)    );

    if( _.isObject(value) || ignoreStrictObject ){
    console.log("-- isEmpty()     -- OBJECT contains no values      : "         + _.isEmpty(value)      );
    console.log("-- isNull()      -- OBJECT is    Null              : "         + _.isNull(value)    );
    console.log("-- isBoolean()   -- OBJECT is a  Boolean           : "         + _.isBoolean(value)    );
    console.log("-- isString()    -- OBJECT is a  String            : "         + _.isString(value)     );
    console.log("-- isArray()     -- OBJECT is an Array             : "         + _.isArray(value)      );
    console.log("-- isDate()      -- OBJECT is a  Date              : "         + _.isDate(value)       );
    console.log("-- isFunction()  -- OBJECT is a  Function          : "         + _.isFunction(value)   );
    console.log("-- isNumber()    -- OBJECT is a  Number            : "         + _.isNumber(value)     + " -- including NaN");
    console.log("-- isNaN()       -- OBJECT is a  NaN               : "         + _.isNaN(value)        );
    console.log("-- isFinite()    -- OBJECT is a  finite Number     : "         + _.isFinite(value)     );
    console.log("-- isElement()   -- OBJECT is a  DOM element       : "         + _.isElement(value)    );
    console.log("-- isRegExp()    -- OBJECT is a  RegExp            : "         + _.isRegExp(value)     );
    console.log("-- isArguments() -- OBJECT is an Arguments object  : "         + _.isArguments(value)  );
    }
    if(displayRawValue){
    console.log("### RAW VALUE (next line) ###\n" + value);
    }
    console.log("-- END analyse with UNDERSCORE --");
}