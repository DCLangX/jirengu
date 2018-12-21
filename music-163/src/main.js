var APP_ID = 'lNlx60YoWkxesz7SK9WXchh5-gzGzoHsz';
var APP_KEY = '9pYNGt6Tu63trIb7HQ8uibY7';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
var TestObject = AV.Object.extend('Playlist');
var testObject = new TestObject();
// testObject.save({
//     name: 'test',
//     cover:'555',
//     createrId:'test',
//     description:'test'
// }).then(function (object) {
//     alert('LeanCloud Rocks!');
// })




