{
    let view = {
        el: '#song_main',
        template: `
        <ul class="song_list">
            <li>啦啦啦</li>
            <li>啦啦啦</li>
            <li>啦啦啦</li>
            <li>啦啦啦</li>
            <li>啦啦啦</li>
            <li>啦啦啦</li>
            <li>啦啦啦</li>
        </ul>
        `,
        render: function (data) {
            $(this.el).html(this.template)
        }
    }
    let model = {

    }
    let controller = {
        init: function (view, model) {
            this.view = view
            this.model = model
            this.view.render(this.model.data)
        }
    }
    controller.init(view, model)
    window.app.songList = controller
}