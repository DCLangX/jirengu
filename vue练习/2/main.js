let app = new Vue({
    el: "#app",
    data: {
        firstName:'aa',
        lastName:'ww',
        fullName:'',
        isActive:true
    },
    computed: {
        getFullName: function () {
            let{firstName,lastName} = this
            this.fullName = firstName+lastName
            return this.fullName
        }
    },
    watch: {
        firstName: function (val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
            this.fullName = this.firstName + ' ' + val
        }
    }
})