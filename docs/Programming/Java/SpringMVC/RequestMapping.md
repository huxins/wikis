# RequestMapping

@RestController = @Controller + @ResponseBody

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

全局解决

```xml
<mvc:annotation-driven>
    <mvc:message-converters>
        <bean class="org.springframework.http.converter.StringHttpMessageConverter">
            <property name="supportedMediaTypes" value="text/html; charset=utf-8"/>
        </bean>
    </mvc:message-converters>
</mvc:annotation-driven>
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

## Response

### JSON

