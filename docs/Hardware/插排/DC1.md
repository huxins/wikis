# DC1

[DC1网络配置工具](https://www.right.com.cn/forum/thread-543860-1-1.html)

```bash
echo -e '{"header":"phi-plug-0001","uuid":"00010","action":"wifi=","auth":"","params":{"ssid":"tiantian","password":"shuijiao"}}\n' | socat - udp4-datagram:192.168.4.1:7550

echo -e '{"header":"phi-plug-0001","uuid":"00010","action":"wifi=","auth":"","params":{"ssid":"tiantian","password":"shuijiao"}}\n' | nc -4u 192.168.4.1 7550
```

## USB 模块输出

USB 模块输出：5V ⎓ 4A，20W

单口 USB 输出：5V ⎓ 2.4 A MAX

没有线补

