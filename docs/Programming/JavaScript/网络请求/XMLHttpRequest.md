# XMLHttpRequest

```javascript
let url = new URL('https://api.ipify.org/');
url.searchParams.set('format', 'json');
let xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        alert(xhr.response.ip);
    }
};
xhr.open('GET',url,true);
xhr.send();
```


