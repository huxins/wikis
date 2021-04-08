# web.xml

## 加载过程

1. 启动 web 项目的时候，容器首先会去它的配置文件 web.xml 读取两个节点:  \<listener>\</listener> 和 \<context-param>\</context-param>。

2. 紧接着，容器创建一个 <span style="color:red;">ServletContext（Application）</span>，这个 Web 项目所有部分都将共享这个上下文。

3. 容器以 \<context-param>\</context-param> 的 name 作为键，value 作为值，将其转化为键值对，存入 ServletContext。

4. 容器创建 \<listener>\</listener> 中的类实例，根据配置的 class 类路径 \<listener-class> 来创建监听，在监听中会有 contextInitialized(ServletContextEvent args) 初始化方法，启动 web 应用时，系统调用 Listener 的该方法。

   获取 context-param

   ```java
   ServletContext application = ServletContextEvent.getServletContext();
   String value = application.getInitParameter("key");
   ```

5. 举例：你可能想在项目启动之前就打开数据库，那么这里就可以在 \<context-param> 中设置数据库的连接方式（驱动、url、user、password），在监听类中初始化数据库的连接。这个监听是自己写的一个类，除了初始化方法，它还有销毁方法，用于关闭应用前释放资源。比如说数据库连接的关闭，此时，调用 contextDestroyed(ServletContextEvent args)，关闭 web 应用时，系统调用Listener 的该方法。

6. 接着，容器会读取 \<filter>\</filter>，根据指定的类路径来实例化过滤器。

7. <span style="color:red;">以上都是在 web 项目还没有完全启动起来的时候就已经完成了的工作。</span>如果系统中有 Servlet，则 Servlet 是在第一次发起请求的时候被实例化的，而且一般不会被容器销毁，它可以服务于多个用户的请求。所以，Servlet 的初始化都要比上面提到的那几个要迟。

8. 总的来说，web.xml 的加载顺序是：<span style="color:red;">\<context-param></span> **->** <span style="color:red;">\<listener></span> **->** <span style="color:red;">\<filter></span> **->** <span style="color:red;">\<servlet></span>。其中，如果 web.xml 中出现了相同的元素，则按照在配置文件中出现的先后顺序来加载。

9. 对于某类元素而言，与它们出现的顺序是有关的。以 \<filter>为例，web.xml 中当然可以定义多个 \<filter>，与 \<filter> 相关的一个元素是 \<filter-mapping>，对于拥有相同 \<filter-name> 的 \<filter> 和 \<filter-mapping> 元素而言，\<filter-mapping> 必须出现在 \<filter> 之后，否则当解析到 \<filter-mapping> 时，它所对应的 \<filter-name> 还未定义。web 容器启动初始化每个 \<filter> 时，按照 \<filter> 出现的顺序来初始化的，当请求资源匹配多个 \<filter-mapping> 时，\<filter> 拦截资源是按照 \<filter-mapping> 元素出现的顺序来依次调用 doFilter() 方法的。\<servlet> 同 \<filter> 类似，此处不再赘述。

## 标签详解

### display-name

定义了 web 应用的名称，可以在 http://localhost:8080/manager/html 中显示。

```xml
<display-name>test-hwp-web-application</display-name>
```

### context-param

- \<context-param> 元素含有一对参数名和参数值，用作应用的 Servlet 上下文初始化参数，参数名在整个 Web 应用中必须是<span style="color:red;">惟一</span>的，在 Web 应用的整个生命周期中上下文初始化参数都存在，任意的 Servlet 和 JSP 都可以随时随地访问它。
- 配置 Spring，<span style="color:red;">必须需要 \<listener>，而 \<context-param> 可有可无</span>，如果在 web.xml 中不写 \<context-param> 配置信息，默认的路径是 `/WEB-INF/applicationContext.xml`，在 WEB-INF 目录下创建的 xml 文件的名称必须是 applicationContext.xml。如果是要自定义文件名可以在 web.xml 里加入 contextConfigLocation 这个 context 参数：在 \<param-value>\</param-value> 里指定相应的 xml 文件名，如果有多个 xml 文件，可以写在一起并以 “,” 号分隔。

