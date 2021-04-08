# network

## iproute

```bash
ip -s -h link #查看网卡详细信息
ip route | column -t
ip route del via 10.2.255.254  #删除默认路由
ip route add via 10.2.255.254  #增加默认路由
ip route del 192.168.0.0/24 dev eth1
ip route add 192.168.0.0/24 dev eth1
ip route add 192.168.1.0/24 via 192.168.0.1  #增加静态路由
ip route del 192.168.1.0/24 via 192.168.0.1  #删除静态路由
ss -nt #查看TCP连接
```

查看路由表

```bash
netstat -rn
traceroute
ip route show
route -n
```

## nload

```bash
nload #查看当前网络速率
```

## dstat

```bash
dstat -tnf 1 10 #输出接下来10秒内每秒的网络数据
```

## iftop

```bash
iftop -nN -i eth0 #实时查看eth0网卡的各个连接和网速
```

## nethogs

```bash
nethogs -d 2 eth0 #每2秒刷新流经eth0网卡的进程流量信息
```

## nmap

```bash
nmap localhost #查看主机当前开放的端口
nmap -p 1024-65535 localhost #查看主机端口（1024-65535）中开放的端口
nmap -PS 192.168.21.163 #探测目标主机开放的端口
nmap -PS22,80,3306 192.168.21.163    #探测所列出的目标主机端口
nmap -O 192.168.21.163 #探测目标主机操作系统类型
nmap -A 192.168.21.163 #综合扫描
```

