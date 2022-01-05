# web.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://java.sun.com/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
         metadata-complete="false"
         version="3.0">

    <display-name>myapp</display-name>
    
    <context-param>
		<param-name>javax.faces.PROJECT_STAGE</param-name>
		<param-value>Development</param-value>
	</context-param>
    
    <welcome-file-list>
		<welcome-file>index.jsp</welcome-file>
		<welcome-file>index.xhtml</welcome-file>
	</welcome-file-list>
	
	<error-page>
		<exception-type>
			javax.faces.application.ViewExpiredException
		</exception-type>
		<location>/index.jsp</location>
	</error-page>
	
</web-app>
```

### xmlns

```
http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd
http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_0.xsd
```

## 参考链接

- [部署描述符：web.xml](https://cloud.google.com/appengine/docs/standard/java/config/webxml)
- [web.xml File](https://docs.oracle.com/cd/E26180_01/Platform.94/ATGIntFrameGuide/html/s0204webxmlfile01.html)
- [A web.xml Deployment Descriptor Elements](https://docs.oracle.com/cd/E12839_01/web.1111/e13712/web_xml.htm#WBAPP502)
- [simple-web-app](https://github.com/mitreid-connect/simple-web-app)
- [Java Servlet 3.1 规范笔记](https://emacsist.github.io/emacsist/servlet/Java%20Servlet%203.1%20%E8%A7%84%E8%8C%83%E7%AC%94%E8%AE%B0.html)

