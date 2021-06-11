# Install

## Linux

- 在 bin 路径下创建 setenv.sh

```bash
$ chmod +x setenv.sh
# add tomcat pid
CATALINA_PID="/home/tomcat/tomcat.pid"
# add java opts
JAVA_OPTS="-server -XX:PermSize=256M -XX:MaxPermSize=1024m -Xms1024M -Xmx2048M -XX:MaxNewSize=512m"
```

- setclasspath.sh

```bash
$ export JAVA_HOME=/usr/local/package/jdk1.8.0_181
$ export JRE_HOME=/usr/local/package/jdk1.8.0_181/jre
```

- tomcat.service

```bash
[Unit]
Description=Tomcat
After=syslog.target network.target remote-fs.target nss-lookup.target

[Service]
Type=forking
Environment="JAVA_HOME=/root/package/jdk1.8.0_211"
Environment="JAVA_OPTS=-Djava.security.egd=file:///dev/urandom"
Environment="CATALINA_BASE=/usr/tomcat"
Environment="CATALINA_HOME=/usr/tomcat"
Environment="CATALINA_PID=/usr/tomcat/temp/tomcat.pid"
Environment="CATALINA_OPTS=-Xms512M -Xmx1024M -server -XX:+UseParallelGC"
PIDFile=/root/tomcat/tomcat.pid
ExecStart=/root/tomcat/bin/startup.sh
ExecReload=/bin/kill -s HUP $MAINPID
ExecStop=/bin/kill -s QUIT $MAINPID
# ExecStart=/home/mes/tomcat8/bin/catalina.sh start
# ExecReload=/home/mes/tomcat8/bin/catalina.sh restart
# ExecStop=/home/mes/tomcat8/bin/catalina.sh stop
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

## Windows

```powershell
$ service.bat install tomcat8
$ service.bat remove tomcat8
# 设置依赖关系，限制启动顺序
$ sc config TomcatService depend= MySQLService
```

