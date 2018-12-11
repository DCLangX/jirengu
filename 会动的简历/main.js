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
    background-color: #272822;
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
var highLiAndShow = function()
var n = 0;
var time1 = setInterval(() => {
    firstPre.innerHTML = Prism.highlight(firstText.substring(0, n), Prism.languages.css, 'css');
    oneCss.innerHTML = firstText.substring(0, n);
    if (n >= firstText.length) {
        clearInterval(time1);
        createPaper();
        againPre()
    }
    n += 1;
}, 50);
var createPaper = function () {
    var paper = document.createElement('div');
    paper.id = 'paper';
    document.body.appendChild(paper);
}
var againPre = function () {
    var cssTwo = `
#paper{
    width: 100%;
    height: 100%;
    background-color: white;
}
body{
    display: flex;
}
    `;
    var n2 = 0;
    var time2 = setInterval(() => {
        firstPre.innerHTML = Prism.highlight(firstText + cssTwo.substring(0, n2), Prism.languages.css, 'css');
        oneCss.innerHTML += cssTwo.charAt(n2)
        if (n2 >= cssTwo.length) {
            clearInterval(time2);
        }
        n2+=1;
    }, 50)
}