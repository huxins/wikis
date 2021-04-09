# ngx_http_limit_conn_module

限制并发访问，默认安装的内置模块，被用来限制在某一个关键字维度上的最大并发数量，通常情况下，这个维度被设置为访问者的IP。在计算一个连接当前的并发数量时，不是一连接就会被计数，而是当所有请求头都被读完才计数。

```nginx
http {
    limit_conn_zone $binary_remote_addr zone=addr:10m;
    server {
        listen       80;
        server_name  _;
        limit_conn   addr 3;
        
        location / {
            root   html;
            index  index.html index.htm;
        }
        
    }
}
```

