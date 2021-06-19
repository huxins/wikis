# HttpServletRequest

## API

| NO   | 方法                             | 描述                   |
| ---- | -------------------------------- | ---------------------- |
| 1    | String getMethod()               | 获取请求的方式         |
| 2    | StringBuffer getRequestURL()     | 获取请求的URL          |
| 3    | String getRequestURI()           | 获取请求的URI          |
| 4    | String getContextPath()          | 获取请求网址的相对路径 |
| 5    | String getParameter(String var1) | 获取表单提交的数据     |

## RequestDispatcher

```java
RequestDispatcher dispatcher = req.getRequestDispatcher("/servlet");
dispatcher.include(req, resp);
dispatcher.forward(req,resp);
```

