# Acme.sh

`acme.sh` 是一个实现了 acme 协议的脚本，可以从 Let's Encrypt 生成免费的SSL证书

## 配合解析商 API 申请泛域名证书

### 1、部署

```sh
curl https://get.acme.sh | sh
```

### 2、获取 DNSPod 的 API 信息

`acme.sh` 支持数种解析商的 API，可以自动添加 TXT 记录来验证，不需要人工操作，十分便捷

[支持详情](https://github.com/acmesh-official/acme.sh/blob/master/dnsapi/README.md)

设置临时环境变量，这个临时环境变量只需配置这一次，当成功申请证书后，API 信息会被自动保存在 `~/.acme.sh/account.conf` ，下次你使用 `acme.sh` 的时候会被自动使用

```sh
export DP_Id="id"
export DP_Key="key"
```

### 3、开始申请证书

`--dns dns_dp 参数表示使用 DNSPod 的 API，如果是其他解析商，同样的，从上面那个链接可以看到对应参数

```sh
# 申请泛域名证书
~/.acme.sh/acme.sh --issue --dns dns_dp -d example.com -d '*.example.com'
```

### 4、得到证书

申请完成后屏显会输出证书路径

证书是 `fullchain.cer`
密匙是 `example.com.key`

证书默认是在 `~/.acme.sh/` 中生成，不建议直接使用该路径填写至 nginx 等配置中，而是使用 `--installcert` 命令，具体请参考 [copy/安装 证书](https://github.com/acmesh-official/acme.sh/wiki/%E8%AF%B4%E6%98%8E#3-copy%E5%AE%89%E8%A3%85-%E8%AF%81%E4%B9%A6)



## Reference

- [acme.sh](https://github.com/acmesh-official/acme.sh/wiki/%E8%AF%B4%E6%98%8E)
- [acme.sh 教程](https://moe.best/tutorial/acme-le-wc.html)