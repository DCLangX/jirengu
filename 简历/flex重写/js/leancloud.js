! function () {
    var view = document.querySelector('div.message');
    var model = {
        fetch: function () {
            //从leancloud获取对象
            var query = new AV.Query('Message');
            return query.find();
            //返回promis对象
        },
        save: function (name, text) {
            //保存名字和留言内容到leancloud
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({
                content: text,
                name: name
            });
            //返回promis对象
        }
    }
    var controller = {
        view: null,
        messagelist: null,
        //展示留言的区域的
        messageForm: null,
        //提交留言的区域的
        init: function (view) {
            this.view = view;
            this.messagelist = view.querySelector('#messagelist');
            this.messageForm = view.querySelector('#message');
            this.initAV();
            //初始化leancloud的对象
            this.loadMessage();
            //加载留言
            this.bindEvents();
            //给留言按钮绑定事件
        },
        initAV: function () {
            var APP_ID = 'Kg987gBVv75nV75LHb7zuUzA-gzGzoHsz';
            var APP_KEY = 'BLMntltqppOrz32TfAHUlQjo';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        loadMessage: function () {
            model.fetch().then(
                (data) => {
                    //data是从leancloud拿到的数据
                    let arr = data.map((items) => items.attributes);
                    //从data中获取每个对象的attributes的值，并保存到arr数组里
                    arr.forEach((element) => {
                        this.addMessageList(element.name, element.content);
                        //从arr数组里提取每个名字和内容，然后调用页面的展示函数，展示到页面
                    });
                },
                (error) => {
                    alert('获取留言失败');
                    console.log(error)
                    // 异常处理
                })
        },
        addMessageList: function (name, text) {
            var listItem = document.createElement('li');
            listItem.innerText = `${name} 发表留言： ${text}`;
            this.messagelist.appendChild(listItem);
            //生成一个li节点，填充留言内容，然后展示到页面
        },
        bindEvents: function () {
            this.messageForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.upMessage();
                //给提交按钮绑定事件，取消默认的跳转行为，执行上传函数
            })
        },
        upMessage: function () {
            var messageForm = this.messageForm;
            var content = messageForm.querySelector('input[name=content]').value;
            //获取留言内容
            var name = messageForm.querySelector('input[name=name]').value;
            //获取留言者名字
            model.save(name, content).then(
                //调用留言上传功能
                (object) => {
                    alert('留言成功!');
                    this.addMessageList(name, content);
                    //留言成功后把留言展示到页面
                    messageForm.querySelector('input[name=content]').value = '';
                    messageForm.querySelector('input[name=name]').value = '';
                    //清空留言输入框的内容
                },
                (error) => {
                    alert('留言失败');
                });
        }
    };
    controller.init(view);
}()