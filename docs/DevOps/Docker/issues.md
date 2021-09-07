# issues

- [docker iptable 清空后如何重置容器网络](https://blog.kelu.org/tech/2018/07/14/docker-restart-net-after-iptable-f.html)

```bash
# iptables -t nat -F

# 安装brctl
apt-get install bridge-utils
yum install bridge-utils

# 停止docker服务
systemctl stop docker

# 重建 docker 网络
ifconfig docker0 down
brctl delbr docker0

# 重启docker服务
systemctl start docker
```

- 删除none镜像

```bash
# 删除容器
docker container rm $(docker container ls -a -q -f status=exited)
# 删除镜像
docker image rm $(docker image ls -f dangling=true -q)
```

- 配置文件

[修改已启动容器](https://stackoverflow.com/questions/19335444/how-do-i-assign-a-port-mapping-to-an-existing-docker-container/)

```bash
cat /var/lib/docker/containers/容器ID/hostconfig.json
```

- 磁盘占用与清理

```bash
# 查看空间占用细节
docker system df -v
# 一并清除所有未被使用的镜像和悬空镜像
docker system prune -a
# 强制删除，不提示信息
docker system prune -f
```

## dockerfile

### copy

通配符规则要满足 Go 的 [filepath.Match](https://golang.org/pkg/path/filepath/#Match) 规则

```dockerfile
COPY package.json /mydir/
COPY hom* /mydir/
COPY hom?.txt /mydir/
```

### add

### cmd

```dockerfile
# shell
CMD top
# exec
CMD [ "top" ]
```

### entrypoint

在运行时也可以替代，通过 `docker run` 的参数 `--entrypoint` 来指定

## compose

### install

```bash
curl -L https://github.com/docker/compose/releases/download/1.27.4/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# bash 补全命令
curl -L https://raw.githubusercontent.com/docker/compose/1.27.4/contrib/completion/bash/docker-compose > /etc/bash_completion.d/docker-compose
```

### command

- [startup-order](https://docs.docker.com/compose/startup-order/)

options

- `-f, --file FILE` 指定使用的 Compose 模板文件，默认为 docker-compose.yml，可以多次指定
- `-p, --project-name NAME` 指定项目名称，默认将使用所在目录名称作为项目名
- `--x-networking` 使用 Docker 的可拔插网络后端特性
- `--x-network-driver DRIVER` 指定网络后端的驱动，默认为 bridge
- `--verbose` 输出更多调试信息
- `-v, --version` 打印版本并退出

command

```bash
docker-compose up
docker-compose down
docker-compose images
```

