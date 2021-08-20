# ssh

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

