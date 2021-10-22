# jackson

- [Jackson使用详解](https://juejin.cn/post/6844904166809157639)

## 依赖

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.12.0</version>
</dependency>
```

## ObjectMapper

### 树模型

JsonNode  操作

```java
String carJson = "{\"brand\":\"Mercedes\",\"doors\":5}";
JsonNode jsonNode = objectMapper.readValue(carJson, JsonNode.class);
JsonNode brandNode = jsonNode.get("brand");
String brand = brandNode.asText();
int brand = brandNode.asInt();
JsonNode arrayOne = brandNode.get(0);
```

Java 转 JsonNode 转 字符串

```java
ObjectMapper objectMapper = new ObjectMapper();
Car car = new Car("Mercedes",5);
JsonNode carJsonNode = objectMapper.valueToTree(car);
String carJson = objectMapper.writeValueAsString(carJsonNode);
```

字符串 转 JsonNode 转 Java

```java
ObjectMapper objectMapper = new ObjectMapper();
String carJson = "{\"brand\":\"Mercedes\",\"doors\":5}";
JsonNode carJsonNode = objectMapper.readTree(carJson);
// JsonNode carJsonNode = objectMapper.readValue(carJson, JsonNode.class);
Car car = objectMapper.treeToValue(carJsonNode);
```

