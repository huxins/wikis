# adb

- [Android 调试桥](https://developer.android.com/studio/command-line/adb)
- [SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools)
- [awesome-adb](https://github.com/mzlogin/awesome-adb)

## 基本用法

### 命令语法

```sh
adb [-d|-e|-s <serialNumber>] <command>
```

如果只有一个设备/模拟器连接时，可以省略掉 `[-d|-e|-s <serialNumber>]` 这一部分，直接使用 `adb <command>`。

### 为命令指定目标设备

如果有多个设备/模拟器连接，则需要为命令指定目标设备。

| 参数                | 含义                                               |
|---------------------|----------------------------------------------------|
| -d                  | 指定当前唯一通过 USB 连接的 Android 设备为命令目标 |
| -e                  | 指定当前唯一运行的模拟器为命令目标                 |
| `-s <serialNumber>` | 指定相应 serialNumber 号的设备/模拟器为命令目标    |

### 启动/停止

启动 adb server 命令：

```sh
adb start-server
```

停止 adb server 命令：

```sh
adb kill-server
```

### 查看 adb 版本

命令：

```sh
adb version
```

### 以 root 权限运行 adbd

让 adbd 以 root 权限执行命令：

```sh
adb root
```

让 adbd 为非 root 权限执行命令：

```sh
adb unroot
```

### 指定 adb server 的网络端口

命令：

```sh
adb -P <port> start-server
```

默认端口为 5037。

## 设备连接管理

### 查询已连接设备/模拟器

命令：

```sh
adb devices
```

需要查询具体设备信息时，可使用 `-l` 参数。

### USB 连接

通过 USB 连接来正常使用 adb 需要保证几点：

1. 硬件状态正常。

2. Android 设备的开发者选项和 USB 调试模式已开启。

3. 设备驱动状态正常。

4. 通过 USB 线连接好电脑和设备后确认状态。

### 无线连接（Android 11 及以上）

操作步骤：

1. 更新到最新版本的 [SDK 平台工具](https://developer.android.com/studio/releases/platform-tools) (> 30.0.0)。

2. Android 设备的开发者选项和无线调试模式已开启。

3. 选择使用配对码配对设备，使用弹窗中的 IP 地址和端口号。

  ```sh
  adb pair ipaddr:port
  ```

4. 使用无线调试下的 IP 地址和端口。

  ```sh
  adb connect ipaddr:port
  ```

### 无线连接（Android 10 及以下）

## 应用管理

### 查看应用列表

查看应用列表的基本命令格式是

```sh
adb shell pm list packages [-f] [-d] [-e] [-s] [-3] [-i] [-u] [--user USER_ID] [FILTER]
```

过滤参数如下：

| 参数       | 显示列表                   |
|------------|----------------------------|
| 无         | 所有应用                   |
| -f         | 显示应用关联的 apk 文件    |
| -d         | 只显示 disabled 的应用     |
| -e         | 只显示 enabled 的应用      |
| -s         | 只显示系统应用             |
| -3         | 只显示第三方应用           |
| -i         | 显示应用的 installer       |
| -u         | 包含已卸载应用             |
| `<FILTER>` | 包名包含 `<FILTER>` 字符串 |

### 安装应用

命令格式：

```sh
adb shell pm install [-lrtsdg] <path_to_apk>
```

可选参数来控制安装行为：

| 参数 | 含义                                                                              |
|------|-----------------------------------------------------------------------------------|
| -l   | 将应用安装到保护目录 /mnt/asec                                                    |
| -r   | 允许覆盖安装                                                                      |
| -t   | 允许安装 AndroidManifest.xml 里 application 指定 `android:testOnly="true"` 的应用 |
| -s   | 将应用安装到 sdcard                                                               |
| -d   | 允许降级覆盖安装                                                                  |
| -g   | 授予所有运行时权限                                                                |

