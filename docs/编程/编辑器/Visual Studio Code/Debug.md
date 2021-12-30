# Debug

```sh
%ProgramFiles%\Google\Chrome\Application\chrome.exe --remote-debugging-port=9222
```

- launch 模式：由 vscode 来启动一个独立的具有 debug 模式的程序
- attach 模式：附加于（也可以说 “监听” ）一个已经启动的程序（必须已经开启 Debug 模式）

Debugger for Chrome

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

