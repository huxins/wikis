(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{581:function(t,v,_){"use strict";_.r(v);var e=_(14),o=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"ngx-http-core-module"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ngx-http-core-module"}},[t._v("#")]),t._v(" ngx_http_core_module")]),t._v(" "),v("h2",{attrs:{id:"server-name"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#server-name"}},[t._v("#")]),t._v(" server_name")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("确切的 server_name 匹配")])]),t._v(" "),v("li",[v("p",[t._v("以 * 通配符开始的最长字符串")])]),t._v(" "),v("li",[v("p",[t._v("以 * 通配符结束的最长字符串")]),t._v(" "),v("p",[t._v("注意：通配符名字只可以在名字的起始处或结尾处包含一个星号，并且星号与其他字符之间用点分隔。所以，"),v("code",[t._v("www.*.example.org")]),t._v(" 和 "),v("code",[t._v("w*.example.org")]),t._v(" 都是非法的。")]),t._v(" "),v("p",[t._v('有一种形如 ".example.org" 的特殊通配符，它可以既匹配确切的名字 "example.org"，又可以匹配一般的通配符名字 "*.example.org"。')])]),t._v(" "),v("li",[v("p",[t._v("匹配正则表达式")]),t._v(" "),v("p",[t._v("为了使用正则表达式，虚拟主机名必须以 "),v("code",[t._v("波浪线“~”")]),t._v(" 起始否则该名字会被认为是个确切的名字。")]),t._v(" "),v("p",[v("code",[t._v("~^([^.]+)\\.example\\.com")])]),t._v(" "),v("p",[v("code",[t._v("*.example.com")])])])]),t._v(" "),v("h2",{attrs:{id:"location"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[t._v("#")]),t._v(" location")]),t._v(" "),v("ul",[v("li",[t._v("匹配 URI 类型，有四种参数可选，当然也可以不带参数。")]),t._v(" "),v("li",[t._v("命名 location，用 @ 来标识，类似于定义 goto 语句块。")])]),t._v(" "),v("div",{staticClass:"language-nginx extra-class"},[v("pre",{pre:!0,attrs:{class:"language-nginx"}},[v("code",[v("span",{pre:!0,attrs:{class:"token directive"}},[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" [ = | ~ | ~* | ^~ ] /URI")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" … "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token directive"}},[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" @/name/")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" … "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("符号")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[v("code",[t._v("空")])])]),t._v(" "),v("td",[t._v("location 后没有参数直接跟着 "),v("strong",[t._v("标准 URI")]),t._v("，表示前缀匹配，代表跟请求中的 URI 从头开始匹配。")])]),t._v(" "),v("tr",[v("td",[v("strong",[v("code",[t._v("=")])])]),t._v(" "),v("td",[t._v("用于"),v("strong",[t._v("标准 URI")]),t._v(" 前，要求请求字符串与其精准匹配，成功则立即处理，nginx 停止搜索其他匹配。")])]),t._v(" "),v("tr",[v("td",[v("strong",[v("code",[t._v("^~")])])]),t._v(" "),v("td",[t._v("用于"),v("strong",[t._v("标准 URI")]),t._v(" 前，并要求一旦匹配到就会立即处理，不再去匹配其他的那些个正则 URI，一般用来匹配目录。")])]),t._v(" "),v("tr",[v("td",[v("strong",[v("code",[t._v("~")])])]),t._v(" "),v("td",[t._v("用于"),v("strong",[t._v("正则 URI")]),t._v(" 前，表示 URI 包含正则表达式， "),v("strong",[t._v("区分")]),t._v("大小写。")])]),t._v(" "),v("tr",[v("td",[v("strong",[v("code",[t._v("~*")])])]),t._v(" "),v("td",[t._v("用于"),v("strong",[t._v("正则 URI")]),t._v(" 前， 表示 URI 包含正则表达式， "),v("strong",[t._v("不区分")]),t._v("大小写。")])]),t._v(" "),v("tr",[v("td",[v("strong",[v("code",[t._v("@")])])]),t._v(" "),v("td",[t._v("@ 定义一个命名的 location，@ 定义的 locaiton 名字一般用在内部定向，例如 error_page, try_files 命令中。它的功能类似于编程中的 goto。")])])])]),t._v(" "),v("p",[t._v("多个 location 配置的情况下匹配顺序为：")]),t._v(" "),v("ul",[v("li",[t._v("首先匹配 =")]),t._v(" "),v("li",[t._v("其次匹配 ^~")]),t._v(" "),v("li",[t._v("其次是按文件中顺序的正则匹配")]),t._v(" "),v("li",[t._v("最后是交给 /")]),t._v(" "),v("li",[t._v("当有匹配成功时候，停止匹配，按当前匹配规则处理请求")])])])}),[],!1,null,null,null);v.default=o.exports}}]);