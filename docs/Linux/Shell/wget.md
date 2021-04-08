# wget

```bash
# 下载文件
wget http://www.linuxde.net/text.iso
# 下载文件并重命名
wget -O rename.zip http://www.linuxde.net/text.iso
# 后台下载
wget -b http://www.linuxde.net/testfile.zip
# 断点续传
wget -c http://www.linuxde.net/text.iso
# 限速下载
wget --limit-rate=50k http://www.linuxde.net/text.iso
# 显示响应头部信息
wget --server-response http://www.linuxde.net/test.iso
# 认证
wget --http-user=magina --http-passwd=123456 http://res.yinnote.com/xxx.zip
```

