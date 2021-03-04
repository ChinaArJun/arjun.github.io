(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1093:function(t,a,s){"use strict";s.r(a);var e=s(44),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git-安装及基本配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-安装及基本配置"}},[t._v("#")]),t._v(" git 安装及基本配置")]),t._v(" "),e("p",[e("code",[t._v("git")]),t._v(" 基本上来说是开发者必备工具了，在服务器里没有 "),e("code",[t._v("git")]),t._v(" 实在不太能说得过去。何况，没有 "),e("code",[t._v("git")]),t._v(" 的话，"),e("strong",[t._v("面向github编程")]),t._v(" 从何说起，如同一个程序员断了左膀右臂。")]),t._v(" "),e("blockquote",[e("p",[t._v("你对流程熟悉后，只需要一分钟便可以操作完成")])]),t._v(" "),e("ul",[e("li",[t._v("原文地址: "),e("a",{attrs:{href:"https://github.com/ChinaArJun/op-note/blob/master/git.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("服务器 ssh key 以及 git 的配置"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("系列文章: "),e("a",{attrs:{href:"https://github.com/ChinaArJun/op-note",target:"_blank",rel:"noopener noreferrer"}},[t._v("服务器运维笔记"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ yum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n")])])]),e("p",[t._v("如果使用 "),e("code",[t._v("yum")]),t._v(" 来安装 "),e("code",[t._v("git")]),t._v(" 的话，那实在没有必要单开一篇文章了。那使用 "),e("code",[t._v("yum")]),t._v(" 的弊端在哪里？我们知道，"),e("code",[t._v("yum")]),t._v(" 为了保证它的仓库的稳定性，往往软件的版本都会很老。")]),t._v(" "),e("p",[e("strong",[t._v("而用 "),e("code",[t._v("yum")]),t._v(" 安装的 "),e("code",[t._v("git")]),t._v(" 没有语法高亮！")])]),t._v(" "),e("h2",{attrs:{id:"使用-ansible-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-ansible-安装"}},[t._v("#")]),t._v(" 使用 ansible 安装")]),t._v(" "),e("blockquote",[e("p",[t._v("如果你对 ansible 不够了解，可以参考我的文章 "),e("a",{attrs:{href:"https://mp.weixin.qq.com/s/t2fpzPJk3pCK3qBgo_SdyQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("ansible 入门指南"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("选择一个好用的 "),e("code",[t._v("Ansible Role")]),t._v(" 就可以了，我们选择 "),e("a",{attrs:{href:"https://github.com/geerlingguy/ansible-role-git",target:"_blank",rel:"noopener noreferrer"}},[t._v("geerlingguy.git"),e("OutboundLink")],1),t._v("。指定变量，从源码安装，并安装最新版本。")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dev\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("roles")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("role")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" geerlingguy.git\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vars")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从源码安装")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("git_install_from_source")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装最新版本")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("git_install_from_source_force_update")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),e("p",[t._v("使用 "),e("code",[t._v("ansible-playbook")]),t._v(" 对服务器进行批量安装")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ansible-playbook -i hosts git.yaml\n")])])]),e("h2",{attrs:{id:"安装成功"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装成功"}},[t._v("#")]),t._v(" 安装成功")]),t._v(" "),e("p",[e("code",[t._v("git version")]),t._v("，查看版本号，此时为 "),e("code",[t._v("2.16.2")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" version\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" version "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.16")]),t._v(".2\n")])])]),e("p",[t._v("再用它 "),e("code",[t._v("git status")]),t._v("，查看下语法高亮效果")]),t._v(" "),e("p",[e("img",{attrs:{src:s(447),alt:"git 高亮效果"}})]),t._v(" "),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),e("p",[t._v("全局配置邮箱及用户名，此时就可以愉快地在服务器中使用 "),e("code",[t._v("git")]),t._v(" 管理代码了")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name ChinaArJun\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email xianger94@gmail.com\n")])])]),e("h2",{attrs:{id:"面向-github-编程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面向-github-编程"}},[t._v("#")]),t._v(" 面向 github 编程")]),t._v(" "),e("p",[t._v("但是现在就可以面向 "),e("code",[t._v("github")]),t._v(" 编程了吗？不！")]),t._v(" "),e("p",[t._v("使用 "),e("code",[t._v("ssh -T")]),t._v(" 测试连通性")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" -T git@github.com\nPermission denied "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("publickey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n")])])]),e("p",[t._v("此时需要配置 "),e("code",[t._v("ssh key")]),t._v(" 来保证正确地面向github编程，可以查看下篇文章 "),e("a",{attrs:{href:"https://github.com/ChinaArJun/op-note/blob/master/ssh-setting.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ssh key 及 github 配置"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports},447:function(t,a,s){t.exports=s.p+"assets/img/git.55bfe1cd.jpg"}}]);