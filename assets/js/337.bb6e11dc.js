(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{774:function(t,e,n){"use strict";n.r(e);var a=n(44),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("code",[t._v("iface")]),t._v(" 和 "),n("code",[t._v("eface")]),t._v(" 都是 Go 中描述接口的底层结构体，区别在于 "),n("code",[t._v("iface")]),t._v(" 描述的接口包含方法，而 "),n("code",[t._v("eface")]),t._v(" 则是不包含任何方法的空接口："),n("code",[t._v("interface{}")]),t._v("。")]),t._v(" "),n("p",[t._v("从源码层面看一下：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("type iface struct {\n\ttab  *itab\n\tdata unsafe.Pointer\n}\n\ntype itab struct {\n\tinter  *interfacetype\n\t_type  *_type\n\tlink   *itab\n\thash   uint32 // copy of _type.hash. Used for type switches.\n\tbad    bool   // type does not implement interface\n\tinhash bool   // has this itab been added to hash?\n\tunused [2]byte\n\tfun    [1]uintptr // variable sized\n}\n")])])]),n("p",[n("code",[t._v("iface")]),t._v(" 内部维护两个指针，"),n("code",[t._v("tab")]),t._v(" 指向一个 "),n("code",[t._v("itab")]),t._v(" 实体， 它表示接口的类型以及赋给这个接口的实体类型。"),n("code",[t._v("data")]),t._v(" 则指向接口具体的值，一般而言是一个指向堆内存的指针。")]),t._v(" "),n("p",[t._v("再来仔细看一下 "),n("code",[t._v("itab")]),t._v(" 结构体："),n("code",[t._v("_type")]),t._v(" 字段描述了实体的类型，包括内存对齐方式，大小等；"),n("code",[t._v("inter")]),t._v(" 字段则描述了接口的类型。"),n("code",[t._v("fun")]),t._v(" 字段放置和接口方法对应的具体数据类型的方法地址，实现接口调用方法的动态分派，一般在每次给接口赋值发生转换时会更新此表，或者直接拿缓存的 itab。")]),t._v(" "),n("p",[t._v("这里只会列出实体类型和接口相关的方法，实体类型的其他方法并不会出现在这里。如果你学过 C++ 的话，这里可以类比虚函数的概念。")]),t._v(" "),n("p",[t._v("另外，你可能会觉得奇怪，为什么 "),n("code",[t._v("fun")]),t._v(" 数组的大小为 1，要是接口定义了多个方法可怎么办？实际上，这里存储的是第一个方法的函数指针，如果有更多的方法，在它之后的内存空间里继续存储。从汇编角度来看，通过增加地址就能获取到这些函数指针，没什么影响。顺便提一句，这些方法是按照函数名称的字典序进行排列的。")]),t._v(" "),n("p",[t._v("再看一下 "),n("code",[t._v("interfacetype")]),t._v(" 类型，它描述的是接口的类型：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("type interfacetype struct {\n\ttyp     _type\n\tpkgpath name\n\tmhdr    []imethod\n}\n")])])]),n("p",[t._v("可以看到，它包装了 "),n("code",[t._v("_type")]),t._v(" 类型，"),n("code",[t._v("_type")]),t._v(" 实际上是描述 Go 语言中各种数据类型的结构体。我们注意到，这里还包含一个 "),n("code",[t._v("mhdr")]),t._v(" 字段，表示接口所定义的函数列表， "),n("code",[t._v("pkgpath")]),t._v(" 记录定义了接口的包名。")]),t._v(" "),n("p",[t._v("这里通过一张图来看下 "),n("code",[t._v("iface")]),t._v(" 结构体的全貌：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/56564826-82527600-65e1-11e9-956d-d98a212bc863.png",alt:"iface 结构体全景"}})]),t._v(" "),n("p",[t._v("接着来看一下 "),n("code",[t._v("eface")]),t._v(" 的源码：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("type eface struct {\n    _type *_type\n    data  unsafe.Pointer\n}\n")])])]),n("p",[t._v("相比 "),n("code",[t._v("iface")]),t._v("，"),n("code",[t._v("eface")]),t._v(" 就比较简单了。只维护了一个 "),n("code",[t._v("_type")]),t._v(" 字段，表示空接口所承载的具体的实体类型。"),n("code",[t._v("data")]),t._v(" 描述了具体的值。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/56565105-318f4d00-65e2-11e9-96bd-4b2e192791dc.png",alt:"eface 结构体全景"}})]),t._v(" "),n("p",[t._v("我们来看个例子：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('package main\n\nimport "fmt"\n\nfunc main() {\n\tx := 200\n\tvar any interface{} = x\n\tfmt.Println(any)\n\n\tg := Gopher{"Go"}\n\tvar c coder = g\n\tfmt.Println(c)\n}\n\ntype coder interface {\n\tcode()\n\tdebug()\n}\n\ntype Gopher struct {\n\tlanguage string\n}\n\nfunc (p Gopher) code() {\n\tfmt.Printf("I am coding %s language\\n", p.language)\n}\n\nfunc (p Gopher) debug() {\n\tfmt.Printf("I am debuging %s language\\n", p.language)\n}\n')])])]),n("p",[t._v("执行命令，打印出汇编语言：")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("go tool compile -S ./src/main.go\n")])])]),n("p",[t._v("可以看到，main 函数里调用了两个函数：")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("func convT2E64"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t *_type, elem unsafe.Pointer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e eface"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfunc convT2I"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tab *itab, elem unsafe.Pointer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i iface"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("上面两个函数的参数和 "),n("code",[t._v("iface")]),t._v(" 及 "),n("code",[t._v("eface")]),t._v(" 结构体的字段是可以联系起来的：两个函数都是将参数"),n("code",[t._v("组装")]),t._v("一下，形成最终的接口。")]),t._v(" "),n("p",[t._v("作为补充，我们最后再来看下 "),n("code",[t._v("_type")]),t._v(" 结构体：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("type _type struct {\n    // 类型大小\n\tsize       uintptr\n    ptrdata    uintptr\n    // 类型的 hash 值\n    hash       uint32\n    // 类型的 flag，和反射相关\n    tflag      tflag\n    // 内存对齐相关\n    align      uint8\n    fieldalign uint8\n    // 类型的编号，有bool, slice, struct 等等等等\n\tkind       uint8\n\talg        *typeAlg\n\t// gc 相关\n\tgcdata    *byte\n\tstr       nameOff\n\tptrToThis typeOff\n}\n")])])]),n("p",[t._v("Go 语言各种数据类型都是在 "),n("code",[t._v("_type")]),t._v(" 字段的基础上，增加一些额外的字段来进行管理的：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("type arraytype struct {\n\ttyp   _type\n\telem  *_type\n\tslice *_type\n\tlen   uintptr\n}\n\ntype chantype struct {\n\ttyp  _type\n\telem *_type\n\tdir  uintptr\n}\n\ntype slicetype struct {\n\ttyp  _type\n\telem *_type\n}\n\ntype structtype struct {\n\ttyp     _type\n\tpkgPath name\n\tfields  []structfield\n}\n")])])]),n("p",[t._v("这些数据类型的结构体定义，是反射实现的基础。")]),t._v(" "),n("h1",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),n("p",[t._v("【有汇编分析，不错】http://legendtkl.com/2017/07/01/golang-interface-implement/")]),t._v(" "),n("p",[t._v("【interface 源码解读 很不错 包含反射】http://wudaijun.com/2018/01/go-interface-implement/")])])}),[],!1,null,null,null);e.default=s.exports}}]);