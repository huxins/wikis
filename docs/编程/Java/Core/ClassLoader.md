# ClassLoader

## 内置 ClassLoader

### Bootstrap ClassLoader

最顶层的类加载器，主要加载核心类库。
`$JAVA_HOME/lib` 下的 `rt.jar`、`resources.jar`、`charsets.jar` 等。
我们常用内置库都在里面，比如 java.util.、java.io.、java.nio.、java.lang. 等。
这个 ClassLoader 是由 C 代码实现的，我们将它称之为 `根加载器`。
由于引导类加载器涉及到虚拟机本地实现细节，开发者无法直接获取到类加载器的引用，所以无法直接通过引用进行操作。

### Extension ClassLoader

扩展的类加载器。
`$JAVA_HOME/lib/ext` 下的 jar 包。
常用的扩展库如，比如 `javax.swing.` 等。

### App ClassLoader

编写的代码以及使用的第三方 jar 包通常都是由它来加载的。
开发者可以直接使用系统类加载器。

```java
ClassLoader systemClassLoader = ClassLoader.getSystemClassLoader();
```

### URL ClassLoader

那些位于网络上静态文件服务器提供的 jar 包和 class 文件，JDK 内置了一个 `URLClassLoader`。
用户只需要传递规范的网络路径给构造器，就可以使用  URLClassLoader 来加载远程类库了。
URLClassLoader 不但可以加载远程类库，还可以加载本地路径的类库，取决于构造器中不同的地址形式。
ExtensionClassLoader 和 AppClassLoader 都是 URLClassLoader 的子类，它们都是从本地文件系统里加载类库。

## Context ClassLoader

```java
Thread.currentThread().getContextClassLoader().loadClass(name);
```

## 双亲委派

AppClassLoader 只负责加载 Classpath 下面的类库，如果遇到没有加载的系统类库怎么办，AppClassLoader 必须将系统类库的加载工作交给 BootstrapClassLoader 和 ExtensionClassLoader 来做，这就是我们常说的「双亲委派」。

某个特定的类加载器在接到加载类的请求时，首先将加载任务委托给父类加载器，<span style="color:red">依次递归</span>，如果父类加载器可以完成类加载任务，就成功返回；只有父类加载器无法完成此加载任务时，才自己去加载。<span style="color:red">防止内存中出现多份同样的字节码。</span>

## 资源文件

### 类的载入方式

所有资源都通过 ClassLoader 载入到 JVM 里，那么在载入资源时当然可以使用 ClassLoader，只是对于不同的资源还可以使用一些别的方式载入，例如对于类可以直接 new，对于文件可以直接做 IO 等。

- 使用 Class 静态方法 Class.forName 

```java
Class cls = Class.forName("com.alexia.B");
B b = (B)cls.newInstance();
```

- 使用 ClassLoader

```java
/* Step 1. Get ClassLoader */
ClassLoader cl = this.getClass.getClassLoader();;  // 获得ClassLoader

/* Step 2. Load the class */
Class cls = cl.loadClass("com.alexia.B"); // 使用第一步得到的ClassLoader来载入B

/* Step 3. new instance */
B b = (B)cls.newInstance(); // 有B的类得到一个B的实例
```

- 直接 new 

```java
B b = new B();
```

注：有人心里可能会想，对于类的载入方式我们都会选择最简单的第 3 种方式，前两种方式完全是多余。

实则不然，直接 new 的方式也是有局限的，举个最简单的例子：Java 中有包名的类怎么引用默认包中的类？当然说这个是因为有包名的类不能直接用 new 引用默认包中的类，那么怎么办呢？答案是使用反射机制，即使用第一种方式来加载类。而且，用 new() 和用 newInstance() 创建类的实例是不同的，主要区别简单描述如下：

从 JVM 的角度看，我们使用关键字 new 创建一个类的时候，这个类可以没有被加载。但是使用 newInstance() 方法的时候，就必须保证：
（1）这个类已经加载；
（2）这个类已经链接了（即为静态域分配存储空间，并且如果必须的话将解析这个类创建的对其他类的所有引用）。而完成上面两个步骤的正是 Class 的静态方法 forName() 所完成的，这个静态方法调用了启动类加载器，即加载 javaAPI 的那个加载器。
可以看出，newInstance() 实际上是把 new 这个方式分解为两步，即首先调用 Class 加载方法加载某个类，然后实例化。这样分步的好处是显而易见的。我们可以在调用 class 的静态加载方法 forName 时获得更好的灵活性，提供给了一种降耦的手段。



