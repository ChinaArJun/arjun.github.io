(window.webpackJsonp=window.webpackJsonp||[]).push([[628],{1072:function(e,t,r){"use strict";r.r(t);var o=r(44),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"当我有服务器时我做了什么-·-个人服务器运维指南"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#当我有服务器时我做了什么-·-个人服务器运维指南"}},[e._v("#")]),e._v(" 当我有服务器时我做了什么 · "),r("small",[e._v("个人服务器运维指南")])]),e._v(" "),r("p",[e._v("去年我写了一篇文章: "),r("a",{attrs:{href:"https://blog.zhequtao.com/op/when-server.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("当我有一台服务器时做了什么"),r("OutboundLink")],1),e._v("。当时为了不至于浪费我在阿里云低价优惠买的服务器，于是使用 docker 跑了一个应用，并参照我司的技术架构搭建了相关的基础设施。")]),e._v(" "),r("p",[r("strong",[e._v("现在仔细想来，这些经验也非常有益于有一台服务器却不知所措的人，于是有了本系列文章，希望能够帮助到那些服务器买来已久却在吃灰的人。")]),e._v(" 另外如果你是一个自由开发者，本系列文章或许对你环境搭建也会有些许启发。")]),e._v(" "),r("h2",{attrs:{id:"目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[e._v("#")]),e._v(" 目录")]),e._v(" "),r("ol",[r("li",[e._v("序\n"),r("ol",[r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("导读"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/when-server.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("序·当我有一台服务器时我做了什么"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/when-server-2019.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("序·当我有一台服务器时我做了什么(2019)"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("序·个人服务器应用开发架构推荐")]),e._v(" - TODO")])])]),e._v(" "),r("li",[e._v("如果你只想搭建博客\n"),r("ol",[r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/if-you-want-a-blog.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("如果你只想搭一个博客"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/deploy-fe-with-netlify.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 netlify 托管博客与持续集成"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/deploy-fe-with-alioss.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 alioss 托管博客"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/github-action-guide.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 github action 持续集成"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[e._v("服务器初始化配置\n"),r("ol",[r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/init.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("服务器快速登录配置：ssh-config"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/git.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("git 基本命令及安装"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/ssh-setting.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("服务器ssh key 及 github 配置"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/system-info.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("系统信息查看相关命令"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/vim-setting.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("vim 基本操作及配置"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/tmux-vim-setting.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("tmux 与多窗口管理"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[e._v("自动化运维\n"),r("ol",[r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/ansible-guide.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ansible 简易入门"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/ansible-problem.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ansible 必知必会"),r("OutboundLink")],1),e._v(" - TODO")])])]),e._v(" "),r("li",[e._v("了解 docker\n"),r("ol",[r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/docker.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker 简易入门"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/dockerfile-practice.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dockerfile 最佳实践"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/deploy-fe-with-docker.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("案例: 使用 docker 高效部署前端应用"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[e._v("使用 docker compose 编排容器\n"),r("ol",[r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/docker-compose-arch.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("compose 编排架构简介"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/docker-compose.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-compose 简易入门"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/traefik.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 traefik 做反向代理"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("使用 traefik 自动生成 https 的证书")]),e._v(" - TODO")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/dnsmasq.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 dnsmasq 搭建本地 DNS 服务"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/openvpn.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 openvpn 访问内部集群私有服务"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("使用 postgres 与 redis 做数据存储服务")]),e._v(" - TODO")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/deploy-sentry.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 sentry 做异常监控"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("案例：一个 Node 应用的持续集成与部署实践")]),e._v(" - TODO")])])]),e._v(" "),r("li",[e._v("使用 kubernetes 编排容器\n"),r("ol",[r("li",[r("a",{attrs:{href:"https://github.com/ChinaArJun/learn-k8s",target:"_blank",rel:"noopener noreferrer"}},[e._v("搭建一个 k8s 集群"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/learn-k8s/pod.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("部署你的第一个应用: Pod ，Deployment，Service"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/learn-k8s/ingress.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("部署你的第一个应用: Ingress"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/learn-k8s/https.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("部署你的第一个应用: https"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/learn-k8s/helm.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 Helm 作为包管理器"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/deploy-drone.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("持续集成 drone.ci 简介及部署"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/deploy-fe.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("案例：前端部署发展史"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[e._v("服务器及容器监控\n"),r("ol",[r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/linux-monitor.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("linux 各项监控指标"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/ctop.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 htop 监控服务器指标"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/ctop.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 ctop 监控容器指标"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[e._v("高频 linux 命令\n"),r("ol",[r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/linux-sed.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("sed 命令详解及示例"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/linux-awk.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("awk 命令详解及示例"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/jq.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("jq 命令详解及示例"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/iptables.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("iptables 命令详解及示例"),r("OutboundLink")],1),e._v(" - TODO")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/linux-tcpdump.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("tcpdump 命令详解及示例"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/htop.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("htop 命令详解及示例"),r("OutboundLink")],1),e._v(" - TODO")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.zhequtao.com/op/jq-sed-case.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("案例: 使用jq与sed制作掘金面试文章榜单"),r("OutboundLink")],1)])])])]),e._v(" "),r("h2",{attrs:{id:"关注我"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关注我"}},[e._v("#")]),e._v(" 关注我")]),e._v(" "),r("p",[e._v("我是阿俊")])])}),[],!1,null,null,null);t.default=n.exports}}]);