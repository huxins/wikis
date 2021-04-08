# ClassLoader

- [老大难的 Java ClassLoader 再不理解就老了](https://juejin.im/post/5c04892351882516e70dcc9b)

ClassLoader 主要对类的请求提供服务，当 JVM 需要某类时，它根据名称向 ClassLoader 要求这个类，然后由 ClassLoader 返回这个类的 class 对象。

ClassLoader 负责载入系统的所有资源（Class，文件，图片，来自网络的字节流等），通过 ClassLoader 从而将资源载入 JVM 中。每个 class 都有一个引用，指向自己的 ClassLoader。

## 类加载过程

1. 加载，加载类的二进制文件。
2. 链接

    1. 验证，验证字节码的结构是否正确
    2. 准备，给静态成员分配空间并赋予默认值
    3. 解析，将符号引用变为直接引用
3. 初始化，为静态成员赋予自己给定的初值

类的实例化的顺序

1. 静态成员、方法与静态代码块的初始化与执行
2. 普通成员、方法与普通代码块的初始化与执行
3. 构造函数的执行（父类的构造函数先执行）

## 内置 ClassLoader

JVM 中内置了三个重要的 ClassLoader，分别是 BootstrapClassLoader、ExtensionClassLoader 和 AppClassLoader。

<span style="color:red">BootstrapClassLoader</span> 负责加载 JVM 运行时核心类，这些类位于 $JAVA_HOME/lib/rt.jar 文件中，我们常用内置库 java.xxx.* 都在里面，比如 java.util.、java.io.、java.nio.、java.lang. 等等。这个 ClassLoader 比较特殊，它是由 C 代码实现的，我们将它称之为「根加载器」。由于引导类加载器涉及到虚拟机本地实现细节，开发者无法直接获取到启动类加载器的引用，所以不允许直接通过引用进行操作。

<span style="color:red">ExtensionClassLoader</span> 负责加载 JVM 扩展类，比如 swing 系列、内置的 js 引擎、xml 解析器 等等，这些库名通常以 javax 开头，它们的 jar 包位于 $JAVA_HOME/lib/ext/*.jar 中，有很多 jar 包。开发者可以直接使用标准扩展类加载器。

<span style="color:red">AppClassLoader</span> 才是直接面向我们用户的加载器，它会加载 Classpath 环境变量里定义的路径中的 jar 包和目录。我们自己编写的代码以及使用的第三方 jar 包通常都是由它来加载的。开发者可以直接使用系统类加载器。

那些位于网络上静态文件服务器提供的 jar 包和 class文件，jdk 内置了一个 <span style="color:red">URLClassLoader</span>，用户只需要传递规范的网络路径给构造器，就可以使用  URLClassLoader 来加载远程类库了。URLClassLoader 不但可以加载远程类库，还可以加载本地路径的类库，取决于构造器中不同的地址形式。<span style="color:red">ExtensionClassLoader 和 AppClassLoader 都是 URLClassLoader 的子类，</span>它们都是从本地文件系统里加载类库。

## 线程上下文类加载器



## ClassLoader 传递性

程序在运行过程中，遇到了一个未知的类，它会选择哪个 ClassLoader 来加载它呢？虚拟机的策略是使用调用者 Class 对象的 ClassLoader 来加载当前未知的类。何为调用者 Class 对象？就是在遇到这个未知的类时，虚拟机肯定正在运行一个方法调用（静态方法或者实例方法），这个方法挂在哪个类上面，那这个类就是调用者 Class 对象。前面我们提到每个 Class 对象里面都有一个 classLoader 属性记录了当前的类是由谁来加载的。

因为 ClassLoader 的传递性，所有延迟加载的类都会由初始调用 main 方法的这个 ClassLoader 全全负责，它就是 AppClassLoader。

## 双亲委派机制

AppClassLoader 只负责加载 Classpath 下面的类库，如果遇到没有加载的系统类库怎么办，AppClassLoader 必须将系统类库的加载工作交给 BootstrapClassLoader 和 ExtensionClassLoader 来做，这就是我们常说的「双亲委派」。

某个特定的类加载器在接到加载类的请求时，首先将加载任务委托给父类加载器，<span style="color:red">依次递归</span>，如果父类加载器可以完成类加载任务，就成功返回；只有父类加载器无法完成此加载任务时，才自己去加载。<span style="color:red">防止内存中出现多份同样的字节码。</span>

## 自定义加载器

ClassLoader 里面有三个重要的方法 loadClass()、findClass() 和 defineClass()。

loadClass() 方法是加载目标类的入口，它首先会查找当前 ClassLoader 以及它的双亲里面是否已经加载了目标类，如果没有找到就会让双亲尝试加载，如果双亲都加载不了，就会调用 findClass() 让自定义加载器自己来加载目标类。ClassLoader 的 findClass() 方法是需要子类来覆盖的，不同的加载器将使用不同的逻辑来获取目标类的字节码。拿到这个字节码之后再调用 defineClass() 方法将字节码转换成 Class 对象。

```java
class ClassLoader {

  // 加载入口，定义了双亲委派规则
  Class loadClass(String name) {
    // 是否已经加载了
    Class t = this.findFromLoaded(name);
    if(t == null) {
      // 交给双亲
      t = this.parent.loadClass(name)
    }
    if(t == null) {
      // 双亲都不行，只能靠自己了
      t = this.findClass(name);
    }
    return t;
  }
  
  // 交给子类自己去实现
  Class findClass(String name) {
    throw ClassNotFoundException();
  }
  
  // 组装Class对象
  Class defineClass(byte[] code, String name) {
    return buildClassFromCode(code, name);
  }
}

class CustomClassLoader extends ClassLoader {

  Class findClass(String name) {
    // 寻找字节码
    byte[] code = findCodeFromSomewhere(name);
    // 组装Class对象
    return this.defineClass(code, name);
  }
}
```

自定义类加载器不易破坏双亲委派规则，不要轻易覆盖 loadClass 方法。否则可能会导致自定义加载器无法加载内置的核心类库。在使用自定义加载器时，要明确好它的父加载器是谁，将父加载器通过子类的构造器传入。如果父类加载器是 null，那就表示父加载器是「根加载器」。

```java
// ClassLoader 构造器
protected ClassLoader(String name, ClassLoader parent);
```

双亲委派规则可能会变成三亲委派，四亲委派，取决于你使用的父加载器是谁，它会一直递归委派到根加载器。

## 获得 ClassLoader

可以通过如下 3 种方法得到 ClassLoader

```java
// 使用当前类的ClassLoader
this.getClass.getClassLoader();
// 使用当前线程的ClassLoader
Thread.currentThread().getContextClassLoader();
// 使用系统ClassLoader，即系统的入口点所使用的ClassLoader
ClassLoader.getSystemClassLoader();
```

注：system ClassLoader 与根 ClassLoader 并不一样。JVM 下 system ClassLoader 通常为 App ClassLoader。

## ClassLoader 载入资源

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







