# BootstrapValidator

- [BootstrapValidator 指南](https://mrbird.cc/BootstrapValidator%E6%8C%87%E5%8D%97.html)

## 依赖

```html
<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap-3.0.3.min.css"/>
<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrapValidator-0.5.2.min.css"/>
<script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="bootstrap/js/bootstrap-3.0.3.min.js"></script>
<script type="text/javascript" src="bootstrap/js/bootstrapValidator-0.5.2.min.js"></script>
```

## 绑定校验规则

对 form 元素绑定校验规则：

```javascript
$("form").bootstrapValidator({
    // 指定不验证的情况
    // 值可设置为以下三种类型：
    // 1、String  ':disabled, :hidden, :not(:visible)'
    // 2、Array  默认值  [':disabled', ':hidden', ':not(:visible)']
    // 3、带回调函数  
    //  [':disabled', ':hidden', function($field, validator) {
            // $field 当前验证字段dom节点
            // validator 验证实例对象 
            // 可以再次自定义不要验证的规则
            // 必须要return，return true or false; 
            // return !$field.is(':visible');
    //   }]
    // 
    excluded: [':disabled', ':hidden', ':not(:visible)'],
    // 生效规则
    // enabled:字段值发生变化就触发验证
    // disabled/submitted:点击提交时触发验证
    live: 'disabled',
    // 图标 
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove', 
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        field1: { // 字段名
            validators: {
                // ...
            }
        },
        field2: {
            validators: {
                // ...
            }
        }
    }
});
```

### 非空校验

```javascript
userName: { // name属性值
    validators: {
        notEmpty: { // 非空校验
            message: '用户名不能为空!'
        }
    }
}
```

### 文本长度校验

```javascript
userName: {
    validators: {
        stringLength: { // 长度校验
            min: 3,
            max: 10,
            message: '用户名长度%s~%s个字符！'
        }
    }
}
```

### 正则校验

```javascript
userName: {
    validators: {
        regexp: { //正则校验
            regexp: /^[a-zA-Z0-9_]+$/, 
            message:'用户名仅支数字，字母和下划线的组合'
        },
    }
}
```

### 远程校验

远程校验使用 Ajax 异步请求从服务端进行校验，比如校验 `userName` 的值是否已经存在。

```javascript
userName: {
    validators: {
        remote: {
            url: "user/confirmUserName.do",
            message: "用户名已存在",
            type: "get",
            data: function(){ // 额外参数
                return {
                    "name": $("input[name='userName']").val().trim()
                };
            }
        }
    }
}
```

### 邮箱校验

```javascript
email: {
    validators: {
        emailAddress: { // 可以不用自己写正则
            message: '邮箱格式不正确'
        }
    }
}
```

### 对比校验

对比校验就是指当前字段的值和别的字段的值相比较，产生校验结果。常用于密码字段。

```javascript
password: {
    validators: {
        notEmpty: {
            message: '请输入密码'
        },
        different: { // 比较是否不同，否的话校验不通过
            field: 'userName', // 和userName字段比较
            message: '密码不能与用户名相同！'	
        }
    }
},
confirmPassword: { 
    validators: {
        notEmpty: {
            message: '请再次确认密码！'
        },
        identical: { // 比较是否相同，否的话校验不通过
            field: 'password', // 和password字段比较
            message: '两次密码输入不一致'
        }
    }
}
```

### 复选框校验

```javascript
hobbies: {
    validators: {
        choice: {
            min: 1,
            max: 3,
            message: '请选择1~3项兴趣爱好'
        }
    }
}
```

### 数字范围校验

```javascript
age: {
    validators: {
        between: {
            min: 0,
            max: 150,
            message: '请输入正常的年龄,范围为%s到%s',
        }
    }
},
age: {
    validators: {
        lessThan: {
            value: 150,
            inclusive: true, // 是否包含150，true为包含
            message: '年龄必须小于等于%s'
        },
        greaterThan: {
            value: 0,
            inclusive: false, 不包含0
            message: '年龄必须大于%s'
        }
    }
}
```

### 文件校验

```javascript
files: {
    validators: {
        file:  {
            maxSize: 1024*1024, // 文件大小，单位为b，这里为1mb
            extension: 'jpg,png', // 格式
            type: 'image/jpeg,image/png', // 对应的MIME type
            message: '文件不合法，必须小于1MB，并且格式为jpg或png'
        }
    }
}
```

## 事件

### 手动触发校验

```javascript
// 整个表单
$("form").data('bootstrapValidator').validate();
$("form").bootstrapValidator('validate');
// 单个字段
$("form").data('bootstrapValidator').validateField('fieldName');
```

### 获取当前表单校验结果

```javascript
var bootstrapValidators = $("form").data('bootstrapValidator');
if(bootstrapValidators.isValid()) {
    // todo
}
```

### 重置校验

```javascript
$('form').data('bootstrapValidator').resetForm(true); // 重置校验
$('form').bootstrapValidator('resetForm', true);
$('form')[0].reset();// 表单清空
```

