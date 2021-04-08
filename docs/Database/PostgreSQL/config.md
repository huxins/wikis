# config

postgresql.conf

```sql
SHOW config_file;
SHOW data_directory;
select * from pg_timezone_names;
```

max_connections

```sql
show max_connections;
SELECT count(*) FROM pg_stat_activity;
select min_val, max_val from pg_settings where name='max_connections';
```

password

```bash
su postgres
psql -U postgres
\password postgres
\q
```

remote

```bash
# vi /var/lib/pgsql/11/data/postgresql.conf
# 找到listen_addresses修改为：
listen_addresses = '*'

# vi /var/lib/pgsql/11/data/pg_hba.conf
# IPv4 local connections:
host    all             all             0.0.0.0/0               md5
```

psql: FATAL:  Peer authentication failed for user "postgres"

```bash
# vi /var/lib/pgsql/11/data/pg_hba.conf
# Database administrative login by Unix domain socket
local     all     postgres         peer
改为
local     all     postgres         trust
```

template

```sql
UPDATE pg_database SET datistemplate = FALSE WHERE datname = 'template1';
DROP DATABASE template1;
CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UNICODE';
UPDATE pg_database SET datistemplate = TRUE WHERE datname = 'template1';
```

log

```ini
# 是否将日志重定向至文件中
logging_collector = on
# 日志文件目录，默认是PGDATA的相对路径
log_directory = 'log'
#  日志文件命名形式
log_filename = 'postgresql-%Y-%m-%d.log'
# 单个日志文件的生存期，在日志文件大小没有达到log_rotation_size时，一天只生成一个日志文件
log_rotation_age = 1d
# 单个日志文件的大小，如果时间没有超过log_rotation_age，一个日志文件最大只能到10M，否则将新生成一个日志文件
log_rotation_size = 10MB
# 当日志文件已存在时，该配置如果为off，新生成的日志将在文件尾部追加，如果为on，则会覆盖原来的日志
log_truncate_on_rotation = off
# 会话等待时间超过deadlock_timeout而被锁时是否产生一个日志信息
log_lock_waits = off
# 记录每条SQL语句执行完成消耗的时间
log_duration = off
# 设置日志记录内容 none, ddl, mod, all
log_statement
# 记录那些耗时超过（或等于）这个值（ms）的SQL语句
log_min_duration_statement = -1
# 是否记录连接信息
log_connections = off
# 是否记录连接断开信息
log_disconnections = off
# 日志输出格式
log_line_prefix = '%m %p %u %d %r '
# 日志时区
log_timezone = 'Asia/Shanghai'
```

