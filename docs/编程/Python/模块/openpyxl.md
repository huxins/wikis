# openpyxl

## 安装

```bash
$ pip3 install openpyxl
```

## 读取

```python
from openpyxl import load_workbook

workbook = load_workbook(filename='test.xlsx')
worksheet = workbook['Sheet1']
for row in worksheet.rows:
    print(row[15].value)
```

## 写入

```python
from openpyxl import load_workbook

workbook = load_workbook(filename='test.xlsx')
worksheet = workbook['Sheet1']
worksheet.cell(row=1, column=1).value = 'new value'
workbook.save('new_test.xlsx')
workbook.close()
```

