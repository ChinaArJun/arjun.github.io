(window.webpackJsonp=window.webpackJsonp||[]).push([[432],{871:function(t,n,a){"use strict";a.r(n);var e=a(44),v=Object(e.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("我们已经看过了 "),a("code",[t._v("iface")]),t._v(" 和 "),a("code",[t._v("eface")]),t._v(" 的源码，知道 "),a("code",[t._v("iface")]),t._v(" 最重要的是 "),a("code",[t._v("itab")]),t._v(" 和 "),a("code",[t._v("_type")]),t._v("。")]),t._v(" "),a("p",[t._v("为了研究清楚接口是如何构造的，接下来我会拿起汇编的武器，还原背后的真相。")]),t._v(" "),a("p",[t._v("来看一个示例代码：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('package main\n\nimport "fmt"\n\ntype Person interface {\n\tgrowUp()\n}\n\ntype Student struct {\n\tage int\n}\n\nfunc (p Student) growUp() {\n\tp.age += 1\n\treturn\n}\n\nfunc main() {\n\tvar qcrao = Person(Student{age: 18})\n\n\tfmt.Println(qcrao)\n}\n\n')])])]),a("p",[t._v("执行命令：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("go tool compile -S main.go\n")])])]),a("p",[t._v("得到 main 函数的汇编代码如下：")]),t._v(" "),a("div",{staticClass:"language-asm extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('0x0000 00000 (./src/main.go:30) TEXT    "".main(SB), $80-0\n0x0000 00000 (./src/main.go:30) MOVQ    (TLS), CX\n0x0009 00009 (./src/main.go:30) CMPQ    SP, 16(CX)\n0x000d 00013 (./src/main.go:30) JLS     157\n0x0013 00019 (./src/main.go:30) SUBQ    $80, SP\n0x0017 00023 (./src/main.go:30) MOVQ    BP, 72(SP)\n0x001c 00028 (./src/main.go:30) LEAQ    72(SP), BP\n0x0021 00033 (./src/main.go:30) FUNCDATA$0, gclocals·69c1753bd5f81501d95132d08af04464(SB)\n0x0021 00033 (./src/main.go:30) FUNCDATA$1, gclocals·e226d4ae4a7cad8835311c6a4683c14f(SB)\n0x0021 00033 (./src/main.go:31) MOVQ    $18, ""..autotmp_1+48(SP)\n0x002a 00042 (./src/main.go:31) LEAQ    go.itab."".Student,"".Person(SB), AX\n0x0031 00049 (./src/main.go:31) MOVQ    AX, (SP)\n0x0035 00053 (./src/main.go:31) LEAQ    ""..autotmp_1+48(SP), AX\n0x003a 00058 (./src/main.go:31) MOVQ    AX, 8(SP)\n0x003f 00063 (./src/main.go:31) PCDATA  $0, $0\n0x003f 00063 (./src/main.go:31) CALL    runtime.convT2I64(SB)\n0x0044 00068 (./src/main.go:31) MOVQ    24(SP), AX\n0x0049 00073 (./src/main.go:31) MOVQ    16(SP), CX\n0x004e 00078 (./src/main.go:33) TESTQ   CX, CX\n0x0051 00081 (./src/main.go:33) JEQ     87\n0x0053 00083 (./src/main.go:33) MOVQ    8(CX), CX\n0x0057 00087 (./src/main.go:33) MOVQ    $0, ""..autotmp_2+56(SP)\n0x0060 00096 (./src/main.go:33) MOVQ    $0, ""..autotmp_2+64(SP)\n0x0069 00105 (./src/main.go:33) MOVQ    CX, ""..autotmp_2+56(SP)\n0x006e 00110 (./src/main.go:33) MOVQ    AX, ""..autotmp_2+64(SP)\n0x0073 00115 (./src/main.go:33) LEAQ    ""..autotmp_2+56(SP), AX\n0x0078 00120 (./src/main.go:33) MOVQ    AX, (SP)\n0x007c 00124 (./src/main.go:33) MOVQ    $1, 8(SP)\n0x0085 00133 (./src/main.go:33) MOVQ    $1, 16(SP)\n0x008e 00142 (./src/main.go:33) PCDATA  $0, $1\n0x008e 00142 (./src/main.go:33) CALL    fmt.Println(SB)\n0x0093 00147 (./src/main.go:34) MOVQ    72(SP), BP\n0x0098 00152 (./src/main.go:34) ADDQ    $80, SP\n0x009c 00156 (./src/main.go:34) RET\n0x009d 00157 (./src/main.go:34) NOP\n0x009d 00157 (./src/main.go:30) PCDATA  $0, $-1\n0x009d 00157 (./src/main.go:30) CALL    runtime.morestack_noctxt(SB)\n0x00a2 00162 (./src/main.go:30) JMP     0\n')])])]),a("p",[t._v("我们从第 10 行开始看，如果不理解前面几行汇编代码的话，可以回去看看公众号前面两篇文章，这里我就省略了。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("汇编行数")]),t._v(" "),a("th",[t._v("操作")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("10-14")]),t._v(" "),a("td",[t._v("构造调用 "),a("code",[t._v("runtime.convT2I64(SB)")]),t._v(" 的参数")])])])]),t._v(" "),a("p",[t._v("我们来看下这个函数的参数形式：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("func convT2I64(tab *itab, elem unsafe.Pointer) (i iface) {\n\t// ……\n}\n")])])]),a("p",[a("code",[t._v("convT2I64")]),t._v(" 会构造出一个 "),a("code",[t._v("inteface")]),t._v("，也就是我们的 "),a("code",[t._v("Person")]),t._v(" 接口。")]),t._v(" "),a("p",[t._v("第一个参数的位置是 "),a("code",[t._v("(SP)")]),t._v("，这里被赋上了 "),a("code",[t._v('go.itab."".Student,"".Person(SB)')]),t._v(" 的地址。")]),t._v(" "),a("p",[t._v("我们从生成的汇编找到：")]),t._v(" "),a("div",{staticClass:"language-asm extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('go.itab."".Student,"".Person SNOPTRDATA dupok size=40\n        0x0000 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  \n        0x0010 00 00 00 00 00 00 00 00 da 9f 20 d4              \n        rel 0+8 t=1 type."".Person+0\n        rel 8+8 t=1 type."".Student+0\n')])])]),a("p",[a("code",[t._v("size=40")]),t._v(" 大小为40字节，回顾一下：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("type itab struct {\n\tinter  *interfacetype // 8字节\n\t_type  *_type // 8字节\n\tlink   *itab // 8字节\n\thash   uint32 // 4字节\n\tbad    bool   // 1字节\n\tinhash bool   // 1字节\n\tunused [2]byte // 2字节\n\tfun    [1]uintptr // variable sized // 8字节\n}\n")])])]),a("p",[t._v("把每个字段的大小相加，"),a("code",[t._v("itab")]),t._v(" 结构体的大小就是 40 字节。上面那一串数字实际上是 "),a("code",[t._v("itab")]),t._v(" 序列化后的内容，注意到大部分数字是 0，从 24 字节开始的 4 个字节 "),a("code",[t._v("da 9f 20 d4")]),t._v(" 实际上是 "),a("code",[t._v("itab")]),t._v(" 的 "),a("code",[t._v("hash")]),t._v(" 值，这在判断两个类型是否相同的时候会用到。")]),t._v(" "),a("p",[t._v("下面两行是链接指令，简单说就是将所有源文件综合起来，给每个符号赋予一个全局的位置值。这里的意思也比较明确：前8个字节最终存储的是 "),a("code",[t._v('type."".Person')]),t._v(" 的地址，对应 "),a("code",[t._v("itab")]),t._v(" 里的 "),a("code",[t._v("inter")]),t._v(" 字段，表示接口类型；8-16 字节最终存储的是 "),a("code",[t._v('type."".Student')]),t._v(" 的地址，对应 "),a("code",[t._v("itab")]),t._v(" 里 "),a("code",[t._v("_type")]),t._v(" 字段，表示具体类型。")]),t._v(" "),a("p",[t._v("第二个参数就比较简单了，它就是数字 "),a("code",[t._v("18")]),t._v(" 的地址，这也是初始化 "),a("code",[t._v("Student")]),t._v(" 结构体的时候会用到。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("汇编行数")]),t._v(" "),a("th",[t._v("操作")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("15")]),t._v(" "),a("td",[t._v("调用 "),a("code",[t._v("runtime.convT2I64(SB)")])])])])]),t._v(" "),a("p",[t._v("具体看下代码：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("func convT2I64(tab *itab, elem unsafe.Pointer) (i iface) {\n\tt := tab._type\n\t\n\t//...\n\t\n\tvar x unsafe.Pointer\n\tif *(*uint64)(elem) == 0 {\n\t\tx = unsafe.Pointer(&zeroVal[0])\n\t} else {\n\t\tx = mallocgc(8, t, false)\n\t\t*(*uint64)(x) = *(*uint64)(elem)\n\t}\n\ti.tab = tab\n\ti.data = x\n\treturn\n}\n")])])]),a("p",[t._v("这块代码比较简单，把 "),a("code",[t._v("tab")]),t._v(" 赋给了 "),a("code",[t._v("iface")]),t._v(" 的 "),a("code",[t._v("tab")]),t._v(" 字段；"),a("code",[t._v("data")]),t._v(" 部分则是在堆上申请了一块内存，然后将 "),a("code",[t._v("elem")]),t._v(" 指向的 "),a("code",[t._v("18")]),t._v(" 拷贝过去。这样 "),a("code",[t._v("iface")]),t._v(" 就组装好了。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("汇编行数")]),t._v(" "),a("th",[t._v("操作")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("17")]),t._v(" "),a("td",[t._v("把 "),a("code",[t._v("i.tab")]),t._v(" 赋给 "),a("code",[t._v("CX")])])]),t._v(" "),a("tr",[a("td",[t._v("18")]),t._v(" "),a("td",[t._v("把 "),a("code",[t._v("i.data")]),t._v(" 赋给 "),a("code",[t._v("AX")])])]),t._v(" "),a("tr",[a("td",[t._v("19-21")]),t._v(" "),a("td",[t._v("检测 "),a("code",[t._v("i.tab")]),t._v(" 是否是 nil，如果不是的话，把 CX 移动 8 个字节，也就是把 "),a("code",[t._v("itab")]),t._v(" 的 "),a("code",[t._v("_type")]),t._v(" 字段赋给了 CX，这也是接口的实体类型，最终要作为 "),a("code",[t._v("fmt.Println")]),t._v(" 函数的参数")])])])]),t._v(" "),a("p",[t._v("后面，就是调用 "),a("code",[t._v("fmt.Println")]),t._v(" 函数及之前的参数准备工作了，不再赘述。")]),t._v(" "),a("p",[t._v("这样，我们就把一个 "),a("code",[t._v("interface")]),t._v(" 的构造过程说完了。")]),t._v(" "),a("p",[t._v("【引申1】\n如何打印出接口类型的 "),a("code",[t._v("Hash")]),t._v(" 值？")]),t._v(" "),a("p",[t._v("这里参考曹大神翻译的一篇文章，参考资料里会写上。具体做法如下：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('type iface struct {\n\ttab  *itab\n\tdata unsafe.Pointer\n}\ntype itab struct {\n\tinter uintptr\n\t_type uintptr\n\tlink uintptr\n\thash  uint32\n\t_     [4]byte\n\tfun   [1]uintptr\n}\n\nfunc main() {\n\tvar qcrao = Person(Student{age: 18})\n\n\tiface := (*iface)(unsafe.Pointer(&qcrao))\n\tfmt.Printf("iface.tab.hash = %#x\\n", iface.tab.hash)\n}\n')])])]),a("p",[t._v("定义了一个"),a("code",[t._v("山寨版")]),t._v("的 "),a("code",[t._v("iface")]),t._v(" 和 "),a("code",[t._v("itab")]),t._v("，说它"),a("code",[t._v("山寨")]),t._v("是因为 "),a("code",[t._v("itab")]),t._v(" 里的一些关键数据结构都不具体展开了，比如 "),a("code",[t._v("_type")]),t._v("，对比一下正宗的定义就可以发现，但是"),a("code",[t._v("山寨版")]),t._v("依然能工作，因为 "),a("code",[t._v("_type")]),t._v(" 就是一个指针而已嘛。")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("main")]),t._v(" 函数里，先构造出一个接口对象 "),a("code",[t._v("qcrao")]),t._v("，然后强制类型转换，最后读取出 "),a("code",[t._v("hash")]),t._v(" 值，非常妙！你也可以自己动手试一下。")]),t._v(" "),a("p",[t._v("运行结果：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iface.tab.hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 0xd4209fda\n")])])]),a("p",[t._v("值得一提的是，构造接口 "),a("code",[t._v("qcrao")]),t._v(" 的时候，即使我把 "),a("code",[t._v("age")]),t._v(" 写成其他值，得到的 "),a("code",[t._v("hash")]),t._v(" 值依然不变的，这应该是可以预料的，"),a("code",[t._v("hash")]),t._v(" 值只和他的字段、方法相关。")]),t._v(" "),a("h1",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("p",[t._v("【曹大神翻译的文章，非常硬核】http://xargin.com/go-and-interface/#reconstructing-an-itab-from-an-executable")])])}),[],!1,null,null,null);n.default=v.exports}}]);