# Slave

## JNLP

1. 进入 Manage Jenkins -> Configure Global Security -> Agents 勾选固定端口，填一个端口数字

2. 进入 Manage Jenkins -> Manage Nodes -> New Node 勾选 Permanent Agent ，即设置为固定节点

3. 配置页面 Remote root directory 远程根目录，指连接 slave节点后使用的目录，相关文件会存放于此

   Launch method 选择 "Launch agent by connecting it to the master"

```bash
javaws -verbose slave-agent.jnlp
```

## SSH

- [通过SSH方法添加Slave节点](https://juejin.im/post/6844903911774486542)

