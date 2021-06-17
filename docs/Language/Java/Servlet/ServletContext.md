# ServletContext

## 配置信息

```xml
<context-param>
    <param-name>name</param-name>
    <param-value>value</param-value>
</context-param>
```

Servlet 的 ServletConfig 对象拥有该 Servlet 的 ServletContext 的一个引用

```java
this.getServletContext().getInitParameter("name");
```

## 资源文件

```java
// 文件流
InputStream resourceAsStream = 
    this.getServletContext().getResourceAsStream("/WEB-INF/classes/jdbc.properties");
// 文件路径
String path = this.getServletContext().getRealPath("/WEB-INF/classes/jdbc.properties");
```

