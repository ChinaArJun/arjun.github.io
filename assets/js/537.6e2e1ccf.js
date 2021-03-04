(window.webpackJsonp=window.webpackJsonp||[]).push([[537],{980:function(e,s,t){"use strict";t.r(s);var a=t(44),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("先来介绍这三个命令行工具的作用:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("kubeadm")]),e._v(": 用以构建一个 k8s 集群的官方工具")]),e._v(" "),t("li",[t("code",[e._v("kubelet")]),e._v(": 工作在集群的每个节点，负责容器的一些行为如启动")]),e._v(" "),t("li",[t("code",[e._v("kubectl")]),e._v(": 用以控制集群的客户端工具")])]),e._v(" "),t("p",[t("strong",[e._v("在 k8s 的 master 与 node 节点均需要安装 "),t("code",[e._v("kubeadm")])])]),e._v(" "),t("p",[e._v("以下使用 "),t("a",{attrs:{href:"https://opsx.alibaba.com/mirror",target:"_blank",rel:"noopener noreferrer"}},[e._v("阿里源"),t("OutboundLink")],1),e._v(" 来安装 "),t("code",[e._v("kubeadm")])]),e._v(" "),t("blockquote",[t("p",[e._v("可能会有索引gpg检查失败的情况, 这时请用 yum install -y --nogpgcheck kubelet kubeadm kubectl 安装")])]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 安装 kubernetes.repo 的源，这里使用阿里云的源")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v("EOF "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /etc/yum.repos.d/kubernetes.repo\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("kubernetes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Kubernetes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("enabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("repo_gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 禁掉 SELinux")]),e._v("\n$ setenforce "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\nsetenforce: SELinux is disabled\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sed")]),e._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'s/^SELINUX=enforcing$/SELINUX=permissive/'")]),e._v(" /etc/selinux/config\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 安装关键软件")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 如果 gpg 校验失败，添加参数：yum install --nogpgcheck")]),e._v("\n$ yum "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y kubelet kubeadm kubectl --disableexcludes"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("kubernetes\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nComplete"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 开启服务")]),e._v("\n$ systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" kubelet "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" systemctl start kubelet\nCreated symlink from /etc/systemd/system/multi-user.target.wants/kubelet.service to /usr/lib/systemd/system/kubelet.service\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查看 kubelet 服务的状态")]),e._v("\n$ systemctl status kubelet\n")])])]),t("p",[e._v("在 centos 中，你还需要设置 "),t("code",[e._v("net.bridge.bridge-nf-call-iptables")]),e._v(" 为 1")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 更改内核配置")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v("EOF "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /etc/sysctl.d/k8s.conf\nnet.bridge.bridge-nf-call-ip6tables "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nnet.bridge.bridge-nf-call-iptables "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nEOF\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查看更改是否生效")]),e._v("\n$ sysctl --system "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" tables\n")])])]),t("p",[e._v("如果设置失败，查看你是否加载了 "),t("code",[e._v("br-netfiler")]),e._v(" 的内核模块。")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查看是否加载模块")]),e._v("\n$ lsmod "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" netf\nbr_netfilter           "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("22256")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\nbridge                "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("151336")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" br_netfilter\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 如果没有加载，则手动加载改模块")]),e._v("\n$ modprobe br_netfilter\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);