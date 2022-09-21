# IoC

- [Configuration metadata](https://docs.spring.io/spring-framework/docs/4.3.2.RELEASE/spring-framework-reference/htmlsingle/#beans-factory-metadata)
- [Spring IoC有什么好处呢](https://www.zhihu.com/question/23277575)

## Bean

### 作用域

- singleton

> 容器启动时 Bean 就实例化和初始化（可以通过 `lazy-init="true"` 来设置使得 Bean 被调用时才初始化）。

- prototype

> 容器启动时没有实例化 Bean，只有获取 Bean 时才会被创建，每一次都是新建一个对象。

singleton 引用 prototype 时，每次注入提供一个新的实例，可配置每次调用生成新的实例

```xml
<bean>
    <aop:scoped-proxy/>
</bean>
```

```java
@Scope(value = ConfigurableBeanFactory.SCOPE_PROTOTYPE, proxyMode = ScopedProxyMode.TARGET_CLASS)
```

- reqeust

```java
@Scope(value = WebApplicationContext.SCOPE_REQUEST, proxyMode = ScopedProxyMode.INTERFACES)
```

