{
    let view={
        el:'.new_song',
        template:'+ 新建歌曲',
        render:function(datd){
            $(this.el).html(this.template)
        }
    }
    let model={

    }
    let controller={
        init:function(view,model){
            this.view = view
            this.model = model
            this.view.render(this.model.data)
        },
        active:function(){
            $(this.view.el).addClass('active')
        }
    }
    controller.init(view,model)
    window.app.newSong = controller
}