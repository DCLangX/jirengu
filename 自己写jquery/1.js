window.jQuery = function (nodeOrSelector) {
    // 首先需求是要求以jQuery(参数)的形式获取一个或多个节点，那么首先我们要确定参数和返回值，
    // 此处返回值是打算设计成一个简单的伪数组，而参数相较而言就复杂一点，
    // 我们构想中参数可以传入css选择器的语句或者干脆是一个原生dom节点，因此参数需要做判断区分，
    // 接着根据传入参数获取到相关节点，并存入伪数组


    let nodes = {};
    //初始化返回值，即伪数组
    if (typeof nodeOrSelector === 'string') {
        //判断传入参数是否为字符串，是就意味着传入了css选择器语句
        var temp = document.querySelectorAll(nodeOrSelector);
        //调用原生选择器，存入临时变量，不过由于原生方法获取的元素带有原生的dom api，
        // 我们不需要这些api，所以需要再做分离，重新存入我们的伪数组
        for (let i = 0; i < temp.length; i++) {
            // 使用一个循环遍历
            nodes[i] = temp[i];
            //将节点一个一个对应存入我们自己的伪数组
        }
        nodes.length = temp.length;
        // 继续存入伪数组的length值，至此我们自己的伪数组已经生成，
        // 接下来编写另一种参数的情况
    } else if (nodeOrSelector instanceof Node) {
        //如果传入的参数直接就是一个原生dom节点,
        // 那我们省去遍历,直接存入伪数组
        nodes[0] = nodeOrSelector;
        nodes.length = 1;
    }
    //至此获取节点的代码已经编写完毕,我们开始创建自己的节点api
    nodes.addClass = function (classes) {
        // 此处需求是以 节点.addClass(参数)的形式,为节点 添加 名为 参数 的class,
        // 由于上面获取的节点是伪数组的形式,因此我们需要遍历每个节点,并添加class
        if (classes) {
            // 首先判断这个参数是否为5个false值,如果是则不执行代码,
            // 因为false值的参数会导致程序报错
            for (let i = 0; i < nodes.length; i++) {
                //遍历伪数组
                nodes[i].classList.add(classes);
                // 给每个伪数组里的节点添加class
            }
        }
    }
    // 至此添加class的代码已经完成,开始编写设置节点内容的代码
    nodes.setText = function (text) {
        // 此处需求是 节点.setText(参数)的形式,设置每个节点的内容
        for (let i = 0; i < nodes.length; i++) {
            // 遍历伪数组
            nodes[i].textContent = text;
            // 给每个伪数组里的节点设置内容
        }
    }
    //至此我们给伪数组定义的两个api已经编写完毕,最后返回这个伪数组
    return nodes
}

var node2 = jQuery('ul > li')
node2.addClass('blue')
node2.text()
node2[0].classList.add('blue')
