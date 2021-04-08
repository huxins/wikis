# screen

```bash
# 新建 session
screen -S yourname
# 列出当前所有的session
screen -ls
# 回到 session
screen -r yourname
# 离线 session
screen -d yourname
# kill
screen -X -S yourname quit
screen -ls | grep Detached | cut -d. -f1 | tr --delete "\t" | xargs -I % -t screen -X -S % quit
screen -wipe
```

离线 `ctrl + A + D`

停止 `ctrl + C + D`