### 文件的载入方式

假设在 com.alexia.A 类里想读取文件夹 /com/alexia/config 里的文件 sys.properties，读取文件可以通过绝对路径或相对路径，绝对路径很简单，在 Windows 下以盘号开始，在 Unix 下以 "/" 开始。对于相对路径，<span style="color:red">其相对值是相对于 ClassLoader 的</span>，因为 ClassLoader 是一棵树，所以这个相对路径和 ClassLoader 树上的任何一个 ClassLoader 相对比较后可以找到文件，那么文件就可以找到。文件有以下三种加载方式：

- 直接用 IO 流读取 

```java
File f = new File("C:/test/com/aleixa/config/sys.properties"); // 使用绝对路径
File f = new File("com/alexia/config/sys.properties"); // 使用相对路径
InputStream is = new FileInputStream(f);
```

- 通过URL来获取

```java
URL url = new URL("path");
InputStream inStream = url.openStream();
```

- 使用 ClassLoader

```java
InputStream is = null;
is = this.getClass().getClassLoader().getResourceAsStream(
       "com/alexia/config/sys.properties"); //方法1
is = Thread.currentThread().getContextClassLoader().getResourceAsStream(
       "com/alexia/config/sys.properties"); //方法2
is = ClassLoader.getSystemResourceAsStream("com/alexia/config/sys.properties"); //方法3
```

- 使用 ResourceBundle

```java
ResourceBundle bundle = ResourceBundle.getBoundle("com.alexia.config.sys");
ResourceBundle resource = new PropertyResourceBundle(inStream);
```

注：如果是属性配置文件，也可以通过 <span style="color:red">java.util.Properties.load(is)</span> 将内容读到 Properties 里，Properties 默认认为 is 的编码是 ISO-8859-1，如果配置文件是非英文的，可能出现乱码问题。

```java
// 默认从classpath中找文件，name不能带“/”，否则会抛空指针
class.getClassLoader().getResourceAsStream(String name);
// 通过给定名称查找资源，查询资源的规则由给定的类的 ClassLoader 来实现，如果这个类由bootstrap加载，那么方法由 ClassLoader.getSystemResourceAsStream 代理执行。如果name以"/"开头，那么绝对路径是/后边跟的名字。 如果name不是以"/"开头，那么绝对路径是package名"."换成“/”以后再加name。
class.getResourceAsStream(String name)
```



### web 资源的载入方式

在 web 应用里当然也可以使用 ClassLoader 来载入资源，<span style="color:red">但更常用的情况是使用 ServletContext。</span>

用户程序通常在 classes 目录下，如果想读取 classes 目录里的文件，可以使用 ClassLoader，如果想读取其他的文件，一般使用 <span style="color:red">ServletContext.getResource()。</span>

如果使用 ServletContext.getResource(path) 方法，<span style="color:red">路径必须以 "/" 开始</span>，路径被解释成相对于 ContextRoot 的路径，此处载入文件的方法和 ClassLoader 不同，举例 "/WEB-INF/web.xml","/download/WebExAgent.rar"



## 几点思考

1. Java 虚拟机的第一个类加载器是 Bootstrap，这个加载器很特殊，<span style="color:red">它不是 Java 类，因此它不需要被别人加载，它嵌套在 Java 虚拟机内核里面，也就是 JVM 启动的时候 Bootstrap 就已经启动，它是用 C++ 写的二进制代码（不是字节码），</span>它可以去加载别的类。
   这也是我们在测试时为什么发现System.class.getClassLoader()结果为 null 的原因，这并不表示 System 这个类没有类加载器，而是它的加载器比较特殊，是BootstrapClassLoader，由于它不是 Java 类，因此获得它的引用肯定返回 null。
2. 能不能自己写个类叫java.lang.System？

通常不可以，但可以采取另类方法达到这个需求。

为了不让我们写 System 类，类加载采用委托机制，这样可以保证爸爸们优先，爸爸们能找到的类，儿子就没有机会加载。而 System 类是 Bootstrap 加载器加载的，就算自己重写，也总是使用 Java 系统提供的 System，**自己写的 System 类根本没有机会得到加载。**

但是，我们可以**自己定义一个类加载器来达到这个目的**，为了避免双亲委托机制，这个类加载器也必须是特殊的。由于系统自带的三个类加载器都加载特定目录下的类，如果我们自己的类加载器放在一个特殊的目录，那么系统的加载器就无法加载，也就是最终还是由我们自己的加载器加载。


