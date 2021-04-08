# unraid

- [softoroom 6.8.2](https://softoroom.net/ptopic89043.html)
- [新手unRAID入门](https://www.lxg2016.com/53567.html)

## Install

1. U 盘格式化 Fat32 分区，并且将 U 盘名称改为 UNRAID
2. 将 unRAIDServer-6.8.1-x86_64_k_fu11 解压出来，将整个目录下的所有文件复制到U盘
3. 用管理员身份运行U盘上的 make_bootable.bat
4. U盘启动系统，记录U盘的 GUID
5. 使用 keymaker.exe 你的 flash guid 号， 如 keymaker 090C-1000-CCYY-MMDDHHMMFQUB
6. 生成注册文件，将这个注册文件 改名为 BTRS.key 剪切到到U盘的 config 目录下

## Plugins

docker-apps

```http
https://raw.githubusercontent.com/Squidly271/community.applications/master/plugins/community.applications.plg
```

chs-project

```http
https://raw.githubusercontent.com/KleinerSource/unRAID-chs-project/master/release/urchs.682.plg
```

unassigned.devices

```http
https://raw.githubusercontent.com/dlandon/unassigned.devices/master/unassigned.devices.plg
```

## System

Intel GPU Use

```bash
# vi /boot/config/go
modprobe i915
```
## Docker

### jellyfin

```bash
docker run -d \
  --name=jellyfin \
  -e TZ=Asia/Shanghai \
  -p 8096:8096 \
  -v /mnt/user/appdata/jellyfin/library:/config \
  -v /mnt/user/appdata/jellyfin/tvseries:/data/tvshows \
  -v /mnt/user/appdata/jellyfin/movies:/data/movies \
  --device /dev/dri \
  --restart unless-stopped \
  linuxserver/jellyfin
```

### krusader



## VM

网卡

```bash
append vfio-pci.ids=1000:0072,8086:1521 initrd=/bzroot
```

硬盘

```bash
ls /dev/disk/by-id
```





