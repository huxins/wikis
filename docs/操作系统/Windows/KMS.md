# KMS

- [vlmcsd](https://github.com/Wind4/vlmcsd) [vlmcsd](https://github.com/kkkgo/vlmcsd)
- [itellyou](http://msdn.itellyou.cn/)

## Windows

- [kmsclientkeys](https://docs.microsoft.com/zh-cn/windows-server/get-started/kmsclientkeys)

输入以下命令，清除原密钥并设置KMS服务器。

>kms.03k.org
>
>kms.loli.beer
>
>kms.cangshui.net
>
>kms.library.hk
>

```cmd
$ wmic os get caption
$ slmgr.vbs /upk
$ slmgr.vbs /ipk [GVLK]
$ slmgr.vbs /skms kms.loli.beer
$ slmgr.vbs /ato
$ slmgr.vbs /xpr
$ slmgr.vbs /dli
```

