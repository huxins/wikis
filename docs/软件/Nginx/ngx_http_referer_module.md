# ngx_http_referer_module

```nginx
# 防盗链
location ~* \.(gif|jpg|swf)$ {
  valid_referers none blocked start.igrow.cn sta.igrow.cn;
  if ($invalid_referer) {
    rewrite ^/ http://$host/logo.png;
}
```

