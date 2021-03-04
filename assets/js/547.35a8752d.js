(window.webpackJsonp=window.webpackJsonp||[]).push([[547],{1001:function(s,t,a){"use strict";a.r(t);var e=a(44),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("安装 "),a("code",[s._v("kubernetes")]),s._v(" 是一个技术活，其中涉及到很多在 "),a("code",[s._v("linux")]),s._v(" 上的命令行操作。在此之前，熟悉一些在 "),a("code",[s._v("centos")]),s._v(" 上的基本命令是必不可少的。")]),s._v(" "),a("p",[s._v("也可以反过来说 "),a("strong",[s._v("不了解这些命令你有可能寸步难行")]),s._v("。 以下是在安装过程中有可能会反复使用的命令")]),s._v(" "),a("h2",{attrs:{id:"yum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yum"}},[s._v("#")]),s._v(" yum")]),s._v(" "),a("p",[a("code",[s._v("yum")]),s._v(" 是在 "),a("code",[s._v("centos")]),s._v(" 下的包管理工具")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 docker")]),s._v("\n$ yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce\n$ yum list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" docker\n$ yum remove docker-ce\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 package")]),s._v("\n$ yum erase docker-ce\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除 package 的依赖")]),s._v("\n$ yum autoremove\n")])])]),a("h2",{attrs:{id:"rsync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rsync"}},[s._v("#")]),s._v(" rsync")]),s._v(" "),a("p",[a("code",[s._v("rsync")]),s._v(" 被用来与远程服务器间传送文件，与 "),a("code",[s._v("scp")]),s._v(" 类似，但 "),a("code",[s._v("rsync")]),s._v(" 可以实现增量传送")]),s._v(" "),a("p",[s._v("如需要传输k8s所需要的镜像压缩包时: 首次打包了总共5个镜像为 k8s.tar，传输到目标节点。随后发现一个镜像没有打包，于是再次打包，总共6个镜像为 k8s.tar，再次传输到目标节点。"),a("code",[s._v("rsync")]),s._v(" 可以对比文件差异而做到仅传输最后一次丢掉的镜像。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把本机的 k8s.tar 传送到 shanyue 服务器的 /root 目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -a 代表归档")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v 代表打印详细信息，这个参数很常见了 --verbose")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -h 代表打印可读性好的信息，这个参数也很常见 --human-readable")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -z 代表打包传送，减小传送体积")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -avhzP k8s.tar shanyue:/root\n")])])]),a("h2",{attrs:{id:"systemctl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#systemctl"}},[s._v("#")]),s._v(" systemctl")]),s._v(" "),a("p",[a("code",[s._v("systemctl")]),s._v(" 管理 "),a("code",[s._v("centos")]),s._v(" 中的服务")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ systemctl status docker\n")])])]),a("h2",{attrs:{id:"journalctl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#journalctl"}},[s._v("#")]),s._v(" journalctl")]),s._v(" "),a("p",[a("code",[s._v("journalctl")]),s._v(" 用以管理 "),a("code",[s._v("centos")]),s._v(" 中服务的日志。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ journalctl -xeu docker\n")])])]),a("h2",{attrs:{id:"route-ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#route-ip"}},[s._v("#")]),s._v(" route/ip")]),s._v(" "),a("p",[s._v("在设置网络时，可以使用该命令检查路由表。在搭建 k8s 集群是，可能出现 "),a("code",[s._v("connect: no route to host")]),s._v(" 类似的错误，可以使用 "),a("code",[s._v("route -n")]),s._v(" 或者 "),a("code",[s._v("ip route")]),s._v(" 进行诊断。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印路由表")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -n 代表使用数字代表 IP 地址")]),s._v("\n$ route -n\nKernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".79.253   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0         UG    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" eth0\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".0.0      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0   U     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" cni0\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".1.0      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".1.0      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0   UG    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" flannel.1\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("169.254")]),s._v(".0.0     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".0.0     U     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1002")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" eth0\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".64.0     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".240.0   U     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" eth0\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.18")]),s._v(".0.0      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".0.0     U     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" docker0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 另外，也可以通过该命令检查其路由表")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" route\n")])])]),a("h3",{attrs:{id:"iptables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iptables"}},[s._v("#")]),s._v(" iptables")]),s._v(" "),a("p",[a("code",[s._v("iptables")]),s._v(" 用以控制 IP 数据报，比如转发，丢弃与过滤")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ iptables -L\nChain INPUT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("policy ACCEPT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ntarget     prot opt "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v("               destination\n\nChain FORWARD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("policy DROP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ntarget     prot opt "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v("               destination\nDOCKER-"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("  all  --  anywhere             anywhere\nDOCKER-ISOLATION-STAGE-1  all  --  anywhere             anywhere\nACCEPT     all  --  anywhere             anywhere             ctstate RELATED,ESTABLISHED\nDOCKER     all  --  anywhere             anywhere\nACCEPT     all  --  anywhere             anywhere\nACCEPT     all  --  anywhere             anywhere\n\nChain OUTPUT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("policy ACCEPT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ntarget     prot opt "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v("               destination\n\nChain DOCKER "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" references"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ntarget     prot opt "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v("               destination\n\nChain DOCKER-ISOLATION-STAGE-1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" references"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ntarget     prot opt "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v("               destination\nDOCKER-ISOLATION-STAGE-2  all  --  anywhere             anywhere\nRETURN     all  --  anywhere             anywhere\n\nChain DOCKER-ISOLATION-STAGE-2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" references"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ntarget     prot opt "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v("               destination\nDROP       all  --  anywhere             anywhere\nRETURN     all  --  anywhere             anywhere\n\nChain DOCKER-"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" references"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ntarget     prot opt "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v("               destination\nRETURN     all  --  anywhere             anywhere\n")])])]),a("h3",{attrs:{id:"lsmod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lsmod"}},[s._v("#")]),s._v(" lsmod")]),s._v(" "),a("p",[s._v("显示已载入linux内核的模块，如以下常见的模块")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("ip_tables")])]),s._v(" "),a("li",[a("code",[s._v("overlay")])]),s._v(" "),a("li",[a("code",[s._v("bridge")])]),s._v(" "),a("li",[a("code",[s._v("br_netfilter")])])]),s._v(" "),a("h3",{attrs:{id:"modprobe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modprobe"}},[s._v("#")]),s._v(" modprobe")]),s._v(" "),a("p",[s._v("添加或删除linux内核模块")]),s._v(" "),a("h3",{attrs:{id:"sysctl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sysctl"}},[s._v("#")]),s._v(" sysctl")]),s._v(" "),a("p",[a("code",[s._v("sysctl")]),s._v(" 用以控制内核的参数")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印所有配置")]),s._v("\n$ sysctl -a\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);