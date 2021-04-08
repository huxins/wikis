# Bean

## scope

### singleton

缺省作用域、单例类型

容器中只存在一个共享的 Bean，只要 id 与 Bean 定义相匹配，那就会是同一个 Bean。在容器启动（实例化）时 Bean 就实例化和初始化（可以通过 `lazy-init="true"` 来设置使得 Bean 被调用时才初始化）。

### prototype

原型类型

对有状态的 Bean 建议使用 Prototype，对无状态建议使用 Singleton。
容器启动时并没有实例化 Bean，只有获取 Bean 时才会被创建，并且每一次都是新建一个对象。

- 同一个调用者只生成一个实例

```java
@Service
@Scope(value = "prototype")
```

- 每一次调用，生成了不同的实例

```java
@Service
@Scope(value = "prototype", proxyMode = ScopedProxyMode.TARGET_CLASS)
```

## lifecycle

### init

我们希望在 Bean 被初始化的时候，就初始化某些资源。为了达到这样的目的，我们可修改 PersonServiceBean 类的代码为

```java
public class PersonServiceBean implements PersonService {
    public void init() {
        System.out.println("初始化某些资源");
    }
}
```

这样，我们的目的就具体地成为：当 Spring 容器初始化 PersonServiceBean 对象之后，就要执行该对象的 init() 方法。为了达成这样的目的，只须修改 Spring 的配置文件 beans.xml 的内容为

```xml
<bean id="personService" class="cn.x.test.service.impl.PersonServiceBean" lazy-init="false" init-method="init"/>
```

### destroy

我们希望在 Bean 被销毁的时候，就释放或关闭某些资源。为了达到这样的目的，我们可修改 PersonServiceBean 类的代码为

```java
public void destroy() {
    System.out.println("释放初始化的资源"); 
}
```

紧接着，我们要修改 Spring 的配置文件 beans.xml 的内容

```xml
<bean id="personService" class="cn.x.test.service.impl.PersonServiceBean" lazy-init="false" init-method="init" destroy-method="destroy"/>
```

## injection

### constructors

- 根据索引赋值，索引都是以 0 开头

```xml
<bean id="memberBean" class="com.x.service.impl.MemberBean">
  <constructor-arg index="0" value="刘晓刚"/>
  <constructor-arg index="1" ref="dept"/>
  <constructor-arg index="2">
    <value><![CDATA[<aaa>]]></value>
  </constructor-arg>
</bean>
```

- 根据所属类型传值

这种方法基本上不怎么适用，因为一个类里可以有好几个相同基本类型的变量，很容易就混淆值传给哪一个参数了

```xml
<bean id="memberBean" class="cn.x.test.service.impl.MemberBean">
  <constructor-arg type="java.lang.String" value="刘晓刚"/>
  <constructor-arg type="cn.x.test.bean.Dept" ref="dept"/>
</bean>
```

- 根据参数的名字传值

推荐用法，根据名字来传值的，所以基本上只要名字对了，这个值就可以获取到

```xml
<bean id="memberBean" class="cn.x.test.service.impl.MemberBean">
  <constructor-arg name="name" value="刘晓刚"/>
  <constructor-arg name="dept" ref="dept"/>
  <constructor-arg name="sex" value="男"/>
</bean>
```

- 直接传值

直接给参数赋值，这种方法也是根据顺序排的，所以一旦调换位置的话，就会出现 bug，这种方法已经很原始了

```xml
<bean id="memberBean" class="cn.x.test.service.impl.MemberBean">
  <constructor-arg value="刘晓刚"/>
  <constructor-arg ref="dept"/>
  <constructor-arg value="男"/>
</bean>
```

### set

```xml
<bean id="dept" class="cn.x.test.bean.Dept">
  <property name="name" value="北航"/>
  <property name="deptno" value="00001"/>
</bean>
```

### automatic

- no：不适用自动装配。Bean 依赖必须通过 ref 元素定义。
- byName：根据属性名自动装配。BeanFactory 查找容器中的全部 Bean，找出其中 id 属性同名的 Bean 来完成注入。如果没有找到匹配的 Bean 实例，则 Spring 不会进行任何注入。
- byType：根据属性类型自动装配。BeanFactory 查找容器中的全部 Bean，如果正好有一个与依赖属性类型相同的 Bean，就自动注入这个属性；但是如果有多个这样的 Bean，就会抛出一个异常。如果没有匹配的 Bean，则什么都不会发生，属性就不会被设置。如果需要无法自动装配时抛出异常，则设置 dependency-check=”objects”。
- constructor：与 byType 类似，区别是用于构造注入的参数。
- Autodetect：BeanFactory 根据 Bean 内部结构，决定使用 constructor 或者 byType。如果找到一个默认的构造函数，则使用 byType。

### list

```xml
<bean id="chinese" class="com.spring.service.impl.Chinese">
    <property name="schools">
        <list>
            <value>小学</value>
            <value>中学</value>
            <value>大学</value>
        </list>
    </property>
</bean>
```

### map

```xml
<bean id="chinese" class="com.spring.service.impl.Chinese">
    <property name="scores">
        <map>
            <entry key="语文" value="88" />
            <entry key="数学" value="87" />
            <entry key="外语" value="88" />
        </map>
    </property>

    <property name="phaseAxes">
        <map>
            <entry key="原始社会" value-ref="stoneAxe" />
            <entry key="农业社会" value-ref="steelAxe" />
        </map>
    </property>
</bean>
```

### set

```xml
<bean id="chinese" class="com.spring.service.impl.Chinese">
    <property name="axe">
        <set>
            <value>普通字符串</value>
            <bean class="com.spring.service.impl.SteelAxe"></bean>
            <ref local="stoneAxe"/>
        </set>
    </property>
</bean>
```

### property

```xml
<bean id="chinese" class="com.spring.service.impl.Chinese">
    <property name="health">
        <props>
            <prop key="血压">正常</prop>
            <prop key="身高">175</prop>
        </props>
    </property>
</bean>
```

### annotation

@Repository  
@Service  
@Controller  
@Component  

```xml
<context:component-scan base-package="cn.inxiny.test" use-default-filters="false">
    <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
</context:component-scan>
```

