# xlsxwriter

## 安装

```bash
$ pip3 install xlsxwriter
```

## 写入

```python
import xlsxwriter

# 创建工作簿
workbook = xlsxwriter.Workbook('chineseQA.xlsx')
# 创建工作表
worksheet = workbook.add_worksheet()
# 写入行列值
worksheet.write(0,0,'test')
workbook.close()
```

