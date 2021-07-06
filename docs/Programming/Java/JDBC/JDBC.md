# JDBC

## Driver

```java
DriverManager.registerDriver(new org.postgresql.Driver());
Class.forName("org.postgresql.Driver");
```

## Connection

| NO   | 方法                                           | 描述                         |
| ---- | ---------------------------------------------- | ---------------------------- |
| 1    | Statement createStatement()                    | 创建 Statement 对象          |
| 2    | PreparedStatement prepareStatement(String sql) | 预编译 sql 的 Statement 对象 |
| 3    | CallableStatement prepareCall(String sql)      | 执行存储过程的 Statement     |
| 4    | void setAutoCommit(boolean autoCommit)         | 事务自动提交                 |
| 5    | void commit()                                  | 提交事务                     |
| 6    | void rollback()                                | 回滚事务                     |

```java
Connection connection = DriverManager.getConnection(url, user, password);
Statement statement = connection.createStatement();
```

## Statement

| NO   | 方法                               | 描述       |
| ---- | ---------------------------------- | ---------- |
| 1    | ResultSet executeQuery(String sql) | 查询       |
| 2    | int executeUpdate(String sql)      | 增删改     |
| 3    | boolean execute(String sql)        | 任意SQL    |
| 4    | void addBatch(String sql)          | 批处理     |
| 5    | int[] executeBatch()               | 批处理执行 |

```java
ResultSet resultSet = statement.executeQuery(sql);
```

预编译 SQL 解决注入问题

```java
String sql = "SELECT * FROM y_production_order WHERE order_code = ?";
PreparedStatement statement = connection.prepareStatement(sql);
statement.setString(1, "RBJ3086B1023");
ResultSet resultSet = statement.executeQuery();
```

## ResultSet

| NO   | 方法                                 | 描述               |
| ---- | ------------------------------------ | ------------------ |
| 1    | Object getObject(String columnLabel) | 获取任意类型的数据 |
| 2    | String getString(String columnLabel) | 获取指定类型的数据 |
| 3    | boolean next()                       |                    |
| 4    | boolean previous()                   |                    |
| 5    | boolean absolute(int row)            |                    |
| 6    | void beforeFirst()                   |                    |
| 7    | void afterLast()                     |                    |

```java
while (resultSet.next()) {
    String order_no  = resultSet.getString("order_no");
    System.out.println("order_no: " + order_no);
}
```

