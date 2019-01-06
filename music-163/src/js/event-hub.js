window.app={
    events:{
        '花里胡哨':[],
        '乌漆嘛黑':[]
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