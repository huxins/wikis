# json

- [JSON类型和函数](https://www.cnblogs.com/alianbog/p/5658156.html)
- [JSONB 使用入门](https://juejin.cn/post/6844903857009623048)

## json  jsonb

json 是对输入的完整拷贝，使用时再去解析，所以它会保留输入的空格，重复键以及顺序等。而 jsonb 是解析输入后保存的二进制，它在解析时会删除不必要的空格和重复的键，顺序和输入可能也不相同，使用时不用再次解析。两者对重复键的处理都是保留最后一个键值对。

```sql
SELECT '{"bar": "baz", "balance":      7.77, "active":false}'::json;
SELECT '{"bar": "baz", "balance":      7.77, "active":false}'::jsonb;
```

## 索引

JSONB 最常用的是 `GIN` 索引，GIN 索引可以被用来有效地搜索在大量 jsonb 文档（数据）中出现 的键或者键值对。

```sql
CREATE INDEX idxgin ON table1 USING GIN (column1);
```

## 操作符

json 和 jsonb 的操作符

| 操作符 | 右操作数类型 | 描述                              | 示例                                                     | 结果         |
| ------ | ------------ | --------------------------------- | -------------------------------------------------------- | ------------ |
| ->     | int          | 获取 JSON 数组元素（索引从0开始） | select '[{"a":"foo"},{"b":"bar"},{"c":"baz"}]'::json->2; | {"c":"baz"}  |
| ->     | text         | 通过键获取值                      | select '{"a": {"b":"foo"}}'::json->'a';                  | {"b":"foo"}  |
| ->>    | int          | 获取 JSON 数组元素为 text         | select '[1,2,3]'::json->>2;                              | 3            |
| ->>    | text         | 通过键获取值为 text               | select '{"a":1,"b":2}'::json->>'b';                      | 2            |
| #>     | text[]       | 在指定的路径获取 JSON 对象        | select '{"a": {"b":{"c": "foo"}}}'::json#>'{a,b}';       | {"c": "foo"} |
| #>>    | text[]       | 在指定的路径获取 JSON 对象为 text | select '{"a":[1,2,3],"b":[4,5,6]}'::json#>>'{a,2}';      | 3            |

jsonb 额外操作符

| 操作符 | 右操作数类型 | 描述                              | 示例                                                     | 结果         |
| ---- | ---- | ---- | ---- | ---- |
| @> | jsonb | 左侧 json 最上层的值是否包含右边 json 对象 | select '{"a":1, "b":2}'::jsonb @> '{"b":2}'::jsonb; | t |
| <@ | jsonb | 左侧 json 对象是否包含于右侧 json 最上层的值内 | select '{"b":2}'::jsonb <@ '{"a":1, "b":2}'::jsonb; | t |
| ? | text | text 是否作为左侧 Json 对象最上层的键 | select '{"a":1, "b":2}'::jsonb ? 'b'; | t |
| ?\| | text[] | text[] 中的任一元素是否作为左侧 Json 对象最上层的键 |   select '{"a":1, "b":2, "c":3}'::jsonb ?\| array['b', 'c'];   | t |
| ?& | text[] | text[] 中的所有元素是否作为左侧 Json 对象最上层的键 | select '["a", "b"]'::jsonb ?& array['a', 'b']; | t |
|   \|\|	   | jsonb | 连接两个 json 对象，组成一个新的 json 对象 |   select '["a", "b"]'::jsonb \|\| '["c", "d"]'::jsonb;   | ["a", "b", "c", "d"] |
| - | text | 删除左侧 json 对象中键为 text 的键值对 | select '{"a": "b"}'::jsonb - 'a'; | {} |
| - | integer | 删除数组指定索引处的元素，如果索引值为负数，则从右边计算索引值。如果最上层容器内不是数组，则抛出错误。 | select '["a", "b"]'::jsonb - 1; | ["a"] |
| #- | text[] | 删除指定路径下的域或元素（如果是json数组，且整数值是负的，则索引值从右边算起） | select '["a", {"b":1}]'::jsonb #- '{1,b}'; | ["a", {}] |

