const nav = require('./config/nav')
const application = require('./config/application')
const database = require('./config/database')
const devops = require('./config/devops')
const 服务 = require('./config/服务')
const 软件 = require('./config/软件')
const 硬件 = require('./config/硬件')
const 操作系统 = require('./config/操作系统')
const java = require('./config/java')
const 编程 = require('./config/编程')
const framework = require('./config/framework')
const 生活 = require('./config/生活')

module.exports = {
  title: '偷影子的人',
  description: '你在，春华秋实夏蝉冬雪。',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  base: '/',
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    sidebarDepth: 2,
    nav: nav.nav,
    sidebar:{
      '/Application/': [
        {
          title: '应用',
          children: application.app
        },
        {
          title: 'System',
          children: application.system
        },
        {
          title: 'Network',
          children: application.network
        },
        {
          title: 'Device',
          children: application.dev
        },
        {
          title: 'Download',
          children: application.download
        }
      ],
      '/服务/Apple/': 服务.Apple,
      '/服务/Google/': 服务.Google,
      '/服务/Android/': 服务.Android,
      '/软件/Chromium/': 软件.Chromium,
      '/软件/SSH/': 软件.SSH,
      '/软件/Nginx/': 软件.Nginx,
      '/软件/Traffic Server/': 软件.Traffic_Server,
      '/软件/Git/': 软件.Git,
      '/软件/Subversion/': 软件.Subversion,
      '/软件/Jenkins/': 软件.Jenkins,
      '/软件/Tomcat/': 软件.Tomcat,
      '/硬件/电子产品/': 硬件.电子产品,
      '/硬件/智能设备/': 硬件.智能设备,
      '/硬件/配件/': 硬件.配件,
      '/操作系统/Windows/': 操作系统.Windows,
      '/操作系统/Linux/': 操作系统.Linux,
      '/操作系统/Debian/': 操作系统.Debian,
      '/操作系统/OpenWrt/': 操作系统.OpenWrt,
      '/操作系统/Proxmox VE/': 操作系统.Proxmox_VE,
      '/Database/': [
        {
          title: 'SQL',
          children: database.sql
        },
        {
          title: 'PostgreSQL',
          children: database.postgresql
        },
        {
          title: 'Redis',
          children: database.redis
        }
      ],
      '/DevOps/Docker/': devops.Docker,
      '/DevOps/网络代理/': devops.网络代理,
      '/DevOps/Tool/': devops.Tool,
      '/Java/Java EE/': java.Java_EE,
      '/编程/Android/': 编程.Android,
      '/编程/Java/': 编程.Java,
      '/编程/Go/': 编程.Go,
      '/编程/Python/': 编程.Python,
      '/编程/Node/': 编程.Node,
      '/编程/JavaScript/': 编程.JavaScript,
      '/编程/Skill/': [
        'RoadMap',
        'Backend'
      ],
      '/编程/HTML/': [
        '表单',
        '表格',
        'Script'
      ],
      '/编程/CSS/': [
        '盒模型',
        'Float',
        'Fonts',
        'Text'
      ],
      '/编程/Regular expression/': 编程.Regular_expression,
      '/编程/编辑器/': 编程.编辑器,
      '/编程/设计模式/': 编程.设计模式,
      '/编程/数据格式/': 编程.数据格式,
      '/Framework/Bootstrap/': framework.Bootstrap,
      '/Framework/jQuery/': framework.jQuery,
      '/Framework/Select2/': framework.Select2,
      '/Framework/Spring/': framework.Spring,
      '/生活/物资/': 生活.物资,
      '/生活/房产/': 生活.房产,
      '/生活/娱乐/': 生活.娱乐
    }
  }
};
