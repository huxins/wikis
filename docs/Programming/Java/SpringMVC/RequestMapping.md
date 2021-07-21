# RequestMapping

```java
@RequestMapping(value = "/hello", method = RequestMethod.GET)
@GetMapping(value = "/hello")
@PostMapping(value = "/hello")
```

## 编码

局部解决

```java
@RequestMapping(value = "/hello", produces = "text/html; charset=utf-8")
```

## Request

### 普通参数

```java
@RequestMapping("/hello")
public String hello(String username) {
    return username;
}
```

### Javabean

```java
@RequestMapping("/hello")
public String hello(Car car) {
    return car.toString();
}
```

### 数组

```java
@RequestMapping("/hello")
public String hello(int[] id) {
    return String.valueOf(id.length);
}
```

### List\<JavaBean>

使用一个 JavaBean 把集合封装起来，给出对应的 set 和 get 方法。在接收参数的时候，接收的是JavaBean。

### 多个模型

在 User 模型和 Emp 模型上向上抽象出一个 Bean，该 Bean 有 Emp 和 User 对象。

### 字符串转日期

```java
@InitBinder
protected void initBinder(HttpServletRequest request, ServletRequestDataBinder binder) {
    binder.registerCustomEditor(
        Date.class,
        new CustomDateEditor(new SimpleDateFormat("yyyy-MM-dd"), true));

}

@RequestMapping("/hello")
public String hello(Date date) {
    return date.toString();
}
```

### JSON

```java
@RequestMapping("/hello")
public Car hello(@RequestBody Car car) {
    return car;
}
```

## Response

@RestController = @Controller + @ResponseBody

### 日期转字符串

单个 Bean 的某个日期字段显示年月日时分秒，只需要在对应日期的 get 方法上添加。

```java
@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
```

