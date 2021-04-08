# json-schema

- [json-schema](https://json-schema.org/)
- [json-schema-validator](https://github.com/java-json-tools/json-schema-validator)

json-schema 是一个用于验证 JSON 数据结构的强大工具。

maven

```xml
<dependency>
    <groupId>com.github.java-json-tools</groupId>
    <artifactId>json-schema-validator</artifactId>
    <version>2.2.14</version>
</dependency>
```

json schema

```json
{
  "$schema": "https://json-schema.org/draft/2019-09/schema",
  "title": "Employee",
  "description": "Add Employee",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "sex": {
        "type": "string",
        "enum": [
          "0",
          "1"
        ]
      }
    },
    "required": [
      "name",
      "sex"
    ],
    "minProperties": 5,
    "maxProperties": 6
  },
  "minItems": 5,
  "maxItems": 6
}
```

java

```java
private final static JsonSchemaFactory factory = JsonSchemaFactory.byDefault();

public static ProcessingReport validatorSchema(String mainSchema, String instance) throws IOException, ProcessingException {
    JsonNode mainNode = JsonLoader.fromString(mainSchema);
    JsonNode instanceNode = JsonLoader.fromString(instance);
    JsonSchema schema = factory.getJsonSchema(mainNode);
    ProcessingReport processingReport = schema.validate(instanceNode);

    return processingReport;
}

ListProcessingReport processingMessages = (ListProcessingReport)validatorSchema(schema, data);
if (!processingMessages.isSuccess()){
    res = ResultBean.error(1,processingMessages.asJson().get(0).get("message").asText());
} else {
    res = ResultBean.success();
}
```

