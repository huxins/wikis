# Jetty

```xml
<plugin>
    <groupId>org.eclipse.jetty</groupId>
    <artifactId>jetty-maven-plugin</artifactId>
    <version>9.4.38.v20210224</version>
</plugin>
```

## 启动 & 停止

```bash
$ mvn jetty:run
```

如果你希望通过命令  `mvn jetty:stop` 执行关闭 jetty 服务，你需要像下面一样在你的 pom.xml 配置文件中添加一个特殊的端口和控制键

```xml
<configuration>
    [...]
    <stopKey>shutdown</stopKey>
    <stopPort>9966</stopPort>
    [...]
</configuration>
```

## 端口

```bash
$ mvn -Djetty.port=8081 jetty:run
```

pom

```xml
<configuration>
    [...]
    <httpConnector>
        <port>8093</port>
    </httpConnector>
    [...]
</configuration>
```

## 自动热部署

```bash
$ mvn -Djetty.scanIntervalSeconds=2 jetty:run
```

pom

```xml
<configuration>
    [...]
    <scanIntervalSeconds>10</scanIntervalSeconds>
    [...]
</configuration>
```

- 手动重加载

在你的 pom.xml 文件中添加如下配置，reload 的可选值 ：[automatic|manual]

```xml
<configuration>
    [...]
    <reload>manual</reload>
    [...]
</configuration>
```

默认值为 automatic，它与大于 0 的 scanIntervalSeconds 节点一起作用，实现自动热部署的工作。

设为 manual 的好处是，当你改变文件内容并保存时，不会马上触发自动扫描和重部署的动作。

你还可以继续的修改，直至你在 Console 或命令行中敲回车键（Enter）的时候才触发重新加载的动作。

```bash
$ mvn -Djetty.reload=manual jetty:run
```

## 访问日志

在你的 pom.xml 文件添加如下配置

```xml
<configuration>
    [...]
    <requestLog implementation="org.eclipse.jetty.server.NCSARequestLog">
        <filename>target/access-yyyy_mm_dd.log</filename>
        <filenameDateFormat>yyyy_MM_dd</filenameDateFormat>
        <logDateFormat>yyyy-MM-dd HH:mm:ss</logDateFormat>
        <logTimeZone>GMT+8:00</logTimeZone>
        <append>true</append>
        <logServer>true</logServer>
        <retainDays>120</retainDays>
        <logCookies>true</logCookies>
    </requestLog>
    [...]
</configuration>
```

org.eclipse.jetty.server.NCSARequestLog 是 org.eclipse.jetty.server.RequestLog 的一个实现类。

org.eclipse.jetty.server.NCSARequestLog 是一种伪标准的 NCSA 日志格式。下面是一些节点参数的解释：

filename：日志文件的名称
filenameDateFormat：日志文件的名称的日期格式，它要求日志文件名必须含有 yyyy_mm_dd 串
logDateFormat：日志内容的时间格式
logTimeZone：时区
append：追加到日志
logServer：记录访问的主机名
retainDays：日志文件保存的天数，超过删除
logCookies：记录 cookies

## Web 上下文

```xml
<configuration>
    [...]
    <webApp>
        <contextPath>/${project.artifactId}</contextPath>
    </webApp>
    [...]
</configuration>
```

项目的静态资源文件目录默认是 src/main/webapp，如果静态资源目录有多个，或者不在默认的 src/main/webapp 目录下，可做如下配置

```xml
<configuration>
    [...]
    <webApp>
        <contextPath>/${project.artifactId}</contextPath>
        <resourceBases>
            <resourceBase>${project.basedir}/src/main/webapp</resourceBase>
            <resourceBase>${project.basedir}/commons</resourceBase>
        </resourceBases>
    </webApp>
    [...]
</configuration>
```

