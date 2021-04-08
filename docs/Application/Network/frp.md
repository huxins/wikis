# frp

- [开机启动和后台运行](https://github.com/fatedier/frp/issues/176)

## nobody

```bash
cd frp
mkdir log
chown 99:99 log
```

## frps

```ini
[common]
bind_addr = 0.0.0.0
bind_port = 17000
vhost_http_port = 80

token = token

dashboard_addr = 0.0.0.0
dashboard_port = 17500

dashboard_user = admin
dashboard_pwd = token

log_file = /root/frp/log/frps.log
log_level = info
log_max_days = 7
```

## frpc

```ini
[common]
token = token
user = cg
server_addr = example.com
server_port = 17000
log_file = /root/frp/log/frpc.log
log_level = info
log_max_days = 3
login_fail_exit = true

[mstsc]
type = tcp
local_ip = 127.0.0.1
local_port = 3389
remote_port = 20030
use_encryption = false
use_compression = false

[web]
type = http
local_ip = 127.0.0.1
local_port = 80
custom_domains = test.lhcdn.com
use_encryption = true
use_compression = true
```

## daemon

### nohup

```bash
nohup ./frps -c ./frps.ini & &> /dev/null
nohup ./frps -c ./frps.ini >/dev/null 2>&1 &
```

### systemd

```bash
vi /usr/lib/systemd/system/frps.service
systemctl daemon-reload
```

配置文件

```ini
[Unit]
Description=frps daemon
After=syslog.target network.target
Wants=network.target

[Service]
Type=simple
User=nobody
ExecStart=/root/frp/frps -c /root/frp/frps.ini
Restart=on-failure
RestartSec=5s
# CapabilityBoundingSet=CAP_NET_BIND_SERVICE
AmbientCapabilities=CAP_NET_BIND_SERVICE

[Install]
WantedBy=multi-user.target
```

