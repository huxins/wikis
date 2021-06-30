# Transaction

| 隔离级别         | 脏读 | 不可重复读 | 幻读 | 常量                         |
| ---------------- | ---- | ---------- | ---- | ---------------------------- |
| serializable     | 否   | 否         | 否   | TRANSACTION_SERIALIZABLE     |
| repeatable-read  | 否   | 否         | 是   | TRANSACTION_REPEATABLE_READ  |
| read-committed   | 否   | 是         | 是   | TRANSACTION_READ_COMMITTED   |
| read-uncommitted | 是   | 是         | 是   | TRANSACTION_READ_UNCOMMITTED |

**脏读：**一个事务读取到另外一个事务未提交的数据。

**不可重复读：**事务 A 多次读取同一数据，事务 B 在事务 A 多次读取的过程中，对数据作了更新并提交，导致事务 A 多次读取同一数据时，结果不一致。

**幻读：**一个事务内读取到了别的事务插入的数据，导致前后读取不一致。

**总结：**不可重复读侧重于**修改**，幻读侧重于**新增**或**删除**。解决不可重复读的问题只需锁住满足条件的行，解决幻读需要锁表。

