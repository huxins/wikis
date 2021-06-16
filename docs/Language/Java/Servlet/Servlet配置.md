# Servlet 配置

从 Servlet3.0 开始，配置 Servlet 有两种方式：

- 在 Servlet 类中使用 @WebServlet 注解进行配置。

  ```java
  @WebServlet(urlPatterns="/WxServlet")
  ```

- 在 web.xml 文件中进行配置。

  ```xml
  <servlet>
      <servlet-name>spring-mvc-control</servlet-name>
      <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
      <load-on-startup>1</load-on-startup>
  </servlet>
  <servlet-mapping>
      <servlet-name>spring-mvc-control</servlet-name>
      <url-pattern>/</url-pattern>
  </servlet-mapping>
  ```

