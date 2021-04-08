# ocserv

- [recipes](https://gitlab.com/openconnect/recipes)
- [openconnect-gui](https://openconnect.github.io/openconnect-gui/)
- [AnyConnect](https://download.escope.net/Cisco/asa/vpn/)
- [威伯斯云](https://www.vps000.org/)
- [配置不代理局域网](https://v2ex.com/t/665868)
- [ocserv-cn-no-route](https://github.com/CNMan/ocserv-cn-no-route)
- [家庭搭建openconnect vpn](https://yuerblog.cc/2020/11/21/%e5%ae%b6%e5%ba%ad%e6%90%ad%e5%bb%baopenconnect-vpn/)
- [野生思科分离隧道](https://beijing.bb/splitting-network-traffic-based-on-destinations/)
- [OpenWRT 路由器 OpenConnect VPN 详细图文教程](https://www.ioiox.com/archives/90.html)
- [VPN establishment capability for a remote user](https://www.petenetlive.com/KB/Article/0000546)
- [through Remote Desktop](https://blog.expta.com/2020/04/how-to-enable-cisco-anyconnect-vpn.html)

**安装**

```bash
apt update
apt install ocserv
```

**ssl证书**

```bash
mkdir /root/certificates
cd /root/certificates
# ca
tee /root/certificates/ca.tmpl <<-'EOF'
cn = "HX CA"
organization = "HX"
serial = 1
expiration_days = 3650
ca
signing_key
cert_signing_key
crl_signing_key
EOF
# user
tee /root/certificates/user.tmpl <<-'EOF'
cn = "huxins"
unit = "HX"
expiration_days = 3650
signing_key
tls_www_client
EOF
# server
tee /root/certificates/server.tmpl <<-'EOF'
cn = "a sever's name, usually matches hostname"
organization = "your organization"
serial = 2
expiration_days = 3650
signing_key
encryption_key
tls_www_server
dns_name = "your organization's host name"
#ip_address = "if no hostname uncomment and set the IP address here"
EOF
# 生成CA证书
certtool --generate-privkey --outfile ca-key.pem
certtool --generate-self-signed --hash SHA256 --load-privkey ca-key.pem --template ca.tmpl --outfile ca-cert.pem
certtool -i --infile ca-cert.pem
# 生成 Diffie-Hellman 密钥
certtool --generate-dh-params --outfile /etc/ocserv/ssl/dh.pem
# CA签发VPN证书
certtool --generate-privkey --outfile server-key.pem
certtool --generate-certificate --hash SHA256 --load-privkey server-key.pem --load-ca-certificate ca-cert.pem --load-ca-privkey ca-key.pem --template server.tmpl --outfile server-cert.pem
certtool -i --infile user-cert.pem
# CA签发用户证书
certtool --generate-privkey --outfile user-key.pem
certtool --generate-certificate --hash SHA256 --load-privkey user-key.pem --load-ca-certificate ca-cert.pem --load-ca-privkey ca-key.pem --template user.tmpl --outfile user-cert.pem
certtool -i --infile user-cert.pem
# 证书链补全
cat /root/certificates/ca-cert.pem >> /root/certificates/user-cert.pem
# 生成.p12证书文件
openssl pkcs12 -export -inkey user-key.pem -in user-cert.pem -name "huxins" -certfile ca-cert.pem -caname "HX CA" -out huxins.AnyConnect.p12 -passout pass:12345678
# 把VPN证书拷到ocserv配置目录下
cp server-cert.pem server-key.pem /etc/ocserv/
```

**配置**

/etc/ocserv/ocserv.conf

```ini
auth = "certificate"
ca-cert = /etc/ocserv/ca-cert.pem
cert-user-oid = 2.5.4.3
server-cert = /etc/ocserv/server-cert.pem
server-key = /etc/ocserv/server-key.pem
tcp-port = 443
udp-port = 443
ipv4-network = 192.168.8.0
ipv4-netmask = 255.255.255.0
dns = 8.8.8.8
no-route = 172.26.201.0/255.255.255.0
route = 192.168.11.0/255.255.255.0
```

**创建VPN用户**

```bash
ocpasswd -c /etc/ocserv/ocpasswd myvpnuser
```

**VPN拨号**

```bash
echo $(sudo cat /etc/openconnect/password) | sudo openconnect -b https://YourORGVPNURL -u YourOrgVPNUsername --passwd-on-stdin
```

**VPN服务**

```bash
ocserv -c /etc/ocserv/ocserv.conf -f -d 1
```

**防火墙**

```bash
iptables -t nat -I POSTROUTING -s 192.168.100.0/24 -j MASQUERADE
iptables -I FORWARD -i vpns+ -s 192.168.100.0/24 -j ACCEPT
iptables -I INPUT -i vpns+ -s 192.168.100.0/24 -j ACCEPT

firewall-cmd --permanent --zone=public --add-port=443/tcp
firewall-cmd --permanent --zone=public --add-port=443/udp
firewall-cmd --permanent --add-masquerade
firewall-cmd --permanent --direct --passthrough ipv4 -t nat -A POSTROUTING -o ens34 -j MASQUERADE
firewall-cmd --reload
```

