
const nav = require('./config/nav')

const application = require('./config/application')
const linux = require('./config/linux')
const database = require('./config/database')
const devops = require('./config/devops')
const software = require('./config/software')
const hardware = require('./config/hardware')
const editor = require('./config/editor')
const programming = require('./config/programming')
const framework = require('./config/framework')

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
    lastUpdated: 'Last Updated',
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
      '/Software/Chromium/': software.Chromium,
      '/Software/SSH/': software.SSH,
      '/Software/Nginx/': software.Nginx,
      '/Software/Traffic Server/': software.Traffic_Server,
      '/Software/Git/': software.Git,
      '/Software/Subversion/': software.Subversion,
      '/Software/Jenkins/': software.Jenkins,
      '/Software/Tomcat/': software.Tomcat,
      '/Software/Push/': software.Push,
      '/Software/Files/': software.Files,
      '/Software/Archive file/': software.Archive_file,
      '/Software/系统工具/': software.系统工具,
      '/Software/磁盘工具/': software.磁盘工具,
      '/Software/图像工具/': software.图像工具,
      '/Software/视频工具/': software.视频工具,
      '/Hardware/电脑/': hardware.电脑,
      '/Hardware/Disk/': hardware.Disk,
      '/Hardware/手机/': hardware.手机,
      '/Hardware/配件/': hardware.配件,
      '/Editor/IntelliJ IDEA/': editor.IntelliJ_IDEA,
      '/Editor/Visual Studio Code/': editor.Visual_Studio_Code,
      '/Editor/Sublime Text 3/': editor.Sublime_Text_3,
      '/Editor/Note/': editor.Note,
      '/System/Proxmox VE/': [
        'Install',
        '镜像格式',
        '磁盘',
        'QEMU Guest Agent'
      ],
      '/System/OpenWrt/': [
        'eSir'
      ],
      '/System/Debian/': [
        '软件包管理'
      ],
      '/System/Windows/': [
        '启动方式',
        '进程',
        '网络',
        'KMS',
        '分析工具'
      ],
      '/Linux/': [
        {
          title: 'Shell',
          children: linux.shell
        },
        {
          title: 'Kernel',
          children: linux.kernel
        },
        {
          title: 'Debian',
          children: linux.debian
        },
        {
          title: 'CentOS',
          children: linux.centos
        },
        {
          title: 'Network',
          children: linux.network
        },
        {
          title: 'Disk',
          children: linux.disk
        },
        {
          title: 'Tool',
          children: linux.tool
        }
      ],
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
      '/Programming/Android/': [
      ],
      '/Programming/Java/': programming.Java,
      '/Programming/Go/': programming.Go,
      '/Programming/Python/': programming.Python,
      '/Programming/Node/': programming.Node,
      '/Programming/JavaScript/': programming.JavaScript,
      '/Programming/Skill/': [
        'RoadMap',
        'Backend'
      ],
      '/Programming/HTML/': [
        '表单',
        '表格',
        'Script'
      ],
      '/Programming/CSS/': [
        '盒模型',
        'Float',
        'Fonts',
        'Text'
      ],
      '/Programming/Regular expression/': programming.Regular_expression,
      '/Framework/Bootstrap/': framework.Bootstrap,
      '/Framework/jQuery/': framework.jQuery,
      '/Framework/Select2/': framework.Select2,
      '/Framework/Spring/': framework.Spring,
      '/Life/': [
        '怎样成为更好的人',
        '医疗'
      ],
      '/房产/': [
        '上海',
        '苏州',
        '成都'
      ]
    }
  }
};
