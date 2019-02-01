window.eventHub={
    events:{
    },
    emit:function(eventName,data){
        // 发布
        for(let key in this.events){
            if(key===eventName){
                let fnList = this.events[key]
                fnList.map((fn)=>{
                    fn.call(undefined,data)
                })
            }
        }
    },
    on:function(eventname,fn){
        // 订阅
        if(this.events[eventname]===undefined){
            this.events[eventname]=[]
        }
        this.events[eventname].push(fn)

    },
    off:function(){

    }
}