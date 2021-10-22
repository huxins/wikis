# version

现在，Linux 内核版本由一系列个数组成，偶尔还会添加一系列字符。

```
3.10.0-693.el7.x86_64
主线版本.开发版本/稳定版本.释出版本-修改版本
```

获得Linux内核版本的方法

```bash
uname -r
cat /proc/version
rpm -q kernel
dmesg | grep Linux
ls -l /boot/
```

