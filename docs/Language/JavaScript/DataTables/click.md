# click

获取 checkBox id

```javascript
function (checkBoxName) {
    var strId = "";
    $("input[name='" + checkBoxName + "']:checked").each(function() {
        strId += $(this).val();
        strId += ",";
    });
    return strId.slice(-1) == ',' ? strId.slice(0, -1) : strId;
}

function (checkBoxName) {
    var strId = new Array();
    $("input[name='" + checkBoxName + "']:checked").each(function() {
        strId.push($(this).val());
    });
    return strId.join(",");
}
```

selected

```javascript
$('#tableId tbody tr').addClass('row_selected');
$('#tableId tbody tr').removeClass('row_selected');
```

```css
#refundDetailTable thead .sorting::after,
#refundDetailTable thead .sorting_asc::after,
#refundDetailTable thead .sorting_desc::after{
    content: "";
    float: right;
    font-family: fontawesome;
    color: rgba(50, 50, 50, 0.5);
}
```

sorting

```javascript
$("#tableId thead tr th:first").removeClass("sorting_asc");
```

获取第一条选中的数据

```javascript
var obj = $("#table").DataTable().rows('.row_selected').data()[0];
```

