# package

```bash
apt install apt-transport-https ca-certificates
sed -i 's/ftp.debian.org/mirror.sjtu.edu.cn/g' /etc/apt/sources.list
sed -i 's/security.debian.org/mirror.sjtu.edu.cn\/debian-security/g' /etc/apt/sources.list
sed -i 's/http/https/g' /etc/apt/sources.list
sed -i '/deb/ s/$/ non-free/' /etc/apt/sources.list
```

