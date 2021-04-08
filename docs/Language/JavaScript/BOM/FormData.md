# FormData

## 构造函数

```javascript
var formData = new FormData();
var formData = new FormData(form);
```

## 方法

- `FormData.append()`

  向 `FormData` 中添加新的属性值，`FormData` 对应的属性值存在也不会覆盖原值，而是新增一个值，如果属性不存在则新增一项属性值。

