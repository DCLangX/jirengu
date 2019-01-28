window.app={
    events:{

    },
    emit:function(){

    },
    on:function(eventname,fn){
        if(this.events[eventname]===undefined){
            this.events[eventname]=[]
        }
        this.events[eventname].push(fn)

    },
    off:function(){

    }
}