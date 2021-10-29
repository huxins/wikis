# Agent

- [SSH 命令的三种代理功能（-L/-R/-D）](https://zhuanlan.zhihu.com/p/57630633)

- 正向代理：在本地启动端口，把本地端口数据转发到远端。
- 反向代理：让远端启动端口，把远端端口数据转发到本地。
- SOCKS5 代理：在本地端口启动一个 SOCKS5 服务。

```sh
# 正向代理
$ ssh -L 0.0.0.0:port:host:port user@host
# 反向代理
$ ssh -R host:port:host:port user@host
# SOCKS5
$ ssh -D localhost:1080 user@host
```

优化参数

- `-C`：压缩数据
- `-q`：安静模式
- `-T`：禁止远程分配终端
- `-n`：关闭标准输入
- `-N`：不执行远程命令
- `-f`：后台运行

