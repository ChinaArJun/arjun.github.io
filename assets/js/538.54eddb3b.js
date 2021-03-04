(window.webpackJsonp=window.webpackJsonp||[]).push([[538],{981:function(s,e,t){"use strict";t.r(e);var n=t(44),a=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("主节点以前叫 "),t("code",[s._v("master node")]),s._v("，现在官网称 "),t("code",[s._v("control plane node")]),s._v("。")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("kubeadm init")]),s._v(" 就可以很简单地搭建一个主节点。但是在搭建主节点过程中，有可能由于国内网络的原因而不得成功。所以本篇文章分为两部分")]),s._v(" "),t("ul",[t("li",[s._v("如果有网络问题，如何准备离线镜像")]),s._v(" "),t("li",[s._v("搭建主节点")])]),s._v(" "),t("h2",{attrs:{id:"准备离线镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备离线镜像"}},[s._v("#")]),s._v(" 准备离线镜像")]),s._v(" "),t("blockquote",[t("p",[s._v("如果你能够访问谷歌，则直接查看下一节：搭建主节点")])]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v("master")]),s._v(" 节点执行命令，获取需要预先下载的镜像列表。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取预先下载好的镜像列表")]),s._v("\n$ kubeadm config images list\nW1002 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":48:28.382907   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14218")]),s._v(" version.go:101"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" could not fetch a Kubernetes version from the internet: unable to get URL "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://dl.k8s.io/release/stable-1.txt"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Get https://dl.k8s.io/release/stable-1.txt: net/http: request canceled "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" waiting "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" connection "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Client.Timeout exceeded "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" awaiting headers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nW1002 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":48:28.382998   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14218")]),s._v(" version.go:102"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" falling back to the "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" client version: v1.16.0\nk8s.gcr.io/kube-apiserver:v1.16.0\nk8s.gcr.io/kube-controller-manager:v1.16.0\nk8s.gcr.io/kube-scheduler:v1.16.0\nk8s.gcr.io/kube-proxy:v1.16.0\nk8s.gcr.io/pause:3.1\nk8s.gcr.io/etcd:3.3.15-0\nk8s.gcr.io/coredns:1.6.2\n")])])]),t("p",[s._v("在 "),t("code",[s._v("proxy")]),s._v(" 节点，把镜像列表存为 "),t("code",[s._v("images.txt")]),s._v("，通过 "),t("code",[s._v("docker pull")]),s._v(" 与 "),t("code",[s._v("docker save")]),s._v(" 批量下载镜像与打包。并通过 "),t("code",[s._v("rsync")]),s._v(" 在代理节点与 master/work 节点之间传送。关于 "),t("code",[s._v("rsync")]),s._v(" 的用法可以参考:")]),s._v(" "),t("blockquote",[t("p",[s._v("此时，"),t("code",[s._v("images.txt")]),s._v(" 除了关于搭建集群所需要的镜像外，还有一些因网络问题而不可达的镜像。如 dashboard/metrics-server/tiller/ingress 等。")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以下操作在 proxy 节点进行操作")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所需要的镜像")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" images.txt\nk8s.gcr.io/kube-apiserver:v1.16.0\nk8s.gcr.io/kube-controller-manager:v1.16.0\nk8s.gcr.io/kube-scheduler:v1.16.0\nk8s.gcr.io/kube-proxy:v1.16.0\nk8s.gcr.io/pause:3.1\nk8s.gcr.io/etcd:3.3.15-0\nk8s.gcr.io/coredns:1.6.2\n\nk8s.gcr.io/kubernetes-dashboard-amd64:v1.10.1\nk8s.gcr.io/metrics-server-amd64:v0.3.6\nk8s.gcr.io/defaultbackend-amd64:1.5\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在代理节点拉取所有镜像")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -I {}，指以 {} 代替 pipe 前每一行内容")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" images.txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" -I "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" docker pull "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在代理节点打包所有镜像")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" images.txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" docker save -o k8s.tar\n")])])]),t("p",[s._v("待在 proxy 节点完成镜像打包后，使用 "),t("code",[s._v("rsync")]),s._v(" 传输到 master 节点。以下操作在 master 节点进行")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以下操作在 master 节点进行")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制代理节点的打包镜像到 master 节点")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# proxy:/path/k8s.tar: 打包镜像在proxy节点的位置")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -avzhP proxy:/path/k8s.tar "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加载 k8s.tar 中所有镜像")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# load，从压缩文件中加载镜像")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -i，指定压缩文件")]),s._v("\n$ docker load -i k8s.tar\n")])])]),t("h2",{attrs:{id:"搭建主节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建主节点"}},[s._v("#")]),s._v(" 搭建主节点")]),s._v(" "),t("p",[s._v("当搭建主节点时，你需要在 "),t("code",[s._v("gcr.io")]),s._v(" 上拉取所需镜像，但 "),t("code",[s._v("gcr.io")]),s._v(" 有可能网络不通，你可以通过以下命令测试下连接性")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果有以下提示，代表连接不通")]),s._v("\n$ kubeadm config images pull\nW0905 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":04:37.519303   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11952")]),s._v(" version.go:98"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" could not fetch a Kubernetes version from the internet: unable to get URL "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://dl.k8s.io/release/stable-1.txt"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Get https://dl.k8s.io/release/stable-1.txt: net/http: request canceled "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" waiting "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" connection "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Client.Timeout exceeded "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" awaiting headers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nW0905 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":04:37.519384   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11952")]),s._v(" version.go:99"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" falling back to the "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" client version: v1.15.3\n\n")])])]),t("blockquote",[t("p",[s._v("如果你不能获取镜像的话，可以通过准备离线镜像来获取。具体参考上一小节")])]),s._v(" "),t("p",[s._v("测试成功后，使用 "),t("code",[s._v("kubeadm init")]),s._v(" 命令添加一个主节点 (control-plane node)。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("172.17.68.39")]),s._v(" 指 master 节点的IP地址，可以通过 "),t("code",[s._v("ifconfig eth0 获得")])]),s._v(" "),t("li",[t("code",[s._v("59.110.216.155")]),s._v(" 指 master 节点的公网IP")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# init: 初始化一个 master 节点，现在也叫 control plane node (控制面板节点)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --apiserver-advertise-address: 可以视作主节点的 IP 地址，这里是 172.17.68.39")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --pod-network-cidr: 当使用 pod network 时需要指定，用以 pod 间互相通信")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --apiserver-cert-extra-sans: 证书白名单，如果你使用 VPN 的话，可以不指定该参数 TODO")]),s._v("\n$ kubeadm init --apiserver-advertise-address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".68.39 --pod-network-cidr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".0.0/16 --apiserver-cert-extra-sans"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("59.110")]),s._v(".216.155\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("addons"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Applied essential addon: CoreDNS\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("addons"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Applied essential addon: kube-proxy\n\nYour Kubernetes control-plane has initialized successfully"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\nTo start using your cluster, you need to run the following as a regular user:\n\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -i /etc/kubernetes/admin.conf "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube/config\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -u"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -g"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube/config\n\nYou should now deploy a pod network to the cluster.\nRun "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kubectl apply -f [podnetwork].yaml"')]),s._v(" with one of the options listed at:\n  https://kubernetes.io/docs/concepts/cluster-administration/addons/\n\nThen you can "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" any number of worker nodes by running the following on each as root:\n\nkubeadm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".68.39:6443 --token qq8hbl.4utma949mu0p47v4 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --discovery-token-ca-cert-hash sha256:cce6cd7ec86cf4cd65215bea554f98c786783720b19262533cd98656ac6eb15e\n\n")])])]),t("p",[s._v("到这里为止，k8s 集群已经初步搭建完成。不过你会有疑问，在 "),t("code",[s._v("kubeadm init")]),s._v(" 的过程中做了什么，这都被它作为日志打印了出来")]),s._v(" "),t("p",[s._v("TODO")]),s._v(" "),t("p",[s._v("接下来你可以按照以上输出的指示做完以下命令，这将生成一个 "),t("code",[s._v("kubectl")]),s._v(" 的配置文件，以及检查集群状态")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -i /etc/kubernetes/admin.conf "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube/config\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -u"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -g"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube/config\n\n$ kubectl cluster-info\nKubernetes master is running at https://172.17.68.39:6443\nKubeDNS is running at https://172.17.68.39:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n\n$ kubectl get pods --all-namespaces\nNAMESPACE     NAME                              READY   STATUS    RESTARTS   AGE\nkube-system   coredns-5644d7b6d9-8l2gv          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/1     Pending   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          56m\nkube-system   coredns-5644d7b6d9-l8zv5          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/1     Pending   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          56m\nkube-system   etcd-shanyue                      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          55m\nkube-system   kube-apiserver-shanyue            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          55m\nkube-system   kube-controller-manager-shanyue   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          55m\nkube-system   kube-proxy-5drlg                  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          56m\nkube-system   kube-scheduler-shanyue            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          55m\n")])])]),t("p",[s._v("再往后，你也可以通过以上的输出指示添加 worker node")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ kubeadm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".68.39:6443 --token qq8hbl.4utma949mu0p47v4 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --discovery-token-ca-cert-hash sha256:cce6cd7ec86cf4cd65215bea554f98c786783720b19262533cd98656ac6eb15e\n")])])]),t("h2",{attrs:{id:"kubectl-命令自动补全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubectl-命令自动补全"}},[s._v("#")]),s._v(" kubectl 命令自动补全")]),s._v(" "),t("p",[s._v("没有自动补全的 "),t("code",[s._v("kubectl")]),s._v(" 就如同没带眼镜的近视者，可以使用，但很难受。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装自动补全插件")]),s._v("\n$ yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" bash-completion\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加 kubectl 自动补全的脚本至 /etc/bash_completion.d 目录下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl completion bash: 生成自动补全的脚本")]),s._v("\n$ kubectl completion "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/etc/bash_completion.d/kubectl\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自动补全生效")]),s._v("\n$ kubectl get n\nnamespaces                         networkpolicies.extensions         networkpolicies.networking.k8s.io  nodes\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);