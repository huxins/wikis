# Maven

## 安装

```bash
$ wget https://dlcdn.apache.org/maven/maven-3/3.8.4/binaries/apache-maven-3.8.4-bin.tar.gz
$ export MAVEN_HOME=/usr/local/apache-maven
$ export PATH=${PATH}:${MAVEN_HOME}/bin
```

## 配置

```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.2.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.2.0 https://maven.apache.org/xsd/settings-1.2.0.xsd">
    <localRepository>D:\Maven-Jar</localRepository>
    <pluginGroups/>
    <proxies/>
    <servers/>
    <mirrors>
        <mirror>
            <id>huaweicloud</id>
            <mirrorOf>central</mirrorOf>
            <name>huawei maven mirror</name>
            <url>https://mirrors.huaweicloud.com/repository/maven/</url>
        </mirror>
        <mirror>
            <id>aliyun</id>
            <mirrorOf>central</mirrorOf>
            <name>aliyun maven mirror</name>
            <url>https://maven.aliyun.com/nexus/content/repositories/central/</url>
        </mirror>
        <mirror>
            <id>repo1</id>
            <mirrorOf>central</mirrorOf>
            <name>source address</name>
            <url>https://repo1.maven.org/maven2/</url>
        </mirror>
    </mirrors>
    <profiles/>
</settings>
```

## 生命周期

- default

  1. validate
  2. compile
  3. test
  4. package
  5. verify
  6. install
  7. deploy

- clean
- site

```bash
$ mvn clean package -Dmaven.test.skip=true
```

## POM

- `project` root
- `modelVersion` - should be set to 4.0.0
- `groupId` - the id of the project's group.
- `artifactId` - the id of the artifact (project)
- `version` - the version of the artifact under the specified group

## Plugins

### 打包时包含本地 JAR 包

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-compiler-plugin</artifactId>
    <version>3.8.1</version>
    <configuration>
        <source>1.8</source>
        <target>1.8</target>
        <encoding>UTF-8</encoding>
        <compilerArguments>
            <extdirs>${project.basedir}/src/main/webapp/WEB-INF/lib</extdirs>
        </compilerArguments>
    </configuration>
    <dependencies>
        <dependency>
            <groupId>org.codehaus.plexus</groupId>
            <artifactId>plexus-compiler-eclipse</artifactId>
            <version>2.8.5</version>
        </dependency>
    </dependencies>
</plugin>
```

如果使用的maven版本高于3.1，上述配置已被废弃，需要做如下修改

```xml
<compilerArgs>
        <arg>-extdirs</arg>
        <arg>${project.basedir}/src/main/webapp/WEB-INF/lib</arg>
</compilerArgs>
```

### 强制将 xml 文件打到 war 包中

```xml
<resources> 
  <resource> 
    <directory>src/main/java</directory>  
    <includes> 
      <include>**/*.xml</include> 
    </includes>  
    <filtering>false</filtering> 
  </resource>  
  <resource> 
    <directory>${basedir}/src/main/resources</directory> 
  </resource> 
</resources>
```

### jetty

```xml
<plugin>
    <groupId>org.eclipse.jetty</groupId>
    <artifactId>jetty-maven-plugin</artifactId>
    <version>9.2.8.v20150217</version>
    <configuration>
        <httpConnector>
            <port>8093</port>
        </httpConnector>
    </configuration>
</plugin>
```

## 参考链接

- [Maven Central Repository Search](https://search.maven.org/)
- [MvnRepository](https://mvnrepository.com/)
- [Central Repository](https://repo.maven.apache.org/maven2/)
- [Maven CLI Options Reference](https://maven.apache.org/ref/3.8.4/maven-embedder/cli.html)
- [Maven 命令行选项](https://www.cnblogs.com/zz0412/p/command.html)
- [Lifecycles Reference](https://maven.apache.org/ref/3.8.4/maven-core/lifecycles.html)
- [Maven skip tests](https://stackoverflow.com/questions/24727536/maven-skip-tests)

