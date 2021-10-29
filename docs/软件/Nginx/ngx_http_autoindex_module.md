# ngx_http_autoindex_module

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name _;

    root /data;

    autoindex on;
    autoindex_exact_size off;
    autoindex_localtime on;

    charset utf-8;

    location / {
        try_files $uri $uri/ =404;
    }

}
```

