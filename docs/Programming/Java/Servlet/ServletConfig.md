# ServletConfig

```xml
<servlet>
    <servlet-name>servlet</servlet-name>
    <servlet-class>cn.inxiny.servlet.SerlvetImpl</servlet-class>
    <init-param>
        <param-name>name</param-name>
        <param-value>value</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
    <servlet-name>servlet</servlet-name>
    <url-pattern>/</url-pattern>
</servlet-mapping>
```

获取 Servlet 初始化配置参数

```java
this.getServletConfig().getInitParameter("name");
```

