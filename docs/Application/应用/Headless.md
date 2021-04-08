# Headless

- [揭秘浏览器远程调试技术](https://fed.taobao.org/blog/taofed/do71ct/chrome-remote-debugging-technics/)
- [Chrome 远程调试协议分析与实战](https://fex.baidu.com/blog/2014/06/remote-debugging-protocol/)
- [chromedriver](https://npm.taobao.org/mirrors/chromedriver/)
- [IEDriverServer](http://selenium-release.storage.googleapis.com/index.html)
- [driving-headless-chrome-with-python](https://duo.com/decipher/driving-headless-chrome-with-python)
- [初见 Chrome Headless 第二弹](https://lightless.me/archives/chrome-headless-second.html)
- [Chrome remote debugging protocol在自动化测试中的应用和实践](https://www.jianshu.com/p/195ff63921de)
- [chrome devtools protocol——Web 性能自动化实践介绍](https://testerhome.com/topics/15817)
- [利用Chrome Dev Tools 连接手机端Webview步骤简化说明](https://www.jianshu.com/p/84f87af906b6)
- [虫师 selenium](https://www.cnblogs.com/fnng/category/349036.html)



- [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/)
- [PyChromeDevTools](https://github.com/marty90/PyChromeDevTools)
- [pychrome](https://github.com/fate0/pychrome)



官网列出了很多有意思的工具：[链接](https://developer.chrome.com/devtools/docs/debugging-clients)

实现了Remote debugging protocol的node的库：

> - [chrome-debug-protocol](https://github.com/DickvdBrink/chrome-debug-protocol) 使用了ES6和TypeScript
> - [chrome-remote-interface](https://github.com/cyrus-and/chrome-remote-interface) 官网推荐的
> - [chrome-har-capturer](https://github.com/cyrus-and/chrome-har-capturer) 传入url，直接获取har format文件



```js
// 新建一个标签页
http://localhost:9222/json/new
http://localhost:9222/json/new?http://www.baidu.com
// 关闭一个标签页
http://localhost:9222/json/close/477810FF-323E-44C5-997C-89B7FAC7B158
// 激活标签页
http://localhost:9222/json/activate/477810FF-323E-44C5-997C-89B7FAC7B158
// 查看chrome和协议的版本信息
http://localhost:9222/json/version

```



[network-settings](https://www.chromium.org/developers/design-documents/network-settings)

```powershell
google-chrome --headless --disable-gpu --remote-debugging-port=9222  http://www.m45e.com
# 获取屏幕截图：
google-chrome --headless --disable-gpu --screenshot --window-size=1280,1696 https://github.com
# 获取页面为PDF：
google-chrome --headless --disable-gpu --print-to-pdf https://github.com
# 打印页面DOM：
google-chrome --headless --disable-gpu --dump-dom https://github.com/
# 使用代理
google-chrome --proxy-server="socks5://192.168.11.25:1081"
```



%ProgramFiles%\Google\Chrome\Application\chrome.exe --save-page-as-mhtml

## download

最新稳定版：https://www.google.com/intl/zh-CN/chrome/browser/?standalone=1
最新测试版：https://www.google.com/intl/zh-CN/chrome/browser/?standalone=1&extra=betachannel
最新开发版：https://www.google.com/intl/zh-CN/chrome/browser/?standalone=1&extra=devchannel

[adobe flash player 因过期而遭阻止](https://www.zhihu.com/question/32223811)

