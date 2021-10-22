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

# 该服务仅可以使用哪些capabilities
CapabilityBoundingSet=CAP_NET_BIND_SERVICE CAP_NET_RAW
# 该服务添加哪些capabilities
# AmbientCapabilities=CAP_NET_BIND_SERVICE
```

