const Java_SE_Date = [
    '/Java/Java SE/Date/DateFormat'
]

const Java_SE_Collection = [
    '/Java/Java SE/Collection/ArrayList'
]

const Java_SE_Thread = [
    '/Java/Java SE/Thread/理论基础',
    '/Java/Java SE/Thread/线程基础'
]

const Java_SE = [
    {
      title: 'Date',
      children: Java_SE_Date
    },
    {
      title: 'Collection',
      children: Java_SE_Collection
    },
    {
      title: 'Thread',
      children: Java_SE_Thread
    }
]

const Java_Web_Servlet = [
    '/Java/Java Web/Servlet/Servlet'
]

const Java_Web = [
    {
      title: 'Servlet',
      children: Java_Web_Servlet
    }
]

module.exports = {
    Java_SE,
    Java_Web
}
