# modal

通过 JavaScript 调用

```javascript
$("#myModal").modal('hide');  // 关闭

$('#myModal').modal({
    backdrop: 'static', keyboard: true  // 开启
});
```

通过 data 属性

```html
<!-- 关闭 -->
<button type="button" class="close" data-dismiss="modal" aria-label="Close"> x </button>
<!-- 开启 -->
<button type="button" data-toggle="modal" data-target="#myModal">Launch modal</button>
```

