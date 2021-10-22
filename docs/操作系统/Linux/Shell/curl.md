# curl

- [curl网站开发指南](https://www.ruanyifeng.com/blog/2011/09/curl.html)
- [curl man](https://curl.se/docs/manpage.html)

## basic

```bash
# 下载文件
curl -O http://man.linuxde.net/text.iso
# 下载文件并重命名
curl -o test.iso http://man.linuxde.net/text.iso
# 断点续传
curl -O -C -URL http://man.linuxde.net/text.iso
# 限速下载
curl --limit-rate 50k -O http://man.linuxde.net/text.iso
# 显示响应头部信息
curl -I http://man.linuxde.net/text.iso
# 认证
curl -u magina:123456 -O http://res.yinnote.com/xxx.zip
# 跳转
curl -L --max-redirs 1 www.sina.com
# 显示通信过程
curl -v www.sina.com
# 指定解析地址
curl --connect-to www.google.com::122.114.78.210: https://www.google.com/
curl --resolve www.google.com:443:122.114.78.210 https://www.google.com/
```

## form

```bash
# get
curl example.com/form.cgi?data=xxx
# post
curl -X POST --data "data=xxx" example.com/form.cgi
```


