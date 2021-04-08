# NFS

## 服务端

### 安装

- [CentOS 7 下 yum 安装和配置 NFS](https://qizhanming.com/blog/2018/08/08/how-to-install-nfs-on-centos-7)

```bash
# Centos 7
yum install nfs-utils
systemctl start rpcbind
systemctl start nfs
```

### 配置

配置服务端共享目录

```bash
# vi /etc/exports
/data/    192.168.0.0/24(rw,sync,no_root_squash,no_all_squash)
```

1. `/data`: 共享目录位置。
2. `192.168.0.0/24`: 客户端 IP 范围，`*` 代表所有，即没有限制。
3. `rw`: 权限设置，可读可写。
4. `sync`: 同步共享目录。
5. `no_root_squash`: 可以使用 root 授权。
6. `no_all_squash`: 可以使用普通用户授权。

检查本地共享目录

```bash
showmount -e localhost
```

## 客户端

### 安装

CentOS 7

```bash
yum install nfs-utils
systemctl start rpcbind
# 查服务端的共享目录
showmount -e 192.168.0.110
# 在客户端创建目录
mkdir /data
# 挂载
mount -t nfs 192.168.0.101:/data /data
# 自动挂载
vi /etc/fstab
192.168.0.110:/data /data nfs defaults 0 0
# 重新加载 systemctl
systemctl daemon-reload
```



