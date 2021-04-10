# ngx_http_proxy_module

```nginx
location / {
    proxy_pass https://1.0.0.1;
    proxy_set_header Host $http_host;

    proxy_ssl_name $http_host;
    proxy_ssl_server_name on;

    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;
}
```

## proxy_pass

proxy_pass 有无 “/” 的四种区别

```nginx
# http://www.wandouduoduo.com/wddd/index.html
# http://127.0.0.1:8080/index.html
location  /wddd/ {
    proxy_pass  http://127.0.0.1:8080/;
}
# http://127.0.0.1:8080/wddd/index.html
location  /wddd/ {
    proxy_pass http://127.0.0.1:8080;
}
# http://127.0.0.1:8080/sun/index.html
location  /wddd/ {      
    proxy_pass http://127.0.0.1:8080/sun/;
}
# http://127.0.0.1:8080/sunindex.html
location  /wddd/ {
    proxy_pass http://127.0.0.1:8080/sun;
}
```

