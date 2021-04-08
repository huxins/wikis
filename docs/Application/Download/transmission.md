# transmission

- [transmission-web-control](https://github.com/ronggang/transmission-web-control)

**RPC**

```json
"rpc-authentication-required": true,
"rpc-enabled": true,
"rpc-password": "password",
"rpc-username": "username",
"rpc-whitelist-enabled": false
```

[File permission management](https://askubuntu.com/questions/733381/file-permission-management)

```bash
Umask   Created Files       Created Directories
-----------------------------------------------
000     666 (rw-rw-rw-)     777     (rwxrwxrwx)
002     664 (rw-rw-r--)     775     (rwxrwxr-x)
022     644 (rw-r--r--)     755     (rwxr-xr-x)
027     640 (rw-r-----)     750     (rwxr-x---)
077     600 (rw-------)     700     (rwx------)
277     400 (r--------)     500     (r-x------)
```

settings.json 使用十进制 umask

```bash
echo $((8#022))
```

**CentOS 7**

```bash
yum install epel-release
yum install transmission-cli transmission-common transmission-daemon
systemctl start transmission-daemon.service
```

**Docker**

```bash
docker pull linuxserver/transmission:2.94-r3-ls53
docker run -d \
  --name=transmission \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Asia/Shanghai \
  -e TRANSMISSION_WEB_HOME=/transmission-web-control/ \
  -e USER=admin \
  -e PASS=huxin666 \
  -p 9091:9091 \
  -p 52020:52020 \
  -p 52020:52020/udp \
  -v /home/.config:/config \
  -v /home/.downloads:/downloads \
  -v /home/.watch:/watch \
  --restart unless-stopped \
  linuxserver/transmission:2.94-r3-ls53
```

