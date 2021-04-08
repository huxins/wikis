# function

**BETWEEN**

```sql
SELECT * FROM mytab po WHERE po.createtime BETWEEN '2020-07-13 00:00:00' AND '2020-07-14 00:00:00'
```

**CASE**

case 具有两种格式。简单 case 函数和 case 搜索函数。

```sql
-- 简单case函数
CASE sex
WHEN '1' THEN '男'
WHEN '2' THEN '女'
ELSE '其他' END
-- case搜索函数
CASE
WHEN sex = '1' THEN '男'
WHEN sex = '2' THEN '女'
ELSE '其他' END
```

