window.jQuery.ajax = function({url,method,body,successFn,failFn}){
    let request = new XMLHttpRequest();
    request.open(method,url);
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if (request.status >= 200 && request.status < 300) {
                successFn.call(undefined,request.responseText)
            } else {
                failFn.call(undefined, request)
            }
        }
    };
    request.send(body);
}
var obj = {
    url: '/xxx',
    method:'get',
    body: 'sss',
    successFn:()=>{},
    failFn:()=>{}
}
window.jQuery.ajax(obj)