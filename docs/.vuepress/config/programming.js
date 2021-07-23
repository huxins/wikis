const JavaScript_基础知识 = [
    '/Programming/JavaScript/基础知识/数据类型',
    '/Programming/JavaScript/基础知识/类型转换',
    '/Programming/JavaScript/基础知识/深拷贝',
    '/Programming/JavaScript/基础知识/对象方法',
    '/Programming/JavaScript/基础知识/对象属性',
    '/Programming/JavaScript/基础知识/Math',
    '/Programming/JavaScript/基础知识/Date'
]

const JavaScript_函数 = [
    '/Programming/JavaScript/函数/递归',
    '/Programming/JavaScript/函数/调度',
    '/Programming/JavaScript/函数/箭头函数'
]

const JavaScript_网络请求 = [
    '/Programming/JavaScript/网络请求/FormData',
    '/Programming/JavaScript/网络请求/XMLHttpRequest'
]

const JavaScript_浏览器 = [
    '/Programming/JavaScript/浏览器/元素节点',
    '/Programming/JavaScript/浏览器/元素修改'
]

const JavaScript = [
    {
      title: '基础知识',
      children: JavaScript_基础知识
    },
    {
      title: '函数',
      children: JavaScript_函数
    },
    {
      title: '网络请求',
      children: JavaScript_网络请求
    },
    {
      title: '浏览器',
      children: JavaScript_浏览器
    }
]

const Python_基础知识 = [
    '/Programming/Python/基础知识/Install',
    '/Programming/Python/基础知识/String'
]

const Python_模块 = [
    '/Programming/Python/模块/BeautifulSoup',
    '/Programming/Python/模块/Excel',
    '/Programming/Python/模块/openpyxl',
    '/Programming/Python/模块/xlwt-xlrd',
    '/Programming/Python/模块/xlutils',
    '/Programming/Python/模块/xlsxwriter',
    '/Programming/Python/模块/pip'
]

const Python = [
    {
      title: '基础知识',
      children: Python_基础知识
    },
    {
      title: '模块',
      children: Python_模块
    }
]

const Java_安装 = [
    '/Programming/Java/安装/Install'
]

const Java_JDK = [
    '/Programming/Java/JDK/IO',
    '/Programming/Java/JDK/Collection',
    '/Programming/Java/JDK/Lambda',
    '/Programming/Java/JDK/Stream',
    '/Programming/Java/JDK/ScheduledThreadPoolExecutor'
]

const Java_JVM = [
    '/Programming/Java/JVM/JVM介绍',
    '/Programming/Java/JVM/Java内存区域与内存溢出'
]

const Java_Core = [
    '/Programming/Java/Core/ClassLoader',
    '/Programming/Java/Core/String',
    '/Programming/Java/Core/泛型',
    '/Programming/Java/Core/SuppressWarnings'
]

const Java_Filter = [
    '/Programming/Java/Filter/Filter',
    '/Programming/Java/Filter/CharacterEncodingFilter',
    '/Programming/Java/Filter/HttpServletRequestWrapper',
    '/Programming/Java/Filter/HttpServletResponseWrapper'
]

const Java_Servlet = [
    '/Programming/Java/Servlet/Servlet',
    '/Programming/Java/Servlet/ServletConfig',
    '/Programming/Java/Servlet/ServletContext',
    '/Programming/Java/Servlet/HttpServletRequest',
    '/Programming/Java/Servlet/HttpServletResponse',
    '/Programming/Java/Servlet/会话技术'
]

const Java_JDBC = [
    '/Programming/Java/JDBC/JDBC',
    '/Programming/Java/JDBC/Transaction'
]

const Java_WEB = [
    '/Programming/Java/Web/Load',
    '/Programming/Java/Web/Listener',
    '/Programming/Java/Web/Servlet',
    '/Programming/Java/Web/Jetty',
    '/Programming/Java/Web/WebService'
]

const Java_Spring = [
    '/Programming/Java/Spring/ContextLoader',
    '/Programming/Java/Spring/IoC',
    '/Programming/Java/Spring/ComponentScan',
    '/Programming/Java/Spring/DataSource',
    '/Programming/Java/Spring/Transaction',
    '/Programming/Java/Spring/JdbcTemplate',
    '/Programming/Java/Spring/Annotation'
]

const Java_SpringMVC = [
    '/Programming/Java/SpringMVC/DispatcherServlet',
    '/Programming/Java/SpringMVC/AnnotationDriven',
    '/Programming/Java/SpringMVC/HttpMessageConverter',
    '/Programming/Java/SpringMVC/RequestMapping',
    '/Programming/Java/SpringMVC/MultiActionController',
    '/Programming/Java/SpringMVC/CommonsMultipartResolver'
]

const Java_Log = [
    '/Programming/Java/Log/log4j'
]

const Java_Tool = [
    '/Programming/Java/Tool/maven',
    '/Programming/Java/Tool/jackson',
    '/Programming/Java/Tool/json-schema'
]

const Java = [
  {
    title: '安装',
    children: Java_安装
  },
  {
    title: 'JDK',
    children: Java_JDK
  },
  {
    title: 'JVM',
    children: Java_JVM
  },
  {
    title: 'Core',
    children: Java_Core
  },
  {
    title: 'Filter',
    children: Java_Filter
  },
  {
    title: 'Servlet',
    children: Java_Servlet
  },
  {
    title: 'JDBC',
    children: Java_JDBC
  },
  {
    title: 'Web',
    children: Java_WEB
  },
  {
    title: 'Spring',
    children: Java_Spring
  },
  {
    title: 'SpringMVC',
    children: Java_SpringMVC
  },
  {
    title: 'Log',
    children: Java_Log
  },
  {
    title: 'Tool',
    children: Java_Tool
  }
]

const Go_go = [
    '/Programming/Go/Go/goroutine',
    '/Programming/Go/Go/io'
]

const Go_modules = [
    '/Programming/Go/Modules/Postgres'
]

const Go = [
  {
    title: 'Modules',
    children: Go_modules
  },
  {
    title: 'Go',
    children: Go_go
  }
]

const Node_base = [
    '/Programming/Node/Base/开发环境'
]

const Node = [
  {
    title: 'Base',
    children: Node_base
  }
]

module.exports = {
    JavaScript,
    Python,
    Java,
    Go,
    Node
}
