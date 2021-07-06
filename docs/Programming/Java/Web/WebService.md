# WebService

## axis2

- [Axis2](https://axis.apache.org/axis2/java/core/download.html)
- [Axis2介紹和例子 — 完整版](https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/454668/)
- [使用Axis2方式发布webService的三种方式](https://blog.csdn.net/zhangmeng_07/article/details/54663605)

### 发布方式

axis2-1.6.1-bin.zip 文件中包含了 Axis2 中所有的 Jar 文件。

axis2-1.6.1-war.zip 文件用于将 WebService 发布到 Web 容器中。

#### 简单的POJO方式

编译POJO类后，将 class 文件放到 `webapps\axis2\WEB-INF\pojo` 目录中

```http
http://localhost:8080/axis2/services/listServices
```

- POJO类不能使用 package 关键字声明包。

Axis2 在默认情况下可以热发布 WebService，也就是说，将 WebService 的 .class 文件复制到 pojo 目录中时，Tomcat 不需要重新启动就可以自动发布 WebService。如果想取消Axis2的热发布功能，可以打开 `webapps\axis2\WEB-INF\conf\axis2.xml`，找到如下的配置代码，将 true 改为 false 即可。

```xml
<parameter name="hotdeployment">true</parameter>
```

Axis2在默认情况下虽然是热发布，但并不是热更新。将 Axis2 设为热更新，在 axis2.xml 文件中找到如下的配置代码， 将 false 改为 true 即可。

```xml
<parameter name="hotupdate">false</parameter>
```

发布 WebService 的 pojo 目录只是默认的，如果想在其他的目录发布 WebService，可以打开 axis2.xml 文件，并在 \<axisconfig> 元素中添加如下的子元素，允许在 `webapps\axis2\WEB-INF\my` 目录中发布 WebService。

```xml
<deployer extension=".class" directory="my" class="org.apache.axis2.deployment.POJODeployer"/>
```

#### 打JAR包的方式

用 Axis2 实现 WebService，虽然可以将 POJO 类放在 `axis2\WEB-INF\pojo` 目录中直接发布成 WebService，这样做不需要进行任何配置，但这些 POJO 类不能在任何包中。这似乎有些不方便。为此，Axis2 也允许将带包的 POJO 类发布成 WebService。

将带包（package）的类发布成 WebService，需要一个 services.xml 文件，这个文件需要放在 META-INF 目录中，该文件的内容如下

```xml
<?xml version="1.0" encoding="utf-8"?>

<!-- webService发布名称,命名空间 -->
<service name="HelloServiceNew" targetNamespace="http://ws.apache.org/ax2"> 
  <!-- 更改schemaNamespace，也可使用默认值，客户端调用时会使用 -->  
  <schema schemaNamespace="http://sdjxd.com.cn"/>  
  <!-- webService描述 -->  
  <description>Web Service实例一</description>  
  <!-- webService的实现类 -->  
  <parameter name="ServiceClass">com.sinosoft.webservice.HelloServiceNew</parameter>
  <!-- 配置消息接收器，Axis2会自动选择 -->  
  <messageReceivers>
    <messageReceiver mep="http://www.w3.org/2004/08/wsdl/in-out" class="org.apache.axis2.rpc.receivers.RPCMessageReceiver"/>
    <messageReceiver mep="http://www.w3.org/2004/08/wsdl/in-only" class="org.apache.axis2.rpc.receivers.RPCInOnlyMessageReceiver"/>
  </messageReceivers>
</service>
```

另外 services.xml 文件中也可以直接指定 WebService 类的方法，如可以用下面的配置代码来发布 WebService

```xml
<service name=" HelloServiceNew "> 
  <description>Web Service例子</description>  
  <parameter name="ServiceClass">com.sinosoft.webservice.HelloServiceNew</parameter>  
  <operation name="sayHello"> 
    <messageReceiver class="org.apache.axis2.rpc.receivers.RPCMessageReceiver"/> 
  </operation>  
  <operation name="updateData"> 
    <messageReceiver class="org.apache.axis2.rpc.receivers.RPCInOnlyMessageReceiver"/> 
  </operation> 
</service>
```

如果想发布多个 WebService，可以使用 \<serviceGroup> 元素

```xml
<serviceGroup> 
  <service name="myService1">...</service>  
  <service name="myService2">...</service> 
</serviceGroup>
```

使用这种方式发布 WebService，必须打包成 .aar 文件，.aar 文件实际上就是改变了扩展名的 .jar 文件。

现在建立了两个文件：HelloServiceNew.java 和 services.xml。

将 HelloServiceNew.java 编译，生成 HelloServiceNew.class。

services.xml 和 HelloServiceNew.class 文件的位置如下：

`D:\ws\com\sinosoft\webservice\HelloServiceNew.class`

`D:\ws\META-INF\services.xml`

在 windows 控制台中进入 ws 目录，并输入如下的命令生成 .aar 文件

```bash
jar cvf ws.aar .
```

最后将 ws.aar 文件复制到 `webapps\axis2\WEB-INF\services` 目录中

启动Tomcat后，就可以调用这个 WebService 了。

#### 不打JAR包的方式

有一个最简单的方法就是把 axis2.war 中的内容作为 Web Project 的基础, 来进行开发

1. 新建Web Project，名为 `WebServiceDemo`

2. 下载 axis2-1.6.1-war.zip 包，解压缩

   将 axis2/WEB-INF/lib 里的 jar 包拷贝到 `WebServiceDemo/WebRoot/WEB-INF/lib/`

   将 axis2.war/axis2-web 拷贝至 `WebServiceDemo/WebRoot/axis2-web/`

   axis2-web 可以只保留 `index.jsp`，`httpbase.jsp`，`listServices.jsp`

3. 配置 axis2 servlet

```xml
<!-- Axis2 Service -->
<servlet>
    <servlet-name>AxisServlet</servlet-name>
    <servlet-class>org.apache.axis2.transport.http.AxisServlet</servlet-class>
    <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
    <servlet-name>AxisServlet</servlet-name>
    <url-pattern>/services/*</url-pattern>
</servlet-mapping>
```

4. 配置 services.xml，目录结构 `WEB-INF/services/MyWebService/META-INF/services.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<serviceGroup>
       <service name="myService">
              <description>Web Service例子</description>
              <parameter name="ServiceClass">service.MyService</parameter>
              <messageReceivers>
                     <messageReceiver mep="http://www.w3.org/2004/08/wsdl/in-out" class="org.apache.axis2.rpc.receivers.RPCMessageReceiver" />
                     <messageReceiver mep="http://www.w3.org/2004/08/wsdl/in-only" class="org.apache.axis2.rpc.receivers.RPCInOnlyMessageReceiver" />
              </messageReceivers>
       </service>
</serviceGroup>
```

