# Python

- [分发 Python 模块](https://docs.python.org/zh-cn/3/distributing/index.html)

https://www.v2ex.com/t/704911

https://gist.github.com/arischow/5d709661adfba9301fcd9597b573231d



https://zhuanlan.zhihu.com/p/81321705

https://zhuanlan.zhihu.com/p/81568689

安装 Python3

```bash
yum install -y python36
yum install -y gcc libffi-devel python36-devel openssl-devel
```

查看解释器搜索目录

```bash
python3 -c "import sys; print(sys.path)"
```

虚拟环境

```bash
pip freeze > requirements.txt
python -m pip install -r requirements.txt

# virtualenv
pip3 install virtualenv==16.7.9
virtualenv --no-site-packages venv
# Windows：
venv\Scripts\activate.bat
# Linux:
source venv/bin/activate
# exit
deactivate

# venv
python3 -m venv venv
source venv/bin/activate
```



```bash
pip download -r requirements.txt -d deps/
pip install -f deps/

pip install -r requirements.txt -t target

pip3 download -d mypip --platform linux_x86_64 --python-version 36 --implementation cp --abi none -r requirements.txt

```

