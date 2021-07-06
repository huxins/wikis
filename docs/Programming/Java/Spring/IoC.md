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

### 生命周期

- init

```xml
<bean init-method="init"/>
```

- destroy

```xml
<bean destroy-method="destroy"/>
```

### 依赖注入

#### 注入方式

- 属性注入

```xml
<bean>
    <property name="name" value="value"/>
</bean>
```

- 构造函数注入

```xml
<bean>
    <!-- 构造参数索引 -->
    <constructor-arg index="0" value="value"/>
    <!-- 构造参数类型 -->
    <constructor-arg type="java.lang.String" value="value"/>
    <!-- 构造参数名称 -->
    <constructor-arg name="name" value="value"/>
    <!-- 参数顺序 -->
    <constructor-arg value="value"/>
</bean>
```

- 工厂方法注入

#### 自动装配

- **no：**不支持自动装配功能。
- **byName：**根据属性名自动装配。
- **byType：**根据属性类型自动装配。
- **constructor：**根据构造方法的参数类型自动装配。

#### Collection

- List

```xml
<bean>
    <property name="schools">
        <list>
            <value>小学</value>
            <value>大学</value>
        </list>
    </property>
</bean>
```

- Map

```xml
<bean>
    <property name="scores">
        <map>
            <entry key="语文" value="88"/>
            <entry key="数学" value="87"/>
        </map>
    </property>
</bean>
```

- Set

```xml
<bean>
    <property name="axe">
        <set>
            <value>普通字符串</value>
            <bean class="com.spring.service.impl.SteelAxe"/>
            <ref local="stoneAxe"/>
        </set>
    </property>
</bean>
```

- Properties

```xml
<bean>
    <property name="health">
        <props>
            <prop key="血压">正常</prop>
            <prop key="身高">175</prop>
        </props>
    </property>
</bean>
```

#### 注解

- @Controller
- @Service
- @Repository
- @Component

```xml
<context:component-scan base-package="cn.inxiny.test" use-default-filters="false">
    <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
</context:component-scan>
```

