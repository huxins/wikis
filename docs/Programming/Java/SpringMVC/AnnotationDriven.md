# AnnotationDriven

如果不配置，Spring 将从 DispatcherServlet.properties 中加载默认配置。

```xml
<mvc:annotation-driven>
    <mvc:message-converters>
        <bean class="org.springframework.http.converter.StringHttpMessageConverter">
            <property name="supportedMediaTypes" value="text/html; charset=utf-8"/>
        </bean>
    </mvc:message-converters>
</mvc:annotation-driven>
```

该配置自动加载

```xml
<bean class="org.springframework.web.servlet.mvc.annotation.DefaultAnnotationHandlerMapping"/>
<bean class="org.springframework.web.servlet.mvc.annotation.AnnotationMethodHandlerAdapter"/>
```

[Spring 3.1 reference documentation](https://docs.spring.io/spring-framework/docs/3.1.3.RELEASE/spring-framework-reference/htmlsingle/spring-framework-reference.html#new-in-3.1-handler-method-controller-processing)

```xml
<bean class="org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping"/>
<bean class="org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter"/>
```

HttpMessageConverter

```xml
<bean class="org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter">
    <property name="messageConverters">
        <list>
            <bean class="org.springframework.http.converter.StringHttpMessageConverter">
                <property name="supportedMediaTypes" value="text/html; charset=utf-8"/>
            </bean>
            <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter">
                <property name="supportedMediaTypes" value="text/html; charset=utf-8"/>
            </bean>
        </list>
    </property>
</bean>
```

