# subversion

- [SVN快速上手](https://blog.csdn.net/atsoar/article/details/80460440)

## 安装

```bash
rpm -aq subversion
yum -y install subversion
vi /etc/yum.repos.d/wandisco-svn.repo
yum --disablerepo="*" --enablerepo="WandiscoSVN" info subversion
```

repo

```ini
[WandiscoSVN]
name=Wandisco SVN Repo
baseurl=http://opensource.wandisco.com/centos/7/svn-1.9/RPMS/x86_64/
enabled=1
gpgcheck=0
```

**数据权限**

```bash
# 存储项目
mkdir -p /data/svndata
# 存储用户、密码以及权限
mkdir -p /data/svnpasswd
# 启动SVN服务，指定服务的SVN根目录
svnserve -d -r /data/svndata/
# 建立项目版本库 fsfs bdb
svnadmin create --fs-type fsfs /data/svndata/sadoc
```

项目配置文件 conf/svnserve.conf

```ini
# 控制非鉴权用户访问版本库的权限
anon-access = none
# 控制鉴权用户访问版本库的权限
auth-access = write
# 指定用户名口令文件名
password-db = /data/svnpasswd/passwd
# 指定权限配置文件名
authz-db = /data/svnpasswd/authz
# 指定版本库的认证域，即在登录时提示的认证域名称
realm = somnus
```

**访问权限**

passwd

```ini
[users]
username = password
```

authz

```ini
[groups]
sadocgroup = aitemi,cjch
[sadoc:/]
aitemi=rw
@sadocgroup=rw
```

## Apache

**安装 httpd, mod_dav_svn**

```bash
yum install -y httpd mod_dav_svn
httpd -v
find / -name mod_dav_svn.so
find / -name mod_authz_svn.so
```

vi /etc/httpd/conf.d/subversion.conf

```xml
IncludeOptional /etc/httpd/conf.modules.d/00-base.conf
IncludeOptional /etc/httpd/conf.modules.d/00-dav.conf
LoadModule dav_svn_module     modules/mod_dav_svn.so
LoadModule authz_svn_module   modules/mod_authz_svn.so
LoadModule dontdothat_module  modules/mod_dontdothat.so
<Location /svn>
    DAV svn
    SVNParentPath /var/www/svn
    AuthType Basic
    AuthName "Authorization SVN"
    AuthzSVNAccessFile /var/www/svn/authz
    AuthUserFile /var/www/svn/passwd
    Require valid-user
</Location>
```

**配置apache对SVN目录权限**

```bash
chown -R apache:apache /home/data/svn/mes_v1
```

## 迁移

**备份**

```bash
# 全量备份
svnadmin dump /path/to/repository | gzip > /path/to/repository-backup.gz
# 增量备份
svnadmin dump /path/to/repository –r sour_version:des_version --incremental > sour-des.date
# 冷备份
svnadmin hotcopy /path/to/repository  /path/to/repository-backup.date
# 热备份
svnadmin hotcopy /path/to/repository  /path/to/repository-backup.date –clean-logs
```

**恢复**

```bash
# 建立新的svn存储库
svnadmin create /path/to/new_repository
# 导入没压缩数据
svnadmin load /path/to/new_repository < /path/to/repository-backup.date
# 导入被压缩数据
zcat /path/to/repository-backup.date | svnadmin load /path/to/new_repository
# hotcopy
# 恢复
svnadmin hotcopy /path/to/repository-backup.date /path/to/new_repository
# 直接覆盖
mv /path/to/repository-backup.date /path/to/new_repository
```

## 钩子

- [SVN Hooks的介绍及使用](https://juejin.im/post/6844903747911417864)





