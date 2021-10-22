# pip

## 安装

如果 `Python2` 和 `Python3` 同时有 `pip`

```bash
python2 -m pip install some-package
```

## 升级

```bash
$ pip install pip -U
```

## 迁移

```bash
$ pip freeze > requirements.txt
$ pip download -d deps -r requirements.txt
$ pip install -f deps
$ pip install -r requirements.txt -t target
```

## 镜像

**临时使用**

```bash
$ pip install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package
```

**设为默认**

```bash
$ pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

修改 `~/.pip/pip.conf` 或 `%HomePath%\pip\pip.ini`

> https://mirrors.aliyun.com/pypi/simple
>
> https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple
>
> https://pypi.tuna.tsinghua.edu.cn/simple

```ini
[global]
trusted-host = pypi.douban.com
index-url = http://pypi.douban.com/simple
```

