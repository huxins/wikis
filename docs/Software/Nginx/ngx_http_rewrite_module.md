# ngx_http_rewrite_module

## rewrite

1. 执行 server 块的 rewrite 指令
2. 执行 location 匹配
3. 执行选定的 location 中的 rewrite 指令

如果其中某步 URI 被重写，则重新循环执行 1-3，直到找到真实存在的文件；
如果循环超过 `10` 次，则返回 `500 Internal Server Error` 错误。

```nginx
rewrite regex replacement [flag];
```

**`flag`** 有四种参数可以选择：

1. **`last`** 停止处理后续 rewrite 指令集，然后对当前重写的新 URI 在 rewrite 指令集上重新查找。
2. **`break`** 停止处理后续 rewrite 指令集，并不再重新查找，但是当前 location 内剩余非 rewrite 语句和 location 外的 非rewrite 语句可以执行。
3. **`redirect`** 如果 `replacement` 不是以 `http://` 或 `https://` 开始，返回 **`302` 临时重定向**
4. **`permanent`** 返回 **`301` 永久重定向**

**rewrite 后的请求参数：**

如果替换字符串 `replacement` 包含新的请求参数，则在它们之后附加先前的请求参数。如果你不想要之前的参数，则在替换字符串 `replacement` 的末尾放置一个问号，避免附加它们。

```nginx
# 由于最后加了个 ?，原来的请求参数将不会被追加到 rewrite 之后的 URI 后面
rewrite ^/users/(.*)$ /show?user=$1? last;
```

## if

- 一个变量名；如果这个变量是空字符串或者以0开始的字符串，则为 false；
- 使用 `=` ，`!=` 比较的一个变量和字符串
- 使用 `~`， `~*` 与正则表达式匹配的变量，如果这个正则表达式中包含 `}`，`;` 则整个表达式需要用 `"` 或 `'` 包围
- 使用 `-f` ，`!-f` 检查一个文件是否存在
- 使用 `-d`， `!-d` 检查一个目录是否存在
- 使用 `-e` ，`!-e ` 检查一个文件、目录、符号链接是否存在
- 使用 `-x` ，` !-x` 检查一个文件是否可执行

