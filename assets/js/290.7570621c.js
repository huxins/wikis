(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{569:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.nginx.com/resources/wiki/start/topics/examples/initscripts/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NGINX Init Scripts"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"centos-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-7"}},[t._v("#")]),t._v(" CentOS 7")]),t._v(" "),a("h3",{attrs:{id:"build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[t._v("#")]),t._v(" Build")]),t._v(" "),a("h4",{attrs:{id:"network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network"}},[t._v("#")]),t._v(" network")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖项")]),t._v("\n$ yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pcre pcre-devel zlib zlib-devel openssl openssl-devel "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加用户")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useradd")]),t._v(" www "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" /sbin/nologin "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-M")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载编译")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://nginx.org/download/nginx-1.19.9.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-zxvf")]),t._v(" nginx-1.19.9.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" nginx-1.19.9\n$ ./configure "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("www "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--group")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("www "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--prefix")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/nginx-1.19.9 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --with-http_stub_status_module "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --with-http_ssl_module\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" /usr/local/nginx-1.19.9 /usr/local/nginx\n")])])]),a("h4",{attrs:{id:"local"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local"}},[t._v("#")]),t._v(" local")]),t._v(" "),a("p",[a("code",[t._v("nginx")]),t._v(" 必要的组件包："),a("a",{attrs:{href:"https://www.zlib.net/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("zlib")]),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://sourceforge.net/projects/pcre/files/pcre/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("pcre")]),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/openssl/openssl",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("openssl")]),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖项")]),t._v("\n$ yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gcc gcc-c++ "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载组件包")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://www.zlib.net/zlib-1.2.11.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://nchc.dl.sourceforge.net/project/pcre/pcre/8.41/pcre-8.41.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://codeload.github.com/openssl/openssl/tar.gz/OpenSSL_1_0_2l "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-O")]),t._v(" openssl-1.0.2l.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://nginx.org/download/nginx-1.12.2.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-zxvf")]),t._v(" zlib-1.2.11.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-zxvf")]),t._v(" pcre-8.41.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-zxvf")]),t._v(" openssl-1.0.2l.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-zxvf")]),t._v(" nginx-1.12.2.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" openssl-OpenSSL_1_0_2l openssl-1.0.2l\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" nginx-1.12.2\n$ ./configure "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--prefix")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/nginx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --with-http_ssl_module "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --with-http_flv_module "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --with-http_stub_status_module "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --with-http_gzip_static_module "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --with-pcre"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/pcre-8.41 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --with-zlib"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/zlib-1.2.11 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --with-openssl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/openssl-1.0.2l\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("h2",{attrs:{id:"debian"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debian"}},[t._v("#")]),t._v(" Debian")]),t._v(" "),a("h3",{attrs:{id:"build-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-2"}},[t._v("#")]),t._v(" Build")]),t._v(" "),a("h4",{attrs:{id:"network-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network-2"}},[t._v("#")]),t._v(" network")]),t._v(" "),a("p",[t._v("修改 nginx-1.11.3/objs/Makefile，找到 -Werror 并去掉，重新 make 即可。\n-Werror 的作用是它要求 GCC 将所有的警告当成错误进行处理，所以导致错误输出，不能进行下一步。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" build-essential libtool "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" openssl libssl-dev libpcre3 libpcre3-dev zlib1g-dev "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://nginx.org/download/nginx-1.11.3.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-zxvf")]),t._v(" nginx-1.11.3.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" nginx-1.11.3\n$ ./configure\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("h2",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),a("ol",[a("li",[t._v("下载 "),a("a",{attrs:{href:"https://github.com/winsw/winsw/releases/download/v2.1.2/WinSW.NET4.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("winsw"),a("OutboundLink")],1),t._v(" 改文件名为 nginxservice.exe")]),t._v(" "),a("li",[t._v("新建 nginxservice.xml")]),t._v(" "),a("li",[t._v("nginxservice.exe install")])]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("logpath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("logs"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("logpath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("logmode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("roll"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("logmode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("depend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("executable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("nginx.exe"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("executable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("stopexecutable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("nginx.exe -s stop"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("stopexecutable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);