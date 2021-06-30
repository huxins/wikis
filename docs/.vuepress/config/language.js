const JavaScript_基础知识 = [
    '/Language/JavaScript/基础知识/数据类型',
    '/Language/JavaScript/基础知识/类型转换',
    '/Language/JavaScript/基础知识/深拷贝',
    '/Language/JavaScript/基础知识/对象方法',
    '/Language/JavaScript/基础知识/对象属性',
    '/Language/JavaScript/基础知识/Math',
    '/Language/JavaScript/基础知识/Date'
]

const JavaScript_函数 = [
    '/Language/JavaScript/函数/递归',
    '/Language/JavaScript/函数/调度',
    '/Language/JavaScript/函数/箭头函数'
]

const JavaScript_网络请求 = [
    '/Language/JavaScript/网络请求/FormData',
    '/Language/JavaScript/网络请求/XMLHttpRequest'
]

const JavaScript_浏览器 = [
    '/Language/JavaScript/浏览器/元素节点',
    '/Language/JavaScript/浏览器/元素修改'
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
    '/Language/Python/基础知识/Install',
    '/Language/Python/基础知识/String'
]

const Python_模块 = [
    '/Language/Python/模块/BeautifulSoup',
    '/Language/Python/模块/Excel',
    '/Language/Python/模块/openpyxl',
    '/Language/Python/模块/xlwt-xlrd',
    '/Language/Python/模块/xlutils',
    '/Language/Python/模块/xlsxwriter',
    '/Language/Python/模块/pip'
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
    '/Language/Java/安装/Install'
]

const Java_JDK = [
    '/Language/Java/JDK/ClassLoader',
    '/Language/Java/JDK/IO',
    '/Language/Java/JDK/Collection',
    '/Language/Java/JDK/Lambda',
    '/Language/Java/JDK/Stream',
    '/Language/Java/JDK/ScheduledThreadPoolExecutor'
]

const Java_JVM = [
    '/Language/Java/JVM/JVM介绍',
    '/Language/Java/JVM/Java内存区域与内存溢出'
]

const Java_Servlet = [
    '/Language/Java/Servlet/Servlet',
    '/Language/Java/Servlet/ServletConfig',
    '/Language/Java/Servlet/ServletContext',
    '/Language/Java/Servlet/HttpServletRequest',
    '/Language/Java/Servlet/HttpServletResponse',
    '/Language/Java/Servlet/会话技术'
]

const Java_JDBC = [
    '/Language/Java/JDBC/JDBC',
    '/Language/Java/JDBC/Transaction'
]

const Java_WEB = [
    '/Language/Java/Web/Load',
    '/Language/Java/Web/Listener',
    '/Language/Java/Web/Filter',
    '/Language/Java/Web/Servlet',
    '/Language/Java/Web/Jetty',
    '/Language/Java/Web/WebService'
]

const Java_Spring = [
    '/Language/Java/Spring/Bean',
    '/Language/Java/Spring/HttpServlet',
    '/Language/Java/Spring/DataSource',
    '/Language/Java/Spring/Transaction',
    '/Language/Java/Spring/JdbcTemplate',
    '/Language/Java/Spring/Annotation',
    '/Language/Java/Spring/CommonsMultipartResolver'
]

const Java_Log = [
    '/Language/Java/Log/log4j'
]

const Java_Tool = [
    '/Language/Java/Tool/maven',
    '/Language/Java/Tool/jackson',
    '/Language/Java/Tool/json-schema'
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
    title: 'Log',
    children: Java_Log
  },
  {
    title: 'Tool',
    children: Java_Tool
  }
]

module.exports = {
    JavaScript,
    Python,
    Java
}
