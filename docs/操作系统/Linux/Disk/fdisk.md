# fdisk

```bash
$ fdisk -l
$ fdisk /dev/sdb
输入 p 打印当前硬盘的分区信息
输入 d 删除分区
输入要删除的分区编号
输入 n 创建分区(e 扩展分区,p 主分区)
分区删除完毕，输入 w，写入磁盘分区表
$ mkfs.ext4 /dev/sdb1
```

