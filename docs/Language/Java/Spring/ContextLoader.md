# ContextLoader

Spring 加载可以利用 <span style="color:red;">ContextLoaderListener</span> 实现，也可以采用 <span style="color:red;">ContextLoaderServlet</span> 实现，但是，当 \<filter> 需要用到 bean 时，加载顺序是先加载 \<filter> 后加载 \<servlet>，则 \<filter> 中初始化操作中的 bean 为 null；

所以，如果 \<filter> 中要使用到 bean，此时就可以根据加载顺序 \<listener> -> \<filter> -> \<servlet>，将 spring 的加载改成 Listener 的方式。

-  采用 ContextLoaderServlet 实现

```xml
<servlet>
   <servlet-name>context</servlet-narne>
   <servlet-class>org.springframework.web.context.ContextLoaderServlet</servlet-class>
   <load-on-startup>1</load-on-startup>
</servlet>
```

- 利用 ContextLoaderListener 实现

```xml
<listener>
   <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
</listener>
```

