# Proxy

## polipo

- [polipo](https://www.irif.fr/~jch/software/polipo/)
- [配置你的polipo](https://ruiruigeblog.com/2017/01/01/%E9%85%8D%E7%BD%AE%E4%BD%A0%E7%9A%84polipo/)

安装

```bash
apt install polipo
```

配置文件

```ini
# /etc/polipo/config
# 父级SOCKS代理地址
socksParentProxy = "127.0.0.1:1081"
# 父级SOCKS代理类型
socksProxyType = socks5
# 父级HTTP代理地址
parentProxy = "host:port"
# 父级HTTP代理认证
parentAuthCredentials = "username:password"
# HTTP端口
proxyPort = 8123
proxyAddress = "0.0.0.0"
# 限制客户端IP
allowedClients = 127.0.0.1, ::1, 134.157.168.0/24, 2001:660:116::/48
# 设置密码
authCredentials = "username:password"
# 最大内存
chunkHighMark = 50331648
objectHighMark = 16384

serverMaxSlots = 64
serverSlots = 32
serverSlots1 = 32

logSyslog = true
logFile = /var/log/polipo/polipo.log
```

## privoxy

https://github.com/zfl9/gfwlist2privoxy

```bash
apt install privoxy
```

配置文件

```
# grep -v "^#" /etc/privoxy/config | grep -v "^$" > config.back
listen-address 0.0.0.0:8118
forward / 127.0.0.1:8080
forward-socks5 / 127.0.0.1:1080 .
```

## 3proxy

- [3proxy 使用指北](https://wsgzao.github.io/post/3proxy/)

## ccproxy

