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


var messageForm = document.querySelector('#message');
messageForm.addEventListener('submit', function (e) {
    e.preventDefault;
    var content = messageForm.querySelector('input[name=content]').value;
    console.log(content);
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        content: content
    }).then(function (object) {
        alert('上传成功!');
    })
})