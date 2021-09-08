# Srelay

- [Srelay](https://socks-relay.sourceforge.io/)

## Make

```sh
$ wget https://downloads.sourceforge.net/project/socks-relay/socks-relay/srelay-0.4.8/srelay-0.4.8p3.tar.gz
$ tar -zxf srelay-0.4.8p3.tar.gz
$ cd srelay-0.4.8p3
$ ./configure
$ make
```

## Documents

- SOCKS server

```sh
$ cat << EOF > /etc/srelay.conf
# dest     dest-port
0.0.0.0    any
EOF
$ srelay -q -f -i :1080 -c /etc/srelay.conf
```

## Docker

```sh
$ docker build -t srelay:latest https://github.com/huxins/Dockerfile.git#:Srelay
$ docker run -d --restart always -p 1080:1080 -p 1080:1080/udp  --name srelay huxins/srelay:latest
```

