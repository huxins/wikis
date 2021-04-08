# JdbcTemplate

- [详解 jdbcTemplate 和 namedParameterJdbcTemplate](http://catalinali.top/2017/useJDBC/)

## jdbcTemplate

### method

- execute：可以用于执行任何 SQL 语句，一般用于执行 DDL 语句；
- update 和 batchUpdate：update 用于执行新增、修改、删除等语句；batchUpdate 用于执行批处理相关语句；
- query 和 queryForXXX：用于执行查询相关语句；
- call：用于执行存储过程、函数相关语句。

### bean

在 spring 配置文件中加上 jdbcTemplate 的 bean

```xml
<!-- jdbcTemplate -->
<bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
	<property name="dataSource" ref="dataSource"/>
</bean>
```

在使用 jdbcTemplate 类中使用 @Autowired 进行注入

```java
@Autowired
private JdbcTemplate jdbcTemplate;
```

### example

#### queryForObject

```java
public void testQuery(){
    String sql = "select id,username,password from user where id=?";
    BeanPropertyRowMapper<User> rowMapper = new BeanPropertyRowMapper<User>(User.class);
    User user = jdbcTemplate.queryForObject(sql, rowMapper,1);
    System.out.println(user);
}
```

查询 count、avg、sum 等函数返回唯一值

```java
public void testCountQuery(){
    String sql = "select count(*) from user";
    Integer result = jdbcTemplate.queryForObject(sql, Integer.class);
    System.out.println(result);
}
```

#### query

```java
public void testMutiQuery(){
    String sql = "select id,username,password from user";
    BeanPropertyRowMapper<User> rowMapper = new BeanPropertyRowMapper<User>(User.class);
    List<User> users = jdbcTemplate.query(sql, rowMapper);
    for (User user : users) {
        System.out.println(user);
    }
}
```

#### update

```java
public void testCreate(){
    String sql = "insert into user (username,password) values (?,?)";
    int create = jdbcTemplate.update(sql, new Object[]{255, 255});
    System.out.println(create);
}
```

#### batchUpdate

```java
public void testBatch(){
    List<Object[]> batchArgs=new ArrayList<Object[]>();
    batchArgs.add(new Object[]{777,888});
    batchArgs.add(new Object[]{666,888});
    batchArgs.add(new Object[]{555,888});
    String sql = "insert into user (username,password) values (?,?)";
    jdbcTemplate.batchUpdate(sql, batchArgs);
}
```

## namedParameterJdbcTemplate

### bean

```xml
<!-- namedParameterJdbcTemplate -->
<bean id="namedParameterJdbcTemplate" class="org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate">
    <constructor-arg ref="dataSource"></constructor-arg>
</bean>
```

### 具名

`具名参数:`  SQL 按名称而不是按位置进行指定，具名参数更易于维护，也提升了可读性。具名参数由框架类在运行时用占位符取代。

具名参数只在 `NamedParameterJdbcTemplate` 中得到支持。NamedParameterJdbcTemplate 可以使用全部 jdbcTemplate 方法。

具名新增

```java
public void testNamedParameter(){
    String sql = "insert into user (username,password) values (:username,:password)";
    User u = new User();
    u.setUsername("555");
    SqlParameterSource sqlParameterSource = new BeanPropertySqlParameterSource(u);
    namedParameterJdbcTemplate.update(sql,sqlParameterSource);
}
```

