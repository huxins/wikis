# BeautifulSoup


```python
# 导入包
from bs4 import BeautifulSoup

# 用BeautifulSoup解析数据 python3 必须传入参数二'html.parser' 得到一个对象，接下来获取对象的相关属性
html=BeautifulSoup(html,'html.parser')
# 读取title内容
print(html.title)
# 读取title属性
attrs=html.title.attrs
# 按标签名查找
html.select('title')
# 按类名查找
html.select('.sister')
# 按id名查找 p标签中id为link的标签
html.select('p #link')
# 取标签里面的值
html.p.string
# 取标签里属性值 通过href获取
html['href']
# id 作为通配符
soup.findAll("div", {"id" : lambda L: L and L.startswith('date')})
soup.findAll("div", {"id" : re.compile('date.*')})
```

