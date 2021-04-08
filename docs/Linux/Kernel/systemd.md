# systemd

```ini
# /etc/systemd/system.conf
# /etc/systemd/user.conf
DefaultLimitCORE=infinity
DefaultLimitNOFILE=65535
DefaultLimitNPROC=65535
# Service
[Service]
LimitCORE=infinity
LimitNOFILE=65535
LimitNPROC=65535
```

