# DNS

## SmartDNS

- [SmartDNS](https://github.com/pymumu/smartdns)
- [Debian9使用Clash做透明网关配合Smartdns最快DNS解析](https://www.rinvay.cc/archives/719/)

增加配置

```bash
$ vim /usr/lib/systemd/system/smartdns.service
$ chmod 754 /usr/lib/systemd/system/smartdns.service
$ systemctl daemon-reload
```

systemd

```ini
[Unit]
Description=smart dns server
After=network.target 
StartLimitBurst=0
StartLimitIntervalSec=60

[Service]
Type=forking
PIDFile=/var/run/smartdns.pid
#EnvironmentFile=/etc/default/smartdns
ExecStart=/home/software/smartdns/smartdns -p /var/run/smartdns.pid -c /home/software/smartdns/smartdns.conf
KillMode=process
Restart=always
RestartSec=2

[Install]
WantedBy=multi-user.target
Alias=smartdns.service
```

smartdns.conf

```ini
server-name smartdns
bind :20053 -group cn -no-rule-addr -no-rule-nameserver -no-rule-ipset -no-rule-soa -no-dualstack-selection
bind-tcp :20053 -group cn -no-rule-addr -no-rule-nameserver -no-rule-ipset -no-rule-soa -no-dualstack-selection
bind :20054 -group us -no-rule-addr -no-rule-nameserver -no-rule-ipset -no-rule-soa -no-dualstack-selection
bind-tcp :20054 -group us -no-rule-addr -no-rule-nameserver -no-rule-ipset -no-rule-soa -no-dualstack-selection
cache-size 512
tcp-idle-time 120
rr-ttl 600
rr-ttl-min 60
rr-ttl-max 600
log-level fatal
log-file /home/software/smartdns/smartdns.log
log-size 128K
log-num 2
speed-check-mode tcp:443,tcp:80,ping
prefetch-domain yes
serve-expired yes
serve-expired-ttl 0
server 119.29.29.29:53 -group cn
server 223.5.5.5:53 -group cn
server 202.141.162.123:5353 -group cn
server-tcp 101.6.6.6:5353 -group cn
server-tcp 8.8.8.8:53 -group us
server-tcp 80.80.80.80:53 -group us 
server-tcp 208.67.222.222:5353 -group us
server-tcp 208.67.222.222:443 -group us
server-tcp 1.1.1.1:53 -group us
server-tls 8.8.8.8:853 -group us
server-tls 1.1.1.1:853 -group us
server-https https://cloudflare-dns.com/dns-query -group us
server-https https://dns.google/dns-query -group us
```



## Dnsmasq

- [利用 Dnsmasq 部署 DNS 服务](https://www.hi-linux.com/posts/30947.html)

### DHCP

第一行是给特定的MAC打上标签 `v` 并且指定IP地址
第二行作用是给打了这个 `v` 标机的主机定制网关地址,
当然按第二行的格式还可以指定其他很多参数，比如dns

```
dhcp-host=set:v,06:D8:F5:C9:36:0E,192.168.9.2,pixel_3
dhcp-option=tag:v,3,192.168.9.60
dhcp-option=tag:v,6,192.168.9.60
```

Openwrt

[openwrt DHCP 指定不同的网关](https://my.oschina.net/kblack/blog/3019722)

```
config host
        option ip       '192.168.1.3'
        option mac      '11:22:33:44:55:66'
        option tag      'need_outernet'

config tag 'need_outernet'
        list dhcp_option '3, 192.168.1.2'
        option force '1'
```

## Overture

- [Overture](https://github.com/shawn1m/overture)



