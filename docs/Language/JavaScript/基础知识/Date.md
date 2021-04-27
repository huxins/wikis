# Date

```javascript
var now = new Date();
var year = now.getFullYear(); // 年
var month = now.getMonth(); // 月
var date = now.getDate(); // 日
var day = now.getDay(); // 周
var hours = now.getHours(); // 时
var minutes = now.getMinutes(); // 分
var seconds = now.getSeconds(); // 秒
var miSeconds = now.getMilliseconds(); // 毫秒
// 设置时间
now.setFullYear(2019);
now.setMonth(4);
now.setDate(1);
now.setHours(0);
now.setMinutes(0);
now.setSeconds(0);
var day = new Date(2018,4,1,0,0,0);
var time = now.getTime(); // 时间戳
// 转换日期格式
var str = "2010-08-01";
str = str.replace(/-/g, '/');
var date = new Date(str);
```


