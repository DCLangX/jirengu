var app = new Vue({
    el: '#example',
    data: {
        bus: new Vue()
    },
    methods: {},
    components: {
        'fff': {
            data: function () {
                return {
                    count: 1000
                }
            },
            props: ['money'],
            template: `<div>普通组件1<button type="button" @click="add">点击+100</button>
            <button type="button" @click="close">点击-100</button></div>`,
            methods: {
                add: function () {
                    this.count += 100
                    console.log(this.count)
                    this.$root.bus.$emit('lala', this.count)
                },
                close: function () {
                    this.count -= 100
                    console.log(this.count)
                    this.$root.bus.$emit('lala', this.count)
                }
            }
        },
        'ggg': {
            data: function () {
                return {
                    value: 10
                }
            },
            template: `<div>组件2接受组建一数据{{value}}</div>`,
            methods: {},
            created: function () {
                this.$root.bus.$on('lala', (value) => {
                    this.value = value
                })
            }
        }
    }
})