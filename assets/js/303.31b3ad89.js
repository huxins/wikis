(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{580:function(e,t,s){"use strict";s.r(t);var a=s(14),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"ngx-http-rewrite-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ngx-http-rewrite-module"}},[e._v("#")]),e._v(" ngx_http_rewrite_module")]),e._v(" "),t("h2",{attrs:{id:"rewrite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rewrite"}},[e._v("#")]),e._v(" rewrite")]),e._v(" "),t("ol",[t("li",[e._v("执行 server 块的 rewrite 指令")]),e._v(" "),t("li",[e._v("执行 location 匹配")]),e._v(" "),t("li",[e._v("执行选定的 location 中的 rewrite 指令")])]),e._v(" "),t("p",[e._v("如果其中某步 URI 被重写，则重新循环执行 1-3，直到找到真实存在的文件；\n如果循环超过 "),t("code",[e._v("10")]),e._v(" 次，则返回 "),t("code",[e._v("500 Internal Server Error")]),e._v(" 错误。")]),e._v(" "),t("div",{staticClass:"language-nginx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("rewrite")]),e._v(" regex replacement [flag]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[t("strong",[t("code",[e._v("flag")])]),e._v(" 有四种参数可以选择：")]),e._v(" "),t("ol",[t("li",[t("strong",[t("code",[e._v("last")])]),e._v(" 停止处理后续 rewrite 指令集，然后对当前重写的新 URI 在 rewrite 指令集上重新查找。")]),e._v(" "),t("li",[t("strong",[t("code",[e._v("break")])]),e._v(" 停止处理后续 rewrite 指令集，并不再重新查找，但是当前 location 内剩余非 rewrite 语句和 location 外的 非rewrite 语句可以执行。")]),e._v(" "),t("li",[t("strong",[t("code",[e._v("redirect")])]),e._v(" 如果 "),t("code",[e._v("replacement")]),e._v(" 不是以 "),t("code",[e._v("http://")]),e._v(" 或 "),t("code",[e._v("https://")]),e._v(" 开始，返回 "),t("strong",[t("code",[e._v("302")]),e._v(" 临时重定向")])]),e._v(" "),t("li",[t("strong",[t("code",[e._v("permanent")])]),e._v(" 返回 "),t("strong",[t("code",[e._v("301")]),e._v(" 永久重定向")])])]),e._v(" "),t("p",[t("strong",[e._v("rewrite 后的请求参数：")])]),e._v(" "),t("p",[e._v("如果替换字符串 "),t("code",[e._v("replacement")]),e._v(" 包含新的请求参数，则在它们之后附加先前的请求参数。如果你不想要之前的参数，则在替换字符串 "),t("code",[e._v("replacement")]),e._v(" 的末尾放置一个问号，避免附加它们。")]),e._v(" "),t("div",{staticClass:"language-nginx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 由于最后加了个 ?，原来的请求参数将不会被追加到 rewrite 之后的 URI 后面")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("rewrite")]),e._v(" ^/users/(.*)$ /show?user="),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$1")]),e._v("? last")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("h2",{attrs:{id:"if"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#if"}},[e._v("#")]),e._v(" if")]),e._v(" "),t("ul",[t("li",[e._v("一个变量名；如果这个变量是空字符串或者以0开始的字符串，则为 false；")]),e._v(" "),t("li",[e._v("使用 "),t("code",[e._v("=")]),e._v(" ，"),t("code",[e._v("!=")]),e._v(" 比较的一个变量和字符串")]),e._v(" "),t("li",[e._v("使用 "),t("code",[e._v("~")]),e._v("， "),t("code",[e._v("~*")]),e._v(" 与正则表达式匹配的变量，如果这个正则表达式中包含 "),t("code",[e._v("}")]),e._v("，"),t("code",[e._v(";")]),e._v(" 则整个表达式需要用 "),t("code",[e._v('"')]),e._v(" 或 "),t("code",[e._v("'")]),e._v(" 包围")]),e._v(" "),t("li",[e._v("使用 "),t("code",[e._v("-f")]),e._v(" ，"),t("code",[e._v("!-f")]),e._v(" 检查一个文件是否存在")]),e._v(" "),t("li",[e._v("使用 "),t("code",[e._v("-d")]),e._v("， "),t("code",[e._v("!-d")]),e._v(" 检查一个目录是否存在")]),e._v(" "),t("li",[e._v("使用 "),t("code",[e._v("-e")]),e._v(" ，"),t("code",[e._v("!-e")]),e._v(" 检查一个文件、目录、符号链接是否存在")]),e._v(" "),t("li",[e._v("使用 "),t("code",[e._v("-x")]),e._v(" ，"),t("code",[e._v("!-x")]),e._v(" 检查一个文件是否可执行")])]),e._v(" "),t("div",{staticClass:"language-nginx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$is_download_file")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" ("),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$request_uri")]),e._v(" ~* "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"\\.(zip|war|html)$"')]),e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$is_download_file")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" ("),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$request_uri")]),e._v(" !~ "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"(/)$"')]),e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$is_download_file")]),e._v(" 0"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$is_download_file")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" ( "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$is_download_file")]),e._v(" = "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("00")]),e._v(" )")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("rewrite")]),e._v(" ^ http://"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$server_name")]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$request_uri/")]),e._v(" last")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);