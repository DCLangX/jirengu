var app = new Vue({
    el: '#example-1',
    data: {
        parentMessage: 'Parent',
        items: [{
                message: 'Foo'
            },{
                message: 'Bar'
            }]
    },
    methods:{
        doSomething:function(){
            var tmp = this.items
            tmp[0].message='ttt'
            this.items = tmp
        }
    }
})