# DataSource

## 配置信息

```xml
<!-- 读取jdbc.properties配置信息 -->
<context:property-placeholder location="classpath:jdbc/jdbc.properties" ignore-unresolvable="true"/>
<!-- 多配置文件 -->
<bean id="propertyConfig"
      class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer">
    <property name="locations">
        <list>
            <value>classpath:/jdbc/jdbc.properties</value>
            <value>classpath:/redis/redis.properties</value>
            <value>classpath:/fastdfs/fastdfs_con.properties</value>
        </list>
    </property>
</bean>
```

## 连接池

```xml
<!-- spring自身的连接池 -->
<bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
    <property name="driverClassName" value="com.mysql.jdbc.Driver"/>
    <property name="url" value="jdbc:mysql://localhost:3306/dog"/>
    <property name="username" value="root"/>
    <property name="password" value="123456"/>
</bean>

<!-- dbcp连接池 -->
<bean id="dataSource" class="org.apache.commons.dbcp.BasicDataSource">
    <property name="driverClassName" value="com.mysql.jdbc.Driver"/>
    <property name="url" value="jdbc:mysql://localhost:3306/dog"/>
    <property name="username" value="root"/>
    <property name="password" value="123456"/>
</bean>

<!-- c3p0连接池 -->
<bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
    <property name="driverClass" value="com.mysql.jdbc.Driver"/>
    <property name="jdbcUrl" value="jdbc:mysql://localhost:3306/dog"/>
    <property name="user" value="root"/>
    <property name="password" value="123456"/>
    <property name="minPoolSize" value="10" />
    <property name="maxPoolSize" value="30" />
    <property name="autoCommitOnClose" value="false" />
    <property name="checkoutTimeout" value="10000" />
    <property name="acquireRetryAttempts" value="2" />
</bean>

<!-- Druid连接池 -->
<bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource">
    <property name="driverClassName" value="com.mysql.jdbc.Driver"/>
    <property name="url" value="jdbc:mysql://localhost:3306/dog"/>
    <property name="username" value="root"/>
    <property name="password" value="123456"/>
    <!-- 初始化大小 -->
    <property name="initialSize" value="10" />
    <property name="minIdle" value="10" />
    <property name="maxActive" value="20" />
    <!-- 获取连接等待超时的时间 -->
    <property name="maxWait" value="60000" />
    <!-- 间隔多久才进行一次检测，检测需要关闭的空闲连接，单位是毫秒 -->
    <property name="timeBetweenEvictionRunsMillis" value="60000" />
    <!-- 配置一个连接在池中最小生存的时间，单位是毫秒 -->
    <property name="minEvictableIdleTimeMillis" value="300000" />
    <property name="validationQuery" value="SELECT 'x'" />
    <property name="testWhileIdle" value="true" />
    <property name="testOnBorrow" value="false" />
    <property name="testOnReturn" value="false" />
    <!-- 打开PSCache，并且指定每个连接上PSCache的大小 -->
    <property name="poolPreparedStatements" value="true" />
    <property name="maxPoolPreparedStatementPerConnectionSize" value="20" />
    <!-- 配置监控统计拦截的filters -->
    <property name="filters" value="stat" />
</bean>
```

