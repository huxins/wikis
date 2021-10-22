# sysctl

`/etc/sysctl.conf` 为控制内核相关参数的配置文件，它的内容全部是对应于 /proc/sys/ 这个目录的子目录及文件。

```bash
/proc/sys/abi 		#应用的二进制信息
/proc/sys/crypto 	#调试相关的系统配置目录
/proc/sys/debug 	#设备相关的系统配置目录
/proc/sys/dev 		#文件系统相关的系统配置目录
/proc/sys/fs 		#文件系统相关的系统配置目录
/proc/sys/kernel 	#内核相关的系统配置目录
/proc/sys/net 		#网络相关的系统配置目录
/proc/sys/user 		#用户相关的系统配置目录
/proc/sys/vm 		#内存相关的系统配置目录
```

sysctl

[net.ipv4.ip_local_port_range 的值究竟影响了啥](https://mozillazg.com/2019/05/linux-what-net.ipv4.ip_local_port_range-effect-or-mean.html)

```ini
#开启路由功能，0是关闭，1是开启
net.ipv4.ip_forward = 0
#允许系统打开的端口范围
net.ipv4.ip_local_port_range = 39999 65000
net.nf_conntrack_max = 655360
net.netfilter.nf_conntrack_tcp_timeout_established = 1200
#BBR
net.core.default_qdisc = fq
net.ipv4.tcp_congestion_control = bbr
```

查看内核是否已开启BBR

```bash
$ sysctl net.ipv4.tcp_available_congestion_control
net.ipv4.tcp_available_congestion_control = reno cubic bbr
$ lsmod | grep bbr
tcp_bbr 20480  5
```



