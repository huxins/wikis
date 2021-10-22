# HttpServletResponse

## OutputStream

在中文平台中，`getBytes` 方法默认返回的是一个 `GBK` 或者 `GB2312` 编码的字节数组，其中中文字符，各占两个字节。
在英文平台中，`getBytes` 方法默认返回的是一个 `ISO-8859-1` 编码的字节数组，每个字符都只占一个字节。

```java
// 设置头信息，告诉浏览器回传数据编码格式
resp.setHeader("Content-Type", "text/html; charset=utf-8");
resp.getOutputStream().write("我的世界".getBytes("utf-8"));
```

## Writer

`Tomcat` 默认的编码是 `ISO 8859-1`。
`ISO-8859-1` 编码目前在浏览器中都是以 `Windows-1252` 来实现的。

```java
// 设置Tomcat编码
resp.setCharacterEncoding("utf-8");
// 设置头信息，告诉浏览器回传数据编码格式，同时会设置Tomcat编码
resp.setContentType("text/html; charset=utf-8");
resp.getWriter().write("我的世界");
```

## 文件下载

中文名称编码

`new String(fileName.getBytes("utf-8"),"iso-8859-1")`

`URLEncoder.encode(fileName, "UTF-8")`

```java
String path = this.getServletContext().getRealPath("123.jpg");
File file = new File(path);
String fileName = file.getName();
//设置消息头，展示形式
resp.setHeader("Content-Disposition", "attachment; filename=" + URLEncoder.encode(fileName, "UTF-8"));
FileInputStream fileInputStream = new FileInputStream(file);
ServletOutputStream os = resp.getOutputStream();
byte[] b = new byte[1024];
int len;
while ((len = fileInputStream.read(b)) != -1) {
    os.write(b, 0, len);
}
fileInputStream.close();
```

