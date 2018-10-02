
var btn = document.getElementById('button');
var num = document.getElementById('num');
btn.addEventListener('click',()=>{
    // var temp = num.innerText - 1;
    // num.innerText = temp;
    var script = document.createElement('script');
    var callbackname = 'gly' + parseInt(Math.random() * 100000,10);
    window[callbackname] = (result)=>{
        if(result === 'success'){
            var temp = num.innerText - 1;
            num.innerText = temp;
        }else{
            alert('数据操作失败')
        };
    };
    script.src = 'http://jack.com:8002/pay?callback=' + callbackname;
    document.body.appendChild(script);
    script.onload = (e)=>{
        e.currentTarget.remove();
        delete window[callbackname];
    };
    script.onerror = (e)=>{
        e.currentTarget.remove();
        delete window[callbackname];
    };
});