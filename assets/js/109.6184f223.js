(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{391:function(a,r,t){"use strict";t.r(r);var s=t(14),e=Object(s.a)({},(function(){var a=this,r=a._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"fio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fio"}},[a._v("#")]),a._v(" fio")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://wsgzao.github.io/post/fio/",target:"_blank",rel:"noopener noreferrer"}},[a._v("使用 fio 测试磁盘 I/O 性能"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"http://www.ssdfans.com/?p=6087",target:"_blank",rel:"noopener noreferrer"}},[a._v("SSD测试第一神器——FIO"),r("OutboundLink")],1)])]),a._v(" "),r("p",[a._v("安装")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("yum "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" libaio-devel fio\n")])])]),r("p",[a._v("性能测试")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 顺序读 顺序写 随机读 随机写 混合随机读写")]),a._v("\nfio "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-loops")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-size")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("500m "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-filename")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/dev/sda "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-stonewall")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ioengine")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("libaio "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-direct")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-runtime")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("15")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("SeqRead "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-bs")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1m "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rw")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("read "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("SeqWrite "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-bs")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1m "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rw")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("write "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("512kRead "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-bs")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("512k "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rw")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randread "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("512kWrite "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-bs")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("512k "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rw")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randwrite "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4kQD32Read "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-bs")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4k "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-iodepth")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("32")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rw")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randread "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4kQD32Write "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-bs")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4k "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-iodepth")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("32")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rw")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randwrite "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4kRead "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-bs")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4k "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rw")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randread "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4kWrite "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-bs")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4k "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rw")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randwrite "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randrw "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-bs")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("16k "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rw")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randrw "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rwmixread")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("70")]),a._v("\n  \nfio "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-loops")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-size")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("500m "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-filename")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/dev/sda "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-stonewall")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ioengine")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("libaio "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-direct")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-runtime")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("15")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("SEQ1MQ8T1_Read "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-bs")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1m "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-iodepth")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rw")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("read "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("SEQ1MQ8T1_Write "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-bs")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1m "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-iodepth")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rw")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("write "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("SEQ128KQ32T1_Read "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-bs")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("128k "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-iodepth")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("32")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rw")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("read "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("SEQ128KQ32T1_Write "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-bs")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("128k "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-iodepth")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("32")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rw")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("write "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("RND4KQD32T16_Read "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-bs")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4k "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-iodepth")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("32")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-threads")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rw")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randread "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("RND4KQD32T16_Write "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-bs")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4k "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-iodepth")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("32")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-threads")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rw")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randwrite "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("RND4KQ1T1_Read "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-bs")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4k "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rw")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randread "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("RND4KQ1T1_Write "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-bs")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4k "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rw")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randwrite\n")])])])])}),[],!1,null,null,null);r.default=e.exports}}]);