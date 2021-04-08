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



## SuppressWarnings

该批注的作用是给编译器一条指令，告诉它对被批注的代码元素内部的某些警告保持静默。

- deprecation：使用了不赞成使用的类或方法时的警告
- unchecked：执行了未检查的转换时的警告，例如当使用集合时没有用泛型来指定集合保存的类型
- fallthrough：当 Switch 程序块直接通往下一种情况而没有 Break 时的警告
- path：在类路径、源文件路径等中有不存在的路径时的警告
- serial：当在可序列化的类上缺少 serialVersionUID 定义时的警告
- finally：任何 finally 子句不能正常完成时的警告
- all：关于以上所有情况的警告


