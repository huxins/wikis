# ngx-fancyindex

- [Nginx Fancy Index module](https://github.com/aperezdc/ngx-fancyindex)
- [Fancy Index Wiki](https://www.nginx.com/resources/wiki/modules/fancy_index/)
- [增强nginx的autoindex功能](http://www.calmkart.com/?p=206)

## 编译

```bash
$ git clone --depth=1 https://github.com/aperezdc/ngx-fancyindex
$ git clone --depth=1 https://github.com/cfsego/file-md5
$ ./configure \
    --prefix=/usr/local/nginx \
    --with-http_stub_status_module \
    --with-http_ssl_module \
    --add-module=../ngx-fancyindex \
    --add-module=../file-md5
$ make && make install
```

自定义页头和页脚，分别通过指令 `fancyindex_header` 和 `fancyindex_footer` 完成。

```nginx
location / {
    root /data;
    fancyindex on;
    fancyindex_exact_size off; #不显示精确大小
    fancyindex_ignore "static"; #隐藏文件夹
    add_header Content-MD5 $file_md5;
}
```

## MD5

修改 ngx-fancyindex/template.h 文件

```html
<!-- 插入script -->
"<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\">"
"</script>"
"<script src=\"/static/md5.js\">"
"</script>"
<!-- 修改页面表格宽度 -->
"<tr>"
"<th style=\"width:30%\"><a href=\"?C=N&O=A\">File Name</a>&nbsp;<a href=\"?C=N&O=D\">&nbsp;&darr;&nbsp;</a></th>"
"<th style=\"width:35%\"><a href=\"?C=S&O=A\">File Size</a>&nbsp;<a href=\"?C=S&O=D\">&nbsp;&darr;&nbsp;</a></th>"
"<th style=\"width:25%\"><a href=\"?C=M&O=A\">Date</a>&nbsp;<a href=\"?C=M&O=D\">&nbsp;&darr;&nbsp;</a></th>"
"</tr>"
```

static/md5.js

```javascript
$(document).ready(function(){
    var current_index = 1;
    function get_md5(){
        if(current_index==$("tr").length){
            return;
        }

        var url = $("tr")[current_index].childNodes[0].childNodes[0].href;
        $.ajax({
            url: url,           
            type: "HEAD",
            complete: function(jqXHR, textStatus) {
                var file_size = $("tr")[current_index].childNodes[1].childNodes[0].data;     
                var md5 = jqXHR.getResponseHeader("Content-MD5");
                console.log(jqXHR.getAllResponseHeaders());
                if(md5!=null && file_size!="-"){
                    $("tr")[current_index].childNodes[1].innerHTML += ("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"+"[md5:"+md5+"]");
                }
                current_index++;
                get_md5();
            }
        });
    }
    get_md5();
});
```