```xml
<!-- spring config -->
<context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>classpath:spring/spring-config.xml</param-value>
</context-param>
<listener>
     <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
</listener>
```

- 部署在同一容器中的多个 web 项目，要配置不同的 webAppRootKey，web.xml 文件中最好定义 webAppRootKey 参数，如果不定义，将会缺省为 “webapp.root”，如下：

```xml
 <context-param>  
    <param-name>webAppRootKey</param-name>  
    <param-value>cn.inxiny.test</param-value>  
</context-param>
```

- 在不同环境下如何获取

JSP 网页

```jsp
${initParam.param_name}
```

Servlet

```java
String param_name = getServletContext().getInitParamter("param_name");
```

Servlet 的 ServletConfig 对象拥有该 Servlet 的 ServletContext 的一个引用

```java
getServletConfig().getServletContext().getInitParameter()
```

### session-config

```xml
<!-- Set timeout to 120 minutes -->
<session-config> 
   <session-timeout>120</session-timeout> 
</session-config> 
```

\<session-config> 用于设置容器的 session 参数，比如：\<session-timeout> 用于指定 http session 的失效时间。默认时间 30 minutes。\<session-timeout> 用来指定默认的会话超时时间间隔，以分钟为单位。该元素值必须为整数。如果 session-timeout 元素的值为零或负数，则表示会话将永远不会超时。

### listener

#### listener 介绍

\<listener> 为 web 应用程序定义监听器，监听器用来监听各种事件，比如：Application 和 Session 事件，所有的监听器按照相同的方式定义，功能取决去它们各自实现的接口，常用的 web 事件接口有如下几个

- ServletContextListener：用于监听 Web Application 的启动和关闭；
- ServletContextAttributeListener：用于监听 ServletContext 范围（Application）内属性的改变；
- ServletRequestListener：用于监听用户的请求；
- ServletRequestAttributeListener：用于监听 ServletRequest 范围（Request）内属性的改变；
- HttpSessionListener：用于监听用户 session 的开始和结束；
- HttpSessionAttributeListener：用于监听 HttpSession 范围（Session）内属性的改变。

\<listener> 主要用于监听 web 应用事件，其中有两个比较重要的 web 应用事件：<span style="color:red;">Application 的启动和停止</span>（starting up or shutting down）和 <span style="color:red;">Session 的创建和失效</span>（created or destroyed）。<span style="color:red;">Application 启动事件发生在应用第一次被 Servlet 容器装载和启动的时候；停止事件发生在 web 应用停止的时候。</span>Session 创建事件发生在每次一个新的 Session 创建的时候，类似地 Session 失效事件发生在每次一个 Session 失效的时候。为了使用这些 Web 应用事件做些有用的事情，我们必须创建和使用一些特殊的“监听类”。它们是实现了以下两个接口中任何一个接口的简单java类：<span style="color:red;">javax.servlet.ServletContextListener</span> 或 <span style="color:red;">javax.servlet.http.HttpSessionListener</span>，如果想让你的类监听 Application 的启动和停止事件，你就得实现 ServletContextListener 接口；想让你的类去监听 Session 的创建和失效事件，那你就得实现 HttpSessionListener 接口。

#### listener 配置

配置 Listener 只要向 Web 应用注册 Listener 实现类即可，无需配置参数之类的东西，因为 <span style="color:red;">Listener 获取的是 Web 应用 ServletContext（Application）的配置参数。</span>为 Web 应用配置 Listener 的两种方式：

- 使用 @WebListener 修饰 Listener 实现类即可。
- 在 web.xml 文档中使用 \<listener> 进行配置。

我们选择 web.xml 这种配置方式，只有一个元素 \<listener-class> 指定 listener 的实现类。

```xml
<listener>
   <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
</listener>
```

### filter

