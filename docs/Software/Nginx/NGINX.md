# Nginx

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

