# DateFormat

- [JavaDoc](https://docs.oracle.com/javase/8/docs/api/java/text/DateFormat.html)

```java
DateFormat dateFormat = DateFormat.getDateTimeInstance();
// 序列号
String dateTime = dateFormat.format(new Date());
// 反序列化
Date date = dateFormat.parse(dateTime);
```

## SimpleDateFormat

- [JavaDoc](https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html)

```java
SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
// 序列号
String dateTime = simpleDateFormat.format(new Date());
// 反序列号
Date date = simpleDateFormat.parse(dateTime);
```

## 参考链接

- [SimpleDateFormat 安全的时间格式化](https://www.cnblogs.com/peida/archive/2013/05/31/3070790.html)

