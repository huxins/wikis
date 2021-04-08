# bootstrap-fileinput

- [bootstrap-fileinput](https://github.com/kartik-v/bootstrap-fileinput)

```javascript
$("#uploadFileInput").fileinput({
    language: 'zh', //设置语言
    uploadUrl: uploadUrl, //上传的地址
    allowedFileExtensions : ['xlsx','xls'], //接收的文件后缀
    showUpload: false, //是否显示上传按钮
    showCaption: true, //是否显示标题
    showPreview: false, //是否显示文件预览
    showRemove: true, //是否显示删除按钮
    maxFileCount: 1,
    minFileCount: 1,
    enctype: 'multipart/form-data',
    browseClass: "btn btn-primary", //按钮样式
    previewFileIcon: "<i class='glyphicon glyphicon-king'></i>"
});
$('#uploadFileInput').fileinput('refresh',{
    uploadExtraData: {importType: 'test'}
});

$('#uploadFileInput').fileinput('upload');
```

