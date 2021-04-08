# Pip

## 安装

如果 `Python2` 和 `Python3` 同时有 `pip`，则使用方法如下：

```bash
python2 -m pip install some-package
```



## 镜像源

**临时使用**

```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package
```

**设为默认**

```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pip -U
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

修改 `~/.pip/pip.conf (Linux/Mac)` 或 `C:\Users\UserName\pip\pip.ini (Windows)` 配置：

> http://mirrors.aliyun.com/pypi/simple/ 
>
> https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple/
>
> https://pypi.tuna.tsinghua.edu.cn/simple/

```ini
[global]
trusted-host = pypi.douban.com
index-url = http://pypi.douban.com/simple
```

