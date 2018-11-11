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
var messagelist = document.querySelector('#messagelist');
var addMessageList = function (name, text) {
    var listItem = document.createElement('li');
    listItem.innerText = `${name} 发表留言： ${text}`;
    messagelist.appendChild(listItem);
}
var query = new AV.Query('Message');
query.find().then(function (messages) {
    var arr = messages.map((items) => items.attributes);
    arr.forEach((element) => {
        addMessageList(element.name, element.content);
    });
}, function (error) {
    alert('获取留言失败');
    console.log(error)
    // 异常处理
});

var messageForm = document.querySelector('#message');
messageForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var content = messageForm.querySelector('input[name=content]').value;
    var name = messageForm.querySelector('input[name=name]').value;
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        content: content,
        name: name
    }).then(function (object) {
        alert('留言成功!');
    });
    addMessageList(name, content);
    messageForm.querySelector('input[name=content]').value = '';
    messageForm.querySelector('input[name=name]').value = '';
})