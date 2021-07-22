# HttpServletRequestWrapper

```java
public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

    HttpServletRequestWrapper requestWrapper = new HttpServletRequestWrapper((HttpServletRequest)servletRequest) {
        public String getParameter(String name) {
            String value = this.getRequest().getParameter(name);
            HttpServletRequest request = (HttpServletRequest)this.getRequest();
            if (value == null){
                return value;
            }
            if (!request.getMethod().equalsIgnoreCase("get")) {
                return value;
            }
            try {
                value = URLEncoder.encode(value,"utf-8");
                return value;
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
                throw new RuntimeException("不支持该编码");
            }
        }
    };

    filterChain.doFilter(requestWrapper, servletResponse);
}
```

