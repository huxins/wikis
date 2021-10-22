# Annotation

## Parameter

### @Value

```xml
<bean id="dataSource">
  <property name="url" value="${jdbc.url}" />
</bean>
```

对应注解

```java
@Value("${jdbc.driver}")
private String driver;
```

### @PropertySource

[Spring中property-placeholder的使用与解析](https://www.cnblogs.com/leftthen/p/5615066.html)

`context:property-placeholder` 的注解

```java
@PropertySource("classpath:redis.properties")
public class test {
    
}
```

### @Bean

[@Configuration的使用](https://www.cnblogs.com/duanxz/p/7493276.html)

管理 Bean 分为两个部分，一个是注册 Bean，一个装配 Bean。

完成这两个动作**有三种方式，一种是使用自动配置的方式、一种是使用 JavaConfig 的方式，一种就是使用 XML 配置的方式。**

自动配置：@Component + @AutoWired

JavaConfig：@Configuration + @Bean


