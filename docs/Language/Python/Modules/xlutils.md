# xlutils

## 安装

```bash
$ pip3 install xlutils
```

## 修改

```python
import xlrd
from xlutils.copy import copy

old_excel = xlrd.open_workbook('test.xls', formatting_info=True)
new_excel = copy(old_excel)
ws = new_excel.get_sheet(0)
ws.write(0, 0, 'test')
new_excel.save('new_mcw_test.xls')
```

