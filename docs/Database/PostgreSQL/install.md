# install

- [PostgreSQL](https://www.postgresql.org/download/linux/redhat/)

CentOS 7

```bash
yum install https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm
yum install postgresql10-server
/usr/pgsql-10/bin/postgresql-10-setup initdb
systemctl enable postgresql-10
```

Docker

- [如何对现有数据使用PostgreSQL容器？](https://stackoverflow.com/questions/35679995/how-to-use-a-postgresql-container-with-existing-data)

```bash
docker run -d -p 5432:5432 --name postgres \
  --restart always \
  -e POSTGRES_PASSWORD=password \
  -e TZ=Asia/Shanghai \
  -v /root/postgres/data:/var/lib/postgresql/data \
  postgres:10.7-alpine
```

初始化

```bash
mkdir -p /usr/local/pgsql/data
chown -R postgres:postgres /usr/local/pgsql/data
chmod -R 700 /usr/local/pgsql/data
su postgres
/usr/pgsql-10/bin/initdb \
    --pgdata=/usr/local/pgsql/data \
    --auth=trust \
    --auth-host=trust \
    --auth-local=trust \
    --encoding=UTF8 \
    --username=postgres \
    --pwprompt
/usr/pgsql-10/bin/pg_ctl -D /usr/local/pgsql/data -l logfile start
```

