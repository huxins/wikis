# jQuery

## 文档

- [jQuery API 中文文档](https://jquery.cuishifeng.cn/)

## 依赖

```javascript
function importJs(url){
    var js = document.createElement('script');
    js.setAttribute("src", url);
    document.getElementsByTagName("head")[0].appendChild(js);
}
importJs("https://cdn.staticfile.org/jquery/3.6.0/jquery.min.js");
```

