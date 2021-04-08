# cli

```bash
su postgres
# 创建用户
createuser -P -s -e sonar;
# 连接数据库
psql -U dbuser -d exampledb -h 127.0.0.1 -p 5432
# 创建数据库
create database sonar owner=dbname;
# 列举数据库
\l
# 选择数据库
\c dbname
# 列举表
\dt
\z
# 查看表结构
\d tableName
# 查看字符集
\encoding
# 退出数据库命令行
\q
```

备份

[在PostgreSQL中备份还原数据库的5个技巧](https://www.howtoing.com/backup-and-restore-database-in-postgresql)

```bash
# 备份和恢复单个数据库
pg_dump -U postgres -d mydb > mydb.pgsql
psql -U postgres -d mydb -f mydb.pgsql
# 备份和恢复所有数据库
pg_dumpall -U postgres > alldbs.pgsql
psql -U postgres -f alldbs.pgsql
# 备份和恢复单个表
pg_dump -U postgres -d mydb -t mytable > mydb-mytable.pgsql
psql -U postgres -d mydb -f mydb-mytable.pgsql
# 压缩的备份和恢复数据库
pg_dump -U postgres -d mydb | gzip > mydb.pgsql.gz
gunzip -c mydb.pgsql.gz | psql -U postgres -d mydb
# 在多个文件中分割备份和恢复
pg_dump -U postgres -d mydb | split -b 100m – mydb.pgsql
cat mydb.pgsql* | psql -U postgres -d mydb
pg_dump -U postgres -d mydb | gzip | split -b 100m – mydb.pgsql.gz
cat mydb.pgsql.gz* | gunzip | psql -U postgres -d mydb
```

