# Listener

- *ServletContextListener*：用于监听 Web Application 的启动和关闭；
- *ServletContextAttributeListener*：用于监听 ServletContext 范围（Application）内属性的改变；
- *ServletRequestListener*：用于监听用户的请求；
- *ServletRequestAttributeListener*：用于监听 ServletRequest 范围（Request）内属性的改变；
- *HttpSessionListener*：用于监听用户 Session 的开始和结束；
- *HttpSessionAttributeListener*：用于监听 HttpSession 范围（Session）内属性的改变。

配置方式

- 使用 @WebListener 修饰 Listener 实现类。
- 在 web.xml 文件中使用 \<listener> 进行配置。

