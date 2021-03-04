(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{747:function(n,e,t){"use strict";t.r(e);var a=t(44),s=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("Channel 发送和接收元素的本质是什么？")]),n._v(" "),t("blockquote",[t("p",[n._v("All transfer of value on the go channels happens with the copy of value.")])]),n._v(" "),t("p",[n._v("就是说 channel 的发送和接收操作本质上都是 “值的拷贝”，无论是从 sender goroutine 的栈到 chan buf，还是从 chan buf 到 receiver goroutine，或者是直接从 sender goroutine 到 receiver goroutine。")]),n._v(" "),t("p",[n._v("举一个例子：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('type user struct {\n\tname string\n\tage int8\n}\n\nvar u = user{name: "Ankur", age: 25}\nvar g = &u\n\nfunc modifyUser(pu *user) {\n\tfmt.Println("modifyUser Received Vaule", pu)\n\tpu.name = "Anand"\n}\n\nfunc printUser(u <-chan *user) {\n\ttime.Sleep(2 * time.Second)\n\tfmt.Println("printUser goRoutine called", <-u)\n}\n\nfunc main() {\n\tc := make(chan *user, 5)\n\tc <- g\n\tfmt.Println(g)\n\t// modify g\n\tg = &user{name: "Ankur Anand", age: 100}\n\tgo printUser(c)\n\tgo modifyUser(g)\n\ttime.Sleep(5 * time.Second)\n\tfmt.Println(g)\n}\n')])])]),t("p",[n._v("运行结果：")]),n._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("&")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("Ankur "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("25")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\nmodifyUser Received Vaule "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("&")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("Ankur Anand "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\nprintUser goRoutine called "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("&")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("Ankur "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("25")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("&")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("Anand "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])])]),t("p",[n._v("这里就是一个很好的 "),t("code",[n._v("share memory by communicating")]),n._v(" 的例子。")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/61191276-16ad1000-a6db-11e9-9729-cdea7744f002.png",alt:"output"}})]),n._v(" "),t("p",[n._v("一开始构造一个结构体 u，地址是 0x56420，图中地址上方就是它的内容。接着把 "),t("code",[n._v("&u")]),n._v(" 赋值给指针 "),t("code",[n._v("g")]),n._v("，g 的地址是 0x565bb0，它的内容就是一个地址，指向 u。")]),n._v(" "),t("p",[n._v("main 程序里，先把 g 发送到 c，根据 "),t("code",[n._v("copy value")]),n._v(" 的本质，进入到 chan buf 里的就是 "),t("code",[n._v("0x56420")]),n._v("，它是指针 g 的值（不是它指向的内容），所以打印从 channel 接收到的元素时，它就是 "),t("code",[n._v("&{Ankur 25}")]),n._v("。因此，这里并不是将指针 g “发送” 到了 channel 里，只是拷贝它的值而已。")]),n._v(" "),t("p",[n._v("再强调一次：")]),n._v(" "),t("blockquote",[t("p",[n._v("Remember all transfer of value on the go channels happens with the copy of value.")])]),n._v(" "),t("h1",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[n._v("#")]),n._v(" 参考资料")]),n._v(" "),t("p",[n._v("【深入 channel 底层】https://codeburst.io/diving-deep-into-the-golang-channels-549fd4ed21a8")])])}),[],!1,null,null,null);e.default=s.exports}}]);