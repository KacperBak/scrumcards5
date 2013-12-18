#!/bin/sh
echo "--- OUT creation      ---"
#clear
rm -rf out/

#create
mkdir out

echo "--- JS aggregation    ---"
# var
JS_OUTPUT=./out/index.js

#create file
touch $JS_OUTPUT

# aggregate - LIB files (order is extreme important --> no loop)
cat ../js/lib/jquery-1.10.2.js >> $JS_OUTPUT
echo "\n" >> $JS_OUTPUT
cat ../js/lib/bootstrap.js >> $JS_OUTPUT
echo "\n" >> $JS_OUTPUT
cat ../js/lib/underscore.js >> $JS_OUTPUT
echo "\n" >> $JS_OUTPUT
cat ../js/lib/string.js >> $JS_OUTPUT
echo "\n" >> $JS_OUTPUT


# aggregate - APP files
APP_FILES=../js/app/*

for f in $APP_FILES
do
    cat $f >> $JS_OUTPUT
    echo "\n" >> $JS_OUTPUT
done

# aggregate - UI files
UI_FILES=../js/ui/*

for f in $UI_FILES
do
    cat $f >> $JS_OUTPUT
    echo "\n" >> $JS_OUTPUT
done

#init application
echo "initSc5();" >> $JS_OUTPUT

echo "--- CSS aggregation   ---"

# var
CSS_OUTPUT=./out/index.css

# create file
touch $CSS_OUTPUT

#var
CSS_FILES=../*.css

for f in $CSS_FILES
do
    cat $f >> $CSS_OUTPUT
    echo "\n" >> $CSS_OUTPUT
done

echo "--- STATIC FILES copy ---"

#webserver config
cp ../.htaccess out/

#html
cp ../index.html out/

#font
cp ../sc5Font.dev.svg out/
cp ../sc5Font.eot out/
cp ../sc5Font.svg out/
cp ../sc5Font.ttf out/
cp ../sc5Font.woff out/

#png
cp ../apple-touch-icon-precomposed.png out/
cp ../favicon.png out/
cp ../glyphicons-halflings.png out/
cp ../glyphicons-halflings-white.png out/

echo "--- MANIFEST creation ---"
#change dir
cd out/

#var
MANIFEST_OUTPUT=index.manifest

#create file
touch $MANIFEST_OUTPUT

#var
MANIFEST_FILES=*

#write head
echo "CACHE MANIFEST" >> $MANIFEST_OUTPUT

#write date|timestamp as a comment
now=$(date +%s)
echo "#$now" >> $MANIFEST_OUTPUT

#traverse all files
for f in $MANIFEST_FILES
do
    echo $f >> $MANIFEST_OUTPUT
done

#write end
echo "NETWORK:" >> $MANIFEST_OUTPUT
echo "*" >> $MANIFEST_OUTPUT

echo "--- COMPRESSED dir    ---"
cd ..
rm -rf compressed/
mkdir compressed
cp -r out/. compressed/
rm -rf compressed/index.js
rm -rf compressed/index.css


echo "--- JS  compress GCC  ---"
# 164341 Byte
java -jar compiler.jar --js out/index.js --js_output_file compressed/index.js
#java -jar compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --js out/index.js --js_output_file compressed/index.js

echo "--- CSS compress YUI  ---"
# 166504 Byte
# java -jar yuicompressor-2.4.8.jar out/index.js -o compressed/index.js --charset utf-8
# 107588 Byte
java -jar yuicompressor-2.4.8.jar out/index.css -o compressed/index.css --charset utf-8