# Math

```javascript
// 角度
var deg  = Math.PI/180;
// 正弦值
var a = Math.sin(30*deg);
// 余弦值
var b = Math.cos(30*deg);
// 正切值
var c = Math.tan(30*deg);
// 取小值
var d = Math.min(21,11,4,2);
// 取大值
var e = Math.max(22,23,44,21,1);
a = 23.999999999;
// 取整
parseInt(a);
// 四舍五入
Math.round(a);
// 向上取整
Math.ceil(a);
// 向下取整
Math.floor(a);
// 取绝对值
Math.abs(-3);
// 开平方
Math.sqrt(3);
// 幂运算，底数，幂
Math.pow(1.1,365);
// 随机数 (0,1]
Math.random();
function rand(min,max){
    return Math.floor(Math.random()*(max+1-min)+min);
};
```

