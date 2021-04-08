# data sources

## dom

如果没有指定 data，ajax 选项，则 DataTable 会将当前 table 的 html 标签上内容转换成对应的数据（Array 数据形式）。

```javascript
$(document).ready(function(){
    $('#table').DataTable();
});
```

## javascript

### array

```javascript
$(document).ready(function(){
    $('#table').DataTable({
        data: array,
        columns: [
            { title: "Name"},
            { title: "Position" },
            { title: "Office" }
        ]
    });
});
```

### objects

```javascript
$(document).ready(function(){
    $('#table').DataTable({
        data: object,
        columns: [
            { title: "Name", data: "name"},
            { title: "Position", data: "position"},
            { title: "Salary", data: "salary", visible: false}
        ]
    });
});
```

## ajax

### array

```javascript
$(document).ready(function(){
    $('#table').DataTable({
        "ajax": "arrays.txt"
    });
});
```

### objects

```javascript
$(document).ready(function(){
    $('#table').DataTable({
        "ajax": "objects.txt",
        "columns": [
            { "data": "name" }, 
            { "data": "position" }, 
            { "data": "office" }
        ]
    });
});
```

指定数据源属性

- 作为一个字符串，如 "dataSrc": "data"
- 作为一个方法，如 "dataSrc": function (json) { }

```javascript
$(document).ready(function(){
    $('#table').DataTable({
        "ajax": {
            "url":"objects.txt",
            "dataSrc": "data"
        },
        "columns": [
            { "data": "name" },
            { "data": "position" },
            { "data": "office"}
        ]
    });
});
```

