echo "--- OUT creation      ---"
#clear
rm -rf out/

#create
mkdir out

echo "--- JS aggregation    ---"
# var
JS_OUTPUT=./out/scrumcards5.js

#create file
touch $JS_OUTPUT

# aggregate - LIB files (order is extreme important --> no loop)
cat ../js/lib/jquery-1.10.2.min.js >> $JS_OUTPUT
echo "\n" >> $JS_OUTPUT
cat ../js/lib/bootstrap.min.js >> $JS_OUTPUT
echo "\n" >> $JS_OUTPUT
cat ../js/lib/underscore-min.js >> $JS_OUTPUT
echo "\n" >> $JS_OUTPUT
cat ../js/lib/string.min.js >> $JS_OUTPUT
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

echo "--- CSS aggregation   ---"

# var
CSS_OUTPUT=./out/scrumcards5.css

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
cp ../scrumcards5.html out/

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
MANIFEST_OUTPUT=scrumcards5.manifest

#create file
touch $MANIFEST_OUTPUT

#var
MANIFEST_FILES=*

#write head
echo "CACHE MANIFEST" >> $MANIFEST_OUTPUT

#write date
#echo "#" >> date >> $MANIFEST_OUTPUT

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
cp -R out/ compressed/
rm -rf compressed/scrumcards5.js
rm -rf compressed/scrumcards5.css


echo "--- JS  compress GCC  ---"
# 164341 Byte
java -jar compiler.jar --js out/scrumcards5.js --js_output_file compressed/scrumcards5.js
# java -jar compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --js out/scrumcards5.js --js_output_file compressed/scrumcards5.js

echo "--- CSS compress YUI  ---"
# 166504 Byte
# java -jar yuicompressor-2.4.8.jar out/scrumcards5.js -o compressed/scrumcards5.js --charset utf-8
# 107588 Byte
java -jar yuicompressor-2.4.8.jar out/scrumcards5.css -o compressed/scrumcards5.css --charset utf-8