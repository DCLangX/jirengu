var app = new Vue({
    el: '#example',
    data: {
        money: 2000
    },
    methods: {
        changemoney: function (newmoney) {
            this.money = newmoney
        }
    },
    components: {
        'fff': {
            data: function () {
                return {
                    count: 10
                }
            },
            props: ['money'],
            template: `<div>普通$emit触发数据更新<button type="button" @click="add">点击+100</button>
            <button type="button" @click="close">点击-100</button></div>`,
            methods: {
                add: function () {
                    this.$emit('change', this.money + 100)
                },
                close: function () {
                    this.$emit('change', this.money - 100)
                }
            }
        },
        'ggg': {
            data: function () {
                return {
                    count: 10
                }
            },
            props: ['value'],
            template: `<div>v-model触发数据更新<button type="button" @click="add">点击+100</button>
            <button type="button" @click="close">点击-100</button></div>`,
            methods: {
                add: function () {
                    this.$emit('input', this.value + 100)
                    console.log(this.value)
                },
                close: function () {
                    this.$emit('input', this.value - 100)
                    console.log(this.value)
                }
            }
        },
        'kkk': {
            data: function () {
                return {
                    count: 10
                }
            },
            props: ['money'],
            template: `<div>.sync 修饰符更新数据<button type="button" @click="add">点击+100</button>
            <button type="button" @click="close">点击-100</button></div>`,
            methods: {
                add: function () {
                    this.$emit('update:money', this.money + 100)
                },
                close: function () {
                    this.$emit('update:money', this.money - 100)
                }
            }
        }
    }
})