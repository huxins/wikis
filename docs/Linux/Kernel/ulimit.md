# ulimit

```bash
# 显示目前资源限制的设定
ulimit -a
# 查看程序系统限制
cat /proc/pid/limits
# 当前内核打开的文件句柄数
cat /proc/sys/fs/file-nr
# 当前内核可以打开的最大的文件句柄数
cat /proc/sys/fs/file-max
```

