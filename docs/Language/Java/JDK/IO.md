# IO

## File

```java
// 相对工程路径
File file = new File("src/main/resources/javascript/test.js");
// 绝对路径
File file = new File("C:\\Users\\HUXINS\\Desktop","test.txt");
// 路径分隔符
File.pathSeparator;
// 名称分隔符
File.separator;
// 文件是否存在
file.exists();
// 文件绝对路径
file.getAbsolutePath();
// 文件名
file.getName();
// 创建文件
file.createNewFile();
// 创建文件夹
file.mkdir();
// 删除
file.delete();
// 移动
file.renameTo();
// 判断是文件
file.isFile();
// 判断是文件夹
file.isDirectory();
// 判断是否是隐藏文件
file.isHidden();
// 获取文件夹下的所有文件
file.list();
file.listFiles();
// 获取文件字节数
file.length();
```

## Files

```java
Files.copy(Paths.get("C:\\Users\\HUXINS\\Desktop\\test.txt"), new FileOutputStream(file));
```

## try-with-resources

```java
try(FileInputStream fis = new FileInputStream(file);) {
    byte[] b = new byte[fis.available()];
    fis.read(b);
    System.out.println("文件读取内容如下："+new String(b));
} catch (IOException e) {
    e.printStackTrace();
}
```

## FileOutputStream

```java
FileOutputStream fos = new FileOutputStream(file,true);
fos.write("huxins".getBytes());
fos.close();
```

## FileInputStream

```java
FileInputStream fis = new FileInputStream(file);
byte[] b = new byte[1024];
while (fis.read(b) != -1) {
    System.out.println(new String(b));
}
fis.close();
```

## FileWriter

```java
FileWriter fw = new FileWriter(file);
fw.write("字符");
fw.flush();
```

## FileReader

```java
FileReader fr = new FileReader(file);
char[] c = new char[1024];
while (fr.read(c) != -1) {
    System.out.println(new String(c));
}
fr.close();
```

## OutputStreamWriter

```java
FileOutputStream fos = new FileOutputStream(file,true);
OutputStreamWriter osw = new OutputStreamWriter(fos, "GBK");
osw.write("星星");
osw.close();
```

## InputStreamReader

```java
FileInputStream fis = new FileInputStream(file);
InputStreamReader isr = new InputStreamReader(fis,"GBK");
char[] c = new char[1024];
while (isr.read(c) != -1) {
    System.out.println(new String(c));
}
isr.close();
```

## BufferedOutputStream

```java
FileOutputStream fos = new FileOutputStream(file);
BufferedOutputStream bos = new BufferedOutputStream(fos);
bos.write("星星".getBytes());
bos.close();
```

## BufferedInputStream

```java
FileInputStream fis = new FileInputStream(file);
BufferedInputStream bis = new BufferedInputStream(fis);
byte[] b = new byte[1024];
while (bis.read(b) != -1) {
    System.out.println(new String(b));
}
bis.close();
```

## BufferedWriter

```java
FileWriter fw = new FileWriter(file);
BufferedWriter bw = new BufferedWriter(fw);
bw.write("天空");
bw.flush();
```

## BufferedReader

```java
FileReader fr = new FileReader(file);
BufferedReader br = new BufferedReader(fr);
String c;
while ((c = br.readLine()) != null) {
    System.out.println(c);
}
```

## LineNumberReader

## ByteArrayOutputStream

```java
ByteArrayOutputStream baos = new ByteArrayOutputStream();
baos.write("ABCDE".getBytes());
System.out.println(baos.toString());
```

## ByteArrayInputStream

```java
byte[] buffet = "星星".getBytes();
ByteArrayInputStream bais = new ByteArrayInputStream(buffet);
byte[] b = new byte[1024];
while (bais.read(b) != -1) {
    System.out.println(new String(b));
}
```

## CharArrayReader

## StringReader

## SequenceInputStream

```java
Vector<InputStream> vector = new Vector<>();
vector.addElement(new FileInputStream(file));
Enumeration<InputStream> elements = vector.elements();
SequenceInputStream sis = new SequenceInputStream(elements);
byte[] b = new byte[1024];
while (sis.read(b) != -1) {
    System.out.println(new String(b));
}
```

## ObjectOutputStream

Serializable

```java
Person person = new Person("zhangsan", 18);
FileOutputStream fos = new FileOutputStream(file);
ObjectOutputStream oos = new ObjectOutputStream(fos);
oos.writeObject(person);
oos.close();
```

## ObjectInputStream

```java
FileInputStream fis = new FileInputStream(file);
ObjectInputStream ois = new ObjectInputStream(fis);
Object readObject = ois.readObject();
System.out.println(readObject);
```

## PrintStream

## PrintWriter

```java
PrintWriter pw = new PrintWriter(new FileOutputStream(file),true);
pw.write("我的天");
pw.print("我的地");
pw.flush();
pw.close();
```

## Properties

```java
Properties properties = new Properties();
FileInputStream fis = new FileInputStream(file);
properties.load(fis);
fis.close();
for (Object string : properties.keySet()) {
    System.out.println(string + "=" + properties.getProperty((String) string));
}
Properties properties = new Properties();
properties.setProperty("name", "huxins");
properties.setProperty("pass", "打扰了");
FileOutputStream fos = new FileOutputStream(file);
properties.store(fos, "haha");
fos.close();
```

## RandomAccessFile

