# ssh

## login

免输入 yes

```bash
StrictHostKeyChecking no
```

免除 known_hosts 更新

```bash
UserKnownHostsFile /dev/null
```

删除 known_hosts

```bash
ssh-keygen -R host
```

免密码登入

```bash
ssh-copy-id user@host
```

口令登录

```bash
PasswordAuthentication yes
```

允许 root 用户远程登录

```bash
PermitRootLogin yes
```

安装 sshd

```bash
yum install openssh-server
```

## secret key

生成密钥

```bash
cd ～/.ssh
ssh-keygen -t rsa -C "huxins@163.com"
# 测试与目标服务器连接
ssh -T git@github.com
```

## agent

- [SSH 命令的三种代理功能（-L/-R/-D）](https://zhuanlan.zhihu.com/p/57630633)

`SSH` 命令除了登陆外还有三种代理功能：

- 正向代理（-L）：相当于 iptable 的 port forwarding
- 反向代理（-R）：相当于 frp 或者 ngrok
- socks5 代理（-D）：相当于 ss/ssr

```bash
# 正向代理
ssh -L 0.0.0.0:PortA:HostB:PortB user@HostB
# 反向代理
# 在 HostB 上配置 /etc/ssh/sshd_config
# GatewayPorts yes
ssh -R HostB:PortB:HostA:PortA user@HostB
# Socks5
ssh -D localhost:1080 user@HostB
```

**优化**

```bash
ssh -CqTnN -L 0.0.0.0:PortA:HostB:PortB  user@HostB
```

其中 `-C` 为压缩数据，`-q` 安静模式，`-T` 禁止远程分配终端，`-n` 关闭标准输入，`-N` 不执行远程命令。此外视需要还可以增加 `-f` 参数，把 ssh 放到后台运行。

这些 ssh 代理没有断线重连功能，链接断了命令就退出了，所以需要些脚本监控重启，或者使用 autossh 之类的工具保持链接。

**防止连接断开**

```bash
#!/bin/bash
user=root
ip=192.168.1.1
port=22
cport=`echo $((10000 + $RANDOM % 10000))`
mport=80
cmd="ssh -p$port -f -N -R $cport:localhost:$mport $user@$ip"
reg="ssh -p$port -f -N -R [0-9]\{4\}:localhost:$mport $user@$ip"
isrun=`ps -ef | grep "$reg" | grep -v grep`
if [ "$isrun"x == "x" ]; then
    echo "notrun"
    $cmd
    echo "$cmd"
else
    echo "isrun"
    echo "$isrun"
fi
```

**autossh**

- `-M 20001` 选项指定中继服务器上的监视端口，用于交换监视 SSH 会话的测试数据。
- `-o` 用于设置 autossh 参数。
- `-f` 指定 autossh 在后台运行，并不会传给 ssh。和 ssh 的 `-f` 不一样，autossh 指定 `-f` 时将无法寻求密码。指定 `-f` 时，会将环境变量 `AUTOSSH_GATETIME` 覆盖为 0！

```bash
autossh -M 20001 \
-fN -o "PubkeyAuthentication=yes" \
-o "StrictHostKeyChecking=no" -o "ServerAliveInterval 60" -o "ServerAliveCountMax 3" \
-L 0.0.0.0:PortA:HostB:PortB \
-p 22 remote_user@HostB
```

开机启动

```ini
[Unit]
Description=AutoSSH service for remote tunnel
After=network-online.target

[Service]
User=your_username
ExecStart=/usr/bin/autossh -M 20001 -N -o "PubkeyAuthentication=yes" -o "StrictHostKeyChecking=no" -o "ServerAliveInterval 60" -o "ServerAliveCountMax 3" -R HostA:PortA:HostB:PortB -p 8383 remote_user@HostB

[Install]
WantedBy=multi-user.target
```

