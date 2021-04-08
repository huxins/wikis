# Clash

- [在线YAML工具](https://www.toolfk.com/tool-format-yaml.html)
- [KoolClash](https://koolclash.js.org/)
- [配置模板](https://github.com/Hackl0us/SS-Rule-Snippet/blob/master/LAZY_RULES/clash.yaml) [神机规则](https://github.com/ConnersHua/Profiles/tree/master) [GeQ1an](https://github.com/GeQ1an/Rules/tree/master)
- 第三方 web 管理页面 http://clash.razord.top/ http://yacd.haishan.me/
- [利用clash功能制作透明代理](https://blog.e9china.net/tufan/clash-proxy-daili.html)
- [x86 软路由透明代理构建方案](https://0x01.io/2020/02/16/x86-%E8%BD%AF%E8%B7%AF%E7%94%B1%E9%80%8F%E6%98%8E%E4%BB%A3%E7%90%86%E6%9E%84%E5%BB%BA%E6%96%B9%E6%A1%88v2020-02/)
- [回环处理](https://github.com/Dreamacro/clash/issues/158)

## 安装

- 新增用户

```bash
groupadd clash
useradd -g clash -M -s /sbin/nologin clash
#执行上述命令会需要你填写一些信息酌情填写
#passwd clash
```

- 进程控制

```bash
vi /lib/systemd/system/clash@.service
systemctl daemon-reload
systemctl enable clash@clash
```

Systemd 配置文件

```ini
[Unit]
Description=A rule based proxy in Go for %i.
After=network.target

[Service]
Type=simple
User=%i
ExecStart=/home/software/clash/clash -d /home/software/clash
Restart=on-abort
CapabilityBoundingSet=CAP_NET_BIND_SERVICE
AmbientCapabilities=CAP_NET_BIND_SERVICE

[Install]
WantedBy=multi-user.target
```

## 配置文件

- [DNS污染对Clash（for Windows）的影响](https://github.com/Fndroid/clash_for_windows_pkg/wiki/DNS%E6%B1%A1%E6%9F%93%E5%AF%B9Clash%EF%BC%88for-Windows%EF%BC%89%E7%9A%84%E5%BD%B1%E5%93%8D)

clash DNS 请求逻辑：
    (1) 当访问一个域名时， nameserver 与 fallback 列表内的所有服务器并发请求，得到域名对应的 IP 地址。
    (2) clash 将选取 nameserver 列表内，解析最快的结果。
    (3) 若解析结果中，IP 地址属于 国外，那么 clash 将选择 fallback 列表内，解析最快的结果。

`touch config.yaml`

```yaml
port: 7890
socks-port: 7891
redir-port: 7892
allow-lan: true

mode: Rule

log-level: silent
# external-controller 主要是用于 web 端管理页面，必须监听在 0.0.0.0
external-controller: 0.0.0.0:9090

# secret 是进入管理面板所需要的密码，可填可不填，建议填上
secret: "huxin666"

# external-ui 表示管理面板的路径
external-ui: /home/software/clash/web/

dns:
  enable: true
  ipv6: false
  listen: 0.0.0.0:53
  enhanced-mode: redir-host
  nameserver:
    - 192.168.9.60:20053
  fallback:
    - 192.168.9.60:20054

proxies:
  - name: "proxy"
    type: socks5
    server: "192.168.9.60"
    port: 1080
    
proxy-groups:
  - name: "auto"
    type: url-test
    proxies:
      - proxy
    url: 'http://www.gstatic.com/generate_204'
    interval: 300

  - name: "home-sh-select"
    type: select
    proxies:
      - DIRECT

  - name: "leanway-select"
    type: select
    proxies:
      - DIRECT
    
rules:
  - DOMAIN-SUFFIX,google.com,auto
  - DOMAIN-KEYWORD,google,auto
  - DOMAIN,google.com,auto
  - DOMAIN-SUFFIX,ad.com,REJECT
  # rename SOURCE-IP-CIDR and would remove after prerelease
  - SRC-IP-CIDR,192.168.1.201/32,DIRECT

# LAN
  - DOMAIN-SUFFIX,local,DIRECT
  - IP-CIDR,127.0.0.0/8,DIRECT
  - IP-CIDR,172.16.0.0/12,DIRECT
  - IP-CIDR,192.168.0.0/16,DIRECT
  - IP-CIDR,10.0.0.0/8,DIRECT
  - IP-CIDR,17.0.0.0/8,DIRECT
  - IP-CIDR,100.64.0.0/10,DIRECT
  
# 最终规则
  - GEOIP,CN,DIRECT
  - MATCH,auto
```

## Iptables

```bash
echo "net.ipv4.ip_forward = 1" >> /etc/sysctl.conf && sysctl -p
echo "net.ipv6.conf.all.forwarding = 1" >> /etc/sysctl.conf && sysctl -p
cat /proc/sys/net/ipv4/ip_forward


iptables -t nat -N clash
iptables -t nat -A PREROUTING -p tcp -j clash

#注意：这里的网段和IP你需要自己适配自己的
iptables -t nat -A clash -d 0.0.0.0/8 -j RETURN
iptables -t nat -A clash -d 10.0.0.0/8 -j RETURN
iptables -t nat -A clash -d 127.0.0.0/8 -j RETURN
iptables -t nat -A clash -d 169.254.0.0/16 -j RETURN
iptables -t nat -A clash -d 172.16.0.0/12 -j RETURN
iptables -t nat -A clash -d 192.168.0.0/16 -j RETURN
iptables -t nat -A clash -d 224.0.0.0/4 -j RETURN
iptables -t nat -A clash -d 240.0.0.0/4 -j RETURN

iptables -t nat -A clash -p tcp -j REDIRECT --to-ports 7892
iptables -t nat -A OUTPUT -p tcp -m owner ! --uid-owner clash -j REDIRECT --to-port 7892

apt install -y iptables-persistent
netfilter-persistent save
netfilter-persistent start
iptables-save  > /etc/iptables/rules.v4
```



















