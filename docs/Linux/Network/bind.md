# bind

- [BIND 9](https://www.isc.org/download/)

安装

```bash
apt-get install dnsutils
yum install bind-utils
```

nslookup

```bash
# 验证是否劫持
nslookup -qt=A whether.114dns.com 114.114.114.114
# TCP查询
nslookup -vc www.baidu.com 127.0.0.1
```

dig

```bash
# 逆向域名查询
dig -x 119.29.29.29 +short
# TCP查询
dig @208.67.222.222 -p 5353 -t a baidu.com +short +tcp
```

