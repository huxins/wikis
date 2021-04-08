# pve

- [基于PVE虚拟化的AIO家庭多功能服务器](https://bbs.hassbian.com/thread-6276-1-1.html)
- [PVE直通核显搭建虚拟Win10 HTPC避坑指南](https://www.10bests.com/win10-htpc-on-pve/)
- [PVE安装及Win10核显直通HDMI无输出](https://koolshare.cn/thread-184466-1-1.html)
- [PVE下直通核显踩坑总结](https://blogs.gorquan.cn/2020/07/28/yuque/PVE%E4%B8%8B%E7%9B%B4%E9%80%9A%E6%A0%B8%E6%98%BE%E8%B8%A9%E5%9D%91%E6%80%BB%E7%BB%93/)
- [PVE的安装，中文手册及GPU独显核显直通、万兆内网的那些事](https://koolshare.cn/thread-158939-1-1.html)
- [PVE核显直通LibreElec开启HDMI-4K-HTPC，实现All in one](https://koolshare.cn/thread-167738-1-1.html)
- [关于双网卡PVE：openwrt(LEDE) + win10直通核显+ DSM918+ 实现HDMI与声卡直通HTPC的解决方案](https://koolshare.cn/thread-181979-1-1.html)

使用 `DiskGenius` 删除U盘所有分区

使用 `UltraISO` 打开PVE镜像，启动写入硬盘映像 (写入方式 `RAW` )

## mirror

```sh
# Debian
sed -i 's/ftp.debian.org/mirror.sjtu.edu.cn/g' /etc/apt/sources.list
sed -i 's/security.debian.org/mirror.sjtu.edu.cn\/debian-security/g' /etc/apt/sources.list
# PVE
# 6.x 版本
rm -f /etc/apt/sources.list.d/pve-enterprise.list
echo "deb https://mirrors.tuna.tsinghua.edu.cn/proxmox/debian buster pve-no-subscription" > /etc/apt/sources.list.d/pve-no-subscription.list
# LXC
# 查找设定下载源的文件
grep -rn "download.proxmox.com" /usr/share/perl5/PVE/*
sed -i.bak "s#http://download.proxmox.com/images#https://mirrors.ustc.edu.cn/proxmox/images#g" /usr/share/perl5/PVE/APLInfo.pm
wget -O /var/lib/pve-manager/apl-info/mirrors.ustc.edu.cn https://mirrors.ustc.edu.cn/proxmox/images/aplinfo.dat
```

## qemu-guest-agent

- [Qemu-Guest-Agent-(QGA)原理简介](https://qkxu.github.io/2019/03/24/Qemu-Guest-Agent-(QGA)%E5%8E%9F%E7%90%86%E7%AE%80%E4%BB%8B.html)

```bash
opkg update
opkg install qemu-ga
reboot
```

## 硬件直通

```bash
# 启动内核IOMMU支持
vi /etc/default/grub
GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on pcie_acs_override=downstream iommu=pt video=efifb:off,vesafb:off"
GRUB_CMDLINE_LINUX_DEFAULT="quiet amd_iommu=on iommu=pt video=efifb:off,vesafb:off"
update-grub
# 加载硬件直通相关模块
vi /etc/modules
vfio
vfio_iommu_type1
vfio_pci
vfio_virqfd
# 添加驱动黑名单
vi /etc/modprobe.d/blacklist.conf
blacklist snd_hda_intel
blacklist snd_soc_skl
blacklist snd_hda_codec_hdmi
blacklist i915
# 或者
echo "blacklist snd_hda_intel" >> /etc/modprobe.d/pve-blacklist.conf
echo "blacklist snd_hda_codec_hdmi" >> /etc/modprobe.d/pve-blacklist.conf
echo "blacklist i915" >> /etc/modprobe.d/pve-blacklist.conf
# N卡和A卡的驱动黑名单
echo "blacklist nouveau" >> /etc/modprobe.d/blacklist.conf
echo "blacklist radeon" >> /etc/modprobe.d/blacklist.conf
# 如果是N卡还需要加入下面的配置到 kvm.conf
echo "options kvm ignore_msrs=1" >> /etc/modprobe.d/kvm.conf
# 绑定核显声卡到vfio模块
lspci -n | grep -E "0300|0403"
echo "
options vfio-pci ids=8086:0412,8086:0c0c" > /etc/modprobe.d/vfio.conf
# 更新配置信息并重启PVE主机
update-initramfs -u
reboot
# 检查模块是否正常加载
lsmod | grep vfio
vfio_pci               49152  0
vfio_virqfd            16384  1 vfio_pci
irqbypass              16384  2 vfio_pci,kvm
vfio_iommu_type1       28672  0
vfio                   32768  2 vfio_iommu_type1,vfio_pci
# 查看核显是否为Kernel driver in use: vfio-pci，如果不为vfio-pci，则说明核显直通失败
lspci -v
```

### WIN10

#### UPT模式直通核显

适用于英特尔五代(Broadwell)及以后的CPU，直通的核显为第二显卡，虚拟vga为主显卡，因为虚拟显卡的存在有一定性能损失，推荐性能较好的机器使用。

BIOS 用默认 SeaBIOS，机器改为 q35

```bash
# 修改虚拟机配置文件
vi /etc/pve/qemu-server/100.conf
# 第二行
args: -device vfio-pci,host=00:02.0,addr=0x18,x-vga=on,x-igd-opregion=on
# 倒数第二行
vga: std
# 有问题可以尝试
echo "options vfio_iommu_type1 allow_unsafe_interrupts=1" > /etc/modprobe.d/iommu_unsafe_interrupts.conf
```

UPT核显直通模式因为主显卡是虚拟显卡，很多程序默认先调用虚拟显卡而且改不了，所以会有一定性能损失。

如果设置双屏扩展或者复制显示，程序默认都不会调用核显；如果设置成仅在物理显示器显示，分辨率又调不了。

可行性比较高的是在设备管理器里面禁用虚拟显卡，双屏复制显示，这种情况分辨率可调，程序（包括Kodi）能默认调用核显，不过因为双屏的存在还是有性能损失。

#### Legacy模式直通核显

适用于英特尔二代(Sandy Bridge)及以后的CPU，直通的核显为主显卡占用addr=0x02通道，所以不能添加虚拟显卡，这种模式实测成功率比较低，不过性能损失较小，推荐尝试。

BIOS 用默认 SeaBIOS，机器改为 i440fx

```bash
# 修改虚拟机配置文件
vi /etc/pve/qemu-server/100.conf
args: -device vfio-pci,host=00:02.0,addr=0x02
vga: none
```

## 传感器

```shell
# cpu
apt-get install -y lm-sensors
sensors-detect
sensors
# cpu
# 或者直接以度为单位显示
echo $[$(cat /sys/class/thermal/thermal_zone0/temp)/1000]°
# 实时观看
watch -n 0.1 echo CPU: $[$(cat /sys/class/thermal/thermal_zone0/temp)/1000]°
# hdd
apt-get install -y hddtemp
hddtemp /dev/sda
```


## install virtual machine

网卡型号：VirtIO

```sh
# 转换镜像
qemu-img convert -f raw -O qcow2 LEDE.img LEDE.qcow2
# 测试镜像
qemu-img check LEDE.qcow2
# 导入镜像
qm importdisk 100 LEDE.qcow2 local-lvm
```

- [eSir 固件下载](https://drive.google.com/drive/folders/1dqNUrMf9n7i3y1aSh68U5Yf44WQ3KCuh)

重置：`firstboot`

默认IP：192.168.5.1

### DSM

- [Synology Assistant](https://www.synology.cn/zh-cn/support/download/DS3617xs#utilities)
- [PVE 关机](https://xpenology.com/forum/topic/7195-power-button-package/)

网卡型号：E1000

引导硬盘(IMG 挂载)，资料盘(RDM直通硬盘)

qm 安装引导

```sh
# 转换镜像
qemu-img convert -f raw -O qcow2 DS3617_6.2-23739_1.03b.img DS3617_6.2-23739_1.03b.qcow2
# 测试镜像
qemu-img check DS3617_6.2-23739_1.03b.qcow2
# 导入镜像
qm importdisk 101 DS3617_6.2-23739_1.03b.qcow2 local-lvm
# 查看硬盘
ls -l /dev/disk/by-id/
# 直通硬盘
qm set 101 --sata1 /dev/disk/by-id/ata-TOSHIBA_DT01ACA050_85C57TXLS
```

img2kvm 安装引导

```sh
chmod +x img2kvm
./img2kvm synoboot.img 101 vm-101-disk-1
```

- [选择 RAID 类型](https://www.synology.com/zh-cn/knowledgebase/DSM/help/DSM/StorageManager/storage_pool_what_is_raid)

### Windows 10

- [virtio-win](https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/archive-virtio/virtio-win-0.1.141-1/)

## 容器

- [LXC的模板Template制作教程](https://www.hostloc.com/thread-540788-1-1.html)
- [Proxmox下LXC容器压缩(缩减)硬盘容量shrink disk](https://www.hostloc.com/thread-658147-1-1.html)


