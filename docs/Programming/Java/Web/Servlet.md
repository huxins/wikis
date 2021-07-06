# Servlet



配置 Spring MVC，指定处理请求的 Servlet，有两种方式：

- 默认查找 MVC 配置文件的地址是：/WEB-INF/${servletName}-servlet.xml
- 可以通过配置修改 MVC 配置文件的位置，需要在配置 DispatcherServlet 时指定 MVC 配置文件的位置。

其中，<span style="color:red;">classpath</span> 是 web 项目的类路径，可以理解为 classes 下面。因为无论这些配置文件放在哪，编译之后如果没有特殊情况的话都直接在 classes 下面。jar 包的话虽然放在 lib 文件夹里，但实际上那些类可以直接引用，比如：com.test.ABC，仿佛也在 classes 下面一样。

**classpath 和 classpath\* 区别：**同名资源存在时，classpath 只从第一个符合条件的 classpath 中加载资源，而 classpath\* 会从所有的 classpath 中加载符合条件的资源。classpath\*，需要遍历所有的 classpath，效率肯定比不上 classpath，因此在项目设计的初期就尽量规划好资源文件所在的路径，避免使用 classpath\* 来加载。