#### filter 介绍

Filter 可认为是 Servle 的一种 “加强版”，主要用于对用户请求 request 进行预处理，也可以对 Response 进行后处理，是个<span style="color:red;">典型的处理链。使用 Filter 的完整流程是：Filter 对用户请求进行预处理，接着将请求 HttpServletRequest 交给 Servlet 进行处理并生成响应，最后 Filter 再对服务器响应 HttpServletResponse 进行后处理。</span>Filter 与 Servlet 具有完全相同的生命周期，且 Filter 也可以通过 \<init-param> 来配置初始化参数，获取 Filter 的初始化参数则使用 FilterConfig 的 getInitParameter()。

换种说法，Servlet 里有 request 和 response 两个对象，Filter 能够在一个 request 到达 Servlet 之前预处理 request，也可以在离开 Servlet 时处理 response，Filter 其实是一个 Servlet 链。以下是 Filter 的一些常见应用场合。

- 认证 Filter
- 日志和审核 Filter
- 图片转换 Filter
- 数据压缩 Filter
- 密码 Filter
- 令牌 Filter
- 触发资源访问事件的 Filter
- XSLT Filter
- 媒体类型链 Filter

Filter 可负责拦截多个请求或响应；一个请求或响应也可被多个Filter拦截。创建一个 Filter 只需两步

- 创建 Filter 处理类
- web.xml 文件中配置 Filter

Filter 必须实现 javax.servlet.Filter 接口，在该接口中定义了三个方法：

- void init(FilterConfig config)：用于完成 Filter 的初始化。FilteConfig 用于访问 Filter 的配置信息。
- void destroy()：用于 Filter 销毁前，完成某些资源的回收。
- void doFilter(ServletRequest request,ServletResponse response,FilterChain chain)：实现过滤功能的核心方法，该方法就是对每个请求及响应增加额外的处理。该方法实现对用户请求 request 进行预处理，也可以实现对服务器响应 response 进行后处理，它们的分界线为是否调用了 chain.doFilter(request，response)，执行该方法之前，即对用户请求 request 进行预处理，执行该方法之后，即对服务器响应 response 进行后处理。

#### filter 配置

Filter 配置与 Servlet 的配置非常相似，需要配置两部分：配置 Filter 名称和 Filter 拦截器 URL 模式。区别在于 Servlet 通常只配置一个 URL，而 Filter 可以同时配置多个请求的 URL。配置 Filter 有两种方式：

- 在 Filter 类中通过 Annotation 进行配置。
- 在 web.xml 文件中通过配置文件进行配置。

我们使用的是 web.xml 这种配置方式，下面重点介绍 \<filter> 内包含的一些元素。

\<filter> 用于指定 Web 容器中的过滤器，可包含 \<filter-name>、\<filter-class>、\<init-param>、\<icon>、\<display-name>、\<description>。

- \<filter-name>：用来定义过滤器的名称，该名称在整个程序中都必须唯一。
- \<filter-class>：指定过滤器类的完全限定的名称，即Filter的实现类。
- \<init-param>：为Filter配置参数，与\<context-param>具有相同的元素描述符\<param-name>和\<param-value>。
- \<filter-mapping>：用来声明Web应用中的过滤器映射，过滤器被映射到一个servlet或一个URL模式。这个过滤器的\<filter>和\<filter-mapping>必须具有相同的\<filter-name>，指定该Filter所拦截的URL。过滤是按照部署描述符的\<filter-mapping>出现的顺序执行的。

##### 字符集过滤器

```xml
<filter>
    <filter-name>CharacterEncodingFilter</filter-name>
    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
    <init-param>
        <param-name>encoding</param-name>
        <param-value>UTF-8</param-value>
    </init-param>
    <init-param>
        <param-name>forceEncoding</param-name>
        <param-value>true</param-value>
    </init-param>
</filter>
<filter-mapping>
    <filter-name>CharacterEncodingFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```

