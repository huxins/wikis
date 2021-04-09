# ngx_http_log_module

- [Module ngx_http_log_module](https://nginx.org/en/docs/http/ngx_http_log_module.html)

## access log

```nginx
access_log /var/log/nginx/access.log combined buffer=32k gzip flush=1m;
```

## log format

```nginx
log_format combined '$remote_addr - $remote_user [$time_local] '
                    '"$request" $status $body_bytes_sent '
                    '"$http_referer" "$http_user_agent"';
```

## variables

日志格式可以包含公共变量，以及仅在写入日志时才存在的变量：

| 变量                  | 含义                                                         |
| --------------------- | ------------------------------------------------------------ |
| $bytes_sent           | 发送给客户端的总字节数                                       |
| $body_bytes_sent      | 发送给客户端的字节数，不包括响应头的大小                     |
| $connection           | 连接序列号                                                   |
| $connection_requests  | 当前通过连接发出的请求数量                                   |
| $msec                 | 日志写入时间，单位为秒，精度是毫秒                           |
| $pipe                 | 如果请求是通过 http 流水线发送，则其值为 "p"，否则为 “."     |
| $request_length       | 请求长度（包括请求行，请求头和请求体）                       |
| $request_time         | 请求处理时长，单位为秒，精度为毫秒，从读入客户端的第一个字节开始，直到把最后一个字符发送张客户端进行日志写入为止 |
| $status               | 响应状态码                                                   |
| $time_iso8601         | 标准格式的本地时间，形如 "2017-05-24T18:31:27+08:00"         |
| $time_local           | 通用日志格式下的本地时间，形如 "24/May/2017:18:31:27 +0800"  |

