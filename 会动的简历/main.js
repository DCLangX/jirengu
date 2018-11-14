var firstPre = document.querySelector('#first');
var oneCss = document.querySelector('#one');
var firstText = `/*
 *注意了我要制作一个会动的网页！！
 *首先改个背景颜色
 *emmmmm.....
 *那就灰色好了
 */

*{
    transition: all 1s;
    margin: 0;
    padding: 0;
}
body{
    background-color: rgba(146, 156, 156, 0.281);
    font-size: 20px;
}
/*再加点细节*/
#first{
    padding: 5%;
    background-color: rgba(0, 0, 0, 0.712);
    color: white;
}
`;
var n = 0;
var time1 = setInterval(()=>{
    firstPre.innerHTML = firstText.substring(0,n);
    oneCss.innerHTML = firstText.substring(0,n);
    if (n>=firstText.length) {
        clearInterval(time1);
    }
    n+=1;
},50);
