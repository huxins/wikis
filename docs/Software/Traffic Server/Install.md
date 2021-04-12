# Install

```bash
$ wget https://mirrors.ocf.berkeley.edu/apache/trafficserver/trafficserver-8.1.1.tar.bz2
$ tar -xjf trafficserver-8.1.1.tar.bz2
$ apt install automake libtool pkg-config libmodule-install-perl gcc g++ libssl-dev tcl-dev libpcre3-dev libcap-dev libhwloc-dev libncurses5-dev libcurl4-openssl-dev flex autotools-dev bison debhelper dh-apparmor gettext intltool-debian libbison-dev libexpat1-dev libfl-dev libsigsegv2 libsqlite3-dev m4 po-debconf tcl8.6-dev zlib1g-dev -y
$ cd trafficserver-8.1.1
$ ./configure --enable-experimental-plugins
$ make && make install
$ ln -s /usr/local/etc/trafficserver /etc/trafficserver
```

