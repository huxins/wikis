# ngx_stream_core_module

```nginx
stream {
    upstream mstsc {
        server 192.168.137.2:3389;
    }

    server {
        listen 33389;
        proxy_pass mstsc;
    }
}

stream {
    server {
        listen 8080;
        proxy_connect_timeout 10s;
        proxy_timeout 10s;
        proxy_pass 127.0.0.1:3389;
    }
}
```

