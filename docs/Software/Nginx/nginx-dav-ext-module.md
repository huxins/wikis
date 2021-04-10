# nginx-dav-ext-module

- [nginx-dav-ext-module](https://github.com/arut/nginx-dav-ext-module)
- [使用 nginx 搭建 WebDAV 服务器](https://www.binss.me/blog/build-webdav-server-by-nginx/)
- [fake PROPPATCH](https://github.com/arut/nginx-dav-ext-module/issues/52)

```bash
$ yum install libxslt-devel -y
$ wget https://nginx.org/download/nginx-1.16.1.tar.gz
$ wget https://github.com/arut/nginx-dav-ext-module/archive/v3.0.0.tar.gz
$ tar -xzvf nginx-1.16.1.tar.gz
$ tar -zxvf v3.0.0.tar.gz
$ cd nginx-1.16.1
$ ./configure \
    --prefix=/usr/local/nginx \
    --with-http_dav_module \
    --add-module=../nginx-dav-ext-module-3.0.0
$ make && make install
```

客户端使用

```powershell
# windows webdav
NET USE * https://test.lhcdn.com/ password /USER:huxins
```

服务端使用

```nginx
server {
    listen 443 ssl http2;
    server_name _;
    ssl_certificate conf/fullchain.cer;
    ssl_certificate_key conf/_.key;

    client_max_body_size 10240M;

    # rewrite URL to allow create directory
    location / {

        set $dest $http_destination;
        if (-d $request_filename) {
            rewrite ^(.*[^/])$ $1/;
            set $dest $dest/;
        }
        if ($request_method ~ (MOVE|COPY)) {
            more_set_input_headers 'Destination: $dest';
        }

        if ($request_method ~ MKCOL) {
            rewrite ^(.*[^/])$ $1/ break;
        }

        dav_methods PUT DELETE MKCOL COPY MOVE;
        dav_ext_methods PROPFIND OPTIONS;
        dav_access user:rw group:rw all:r;
        create_full_put_path  on;
        root /webdav;

        auth_basic "Restricted access";
        auth_basic_user_file conf/htpasswd.conf;

        limit_except GET {
            allow 0.0.0.0/0;
            deny  all;
        }
    }
}
```

没有PROPPATCH指令，用PROPFIND处理。

```nginx
proxy_method PROPFIND;
if ($request_method = PROPPATCH) {
    proxy_pass http://127.0.0.1;
}
```

