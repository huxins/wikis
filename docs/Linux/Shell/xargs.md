# xargs

- [xargs 命令教程](https://www.ruanyifeng.com/blog/2019/08/xargs-tutorial.html)

将管道传来的标准输入转换为命令行参数

```sh
$ echo "hello world" | xargs echo
hello world
```

默认情况下，`xargs` 将换行符和空格作为分隔符，把标准输入分解成一个个命令行参数。

```shell
$ echo "one two three" | xargs mkdir
```

**`-d` 参数可以更改分隔符。**

```shell
$ echo -e "a\tb\tc" | xargs -d "\t" echo
```

**`-p` 参数，`-t` 参数**

使用 `xargs` 命令以后，由于存在转换参数过程，有时需要确认一下到底执行的是什么命令。

`-p` 参数打印出要执行的命令，询问用户是否要执行。

`-t` 参数则是打印出最终要执行的命令，然后直接执行，不需要用户确认。

**`-0` 参数与 `find` 命令**

由于 `xargs` 默认将空格作为分隔符，所以不太适合处理文件名，因为文件名可能包含空格。

`find` 命令有一个特别的参数 `-print0` ，指定输出的文件列表以 `null` 分隔。然后，`xargs` 命令的 `-0` 参数表示用null当作分隔符。

```shell
$ find /path -type f -print0 | xargs -0 rm
```

**`-L` 参数**

如果标准输入包含多行，`-L` 参数指定多少行作为一个命令行参数。

```shell
$ xargs -L 1 find -name
"*.txt"
./foo.txt
./hello.txt
"*.md"
./README.md

$ echo -e "a\nb\nc" | xargs -L 1 echo
a
b
c
```

**`-n` 参数**

`-L` 参数虽然解决了多行的问题，但是有时用户会在同一行输入多项。

```sh
$ xargs find -name
"*.txt" "*.md"
find: paths must precede expression: '*.md'
```

上面的命令将同一行的两项作为命令行参数，导致报错。

`-n` 参数指定每次将多少项，作为命令行参数。

```shell
$ echo {0..9} | xargs -n 2 echo
0 1
2 3
4 5
6 7
8 9
```

**`-I` 参数**

如果 `xargs` 要将命令行参数传给多个命令，可以使用 `-I` 参数。

`-I` 指定每一项命令行参数的替代字符串。

```shell
$ cat foo.txt
one
two
three

$ cat foo.txt | xargs -I file sh -c 'echo file; mkdir file'
one 
two
three

$ ls 
one two three
```

**`--max-procs` 参数**

`xargs` 默认只用一个进程执行命令。如果命令要执行多次，必须等上一次执行完，才能执行下一次。

`--max-procs` 参数指定同时用多少个进程并行执行命令。`--max-procs 2` 表示同时最多使用两个进程，`--max-procs 0` 表示不限制进程数。

```shell
$ docker ps -q | xargs -n 1 --max-procs 0 docker kill
```

上面命令表示，同时关闭尽可能多的 Docker 容器，这样运行速度会快很多。

