# SNI 代理

## Nginx

国外配置

```nginx
user  nginx;
#机器几个核就写几，更通用的方法是auto，Nginx会自动应用合适的值
worker_processes  auto;
error_log  /var/log/nginx/error.log error;
pid        /var/run/nginx.pid;
#Nginx允许使用的最大文件描述符数量限制，适当调大可避免"too many open files"错误
worker_rlimit_nofile 1048576;
events
    {
        #设置轮询方法
        use epoll;
        #单个工作进程可以允许同时建立外部连接的数量，低配机器慎加
        worker_connections 262144;
        #尽可能多地接收连接
        multi_accept on;
    }
stream {
    #这里定义一个后端的map，防止直接通过https方式访问IP造成的循环反代
    map $ssl_preread_server_name $backend {
        ~*[0-9]$              unix:/dev/shm/null.sock;
        default               $ssl_preread_server_name:$server_port;
    }
    #下面这段就是sni代理+ssl加密服务端的实现
    server {
        listen              4333 ssl;
        #与防火墙内Nginx服务器使用ssl加密方式进行连接，效果和stunnel等隧道代理类似，
        #这里主要为了加密流量实现防火墙穿透
        ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers         AES128-SHA:AES256-SHA:RC4-SHA:DES-CBC3-SHA:RC4-MD5;
        #服务端加密方式优先
        #ssl_prefer_server_ciphers on;
        #证书文件，可以是自签证书，这里的证书配置主要是服务端验证客户端时要用到，
        #可以用这两行的命令自签（记得去掉#号）：
        #openssl req -new -x509 -days 3650 -nodes -subj "/C=CA/ST=CA/L=CA/O=CA/OU=CA/CN=CA" \
        #-out /etc/nginx/cert.pem -keyout /etc/nginx/key.pem
        ssl_certificate     /etc/nginx/cert.pem;
        ssl_certificate_key /etc/nginx/key.pem;
        #下面三条配置是用来验证客户端的，防止非授权客户端连接，没错，这里博主懒得再签一个了
        ssl_client_certificate /etc/nginx/cert.pem;
        ssl_trusted_certificate /etc/nginx/cert.pem;
        #验证客户端貌有问题
        #ssl_verify_client on;
        ssl_session_cache   shared:SSL:20m;
        ssl_session_timeout 10m;
        #下面是sni代理转发设置
        ssl_preread on;
        #DNS服务器设置，用来解析$ssl_preread_server_name（也就是https中的域名）
        #注意，下面一定要替换成可用的dns！
        #我在此处用来限制被代理域名，不能啥网站都代啊对不，当然你也可以用map去限制域名，一样的效果
        #如果允许代理任何https站点，可以设置为resolver 8.8.8.8;
        #resolver 127.0.0.1:5353;
        resolver 8.8.8.8;
        proxy_pass $backend;
    }
}
```

