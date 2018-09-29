var allButtons = $('#buttons > span')
//获取所有切换按钮
var $img = $('#images');
// 获取图片所在的父元素，通过移动该父元素位置来造成图片切换的假象
var btnNum = allButtons.length;
// 获取所有按钮的数量
var n = 1;
// 这个变量比较特殊，又作为计时器需要的变量，又间接记录当前展示图片的序号，同时决定计时器触发的按钮序号
for (let i = 0; i < btnNum; i++) {
    $(allButtons[i]).on('click', function (e) {
        // 遍历所有按钮为其添加事件
        var index = $(e.currentTarget).index();
        // 获取点击按钮的序号，即 0 或 1 或 2 或 3
        var far = -920 * index;
        // 计算切换到该序号对应图片的偏移量
        console.log(far);
        $(e.currentTarget).addClass('red').siblings('.red').removeClass('red')
        // 将点击的按钮添加red的class并消除所有兄弟按钮的red calss
        $img.css({
            transform: 'translateX(' + far + 'px)'
            // 执行图片区域偏移
        });
        n = index;
        // 最后重置n
    })
}

// 以上为手动按钮的点击事件


// 以下编写自动轮播，定义自动计时器，自动触发上方手动按钮

var timeId = setInterval(() => {
    // 设定计时器
    let num = n % btnNum;
    // 定义此计时器内经过计算确定触发的按钮序号
    allButtons.eq(num).trigger('click');
    // 触发该按钮
    n++;
}, 1700)


// 以下设定鼠标移入窗口时，暂停图片自动轮播
$('.window').on('mouseenter',()=>{window.clearInterval(timeId);})
// 为窗口添加事件，结束计时器
            .on('mouseleave',()=>{
                // 当鼠标移出窗口是重新设定计时器
                timeId = setInterval(() => {
                    let num = n % btnNum;
                    allButtons.eq(num).trigger('click');
                    n++;
                }, 1700)
            })