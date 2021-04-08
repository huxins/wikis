# HttpServlet

## response

@RestController 注解相当于 @Controller + @ResponseBody 合在一起的作用。

1. 如果只是使用 @RestController 注解 Controller 类，则方法无法返回 jsp 页面，配置的视图解析器 InternalResourceViewResolver 不起作用，返回的内容就是 Return 里的内容。

2. 如果需要返回到指定页面，则需要用 @Controller 配合视图解析器 InternalResourceViewResolver 才行。

3. 如果需要返回 JSON，XML 或自定义 mediaType 内容到页面，则需要在对应的方法上加上 @ResponseBody 注解。

## get

```java
@GetMapping(value = "/hello")
public Integer say(@RequestParam(value = "id", required = false, defaultValue = "0") Integer id){
    return id;
}
@RequestMapping(value = "/hello/{id}",method = RequestMethod.GET)
public Integer say(@PathVariable("id") Integer id){
	return id;
}
```

HttpServletRequest

```java
@GetMapping("/get")
public User getUserById(HttpServletRequest request) {
    Integer id = Integer.parseInt(request.getParameter("id"));
    if (id.intValue() == 0) {
        return null;
    }
    return list.get(id);
}
```

## post

```java
// content-type:application/json
@PostMapping("/save")
public User saveUser(@RequestBody User user) {
    return user;
}
```

HttpServletRequest

```java
// content-type:x-www-form-urlencoded
@PostMapping("/save")
public User save(HttpServletRequest request) {
    Integer id = Integer.parseInt(request.getParameter("id"));
    String name = request.getParameter("name");
    User user = new User(id, name);
    return user;
}
// content-type:application/json
@PostMapping("/save")
public String save(HttpServletRequest request) {
    String myString = org.apache.commons.io.IOUtils.toString(request.getInputStream(), "UTF-8");
    return myString;
}
```

HttpServletRequestWrapper

[HttpServletRequestWrapper的使用](https://www.cnblogs.com/softidea/p/5903873.html)

```java
@PostMapping("/save")
public User save(HttpServletRequest request) throws IOException, JSONException {
    JsonNode jsonNode = handlerData(request);
    Integer id = jsonNode.get("id").asInt();
    String name = jsonNode.get("name").asText();
    return user;
}
public static JsonNode handlerData(HttpServletRequest request) throws IOException {
    StringBuffer sb = new StringBuffer();
    InputStream is = request.getInputStream();
    BufferedReader br = new BufferedReader(new InputStreamReader(is, "utf-8"));
    String s = "";
    while ((s = br.readLine()) != null) {
        sb.append(s);
    }
    br.close();
    if (sb.toString().length() <= 0) {
        return null;
    } else {
        return objectMapper.readTree(sb.toString());
    }
}
```

GET、POST请求方式的限定

```xml
<bean name="/helloPost" class="com.wang.controller.HelloController">
    <property name="supportedMethods" value="POST"/>
</bean>
```

