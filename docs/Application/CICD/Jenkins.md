# Jenkins

## Install

### WAR

```bash
wget http://mirrors.jenkins.io/war-stable/latest/jenkins.war
wget https://mirrors.tuna.tsinghua.edu.cn/jenkins/war-stable/latest/jenkins.war
java -jar jenkins.war --ajp13Port=-1 --httpPort=8081
```

### Docker

- [安装Jenkins](https://www.jenkins.io/zh/doc/book/installing/#docker)

```shell
docker run \
  --rm \
  -u root \
  -d \
  -p 8080:8080 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  jenkinsci/blueocean
```

## Pipeline

- [玩转Jenkins Pipeline](https://blog.csdn.net/diantun00/article/details/81075007)
- [Jenkins高级用法 - Jenkinsfile 介绍及实战经验](https://www.cnblogs.com/stulzq/p/10115589.html)
- [jenkins之Blue Ocean](https://zhuanlan.zhihu.com/p/70355846)
- [pipeline 使用之语法详解](https://blog.csdn.net/hxpjava1/article/details/79739848)
- [Jenkins Pipeline 介绍](https://xuanwo.io/2019/08/30/jenkins-pipeline-intro/)

Jenkinsfile 示例

**声明式**

```Jenkinsfile
pipeline{
    agent any
    stages {
        stage('Build') {
            steps{
                echo 'This is a build step' 
            }
        }
        stage('Test') {
            steps{
                echo 'This is a test step'  
            }
        }
        stage('Deploy') {
            steps{
                echo 'This is a deploy step'    
            }
        }
    }
}
```

## Plugins

**美化**

- [jenkins-material-theme](https://github.com/afonsof/jenkins-material-theme)

**Maven Integration**

**Publish Over SSH**

**SVN Publisher plugin**

**SSH Slaves plugin**

**deploy plugin**



## Cron

| 缩写                 | 等价写法  | 描述                 |
| -------------------- | --------- | -------------------- |
| @daily 或 @midnight  | 0 0 * * * | 每天午夜0点执行      |
| @hourly              | 0 * * * * | 每个整点0分执行      |
| @monthly             | 0 0 1 * * | 每月1号的午夜执行    |
| @weekly              | 0 0 * * 0 | 每周日午夜执行       |
| @yearly 或 @annually | 0 0 1 1 * | 每年1月1日的午夜执行 |

## Slave

### JNLP

1. 进入 Manage Jenkins -> Configure Global Security -> Agents 勾选固定端口，填一个端口数字

2. 进入 Manage Jenkins -> Manage Nodes -> New Node 勾选 Permanent Agent ，即设置为固定节点

3. 配置页面 Remote root directory 远程根目录，指连接 slave节点后使用的目录，相关文件会存放于此

   Launch method 选择 "Launch agent by connecting it to the master"

```bash
javaws -verbose slave-agent.jnlp
```

### SSH

- [通过SSH方法添加Slave节点](https://juejin.im/post/6844903911774486542)

## Coding

- [Coding 持续集成（构建）介绍](https://help.coding.net/docs/devops/ci/introduce.html)
- [自动化部署](https://blog.forecho.com/automatic-deployment.html)

```bash
# 将节点注册至指定的项目节点池中
cci-agent init --pt ${PROJECT_TOKEN}
# 前台执行
cci-agent up
# 后台执行
cci-agent up -d
```





