# ajax

```javascript
var xhr;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200)
    {
        alert(xhr.responseText);
        document.write(xhr.responseText);
    }
}
xhr.open('GET','https://api.ipify.org/',true);
xhr.send();
```


