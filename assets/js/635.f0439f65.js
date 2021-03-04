(window.webpackJsonp=window.webpackJsonp||[]).push([[635],{1085:function(s,a,t){"use strict";t.r(a);var e=t(44),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"搭建集群内部-dns-服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建集群内部-dns-服务器"}},[s._v("#")]),s._v(" 搭建集群内部 DNS 服务器")]),s._v(" "),t("p",[s._v("当我们使用 "),t("code",[s._v("traefik")]),s._v(" 反向代理和自动服务发现后，我们对集群内部的服务分为两类")]),s._v(" "),t("ol",[t("li",[s._v("公有服务。如我的博客，网站，以及为它们提供服务的 API。我们可以通过公有的域名去映射服务使得外网能够访问，如通过我自己的域名 "),t("code",[s._v("blog.zhequtao.com")]),s._v(" 与 "),t("code",[s._v("xiange.tech")]),s._v("。")]),s._v(" "),t("li",[s._v("私有服务。如 "),t("code",[s._v("gitlab")]),s._v("，"),t("code",[s._v("traefik Dashboard")]),s._v("，"),t("code",[s._v("redis")]),s._v("，"),t("code",[s._v("postgres")]),s._v(" 以及自己实现的不公开的私有服务。我们可以通过自建 DNS 服务器，来对这些域名进行访问。如 "),t("code",[s._v("*.shanyue.local")]),s._v(" 做 "),t("code",[s._v("A记录")]),s._v(" 来映射到内部集群的网关入口 (当然也要做白名单，BasicAuth，禁端口号等做安全措施)")])]),s._v(" "),t("p",[s._v("我们先来看一看 "),t("code",[s._v("DNS Lookup")]),s._v(" 的流程")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://www.tcpipguide.com/free/diagrams/dnsresolution.png",alt:"dns lookup"}})]),s._v(" "),t("p",[s._v("而当有了 "),t("code",[s._v("dnsmasq")]),s._v(" 后，请求私有服务会先去 "),t("code",[s._v("dnsmasq")]),s._v(" 解析 IP 地址。而请求互联网，如百度，则会由 "),t("code",[s._v("dnsmasq")]),s._v(" 转发至上游 DNS 服务器进行解析。")]),s._v(" "),t("h2",{attrs:{id:"dnsmasq-部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dnsmasq-部署"}},[s._v("#")]),s._v(" dnsmasq 部署")]),s._v(" "),t("p",[t("code",[s._v("dnsmasq")]),s._v(" 部署自然也是使用 "),t("code",[s._v("docker compose")]),s._v("，配置文件如下")]),s._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dns")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" jpillora/dnsmasq\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"53:53/udp"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./dnsmasq.conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/dnsmasq.conf\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./resolv.conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/resolv.conf\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用已存在的 traefik 的 network")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("default")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("external")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" traefik_default\n")])])]),t("p",[s._v("其中自然也是与 "),t("code",[s._v("traefik")]),s._v(" 使用同一网络，挂载两个文件，关于文件配置如下所示")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("dnsmasq.conf")]),s._v(": 关于 "),t("code",[s._v("dnsmasq")]),s._v(" 的配置文件，可以配置关于内部集群的域名映射规则")]),s._v(" "),t("li",[t("code",[s._v("resolv.conf")]),s._v(": 关于上游DNS服务器的配置")])]),s._v(" "),t("h2",{attrs:{id:"dnsmasq-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dnsmasq-配置"}},[s._v("#")]),s._v(" dnsmasq 配置")]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v("dnsmasq")]),s._v(" 中需要配置 "),t("code",[s._v("*.shanyue.local")]),s._v(" 映射到内部集群，"),t("code",[s._v("./dnsmasq.conf")]),s._v(" 配置文件如下所示。"),t("code",[s._v("172.18.0.1")]),s._v(" 是 "),t("code",[s._v("traefik")]),s._v(" 网络入口，详情参照我的文章 "),t("a",{attrs:{href:"https://blog.zhequtao.com/op/traefik.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("traefik 简易介绍"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-conf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("log-queries\nlog-dhcp\n\n# 配置域名映射\naddress=/docker.localhost/172.18.0.1\naddress=/shanyue.local/172.18.0.1\n")])])]),t("p",[s._v("当访问 "),t("code",[s._v("www.baidu.com")]),s._v(" 还是要通过公共的 DNS 服务的，如谷歌的 "),t("code",[s._v("8.8.8.8")]),s._v("，这里使用阿里云默认的 "),t("code",[s._v("nameserver")]),s._v("。"),t("code",[s._v("./resolv.conf")]),s._v(" 配置文件如下所示")]),s._v(" "),t("div",{staticClass:"language-conf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("options timeout:2 attempts:3 rotate single-request-reopen\nnameserver 100.100.2.136\nnameserver 100.100.2.138\n")])])]),t("p",[s._v("由于在服务器中使用 "),t("code",[s._v("0.0.0.0:53")]),s._v(" 作为 DNS 服务器，此时也需要更改服务器内部的 "),t("code",[s._v("/etc/resolv.conf")]),s._v("，修改如下")]),s._v(" "),t("div",{staticClass:"language-conf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("nameserver 127.0.0.1\n")])])]),t("p",[s._v("在本地局域网中，可以使用该服务器的 IP 地址作为 DNS 服务器。可以使用 "),t("code",[s._v("openvpn")]),s._v(" 来连接本地环境与服务器集群。详情参考 "),t("a",{attrs:{href:"https://blog.zhequtao.com/op/openvpn.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用 openvpn 与集群内部服务通信"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"dns-lookup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns-lookup"}},[s._v("#")]),s._v(" DNS lookup")]),s._v(" "),t("p",[s._v("此时使用 "),t("code",[s._v("host")]),s._v(" 或 "),t("code",[s._v("dig")]),s._v(" 对内部服务进行测试，均能返回正确的 IP 地址")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" whoami.docker.localhost\nwhoami.docker.localhost has address "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.18")]),s._v(".0.1\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dig")]),s._v(" whoami.docker.localhost\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.18")]),s._v(".0.1\n")])])]),t("p",[s._v("此时，"),t("code",[s._v("dnsmasq")]),s._v(" 解析的日志显示如下")]),s._v(" "),t("div",{staticClass:"language-txt extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("dnsmasq: query[A] whoami.docker.localhost from 172.18.0.1\ndnsmasq: config whoami.docker.localhost is 172.18.0.1\n")])])]),t("p",[s._v("再测试下 "),t("code",[s._v("www.baidu.com")]),s._v("，测试外部域名是否能够正常解析")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dig")]),s._v(" www.baidu.com +short\nwww.a.shifen.com.\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("220.181")]),s._v(".38.149\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("220.181")]),s._v(".38.150\n")])])]),t("p",[s._v("正常工作，"),t("code",[s._v("dnsmasq")]),s._v(" 日志如下")]),s._v(" "),t("div",{staticClass:"language-txt extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("dnsmasq: query[A] www.baidu.com from 172.18.0.1\ndnsmasq: forwarded www.baidu.com to 100.100.2.136\ndnsmasq: forwarded www.baidu.com to 100.100.2.138\ndnsmasq: reply www.baidu.com is <CNAME>\ndnsmasq: reply www.a.shifen.com is 220.181.38.149\ndnsmasq: reply www.a.shifen.com is 220.181.38.150\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);