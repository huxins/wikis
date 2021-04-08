# SSR

## Reference

- [shadowsocks_install](https://github.com/teddysun/shadowsocks_install/tree/master)
- [gfw_whitelist](https://github.com/neko-dev/gfw_whitelist) [whitelist.pac](https://github.com/MatcherAny/whitelist.pac) [daily](https://github.com/pexcn/daily/) [ipac](https://github.com/ifyour/ipac)
- [Linux使用SSR客户端](https://mikoto10032.github.io/post/%E7%A8%8B%E5%BA%8F%E5%91%98%E9%82%A3%E4%BA%9B%E4%BA%8B/linux%E4%BD%BF%E7%94%A8ssr%E5%AE%A2%E6%88%B7%E7%AB%AF/)
- [毒药测速](https://www.duyaoss.com/)
- [TcpRoute2](https://github.com/GameXG/TcpRoute2)

## 透明代理

### tcping

```shell
apt install -y tcptraceroute bc
yum install -y tcptraceroute bc
```

[©2002-2005 Richard van den Berg](http://www.vdberg.org/~richard/tcpping)

### redsocks

- [在树莓派上搭建全局透明代理网关](https://blog.newnius.com/setup-global-proxy-with-raspberry-pi.html)
- [ipt2socks](https://github.com/zfl9/ipt2socks)
- [transocks](https://github.com/cybozu-go/transocks)
- [KumaSocks](https://github.com/xsm1997/KumaSocks)

```shell
apk add redsocks
```

配置

```shell
tee /etc/redsocks/redsocks.conf <<-'EOF'
base {
    log_debug = off;
    log_info = off;
    log = stderr;
    daemon = off;
    redirector = iptables;
}
redsocks {
    local_ip = 0.0.0.0;
    local_port = 12345;
    ip = 192.168.11.60;
    port = 1080;
    type = socks5;
}
EOF
```

### ipset

```shell
apk add ipset
# 下载分配给国内运营商的 IP 段
curl 'http://ftp.apnic.net/apnic/stats/apnic/delegated-apnic-latest' | grep ipv4 | \
grep CN | awk -F\| '{ printf("%s/%d\n", $4, 32-log($5)/log(2)) }' > chnroute.txt
# 创建一个集合并把上述IP段加进去
ipset create chnroute hash:net
cat chnroute.txt | xargs -I ip_cn ipset add chnroute ip_cn
```



### iptables 规则

```shell
echo 1 > /proc/sys/net/ipv4/ip_forward
iptables -t nat -N SHADOWSOCKS
# 使代理自己不要再被重定向，不然就无限循环了
iptables -t nat -A SHADOWSOCKS -d 192.168.11.60 -j RETURN
# 忽略局域网地址
iptables -t nat -A SHADOWSOCKS -d 0.0.0.0/8 -j RETURN
iptables -t nat -A SHADOWSOCKS -d 10.0.0.0/8 -j RETURN
iptables -t nat -A SHADOWSOCKS -d 127.0.0.0/8 -j RETURN
iptables -t nat -A SHADOWSOCKS -d 169.254.0.0/16 -j RETURN
iptables -t nat -A SHADOWSOCKS -d 172.16.0.0/12 -j RETURN
iptables -t nat -A SHADOWSOCKS -d 192.168.0.0/16 -j RETURN
iptables -t nat -A SHADOWSOCKS -d 224.0.0.0/4 -j RETURN
iptables -t nat -A SHADOWSOCKS -d 240.0.0.0/4 -j RETURN
iptables -t nat -A SHADOWSOCKS -m set --match-set chnroute dst -j RETURN
# 把流量转发到 12345 端口，即redsocks
iptables -t nat -A SHADOWSOCKS -p tcp -j REDIRECT --to-ports 12345
iptables -t nat -A OUTPUT -p tcp -j SHADOWSOCKS
iptables -t nat -A PREROUTING -p tcp -j SHADOWSOCKS
# DNS 劫持
iptables -t nat -A PREROUTING -p udp --dport 53 -j REDIRECT --to-ports 15353
iptables -t nat -A PREROUTING -p tcp --dport 53 -j REDIRECT --to-ports 15353
```





