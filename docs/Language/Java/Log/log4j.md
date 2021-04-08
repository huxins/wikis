# log4j

IDEA log path

```
%HomePath%\.IntelliJIdea2019.1\system\tomcat\project\logs
```

log4j 的等级顺序（低到高）： DEBUG < INFO < WARN < ERROR < FATAL

```properties
# %d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n
# %p %d{yyyy-MM-dd HH:mm:ss} - %m%n
log4j.rootLogger=DEBUG,Console
# Redirect log messages to console
log4j.appender.Console=org.apache.log4j.ConsoleAppender
#log4j.appender.Console.Target=System.out
log4j.appender.Console.layout=org.apache.log4j.PatternLayout
log4j.appender.Console.layout.ConversionPattern=%d [%t] %-5p [%c] - %m%n
log4j.logger.org.apache=INFO
# Redirect log messages to a log file, support file rolling.
log4j.appender.file=org.apache.log4j.RollingFileAppender
log4j.appender.file.File=${catalina.base}/logs/mes/log4j-application.log
#log4j.appender.file.Threshold=WARN 
log4j.appender.file.MaxFileSize=5MB
log4j.appender.file.MaxBackupIndex=10
log4j.appender.file.layout=org.apache.log4j.PatternLayout
log4j.appender.file.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n

log4j.logger.org.springframework.jdbc.core=info
log4j.logger.org.springframework.jdbc.core.JdbcTemplate=info
log4j.logger.org.springframework.jdbc.core.StatementCreatorUtils=info, file

log4j.logger.java.sql = info
log4j.logger.java.sql.Connection = info
log4j.logger.java.sql.Statement = info
log4j.logger.java.sql.PreparedStatement = info, fileout
log4j.logger.java.sql.ResultSet = info

# 每日
log4j.logger.wslogfile=INFO,wslogfile
log4j.appender.wslogfile=org.apache.log4j.DailyRollingFileAppender
log4j.appender.wslogfile.File=${catalina.base}/logs/wslogs/wslog.log
log4j.appender.wslogfile.DatePattern=yyyy-MM-dd'.log'
log4j.appender.wslogfile.Encoding=UTF-8
log4j.appender.wslogfile.layout=org.apache.log4j.PatternLayout
log4j.appender.wslogfile.layout.ConversionPattern=%t %p %d{yyyy-MM-dd HH:mm:ss:SSS} - %m%n
```

Java

```java
//建立Logger的一个实例，命名为“com.foo”
Logger logger = Logger.getLogger("com.foo"); //"com.foo"是实例进行命名，也可以任意
//设置logger的级别。通常不在程序中设置logger的级别。一般在配置文件中设置。
logger.setLevel(Level.INFO);
Logger barlogger = Logger.getLogger("com.foo.Bar");
//下面这个请求可用，因为WARN >= INFO
logger.warn("Low fuel level.");
//下面这个请求不可用，因为DEBUG < INFO
logger.debug("Starting search for nearest gas station.");
//命名为“com.foo.bar”的实例barlogger会继承实例“com.foo”的级别。因此，下面这个请求可用，因为INFO >= INFO
barlogger.info("Located nearest gas station.");
//下面这个请求不可用，因为DEBUG < INFO
barlogger.debug("Exiting gas station search");
```

## appenders

禁用与使用日志请求只是Log4j其中的一个小小的地方，Log4j日志系统允许把日志输出到不同的地方，如控制台（Console）、文件（Files），根据天数或者文件大小产生新的文件，以流的形式发送到其它地方，异步记录日志等等。

1. 定义：appender其实就是输出源(output destination, target, endpoint)。可以是终端、文件、图形界面、远程socket服务、JMS、邮件等。还支持日志的异步写入。
2. 一个 logger 可以有一个或多个 appender，即日志可以同时记录到多个地方。通过<span style="color:red">logger.addAppender(Appender newAppender)</span> 方法将 appender 添加到指定的 logger。
3. 每一个发送给logger的合法（即没有被logger等级过滤掉）日志请求都会发送到该logger关联的每一个appenders和该logger的每一个父logger的appender。换一种说法就是logger会继承父 logger 的appender。可以通过设置 additivity=false 取消。


