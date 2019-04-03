// 定义一个名为 ttt 的新组件
Vue.component('ttt', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

var app = new Vue({
    el: '#example',
    data: {
        width: '',
        parentMessage: 'Parent',
        items: [{
            message: 'Foo'
        }, {
            message: 'Bar'
        }]
    },
    methods: {
        doSomething: function () {
            var tmp = this.items
            tmp[0].message = 'ttt'
            this.items = tmp
        }
    },
    components: {
        'bbb': {
            data: function () {
                return {
                    count: 10
                }
            },
            template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
        },
        'fff': {
            data: function () {
                return {
                    count: 10
                }
            },
            props: ['tTitle'],
            template: '<h3>{{ tTitle }}</h3>'
        },
        'kkk': {
            data: function () {
                return {}
            },
            props: {
                width: Number
            },
            template: '<div :style="style">{{ width }}</div>',
            computed: {
                style: function () {
                    return {
                        'width': this.width + 'px',
                        'background-color': 'red',
                        'height': '30px'
                    }
                }
            }
        }
    }
})