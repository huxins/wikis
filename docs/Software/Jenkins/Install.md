# Install

## WAR

```bash
$ wget http://mirrors.jenkins.io/war-stable/latest/jenkins.war
$ java -jar jenkins.war --ajp13Port=-1 --httpPort=8081
```

## Docker

```bash
$ docker run -d \
    -p 8080:8080 \
    -v jenkins-data:/var/jenkins_home \
    -v /var/run/docker.sock:/var/run/docker.sock \
    jenkins/jenkins
```

## CentOS

```bash
$ wget -O /etc/yum.repos.d/jenkins.repo \
    https://pkg.jenkins.io/redhat-stable/jenkins.repo
$ rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
$ yum install jenkins java-1.8.0-openjdk-devel
```

