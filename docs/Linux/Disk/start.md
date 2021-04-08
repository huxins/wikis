# start

- [存储区域网络](https://zh.wikipedia.org/wiki/%E5%AD%98%E5%82%A8%E5%8C%BA%E5%9F%9F%E7%BD%91%E7%BB%9C)

查看硬盘 id

```bash
ll /dev/disk/by-id
```

查看磁盘虚拟化驱动

```bash
lsmod | grep -oE 'virtio_scsi|virtio_blk' | head -1
```

