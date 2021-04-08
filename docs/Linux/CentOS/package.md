# package

## rpm

```bash
# 查看某个包的安装文件
rpm -ql firefox
repoquery -l firefox
# 下载RPM至指定目录
yum install --downloadonly --downloaddir=./nginx nginx
# 安装RPM
yum localinstall
# 安装RPM
rpm -ivh
# 更新安装的包
rpm -Uvh
# 检查包是否已安装
rpm -q
# 移除安装的包
rpm -e
# 查看包
rpm -qi
# 显示安装在系统上的包
rpm -qa
# 检查文件属于哪个包
rpm -qf
```

## yum

配置 `/etc/yum.conf`

```ini
# 不更新内核
exclude=kernel*
# 使用ipv4网络
ip_resolve=4
# 代理
proxy=http://ip:port
proxy_username=username
proxy_password=password
```

缓存

```bash
# 更新yum源索引
yum check-update
# 清除缓存 (/var/cache/yum)
yum clean
yum makecache
```

仓库

```bash
# 查看启用的仓库
yum repolist enabled
# 查看所有的仓库
yum repolist all
```

套件

```bash
# 查找软件包
yum search
# 查询套件
yum list
yum list updates
yum list installed
yum list extras
# 查询套件信息
yum info
yum info updates
yum info installed
yum info extras
# 查询文件存在于什么套件
yum provides
```

套件组

```bash
# 查询已安装、可安装的套件组
yum grouplist
# 安装套件组
yum groupinstall
# 升级套件组
yum groupupdate
# 移除套件组
yum groupremove
# 查看套件组信息
yum groupinfo
```

## yum-utils

```bash
yum-config-manager --add-repo repository_url
yum-config-manager --enable repository
yum-config-manager --disable repository
```

## repository

换源

```bash
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
```

epel

```bash
yum install epel-release
sed -e 's!^metalink=!#metalink=!g' \
    -e 's!^#baseurl=!baseurl=!g' \
    -e 's!//download\.fedoraproject\.org/pub!//mirrors.tuna.tsinghua.edu.cn!g' \
    -e 's!http://mirrors\.tuna!https://mirrors.tuna!g' \
    -i /etc/yum.repos.d/epel.repo /etc/yum.repos.d/epel-testing.repo
```

