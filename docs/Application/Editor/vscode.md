# vscode

## shortcut key

1. 注释
   - 单行注释：[ctrl+k,ctrl+c] 或 ctrl+/
   - 取消单行注释：[ctrl+k,ctrl+u]
   - 多行注释：[alt+shift+A] 或 /**
2. 显示/隐藏左侧目录栏：ctrl + b
3. 删除当前行：shift + ctrl + k
4. 控制台终端显示与隐藏：ctrl + ~
5. 查找文件：ctrl + p
6. 代码格式化：shift + alt +f
7. 格式化选定代码：ctrl + k / ctrl +f
8. 折叠代码：ctrl + k + 0-9 (0是完全折叠)
9. 展开代码：ctrl + k + j (完全展开代码)

## extensions

语言：Chinese

Book：[Thief Book](https://github.com/cteamx/Thief-Book-VSCode)

Gist：[GitHub Gist Explorer](https://github.com/k9982874/github-gist-explorer)

Jump：vscode-elm-jump

格式化：Beautify

## config

预览："workbench.editor.enablePreview": false

## theme

Solarized Dark

Monokai Dimmed

## debug

```powershell
%ProgramFiles%\Google\Chrome\Application\chrome.exe --remote-debugging-port=9222
```

- launch 模式：由 vscode 来启动一个独立的具有 debug 模式的程序
- attach 模式：附加于（也可以说 “监听” ）一个已经启动的程序（必须已经开启 Debug 模式）
- Debugger for Chrome

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "launch chrome frontend",
            "url": "http://localhost:180/",
            "webRoot": "${workspaceFolder}/"
        },
        {
            "type": "chrome",
            "request": "attach",
            "name": "attach chrome frontend",
            "port": 9222,
            "url": "http://localhost:180/",
            "webRoot": "${workspaceFolder}/"
        }
    ]
}
```

