
const nav = require('./config/nav')

const application = require('./config/application')
const linux = require('./config/linux')
const database = require('./config/database')
const devops = require('./config/devops')

const java = require('./config/Language/java')
const go = require('./config/Language/go')
const python = require('./config/Language/python')
const node = require('./config/Language/node')

const software = require('./config/software')
const editor = require('./config/editor')
const language = require('./config/language')
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
          title: 'Editor',
          children: application.editor
        },
        {
          title: 'Download',
          children: application.download
        }
      ],
      '/Software/Nginx/': software.Nginx,
      '/Software/Traffic Server/': software.Traffic_Server,
      '/Software/Git/': software.Git,
      '/Software/Subversion/': software.Subversion,
      '/Software/Jenkins/': software.Jenkins,
      '/Software/Push/': software.Push,
      '/Software/Files/': software.Files,
      '/Editor/IntelliJ IDEA/': editor.IntelliJ_IDEA,
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
      ],
      '/System/Windows/': [
        '启动方式',
        '进程',
        '网络',
        'KMS'
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
      '/DevOps/': [
        {
          title: 'Tool',
          children: devops.tool
        }
      ],
      '/Language/Android/': [
      ],
      '/Language/Java/': [
        {
          title: 'JDK',
          children: java.jdk
        },
        {
          title: 'JVM',
          children: java.jvm
        },
        {
          title: 'Web',
          children: java.web
        },
        {
          title: 'Spring',
          children: java.spring
        },
        {
          title: 'Log',
          children: java.log
        },
        {
          title: 'Tool',
          children: java.tool
        }
      ],
      '/Language/Go/': [
        {
          title: 'Modules',
          children: go.modules
        },
        {
          title: 'Go',
          children: go.go
        }
      ],
      '/Language/Python/': [
        {
          title: 'Modules',
          children: python.modules
        },
        {
          title: 'Base',
          children: python.base
        }
      ],
      '/Language/Node/': [
        {
          title: 'Base',
          children: node.base
        }
      ],
      '/Language/JavaScript/': language.JavaScript,
      '/Language/HTML/': [
        '表单',
        '表格',
        'Script'
      ],
      '/Language/CSS/': [
        '盒模型',
        'Float',
        'Fonts',
        'Text'
      ],
      '/Framework/Bootstrap/': framework.Bootstrap,
      '/Framework/jQuery/': framework.jQuery,
      '/Framework/Select2/': framework.Select2,
      '/Life/': [
        '怎样成为更好的人'
      ]
    }
  }
};
