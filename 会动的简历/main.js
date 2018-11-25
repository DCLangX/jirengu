var firstPre = document.querySelector('#first');
var oneCss = document.querySelector('#one');
var writeCode = function (prefix, code, callback) {
    firstPre.innerHTML = prefix || '';
    var n = 0;
    var time1 = setInterval(() => {
        firstPre.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css');
        oneCss.innerHTML = prefix + code.substring(0, n);
        firstPre.scrollTop = firstPre.scrollHeight;
        if (n >= code.length) {
            clearInterval(time1);
            callback()
        }
        n += 1;
    }, 10);
}
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
    background-color: #272822;
    min-width:50%;
    height: 100vh;
    overflow: hidden;
}

/*太丑了，整点代码高亮*/

.token.selector{
    color: #a6e22e;
}
.token.property{
    color: #f92672;
}
.token.function {
    color: #e6db74;
}
.token.punctuation {
    color: #f8f8f2;
}
#first{
    color: white;
}
/*
好了，不玩了，进入正题，
我需要一张白纸
*/
`;
writeCode('', firstText, () => {
    createPaper(() => {
        writeCode(firstText, nextText,()=>{
            writePaper(text2)
        })
    });
})
var createPaper = function (fn2) {
    var paper = document.createElement('div');
    paper.id = 'paper';
    document.body.appendChild(paper);
    fn2.call()
}
var nextText = `
#paper{
    position: fixed;
    top:0;
    right: 0;
    width: 50% ;
    height: 100vh;
    padding: 5%;
    background: #ccc;
}
/*见证奇迹的时刻到了，请看右边 */



`;
var text2 = `#自我介绍

我叫高路遥 自学前端，目前是一个前端切图仔

#技能介绍

熟悉HTML JavaScript CSS等

#项目展示

1.Canvas画板

2.网站导航页

3.在线简历

#联系方式

- QQ xxxxxxxx

- Email xxxxxxxx

- 手机xxxxxxx
`;
var writePaper = function (code) {
    var paper = document.querySelector('#paper');
    var n = 0;
    var time2 = setInterval(() => {
        paper.innerHTML = marked(code.substring(0, n));
        paper.scrollTop = paper.scrollHeight;
        if (n >= code.length) {
            clearInterval(time2);
        }
        n += 1;
    }, 10);
}