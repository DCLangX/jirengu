window.jQuery.ajax = function ({
    url,
    method,
    body
}) {
    return new Promise(function (resolve, reject) {
        // 返回一个使用promise构造出来的函数
        let request = new XMLHttpRequest();
        request.open(method, url);
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    resolve.call(undefined, request.responseText)
                } else {
                    reject.call(undefined, request)
                }
            }
        };
        request.send(body);
    })
}
var promise = window.jQuery.ajax({
    url: '/xxx',
    method: 'get',
    body: 'sss'
})
promise.then(
    (text) => {
        console.log(text)
    },
    (request) => {
        console.log(request)
    },
)