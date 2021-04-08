# Install

- [injdk](https://www.injdk.cn/)
- [Amazon Corretto](https://aws.amazon.com/cn/corretto/)
- [AdoptOpenJDK](https://adoptopenjdk.net/)
- [Zulu](https://cn.azul.com/downloads/zulu-community/?architecture=x86-64-bit&package=jdk)
- [RedHat](https://developers.redhat.com/products/openjdk/download)
- [Microsoft](https://www.microsoft.com/openjdk)
- [ojdkbuild](https://github.com/ojdkbuild/ojdkbuild)
- [阿里云镜像](https://www.kagura.me/dev/20200424112618.html)
- [华为云镜像](https://repo.huaweicloud.com/java/jdk/)

## windows

- 提取 src.zip

  [Extract src.zip from JDK Installer](https://bgasparotto.com/extract-src-zip-jdk-installer)

  下载完安装程序后，执行安装程序，直到出现欢迎页面，不要单击“下一步”或关闭它

  在打开欢迎页面的同时，转到 `%USERPROFILE%\AppData\LocalLow\Oracle\Java`，转到 JDK 文件夹

  这些文件包含以下资源
  
  - jdk1.8.0_12164.msi: the MSI installer
  - **sj**180121.cab: the JRE runnable
  - **ss**180121.cab: the **src.zip** we are looking for
  - **st**180121.cab: the tools.zip we can extract the JDK from
  - **sz**180121.cab: the COPYRIGHT file
  
  打开文件 **ss**180121.cab 并将 **src.zip** 复制到一个安全的位置，因为关闭安装程序时 cab 文件将消失。

- 提取 bin

  [Convert JDK from EXE to ZIP](https://bgasparotto.com/convert-jdk-exe-zip)

  [Convert JDK 9 from EXE to ZIP](https://bgasparotto.com/convert-jdk-9-exe-zip)
  
  使用 7-Zip 提取 EXE
  
  ```powershell
  cd .rsrc\1033\JAVA_CAB10
  extrac32 111
  ```
  
  该目录中将显示一个名为 *tools.zip* 的文件，使用 7-Zip 提取其内容
  
  运行以下命令以将 .pack 转换为 .jar 文件
  
  ```powershell
  for /r %x in (*.pack) do .\bin\unpack200 -r "%x" "%~dx%~px%~nx.jar"
  ```
  
  这些文件包含以下资源
  
  - JAVA_CAB7 JRE
  - JAVA_CAB9 src.zip
  - JAVA_CAB10 tools.zip

## linux

安装 Open JDK

```bash
yum install -y java-1.8.0-openjdk
```

安装 Oracle JDK

```bash
# vi /etc/profile
export JAVA_HOME=/usr/java/jdk1.8.0_211
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib:$CLASSPATH
export JAVA_PATH=${JAVA_HOME}/bin:${JRE_HOME}/bin
export PATH=$PATH:${JAVA_PATH}
```


