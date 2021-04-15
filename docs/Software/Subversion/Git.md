# Git

- [Subversion vs. Git](https://svnvsgit.com/)

## git pull

```bash
# https://github.com/Mooophy/Cpp-Primer/tree/master/ch03
$ svn checkout https://github.com/Mooophy/Cpp-Primer/trunk/ch03
$ svn checkout https://github.com/Mooophy/Cpp-Primer/branches/master/ch03
```

## svn log

```bash
# 用户名对照
# test = test <test@tencent.com>
$ svn log --xml --username username --password password path \
    | grep author | sed 's#<author>##' | sed 's#</author>##' | sort -u \
    | sed 's/.*/& = & <&@tencent.com>/' \
    > user.txt
$ svn log --xml --username username --password password path \
    | grep author | sort -u \
    | perl -pe 's/<author>(.*?)<\/author>/$1 = /' \
    > user.txt
# 时间转换
$ date -d '2020-01-09T07:14:29.120742Z' +'%s' | awk '{print strftime ("%F %T",$0)}'
$ perl -e 'print localtime(1279592730)."\n";'
# 获取提交用户
$ svn log --xml --username username --password password \
    --non-interactive --trust-server-cert \
    --revision HEAD --limit 1 --quiet path \
    | grep author | sed 's#<author>##' | sed 's#</author>##'
# 获取提交时间
$ svn log --xml --username username --password password \
    --non-interactive --trust-server-cert \
    --revision HEAD --limit 1 --quiet path \
    | grep date | sed 's#<date>##' | sed 's#</date>##' \
    | xargs -I{} date -d "{}" +"%s" | awk '{print strftime ("%F %T",$0)}'
# 获取版本号
$ svn log --xml --username username --password password \
    --non-interactive --trust-server-cert \
    --revision HEAD --limit 1 --quiet path \
    | grep revision | xargs echo | sed 's#revision=##' | sed 's#>##'
```

## git svn

```bash
$ git svn clone --no-metadata -r 11322:HEAD --authors-file=user.txt  remote-path local-path
$ git remote add origin https://huxins:HUxin990210@github.com/huxins/newmes.html.git
$ git push --set-upstream origin master
# git svn rebase
$ git svn fetch
$ git rebase --onto remotes/git-svn --root master
$ git push
```

