{
    let view = {
        el: '.page main',
        template: `
        <form action="">
        <h1>新建歌曲</h1>
        <div class="row">
            <label>
                歌名
                <input name="name" type="text" value="__name__">
            </label>
        </div>
        <div class="row">
            <label>
                歌手
                <input name="singer" type="text" value="__singer__">
            </label>
        </div>
        <div class="row">
            <label>
                外链
                <input name="url" type="text" value="__url__">
            </label>
        </div>
        <div class="row">
            <button>保存</button>
        </div>
    </form>
        `,
        render: function (data = {}) {
            let placeholders = ['name', 'url', 'singer', 'id']
            let html = this.template
            placeholders.map((string) => {
                html = html.replace(`__${string}__`, data[string] || '')
            })
            $(this.el).html(html)
        },
        reset: function (e) {
            this.render({})
        }
    }
    let model = {
        data: {
            name: '',
            singer: '',
            url: '',
            id: ''
        },
        create: function (data) {
            var NewSong = AV.Object.extend('Song')
            var newSong = new NewSong();
            return newSong.save(data).then((res) => {
                console.log('LeanCloud写入成功!')
                let {
                    id,
                    attributes
                } = res
                Object.assign(this.data, {
                    id,
                    ...attributes
                })
            }, (error) => {
                console.log(error)
            })
        }
    }
    let controller = {
        init: function (view, model) {
            this.view = view
            this.model = model
            this.bindEvents()
            this.view.render(this.model.data)
            window.eventHub.on('upload', (data) => {
                console.log('song form 模块得到了data')
                this.view.render(data)
            })
        },
        bindEvents: function () {
            $(this.view.el).on('submit', 'form', (e) => {
                e.preventDefault()
                let needs = ['name', 'singer', 'url']
                let data = {}
                needs.map((string) => {
                    data[string] = $(this.view.el).find(`input[name="${string}"]`).val()
                })
                this.model.create(data).then(() => {
                    this.view.reset()
                    window.eventHub.emit('create',this.model.data)
                })
            })
        }
    }
    controller.init(view, model)
}