# OneDrive

## 应用注册

- https://apps.dev.microsoft.com/#/appList
- https://portal.azure.cn/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade

重定向URL

```http
http://localhost/authorization_code
```

## 反向代理

- [反向代理 FODI 实现高速下载 OneDrive](https://niconiconi.cc/blog/202.html)

```nginx
server
{
    listen 80;
    listen 443 ssl http2;
    server_name yours.domainname.com;#把这里改成你的站点域名（不能和FODI前端一样！）
    
    ssl_certificate    /usr/share/nginx/ssl/pem.crt;#修改成自己的ssl证书(PEM格式)的存放位置
    ssl_certificate_key    /usr/share/nginx/ssl/ssl.key;#修改成自己的ssl密钥(KEY)的存放位置
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
location  ~* \.(php|jsp|cgi|asp|aspx)$
    {
        proxy_pass https://yours.sharepoint.com;#把这里改成使用宝塔面板步骤3、步骤4的截选出的链接
        proxy_set_header Host yours.sharepoint.com;#把这里改成上面链接去掉https://
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header Range $http_range;#此项感谢评论区超音速的提醒
    }
    location /
    {
        proxy_pass https://yours.sharepoint.com;#把这里改成使用宝塔面板步骤3、步骤4的截选出的链接
        proxy_set_header Host yours.sharepoint.com;#把这里改成上面链接去掉https://
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header Range $http_range;#此项感谢评论区超音速的提醒
        
        add_header X-Cache $upstream_cache_status;
        add_header Cache-Control no-cache;
        expires 12h;
    }
}
```

缓存设置

```nginx
#↓↓↓↓↓以下是小缓存设置↓↓↓↓
proxy_buffering on;
proxy_buffer_size 4k;
proxy_buffers 8 2M;
proxy_busy_buffers_size 10M;
proxy_max_temp_file_size 0;
#↓↓↓↓↓↓↓↓以下是0缓存设置↓↓↓
proxy_buffering off;
```



## 文件列表

### FODI

- [GitHub](https://github.com/vcheckzen/FODI)
- [安装方法](https://logi.im/back-end/fodi-on-cloudflare.html)

- 使用代理

在 `Workers` 代码编辑界面，添加如下内容到 `const ONEDRIVE_REFRESHTOKEN` 的下面

```javascript
const ORIGIN_URL = "https://yours.sharepoint.com"    //填入上面截选出的链接
const PROXY_URL = "https://yours.domainname.com"    //填入你创建的
```

然后翻到代码最下面，找到两个 `return JSON.stringify` ，在最下面的那个的最后添加代码（注意要有前面的点）

```javascript
.replace(RegExp(ORIGIN_URL,"g"),PROXY_URL)
```

### OneIndex

- [GitHub](https://github.com/donwa/oneindex)

- 使用代理

  1. 打开安装好的 oneindex 目录 /lib/onedrive.php
  2. 找到
  
  ```php
  foreach((array)$data['value'] as $item){
                  //var_dump($item);
                  $items[$item['name']] = array(
                      'name'=>$item['name'],
                      'size'=>$item['size'],
                      'lastModifiedDateTime'=>strtotime($item['lastModifiedDateTime']),
                      'downloadUrl'=>$item['@microsoft.graph.downloadUrl'],
                      'folder'=>empty($item['folder'])?false:true
                  );
              }
  ```
  
  3. 修改其中的 `'downloadUrl'=>$item['@microsoft.graph.downloadUrl']`, 最后如下
  
  ```php
  foreach((array)$data['value'] as $item){
                  //var_dump($item);
                  $items[$item['name']] = array(
                      'name'=>$item['name'],
                      'size'=>$item['size'],
                      'lastModifiedDateTime'=>strtotime($item['lastModifiedDateTime']),
                      'downloadUrl'=>str_ireplace("截取的链接","反代的链接",$item['@microsoft.graph.downloadUrl']),
                      'folder'=>empty($item['folder'])?false:true
                  );
              }
  ```
  
### zfile

- [zfile](https://github.com/zhaojun1998/zfile)

  

