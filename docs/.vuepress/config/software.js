const Nginx = [
  'Install',
  'Modules',
  'ngx_http_core_module',
  'ngx_http_autoindex_module',
  'ngx_http_auth_basic_module',
  'ngx_http_limit_conn_module',
  'ngx_http_limit_req_module',
  'ngx_http_log_module',
  'ngx_http_ssl_module',
  'ngx_http_rewrite_module',
  'ngx_http_referer_module',
  'ngx_http_proxy_module',
  'headers-more-nginx-module',
  'nginx-dav-ext-module',
  'ngx-fancyindex',
  'ngx_stream_core_module'
]

const Traffic_Server = [
  'Install',
  'Configure'
]

const Git = [
  'Install',
  '配置',
  '仓库',
  '远程仓库',
  '分支',
  '标签'
]

const Subversion = [
  'Install',
  '版本库',
  '项目配置',
  '访问权限',
  'Apache',
  'Hooks',
  '数据备份',
  'Git'
]

const Jenkins = [
  'Install',
  'Plugins',
  'Pipeline',
  'Slave',
  'SCM',
  'Theme',
  'Coding'
]

const Push = [
  'Bark'
]

const Files = [
  'SSHFS'
]

module.exports = {
    Nginx,
    Traffic_Server,
    Git,
    Subversion,
    Jenkins,
    Push,
    Files
}
