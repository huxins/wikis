# proxychains

- [proxychains-ng](https://github.com/rofl0r/proxychains-ng)
- [通过 ProxyChains-NG 实现终端下任意应用代理](https://www.hi-linux.com/posts/48321.html)

proxychains-ng 是 proxychains 的加强版，主要有以下功能和不足：

- 支持http/https/socks4/socks5
- 支持认证
- 远端dns查询
- 多种代理模式
- 不支持udp/icmp转发
- 少部分程序和在后台运行的可能无法代理

编译

```bash
git clone --depth=1 https://github.com/rofl0r/proxychains-ng
./configure --prefix=/usr --sysconfdir=/etc
make
make install
make install-config
```

配置

```sh
quiet_mode
dynamic_chain
chain_len = 1 #round_robin_chain和random_chain使用
proxy_dns
remote_dns_subnet 224
tcp_read_time_out 15000
tcp_connect_time_out 8000
localnet 127.0.0.0/255.0.0.0
localnet 10.0.0.0/255.0.0.0
localnet 172.16.0.0/255.240.0.0
localnet 192.168.0.0/255.255.0.0

[ProxyList]
socks5  127.0.0.1 1086
http    127.0.0.1 1087
```

proxychains-ng 支持多种代理模式,默认是选择 strict_chain。

- dynamic_chain ：动态模式，按照代理列表顺序自动选取可用代理
- strict_chain ：严格模式，严格按照代理列表顺序使用代理，所有代理必须可用
- round_robin_chain ：轮询模式，自动跳过不可用代理
- random_chain ：随机模式，随机使用代理

使用

```bash
$ proxychains4 程序 参数
```

alias

给 proxychains4 增加一个别名，在 `.zshrc` 或 `.bashrc` 末尾加入如下行：

```bash
alias pc='proxychains4'
```

以后就可以类似 `$ pc curl http://www.google.com` 这样调用 proxychains4，简化了输入。

终端的全局代理

手动设置环境变量

```bash
$ export PROXYCHAINS_CONF_FILE=/etc/proxychains.conf
$ export LD_PRELOAD=/usr/lib/libproxychains4.so
```

proxychains-ng 直接调用 SHELL

```bash
exec proxychains4 -q /bin/bash
```