- CharacterEncodingFilter 类可以通过简单配置来帮我们实现字符集转换的功能。
- 参数 encoding 用于指定编码类型，参数 forceEncoding 设为 true 时，强制执行 request.setCharacterEncoding(this.encoding) 和reponse.setCharacterEncoding(this.encoding) 中的方法。

### servlet

#### servlet 介绍

Servlet 通常称为服务器端小程序，是运行在服务器端的程序，用于处理及响应客户的请求。Servlet 是个特殊的 java 类，继承于 <span style="color:red;">HttpServlet</span>。客户端通常只有 GET 和 POST 两种请求方式，Servlet 为了响应这两种请求，必须重写 doGet() 和 doPost() 方法。大部分时候，Servlet 对于所有的请求响应都是完全一样的，此时<span style="color:red;">只需要重写 service() 方法即可响应客户端的所有请求。</span>另外，HttpServlet 有两个方法：

- init(ServletConfig config)：创建 Servlet 实例时，调用该方法来<span style="color:red;">初始化 Servlet 资源</span>。
- destroy()：销毁 Servlet 实例时，自动调用该方法来回收资源。

通常无需重写 init() 和 destroy() 两个方法，除非需要在初始化 Servlet 时，完成某些资源初始化的方法，才考虑重写 init() 方法，<span style="color:red;">如果重写了 init() 方法，应在重写该方法的第一行调用 super.init(config)，该方法将调用 HttpServlet 的 init() 方法。</span>如果需要在销毁 Servlet 之前，先完成某些资源的回收，比如关闭数据库连接，才需要重写 destory() 方法。

Servlet 的生命周期，创建 Servlet 实例有两个时机

- 客户端第一次请求某个 Servlet 时，系统创建该 Servlet 的实例，大部分 Servlet 都是这种 Servlet。
- web 应用启动时立即创建 Servlet 实例，即 load-on-start Servlet。

每个 Servlet 的运行都遵循如下生命周期：

- <span style="color:red;">创建 Servlet 实例</span>。
- Web容器 <span style="color:red;">调用Servlet的 init()方法</span>，对 Servlet 进行初始化。
- Servlet 初始化后，将一直存在于容器中，用于<span style="color:red;">响应客户端请求</span>，如果客户端发送 GET 请求，容器调用 Servlet 的 doGet() 方法处理并响应请求；如果客户端发送 POST 请求，容器调用 Servlet 的 doPost() 方法处理并响应请求。或者统一使用 service() 方法处理来响应用户请求。
- Web 容器决定销毁 Servlet 时，<span style="color:red;">先调用 Servlet 的 destory() 方法</span>，通常在关闭 web 应用时<span style="color:red;">销毁 Servlet 实例</span>。

#### servlet 配置

从 Servlet3.0 开始，配置Servlet 有两种方式：

- 在 Servlet 类中使用 @WebServlet Annotation 进行配置。
- 在 web.xml 文件中进行配置。

```java
// 使用 @WebServlet 注解配置 WxServlet,urlPatterns 属性指明了 WxServlet 的访问路径
@WebServlet(urlPatterns="/WxServlet")
```

我们用 web.xml 文件来配置 Servlet，需要配置 \<servlet> 和 \<servlet-mapping>。\<servlet> 用来声明一个 Servlet。\<icon>、\<display-name> 和 \<description> 元素的用法和 \<filter> 的用法相同。\<init-param> 元素与 \<context-param> 元素具有相同的元素描述符，可以使用 \<init-param> 子元素将初始化参数名和参数值传递给 Servlet，访问 Servlet 配置参数通过 ServletConfig 对象来完成。

ServletConfig 提供如下方法

```java
ServletConfig.getInitParameter(java.lang.String name);
```

ServletConfig 获取配置参数的方法和 ServletContext 获取配置参数的方法完全一样，只是 ServletConfig 是取得当前 Servlet 的配置参数，而 ServletContext 是获取整个 Web 应用的配置参数。

