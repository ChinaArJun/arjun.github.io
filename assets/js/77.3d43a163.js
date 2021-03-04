(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{515:function(t,s,n){"use strict";n.r(s);var a=n(44),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("img",{attrs:{src:"assets/1542507931357.png",alt:"1542507931357"}})]),t._v(" "),n("h1",{attrs:{id:"微服务（microservices）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#微服务（microservices）"}},[t._v("#")]),t._v(" 微服务（microservices）")]),t._v(" "),n("p",[t._v("​\t近几年,微服这个词闯入了我们的视线范围。在百度与谷歌中随便搜一搜也有几千万条的结果。那么，什么是微服务呢？微服务的概念是怎么产生的呢？\n我们就来了解一下Go语言与微服务的千丝万缕与来龙去脉。")]),t._v(" "),n("h1",{attrs:{id:"项目展示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目展示"}},[t._v("#")]),t._v(" 项目展示")]),t._v(" "),n("p",[t._v("机器信息")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("机器")]),t._v(" "),n("th",[t._v("主机一")]),t._v(" "),n("th",[t._v("主机二")]),t._v(" "),n("th",[t._v("主机三")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("ip")]),t._v(" "),n("td",[t._v("192.168.110.155")]),t._v(" "),n("td",[t._v("192.168.110.169")]),t._v(" "),n("td",[t._v("192.168.110.157")])]),t._v(" "),n("tr",[n("td",[t._v("web服务")]),t._v(" "),n("td",[t._v("开启")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("地区服务")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("开启")]),t._v(" "),n("td",[t._v("开启")])]),t._v(" "),n("tr",[n("td",[t._v("验证码服务")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("开启")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("搜索服务")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("开启")])])])]),t._v(" "),n("p",[t._v("服务发现启动命令")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#主机1")]),t._v("\n$ consul agent -server -bootstrap-expect "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" -data-dir /tmp/consul -node"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("n1 -bind"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.155 -ui  -config-dir /etc/consul.d -rejoin -join "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.155 -client "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#主机2")]),t._v("\n$ consul agent -server -bootstrap-expect "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" -data-dir /tmp/consul -node"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("n2 -bind"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.169 -ui  -rejoin -join "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.155\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#主机3")]),t._v("\n$ consul agent  -data-dir /tmp/consul -node"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("n3 -bind"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.157 -config-dir /etc/consul.d -rejoin -join "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.155\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#打开文件文件夹不存在")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /etc/consul.d\n")])])]),n("p",[t._v("在主机1或主机2打开 127.0.0.1可以查看到服务只有consul2个")]),t._v(" "),n("p",[n("img",{attrs:{src:"assets/1548385080493.png",alt:"1548385080493"}})]),t._v(" "),n("p",[t._v("结点有三个分别是n1-n3")]),t._v(" "),n("p",[n("img",{attrs:{src:"assets/1548385098599.png",alt:"1548385098599"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);