# frp

- [frp](https://github.com/fatedier/frp)
- [开机启动和后台运行](https://github.com/fatedier/frp/issues/176)

## frps

```ini
[common]
bind_addr = 0.0.0.0
bind_port = 17000
vhost_http_port = 80

token = token

dashboard_addr = 0.0.0.0
dashboard_port = 17500
dashboard_user = user
dashboard_pwd = password

log_file = /var/log/frp/frps.log
log_level = info
log_max_days = 7
```

## frpc

```ini
[common]
server_addr = example.com
server_port = 17000

token = token
user = user
login_fail_exit = true

log_file = /var/log/frp/frpc.log
log_level = info
log_max_days = 3

[mstsc]
type = tcp
local_ip = 127.0.0.1
local_port = 3389
remote_port = 20030
use_encryption = false
use_compression = true

[web]
type = http
local_ip = 127.0.0.1
local_port = 80
custom_domains = test.example.com
use_encryption = false
use_compression = true
```

## systemd

Server

```ini
[Unit]
Description=Frp Server Service
After=syslog.target network.target
Wants=network.target

[Service]
Type=simple
User=nobody
Restart=on-failure
RestartSec=5s
ExecStart=/usr/bin/frps -c /etc/frp/frps.ini
AmbientCapabilities=CAP_NET_BIND_SERVICE
LimitNOFILE=1048576

[Install]
WantedBy=multi-user.target
```

Client

```ini
[Unit]
Description=Frp Client Service
After=network.target

[Service]
Type=simple
User=nobody
Restart=on-failure
RestartSec=5s
ExecStart=/usr/bin/frpc -c /etc/frp/frpc.ini
ExecReload=/usr/bin/frpc reload -c /etc/frp/frpc.ini
LimitNOFILE=1048576

[Install]
WantedBy=multi-user.target
```

