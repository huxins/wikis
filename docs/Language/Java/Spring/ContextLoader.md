# ContextLoader

当 Filter 需要用到 Bean 时，使用 Listener 方式加载 Spring。

## ContextLoaderListener

```xml
<listener>
    <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
</listener>
```

默认的配置文件路径是 `/WEB-INF/applicationContext.xml`

```xml
<context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>classpath:spring/spring-config.xml</param-value>
</context-param>
```

## ContextLoaderServlet

```xml
<servlet>
    <servlet-name>context</servlet-narne>
    <servlet-class>org.springframework.web.context.ContextLoaderServlet</servlet-class>
    <load-on-startup>1</load-on-startup>
</servlet>
```

