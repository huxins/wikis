# Trojan

## 安装

```shell
apt update && apt install -y xz-utils
cd /usr/src && wget https://github.com/trojan-gfw/trojan/releases/download/v1.15.1/trojan-1.15.1-linux-amd64.tar.xz
tar xf trojan-1.*
vi /usr/src/trojan/server.conf
```
### 配置文件

```json
{
    "run_type": "server",
    "local_addr": "0.0.0.0",
    "local_port": 443,
    "remote_addr": "127.0.0.1",
    "remote_port": 80,
    "password": [
        "00000000",
        "leanway"
    ],
    "log_level": 1,
    "ssl": {
        "cert": "/usr/src/trojan-cert/fullchain.cer",
        "key": "/usr/src/trojan-cert/private.key",
        "key_password": "",
        "cipher_tls13":"TLS_AES_128_GCM_SHA256:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_256_GCM_SHA384",
	"prefer_server_cipher": true,
        "alpn": [
            "http/1.1",
            "h2"
        ],
        "reuse_session": true,
        "session_ticket": false,
        "session_timeout": 600,
        "plain_http_response": "",
        "curves": "",
        "dhparam": ""
    },
    "tcp": {
        "no_delay": true,
        "keep_alive": true,
        "fast_open": false,
        "fast_open_qlen": 20
    },
    "mysql": {
        "enabled": false,
        "server_addr": "127.0.0.1",
        "server_port": 3306,
        "database": "trojan",
        "username": "trojan",
        "password": ""
    }
}
```

### 创建用户账户

```shell
sudo useradd -m -s /bin/bash trojanuser
sudo passwd trojanuser
sudo usermod -G sudo trojanuser
su -l trojanuser
```

### 创建服务用户

```shell
sudo groupadd certusers
sudo useradd -r -M -G certusers trojan
sudo useradd -r -m -G certusers acme
```

### 创建 Trojan 自启服务

```shell
$ vi /lib/systemd/system/trojan.service
[Unit]
Description=trojan
After=network.target

[Service]
Type=simple
PIDFile=/usr/src/trojan/trojan/trojan.pid
ExecStart=/usr/src/trojan/trojan -c "/usr/src/trojan/server.conf"
ExecReload=
ExecStop=/usr/src/trojan/trojan
PrivateTmp=true
   
[Install]
WantedBy=multi-user.target
```

### Nginx 分流

```nginx
http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;
    log_format  main  '\$remote_addr - \$remote_user [\$time_local] "\$request" '
                      '\$status \$body_bytes_sent "\$http_referer" '
                      '"\$http_user_agent" "\$http_x_forwarded_for"';
    access_log  /var/log/nginx/access.log  main;
    sendfile        on;
    #tcp_nopush     on;
    keepalive_timeout  120;
    client_max_body_size 20m;
    #gzip  on;
    # 伪装站点
    server {
        listen 80;
        server_name $your_domain;
        root /usr/share/nginx/html;
        index index.php index.html index.htm;
    }
}
```

### windows 客户端

```powershell
# 文件夹根目录下新建两文件
# start.bat
@ECHO OFF
%1 start mshta vbscript:createobject("wscript.shell").run("""%~0"" ::",0)(window.close)&&exit
start /b trojan.exe
# stop.bat
@ECHO OFF
taskkill /im trojan.exe /f
ping -n 2 127.1 >nul
```

