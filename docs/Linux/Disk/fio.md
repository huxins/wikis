# fio

[使用 fio 测试磁盘 I/O 性能](https://wsgzao.github.io/post/fio/)

安装

```bash
yum install libaio-devel fio
```

性能测试

```bash
# 顺序读 顺序写 随机读 随机写 混合随机读写
fio -loops=5 -size=500m -filename=/dev/sda -stonewall -ioengine=libaio -direct=1 -runtime=15 \
  -name=SeqRead -bs=1m -rw=read \
  -name=SeqWrite -bs=1m -rw=write \
  -name=512kRead -bs=512k -rw=randread \
  -name=512kWrite -bs=512k -rw=randwrite \
  -name=4kQD32Read -bs=4k -iodepth=32 -rw=randread \
  -name=4kQD32Write -bs=4k -iodepth=32 -rw=randwrite \
  -name=4kRead -bs=4k -rw=randread \
  -name=4kWrite -bs=4k -rw=randwrite \
  -name=randrw -bs=16k -rw=randrw -rwmixread=70
  
fio -loops=5 -size=500m -filename=/dev/sda -stonewall -ioengine=libaio -direct=1 -runtime=15 \
  -name=SEQ1MQ8T1_Read -bs=1m -iodepth=8 -rw=read \
  -name=SEQ1MQ8T1_Write -bs=1m -iodepth=8 -rw=write \
  -name=SEQ128KQ32T1_Read -bs=128k -iodepth=32 -rw=read \
  -name=SEQ128KQ32T1_Write -bs=128k -iodepth=32 -rw=write \
  -name=RND4KQD32T16_Read -bs=4k -iodepth=32 -threads=16 -rw=randread \
  -name=RND4KQD32T16_Write -bs=4k -iodepth=32 -threads=16 -rw=randwrite \
  -name=RND4KQ1T1_Read -bs=4k -rw=randread \
  -name=RND4KQ1T1_Write -bs=4k -rw=randwrite
```

