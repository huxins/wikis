# if

- [shell中的if语句](https://www.cnblogs.com/kaishirenshi/p/9729800.html)

## syntax

基本语法

```bash
if [ command ]; then
     usleep
fi
```

拓展语法

```bash
if [ command ];then
     usleep
elif [ command ];then
     usleep
else
     usleep
fi
```

## basic

双圆括号 `((  ))` : 表示数学表达式

双方括号 `[[  ]]` : 表示高级字符串处理函数

双方括号中判断命令使用标准的字符串比较，还可以使用匹配模式，从而定义与字符串相匹配的正则表达式。

双括号的作用：

在 shell 中，[ $a != 1 || $b = 2 ] 是不允许出，要用 [ $a != 1 ] || [ $b = 2 ] ，而双括号就可以解决这个问题的，[[ $a != 1 || $b = 2 ]] 。又比如这个 [ "$a" -lt "$b" ] ，也可以改成双括号的形式 (( "$a" < "$b" ))


