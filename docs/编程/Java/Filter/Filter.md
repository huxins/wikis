# Filter

## 注册

XML

```xml
<filter>
    <filter-name>CodeFilter</filter-name>
    <filter-class>cn.inxiny.servlet.CodeFilter</filter-class>
    <init-param>
        <param-name>encoding</param-name>
        <param-value>UTF-8</param-value>
    </init-param>
</filter>
<filter-mapping>
    <filter-name>CodeFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```

注解

```java
@WebFilter(filterName = "CodeFilter", urlPatterns = "/*")
```

## dispatcher

子元素可以设置的值及其意义：

- REQUEST：**当用户直接访问页面时，Web容器将会调用过滤器**。如果目标资源是通过 RequestDispatcher 的 include() 或 forward() 方法访问时，那么该过滤器就不会被调用。
- INCLUDE：如果目标资源**是通过 RequestDispatcher 的 include() 方法访问时，那么该过滤器将被调用**。除此之外，该过滤器不会被调用。
- FORWARD：如果目标资源是通过 **RequestDispatcher 的 forward() 方法访问时，那么该过滤器将被调用**，除此之外，该过滤器不会被调用。
- ERROR：如果目标资源是**通过声明式异常处理机制调用时，那么该过滤器将被调用**。除此之外，过滤器不会被调用。

