# centos 7

## 语言

查看系统当前语言包

```bash
locale
```

查看系统拥有语言包

```bash
locale -a
```

*（zh_CN.UTF-8是简体中文，如果没有zh_CN.UTF-8,就安装语言包，如果存在可以直接设置)*

 安装简体中文语言包

```bash
yum install kde-l10n-Chinese
```

设置为中文

```bash
# 临时修改
LANG="zh_CN.UTF-8"    #修改为中文
LANG="en_US.UTF-8"    #修改为英文
# 永久修改(方法一)
# vi /etc/locale.conf
LANG=zh_CN.UTF8
# 永久修改(方法二)
localectl set-locale LANG=zh_CN.UTF8
```

## 时间

修改时区为亚洲上海

```bash
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
timedatectl
timedatectl list-timezones
timedatectl set-timezone Asia/Shanghai
```

## 网络

设置 IP

```bash
ls -ltr /etc/sysconfig/network-scripts/ifcfg-*
vi /etc/sysconfig/network-scripts/ifcfg-p4p1
```

静态配置文件

```ini
TYPE="Ethernet"
PROXY_METHOD="none"
BROWSER_ONLY="no"
# dhcp static
BOOTPROTO="static"
DEFROUTE="yes"
IPV4_FAILURE_FATAL="no"
IPV6INIT="yes"
IPV6_AUTOCONF="yes"
IPV6_DEFROUTE="yes"
IPV6_FAILURE_FATAL="no"
IPV6_ADDR_GEN_MODE="stable-privacy"
NAME="enp3s0"
UUID="4f54a45c-1eb9-4ce5-a1c2-9956f340921e"
DEVICE="enp3s0"
ONBOOT="yes"
IPADDR="192.168.1.15"
# NETMASK=255.255.255.0
PREFIX="24"
GATEWAY="192.168.1.1"
DNS1="119.29.29.29"
IPV6_PRIVACY="no"
```

新增网卡需要手动增加配置文件

查看新加网卡的UUID信息，记录UUID值

```bash
nmcli con show
```

重启网络

```bash
sudo systemctl restart network
```

## 主机

```bash
# cat /etc/hostname
hostnamectl set-hostname name --static
hostnamectl status
```

