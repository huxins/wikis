# scp

```bash
# 上传文件
scp /path/filename username@servername:/path/
# 下载文件
scp username@servername:/path/filename /path/
# 上传目录
scp -r local_dir username@servername:remote_dir
# 下载目录
scp -r username@servername:/var/www/remote_dir /var/www/local_dir
```

