# esxi

- [使用ESXI虚拟化部署OpenWrt（LEDE）+ 扩容硬盘](https://koolshare.cn/thread-186011-1-1.html)
- [vm esxi 驱动集成工具教程](https://koolshare.cn/thread-139057-1-1.html)
- [给ESXi安装iso镜像添加驱动](https://koolshare.cn/thread-138068-1-1.html)
- [在ESXi上搭建万兆软路由指南](https://koolshare.cn/thread-172777-1-1.html)
- [ESXi 6.7 万兆 2.5G 软路由 NAS 影音中心](https://koolshare.cn/thread-173957-1-1.html)
- [ESXI+LEDE+DSM+WIN10+上海电信4KIPTV桥接](https://koolshare.cn/thread-173537-1-1.html)
- [esxi 支持核显+独显直通吗](https://koolshare.cn/thread-164641-1-1.html)
- [在ESXi中的Windows用GeForce顯卡直出顯示器](https://gugucomputing.wordpress.com/2018/12/13/%e5%9c%a8esxi%e4%b8%ad%e7%9a%84windows%e7%94%a8geforce%e9%a1%af%e5%8d%a1%e7%9b%b4%e5%87%ba%e9%a1%af%e7%a4%ba%e5%99%a8/)

## install

序列号

```ini
# VMware vSphere 6 Enterprise Plus
0A65P-00HD0-3Z5M1-M097M-22P7H
# VMware vCenter 7.0 Standard
104HH-D4343-07879-MV08K-2D2H2
410NA-DW28H-H74K1-ZK882-948L4
406DK-FWHEH-075K8-XAC06-0JH08
# VMware vSphere hypervisor 7.0 Enterprise Plus
JJ2WR-25L9P-H71A8-6J20P-C0K3F
HN2X0-0DH5M-M78Q1-780HH-CN214
JH09A-2YL84-M7EC8-FL0K2-3N2J2
```

镜像转换 [StarWindConverter](https://www.starwindsoftware.com/tmplink/starwindconverter.exe)

## 硬件直通

### RDM直通

```bash
vmkfstools -z /vmfs/devices/disks/硬盘识别码 /vmfs/volumes/esxi存储空间/vmdk名称.vmdk
```

