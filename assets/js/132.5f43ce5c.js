(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{958:function(t,a,s){"use strict";s.r(a);var n=s(44),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"go-语言学习笔记-第18章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#go-语言学习笔记-第18章"}},[t._v("#")]),t._v(" Go 语言学习笔记 -第18章")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#go-%e8%af%ad%e8%a8%80%e5%ad%a6%e4%b9%a0%e7%ac%94%e8%ae%b0--%e7%ac%ac18%e7%ab%a0"}},[t._v("Go 语言学习笔记 -第18章")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%e5%a0%86%e7%a9%ba%e9%97%b4amp%e6%a0%88%e7%a9%ba%e9%97%b4"}},[t._v("堆空间&栈空间")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%e5%a0%86%e6%a0%88%e8%b7%9f%e8%b8%aa"}},[t._v("堆栈跟踪")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%e5%8f%98%e9%87%8f%e5%88%a4%e6%96%ad"}},[t._v("变量判断")])])])])]),t._v(" "),s("h2",{attrs:{id:"堆空间-栈空间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#堆空间-栈空间"}},[t._v("#")]),t._v(" 堆空间&栈空间")]),t._v(" "),s("p",[t._v("在讲Go的堆栈之前，先温习一下堆栈基础知识。")]),t._v(" "),s("p",[t._v("什么是堆栈？在计算机中堆栈的概念分为：数据结构的堆栈和内存分配中堆栈。")]),t._v(" "),s("h3",{attrs:{id:"堆栈跟踪"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#堆栈跟踪"}},[t._v("#")]),t._v(" 堆栈跟踪")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("使用的go 版本是go 1.13.1")])])]),t._v(" "),s("p",[t._v("例子：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"runtime/debug"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tslice "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Example")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("slice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Example")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("slice "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tdebug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PrintStack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("运行结果：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("goroutine 1 [running]:\nruntime/debug.Stack(0xc000041f50, 0xc000099f50, 0x404dd6)\n    c:/go/src/runtime/debug/stack.go:24 +0xa4\nruntime/debug.PrintStack()\n    c:/go/src/runtime/debug/stack.go:16 +0x29\nmain.Example(...)\n    d:/学习/golang/example/main.go:10\nmain.main()\n    d:/学习/golang/example/main.go:7 +0x28\nProcess exiting with code: 0\n")])])]),s("p",[t._v("堆栈跟踪信息：\n第一行显示运行的goroutine是id为 1的goroutine。")]),t._v(" "),s("p",[t._v("第二行 debug.Stack()被调用")]),t._v(" "),s("p",[t._v("第四行 debug.PrintStack() 被调用")]),t._v(" "),s("p",[t._v("第六行 调用debug.PrintStack()的代码位置，位于main package下的Example函数。它也显示了代码所在的文件和路径，以及debug.PrintStack()发生的行数(第10行)。")]),t._v(" "),s("p",[t._v("第八行 也调用Example的函数的名字，它是main package的main函数。它也显示了文件名和路径，以及调用Example函数的行数。")]),t._v(" "),s("h2",{attrs:{id:"变量判断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量判断"}},[t._v("#")]),t._v(" 变量判断")]),t._v(" "),s("p",[t._v("变量是堆（heap）还是堆栈（stack）？")]),t._v(" "),s("p",[t._v("在当前的编译器中，如果变量具有其地址，则该变量是堆上分配的候选变量。\n但是，基础的逃逸分析可以将那些生存不超过函数返回值的变量识别出来，并且因此可以分配在栈上。")]),t._v(" "),s("p",[s("strong",[t._v("Go的编译器会决定在哪(堆or栈)分配内存，保证程序的正确性。")])]),t._v(" "),s("p",[t._v("下面通过反汇编查看具体内存分配情况：")]),t._v(" "),s("p",[t._v("新建 main.go")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n    c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("查看汇编代码")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" tool compile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("S main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v("\n")])])]),s("p",[t._v("输出：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('\t\t...\n        0x0028 00040 (main.go:5)        FUNCDATA        $2, gclocals·bfec7e55b3f043d1941c093912808913(SB)\n        0x0028 00040 (main.go:5)        FUNCDATA        $3, "".main.stkobj(SB)\n        0x0028 00040 (main.go:6)        PCDATA  $0, $1\n        0x0028 00040 (main.go:6)        PCDATA  $1, $0\n        0x0028 00040 (main.go:6)        LEAQ    type.[1]int(SB), AX\n        0x002f 00047 (main.go:6)        PCDATA  $0, $0\n        0x002f 00047 (main.go:6)        MOVQ    AX, (SP)\n        0x0033 00051 (main.go:6)        CALL    runtime.newobject(SB)\n        0x0038 00056 (main.go:6)        PCDATA  $0, $1\n        ...\n')])])]),s("p",[s("strong",[s("code",[t._v("注意到有调用newobject！其中main.go:6说明变量a的内存是在堆上分配的!")])])]),t._v(" "),s("p",[t._v("修改main.go")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n    c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("再看汇编代码：")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("没有发现调用newobject，这段代码a是在堆栈上分配的")]),t._v("。")])]),t._v(" "),s("p",[t._v("结论：")]),t._v(" "),s("p",[t._v("Go 编译器自行决定变量分配在堆栈或堆上，以保证程序的正确性。")])])}),[],!1,null,null,null);a.default=e.exports}}]);