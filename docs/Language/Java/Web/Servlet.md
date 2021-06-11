# Servlet

第一次发起请求的时候被实例化，一般不会被容器销毁，可以服务于多个用户的请求。

从 Servlet3.0 开始，配置Servlet 有两种方式：

- 在 Servlet 类中使用 @WebServlet 注解进行配置。
- 在 web.xml 文件中进行配置。

```java
@WebServlet(urlPatterns="/WxServlet")
```



- init(ServletConfig config)：创建 Servlet 实例时，调用该方法来<span style="color:red;">初始化 Servlet 资源</span>。
- destroy()：销毁 Servlet 实例时，自动调用该方法来回收资源。

init-param

```java
ServletConfig.getInitParameter(java.lang.String name);
```

匹配规则和顺序如下：

1. **精确路径匹配**。例子：比如 servletA 的 url-pattern为 /test，servletB 的 url-pattern为 /\* ，这个时候，如果我访问的url为 http://localhost/test ，这个时候容器就会先进行精确路径匹配，发现 /test 正好被 servletA 精确匹配，那么就去调用 servletA，也不会去理会其他的 servlet 了。
2. **最长路径匹配**。例子：servletA 的 url-pattern 为 /test/\*，而 servletB 的 url-pattern 为 /test/a/\*，此时访问http://localhost/test/a时，容器会选择路径最长的 servlet 来匹配，也就是这里的 servletB。
3. **扩展匹配**。如果 url 最后一段包含扩展，容器将会根据扩展选择合适的 servlet。例子：servletA 的 url-pattern：\*.action
4. 如果前面三条规则都没有找到一个 servlet，容器会根据 url 选择对应的请求资源。如果应用定义了一个 default servlet，则容器会将请求丢给 default servlet。

根据这个规则表，就能很清楚的知道 servlet 的匹配过程，所以定义 servlet 的时候也要考虑 url-pattern 的写法，以免出错。 

对于 filter，不会像 servlet 那样只匹配一个 servlet，因为 filter 的集合是一个链，所以只会有处理的顺序不同，而不会出现只选择一个 filter。Filter 的处理顺序和 filter-mapping 在 web.xml 中定义的顺序相同。



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
        <param-value>
            classpath:spring/spring-mvc.xml
        </param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
    <servlet-name>spring-mvc-control</servlet-name>
    <!-- /  即表示拦截所有请求，但不拦截 jsp -->
    <!-- /* 即表示所有的都拦截，包括 jsp -->
    <url-pattern>/</url-pattern>
</servlet-mapping>
```

配置 Spring MVC，指定处理请求的 Servlet，有两种方式：

- 默认查找 MVC 配置文件的地址是：/WEB-INF/${servletName}-servlet.xml
- 可以通过配置修改 MVC 配置文件的位置，需要在配置 DispatcherServlet 时指定 MVC 配置文件的位置。

其中，<span style="color:red;">classpath</span> 是 web 项目的类路径，可以理解为 classes 下面。因为无论这些配置文件放在哪，编译之后如果没有特殊情况的话都直接在 classes 下面。jar 包的话虽然放在 lib 文件夹里，但实际上那些类可以直接引用，比如：com.test.ABC，仿佛也在 classes 下面一样。

**classpath 和 classpath\* 区别：**同名资源存在时，classpath 只从第一个符合条件的 classpath 中加载资源，而 classpath\* 会从所有的 classpath 中加载符合条件的资源。classpath\*，需要遍历所有的 classpath，效率肯定比不上 classpath，因此在项目设计的初期就尽量规划好资源文件所在的路径，避免使用 classpath\* 来加载。

