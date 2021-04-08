# ajax

```javascript
function importJs(url){
    var js = document.createElement('script');
    js.setAttribute("type","text/javascript");
    js.setAttribute("src", url);
    document.getElementsByTagName("head")[0].appendChild(js);
}
importJs("https://cdn.staticfile.org/jquery/3.6.0/jquery.min.js");
```

## $.ajax

```javascript
$.ajax({
    type: "get",
    url: "https://api.ipify.org/",
    contentType: "application/x-www-form-urlencoded",
    async: true,
    data: {
        format: "json"
    },
    dataType: "json",
    success: function(data) {
        console.log(data);
    },
    error: function(error) {
        console.log(error);
    }
});
```

## 表单序列化

```javascript
$("#myForm").serializeArray();
```

