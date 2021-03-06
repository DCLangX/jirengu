{
    let view = {
        el: '.upload',
        find: function (selector) {
            return $(this.el).find(selector)[0]
        }
    }
    let model = {

    }
    let controller = {
        init: function (view, model) {
            this.view = view
            this.model = model
            this.initQiniu()
        },
        initQiniu: function () {
            var uploader = Qiniu.uploader({
                runtimes: 'html5', //上传模式,依次退化
                browse_button: this.view.find('#uploadBtn'), //上传选择的点选按钮，**必需**
                uptoken_url: 'http://localhost:8888/uptoken', //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
                // uptoken : '', //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
                // unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK为自动生成上传成功后的key（文件名）。
                // save_key: true,   // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK会忽略对key的处理
                domain: 'http://pji1cqeo5.bkt.clouddn.com/', //bucket 域名，下载资源时用到，**必需**
                get_new_uptoken: false, //设置上传文件的时候是否每次都重新获取新的token
                // container: 'upArea', //上传区域DOM ID，默认是browser_button的父元素，
                max_file_size: '100mb', //最大文件体积限制
                // flash_swf_url: 'js/plupload/Moxie.swf', //引入flash,相对路径
                // max_retries: 3, //上传失败最大重试次数
                dragdrop: true, //开启可拖曳上传
                drop_element: this.view.find('#upArea'), //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
                // chunk_size: '4mb', //分块上传时，每片的体积
                auto_start: true, //选择文件后自动上传，若关闭需要自己绑定事件触发上传
                init: {
                    'FilesAdded': function (up, files) {
                        plupload.each(files, function (file) {
                            // 文件添加进队列后,处理相关的事情
                        });
                    },
                    'BeforeUpload': function (up, file) {
                        // 每个文件上传前,处理相关的事情
                    },
                    'UploadProgress': function (up, file) {
                        // 每个文件上传时,处理相关的事情
                        uploadStatus.textContent = '上传中'
                    },
                    'FileUploaded': function (up, file, info) {
                        // 每个文件上传成功后,处理相关的事情
                        // 其中 info.response 是文件上传成功后，服务端返回的json，形式如
                        // {
                        //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                        //    "key": "gogopher.jpg"
                        //  }
                        // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html
                        console.log(info)
                        var domain = up.getOption('domain');
                        var res = JSON.parse(info.response);
                        var sourceLink = `${domain}${encodeURIComponent(res.key)}`;
                        //  获取上传成功后的文件的Url
                        console.log(sourceLink)
                        window.eventHub.emit('upload',{
                            url:sourceLink,
                            name:res.key
                        })
                    },
                    'Error': function (up, err, errTip) {
                        //上传出错时,处理相关的事情
                        console.log(err)
                        console.log(errTip)
                    },
                    'UploadComplete': function () {
                        uploadStatus.textContent = '上传完毕'
                        setTimeout(() => {
                            uploadStatus.textContent = ''
                        }, 2000)
                        //队列文件处理完毕后,处理相关的事情
                    }
                    // ,
                    // 'Key': function (up, file) {
                    //     // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                    //     // 该配置必须要在 unique_names: false , save_key: false 时才生效

                    //     var key = "";
                    //     // do something with key here
                    //     return key
                    // }
                }
            })
        }
    }
    controller.init(view, model)
}


// 官方的实例
// var uploader = Qiniu.uploader({
//     disable_statistics_report: false,
//     runtimes: 'html5',
//     browse_button: 'uploadBtn',
//     container: 'upArea',
//     drop_element: 'upArea',
//     max_file_size: '1000mb',
//     flash_swf_url: 'bower_components/plupload/js/Moxie.swf',
//     dragdrop: true,
//     chunk_size: '4mb',
//     multi_selection: !(moxie.core.utils.Env.OS.toLowerCase() === "ios"),
//     uptoken_url: 'http://localhost:8888/uptoken',
//     // uptoken_func: function(){
//     //     var ajax = new XMLHttpRequest();
//     //     ajax.open('GET', $('#uptoken_url').val(), false);
//     //     ajax.setRequestHeader("If-Modified-Since", "0");
//     //     ajax.send();
//     //     if (ajax.status === 200) {
//     //         var res = JSON.parse(ajax.responseText);
//     //         console.log('custom uptoken_func:' + res.uptoken);
//     //         return res.uptoken;
//     //     } else {
//     //         console.log('custom uptoken_func err');
//     //         return '';
//     //     }
//     // },
//     domain: 'http://pji1cqeo5.bkt.clouddn.com/',
//     get_new_uptoken: false,
//     //downtoken_url: '/downtoken',
//     // unique_names: true,
//     // save_key: true,
//     // x_vars: {
//     //     'id': '1234',
//     //     'time': function(up, file) {
//     //         var time = (new Date()).getTime();
//     //         // do something with 'time'
//     //         return time;
//     //     },
//     // },
//     auto_start: true,
//     log_level: 5,
//     init: {
//         'BeforeChunkUpload': function (up, file) {
//             console.log("before chunk upload:", file.name);
//         },
//         'FilesAdded': function (up, files) {
//             // $('table').show();
//             // $('#success').hide();
//             // plupload.each(files, function (file) {
//             //     var progress = new FileProgress(file,
//             //         'fsUploadProgress');
//             //     progress.setStatus("绛夊緟...");
//             //     progress.bindUploadCancel(up);
//             // });
//         },
//         'BeforeUpload': function (up, file) {
//             console.log("this is a beforeupload function from init");
//             // var progress = new FileProgress(file, 'fsUploadProgress');
//             // var chunk_size = plupload.parseSize(this.getOption(
//             //     'chunk_size'));
//             // if (up.runtime === 'html5' && chunk_size) {
//             //     progress.setChunkProgess(chunk_size);
//             // }
//         },
//         'UploadProgress': function (up, file) {
//             // var progress = new FileProgress(file, 'fsUploadProgress');
//             // var chunk_size = plupload.parseSize(this.getOption(
//             //     'chunk_size'));
//             // progress.setProgress(file.percent + "%", file.speed,
//             //     chunk_size);
//         },
//         'UploadComplete': function () {
//             // $('#success').show();
//         },
//         'FileUploaded': function (up, file, info) {
//             // var progress = new FileProgress(file, 'fsUploadProgress');
//             // console.log("response:", info.response);
//             // progress.setComplete(up, info.response);
//         },
//         'Error': function (up, err, errTip) {
//             // $('table').show();
//             // var progress = new FileProgress(err.file, 'fsUploadProgress');
//             // progress.setError();
//             // progress.setStatus(errTip);
//         }
//         // ,
//         // 'Key': function(up, file) {
//         //     var key = "";
//         //     // do something with key
//         //     return key
//         // }
//     }
// });
// //uploader.init();