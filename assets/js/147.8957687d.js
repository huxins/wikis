(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{429:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[t._v("#")]),t._v(" 进程")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看指定端口的占用进程")]),t._v("\nnetstat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("aon "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" findstr "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1099"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看PID对应的进程")]),t._v("\ntasklist "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" findstr "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1724"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 结束该进程")]),t._v("\ntaskkill "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("f "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("t "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("im nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);