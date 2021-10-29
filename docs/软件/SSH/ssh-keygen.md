# ssh-keygen

生成密钥

```sh
$ ssh-keygen -t rsa -C "comment"
```

将公钥传送到远程主机上

```sh
$ ssh-copy-id user@host
```

从 known_hosts 文件中删除属于指定主机名的所有密钥

```sh
$ ssh-keygen -R host
```

