# Windows

**下载**

- [一台已联网但没有任何浏览器的Windows机器如何装上浏览器？](https://www.zhihu.com/question/24412791)
- [Chrome](https://dl.google.com/tag/s/appguid=%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D&lang=zh-CN&usagestats=0&appname=Google%2520Chrome&needsadmin=true&ap=x64-stable-statsdef_1/chrome/install/ChromeStandaloneSetup64.exe)

PowerShell

```powershell
PS> $url = "https://go.microsoft.com/fwlink/?linkid=2108834&Channel=Stable&language=zh-cn"
PS> $filePath = "$env:userprofile\Downloads\MicrosoftEdgeSetup.exe"
PS> Invoke-WebRequest -Uri $url -OutFile $filePath
PS> & "$env:userprofile\Downloads\MicrosoftEdgeSetup.exe"
```

CMD

```powershell
bitsadmin /transfer heihahou /priority high URL D:\chrome.exe
bitsadmin /transfer n URL D:\chrome.exe
certutil.exe -urlcache -split -f URL 浏览器.exe
```

VBS

```vbscript
Set Post = CreateObject("Msxml2.XMLHTTP")
Set Shell = CreateObject("Wscript.Shell")
Post.Open "GET","http://192.168.1.1/1.exe",0
Post.Send()
Set aGet = CreateObject("ADODB.Stream")
aGet.Mode = 3
aGet.Type = 1
aGet.Open()
aGet.Write(Post.responseBody)
aGet.SaveToFile "C:\test\1.exe",2
```

**Hash**

```powershell
certutil -hashfile yourfilename.ext MD5
certutil -hashfile yourfilename.ext SHA1
certutil -hashfile yourfilename.ext SHA256
```

**磁盘**

```bash
net use z: /delete
```



