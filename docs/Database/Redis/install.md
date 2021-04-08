# install

## windows

```bash
redis-server --service-install redis.windows-service.conf --loglevel verbose
redis-server --service-uninstall
redis-server --service-start
redis-server --service-stop
```

## docker

```bash
docker run -d \
  --name redis \
  --restart always \
  -e TZ=Asia/Shanghai \
  -p 127.0.0.1:6379:6379 \
  -v $HOME/redis/data:/data \
  redis:4.0.14-alpine3.10 \
  redis-server --appendonly yes
```

## linux

```bash
$ yum install redis
```

