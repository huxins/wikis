(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{415:function(s,t,a){"use strict";a.r(t);var r=a(14),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[s._v("#")]),s._v(" Install")]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("DiskGenius")]),s._v(" 删除U盘所有分区")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("UltraISO")]),s._v(" 打开 PVE 镜像，启动写入硬盘映像 (写入方式 "),t("code",[s._v("RAW")]),s._v(" )")]),s._v(" "),t("h2",{attrs:{id:"镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像"}},[s._v("#")]),s._v(" 镜像")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Debian")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/ftp.debian.org/mirror.sjtu.edu.cn/g'")]),s._v(" /etc/apt/sources.list\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/security.debian.org/mirror.sjtu.edu.cn\\/debian-security/g'")]),s._v(" /etc/apt/sources.list\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PVE")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /etc/apt/sources.list.d/pve-enterprise.list\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb https://mirrors.tuna.tsinghua.edu.cn/proxmox/debian buster pve-no-subscription"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/apt/sources.list.d/pve-no-subscription.list\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# LXC")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"download.proxmox.com"')]),s._v(" /usr/share/perl5/PVE/*\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i.bak")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s#http://download.proxmox.com/images#https://mirrors.ustc.edu.cn/proxmox/images#g"')]),s._v(" /usr/share/perl5/PVE/APLInfo.pm\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);