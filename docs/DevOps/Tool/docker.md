# docker

- [Docker 从入门到实践](https://yeasy.gitbook.io/docker_practice/)

## install

**shell**

```bash
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
sudo systemctl enable docker
sudo groupadd docker
sudo usermod -aG docker $USER
```

**centos 8**

[centos 8 安装docker](https://www.cnblogs.com/ding2016/p/11592999.html)

```bash
curl https://download.docker.com/linux/centos/docker-ce.repo -o /etc/yum.repos.d/docker-ce.repo
yum install https://download.docker.com/linux/fedora/30/x86_64/stable/Packages/containerd.io-1.2.6-3.3.fc30.x86_64.rpm
yum install docker-ce -y
systemctl start docker
```

## container

操作容器

```bash
# 如果从这个stdin中exit，会导致容器的停止
docker attach 69d1
# 如果从这个stdin中exit，不会导致容器的停止
docker exec -it 69d1 bash
# 导出容器
docker export 7691a814370e > ubuntu.tar
# 导入容器快照为镜像
cat ubuntu.tar | docker import - test/ubuntu:v1.0
docker import http://example.com/exampleimage.tgz example/imagerepo
# 关机重启容器
docker run --restart=always
docker update --restart=always
```

## volume

操作数据卷

```bash
# 创建数据卷
docker volume create my-vol
# 删除数据卷
docker volume rm my-vol
# 查看信息
docker volume inspect my-vol
# 挂载数据卷
--mount source=my-vol,target=/webapp
--mount type=bind,source=/src/webapp,target=/opt/webapp,readonly
```

## network

网络映射

```bash
# 映射所有接口地址
docker run -d -p 80:80 nginx:alpine
# 映射到指定地址的指定端口
docker run -d -p 127.0.0.1:80:80 nginx:alpine
# 映射到指定地址的任意端口
docker run -d -p 127.0.0.1::80 nginx:alpine
# 查看映射端口配置
docker port 37bd 8080
```

网络互联

```bash
# 创建网络
docker network create -d bridge my-net
# 运行一个容器并连接到新建的网络
docker run -it --rm --name busybox --network my-net busybox sh
```

配置容器DNS

```bash
docker run -it --rm --dns=IP_ADDRESS ubuntu:18.04 cat /etc/resolv.conf
docker run -it --rm --dns-search=DOMAIN ubuntu:18.04 cat /etc/resolv.conf
```

/etc/docker/daemon.json

```json
{
    "dns" : [
        "114.114.114.114",
        "8.8.8.8"
    ]
}
```

配置主机名

```bash
docker run -it --rm -h HOSTNAME ubuntu:18.04 cat /etc/resolv.conf
docker run -it --rm --hostname=HOSTNAME ubuntu:18.04 cat /etc/resolv.conf
```

## repository

```sh
# 登录
docker login --username=huxins@163.com --password=password registry.com
docker login --username=huxins@163.com --password-stdin registry.com
docker logout
# 推送
docker tag ubuntu:18.04 username/ubuntu:18.04
docker push username/ubuntu:18.04
```

**mirror**

https://xj9vwn9r.mirror.aliyuncs.com  
https://mirror.ccs.tencentyun.com  
https://055c43be31800fb50fb8c003c33df040.mirror.swr.myhuaweicloud.com

```bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://xj9vwn9r.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## issues

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

