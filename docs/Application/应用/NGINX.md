# Nginx

## NGINX 安装

### Reference

- [initscripts](https://www.nginx.com/resources/wiki/start/topics/examples/initscripts/)
- [linux_packages](http://nginx.org/en/linux_packages.html)
- [Nginx 中文官方文档](http://shouce.jb51.net/nginx-doc/)

### CentOS 7

#### 包管理器安装

#####  RPM

```sh
rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
rpm -ivh http://nginx.org/packages/mainline/centos/7/x86_64/RPMS/nginx-1.17.9-1.el7.ngx.x86_64.rpm
yum info nginx
yum install nginx
```

#### 编译安装

#####  网络安装

1. 解决依赖关系和添加用户

```sh
# 安装依赖项
yum install pcre pcre-devel zlib zlib-devel openssl openssl-devel -y
# 添加用户
useradd www -s /sbin/nologin -M
```

2. 下载安装

```sh
wget https://mirrors.163.com/nginx/debian/pool/nginx/n/nginx/nginx_1.12.2.orig.tar.gz
tar -zxvf nginx_1.12.2.orig.tar.gz
cd nginx-1.12.2
./configure --user=www --group=www --prefix=/usr/local/nginx-1.12.2 --with-http_stub_status_module --with-http_ssl_module
make && make install
ln -s /usr/local/nginx-1.12.2/ /usr/local/nginx
```

3. 添加配置文件

```sh
mkdir /etc/nginx
cp /usr/local/nginx/conf/* /etc/nginx
```

#####  本地安装

1. 安装依赖的库和工具

```sh
yum install -y gcc gcc-c++
```

2. 手动下载安装包和必要的组件包

nginx必需的三个包：`zlib` `pcre` `openssl`

- [zlib](https://www.zlib.net/) 压缩相关库.
- [pcre](https://sourceforge.net/projects/pcre/files/pcre/) 正则解析库. [镜像下载](https://sourceforge.mirrorservice.org/p/pc/pcre/pcre/)
- [openssl](https://github.com/openssl/openssl) https协议相关库.

nginx安装包下载地址: [https://nginx.org/en/download.html](https://nginx.org/en/download.html)

```sh
wget https://www.zlib.net/zlib-1.2.11.tar.gz
wget https://nchc.dl.sourceforge.net/project/pcre/pcre/8.41/pcre-8.41.tar.gz
wget https://codeload.github.com/openssl/openssl/tar.gz/OpenSSL_1_0_2l -O openssl-1.0.2l.tar.gz
wget https://nginx.org/download/nginx-1.12.2.tar.gz
```

安装包的版本分别为：`zlib-1.2.11.tar.gz` `pcre-8.41.tar.gz` `openssl-1.0.2l.tar.gz` `nginx-1.12.2.tar.gz`

下载好所有的包后，把所有安装包放到同一目录，解压：

```sh
tar -zxvf zlib-1.2.11.tar.gz
tar -zxvf pcre-8.41.tar.gz
tar -zxvf openssl-1.0.2l.tar.gz
tar -zxvf nginx-1.12.2.tar.gz
mv openssl-OpenSSL_1_0_2l/ openssl-1.0.2l
```

进入到nginx的解压目录，输入以下命令进行配置，这里设置的安装目录为 `/usr/local/nginx` ，要严格注意每个附加的三个包对应的文件夹名字不要写错了，不然安装不成功。

```sh
cd nginx-1.12.2
./configure --prefix=/usr/local/nginx \
--with-http_ssl_module \
--with-http_flv_module \
--with-http_stub_status_module \
--with-http_gzip_static_module \
--with-pcre=../pcre-8.41 \
--with-zlib=../zlib-1.2.11 \
--with-openssl=../openssl-1.0.2l
make && make install
```

### Debian Ubuntu Deepin

#### 编译安装

```sh
apt install build-essential libtool -y
apt install openssl libssl-dev libpcre3 libpcre3-dev zlib1g-dev -y
wget http://nginx.org/download/nginx-1.11.3.tar.gz
tar -zxvf nginx-1.11.3.tar.gz
./configure
make
make install
```

需要修改 nginx-1.11.3/objs/Makefile 中，找到 -Werror 并去掉 在重新make即可。 -Werror 的作用是它要求GCC将所有的警告当成错误进行处理 所以导致错误输出 并不能进行下一步。

### Windows

1、下载 [WinSW](https://github.com/winsw/winsw/releases/download/v2.1.2/WinSW.NET4.exe) 改文件名为 nginxservice.exe  2、新建 nginxservice.xml   3、nginxservice.exe install

```xml
<service>
  <id>nginx</id>
  <name>nginx</name>
  <description>nginx</description>
  <logpath>D:\leanway\nginx-1.9.6</logpath>
  <logmode>roll</logmode>
  <depend/>
  <executable>D:\leanway\nginx-1.9.6\nginx.exe</executable>
  <stopexecutable>D:\leanway\nginx-1.9.6\nginx.exe -s stop</stopexecutable>
</service>
```



## Modules 安装与使用

### Reference

- [Nginx安装echo模块](https://www.cnblogs.com/52fhy/p/10166333.html)
- [nginx-extras](https://www.getpagespeed.com/)

### 模块安装

#### 编译静态模块

以 `echo-nginx-module` 为例

```sh
wget http://nginx.org/download/nginx-1.16.1.tar.gz
wget https://github.com/openresty/echo-nginx-module/archive/v0.61.tar.gz
tar -zxvf nginx-1.16.1.tar.gz
tar -zxvf v0.61.tar.gz

./configure \
--prefix=/usr/local/nginx \
--with-http_stub_status_module \
--with-http_ssl_module \
--with-http_v2_module \
--with-http_realip_module \
--with-http_sub_module \
--with-http_gzip_static_module \
--add-module=../echo-nginx-module-0.61

make -j2
make install
```

注意：**重新编译 `Nginx` 二进制，`Nginx` 需要停止重启。**而普通配置更新则 reload 即可：

```sh
kill -QUIT `cat /usr/local/nginx/logs/nginx.pid` && /usr/local/nginx/sbin/nginx
```

测试

```nginx
location /hello_echo { 
    default_type 'text/plain'; 
    echo "hello, echo!";
}
```

`echo-nginx-module` 模块不仅仅是提供 `echo` 这么简单的指令，还有其它的指令，详见：[content-handler-directives](https://github.com/openresty/echo-nginx-module#content-handler-directives)

#### 编译动态模块

`echo-nginx-module` 支持以动态模块方式加载，详见：[installation](https://github.com/openresty/echo-nginx-module#installation) 。Nginx版本需要 `>=1.9.11` 。

```sh
./configure \
--prefix=/usr/local/nginx \
--with-http_stub_status_module \
--with-http_ssl_module \
--with-http_realip_module \
--with-http_sub_module \
--with-http_gzip_static_module  \
--with-compat \ # 动态加载
--with-mail=dynamic \ # 源码模块
--add-dynamic-module=../echo-nginx-module-0.61 # 第三方模块

make -j2
make install
```

相比静态编译，参数 `--add-module` 改成了 `--add-dynamic-module`。

编译成功后，会把模块安装在 `nginx/modules/` 目录。

```sh
$ ls /usr/local/nginx/modules/
ngx_http_echo_module.so
```

接下来我们需要在 `nginx.conf` 配置中加入以下两行，实现动态调用模块：

```nginx
load_module /usr/local/nginx/modules/ngx_http_echo_module.so;
```

### 模块介绍

#### http_ssl_module

HTTPS 基础配置采取的默认加密算法是 SHA-1，这个算法非常脆弱，为此，主流的 HTTPS 配置方案应该避免 SHA-1，可以使用 [迪菲-赫尔曼密钥交换（D-H，Diffie–Hellman key exchange）](https://zh.wikipedia.org/wiki/迪菲-赫爾曼密鑰交換)方案。

- [Nginx 配置 HTTPS 服务器](https://aotu.io/notes/2016/08/16/nginx-https/index.html)

```nginx
worker_processes auto;

http {

    #配置共享会话缓存大小，视站点访问情况设定
    ssl_session_cache   shared:SSL:10m;
    #配置会话超时时间
    ssl_session_timeout 10m;

    server {
        listen              443 ssl;
        server_name         www.example.com;
        
        #设置长连接
        keepalive_timeout   70;
        
        #证书文件
        ssl_certificate     www.example.com.crt;
        #私钥文件
        ssl_certificate_key www.example.com.key; 
        
        #...
```

#### fancy_index

- [fancy_index](https://www.nginx.com/resources/wiki/modules/fancy_index/)

```sh
git clone https://github.com/aperezdc/ngx-fancyindex
git clone https://github.com/cfsego/file-md5
./configure --user=www --group=www \
    --prefix=/usr/local/nginx-1.12.2 \
    --with-http_stub_status_module \
    --with-http_ssl_module \
    --add-dynamic-module=../ngx-fancyindex \ # 添加fancyindex模块
    --add-dynamic-module=../file-md5
make && make install
```

fancyindex 提供了自定义页头和页脚，分别通过指令 `fancyindex_header` 和 `fancyindex_footer` 完成。

```nginx
location /ftp/ {
    alias /data/software/nginx/;
    fancyindex on; # 使用fancyindex
    fancyindex_exact_size off; # 不显示精确大小
    fancyindex_footer "fancy_footer.html"; # 指定页脚页面
    fancyindex_ignore "static"; # 隐藏
    add_header Content-MD5 $file_md5;
}
```

- [增强nginx的autoindex功能(文件排序，文件MD5值)](http://www.calmkart.com/?p=206) [GitHub](https://github.com/calmkart/nginx_autoindex-/)

MD5: 

```nginx
location / {
	# First attempt to serve request as file, then
	# as directory, then fall back to displaying a 404.
	fancyindex on;
	fancyindex_exact_size off;
	fancyindex_ignore "static";
	add_header Content-MD5 $file_md5;
}
```

在需要分享的路径创建文件./static/md5.js

- 主题美化

[Nginx-Fancyindex-Theme](https://github.com/TheInsomniac/Nginx-Fancyindex-Theme)

[TheInsomniac-Nginx-Fancyindex-Theme](https://gitee.com/8ox86/TheInsomniac-Nginx-Fancyindex-Theme)

[使用nginx fancyindex 模块让网站秒变网盘下载站](https://rom.nanodm.net/router/dev/%E4%BD%BF%E7%94%A8nginx%20fancyindex%20%E6%A8%A1%E5%9D%97%E8%AE%A9%E7%BD%91%E7%AB%99%E7%A7%92%E5%8F%98%E7%BD%91%E7%9B%98%E4%B8%8B%E8%BD%BD%E7%AB%99.html)

#### ngx_http_limit_conn_module

限制并发访问，默认安装的内置模块，被用来限制在某一个关键字维度上的最大并发数量，通常情况下，这个维度被设置为访问者的IP。在计算的一个连接当前的并发数量时，不是一连接就会被计数，而是当所有请求头都被读完才计数。

```nginx
http {
    limit_conn_zone $binary_remote_addr zone=addr:10m
    server {
        listen       80;
        server_name  d2.dyxmq.cn;
        limit_conn   addr 3;
        limit_rate   1m; # 限制访问速率1M/s
    
        location / {
            root   html;
            index  index.html index.htm;
        }
        
        access_log logs/access.log main;
        error_log logs/error.log;
    }
}
```

#### ngx_http_limit_req_module

限制访问频率

```nginx
http {
    # 以请求IP作为KEY，设置访问频率为1秒1次请求
    limit_req_zone $binary_remote_addr zone=addr:10m rate=1r/s;
    server {
        listen       80;
        server_name  d2.dyxmq.cn;
        # 设置队列为5，最多有5个连接等待，超出的不继续等待
        limit_req zone=addr burst=5 nodelay;
        limit_rate 1m;
    
        location / {
            root   html;
            index  index.html index.htm;
        }
 
        access_log logs/access.log main;
        error_log logs/error.log;
    }
}
```

#### headers-more-nginx-module

- [Nginx里Header修改](https://www.cnblogs.com/52fhy/p/10166352.html)

headers-more-nginx-module 模块用于添加、修改或清除 请求/响应头.

```sh
wget http://nginx.org/download/nginx-1.16.1.tar.gz
wget https://github.com/openresty/headers-more-nginx-module/archive/v0.33.tar.gz
tar -xzvf nginx-1.16.1.tar.gz
tar -zxvf v0.33.tar.gz
cd nginx-1.16.1

./configure --prefix=/usr/local/nginx \
     --add-dynamic-module=../headers-more-nginx-module-0.33
     
make -j2
make install
```

该模块主要有4个指令：

- more_set_headers 用于添加、修改、清除响应头
- more_clear_headers 用于清除响应头
- more_set_input_headers 用于添加、修改、清除请求头
- more_clear_input_headers 用于清除请求头

```nginx
 # set the Server output header
 more_set_headers 'Server: my-server';

 # set and clear output headers
 location /bar {
     more_set_headers 'X-MyHeader: blah' 'X-MyHeader2: foo';
     more_set_headers -t 'text/plain text/css' 'Content-Type: text/foo';
     more_set_headers -s '400 404 500 503' -s 413 'Foo: Bar';
     more_clear_headers 'Content-Type';

     # your proxy_pass/memcached_pass/or any other config goes here...
 }

 # set output headers
 location /type {
     more_set_headers 'Content-Type: text/plain';
     # ...
 }

 # set input headers
 location /foo {
     set $my_host 'my dog';
     more_set_input_headers 'Host: $my_host';
     more_set_input_headers -t 'text/plain' 'X-Foo: bah';

     # now $host and $http_host have their new values...
     # ...
 }

 # replace input header X-Foo *only* if it already exists
 more_set_input_headers -r 'X-Foo: howdy';
```

#### nginx-dav-ext-module

- [使用 nginx 搭建 WebDAV 服务器](https://www.binss.me/blog/build-webdav-server-by-nginx/)
- [WebDAV安装及开机启动脚本](https://moeclub.org/2017/03/08/13/)

```sh
apt -y install libxslt-dev
yum -y install libxslt-devel
wget http://nginx.org/download/nginx-1.16.1.tar.gz
wget https://github.com/arut/nginx-dav-ext-module/archive/v3.0.0.tar.gz
tar -xzvf nginx-1.16.1.tar.gz
tar -zxvf v3.0.0.tar.gz
cd nginx-1.16.1

./configure --prefix=/usr/local/nginx \
--with-http_dav_module \
--add-module=../nginx-dav-ext-module-3.0.0
     
make -j2
make install
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
    server_name test.lhcdn.com;
    ssl_certificate conf/fullchain.cer;
    ssl_certificate_key conf/_.lhcdn.com.key;

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



#### ngx_http_auth_basic_module

- [tengine](http://tengine.taobao.org/nginx_docs/cn/docs/http/ngx_http_auth_basic_module.html)

```nginx
location / {
    auth_basic           "closed site";
    auth_basic_user_file conf/htpasswd;
}
```

htpasswd  [在线生成](https://tool.oschina.net/htpasswd)

```sh
yum -y install httpd-tools
htpasswd -c ./passwd username
```

## Example

- [Nginx-替换response header中的Content-Disposition值](https://galaxyyao.github.io/2019/06/17/Nginx-%E6%9B%BF%E6%8D%A2response%20header%E4%B8%AD%E7%9A%84Content-Disposition%E5%80%BC/)
- [NGINX的奇淫技巧](https://segmentfault.com/a/1190000002481473)

### Proxy

#### CloudFlare

```nginx
server{
    listen 80;
    server_name 161.117.251.229;
    access_log  /var/log/nginx/update.mes.access.log;
    
    default_type 'text/plain';
    set $is_download_file 0;
    if ($request_uri ~* "\.(zip|war|html)$") {
        set $is_download_file 1;
    }
    if ($request_uri !~ "(/)$") {
        set $is_download_file 0$is_download_file;
    }
    if ( $is_download_file = 00 ){
        rewrite ^ http://161.117.251.229$request_uri/ last;
    }

    location / { 
        proxy_pass https://1.0.0.1;
        proxy_set_header Host yun-qq.lhcdn.com;

        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header REMOTE-HOST $remote_addr;

        proxy_ssl_name yun-qq.lhcdn.com;
        proxy_ssl_server_name on;

        sub_filter_once off;
        sub_filter_types text/html;
        sub_filter yun-qq.lhcdn.com update.mes.leanway.cn;
    }
}
```

#### GitHub

```nginx
upstream github {
    server 192.30.253.112:443;
    server 192.30.253.113:443;
}

server {
    listen 443 ssl http2 reuseport;
    listen 80 reuseport;
    server_name test.lhcdn.com; #绑定的域名
    
    root /usr/share/nginx/html;
    
    resolver 8.8.8.8 8.8.4.4 valid=600s;
    resolver_timeout 10s;

    ssl_certificate conf.d/fullchain.cer;
    ssl_certificate_key conf.d/_.lhcdn.com.key;

    ssl_session_timeout      1d;
    ssl_session_cache        shared:SSL:50m;

    if ($http_user_agent ~* "qihoobot|Baiduspider|Googlebot|Googlebot-Mobile|Googlebot-Image|Mediapartners-Google|Adsbot-Google|Feedfetcher-Google|Yahoo! Slurp|Yahoo! Slurp China|YoudaoBot|Sosospider|Sogou spider|Sogou web spider|MSNBot|ia_archiver|Tomato Bot") #防止搜索引擎收录
    {
        return 403;
    }
    
    location ~* .(conf|sql|bak)$ {
        deny all;
    }
    
    if ($request_method !~ ^(GET|HEAD|POST)$ ) {
        return    444;
    }

    location ~ ^/(repo\.mongodb\.com|repo\.mysql\.com|www\.debian\.org|deb\.debian\.org|security\.debian\.org|cdn-fastly\.deb.debian\.org|nginx\.org|github\.com|codeload\.github\.com|yum\.dockerproject\.org)(\/.*)$ {
        #需要代理的域名，正则，避免有人用来代理某些被墙的网站，导致反向代理被gfw误杀。
        proxy_set_header  X-Real-IP  $remote_addr;
        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
        #将用户ip放到请求协议头内，一般用来告诉后端服务器，是谁访问的网站。
        proxy_set_header Accept-Encoding "";
        #告诉被代理网站，不要压缩内容，否则sub_filter会失效。
        proxy_set_header Connection "";
        proxy_http_version 1.1;
        proxy_connect_timeout    10s;
        proxy_read_timeout       10s;
        proxy_set_header Host $1;
        proxy_redirect ~^(http:\/\/|https:\/\/)?(.*)$ $1$server_name/$2;
        #将原301跳转，重新跳转回本域名。
        
        sub_filter 'src="/' 'src="/$1/';
        sub_filter 'src="http://$1' 'src="http://$server_name/$1';
        sub_filter 'src="https://$1' 'src="https://$server_name/$1';
        sub_filter 'src="//$1' 'src="//$server_name/$1';
        #替换网页内链接地址。
        
        sub_filter 'href="/' 'href="/$1/';
        sub_filter 'href="http://$1' 'href="http://$server_name/$1';
        sub_filter 'href="https://$1' 'href="https://$server_name/$1';
        sub_filter 'href="//$1' 'href="//$server_name/$1';
        #同上

        sub_filter 'action="/' 'action="/$1/';
        sub_filter 'action="http://$1' 'action="http://$server_name/$1';
        sub_filter 'action="https://$1' 'action="https://$server_name/$1';
        sub_filter 'action="//$1' 'action="//$server_name/$1';
        #同上

        sub_filter_once off;
        #替换多次

        proxy_hide_header Strict-Transport-Security;
        #隐藏被代理网站返回回来的协议头“Strict-Transport-Security”，避免启动hsts，具体搜索引擎hsts
        
        set $query_mark "";
        if ($query_string != "") {
            set $query_mark "?${query_string}";
        }
        #因为nginx并不匹配url后面的?参数，而是使用“$query_string”储存。
        proxy_pass $scheme://$1$2${query_mark};
        #$scheme是当前访问的协议,http、https

        #proxy_pass https://github;
    }
}
```

### Rewrite Return

#### Snippet

```nginx
rewrite ^(.*)$ https://$host$1;
rewrite ^ https://$host$request_uri? permanent;
return 301 $scheme://$host$request_uri;

# 防盗链
location ~* \.(gif|jpg|swf)$ {
  valid_referers none blocked start.igrow.cn sta.igrow.cn;
  if ($invalid_referer) {
    #防盗链
    rewrite ^/ http://$host/logo.png;
}
```

#### IP

```nginx
location / {
    default_type text/plain;
    return 200 $remote_addr;
}

location /json {
    default_type application/json;
    return 200 "{\"ip\":\"$remote_addr\"}";
}
```



### Stream

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

## 匹配规则

### location 匹配规则

```nginx
location [=|~|~*|^~] /uri/ {...}
```

| 符号 | 含义                                                         |
| ---- | ------------------------------------------------------------ |
| =    | 表示精确匹配                                                 |
| ^~   | 表示 URI 以某个常规字符串开头。Nginx 不对 URL 做编码，因此请求为 /static/20%/aa，可以被 ^~ /static/ /aa 匹配到 |
| ~    | 表示区分大小写的正则匹配                                     |
| ~*   | 表示不区分大小写的正则匹配                                   |
| /    | 通用匹配，任何请求都会匹配                                   |

多个 location 配置的情况下匹配顺序为：

- 首先匹配 =
- 其次匹配 ^~
- 其次是按文件中顺序的正则匹配
- 最后是交给 /
- 当有匹配成功时候，停止匹配，按当前匹配规则处理请求

### server_name 参数配置

1. 确切的server_name匹配
2. 以*通配符开始的最长字符串
3. 以*通配符结束的最长字符串

注意: 通配符名字只可以在名字的起始处或结尾处包含一个星号，并且星号与其他字符之间用点分隔。所以，`www.*.example.org` 和 `w*.example.org` 都是非法的。

有一种形 如“.example.org”的特殊通配符，它可以既匹配确切的名字“example.org”，又可以匹配一般的通配符名字“*.example.org”。

4. 匹配正则表达式

为了使用正则表达式，虚拟主机名必须以 `波浪线“~”` 起始否则该名字会被认为是个确切的名字

`~^([^.]+)\.example\.com>   *.example.com`

