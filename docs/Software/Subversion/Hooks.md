# Hooks

- [SVN Hooks的介绍及使用](https://ops-coffee.cn/s/xjlojmj9gtbfgnpwn_yu2a)

## 应用

svn hooks 位于 svn 版本库的 hooks 文件夹下

## 服务端

**pre-lock**：文件加锁前执行，不常用

**post-lock**：文件加锁后执行，通常用来发送锁定事件通知，需要传递两个参数给 hooks 脚本，按照顺序依次为：1. 版本库路径，2. 锁定路径的认证用户名

**per-unlock**：文件解锁前执行，不常用

**post-unlock**：文件解锁后执行，通常用来发送解锁事件通知，需要传递两个参数给 hooks 脚本，按照顺序依次为：1. 版本库路径，2. 解锁路径的认证用户名

**start-commit**：开始提交时执行，在 `pre-commit` 之前，通常用来确定用户是否有提交权限

**pre-commit**：提交之前执行，在 `start-commit` 之后，通常用来对提交内容的检查，例如我们后边要介绍的利用 `pre-commit` 做提交 log 的合规性检查，需要传递两个参数给 hooks 脚本，按照顺序依次为：1. 版本库路径，2. 提交事务的名称

**post-commit**：提交完成后执行，这应该是使用最广的 hooks 之一，通常用来在提交之后发送提交通知，甚至是利用它来做自动化的 CI/CD 等操作，需要传递两个参数给 hooks 脚本，按照顺序依次为：1. 版本库路径，2. 提交创建的修订版本号

**pre-revprop-change**：在修改 revision 属性之前执行，不常用

**post-revprop-change**：在修改 revision 属性之后执行，不常用

