# DispatcherServlet

```xml
<servlet>
    <servlet-name>spring-mvc</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>classpath:spring/spring-mvc.xml</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
    <servlet-name>spring-mvc</servlet-name>
    <url-pattern>/</url-pattern>
</servlet-mapping>
```

如果没有作映射，就将请求交给 Web 应用服务器默认的 Servlet 处理，从而找到对应的静态资源

```xml
<mvc:default-servlet-handler/>
```

自动注册 `DefaultAnnotationHandlerMapping` 与 `AnnotationMethodHandlerAdapter`

```xml
<mvc:annotation-driven/>
```

## Forward

```java
getServletContext().getNamedDispatcher("default").forward(request, response);
```

Bean

```xml
<bean name="/helloServlet" class="org.springframework.web.servlet.mvc.ServletForwardingController">
    <property name="servletName" value="helloServlet"></property>
</bean>
```

