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
            this.active()
            window.eventHub.on('upload',(data)=>{
                console.log('new song 模块得到了data')
                this.active()
            })
            window.eventHub.on('select',(data)=>{
                this.removeActive()
            })
        },
        active:function(){
            $(this.view.el).addClass('active')
        },
        removeActive:function(){
            $(this.view.el).removeClass('active')
        }
    }
    controller.init(view,model)
}