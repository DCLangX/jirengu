// 这次无缝轮播想了和方方老师不同的思路，
// 主要流程就是通过三秒一次的遍历，查询出当前正在处于展示中的图片序号，
// 然后推算出下一张需要展示的图片序号，
// 最后改变两张图片的class即可
var $img = $('.main>.img>img');
// 获取图片对象
setInterval(() => {
    // 设置计时器
    var nextElementIndex, nowElementIndex;
    // 定义nextElementIndex和nowElementIndex变量，也就是下一张展示的图片序号，和当前正在展示的图片序号
    $img.each(function (index) {
        //遍历整个对象
        if ($(this).hasClass('middle')) {
            //匹配含有middle class的图片标签，即当前正在展示的图片
            nowElementIndex = index;
            // 存入当前正在展示的图片序号
            nextElementIndex = (index === $img.length - 1) ? 0 : index + 1;
            // 推算出下一张将要展示的图片序号，一般情况下直接就就后一张，
            // 但是碰到当前图片已经是最后一张的特殊情况，就要手动调整为第一张，也就是序号为0
        } else if ($(this).hasClass('left')) {
            // 匹配处于左边的图片，也就是展示完离开的状态
            $(this).removeClass('left').addClass('right');
            // 一律将此类图片挪到右边，也就是待展示状态
        }
    });
    $img.eq(nowElementIndex).removeClass('middle').addClass('left');
    // 给当前正在展示的图片的添加left class，也就是添加离开动画
    $img.eq(nextElementIndex).removeClass('right').addClass('middle');
    // 给下一张将要展示的图片的添加middle class，也就是添加进入动画
}, 3000);