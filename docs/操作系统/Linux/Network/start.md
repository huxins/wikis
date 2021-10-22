# start

查看网卡类型

```bash
lspci | grep Ethernet
```

## dns

- [Known DNS Providers](https://kb.adguard.com/en/general/dns-providers)

### dns tcp

```bash
$ vi /etc/resolv.conf
#添加 DNS over TCP
options use-vc
nameserver 8.8.8.8
nameserver 8.8.4.4
```

### dns over tls

```bash
$ apt install getdns-utils
```

getdns_query 使用 -L 参数指定通过 TLS 进行查询，TLS 查询缺省连接 853 端口；使用 -m 参数表示校验证书和请求域名匹配；使用 -s 参数表示采用 stub 解析模式，而非缺省的递归查询

```bash
$ getdns_query @115.159.131.230~dns.rubyfish.cn -m -s -L -A www.google.com
$ getdns_query @47.96.179.163~dns.rubyfish.cn -m -s -L -A www.google.com
```

### dns over https

- [DNS-over-HTTPS](https://github.com/curl/curl/wiki/DNS-over-HTTPS)

```bash
# https://dns.google.com/resolve?name=bnxb.com&type=a
# https://1.1.1.1/dns-query?ct=application/dns-json&name=bnxb.com&type=A
$ curl -H 'accept: application/dns-json' 'https://rubyfish.cn/dns-query?name=www.google.com&type=A'
```

上述这种简单的 json 响应只是 [Google/Mozilla 的实现方案](https://developers.google.com/speed/public-dns/docs/doh/json)。

IETF 提出的[标准化方案](https://tools.ietf.org/html/rfc8484)要比 web 原生的 json 格式更复杂一些，在 HTTP 流中包装了 DNS 原始的消息。Facebook 的工程师提供了一个基于 Python3.5+ 的工具 doh-proxy，通过 pip 安装的方法

```bash
$ sudo apt install python3-pip python3-setuptools python3-wheel
$ sudo -H pip3 install doh-proxy
```

安装后使用 doh-client 命令进行查询，--domain 参数指定 DoH 服务器，--qname 指定查询的域名

```bash
$ doh-client --domain dns.rubyfish.cn --qname www.facebook.com --qtype A
```

## network test

### speed test

```bash
curl -fsSLo speedtest-cli https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py
chmod +x speedtest-cli
```

### web speed test

```http
http://mybroadbandspeed.speedtestcustom.com/
http://aaaaaa.speedtestcustom.com/
http://rixcloud.speedtestcustom.com/
http://cordcloud.speedtestcustom.com/
```

### ip address

```http
http://ip100.info/
http://ip111.cn/
https://ip.skk.moe/
```

### generate_204

```http
http://204.ustclug.org
http://connect.rom.miui.com/generate_204
http://connectivitycheck.platform.hicloud.com/generate_204
http://wifi.vivo.com.cn/generate_204
http://www.gstatic.com/generate_204
http://www.g.cn/generate_204
http://www.msftconnecttest.com/connecttest.txt
http://captive.apple.com
http://detectportal.firefox.com/success.txt
```

