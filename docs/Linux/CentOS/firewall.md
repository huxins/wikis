# firewall

```bash
systemctl disable firewalld.service
firewall-cmd --state
firewall-cmd --reload
firewall-cmd --list-ports
firewall-cmd --zone=public --add-port=5432/tcp --permanent
```

