# AS SSD Benchmark

- [AS SSD Benchmark 2.0.7316.34247](https://www.alex-is.de/PHP/fusion/downloads.php?download_id=9)

Seq：以 16M 为最小块的顺序读写。

4k：以 4K 为最小块的随机读写。

4K-64Thrd：以 64 线程并发的 4K 随机读写。

Acc.time：延迟。

| 型号        | 大小 | Seq Read | Seq Write | 4K Read | 4K Write | 4K-64Thrd Read | 4K-64Thrd Write | Acc.time Read | Acc.time Write                       | Score Read | Score Write | Score |
| ----------- | ---- | -------- | --------- | ------- | -------- | -------------- | --------------- | ------------- | ------------------------------------ | ---------- | ----------- | ----- |
| MX500 500GB | 1GB  | 520      | 471       | 33      | 76       | 374            | 323             | 0.124         | 0.045                                | 460        | 447         | 1152  |
| MX500 500GB | 10GB | 522      | 461       | 35      | 78       | 344            | 289             | 0.118         | <span style="color:red">0.486</span> | 432        | 414         | 1077  |

