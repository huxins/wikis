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

