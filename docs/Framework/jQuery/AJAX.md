# AJAX

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

