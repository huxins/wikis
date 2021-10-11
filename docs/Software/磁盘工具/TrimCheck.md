# TrimCheck

- [CyberShadow/trimcheck](https://github.com/CyberShadow/trimcheck)
- [Download](https://files.thecybershadow.net/trimcheck/)

```
文件: trimcheck-0.7-win64.exe
大小: 1377088
MD5: 61F2288FAB89E2C08B452D0D7DDAF8AA
SHA1: BF69F4B6E7F58060CAB33B6661EB81538097B2E1
CRC32: 40787A7C
ed2k://|file|trimcheck-0.7-win64.exe|1377088|2FCBE76E82754E0281A5D6C509945E90|/
```

将程序文件放在要测试 TRIM 的驱动器上，然后运行它。
软件会自动创建以及删除文件，为了验证 TRIM 指令是否生效，需要等待 20 秒左右，然后退出软件。
第二次运行时软件就会告诉用户测试结果。

查询 TRIM 指令是否开启

```sh
$ fsutil behavior query DisableDeleteNotify
```

开启 TRIM 指令

```sh
$ fsutil behavior set DisableDeleteNotify 0
```

