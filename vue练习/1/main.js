new Vue({
    el: "#app",
    data: {
        todos: 'ttt',
        html: '<a style="color:red;" href="">lalal</a>',
        me: '点我',
        url:'http://www.baidu.com'
    },
    filters: {
        sss: function (e) {
            return e + '经过了过滤器处理'
        }
    },
    methods: {
        doSome: function (e) {
            console.log(e)
            this.me = '再' + this.me
        }
    }
})