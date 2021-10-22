# wireguard

- [WireGuard 安装脚本](https://github.com/atrandys/wireguard/tree/master)
- [wireguard-docs](https://github.com/pirate/wireguard-docs)
- [只有 4000 行代码的 WireGuard 不权威指南：理论篇](https://www.v2ex.com/t/687449)
- [OpenWRT 搭建 WireGuard 服务器](https://www.v2ex.com/t/624344)

## OpenWrt

```bash
opkg update
opkg install kmod-wireguard luci-app-wireguard luci-proto-wireguard wireguard wireguard-tools
```

生成密钥

```bash
mkdir -p /etc/wireguard
wg genkey | tee server-privatekey | wg pubkey > server-publickey
wg genkey | tee client0-privatekey | wg pubkey > client0-publickey
```

配置文件

```ini
[Interface]
PrivateKey = 6CJpj1CE2kqmfhJWu9UlzvCKqfm6g9yP8xCM+ggHCU4=
# ListenPort = 51820
# DNS = 8.8.8.8
# BlockDNS = true
Address = 192.168.9.2/24
# MTU = 1420

[Peer]
PublicKey = EI0o2k+BKTPoVP6e0hbJQSgn3gerwntlsebxLXt1Q3w=
PresharedKey = Ys1gDMulGlZAfW6HVWru5hpxmcQ3BHtWcwYV/pXeW3k=
AllowedIPs = 192.168.9.0/24, 192.168.234.0/24
Endpoint = ddns.example.com:51820
PersistentKeepalive = 25
# AllowMulticast = false
```

防火墙

```bash
iptables -A FORWARD -i wg -j ACCEPT
iptables -t nat -A POSTROUTING -o br-lan -j MASQUERADE
```







