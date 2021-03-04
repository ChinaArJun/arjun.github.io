(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{777:function(n,t,e){"use strict";e.r(t);var a=e(44),r=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("从源码里可以看到："),e("code",[n._v("iface")]),n._v("包含两个字段："),e("code",[n._v("tab")]),n._v(" 是接口表指针，指向类型信息；"),e("code",[n._v("data")]),n._v(" 是数据指针，则指向具体的数据。它们分别被称为"),e("code",[n._v("动态类型")]),n._v("和"),e("code",[n._v("动态值")]),n._v("。而接口值包括"),e("code",[n._v("动态类型")]),n._v("和"),e("code",[n._v("动态值")]),n._v("。")]),n._v(" "),e("p",[n._v("【引申1】接口类型和 "),e("code",[n._v("nil")]),n._v(" 作比较")]),n._v(" "),e("p",[n._v("接口值的零值是指"),e("code",[n._v("动态类型")]),n._v("和"),e("code",[n._v("动态值")]),n._v("都为 "),e("code",[n._v("nil")]),n._v("。当仅且当这两部分的值都为 "),e("code",[n._v("nil")]),n._v(" 的情况下，这个接口值就才会被认为 "),e("code",[n._v("接口值 == nil")]),n._v("。")]),n._v(" "),e("p",[n._v("来看个例子：")]),n._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('package main\n\nimport "fmt"\n\ntype Coder interface {\n\tcode()\n}\n\ntype Gopher struct {\n\tname string\n}\n\nfunc (g Gopher) code() {\n\tfmt.Printf("%s is coding\\n", g.name)\n}\n\nfunc main() {\n\tvar c Coder\n\tfmt.Println(c == nil)\n\tfmt.Printf("c: %T, %v\\n", c, c)\n\n\tvar g *Gopher\n\tfmt.Println(g == nil)\n\n\tc = g\n\tfmt.Println(c == nil)\n\tfmt.Printf("c: %T, %v\\n", c, c)\n}\n')])])]),e("p",[n._v("输出：")]),n._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token boolean"}},[n._v("true")]),n._v("\nc: "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),n._v("nil"),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v(", "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),n._v("nil"),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token boolean"}},[n._v("true")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token boolean"}},[n._v("false")]),n._v("\nc: *main.Gopher, "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),n._v("nil"),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v("\n")])])]),e("p",[n._v("一开始，"),e("code",[n._v("c")]),n._v(" 的 动态类型和动态值都为 "),e("code",[n._v("nil")]),n._v("，"),e("code",[n._v("g")]),n._v(" 也为 "),e("code",[n._v("nil")]),n._v("，当把 "),e("code",[n._v("g")]),n._v(" 赋值给 "),e("code",[n._v("c")]),n._v(" 后，"),e("code",[n._v("c")]),n._v(" 的动态类型变成了 "),e("code",[n._v("*main.Gopher")]),n._v("，仅管 "),e("code",[n._v("c")]),n._v(" 的动态值仍为 "),e("code",[n._v("nil")]),n._v("，但是当 "),e("code",[n._v("c")]),n._v(" 和 "),e("code",[n._v("nil")]),n._v(" 作比较的时候，结果就是 "),e("code",[n._v("false")]),n._v(" 了。")]),n._v(" "),e("p",[n._v("【引申2】\n来看一个例子，看一下它的输出：")]),n._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('package main\n\nimport "fmt"\n\ntype MyError struct {}\n\nfunc (i MyError) Error() string {\n\treturn "MyError"\n}\n\nfunc main() {\n\terr := Process()\n\tfmt.Println(err)\n\n\tfmt.Println(err == nil)\n}\n\nfunc Process() error {\n\tvar err *MyError = nil\n\treturn err\n}\n')])])]),e("p",[n._v("函数运行结果：")]),n._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),n._v("nil"),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token boolean"}},[n._v("false")]),n._v("\n")])])]),e("p",[n._v("这里先定义了一个 "),e("code",[n._v("MyError")]),n._v(" 结构体，实现了 "),e("code",[n._v("Error")]),n._v(" 函数，也就实现了 "),e("code",[n._v("error")]),n._v(" 接口。"),e("code",[n._v("Process")]),n._v(" 函数返回了一个 "),e("code",[n._v("error")]),n._v(" 接口，这块隐含了类型转换。所以，虽然它的值是 "),e("code",[n._v("nil")]),n._v("，其实它的类型是 "),e("code",[n._v("*MyError")]),n._v("，最后和 "),e("code",[n._v("nil")]),n._v(" 比较的时候，结果为 "),e("code",[n._v("false")]),n._v("。")]),n._v(" "),e("p",[n._v("【引申3】如何打印出接口的动态类型和值？")]),n._v(" "),e("p",[n._v("直接看代码：")]),n._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('package main\n\nimport (\n\t"unsafe"\n\t"fmt"\n)\n\ntype iface struct {\n\titab, data uintptr\n}\n\nfunc main() {\n\tvar a interface{} = nil\n\n\tvar b interface{} = (*int)(nil)\n\n\tx := 5\n\tvar c interface{} = (*int)(&x)\n\t\n\tia := *(*iface)(unsafe.Pointer(&a))\n\tib := *(*iface)(unsafe.Pointer(&b))\n\tic := *(*iface)(unsafe.Pointer(&c))\n\n\tfmt.Println(ia, ib, ic)\n\n\tfmt.Println(*(*int)(unsafe.Pointer(ic.data)))\n}\n')])])]),e("p",[n._v("代码里直接定义了一个 "),e("code",[n._v("iface")]),n._v(" 结构体，用两个指针来描述 "),e("code",[n._v("itab")]),n._v(" 和 "),e("code",[n._v("data")]),n._v("，之后将 a, b, c 在内存中的内容强制解释成我们自定义的 "),e("code",[n._v("iface")]),n._v("。最后就可以打印出动态类型和动态值的地址。")]),n._v(" "),e("p",[n._v("运行结果如下：")]),n._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[n._v("0")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[n._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[n._v("17426912")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[n._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[n._v("17426912")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[n._v("842350714568")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[n._v("5")]),n._v("\n")])])]),e("p",[n._v("a 的动态类型和动态值的地址均为 0，也就是 nil；b 的动态类型和 c 的动态类型一致，都是 "),e("code",[n._v("*int")]),n._v("；最后，c 的动态值为 5。")]),n._v(" "),e("h1",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[n._v("#")]),n._v(" 参考资料")]),n._v(" "),e("p",[n._v("【一个包含NIL指针的接口不是NIL接口】https://i6448038.github.io/2018/07/18/golang-mistakes/")])])}),[],!1,null,null,null);t.default=r.exports}}]);