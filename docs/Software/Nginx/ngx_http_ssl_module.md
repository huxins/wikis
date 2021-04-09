# ngx_http_ssl_module

- [SSL/TLS协议运行机制的概述](https://www.ruanyifeng.com/blog/2014/02/ssl_tls.html)
- [Nginx 配置 HTTPS 服务器](https://jelly.jd.com/article/6006b1045b6c6a01506c87b5)

## SSL

```nginx
http {
    ssl_session_cache   shared:SSL:10m;
    ssl_session_timeout 10m;
    server {
        listen              443 ssl;
        server_name         www.example.com;
        
        keepalive_timeout   70;
        ssl_certificate     www.example.com.crt;
        ssl_certificate_key www.example.com.key;
        
        ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers         HIGH:!aNULL:!MD5;
    }
}
```

跳转

```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;
    return 301 https://$host$request_uri;
}
```

## HSTS

```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
```

- max-age：设置单位时间内強制使用 HTTPS 连接
- includeSubDomains：可选，所有子域同时生效
- preload：可选，*非规范值*，用于定义使用『HSTS 预加载列表』
- always：可选，保证所有响应都发送此响应头，包括各种內置错误响应

## DH

HTTPS 基础配置采取的默认加密算法是 SHA-1，这个算法非常脆弱，为此，主流的 HTTPS 配置方案应该避免 SHA-1，可以使用[迪菲-赫尔曼密钥交换](https://zh.wikipedia.org/wiki/迪菲-赫爾曼密鑰交換)方案。

代码生成 `dhparam.pem` 文件

```bash
$ openssl dhparam -out dhparam.pem 2048
$ openssl dhparam -dsaparam -out dhparam.pem 4096
```

Nginx 配置

```nginx
# 优先采取服务器算法
ssl_prefer_server_ciphers on;
# 使用DH文件
ssl_dhparam /etc/ssl/certs/dhparam.pem
ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
# 定义算法
ssl_ciphers "EECDH+ECDSA+AESGCM EECDH+aRSA+AESGCM EECDH+ECDSA+SHA384 EECDH+ECDSA+SHA256 EECDH+aRSA+SHA384 EECDH+aRSA+SHA256 EECDH+aRSA+RC4 EECDH EDH+aRSA !aNULL !eNULL !LOW !3DES !MD5 !EXP !PSK !SRP !DSS !RC4";
# 减少点击劫持
add_header X-Frame-Options DENY;
# 禁止服务器自动解析资源类型
add_header X-Content-Type-Options nosniff;
# 防XSS攻击
add_header X-Xss-Protection 1;
# 启用服务器端保护, 防止 BEAST 攻击
ssl_prefer_server_ciphers on;
# 启用 ocsp stapling (网站可以以隐私保护、可扩展的方式向访客传达证书吊销信息的机制)
resolver 8.8.8.8 8.8.4.4;
ssl_stapling on;
ssl_stapling_verify on;
ssl_trusted_certificate /etc/nginx/ssl/star_forgott_com.crt;
```

