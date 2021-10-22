# ComponentScan

- @Controller
- @Service
- @Repository
- @Component

```xml
<context:component-scan base-package="cn.inxiny.servlet"/>
```

指定

```xml
<context:component-scan base-package="cn.inxiny.servlet" use-default-filters="false">
    <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
</context:component-scan>
```

过滤

```xml
<context:component-scan base-package="cn.inxiny.servlet" use-default-filters="false">
    <context:exclude-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
</context:component-scan>
```

