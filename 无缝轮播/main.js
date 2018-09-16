var $img = $('.main>.img>img');
setInterval(() => {
    var nextElementIndex, nowElementIndex;
    $img.each(function (index) {
        if ($(this).hasClass('middle')) {
            nowElementIndex = index;
            nextElementIndex = (index === $img.length - 1) ? 0 : index + 1;
        } else if ($(this).hasClass('left')) {
            $(this).removeClass('left').addClass('right');
        }
    });
    $img.eq(nowElementIndex).removeClass('middle').addClass('left');
    $img.eq(nextElementIndex).removeClass('right').addClass('middle');
}, 3000);