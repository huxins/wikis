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

module.exports = {
    JavaScript,
    Python
}
