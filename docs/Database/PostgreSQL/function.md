# function

```sql
-- 返回第一个非空参数
SELECT coalesce(null,'1')
-- 类型转换
SELECT CAST('1.23' AS DECIMAL(18,2))
-- 从第二条开始读取一条数据
SELECT * FROM table LIMIT 2,1
-- 从第一条数据开始取出两条数据
SELECT * FROM table LIMIT 2 OFFSET 1
```

**组合切割**

```sql
-- concat (a,b)
select concat('name','info')
-- concat_ws (splitter,a,b)
select concat_ws('-','name','info')
-- split_part
select split_part('now|year|month','|',3)
-- regexp_split_to_table
SELECT regexp_split_to_table('kenyon,love,,china,!',E'\\s*')
-- regexp_split_to_array
SELECT regexp_split_to_array('kenyon,love,,china,!',',')
-- 截取字符串
SELECT substring ( '123456789' FROM 1 FOR 3 )
```

**Array_to_String**

```sql
-- 字段转化成 array
array(SELECT att.name FROM att)
-- array转化为字符串
array_to_string (array,"/")
```

**时间**

```sql
-- 获取当前时间
SELECT current_date
interval '1 D'   interval '1 M'   interval '1 Y'
-- 时间转字符串
SELECT to_char( CURRENT_DATE, 'YYYY-MM-DD' )
-- 星期几
SELECT extract(DOW FROM cast('2020-07-23 16:25' as TIMESTAMP))
-- 时间转化为分钟
SELECT round(date_part('epoch', endtime - starttime)::NUMERIC / 60)
-- 获取当前时间
select now() at time zone '-8:00'
select now() at time zone 'CCT'
```

**四舍五入**

```sql
select ceiling(45.1)
select floor(45.9)
select round(23.336,2)
select trunc(1.1)
```

