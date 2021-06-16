# DispatcherServlet

- [DispatcherServlet 的启动和初始化](https://www.cnblogs.com/weknow619/p/7376125.html)
- **ContextLoaderListener** 和 **DispatcherServlet** 初始化上下文关系和区别

ContextLoaderListener 中创建 ApplicationContext 主要用于整个 Web 应用程序需要共享的一些组件，比如 DAO，数据库的 ConnectionFactory 等。而由 DispatcherServlet 创建的 ApplicationContext 主要用于和该 Servlet 相关的一些组件，比如 Controller、ViewResovler 等。

对于作用范围而言，在 DispatcherServlet 中可以引用由 ContextLoaderListener 所创建的 ApplicationContext，而反过来不行。

```xml
<servlet>
    <servlet-name>spring-mvc-control</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
        <param-name>publishContext</param-name>
        <param-value>false</param-value>
    </init-param>
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
<mvc:default-servlet-handler />
```

自动注册 `DefaultAnnotationHandlerMapping` 与 `AnnotationMethodHandlerAdapter`

```xml
<mvc:annotation-driven />
```

## AbstractController

## MultiActionController

The [MultiActionController](https://docs.spring.io/spring-framework/docs/4.3.x/javadoc-api/org/springframework/web/servlet/mvc/multiaction/MultiActionController.html) was marked deprecated in 4.3

- SimpleUrlHandlerMapping

```xml
<bean class="org.springframework.web.servlet.handler.SimpleUrlHandlerMapping">
    <property name="mappings">
        <props>
            <prop key="/paramMulti.do">paramAction</prop>
        </props>
    </property>
</bean>
```

- InternalPathMethodNameResolver

根据请求的路径名称来调用相应的方法。

```xml
<bean id="/hello/**"
      class="com.hx.framework.controller.BaseController">
    <property name="methodNameResolver">
        <bean class="org.springframework.web.servlet.mvc.multiaction.InternalPathMethodNameResolver">
            <property name="prefix" value="test" />
            <property name="suffix" value="World" />
        </bean>
    </property>
</bean>
```

- ParameterMethodNameResolver

根据请求的参数来调用相应的方法。

```xml
<bean id="/hello"
      class="com.hx.framework.controller.BaseController">
    <property name="methodNameResolver" ref="paramMultiResolver" />
</bean>
<bean id="paramMultiResolver"
      class="org.springframework.web.servlet.mvc.multiaction.ParameterMethodNameResolver">
    <property name="paramName" value="action" />
    <property name="defaultMethodName" value="execute"/>
    <property name="methodParamNames" value="list,create,update"/>
    <property name="logicalMappings">
        <props>
            <prop key="create">createLogical</prop>
        </props>
    </property>
</bean>
```

- PropertiesMethodNameResolver

根据一个 URL 映射列表来调用相应的方法。

```xml
<bean id="/hello/**" class="com.hx.framework.controller.BaseController">
    <property name="methodNameResolver" ref="propertiesMethodNameResolver"/>
</bean>
<bean id="propertiesMethodNameResolver"
      class="org.springframework.web.servlet.mvc.multiaction.PropertiesMethodNameResolver">
    <property name="mappings">
        <props>
            <prop key="/hello/create">create</prop>
            <prop key="/**">execute</prop>
        </props>
    </property>
</bean>
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

