(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{563:function(e,t,a){"use strict";a.r(t);var n=a(14),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"pipeline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pipeline"}},[e._v("#")]),e._v(" Pipeline")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://xuanwo.io/2019/08/30/jenkins-pipeline-intro/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jenkins Pipeline 介绍"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://e.printstacktrace.blog/jenkins-pipeline-environment-variables-the-definitive-guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jenkins Pipeline Environment Variables"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"声明式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#声明式"}},[e._v("#")]),e._v(" 声明式")]),e._v(" "),t("div",{staticClass:"language-jenkinsfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("pipeline {\n    agent { docker 'maven:3.3.3' }\n    stages {\n        stage('build') {\n            steps {\n                sh 'mvn --version'\n            }\n        }\n    }\n}\n")])])]),t("h3",{attrs:{id:"agent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#agent"}},[e._v("#")]),e._v(" Agent")]),e._v(" "),t("p",[t("code",[e._v("agent")]),e._v(" 主要用于描述整个 Pipeline 或者指定的 Stage 由什么规则来选择节点执行。Pipeline 级别的 agent 可以视为 Stage 级别的默认值，如果 stage 中没有指定，将会使用与 Pipeline 一致的规则。支持 "),t("code",[e._v("any")]),e._v(" , "),t("code",[e._v("none")]),e._v(" , "),t("code",[e._v("label")]),e._v(" , "),t("code",[e._v("node")]),e._v(" , "),t("code",[e._v("docker")]),e._v("，"),t("code",[e._v("dockerfile")]),e._v(" 和 "),t("code",[e._v("kubernetes")]),e._v(" 等。")]),e._v(" "),t("ul",[t("li",[e._v("如果 Pipeline 选择了 none，那么 stage 必须要指定一个有效的 agent，否则无法执行")]),e._v(" "),t("li",[e._v("Jenkins 总是会使用 master 来执行 scan multibranch 之类的操作，即使 master 配置了 0 executors")]),e._v(" "),t("li",[e._v("agent 指定的是规则而不是具体的节点，如果 stage 各自配置了自己的 agent，需要注意是不是在同一个节点执行的")])]),e._v(" "),t("h3",{attrs:{id:"stages-stage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stages-stage"}},[e._v("#")]),e._v(" Stages && Stage")]),e._v(" "),t("p",[e._v("Stages 是 Pipeline 中最主要的组成部分，Jenkins 将会按照 Stages 中描述的顺序从上往下的执行。Stages 中可以包括任意多个 Stage，而 Stage 与 Stages 又能互相嵌套，除此以外还有 "),t("code",[e._v("parallel")]),e._v(" 指令可以让内部的 Stage 并行运行。实际上可以把 Stage 当作最小单元，Stages 指定的是顺序运行，而 parallel 指定的是并行运行。")]),e._v(" "),t("p",[e._v("除了指定 Stage 之间的顺序关系之外，我们还可以通过 "),t("code",[e._v("when")]),e._v(" 来指定某个 Stage 运行与否。")]),e._v(" "),t("p",[e._v("还能在 Stage 的级别设置 "),t("code",[e._v("environment")])]),e._v(" "),t("h3",{attrs:{id:"post"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#post"}},[e._v("#")]),e._v(" Post")]),e._v(" "),t("p",[t("code",[e._v("post")]),e._v(" 部分将会在 pipeline 的最后执行，经常用于一些测试完毕后的清理和通知操作。")]),e._v(" "),t("p",[e._v("常用的是 "),t("code",[e._v("always")]),e._v("，"),t("code",[e._v("success")]),e._v(" 和 "),t("code",[e._v("failure")]),e._v("。")])])}),[],!1,null,null,null);t.default=s.exports}}]);