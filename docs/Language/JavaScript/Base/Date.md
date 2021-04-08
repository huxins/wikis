# Date

```javascript
var now = new Date();
// 年月日
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();
var day = now.getDay();
// 时分秒
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
var miSeconds = now.getMilliseconds();
// 设置时间
now.setFullYear(2019);
now.setMonth(4);
now.setDate(1);
now.setHours(0);
now.setMinutes(0);
now.setSeconds(0);
var day = new Date(2018,4,1,0,0,0);
// 时间戳
var time = now.getTime();
// 转换日期格式
var str = "2010-08-01";
str = str.replace(/-/g, '/');
var date = new Date(str);
// 加一天
date.setDate(date.getDate() + 1);
```

时间范围

```javascript
function is_cross(thisStTime, thisEtTime, stTime, etTime) {
    var status = stTime - thisStTime;
    if (status < 0) {
        var status2 = etTime - thisStTime;
        if (status2 > 0) {
            return true;
        } else {
            return false;
        }
    } else if(status > 0) {
        var status2 = stTime - thisEtTime;
        if (status2 < 0) {
            return true;
        } else {
            return false;
        }
    }
}
```

