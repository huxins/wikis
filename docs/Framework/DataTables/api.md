# api

点击

```javascript
$('#processRouteDataTable').on('click', 'tbody tr', function() {
    var data = productorTable.row(this).data();
    console.log(data.createtime);
});
```

隐藏列

```javascript
var column = table.column(0);
column.visible(!column.visible());
```

显示行序号

```javascript
$('#table').DataTable({
    "ajax": {url:"arrays.txt",dataSrc: "data"},
    "columns":
    [
        {
            title: "NO.",
            data: function(row, type, set, meta) {
                var c = meta.settings._iDisplayStart + meta.row + 1;
                return c;
            }
        }
    ]
});
```

显示行的附加信息

```javascript
$(document).ready(function(){
    var table = $('#table').DataTable({
        "ajax": {url:"arrays.txt",dataSrc: "data"},
        "columns":[{
            "className": 'details-control',
            "orderable": false,
            "data": null,
            "defaultContent": ''
        },{
            "data": "name"
        }, {
            "data": "position"
        }]
    });
});

$('#table tbody').on('click', 'td.details-control', function() {
    var tr = $(this).closest('tr');
    var row = table.row(tr);
    if(row.child.isShown()) {
        row.child.hide();
        tr.removeClass('shown');
    } else {
        row.child(JSON.stringify(row.data())).show();
        tr.addClass('shown');
    }
});
```

回调函数

```javascript
$('#table').DataTable({
    "initComplete": function(){
        var api = this.api();
        api.$("td").click(function(){
            api.search(this.innerHTML).draw();
        })
    }
});
```


