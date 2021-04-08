# Sublime Text

## License

hosts

```ini
127.0.0.1 www.sublimetext.com
127.0.0.1 sublimetext.com
127.0.0.1 sublimehq.com
127.0.0.1 license.sublimehq.com
127.0.0.1 45.55.255.55
127.0.0.1 45.55.41.223
```

licence

```
----- BEGIN LICENSE -----
Member J2TeaM
Single User License
EA7E-1011316
D7DA350E 1B8B0760 972F8B60 F3E64036
B9B4E234 F356F38F 0AD1E3B7 0E9C5FAD
FA0A2ABE 25F65BD8 D51458E5 3923CE80
87428428 79079A01 AA69F319 A1AF29A4
A684C2DC 0B1583D4 19CBD290 217618CD
5653E0A0 BACE3948 BB2EE45E 422D2C87
DD9AF44B 99C49590 D2DBDEE1 75860FD2
8C8BB2AD B2ECE5A4 EFC08AF2 25A9B864
------ END LICENSE ------
```

## Package Control

代码提示：Emmet jQuery

代码高亮：Highlight

编码转换：ConvertToUTF8

多语言：ChineseLocalizations

输入法跟随显示：[IMESupport](https://github.com/chikatoike/IMESupport)    [Win10](https://github.com/zcodes/IMESupport)

标签高亮：BracketHighlighter

侧边栏增强：SideBarEnhancements

## config

```json
{
    "update_check": false,
    "font_size": 11,
    // 行的上边距下边距
    "line_padding_top": 1,
    "line_padding_bottom": 1,
    "word_wrap": true,
    // Tab键制表符宽度
    "tab_size": 4,
    // 突出显示当前光标所在的行
    "highlight_line": false,
    "translate_tabs_to_spaces": true,
    // 为true时，保存文件时会删除每行结束后多余的空格
    "trim_trailing_white_space_on_save": true,
    // 为true时，保存文件时光标会在文件的最后向下换一行
    "ensure_newline_at_eof_on_save": true,
    // 切换到其它文件标签或点击其它非本软件区域，文件自动保存
    "save_on_focus_lost": true,
    // 侧边栏文件夹显示加粗，区别于文件
    "bold_folder_labels": true,
    // 每一行结束的时候用什么字符做终止符
    "default_line_ending": "unix",
    // 在状态栏中显示换行符
    "show_line_endings": true,
    // 默认编码格式
    "default_encoding": "UTF-8",
    // 在状态栏中显示文件编码
    "show_encoding": true,
    // 代码提示
    "auto_complete": true,
    "ignored_packages": [
        "Vintage"
    ]
}
```

## shortcut key

3. 转换大写：Ctrl+K+U
4. 转换小写：Ctrl+K+L
5. 撤销：Ctrl+Z
6. 恢复撤销：Ctrl+Y
7. 就近选择相同项：Ctrl+D
8. 选择当前文件所有匹配项：Alt+F3
9. 向上扩展一层：Ctrl+Shift+A
10. 整行的上下移动：Ctrl+Shift+↑ 或 Ctrl+Shift+↓
11. 复制选中项：Ctrl+Shift+D

```json
[
    { "keys": ["ctrl+shift+w"], "command": "toggle_setting", "args": {"setting": "word_wrap"}},
    { "keys": ["ctrl+shift+c"], "command": "cancel_build" },
    { "keys": ["ctrl+alt+f"], "command": "reindent" },
    {
        "keys":["ctrl+1"],
        "command":"side_bar_files_open_with",
        "args":
        {
            "paths":[],
            "application":"C:/Program Files/Google/Chrome/Application/chrome.exe",
            "extensions":".*"
        }
    }
]
```

## build

### python3

New Build System 保存文件名为 Python3

```json
{
    "cmd": ["D:/python.exe","-u","$file"],
    "file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
    "selector": "source.python",
    "encoding": "cp936"
}
```

#### SublimeREPL

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

### node

[SublimeText-Nodejs](https://github.com/tanepiper/SublimeText-Nodejs/archive/master.zip)

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

