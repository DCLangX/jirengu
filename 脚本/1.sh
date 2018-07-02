if [ -d $1 ];then
    echo "$1已经存在了"
    exit
else
    mkdir &1
    cd $1
    mkdir css js
    touch index.html css/style.css js/main.js
    exit
fi
echo "<!DOCTYPE>" > index.html
echo "<title>Hello</title>" >> index.html
echo "<h1>Hi</h1>" >> index.html
echo "h1{color: red;}" > css/style.css
echo "var string = \"Hello World\";alert(string)" > js/main.js
