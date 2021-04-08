# V2Ray

- [Project V](https://www.v2ray.com/)
- [白话文教程](https://toutyrater.github.io/)
- [白话文教程（社区版）](https://guide.v2fly.org/)

## 安装

### Systemd

```ini
[Unit]
Description=V2Ray
After=network.target nss-lookup.target
Wants=network-online.target

[Service]
# If the version of systemd is 240 or above, then uncommenting Type=exec and commenting out Type=simple
Type=exec
#Type=simple
User=root
# 该服务仅可以使用哪些capabilities
CapabilityBoundingSet=CAP_NET_BIND_SERVICE CAP_NET_RAW
# 该服务添加哪些capabilities
# AmbientCapabilities=CAP_NET_BIND_SERVICE
NoNewPrivileges=yes
ExecStart=/usr/bin/v2ray/v2ray -config /etc/v2ray/config.json
Restart=on-failure
# Don't restart in the case of configuration error
RestartPreventExitStatus=23

[Install]
WantedBy=multi-user.target
```

### V2Ray 配置

- 强制用ipv4出站

在 outbounds 里面增加一个 freedom 协议，配置用本机 ipv4 的地址。在 routing 中增设一个 netflix 关键字匹配，指定用刚才新增的协议发出。

```json
# outbounds
{
  "sendThrough": "ipv4地址",
  "protocol": "freedom",
  "settings": {},
  "tag": "netflix"
}
# routing rules
{
    "domain":[
        "netflix"
    ],
    "type":"field",
    "outboundTag":"netflix"
}
```



#### 服务端

```json
{
  "inbounds": [
    {
      "port": 35700,
      "listen": "127.0.0.1",
      "protocol": "vmess",
      "settings": {
        "clients": [
          {
            "id": "9400fe9a-47bc-4abf-a26e-cc19ee413886",
            "level": 1,
            "alterId": 64
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "wsSettings": {
          "path": "/github"
        }
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "freedom",
      "settings": {}
    },
    {
      "sendThrough": "ipv4地址",
      "protocol": "freedom",
      "settings": {},
      "tag": "netflix"
    }
  ],
  "routing": {
    "domainStrategy": "AsIs",
    "rules": [
      {
        "type": "field",
        "domain": [
          "netflix"
        ],
        "outboundTag": "netflix"
      }
    ]
  }
}
```

#### 客户端

```json
{
  "inbounds": [
    {
      "port": 1080,
      "listen": "0.0.0.0",
      "protocol": "socks",
      "sniffing": {
        "enabled": true,
        "destOverride": [
          "http",
          "tls"
        ]
      },
      "settings": {
        "auth": "noauth",
        "udp": false
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "vmess",
      "settings": {
        "vnext": [
          {
            "address": "mydomain.me",
            "port": 443,
            "users": [
              {
                "id": "9400fe9a-47bc-4abf-a26e-cc19ee413886",
                "alterId": 64,
                "security": "auto",
                "level": 1
              }
            ]
          }
        ]
      },
      "mux": {
        "enabled": false
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "wsSettings": {
          "path": "/github"
        },
        "tlsSettings": {
          "serverName": "mydomain.me",
          "allowInsecure": false
        }
      }
    }
  ]
}
```

### Nginx 配置

```nginx
server {
  listen  443 ssl;
  ssl_certificate       /etc/v2ray/v2ray.crt;
  ssl_certificate_key   /etc/v2ray/v2ray.key;
  ssl_protocols         TLSv1 TLSv1.1 TLSv1.2;
  ssl_ciphers           HIGH:!aNULL:!MD5;
  server_name           mydomain.me;
  location /github {
        proxy_redirect off;
        proxy_pass http://127.0.0.1:35700;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $http_host;

        # Show realip in v2ray access.log
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}
```







