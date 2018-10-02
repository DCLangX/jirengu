
var btn = document.getElementById('button');
var num = document.getElementById('num');
btn.addEventListener('click',()=>{
    // var temp = num.innerText - 1;
    // num.innerText = temp;
    var script = document.createElement('script')
    script.src = '/pay'
    document.body.appendChild(script)
    script.onload = (e)=>{
        e.currentTarget.remove()
    }
    script.onerror = ()=>{
        alert('fail')
    }
})