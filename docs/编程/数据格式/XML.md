# XML

## 语法

### 属性

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                             http://maven.apache.org/xsd/maven-4.0.0.xsd" />
```

- xmlns

  XML Namespace，定义默认命名空间
  
- xmlns:xsi

  xmlns:xsi 是标准核心命名空间之一，为上述值时，该命名空间就可以在任何 XML 文件中直接使用，而无需指定 XSD 文件。

- xsi:schemaLocation

  该命名空间下的 schemaLocation 属性定义了 XML Namespace 与其 XSD 文件的位置。

## 参考链接

- [The Schema Instance Namespace](https://www.w3.org/TR/xmlschema11-1/#xsi-namespace)
- [xmlns, xmlns:xsi, xsi:schemaLocation, and targetNamespace?](https://stackoverflow.com/questions/34202967/xmlns-xmlnsxsi-xsischemalocation-and-targetnamespace)

