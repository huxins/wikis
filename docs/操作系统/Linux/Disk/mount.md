# mount

```bash
$ mount -t ext4 /dev/sdb1 /home/data/
$ umount /dev/sdb1
```

/etc/fstab

```bash
$ ls -al /dev/disk/by-uuid/
$ blkid
$ pico /etc/fstab
UUID=856e9b8f-b0f1-49f2-a19a-71989a7a8e92 /SATA1 ext4 defaults 0 2
/SATA1/images /var/lib/vz/images none bind 0 0
$ mount -a
```

