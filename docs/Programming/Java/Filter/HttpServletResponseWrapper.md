# HttpServletResponseWrapper

```java
public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

    HttpServletResponse response = (HttpServletResponse) servletResponse;
    ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();

    HttpServletResponseWrapper responseWrapper = new HttpServletResponseWrapper((HttpServletResponse) servletResponse) {

        private HttpServletResponse response;

        {
            this.response = (HttpServletResponse)this.getResponse();
        }

        public ServletOutputStream getOutputStream() {

            return new ServletOutputStream(){

                private ByteArrayOutputStream byteArrayOutputStream;

                ServletOutputStream accept(ByteArrayOutputStream byteArrayOutputStream){
                    this.byteArrayOutputStream = byteArrayOutputStream;
                    return this;
                }

                public void write(int b){
                    this.byteArrayOutputStream.write(b);

                }
            }.accept(byteArrayOutputStream);
        }

        public PrintWriter getWriter() throws UnsupportedEncodingException {
            return new PrintWriter(new OutputStreamWriter(byteArrayOutputStream, this.response.getCharacterEncoding()),true);
        }

    };

    filterChain.doFilter(servletRequest, responseWrapper);

    byte[] bytes = byteArrayOutputStream.toByteArray();
    System.out.println("压缩前："+bytes.length);

    ByteArrayOutputStream gzipByteArrayOutputStream = new ByteArrayOutputStream();
    GZIPOutputStream gzipOutputStream = new GZIPOutputStream(gzipByteArrayOutputStream);
    gzipOutputStream.write(bytes);
    gzipOutputStream.finish();

    byte[] gzip = gzipByteArrayOutputStream.toByteArray();
    System.out.println("压缩后：" + gzip.length);

    response.setHeader("Content-Encoding", "gzip");
    response.setContentLength(gzip.length);
    response.getOutputStream().write(gzip);
}
```

