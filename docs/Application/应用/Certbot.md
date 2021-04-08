# Certbot

## 证书申请

以 [Buypass Go SSL](https://www.buypass.com/ssl/resources/go-ssl-technical-specification) 为例

```sh
wget https://dl.eff.org/certbot-auto
chmod a+x certbot-auto

# 签发命令
./certbot-auto register -m 'YOUR_EMAIL' --agree-tos --server 'https://api.buypass.com/acme/directory'
./certbot-auto certonly --standalone --email '邮箱' -d '域名' --server 'https://api.buypass.com/acme/directory'
```



## Let’s Encrypt

```sh
wget https://dl.eff.org/certbot-auto
chmod a+x certbot-auto
./certbot-auto
# 如有错误，可执行
yum -y install httpd httpd-devel
```

生成证书前，需要将域名解析到解析到服务器上，否则生成失败。

```sh
./certbot-auto certonly --standalone -d somecolor.cc -d www.somecolor.cc -d api.somecolor.cc
```

命令执行过程中

需要填写你的邮箱 ，输入邮箱回车。

同意TOS条款 ，输入 Y 表示同意，回车。

还有一个同意分享邮箱，输入Y 回车。

生成成功，可到目录 `/etc/letsencrypt/live/`  查看我们的证书了！

```nginx
ssl_certificate /etc/letsencrypt/live/somecolor.cc/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/somecolor.cc/privkey.pem;
```

自动续期

```sh
#手动续签
./certbot-auto renew --dry-run
#用Cron自动续签
./certbot-auto renew --quiet
```



## Reference

- [官网](https://certbot.eff.org/)
- [GitHub](https://github.com/certbot/certbot)