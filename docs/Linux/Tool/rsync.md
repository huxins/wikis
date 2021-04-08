# rsync

Rsync 服务端和客户端都需要安装

```bash
yum -y install rsync
```

## 远程同步

### SSH

推文件

```bash
rsync -av --delete -e "ssh -p 22" /etc/passwd 192.168.11.26:/tmp/passwd.txt
```

拉文件

```bash
rsync -av --delete -e "ssh -p 22"  192.168.11.26:/tmp/passwd.txt /tmp/test.txt
```

### Rsync

推文件

```bash
rsync -avz --password-file=/root/passwd /tmp/ admin@192.168.204.130::module/destination
```

拉文件

```bash
rsync -avz --password-file=/root/passwd  admin@192.168.204.130::module/destination /tmp
```

上面地址中的 `module` 并不是实际路径名，而是 rsync 守护程序指定的一个资源名，由管理员分配。

如果想知道 rsync 守护程序分配的所有 module 列表，可以执行下面命令。

```bash
rsync rsync://192.168.122.32
```

rsync 协议除了使用双冒号，也可以直接用 `rsync://` 协议指定地址。

```bash
rsync -av source/ rsync://192.168.122.32/module/destination
```

列举整个同步目录或指定目录

```bash
rsync 192.168.11.26::
rsync 192.168.11.26::module
```

### SSH+Rsync

```bash
rsync -avz --rsh="ssh -l root" admin@192.168.11.26::module

rsync -avz -e "ssh -l root" admin@192.168.11.26::module

rsync -avz -e "ssh -l root" rsync://admin@192.168.11.26/module
```

## 配置

### 服务端配置

```ini
# /etc/rsyncd.conf
motd file = /etc/rsyncd.motd
transfer logging = yes
log file = /var/log/rsyncd.log
port = 873
address = 192.168.204.130
uid = nobody
gid = nobody
use chroot = no
read only = no
max connections = 10
[common]
comment = rsync info
path = /tmp
ignore errors
auth users = admin
secrets file = /etc/rsyncd.secrets
hosts allow = 192.168.204.0/255.255.255.0
hosts deny = *
list = false
```

创建用户密码文件

```bash
echo "admin:123456" > /etc/rsyncd.secrets
chmod 600 /etc/rsyncd.secrets
```

创建提示信息文件

```bash
echo  "rsync info"  >  /etc/rsyncd.motd
```

启动服务

```bash
rsync --daemon
echo "rsync --daemon" >> /etc/rc.local
```

### 客户端配置

创建密码文件

```bash
echo "123456" > /root/passwd
chmod 600 /root/passwd
```


