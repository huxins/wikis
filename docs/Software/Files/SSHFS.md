# SSHFS

- [WinFSP](https://github.com/billziss-gh/winfsp)
- [SSHFS-Win](https://github.com/billziss-gh/sshfs-win)

映射网络驱动器

```
\\sshfs\{username}@{ip}!{port}\{path}
\\sshfs.r\{username}@{ip}!{port}\{path}
```

WinFSP 取消挂载

```powershell
.\launchctl-x64.exe list
.\launchctl-x64.exe stop sshfs root@xxx...
```

