(window.webpackJsonp=window.webpackJsonp||[]).push([[539],{983:function(e,s,n){"use strict";n.r(s);var t=n(44),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"安装-network-pod-flannel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-network-pod-flannel"}},[e._v("#")]),e._v(" 安装 network pod: flannel")]),e._v(" "),n("p",[e._v("网络组件用以在 pod 间进行通信，再此之前，我们会发现 coredns 组件处于 "),n("code",[e._v("Pending")]),e._v(" 状态。我们使用网络组件 "),n("code",[e._v("flannel")]),e._v(" 来确保 "),n("code",[e._v("coredns")]),e._v(" 的正常运行。")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("$ kubectl get pods --all-namespaces\nNAMESPACE     NAME                              READY   STATUS    RESTARTS   AGE\nkube-system   coredns-5644d7b6d9-8l2gv          "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("/1     Pending   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          56m\nkube-system   coredns-5644d7b6d9-l8zv5          "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("/1     Pending   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          56m\nkube-system   etcd-shanyue                      "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          55m\nkube-system   kube-apiserver-shanyue            "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          55m\nkube-system   kube-controller-manager-shanyue   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          55m\nkube-system   kube-proxy-5drlg                  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          56m\nkube-system   kube-scheduler-shanyue            "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          55m\n")])])]),n("p",[e._v("在安装网络组件要确保路是通的，使用 "),n("code",[e._v("sysctl")]),e._v(" 设置内核变量 "),n("code",[e._v("net.bridge.bridge-nf-call-iptables")]),e._v(" 为1")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("div",{staticClass:"highlight-lines"},[n("div",{staticClass:"highlighted"},[e._v(" ")]),n("br"),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("$ sysctl net.bridge.bridge-nf-call-iptables"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n\n$ kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/2140ac876ef134e0ed5af15c65e414cf26827915/Documentation/kube-flannel.yml\npodsecuritypolicy.policy/psp.flannel.unprivileged created\nclusterrole.rbac.authorization.k8s.io/flannel created\nclusterrolebinding.rbac.authorization.k8s.io/flannel created\nserviceaccount/flannel created\nconfigmap/kube-flannel-cfg created\ndaemonset.apps/kube-flannel-ds-amd64 created\ndaemonset.apps/kube-flannel-ds-arm64 created\ndaemonset.apps/kube-flannel-ds-arm created\ndaemonset.apps/kube-flannel-ds-ppc64le created\ndaemonset.apps/kube-flannel-ds-s390x created\n")])])]),n("p",[e._v("此时，再次查看集群中所有的 pod 状态，此时 "),n("code",[e._v("coredn")]),e._v(" 变为正常状态，且多了 "),n("code",[e._v("kube-flannel-ds-amd64")]),e._v(" 这个 pod。")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("$ kubectl get pods --all-namespaces\nNAMESPACE     NAME                              READY   STATUS    RESTARTS   AGE\nkube-system   coredns-5644d7b6d9-8l2gv          "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          136m\nkube-system   coredns-5644d7b6d9-l8zv5          "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          136m\nkube-system   etcd-shanyue                      "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          136m\nkube-system   kube-apiserver-shanyue            "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          135m\nkube-system   kube-controller-manager-shanyue   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          136m\nkube-system   kube-flannel-ds-amd64-pmlnw       "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          9m23s\nkube-system   kube-proxy-5drlg                  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          136m\nkube-system   kube-scheduler-shanyue            "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          136m\n")])])]),n("h2",{attrs:{id:"添加-worker-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加-worker-node"}},[e._v("#")]),e._v(" 添加 worker node")]),e._v(" "),n("p",[e._v("在添加 worker node 时，需要在子节点也进行 "),n("code",[e._v("docker")]),e._v(" 以及 "),n("code",[e._v("kubeadm")]),e._v(" 的安装，按照以上章节步骤进行安装。")]),e._v(" "),n("p",[e._v("安装之后根据以上关于搭建主节点章节的输出指示，使用 "),n("code",[e._v("kubeadm join")]),e._v(" 加入集群之中:")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("$ kubeadm "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("join")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("172.17")]),e._v(".68.39:6443 --token qq8hbl.4utma949mu0p47v4 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --discovery-token-ca-cert-hash sha256:cce6cd7ec86cf4cd65215bea554f98c786783720b19262533cd98656ac6eb15e\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("preflight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Running pre-flight checks\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("WARNING Service-Docker"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(": docker "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v(" is not enabled, please run "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'systemctl enable docker.service'")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("WARNING Service-Kubelet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(": kubelet "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v(" is not enabled, please run "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'systemctl enable kubelet.service'")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("preflight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Reading configuration from the cluster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("preflight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" FYI: You can "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("look")]),e._v(" at this config "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" with "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'kubectl -n kube-system get cm kubeadm-config -oyaml'")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("kubelet-start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Downloading configuration "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" the kubelet from the "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"kubelet-config-1.16"')]),e._v(" ConfigMap "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" the kube-system namespace\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("kubelet-start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Writing kubelet configuration to "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/var/lib/kubelet/config.yaml"')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("kubelet-start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Writing kubelet environment "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" with flags to "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/var/lib/kubelet/kubeadm-flags.env"')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("kubelet-start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Activating the kubelet "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("kubelet-start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Waiting "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" the kubelet to perform the TLS Bootstrap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n\nThis node has joined the cluster:\n* Certificate signing request was sent to apiserver and a response was received.\n* The Kubelet was informed of the new secure connection details.\n\nRun "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'kubectl get nodes'")]),e._v(" on the control-plane to see this node "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("join")]),e._v(" the cluster.\n")])])]),n("p",[n("code",[e._v("kubeadm join")]),e._v(" 有两个关键的参数: "),n("code",[e._v("token")]),e._v(" 与 "),n("code",[e._v("hash")]),e._v("。如果你已经丢失了新建 master node 时的输出 "),n("code",[e._v("kubeadm join")]),e._v(" 信息怎么办？此时可以通过以下命令来获取")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 以下操作在 master node")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# kubeadm join <control-plane-host>:<control-plane-port> --token <token> --discovery-token-ca-cert-hash sha256:<hash>")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 获取 token")]),e._v("\n$ kubectl token list\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 获取 hash")]),e._v("\n$ openssl x509 -pubkey -in /etc/kubernetes/pki/ca.crt "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" openssl rsa -pubin -outform der "),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("2")]),e._v(">")]),e._v("/dev/null "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" openssl dgst -sha256 -hex "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sed")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'s/^.* //'")]),e._v("\n")])])]),n("p",[e._v("安装完之后，再次打印节点信息")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("$ kubectl get nodes\nNAME       STATUS   ROLES    AGE   VERSION\nshanyue    Ready    master   17m   v1.16.0\nshuifeng   Ready    "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("   15m   v1.16.0\n\n$ kubectl get pods --all-namespaces\nNAMESPACE     NAME                              READY   STATUS    RESTARTS   AGE\nkube-system   coredns-5644d7b6d9-845lr          "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          24m\nkube-system   coredns-5644d7b6d9-k6dqm          "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          24m\nkube-system   etcd-shanyue                      "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          23m\nkube-system   kube-apiserver-shanyue            "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          23m\nkube-system   kube-controller-manager-shanyue   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          23m\nkube-system   kube-flannel-ds-amd64-tdvbs       "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          21m\nkube-system   kube-flannel-ds-amd64-vtrnh       "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          21m\nkube-system   kube-proxy-k46l2                  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          24m\nkube-system   kube-proxy-rhrrg                  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          22m\nkube-system   kube-scheduler-shanyue            "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          23m\n")])])]),n("p",[e._v("至此，一个拥有 master node 与 worker node 的 "),n("code",[e._v("kubernetes")]),e._v(" 集群就搭建完成了。")])])}),[],!1,null,null,null);s.default=a.exports}}]);