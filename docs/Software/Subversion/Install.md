# Install

## CentOS 7

```bash
$ yum -y install subversion
```

> WandiscoSVN

```bash
$ vi /etc/yum.repos.d/wandisco-svn.repo
$ yum --disablerepo=* --enablerepo=WandiscoSVN info subversion
```

repo

```ini
[WandiscoSVN]
name=Wandisco SVN Repo
baseurl=http://opensource.wandisco.com/centos/7/svn-1.9/RPMS/x86_64/
enabled=1
gpgcheck=0
```

