# Imgur



```nginx
map $http_referer $allow_referer {
        default             0;
        ""                  1;
        "~2heng.xin"        1;
        "~\.google\."       1;
        "~\.baidu\."        1;
}
map $allow_referer $disallow_referer {
    0       1;
    1       "";
}

server {
    listen 443 ssl http2 reuseport;
    server_name tc.lhcdn.com; #绑定的域名
    
    root /usr/share/nginx/html;
    client_max_body_size 20m;
    
    resolver 8.8.8.8 8.8.4.4 valid=600s;
    resolver_timeout 10s;

    ssl_certificate conf.d/fullchain.cer;
    ssl_certificate_key conf.d/_.lhcdn.com.key;

    ssl_session_timeout      1d;
    ssl_session_cache        shared:SSL:50m;
    
    # 图片文件镜像
    location ^~ /imgur/ {
        proxy_pass https://i.imgur.com/;
        proxy_buffering off;

        # Headers
        proxy_set_header Referer "";
        proxy_set_header User-Agent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36";
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Upgrade "websocket";
        proxy_set_header Connection "Upgrade";
        
        # 取消下面的注释可以启用 Nginx 缓存
        #proxy_cache            STATIC;
        #proxy_cache_key $uri;
        #proxy_cache_valid 200 30d;
        #proxy_cache_use_stale error timeout invalid_header updating
        #                       http_500 http_502 http_503 http_504;
        #add_header X-Nginx-Cache $upstream_cache_status;
    }


	# API 镜像
    location ^~ /imgur-api/ {
		# 跨域，注意不要和前面的跨域策略冲突/重复
        #proxy_hide_header 'Access-Control-Allow-Origin';
        #add_header 'Access-Control-Allow-Origin' '*';
        #add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        #add_header 'Access-Control-Allow-Headers' 
        #           'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
        #add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';

		if ( $http_referer = "") { return 403; }
        if ( $disallow_referer ) { return 403; }
        
        proxy_pass https://api.imgur.com/;
        proxy_buffering off;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```



```html
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Imgur 上传示例</title>
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js"></script>
</head>
<body>
<!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
<form id="imgur">
<input type="file" class="imgur" accept="image/*" data-max-size="5000" />
</form>
<script>
    $("document").ready(function () {

        $('input[type=file]').on("change", function () {

            var $files = $(this).get(0).files;

            if ($files.length) {

                // Reject big files
                if ($files[0].size > $(this).data("max-size") * 1024) {
                    console.log("Please select a smaller file");
                    return false;
                }

                // Replace ctrlq with your own API key
                //var apiUrl = 'https://api.imgur.com/3/image';
                var apiUrl = 'https://tc.lhcdn.com/imgur-api/3/image';
                var apiKey = '98cd21cdfc58130';

                var formData = new FormData();
                formData.append("image", $files[0]);

                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": apiUrl,
                    "method": "POST",
                    "datatype": "json",
                    "headers": {
                        "Authorization": "Client-ID " + apiKey
                    },
                    "processData": false,
                    "contentType": false,
                    "data": formData,
                    beforeSend: function (xhr) {
                        console.log("上传中...");
                        $('body').append('<p>上传中...</p>');
                    },
                    success: function (res) {
                        var imgur_link = res.data.link.replace('https://i.imgur.com/',
                            'https://imgur.ihainan.me/');
                        console.log(res.data.link);
                        console.log(imgur_link);
                        $('body').append('<p>图片地址：' + imgur_link + '</p>');
                                $('body').append('<img src="' + imgur_link + '" />');
                            },
                            error: function () {
                                alert("上传失败");
                            }
                }
                $.ajax(settings).done(function (response) {
                    console.log("Done");
                });
            }
        });
    });
</script>
</body>
</html>
```



## Reference

- [JavaScript + imgur API 上传图片](https://2heng.xin/2018/06/06/javascript-upload-images-with-imgur-api/)