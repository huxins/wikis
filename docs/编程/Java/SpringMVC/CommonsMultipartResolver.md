# CommonsMultipartResolver

## 解析器配置

```xml
<bean id="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
    <!-- 设定默认编码 -->
    <property name="defaultEncoding" value="UTF-8"/>
    <!-- 文件最大值 -->
    <property name="maxUploadSize" value="5242880"/>
    <!-- 缓存最大值，默认为10240 -->
    <property name="maxInMemorySize" value="40960"/>
    <!-- 上传文件的临时路径 -->
    <property name="uploadTempDir" value="fileUpload/temp"/>
    <!-- 延迟文件解析 -->
    <property name="resolveLazily" value="true"/>
</bean>
```

## 依赖

```xml
<dependency>
    <groupId>commons-io</groupId>
    <artifactId>commons-io</artifactId>
    <version>2.11.0</version>
</dependency>
<dependency>
    <groupId>commons-fileupload</groupId>
    <artifactId>commons-fileupload</artifactId>
    <version>1.4</version>
</dependency>
```

## 获取文件

```java
CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(request.getServletContext());
if (multipartResolver.isMultipart(request)) {
    MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest)request;
    Iterator<String> iter = multiRequest.getFileNames();
    while (iter.hasNext()) {
        MultipartFile file = multiRequest.getFile(iter.next());
        String originalName = file.getOriginalFilename();
        System.out.println(originalName);
    }
}
```

自动接收

```java
@RequestMapping("/hello")
public void hello(MultipartFile picture) {
    System.out.println(picture.getOriginalFilename());
    System.out.println(123);
}
```

