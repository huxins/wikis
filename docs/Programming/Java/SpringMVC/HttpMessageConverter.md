# HttpMessageConverter

XML

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

注解

```xml
<mvc:annotation-driven>
    <mvc:message-converters>
        <bean class="org.springframework.http.converter.StringHttpMessageConverter">
            <property name="supportedMediaTypes" value="text/html; charset=utf-8"/>
        </bean>
    </mvc:message-converters>
</mvc:annotation-driven>
```

