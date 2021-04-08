# Excel

## xlrd

读取时间处理

```python
# 转化为元组形式 (2014, 7, 8, 0, 0, 0)
xlrd.xldate_as_tuple(table.cell(2,2).value, 0)
# 直接转化为 datetime 对象 datetime.datetime(2018, 7, 9, 0, 0)
xlrd.xldate.xldate_as_datetime(table.cell(2,2).value, 1)
```

