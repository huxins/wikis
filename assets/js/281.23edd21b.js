(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{559:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[t._v("#")]),t._v(" 分支")]),t._v(" "),s("h2",{attrs:{id:"git-branch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-branch"}},[t._v("#")]),t._v(" git branch")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch dev\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" dev\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置dev和origin/dev的链接")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --set-upstream-to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("origin/dev dev\n")])])]),s("h2",{attrs:{id:"git-checkout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-checkout"}},[t._v("#")]),t._v(" git checkout")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout dev\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建并切换分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" dev\n")])])]),s("h2",{attrs:{id:"git-switch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-switch"}},[t._v("#")]),t._v(" git switch")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" switch master\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建并切换分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" switch "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" dev\n")])])]),s("h2",{attrs:{id:"git-merge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-merge"}},[t._v("#")]),t._v(" git merge")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并指定分支到当前分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge dev\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 禁用Fast forward")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge --no-ff "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"merge with no-ff"')]),t._v(" dev\n")])])]),s("h2",{attrs:{id:"git-stash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-stash"}},[t._v("#")]),t._v(" git stash")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保存工作现场")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash list\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 恢复")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply stash@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash drop\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 恢复且删除")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop\n")])])]),s("h2",{attrs:{id:"git-cherry-pick"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-cherry-pick"}},[t._v("#")]),t._v(" git cherry-pick")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 复制一个特定的提交到当前分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cherry-pick 4c805e2\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);