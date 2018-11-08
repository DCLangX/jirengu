! function () {
    var nav = document.querySelector('.daohang');
    window.onscroll = function () {
        if (window.scrollY > 10) {
            nav.classList.add('move');
        } else {
            nav.classList.remove('move');
        }
    };

    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);
    var daoHangList = document.querySelectorAll('nav.daohang .navbar>ul>li>a');
    for (let i = 0; i < daoHangList.length; i++) {
        daoHangList[i].onclick = function (GLY) {
            GLY.preventDefault(); //阻止点击的a标签的默认跳转
            let GGG = GLY.target;
            let elementHref = GGG.getAttribute('href'); //获取点击的a标签的href属性
            let jumpElement = document.querySelector(elementHref); //根据上面获取的属性，取得对应要跳转到的标签
            let jumpY = jumpElement.offsetTop; //获取跳转元素的位置
            //window.scrollTo(0,jumpY-100);                           //跳转到对应位置
            let nowY = window.scrollY;
            // 设置循环动画
            let coords = {
                y: nowY
            }; // 起始点 (0, 0)
            let time = Math.abs(jumpY - nowY);
            console.log(time);
            let tween = new TWEEN.Tween(coords) // 创建一个新的tween用来改变 'coords'
                .to({
                    y: jumpY - 100
                }, time) // 在times内移动至jumpy
                .easing(TWEEN.Easing.Cubic.Out) // 使用缓动功能使的动画更加平滑
                .onUpdate(function () { // 在 tween.js 更新 'coords' 后调用
                    window.scrollTo(0, coords.y);
                })
                .start(); // 立即开始 tween
        };
    };

}.call()