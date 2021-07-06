# xlwt-xlrd

## 安装

```bash
$ pip3 install xlwt xlrd
```

## xlwt

```python
import xlwt

# 创建一个工作簿并设置编码
workbook = xlwt.Workbook(encoding = 'utf-8')
# 创建一个工作表并命名
worksheet = workbook.add_sheet('sheet1')
# 写入Excel，注意三个参数分别对应工作表的行、列、值
worksheet.write(1, 0, label = 'label1')
# 输入数值计算公式
worksheet.write(0, 1, xlwt.Formula("-(1+1)"))
# 保存工作簿
workbook.save('工作计划.xls')
```

## xlrd

```python
import xlrd

# 打开Excel工作簿
book = xlrd.open_workbook("工作计划.xls")
#打印工作表的数量
print(book.nsheets)
#打印工作表的名称
print(book.sheet_names())
#打印第一张工作表的行数与列数
print(book.sheets()[0].nrows)
print(book.sheets()[0].ncols)
#打印第一张工作表第一行的数据
print(book.sheets()[0].row_values(0))
#打印第一张工作表第一列的数据
print(book.sheets()[0].col_values(0))
#打印第一张工作表某一个单元格的数据
print(book.sheets()[0].cell_value(rowx=1,colx=0))
```

