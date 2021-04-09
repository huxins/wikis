# Install

- [NGINX Init Scripts](https://www.nginx.com/resources/wiki/start/topics/examples/initscripts/)

## CentOS 7

### YUM

```bash
$ rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
$ yum info nginx
$ yum install nginx
```

### Build

#### network

```bash
# 安装依赖项
$ yum install pcre pcre-devel zlib zlib-devel openssl openssl-devel -y
# 添加用户
$ useradd www -s /sbin/nologin -M
# 下载编译
$ wget https://nginx.org/download/nginx-1.19.9.tar.gz
$ tar -zxvf nginx-1.19.9.tar.gz
$ cd nginx-1.19.9
$ ./configure \
    --user=www \
    --group=www \
    --prefix=/usr/local/nginx-1.19.9 \
    --with-http_stub_status_module \
    --with-http_ssl_module
$ make && make install
$ ln -s /usr/local/nginx-1.19.9 /usr/local/nginx
```

#### local

`nginx` 必要的组件包：[`zlib`](https://www.zlib.net/) [`pcre`](https://sourceforge.net/projects/pcre/files/pcre/) [`openssl`](https://github.com/openssl/openssl)

```bash
# 安装依赖项
$ yum install gcc gcc-c++ -y
# 下载组件包
$ wget https://www.zlib.net/zlib-1.2.11.tar.gz
$ wget https://nchc.dl.sourceforge.net/project/pcre/pcre/8.41/pcre-8.41.tar.gz
$ wget https://codeload.github.com/openssl/openssl/tar.gz/OpenSSL_1_0_2l -O openssl-1.0.2l.tar.gz
$ wget https://nginx.org/download/nginx-1.12.2.tar.gz
$ tar -zxvf zlib-1.2.11.tar.gz
$ tar -zxvf pcre-8.41.tar.gz
$ tar -zxvf openssl-1.0.2l.tar.gz
$ tar -zxvf nginx-1.12.2.tar.gz
$ mv openssl-OpenSSL_1_0_2l openssl-1.0.2l
$ cd nginx-1.12.2
$ ./configure \
    --prefix=/usr/local/nginx \
    --with-http_ssl_module \
    --with-http_flv_module \
    --with-http_stub_status_module \
    --with-http_gzip_static_module \
    --with-pcre=../pcre-8.41 \
    --with-zlib=../zlib-1.2.11 \
    --with-openssl=../openssl-1.0.2l
$ make && make install
```

## Debian

### Build

#### network

修改 nginx-1.11.3/objs/Makefile，找到 -Werror 并去掉，重新 make 即可。
 -Werror 的作用是它要求 GCC 将所有的警告当成错误进行处理，所以导致错误输出，不能进行下一步。

```bash
$ apt install build-essential libtool -y
$ apt install openssl libssl-dev libpcre3 libpcre3-dev zlib1g-dev -y
$ wget https://nginx.org/download/nginx-1.11.3.tar.gz
$ tar -zxvf nginx-1.11.3.tar.gz
$ cd nginx-1.11.3
$ ./configure
$ make && make install
```

## Windows

1. 下载 [winsw](https://github.com/winsw/winsw/releases/download/v2.1.2/WinSW.NET4.exe) 改文件名为 nginxservice.exe
2. 新建 nginxservice.xml
3. nginxservice.exe install

```xml
<service>
    <id>nginx</id>
    <name>nginx</name>
    <description>nginx</description>
    <logpath>D:\nginx-1.9.6\logs</logpath>
    <logmode>roll</logmode>
    <depend/>
    <executable>nginx.exe</executable>
    <stopexecutable>nginx.exe -s stop</stopexecutable>
</service>
```

