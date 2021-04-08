# Git

初始化

```bash
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
# 列出所有GIT能找到的配置
git config --list
# 检查GIT的某一项配置
git config user.name
```

换行符

```bash
# 提交检出均不转换
git config --global core.autocrlf false
# 提交时转换为LF，检出时不转换
git config --global core.autocrlf input
# 提交时转换为LF，检出时转换为CRLF
git config --global core.autocrlf true

# 拒绝提交包含混合换行符的文件
git config --global core.safecrlf true
# 允许提交包含混合换行符的文件
git config --global core.safecrlf false
# 提交包含混合换行符的文件时给出警告
git config --global core.safecrlf warn
```

## install

```bash
yum install \
https://repo.ius.io/ius-release-el7.rpm \
https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
yum info git22*-core --disablerepo=base,extras,updates --enablerepo=ius
yum install git224-core
```

## client

[GitCracken](https://github.com/5cr1pt/GitCracken)

https://githistory.xyz/

```bash
git remote add origin link
git push -u origin master -f
git checkout -b master
```



```bash
git config --global http.proxy 'socks5://127.0.0.1:1080' 
git config --global https.proxy 'socks5://127.0.0.1:1080'
```



