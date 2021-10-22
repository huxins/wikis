# Install

## 安装

使用 `DiskGenius` 删除U盘所有分区

使用 `UltraISO` 打开 PVE 镜像，启动写入硬盘映像 (写入方式 `RAW` )

## 镜像

```bash
# Debian
$ sed -i 's/ftp.debian.org/mirror.sjtu.edu.cn/g' /etc/apt/sources.list
$ sed -i 's/security.debian.org/mirror.sjtu.edu.cn\/debian-security/g' /etc/apt/sources.list
# PVE
$ rm -f /etc/apt/sources.list.d/pve-enterprise.list
$ echo "deb https://mirrors.tuna.tsinghua.edu.cn/proxmox/debian buster pve-no-subscription" \
    > /etc/apt/sources.list.d/pve-no-subscription.list
# LXC
$ grep -rn "download.proxmox.com" /usr/share/perl5/PVE/*
$ sed -i.bak "s#http://download.proxmox.com/images#https://mirrors.ustc.edu.cn/proxmox/images#g" /usr/share/perl5/PVE/APLInfo.pm
```

