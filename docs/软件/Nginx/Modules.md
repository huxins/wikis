# Modules

## 静态模块

```bash
$ wget https://nginx.org/download/nginx-1.16.1.tar.gz
$ wget https://github.com/openresty/echo-nginx-module/archive/v0.61.tar.gz
$ tar -zxvf nginx-1.16.1.tar.gz
$ tar -zxvf v0.61.tar.gz
$ ./configure \
    --prefix=/usr/local/nginx \
    --with-http_stub_status_module \
    --with-http_ssl_module \
    --with-http_v2_module \
    --with-http_realip_module \
    --with-http_sub_module \
    --with-http_gzip_static_module \
    --add-module=../echo-nginx-module-0.61
$ make && make install
```

## 动态模块

Nginx 版本需要 `>=1.11.5` 。

```bash
$ ./configure \
    --prefix=/usr/local/nginx \
    --with-http_stub_status_module \
    --with-http_ssl_module \
    --with-http_realip_module \
    --with-http_sub_module \
    --with-http_gzip_static_module \
    --with-compat \ # 动态加载
    --with-mail=dynamic \ # 编译源码模块
    --add-dynamic-module=../echo-nginx-module-0.61 # 编译第三方模块
$ make && make install
```

编译成功后，会把模块安装在 `nginx/modules/` 目录。

```nginx
load_module /usr/local/nginx/modules/ngx_http_echo_module.so;
```

