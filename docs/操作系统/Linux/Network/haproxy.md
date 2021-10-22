# haproxy

- [解决 Haproxy 用 Systemd 启动失败的问题](https://www.solarck.com/systemd-wait-network-online.html)

```shell
# 查看最近一次启动中 haproxy 的日志
journalctl -b -0 -u haproxy
# 在 haproxy 配置文件的 backend 段中，使用了域名而不是 IP，导致解析失败。
# 已经指定了 haproxy 的启动在 network 之后，从 network 的服务中找日志
journalctl -b -0 -u NetworkManager
```

对比两段日志的时间，原来虽然 haproxy 启动在 network 之后，但是 network 刚刚启动 haproxy 就开始启动，而 network 的启动内容比较多，还有很多网络通信，可能完全启动完需要一点时间。haproxy 的启动时间比 dhcp 启动要早了 2 秒，这时无法进行 DNS 解析，所以就会造成启动失败

**解决方法**

让 haproxy 在 network 完全启动后再启动

替换haproxy.service中的After和Wants字段，用network-online.target替换network.target

```ini
After=network-online.target
Wants=network-online.target
```

启动一个自带的网络等待服务

```shell
sudo systemctl enable NetworkManager-wait-online.service
```

如果你是使用systemd-network来管理网络服务，那么需要启动另外一个服务

```shell
sudo systemctl enable systemd-networkd-wait-online.service
```

重启后，一切问题都解决了。

- 配置文件

```ini
defaults
    log global
    mode tcp
    option tcplog
    option dontlognull
    option http-server-close
    retries 2
    option redispatch
    option abortonclose
    maxconn 3200
    timeout connect 5000
    timeout client  50000
    timeout server  50000
    timeout http-request 10s
    timeout queue 1m
    timeout http-keep-alive 10s
    timeout check 10s

listen ssr_cloud
    bind 0.0.0.0:1181
    mode tcp
    balance roundrobin
    server test.org:65521 test.org:65521 weight 5 check inter 1500 rise 1 fall 3 
    server hk02.clashcloud.org:65521 hk02.clashcloud.org:65521 weight 5 check inter 1500 rise 1 fall 3  backup

listen  admin_status
    bind 0.0.0.0:1188
    mode http
    stats refresh 30s
    stats uri  /
    stats realm Haproxy
    stats auth admin:password
    stats hide-version
    stats admin if TRUE
```

