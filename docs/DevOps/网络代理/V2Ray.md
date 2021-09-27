# V2Ray

- [配置文档](https://www.v2fly.org/)

## 配置

### 服务端

#### WebSocket

```json
{
    "inbounds": [
        {
            "listen": "0.0.0.0",
            "port": 10000,
            "protocol": "vmess",
            "settings": {
                "clients": [
                    {
                        "id": "9400fe9a-47bc-4abf-a26e-cc19ee413886",
                        "alterId": 0
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
        }
    ]
}
```

#### TCP HTTP

```json
{
    "inbounds": [
        {
            "listen": "0.0.0.0",
            "port": 10000,
            "protocol": "vmess",
            "settings": {
                "clients": [
                    {
                        "id": "9400fe9a-47bc-4abf-a26e-cc19ee413886",
                        "alterId": 0
                    }
                ]
            },
            "streamSettings": {
                "network": "tcp",
                "tcpSettings": {
                    "header": {
                        "type": "http",
                        "response": {
                            "version": "1.1",
                            "status": "200",
                            "reason": "OK",
                            "headers": {
                                "Content-Type": ["application/octet-stream", "video/mpeg"],
                                "Transfer-Encoding": ["chunked"],
                                "Connection": ["keep-alive"],
                                "Pragma": "no-cache"
                            }
                        }
                    }
                }
            }
        }
    ],
    "outbounds": [
        {
            "protocol": "freedom",
            "settings": {}
        }
    ]
}
```

#### IPv4 出站

在 outbounds 里增加一个 freedom 协议，配置用本机 IPv4 的地址。
在 routing 中增设一个 netflix 关键字匹配，指定用刚才新增的协议发出。

```json
# outbounds
{
    "sendThrough": "ipv4 address",
    "protocol": "freedom",
    "settings": {},
    "tag": "netflix"
}
# routing rules
{
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
```

### 客户端

#### WebSocket

```json
{
    "inbounds": [
        {
            "listen": "0.0.0.0",
            "port": 1080,
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

### Nginx

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

## systemd

```ini
[Unit]
Description=V2Ray Server Service
After=network.target nss-lookup.target
Wants=network-online.target

[Service]
Type=simple
User=nobody
AmbientCapabilities=CAP_NET_BIND_SERVICE
NoNewPrivileges=true
ExecStart=/usr/local/v2ray/v2ray -config /usr/local/v2ray/config.json
Restart=on-failure
RestartPreventExitStatus=23

[Install]
WantedBy=multi-user.target
```

## 混淆参数

- [免流混淆参数](https://jacobsblog.xyz/%e5%85%8d%e6%b5%81%e6%b7%b7%e6%b7%86%e5%8f%82%e6%95%b0/)
- [V2Ray 免流配置](https://bbs.111111.online/d/84-v2ray)

```
pull.free.video.10010.com
地址：服务端IP或域名
端口：80  这里必须要80或8080端口，同服务端
加密方式：aes-128-gcm
传输协议：tcp或者ws协议
伪装类型：http
伪装网址：这里填写各isp商免流链接，联通，移动等
```

