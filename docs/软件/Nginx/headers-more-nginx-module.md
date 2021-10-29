# headers-more-nginx-module

添加、修改、清除请求/响应头。

```bash
$ wget https://nginx.org/download/nginx-1.16.1.tar.gz
$ wget https://github.com/openresty/headers-more-nginx-module/archive/v0.33.tar.gz
$ tar -xzvf nginx-1.16.1.tar.gz
$ tar -zxvf v0.33.tar.gz
$ cd nginx-1.16.1
$ ./configure \
    --prefix=/usr/local/nginx \
    --add-module=../headers-more-nginx-module-0.33
$ make && make install
```

该模块主要有4个指令：

- more_set_headers 用于添加、修改、清除响应头
- more_clear_headers 用于清除响应头
- more_set_input_headers 用于添加、修改、清除请求头
- more_clear_input_headers 用于清除请求头

```nginx
more_set_headers 'Server: my-server';
more_clear_headers 'Content-Type';
more_set_headers -t 'text/plain text/html' 'Content-Type: text/foo';
more_set_headers -s '400 404 500 503' -s 413 'Foo: Bar';
set $my_host 'my dog';
more_set_input_headers 'Host: $my_host';
more_set_input_headers -t 'text/plain' 'X-Foo: bah';
more_set_input_headers -r 'X-Foo: howdy';
```

