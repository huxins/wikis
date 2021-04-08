# KMS

- [vlmcsd](https://github.com/Wind4/vlmcsd) [vlmcsd](https://github.com/kkkgo/vlmcsd)
- [itellyou](http://msdn.itellyou.cn/)

## Windows

- [kmsclientkeys](https://docs.microsoft.com/zh-cn/windows-server/get-started/kmsclientkeys)

输入以下命令，清除原密钥并设置KMS服务器。

>kms.03k.org
>
>kms.loli.beer
>
>kms.cangshui.net
>
>kms.library.hk
>

```cmd
$ wmic os get caption
$ slmgr.vbs /upk
$ slmgr.vbs /ipk [GVLK]
$ slmgr.vbs /skms kms.loli.beer
$ slmgr.vbs /ato
$ slmgr.vbs /xpr
$ slmgr.vbs /dli
```

## Office

- [office2019](https://docs.microsoft.com/zh-cn/DeployOffice/vlactivation/gvlks)
- [office2010](https://docs.microsoft.com/zh-cn/previous-versions/office/office-2010/ee624355(v=office.14))

前提条件：Office 必须为 GVLK 版本，否则无法激活。

```powershell
cd "C:\Program Files\Microsoft Office\Office16"
foreach ($x in Get-ChildItem ..\root\Licenses16\*_KMS*.xrm-ms -name) {cscript ospp.vbs /inslic:"..\root\Licenses16\$x"} #安装KMS许可证
cscript "ospp.vbs" /inpkey:[GVLK]
cscript "ospp.vbs" /sethst:kms.03k.org
cscript "ospp.vbs" /act
cscript "ospp.vbs" /dstatus
cscript "ospp.vbs" /unpkey:XXXXX #(要卸载的密钥后5位)
```

[Office Tool Plus](https://otp.landian.vip/zh-cn/)

**更改Office 2019 的安装路径**

```powershell
mkdir "D:\Program Files\Microsoft Office"
mklink /J "C:\Program Files\Microsoft Office" "D:\Program Files\Microsoft Office"
```

**打造MS Office 2019 VL 官方镜像安装与激活**

[ODT](https://www.microsoft.com/en-us/download/details.aspx?id=49117)

[Office Customization Tool](https://config.office.com/deploymentsettings)

[Office 2019 的部署文档](https://docs.microsoft.com/zh-cn/deployoffice/office2019/deploy)

[Office 部署工具的配置选项](https://docs.microsoft.com/zh-cn/deployoffice/office-deployment-tool-configuration-options)

下载所需文件

```cmd
$ setup.exe /download Configuration.xml
$ setup.exe /configure Configuration.xml
```

配置示例

```xml
<!--  文件末尾的三个配置依次为：
      移除之前以 MSI 方式安装的 Office —— 微软推荐并说有用，我还是手动使用官方工具清除掉了
      静默安装 —— 安装时不显示用户界面，可以移除掉，有的人喜欢看进度呢？
      开启更新 —— 此配置可以缺省，放上去好看 
      也就是说，你可以都删掉...  -->

<Configuration>

  <Add OfficeClientEdition="64"
	   Channel="PerpetualVL2019">
	   
    <Product ID="ProPlus2019Volume" PIDKEY="NMMKJ-6RK4F-KMJVX-8D9MJ-6MWKP">
      <Language ID="zh-cn" />        
      <ExcludeApp ID="Access" />
      <ExcludeApp ID="Groove" />
      <ExcludeApp ID="Lync" />
      <ExcludeApp ID="OneDrive" />
      <ExcludeApp ID="OneNote" />
      <ExcludeApp ID="Outlook" />
      <ExcludeApp ID="Publisher" />
    </Product>

  </Add>

  <RemoveMSI All="True" /> 
  <Display Level="Full" AcceptEULA="TRUE" /> 
  <Updates Enabled="TRUE"
           Channel="PerpetualVL2019" />

</Configuration>
```


