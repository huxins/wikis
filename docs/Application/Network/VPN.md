# VPN

## PPTP

TCP: 1723

### Windows

修改windows系统PPTP连接使用的MTU值

```powershell
netsh interface ipv4 show interfaces
netsh interface ipv4 set subinterface "31" mtu=1396 store=persistent
```

路由表解释

```powershell
route print -4
```

删除默认设置

```powershell
route delete 0.0.0.0
```

内网路由，192.168.10.245为VPN网关

```powershell
route add 192.168.11.0 mask 255.255.255.0 192.168.10.245 –p
```

[Windows登录自动化 PPTP](http://www.jswh.me/%E5%85%B6%E4%BB%96/windows-auto-pptp/)

```bat
ipconfig | findstr /n 172\.17\.0\.[0-9]*
IF NOT ERRORLEVEL 1 ( 
    ipconfig | findstr /n 192\.168\.10\.[0-9]*
    IF ERRORLEVEL 1 ( 
        echo AT COMPANY AND NO PPTP.
        rasdial <VPN NAME> <USERNAME> <PASSWORD>
        route ADD 10.0.0.0 MASK 255.0.0.0 10.4.90.1
    )
)
```

### CentOS 7

检查是否支持PPTP，满足一条即可

```sh
modprobe ppp-compress-18 && echo ok #返回OK
zgrep MPPE /proc/config.gz #返回CONFIG_PPP_MPPE=y 或 =m
cat /dev/net/tun #返回cat: /dev/net/tun: File descriptor in bad state
```

安装 PPP，pptpd

```sh
yum install -y ppp
yum install -y epel-release
yum install -y pptpd
```

修改dns信息

```sh
$ vi /etc/ppp/options.pptpd
ms-dns 119.29.29.29
ms-dns 114.114.114.114
nologfd
logfile /var/log/pptpd.log
```

vpn 账户密码

```sh
$ vi /etc/ppp/chap-secrets
admin pptpd password * # VPN账号 + 服务类型 + VPN密码 + IP
```

设置VPN内网IP段

```sh
$ vi /etc/pptpd.conf
localip 192.168.0.1 # 服务器的内部网关地址
remoteip 172.16.1.100-110 # 分配给客户端的地址,一般是内网网段地址
```

修改内核参数支持内核转发

```sh
$ vi /etc/sysctl.conf
net.ipv4.ip_forward=1
$ sysctl -p
cat /proc/sys/net/ipv4/ip_forward
```

日志

```sh
# 1、上线日志
vi /etc/ppp/ip-up
echo "$PEERNAME 分配IP: $5 登录IP: $6 登录时间: `date -d today +%F_%T`" >> /var/log/pptpd.log

# 2、下线日志
vi /etc/ppp/ip-down
echo "$PEERNAME 下线IP: $6 下线时间: `date -d today +%F_%T`" >> /var/log/pptpd.log
```

设置最大传输单元

```sh
vi /etc/ppp/ip-up
# exit 0 行前添加
ifconfig $1 mtu 1450

iptables -A FORWARD -p tcp --syn -s 10.0.0.0/24 -j TCPMSS --set-mss 1396
iptables -A FORWARD -p tcp -m tcp --tcp-flags SYN,RST SYN -j TCPMSS --clamp-mss-to-pmtu
```

NAT 转发

```sh
# 192.168.9.0/24,取决于你 /etc/pptpd.conf 里的 local IP,表示的是你 VPN 客户端分配的 IP 段.
sudo iptables -A INPUT -p gre -j ACCEPT 
sudo iptables -A INPUT -p tcp --dport 1723 -j ACCEPT
iptables -t nat -A POSTROUTING -s 192.168.0.0/24 -o eth0 -j MASQUERADE
# iptables -t nat -A POSTROUTING -s 192.168.0.0/255.255.255.0 -o eth0 -j SNAT --to-source 172.27.0.15

netstat -tunlp | grep 1723
# /etc/rc.d/rc.local 自启
```

## openconnect

- [野生思科分离隧道](https://beijing2b.com/splitting-network-traffic-based-on-destinations/)

## nebula

- [nebula](https://github.com/slackhq/nebula)
- [让 Nebula 可以在 Windows 下作为服务自启动](https://v2ex.com/t/636088)
- [nebula 简单教程](https://runtime.pw/nebula-tutorials/)
- [nebula初探](https://beijing2b.com/nebula/)

下载 nebula

```shell
wget https://github.com/slackhq/nebula/releases/download/v1.2.0/nebula-linux-amd64.tar.gz
tar -zxvf nebula-linux-amd64.tar.gz
```

生成主证书 `CA`，后面所有节点证书都是这个主证书签名的，这个命令将生成 `ca.crt` 与 `ca.key`

```sh
./nebula-cert ca -name "home-sh"
```

为各节点签发证书，分别为lighthouse、buf、win10

```sh
./nebula-cert sign -name "lighthouse" -ip "192.168.250.1/24"
./nebula-cert sign -name "win10" -ip "192.168.250.3/24" -groups "g1, g2"
./nebula-cert sign -name "buf" -ip "192.168.250.100/24" -groups "g1, g2"
```

配置文件集中管理

```sh
mkdir /etc/nebula
cp ca.crt /etc/nebula
cp lighthouse.* /etc/nebula/
```

生成一个配置文件

>https://github.com/slackhq/nebula/blob/master/examples/config.yml

```sh
vi /etc/nebula/lighthouse-config.yaml
```

内容如下

```yaml
pki:
  ca: /etc/nebula/ca.crt
  cert: /etc/nebula/lighthouse.crt
  key: /etc/nebula/lighthouse.key

static_host_map:
  "192.168.250.1": ["lighthouse1.example.com:4242"]

lighthouse:
  am_lighthouse: true #这行只有“灯塔”才有
  interval: 60
  # 以下两行一定要注释掉
    #hosts:
  #  - "192.168.250.1"

listen:
  host: 0.0.0.0
  port: 4242

punchy:
  punch: true
  respond: true

tun:
  # 网卡名字
  dev: nbl
  drop_local_broadcast: false
  drop_multicast: false
  tx_queue: 500
  mtu: 1300

  routes:

    #- mtu: 8800
    #  route: 10.0.0.0/16 #这里可以分发路由表，一行聚合不了的可以写多行，下面的覆盖上面的

logging:
  level: info
  format: text

firewall:
  conntrack:
    tcp_timeout: 120h
    udp_timeout: 3m
    default_timeout: 10m
    max_connections: 100000

  outbound:
    # 放开所有出站
    - port: any
      proto: any
      host: any

  inbound:
    # 放开各节点所有流量，这里可以有不同的粒度，甚至有类似云主机那种安全组的概念
    - port: any
      proto: any
      host: any
```

运行

```sh
./nebula -config /etc/nebula/lighthouse-config.yaml
```

