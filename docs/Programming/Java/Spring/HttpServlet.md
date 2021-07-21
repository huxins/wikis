# HttpServlet

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

