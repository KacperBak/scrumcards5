echo "--- JS aggregation ---"

JS_OUTPUT=scrumcards5.js

#clear
rm -rf $JS_OUTPUT

#create
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


