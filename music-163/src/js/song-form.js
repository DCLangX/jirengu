{
    let view = {
        el: '.page main',
        template: `
        <form action="">
        <h1>新建歌曲</h1>
        <div class="row">
            <label>
                歌名
                <input type="text">
            </label>
        </div>
        <div class="row">
            <label>
                歌手
                <input type="text">
            </label>
        </div>
        <div class="row">
            <label>
                外链
                <input type="text">
            </label>
        </div>
        <div class="row">
            <button>保存</button>
        </div>
    </form>
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
        },
        reset:function(e){
            console.log('reset')
            console.log(e)
        }
    }
    controller.init(view, model)
    window.app.songForm = controller
}