# pixiv 访问

## Host

```ini
210.140.131.220 www.pixiv.net
210.140.131.223 pixiv.net
210.140.131.147 source.pixiv.net
210.140.131.225 accounts.pixiv.net
210.140.131.145 imgaz.pixiv.net
210.140.131.159 d.pixiv.org
```

## 真·反代P站

### 域名准备

```
*.pixiv.example.com	对齐 *.pixiv.net
*.pximg.example.com 对齐 *.pximg.net
```

### 证书准备

准备多合一证书

### Nginx 配置

```nginx
# *.pixiv.lhcdn.com
server
{
    listen 443 ssl http2 reuseport;

    ssl_certificate conf.d/fullchain.cer;
    ssl_certificate_key conf.d/_.pximg.lhcdn.com.key;

    ssl_session_timeout      1d;
    ssl_session_cache        shared:SSL:50m;
    
    server_name ~^([^.]+)\.pixiv\.lhcdn\.com$;
    set $domain $1;

    resolver 8.8.8.8;
    
    if ($http_user_agent ~* "qihoobot|Baiduspider|Googlebot|Googlebot-Mobile|Googlebot-Image|Mediapartners-Google|Adsbot-Google|Feedfetcher-Google|Yahoo! Slurp|Yahoo! Slurp China|YoudaoBot|Sosospider|Sogou spider|Sogou web spider|MSNBot|ia_archiver|Tomato Bot|^$") {  
        return 403;
    }

    location ~ .*
    {
        proxy_set_header Host $domain.pixiv.net;
        proxy_set_header Referer "https://www.pixiv.net";
        proxy_cookie_domain pixiv.net pixiv.lhcdn.com;
        proxy_pass https://$domain.pixiv.net;
        proxy_set_header Accept-Encoding "";

        sub_filter "pixiv.net" "pixiv.lhcdn.com";
        sub_filter "pximg.net" "pximg.lhcdn.com";
        # 防止错误上报暴露站点
        sub_filter "js_error.php" "block_js_error";
        # 防止谷歌服务暴露站点，同时也可以加快网站加载
        sub_filter "www.google" "block_google";
        sub_filter_once off;
        sub_filter_types *;
        
        proxy_redirect https://accounts.pixiv.net/ https://accounts.pixiv.lhcdn.com/;
    }
}

# *.pximg.lhcdn.com
server
{
    listen 443 ssl http2;

    ssl_certificate conf.d/fullchain.cer;
    ssl_certificate_key conf.d/_.pximg.lhcdn.com.key;

    ssl_session_timeout      1d;
    ssl_session_cache        shared:SSL:50m;
    
    server_name ~^([^.]+)\.pximg\.lhcdn\.com$;
    set $domain $1;

    resolver 8.8.8.8;
    
    if ($http_user_agent ~* "qihoobot|Baiduspider|Googlebot|Googlebot-Mobile|Googlebot-Image|Mediapartners-Google|Adsbot-Google|Feedfetcher-Google|Yahoo! Slurp|Yahoo! Slurp China|YoudaoBot|Sosospider|Sogou spider|Sogou web spider|MSNBot|ia_archiver|Tomato Bot|^$") {  
        return 403;
    }

    location ~ .*
    {
        proxy_set_header Host $domain.pximg.net;
        proxy_set_header Referer "https://www.pixiv.net";
        proxy_pass https://$domain.pximg.net;
        proxy_set_header Accept-Encoding "";

        sub_filter "pixiv.net" "pixiv.lhcdn.com";
        sub_filter "pximg.net" "pximg.lhcdn.com";
        # 防止错误上报暴露站点
        sub_filter "js_error.php" "block_js_error";
        # 防止谷歌服务暴露站点，同时也可以加快网站加载
        sub_filter "www.google" "block_google";
        sub_filter_once off;
        sub_filter_types *;
    }
}
```



## Reference

- [[Pixiv] Nginx 真·反代P站 恢复直接访问](https://moe.best/technology/pixiv-proxy.html)
- [PIXIV网页版及客户端访问恢复指南](https://2heng.xin/2017/09/19/pixiv/)