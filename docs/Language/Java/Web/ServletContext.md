# ServletContext

```xml
<context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>classpath:spring/spring-config.xml</param-value>
</context-param>
```

Servlet 的 ServletConfig 对象拥有该 Servlet 的 ServletContext 的一个引用

```java
ServletContext application = ServletContextEvent.getServletContext();
String value = application.getInitParameter("key");
```

