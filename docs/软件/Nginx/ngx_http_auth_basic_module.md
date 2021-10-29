# ngx_http_auth_basic_module

- [在线 htpasswd 生成器](https://tool.oschina.net/htpasswd)

```nginx
location / {
    auth_basic           "closed site";
    auth_basic_user_file conf/htpasswd;
}
```

htpasswd

```bash
$ yum install httpd-tools -y
$ htpasswd -c ./passwd username
```

htpasswd 格式

```ini
# comment
name1:password1
name2:password2:comment
name3:password3
```

