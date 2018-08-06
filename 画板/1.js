var huaban = document.getElementById('canvas');
var context = huaban.getContext('2d');

var setCanvasSize = function(canvas){
    // 初始化画布大小的函数
    
    var tongbu = function () {
        //获取视窗宽高，并同步设置画板
        var pageWidth = document.documentElement.clientWidth;
        var pageHeight = document.documentElement.clientHeight;
        console.log(pageWidth);
        canvas['width'] = pageWidth;
        canvas['height'] = pageHeight;
    };
    tongbu();
    window.onresize = function () {
        tongbu();
    };
}
setCanvasSize(huaban);
// 执行初始化画布大小

var painting = false;
var lastPoint = {
    x: undefined,
    y: undefined
}
huaban.onmousedown = function (aaa) {
    var x = aaa.clientX;
    var y = aaa.clientY;
    painting = true;
    if (eraserEnable) {
        context.clearRect(x-5, y-5, 10, 10)
    } else {
        lastPoint = {
            x: x,
            y: y
        };
    }
}
huaban.onmousemove = function (aaa) {
    var x = aaa.clientX;
    var y = aaa.clientY;
    if (painting) {
        //画笔启用
        if (eraserEnable) {
            //使用橡皮擦
            context.clearRect(x-5, y-5, 10, 10)
        } else {
            //使用普通画笔
            var newPoint = {
                x: x,
                y: y
            }
            drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
            lastPoint = newPoint;
        }
    }
}
huaban.onmouseup = function (aaa) {
    painting = false;
}
function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'black';
    context.moveTo(x1, y1); // 起点
    context.lineWidth = 5;
    context.lineTo(x2, y2); // 终点
    context.stroke();
    context.closePath();
};

var eraserEnable = false;
var eraser = document.getElementById('eraser');
eraser.onclick = function () {
    //橡皮擦启用关闭点击切换
    eraserEnable = !eraserEnable;
}