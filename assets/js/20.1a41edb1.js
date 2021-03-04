(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{401:function(s,n,t){s.exports=t.p+"assets/img/nginx.eb9c02c8.png"},977:function(s,n,t){"use strict";t.r(n);var e=t(44),a=Object(e.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"使用-ingress-进行域名访问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-ingress-进行域名访问"}},[s._v("#")]),s._v(" 使用 Ingress 进行域名访问")]),s._v(" "),e("p",[s._v("在上篇文章中我们已经使用 k8s 部署了第一个应用，此时我们可以使用 "),e("code",[s._v("Ingress")]),s._v(" 使它可以在互联网上可以被访问到 (当然你要有自己的域名并且指向正确)")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.zhequtao.com/k8s/pod",target:"_blank",rel:"noopener noreferrer"}},[s._v("部署你的第一个应用: Pod，Application 与 Service"),e("OutboundLink")],1)])]),s._v(" "),e("p",[s._v("以下是官网搬用的关于 "),e("code",[s._v("Ingress")]),s._v(" 的一幅图，用以描述 Ingress 的作用。如果你对它一无所知，你可以把它理解为传统的 nginx，用以配置自己网站的域名使之能够通过外网访问。")]),s._v(" "),e("h1",{attrs:{id:"ingress-是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ingress-是什么"}},[s._v("#")]),s._v(" Ingress 是什么")]),s._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[s._v("通过前面的学习，我们已经知道 K8S 中有 Service 的概念，同时默认情况下还有 CoreDNS 完成集群内部的域名解析等工作，以此完成基础的服务注册发现能力。\n\n在第 7 节中，我们介绍了 Service 的 4 种基础类型，在前面的介绍中，我们一般都在使用 ClusterIP 或 NodePort 等方式将服务暴露在集群内或者集群外。\n\n本节，我们将介绍另一种处理服务访问的方式 Ingress。\n\nIngress 是什么\n通过 kubectl explain ingress 命令，我们来看下对 Ingress 的描述。\n\nIngress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.\n\nIngress 是一组允许外部请求进入集群的路由规则的集合。它可以给 Service 提供集群外部访问的 URL，负载均衡，SSL 终止等。\n\n直白点说，Ingress 就类似起到了智能路由的角色，外部流量到达 Ingress ，再由它按已经制定好的规则分发到不同的后端服务中去。\n\n看起来它很像我们使用的负载均衡器之类的。那你可能会问，Ingress 与 LoadBalancer 类型的 Service 的区别是什么呢？\n\nIngress 不是一种 Service 类型\n\nIngress 是 K8S 中的一种资源类型，我们可以直接通过 kubectl get ingress 的方式获取我们已有的 Ingress 资源。\n\nIngress 可以有多种控制器（实现）\n\n通过之前的介绍，我们知道 K8S 中有很多的 Controller (控制器)，而这些 Controller 已经打包进了 kube-controller-manager 中，通过 --controllers 参数控制启用哪些。\n\n但是 Ingress 的 Controller 并没有包含在其中，而且有多种选择。\n\n由社区维护（或是说官方支持的）有两个：适用于 Google Cloud 的 GLBC，当你使用 GKE 的时候，便会看到它；和 NGINX Ingress Controller 它是使用 ConfigMap 存储 NGINX 配置实现的。\n\n第三方的实现还有：基于 Envoy 的 Contour; F5 的 F5 BIG-IP Controller; 基于 HAProxy 的 haproxy-ingress; 基于 Istio 的 Control Ingress Traffic; 现代化的反向代理服务器 Traefik; 以及 Kong 支持的 Kong Ingress Controller for Kubernetes 和 NGINX 官方支持的 NGINX Ingress Controller。\n\n这里可以看到 K8S 社区和 NGINX 都有 NGINX Ingress Controller，很多人在一开始接触 Ingress 的时候便陷入了选择的苦恼中，除去前面的那些选择外，单 NGINX 的控制器就有两个，到底应该怎么选。\n\n这里提供两点建议：\n\n可能多数人使用的都是 NGINX 而非 NGINX Plus，如果你需要会话保持（Session persistence）的话，那你应该选择 K8S 社区维护的版本\n即使我们平时使用 NGINX 的时候，也常常会有动态配置的需求，如果你仍然有这样的需求，那你还是继续使用 K8S 社区维护的版本（其中内置了 Lua 支持）。\n")])])]),e("div",{staticClass:"language-txt extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("internet\n    |\n[ Ingress ]\n--|-----|--\n[ Services ]\n")])])]),e("p",[s._v("其中，"),e("code",[s._v("Ingress")]),s._v(" 包含两个组件")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("Ingress")]),s._v(": 配置转发规则，类似于 nginx 的配置文件")]),s._v(" "),e("li",[e("code",[s._v("Ingress Controller")]),s._v(": 转发，类似于 nginx，它会读取 "),e("code",[s._v("Ingress")]),s._v(" 的规则并转化为 "),e("code",[s._v("nginx")]),s._v(" 的配置文件")])]),s._v(" "),e("p",[s._v("而 "),e("code",[s._v("Ingress Controller")]),s._v(" 除了 "),e("code",[s._v("nginx")]),s._v(" 外还有 "),e("code",[s._v("haproxy")]),s._v("，"),e("code",[s._v("ingress")]),s._v(" 等等，我们选用 "),e("code",[s._v("nginx")]),s._v(" 作为 Ingress Controller")]),s._v(" "),e("h2",{attrs:{id:"使用-helm-部署-nginx-ingress-controller"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-helm-部署-nginx-ingress-controller"}},[s._v("#")]),s._v(" 使用 helm 部署 nginx Ingress Controller")]),s._v(" "),e("p",[s._v("我们使用 helm 选择官方的 "),e("a",{attrs:{href:"https://github.com/helm/charts/tree/master/stable/nginx-ingress",target:"_blank",rel:"noopener noreferrer"}},[s._v("stable/nginx-ingress"),e("OutboundLink")],1),s._v(" chart 进行部署。")]),s._v(" "),e("p",[e("code",[s._v("nginx-ingress")]),s._v(" 会配置一个 type 为 "),e("code",[s._v("LoadBalancer")]),s._v(" 的 service， "),e("strong",[s._v("因此需要配置 "),e("code",[s._v("EXTERNAL-IP")]),s._v(" 为k8s集群节点的 IP。")]),s._v(" 在这里 external-ip 会设置为 "),e("code",[s._v("[172.17.68.39, 172.17.68.40]")])]),s._v(" "),e("p",[s._v("我们可以通过 "),e("code",[s._v("kubectl get nodes")]),s._v(" 来获取 IP 地址")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取node的 INTERNAL-IP，作为 LoadBalancer 的 EXTERNAL-IP")]),s._v("\n$ kubectl get nodes -o wide\nNAME       STATUS   ROLES    AGE   VERSION   INTERNAL-IP    EXTERNAL-IP   OS-IMAGE                KERNEL-VERSION               CONTAINER-RUNTIME\nshanyue    Ready    master   13d   v1.16.0   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".68.39   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        CentOS Linux "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Core"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(".0-957.21.3.el7.x86_64   docker://18.6.2\nshuifeng   Ready    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   13d   v1.16.0   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".68.40   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        CentOS Linux "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Core"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(".0-957.21.3.el7.x86_64   docker://18.6.2\n")])])]),e("p",[s._v("在这里 external-ip 会设置为 "),e("code",[s._v("[172.17.68.39, 172.17.68.40]")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("controller.service.externalIPs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".68.39\ncontroller.service.externalIPs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".68.40\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 helm v3 部署，如果使用 helm v2 部署的话，把 release-name 使用 --name 指定")]),s._v("\n$ helm "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx-ingress stable/nginx-ingress --set "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"controller.service.externalIPs[0]=172.17.68.39,controller.service.externalIPs[1]=172.17.68.40"')]),s._v("\nNAME: nginx-ingress\nLAST DEPLOYED: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-10-18 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":21:44.115902395 +0800 CST "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("m")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("+1.904554085\nNAMESPACE: default\nSTATUS: deployed\nNOTES:\nThe nginx-ingress controller has been installed.\nIt may take a few minutes "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the LoadBalancer IP to be available.\nYou can "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("watch")]),s._v(" the status by running "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kubectl --namespace default get services -o wide -w nginx-ingress-controller'")]),s._v("\n\nAn example Ingress that makes use of the controller:\n\n  apiVersion: extensions/v1beta1\n  kind: Ingress\n  metadata:\n    annotations:\n      kubernetes.io/ingress.class: nginx\n    name: example\n    namespace: foo\n  spec:\n    rules:\n      - host: www.example.com\n        http:\n          paths:\n            - backend:\n                serviceName: exampleService\n                servicePort: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n              path: /\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This section is only required if TLS is to be enabled for the Ingress")]),s._v("\n    tls:\n        - hosts:\n            - www.example.com\n          secretName: example-tls\n\nIf TLS is enabled "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the Ingress, a Secret containing the certificate and key must also be provided:\n\n  apiVersion: v1\n  kind: Secret\n  metadata:\n    name: example-tls\n    namespace: foo\n  data:\n    tls.crt: "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("base64 encoded cert"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    tls.key: "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("base64 encoded key"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  type: kubernetes.io/tls\n")])])]),e("p",[s._v("校验 nginx-ingress 的部署情况")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ helm "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nNAME            NAMESPACE       REVISION        UPDATED                                 STATUS          CHART\nnginx-ingress   default         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("               "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-10-18 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":21:44.115902395 +0800 CST deployed        nginx-ingress-1.24.0\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 nginx-ingress 所有的 service")]),s._v("\n$ kubectl get svc -l "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx-ingress\nNAME                            TYPE           CLUSTER-IP     EXTERNAL-IP                 PORT"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                      AGE\nnginx-ingress-controller        LoadBalancer   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.101")]),s._v(".64.64   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".68.39,172.17.68.40   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":30285/TCP,443:31094/TCP   7m19s\nnginx-ingress-default-backend   ClusterIP      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.110")]),s._v(".76.15   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/TCP                       7m19s\n")])])]),e("h2",{attrs:{id:"配置-ingress-映射域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-ingress-映射域名"}},[s._v("#")]),s._v(" 配置 Ingress 映射域名")]),s._v(" "),e("p",[s._v("与已知知识关联有助于我们更好地学习新知识，以下是关于 nginx 与 ingress 部署一个博客应用的简单配置文件")]),s._v(" "),e("ol",[e("li",[s._v("外网通过域名 nginx.xiange.tech 来访问应用")]),s._v(" "),e("li",[s._v("代理服务 nginx 来做负载均衡")]),s._v(" "),e("li",[s._v("nginx 暴露出 80 端口")])]),s._v(" "),e("div",{staticClass:"language-conf extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("server {\n  listen 80\n  server_name nginx.xiange.tech\n\n  location / {\n    proxy_pass: http://nginx:80\n  }\n}\n")])])]),e("p",[s._v("使用 "),e("code",[s._v("Ingress")]),s._v(" 配置路由规则如下")]),s._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" networking.k8s.io/v1beta1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Ingress\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ingress\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rules")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx.xiange.tech\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("paths")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("backend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serviceName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("servicePort")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /\n")])])]),e("p",[s._v("我们使用 "),e("code",[s._v("Ingress")]),s._v(" 把它配置到了 "),e("code",[s._v("nginx.xiange.tech")]),s._v(" 该域名下，在公网环境下的浏览器中打开域名 "),e("code",[s._v("nginx.xiange.tech")]),s._v("，可以看到熟悉的 nginx 配置页面")]),s._v(" "),e("p",[e("img",{attrs:{src:t(401),alt:"nginx页面部署成功，通过浏览器访问"}})]),s._v(" "),e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),e("p",[s._v("部署一个应用从 "),e("code",[s._v("Deployment")]),s._v("，"),e("code",[s._v("Service")]),s._v(" 再到 "),e("code",[s._v("Ingress")]),s._v(" 的完整配置文件如下")]),s._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apps/v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deployment\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("deployment\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("matchLabels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("replicas")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("alpine\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containerPort")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Service\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("protocol")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" TCP\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("targetPort")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" networking.k8s.io/v1beta1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Ingress\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ingress\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rules")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx.xiange.tech\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("paths")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("backend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serviceName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("servicePort")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /\n")])])]),e("p",[s._v("kubectl delete -f nginx-deployment.yaml\nkubectl delete -f nginx-service.yaml\nkubectl delete -f nginx-ingress.yaml")]),s._v(" "),e("p",[s._v("kubectl apply -f nginx-deployment.yaml\nkubectl apply -f nginx-service.yaml\nkubectl apply -f nginx-ingress.yaml")])])}),[],!1,null,null,null);n.default=a.exports}}]);