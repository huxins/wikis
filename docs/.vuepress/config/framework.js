const bootstrapModal = [
    '/Framework/Bootstrap/组件/modal'
]

const bootstrapJavascript = [
    '/Framework/Bootstrap/JavaScript 插件/bootstrap-fileinput',
    '/Framework/Bootstrap/JavaScript 插件/BootstrapValidator',
    '/Framework/Bootstrap/JavaScript 插件/DateTimePicker'
]

const Bootstrap = [
    {
      title: '组件',
      children: bootstrapModal
    },
    {
      title: 'JavaScript 插件',
      children: bootstrapJavascript
    }
]

const jQuery = [
    '/Framework/jQuery/AJAX',
    '/Framework/jQuery/事件',
    '/Framework/jQuery/属性'
]



module.exports = {
    Bootstrap,
    jQuery
}
