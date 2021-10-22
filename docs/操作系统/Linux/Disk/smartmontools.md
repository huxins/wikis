# smartmontools

```bash
smartctl --scan # 扫描当前系统中所有支持SMART的设备
smartctl -i /dev/sda # 查看设备SMART是否开启
smartctl --smart=on --offlineauto=on --saveauto=on /dev/sda # 将设备SMART开启
smartctl -a /dev/sda # 仅显示设备的所有SMART属性信息
smartctl -x /dev/sda # 显示设备的所有属性信息
smartctl -H /dev/sda # 查看设备的自检评估结果
smartctl -t short /dev/sda # 后台检测硬盘，消耗时间短
smartctl -t long /dev/sda # 后台检测硬盘，消耗时间长
smartctl -C -t short /dev/sda # 前台检测硬盘，消耗时间短
smartctl -C -t long /dev/sda  # 前台检测硬盘，消耗时间长。其实就是利用硬盘SMART的自检程序
smartctl -X /dev/sda # 中断后台检测硬盘
smartctl -l selftest /dev/sda # 显示硬盘检测日志
smartctl -l error /dev/sda # 显示硬盘错误汇总
smartctl -d sat --all /dev/sda | grep Temp # 显示硬盘温度
```