- \<description>：为 Servlet 指定一个文本描述。
- \<display-name>：为 Servlet 提供一个简短的名字被某些工具显示。
- \<icon>：为 Servlet 指定一个图标，在图形管理工具中表示该 Servlet。

- \<servlet-name>：用来定义 Servlet 的名称，该名称在整个应用中必须是惟一的。
- \<servlet-class>：用来指定 Servlet 的完全限定的名称。
- \<jsp-file>：用来指定应用中 JSP 文件的完整路径。这个完整路径必须由 / 开始。

- \<load-on-startup>

如果 load-on-startup 元素存在，而且也指定了 jsp-file 元素，则 JSP 文件会被重新编译成 Servlet，同时产生的 Servlet 也被载入内存。\<load-on-startup> 的内容可以为空，或者是一个整数。这个值表示由 web 容器载入内存的顺序。

如果有两个 Servlet 元素都含有 \<load-on-startup> 子元，则 \<load-on-startup> 子元素值较小的 Servlet 将先被加载。如果 \<load-on-startup> 子元素值为空或负值，则由 web 容器决定什么时候加载 Servlet。如果两个 Servlet 的 \<load-on-startup> 子元素值相同，则由 web 容器决定先加载哪一个 Servlet。\<load-on-startup>1\</load-on-startup> 表示启动容器时，初始化 Servlet。

- \<servlet-mapping>

\<servlet-mapping> 含有 \<servlet-name> 和 \<url-pattern>

- \<servlet-name>：Servlet的名字，唯一性和一致性，与\<servlet>元素中声明的名字一致。
- \<url-pattern>：指定相对于 Servlet 的 URL 的路径。该路径相对于 web 应用程序上下文的根路径。\<servlet-mapping> 将 URL 模式映射到某个 Servlet，即该 Servlet 处理的 URL。

匹配规则和顺序如下：

1. **精确路径匹配**。例子：比如 servletA 的 url-pattern为 /test，servletB 的 url-pattern为 /\* ，这个时候，如果我访问的url为 http://localhost/test ，这个时候容器就会先进行精确路径匹配，发现 /test 正好被 servletA 精确匹配，那么就去调用 servletA，也不会去理会其他的 servlet 了。
2. **最长路径匹配**。例子：servletA 的 url-pattern 为 /test/\*，而 servletB 的 url-pattern 为 /test/a/\*，此时访问http://localhost/test/a时，容器会选择路径最长的 servlet 来匹配，也就是这里的 servletB。
3. **扩展匹配**。如果 url 最后一段包含扩展，容器将会根据扩展选择合适的 servlet。例子：servletA 的 url-pattern：\*.action
4. 如果前面三条规则都没有找到一个 servlet，容器会根据 url 选择对应的请求资源。如果应用定义了一个 default servlet，则容器会将请求丢给 default servlet。

根据这个规则表，就能很清楚的知道 servlet 的匹配过程，所以定义 servlet 的时候也要考虑 url-pattern 的写法，以免出错。 

对于 filter，不会像 servlet 那样只匹配一个 servlet，因为 filter 的集合是一个链，所以只会有处理的顺序不同，而不会出现只选择一个 filter。Filter 的处理顺序和 filter-mapping 在 web.xml 中定义的顺序相同。

#### 加载 servlet 的过程

容器的 Context 对象对请求路径 (URL) 做出处理，去掉请求 URL 的上下文路径后，按路径映射规则和 Servlet 映射路径（\<url-pattern>）做匹配，如果匹配成功，则调用这个 Servlet 处理请求。

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

### welcome-file-list

```xml
<welcome-file-list>
    <welcome-file>index.html</welcome-file>
</welcome-file-list>
```

\<welcome-file-list> 包含一个子元素 \<welcome-file>，\<welcome-file> 用来指定首页文件名称。\<welcome-file-list> 元素可以包含一个或多个 \<welcome-file> 子元素。如果在第一个 \<welcome-file> 元素中没有找到指定的文件，web 容器就会尝试显示第二个，以此类推。


