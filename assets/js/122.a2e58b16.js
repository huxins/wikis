(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{402:function(a,t,e){"use strict";e.r(t);var s=e(14),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"wireguard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wireguard"}},[a._v("#")]),a._v(" wireguard")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/atrandys/wireguard/tree/master",target:"_blank",rel:"noopener noreferrer"}},[a._v("WireGuard 安装脚本"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/pirate/wireguard-docs",target:"_blank",rel:"noopener noreferrer"}},[a._v("wireguard-docs"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.v2ex.com/t/687449",target:"_blank",rel:"noopener noreferrer"}},[a._v("只有 4000 行代码的 WireGuard 不权威指南：理论篇"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.v2ex.com/t/624344",target:"_blank",rel:"noopener noreferrer"}},[a._v("OpenWRT 搭建 WireGuard 服务器"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"openwrt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#openwrt"}},[a._v("#")]),a._v(" OpenWrt")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("opkg update\nopkg "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" kmod-wireguard luci-app-wireguard luci-proto-wireguard wireguard wireguard-tools\n")])])]),t("p",[a._v("生成密钥")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" /etc/wireguard\nwg genkey "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tee")]),a._v(" server-privatekey "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" wg pubkey "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" server-publickey\nwg genkey "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tee")]),a._v(" client0-privatekey "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" wg pubkey "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" client0-publickey\n")])])]),t("p",[a._v("配置文件")]),a._v(" "),t("div",{staticClass:"language-ini extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token section"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[a._v("Interface")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("PrivateKey")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("6CJpj1CE2kqmfhJWu9UlzvCKqfm6g9yP8xCM+ggHCU4=")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ListenPort = 51820")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# DNS = 8.8.8.8")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# BlockDNS = true")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("Address")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("192.168.9.2/24")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# MTU = 1420")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token section"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[a._v("Peer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("PublicKey")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("EI0o2k+BKTPoVP6e0hbJQSgn3gerwntlsebxLXt1Q3w=")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("PresharedKey")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("Ys1gDMulGlZAfW6HVWru5hpxmcQ3BHtWcwYV/pXeW3k=")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("AllowedIPs")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("192.168.9.0/24, 192.168.234.0/24")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("Endpoint")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("ddns.example.com:51820")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("PersistentKeepalive")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("25")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# AllowMulticast = false")]),a._v("\n")])])]),t("p",[a._v("防火墙")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("iptables "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" FORWARD "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" wg "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\niptables "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" nat "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" POSTROUTING "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" br-lan "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" MASQUERADE\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);