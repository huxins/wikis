# dsm

## install

### physical

获取 USB 的 vid=0xXXXX 和 pid=0xXXXX 并编辑 /boot/grub/grub.cfg 文件中的 vid 和 pid，把它们设定成你 USB 盘相同的值就完成了。

使用 PassMark OSFMount 软件，Mount 引导文件，在弹出的菜单中选择 Partition 0 - 15.0 MB

获取 VID 和 PID

1. 在文件管理器上随便点个逻辑盘，右键属性，出现属性的界面。
2. 选硬件，显示所有的物理盘。选取U盘，再点属性。
3. 看到U盘的属性，上面有常规、策略、卷、驱动程序、详细信息和事件。
4. 选取其中的详细信息—属性—父系

### esxi

- [synology-open-vm-tools](https://github.com/leonardw/synology-open-vm-tools/blob/master/README.zh-cn.md)
- [DSM-open-vm-tools](https://github.com/lxf94/DSM-open-vm-tools)

将 /boot/grub/grub.cfg 最后的前两个引导方式删除





