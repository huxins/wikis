# Pipeline

- [Jenkins Pipeline 介绍](https://xuanwo.io/2019/08/30/jenkins-pipeline-intro/)
- [Jenkins Pipeline Environment Variables](https://e.printstacktrace.blog/jenkins-pipeline-environment-variables-the-definitive-guide/)

## 声明式

```jenkinsfile
pipeline {
    agent { docker 'maven:3.3.3' }
    stages {
        stage('build') {
            steps {
                sh 'mvn --version'
            }
        }
    }
}
```

### Agent

`agent` 主要用于描述整个 Pipeline 或者指定的 Stage 由什么规则来选择节点执行。Pipeline 级别的 agent 可以视为 Stage 级别的默认值，如果 stage 中没有指定，将会使用与 Pipeline 一致的规则。支持 `any` , `none` , `label` , `node` , `docker`，`dockerfile` 和 `kubernetes` 等。

- 如果 Pipeline 选择了 none，那么 stage 必须要指定一个有效的 agent，否则无法执行
- Jenkins 总是会使用 master 来执行 scan multibranch 之类的操作，即使 master 配置了 0 executors
- agent 指定的是规则而不是具体的节点，如果 stage 各自配置了自己的 agent，需要注意是不是在同一个节点执行的

### Stages && Stage

Stages 是 Pipeline 中最主要的组成部分，Jenkins 将会按照 Stages 中描述的顺序从上往下的执行。Stages 中可以包括任意多个 Stage，而 Stage 与 Stages 又能互相嵌套，除此以外还有 `parallel` 指令可以让内部的 Stage 并行运行。实际上可以把 Stage 当作最小单元，Stages 指定的是顺序运行，而 parallel 指定的是并行运行。

除了指定 Stage 之间的顺序关系之外，我们还可以通过 `when` 来指定某个 Stage 运行与否。

还能在 Stage 的级别设置 `environment`

### Post

`post` 部分将会在 pipeline 的最后执行，经常用于一些测试完毕后的清理和通知操作。

常用的是 `always`，`success` 和 `failure`。

