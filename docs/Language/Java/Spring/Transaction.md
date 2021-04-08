# Transaction

## 配置

```xml
<!-- 数据事物管理器 -->
<bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
    <property name="dataSource" ref="dataSource"></property>
</bean>
<!-- 使得事务注解 @Transactional 生效 -->
<tx:annotation-driven transaction-manager="transactionManager"/>

<!-- 配置事务属性 -->
<tx:advice id="advice" transaction-manager="transactionManager">
    <tx:attributes>
        <tx:method name="get*" read-only="true"/>
        <tx:method name="find*" propagation="SUPPORTS" read-only="true"/>
        <tx:method name="add*" rollback-for="Exception" />
    </tx:attributes>
</tx:advice>
<!-- 配置事务的切入点： AOP切入 -->
<aop:config>
    <!-- 配置切入表达式 -->
    <aop:pointcut expression="execution(* com.proc.service.*.*(..))" id="pointcut"/>
    <aop:advisor pointcut-ref="pointcut" advice-ref="advice"></aop:advisor>
</aop:config>

<dependency>
    <groupId>org.aspectj</groupId>
    <artifactId>aspectjweaver</artifactId>
    <version>1.9.1</version>
</dependency>
```

[Spring 基于 xml 配置方式的事务](https://www.cnblogs.com/caoyc/p/5633232.html)

事务属性 `<tx:method ...` 对应的属性

1. `name`: 指定切入点方法，属于之前配置的切入点表达式；可以使用通配符进行匹配，
2. `isolation`: 用于指定事务的隔离级别。默认值是 `DEFAULT` ,表示使用数据库的默认隔离级别
3. `propagation`: 用于指定事务的传播行为。默认值是 `REQUIRED` ,表示一定会有事务，增删改的选择。查询方法可以选择 `SUPPORTS`.
4. `read-only`: 用于指定事务是否只读。只有查询方法才能设置为 `true` .默认值是 `false` ,表示读写
5. `timeout`: 用于指定事务的超时时间，默认值是 `-1`，表示永不超时。如果指定了数值，以秒为单位。
6. `rollback-for`: 用于指定一个异常，当产生该异常时，事务回滚；产生其他异常时，事务不会滚；没有默认值(设置值)，任何异常都会回滚。
7. `no-rollback-for`: 用于指定一个异常，当产生该异常时，事务不会滚；产生其他异常时事务回滚；没有默认值(设置值)，任何异常都会回滚







## spring 事务管理接口

- **PlatformTransactionManager：** （平台）事务管理器
- **TransactionDefinition：** 事务定义信息(事务隔离级别、传播行为、超时、只读、回滚规则)
- **TransactionStatus：** 事务运行状态

### PlatformTransactionManager

**Spring并不直接管理事务，而是提供了多种事务管理器** ，他们将事务管理的职责委托给 Hibernate 或者 JTA 等持久化机制所提供的相关平台框架的事务来实现。

PlatformTransactionManager接口中定义了三个方法：

```java
Public interface PlatformTransactionManager()...{
    // 根据指定的传播行为，返回当前活动的事务或创建新的事务
    TransactionStatus getTransaction(TransactionDefinition definition) throws TransactionException;
    // 使用事务目前的状态提交事务
    Void commit(TransactionStatus status) throws TransactionException;
    // 对执行的事务进行回滚
    Void rollback(TransactionStatus status) throws TransactionException;
}
```

使用 JDBC 进行数据持久化操作时，我们的 xml 配置通常如下

```xml
<!-- 事务管理器 -->
<bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
  <property name="dataSource" ref="dataSource"/>
</bean>
```

### TransactionDefinition

事务管理器接口 **PlatformTransactionManager** 通过 **getTransaction(TransactionDefinition definition)** 方法来得到一个事务，这个方法里面的参数是 **TransactionDefinition 类** ，这个类就定义了一些基本的事务属性。

**TransactionDefinition** 接口中定义了5个方法以及一些表示事务属性的常量比如隔离级别、传播行为等等的常量。

```java
public interface TransactionDefinition {
    // 返回事务的传播行为
    int getPropagationBehavior();
    // 返回事务的隔离级别，事务管理器根据它来控制另外一个事务可以看到本事务内的哪些数据
    int getIsolationLevel();
    // 返回事务必须在多少秒内完成
    int getTimeout();
    // 返回事务的名字
    String getName();
    // 返回是否优化为只读事务
    boolean isReadOnly();
}
```

#### 事务隔离级别

**定义了一个事务可能受其他并发事务影响的程度。**

在典型的应用程序中，多个事务并发运行，经常会操作相同的数据来完成各自的任务（多个用户对统一数据进行操作）。并发虽然是必须的，但可能会导致以下的问题。

**脏读（Dirty read）:** 当一个事务正在访问数据并且对数据进行了修改，而这种修改还没有提交到数据库中，这时另外一个事务也访问了这个数据，然后使用了这个数据。因为这个数据是还没有提交的数据，那么另外一个事务读到的这个数据是“脏数据”，依据“脏数据”所做的操作可能是不正确的。

**丢失修改（Lost to modify）:** 指在一个事务读取一个数据时，另外一个事务也访问了该数据，那么在第一个事务中修改了这个数据后，第二个事务也修改了这个数据。这样第一个事务内的修改结果就被丢失，因此称为丢失修改。

**不可重复读（Unrepeatableread）:** 指在一个事务内多次读同一数据。在这个事务还没有结束时，另一个事务也访问该数据。那么，在第一个事务中的两次读数据之间，由于第二个事务的修改导致第一个事务两次读取的数据可能不太一样。这就发生了在一个事务内两次读到的数据是不一样的情况，因此称为不可重复读。

**幻读（Phantom read）:** 幻读与不可重复读类似。它发生在一个事务（T1）读取了几行数据，接着另一个并发事务（T2）插入了一些数据时。在随后的查询中，第一个事务（T1）就会发现多了一些原本不存在的记录，就好像发生了幻觉一样，所以称为幻读。

**不可重复度和幻读区别：**

不可重复读的重点是修改，幻读的重点在于新增或者删除。

**TransactionDefinition** 接口中定义了五个表示隔离级别的常量：

- **TransactionDefinition.ISOLATION_DEFAULT:** 使用后端数据库默认的隔离级别，Mysql 默认采用的 REPEATABLE_READ 隔离级别 Oracle 默认采用的 READ_COMMITTED 隔离级别
- **TransactionDefinition.ISOLATION_READ_UNCOMMITTED:** 最低的隔离级别，允许读取尚未提交的数据变更，**可能会导致脏读、幻读或不可重复读**
- **TransactionDefinition.ISOLATION_READ_COMMITTED:** 允许读取并发事务已经提交的数据，**可以阻止脏读，但是幻读或不可重复读仍有可能发生**
- **TransactionDefinition.ISOLATION_REPEATABLE_READ:** 对同一字段的多次读取结果都是一致的，除非数据是被本身事务自己所修改，**可以阻止脏读和不可重复读，但幻读仍有可能发生**
- **TransactionDefinition.ISOLATION_SERIALIZABLE:** 最高的隔离级别，完全服从ACID的隔离级别。所有的事务依次逐个执行，这样事务之间就完全不可能产生干扰，也就是说，**该级别可以防止脏读、不可重复读以及幻读**。但是这将严重影响程序的性能。通常情况下也不会用到该级别

#### 事务传播行为

**为了解决业务层方法之间互相调用的事务问题。**

当事务方法被另一个事务方法调用时，必须指定事务应该如何传播。例如：方法可能继续在现有事务中运行，也可能开启一个新事务，并在自己的事务中运行。在 TransactionDefinition 定义中包括了如下几个表示传播行为的常量：

**支持当前事务的情况：**

- **TransactionDefinition.PROPAGATION_REQUIRED：** 如果当前存在事务，则加入该事务；如果当前没有事务，则创建一个新的事务。
- **TransactionDefinition.PROPAGATION_SUPPORTS：** 如果当前存在事务，则加入该事务；如果当前没有事务，则以非事务的方式继续运行。
- **TransactionDefinition.PROPAGATION_MANDATORY：** 如果当前存在事务，则加入该事务；如果当前没有事务，则抛出异常。

**不支持当前事务的情况：**

- **TransactionDefinition.PROPAGATION_REQUIRES_NEW：** 创建一个新的事务，如果当前存在事务，则把当前事务挂起。
- **TransactionDefinition.PROPAGATION_NOT_SUPPORTED：** 以非事务方式运行，如果当前存在事务，则把当前事务挂起。
- **TransactionDefinition.PROPAGATION_NEVER：** 以非事务方式运行，如果当前存在事务，则抛出异常。

**其他情况：**

- **TransactionDefinition.PROPAGATION_NESTED：** 如果当前存在事务，则创建一个事务作为当前事务的嵌套事务来运行；如果当前没有事务，则该取值等价于 TransactionDefinition.PROPAGATION_REQUIRED。

#### 事务超时属性

**一个事务允许执行的最长时间。**

所谓事务超时，就是指一个事务所允许执行的最长时间，如果超过该时间限制但事务还没有完成，则自动回滚事务。在 TransactionDefinition 中以 int 的值来表示超时时间，其单位是秒。

#### 事务只读属性

**对事物资源是否执行只读操作。**

事务的只读属性是指，对事务性资源进行只读操作或者是读写操作。所谓事务性资源就是指那些被事务管理的资源，比如数据源、 JMS 资源，以及自定义的事务性资源等等。如果确定只对事务性资源进行只读操作，那么我们可以将事务标志为只读的，以提高事务处理的性能。在 TransactionDefinition 中以 boolean 类型来表示该事务是否只读。

#### 回滚规则

这些规则定义了哪些异常会导致事务回滚而哪些不会。默认情况下，事务只有遇到运行期异常时才会回滚，而在遇到检查型异常时不会回滚（这一行为与EJB的回滚行为是一致的）。 但是你可以声明事务在遇到特定的检查型异常时像遇到运行期异常那样回滚。同样，你还可以声明事务遇到特定的异常不回滚，即使这些异常是运行期异常。

### TransactionStatus

TransactionStatus 接口用来记录事务的状态，该接口定义了一组方法，用来获取或判断事务的相应状态信息。

**TransactionStatus 接口内容如下：**

```java
public interface TransactionStatus {
    boolean isNewTransaction(); // 是否是新的事物
    boolean hasSavepoint(); // 是否有恢复点
    void setRollbackOnly();  // 设置为只回滚
    boolean isRollbackOnly(); // 是否为只回滚
    boolean isCompleted; // 是否已完成
}
```

### TransactionAspectSupport

```java
TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
```

## Spring事务管理

Spring 支持两种方式的事务管理

- **编程式事务管理：** 通过 Transaction Template 手动管理事务，实际应用中很少使用
- **使用XML配置声明式事务：** 推荐使用（代码侵入性最小），实际是通过AOP实现

实现声明式事务的四种方式：

1. **基于 TransactionInterceptor 的声明式事务:** Spring 声明式事务的基础，通常也不建议使用这种方式，但是与前面一样，了解这种方式对理解 Spring 声明式事务有很大作用。
2. **基于 TransactionProxyFactoryBean 的声明式事务:** 第一种方式的改进版本，简化的配置文件的书写，这是 Spring 早期推荐的声明式事务管理方式，但是在 Spring 2.0 中已经不推荐了。
3. **基于 < tx> 和 < aop> 命名空间的声明式事务管理：** 目前推荐的方式，其最大特点是与 Spring AOP 结合紧密，可以充分利用切点表达式的强大支持，使得管理事务更加灵活。
4. **基于 @Transactional 的全注解方式：** 将声明式事务管理简化到了极致。开发人员只需在配置文件中加上一行启用相关后处理 Bean 的配置，然后在需要实施事务管理的方法或者类上使用 @Transactional 指定事务规则即可实现事务管理，而且功能也不必其他方式逊色。

## Reference

- [Spring事务管理详解](https://juejin.im/post/6844903608224333838)
- [编程式和声明式事务实例](https://juejin.im/post/6844903608694079501)
- [Transaction rolled back because it has been marked as rollback-only](https://yunlongn.github.io/2019/05/06/%E8%AE%B0%E4%B8%80%E6%AC%A1%E4%BA%8B%E5%8A%A1%E7%9A%84%E5%9D%91Transaction-rolled-back-because-it-has-been-marked-as-rollback-only/)

