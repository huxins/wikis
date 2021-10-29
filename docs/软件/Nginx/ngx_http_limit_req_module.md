# ngx_http_limit_req_module

限制访问频率

```nginx
http {
    # 以请求IP作为KEY，设置访问频率为1秒1次请求
    limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;
    server {
        listen       80;
        server_name  _;
        # 设置队列为5，最多有5个连接等待，超出的不继续等待
        limit_req zone=addr burst=5 nodelay;
        # 限速
        limit_rate 10k;
        
        location / {
            root   html;
            index  index.html index.htm;
        }
        
    }
}
```

