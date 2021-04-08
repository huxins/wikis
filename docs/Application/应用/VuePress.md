# VuePress

## 搭建

### 全局安装VuePress

```sh
yarn global add vuepress # 或者：npm install -g vuepress
```

### 新建文件夹

可以手动右键新建，也可以使用下面的命令新建文件夹：

```sh
mkdir project
```

### 项目初始化

进入到`project`文件夹中，使用命令行初始化项目:

```sh
yarn init -y # 或者 npm init -y
```

将会创建一个`package.json`文件，长这样子：

```json
{
  "name": "project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### 在project的根目录下新建docs文件夹

这个文档将作为项目文档的根目录来使用

```sh
mkdir docs
```

在docs文件夹下创建`.vuepress`文件夹

```sh
mkdir .vuepress
```

所有 VuePress 相关的文件都将会被放在这里

### 在.vuepress文件夹下面创建config.js

```sh
touch config.js
```

config.js是VuePress必要的配置文件，它导出一个javascript对象。

你可以先加入如下配置：

```javascript
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
}
```

### 在.vuepress文件夹下面创建public文件夹

```sh
mkdir public
```

这个文件夹是用来放置静态资源的，打包出来之后会放在.vuepress/dist/的根目录。

### 首页(像VuePress文档主页一样)

在docs文件夹下面创建一个`README.md`：

默认的主题提供了一个首页，像下面一样设置`home:true`即可，可以把下面的设置放入`README.md`中，待会儿你将会看到跟`VuePress`一样的主页。

```yaml
---
home: true
heroImage: /logo.jpg
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

ps：你需要放一张图片到public文件夹中。

### 我们的项目结构已经搭好了

```
project
├─── docs
│   ├── README.md
│   └── .vuepress
│       ├── public
│       └── config.js
└── package.json
```

### 在 package.json 里添加两个启动命令

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

### 启动你的VuePress

默认是`localhost:8080`端口。

```sh
yarn docs:dev # 或者：npm run docs:dev
```

### 构建

build生成静态的HTML文件,默认会在 `.vuepress/dist` 文件夹下

```sh
yarn docs:build # 或者：npm run docs:build
```



## 基本配置

最标准的当然是[官方文档](https://vuepress.vuejs.org/zh/config/),可以自己的需求来配置`config.js`。

可以参考一下我的`config.js`的配置：

```javascript
module.exports = {
  title: '网站标题',
  description: '网站描述',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
  }
};
```



## Reference

- [VuePress](https://vuepress.vuejs.org/zh/)