# DateTimePicker

- [bootstrap-datetimepicker](https://www.malot.fr/bootstrap-datetimepicker/)

```javascript
$("#timeIds").datetimepicker({
    language: 'zh-CN',
    weekStart: 7,
    todayBtn: 1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 0,
    forceParse: 0,
    showMeridian : 1,
    format: 'yyyy-mm-dd'
});

$.fn.datetimepicker.dates['zh-CN'] = {
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
    daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    daysMin:  ["日", "一", "二", "三", "四", "五", "六", "日"],
    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    today: "今天",
    suffix: [],
    meridiem: ["上午", "下午"]
};
```

ISO-8601

- yyyy-mm-dd
- yyyy-mm-dd hh:ii
- yyyy-mm-ddThh:ii
- yyyy-mm-dd hh:ii:ss
- yyyy-mm-ddThh:ii:ssZ

