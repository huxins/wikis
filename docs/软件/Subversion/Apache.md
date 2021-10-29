# Apache

## Install

```bash
yum install -y httpd mod_dav_svn
find / -name mod_dav_svn.so
find / -name mod_authz_svn.so
```

## 配置

/etc/httpd/conf.d/subversion.conf

```xml
LoadModule dav_svn_module     modules/mod_dav_svn.so
LoadModule authz_svn_module   modules/mod_authz_svn.so
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

## 权限

```bash
chown -R apache:apache /var/www/svn
```

