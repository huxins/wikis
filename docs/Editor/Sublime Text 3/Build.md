# Build

## Python

New Build System 保存文件名为 Python3

```json
{
    "cmd": ["D:/python.exe","-u","$file"],
    "file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
    "selector": "source.python",
    "encoding": "cp936"
}
```

SublimeREPL

```json
[
    {
        "keys": ["f5"],
        "caption": "SublimeREPL:Python",
        "command": "run_existing_window_command", 
        "args":
        {
            "id": "repl_python_run",
            "file": "config/Python/Main.sublime-menu"
        }
    }
]
```

## Node

- [SublimeText-Nodejs](https://github.com/tanepiper/SublimeText-Nodejs)

*Nodejs.sublime-build*

```
"encoding": "utf8",
"cmd": ["taskkill","/F", "/IM", "node.exe","&","node", "$file"],
```

*Nodejs.sublime-settings*

```
"node_command": "D:\\Software\\gnvm\\64-bit\\node.exe",
"npm_command": "D:\\Software\\gnvm\\64-bit\\npm.cmd",
```

