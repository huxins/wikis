# Install

- setenv.sh
- setclasspath.sh

## Linux

- tomcat.service

```bash
[Unit]
Description=Tomcat
After=syslog.target network.target remote-fs.target nss-lookup.target

[Service]
Type=forking
Environment="JAVA_HOME=/home/jdk1.8"
Environment="JAVA_OPTS=-Djava.security.egd=file:///dev/urandom"
Environment="CATALINA_BASE=/home/tomcat"
Environment="CATALINA_HOME=/home/tomcat"
Environment="CATALINA_PID=/home/tomcat/temp/tomcat.pid"
Environment="CATALINA_OPTS=-Xms512M -Xmx1024M -server -XX:+UseParallelGC"
PIDFile=/home/tomcat/temp/tomcat.pid
ExecStart=/home/tomcat/bin/startup.sh
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

```sh
$ service.bat install tomcat8
$ service.bat remove tomcat8
# 设置依赖关系，限制启动顺序
$ sc config TomcatService depend= MySQLService
```

