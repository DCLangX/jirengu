var APP_ID = 'Kg987gBVv75nV75LHb7zuUzA-gzGzoHsz';
var APP_KEY = 'BLMntltqppOrz32TfAHUlQjo';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })
var query = new AV.Query('Message');
query.find().then(function (messages) {
    var arr = messages.map((items)=>items.attributes);
    var messagelist = document.querySelector('#messagelist');
    arr.forEach((element) => {
        console.log(messagelist)
        let listItem = document.createElement('li');
        listItem.innerText = element.content;
        messagelist.appendChild(listItem);
    });
}, function (error) {
    alert('获取留言失败');
    console.log(error)
  // 异常处理
});

var messageForm = document.querySelector('#message');
messageForm.addEventListener('submit', function (e) {
    var content = messageForm.querySelector('input[name=content]').value;
    console.log(content);
    var Message = AV.Object.extend('Message');
    var message = new Message();
    console.log('chenggong')
    message.save({
        content: content
    }).then(function (object) {
        alert('上传成功!');
    })
    e.preventDefault();
})