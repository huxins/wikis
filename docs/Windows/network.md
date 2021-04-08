# network

```powershell
# TCP端口转发
$ netsh interface portproxy add v4tov4 listenaddress=0.0.0.0 listenport=53 connectaddress=208.67.222.222 connectport=5353
# 取消端口转发
$ netsh interface portproxy delete v4tov4 listenaddress=0.0.0.0 listenport=53
# 查看指定端口的占用进程
netstat -aon | findstr "1099"
# 查看PID对应的进程
tasklist | findstr "1724"
# 结束该进程
taskkill /f /t /im tor.exe
```

