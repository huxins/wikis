# selinux

```bash
# 查看当前是否开启了selinux
getenforce
sestatus
# 设置 SELinux 成为 permissive 模式
setenforce 0
# 设置 SELinux 成为 enforcing 模式
setenforce 1
```

持久关闭 selinux

```bash
# vi /etc/selinux/config
SELINUX=enforcing
SELINUX=disabled
```

