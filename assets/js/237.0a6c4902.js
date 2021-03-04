(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{672:function(t,e,n){"use strict";n.r(e);var a=n(44),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_6-1-深入理解-go-panic-and-recover"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-深入理解-go-panic-and-recover"}},[t._v("#")]),t._v(" 6.1 深入理解 Go panic and recover")]),t._v(" "),n("p",[t._v("作为一个 gophper，我相信你对于 "),n("code",[t._v("panic")]),t._v(" 和 "),n("code",[t._v("recover")]),t._v(" 肯定不陌生，但是你有没有想过。当我们执行了这两条语句之后。底层到底发生了什么事呢？前几天和同事刚好聊到相关的话题，发现其实大家对这块理解还是比较模糊的。希望这篇文章能够从更深入的角度告诉你为什么，它到底做了什么事？")]),t._v(" "),n("h2",{attrs:{id:"思考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[t._v("#")]),t._v(" 思考")]),t._v(" "),n("h3",{attrs:{id:"一、为什么会中止运行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、为什么会中止运行"}},[t._v("#")]),t._v(" 一、为什么会中止运行")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('func main() {\n\tpanic("EDDYCJY.")\n}\n')])])]),n("p",[t._v("输出结果：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ go run main.go\npanic: EDDYCJY.\n\ngoroutine 1 [running]:\nmain.main()\n\t/Users/eddycjy/go/src/github.com/EDDYCJY/awesomeProject/main.go:4 +0x39\nexit status 2\n")])])]),n("p",[t._v("请思考一下，为什么执行 "),n("code",[t._v("panic")]),t._v(" 后会导致应用程序运行中止？（而不是单单说执行了 "),n("code",[t._v("panic")]),t._v(" 所以就结束了这么含糊）")]),t._v(" "),n("h3",{attrs:{id:"二、为什么不会中止运行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、为什么不会中止运行"}},[t._v("#")]),t._v(" 二、为什么不会中止运行")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('func main() {\n\tdefer func() {\n\t\tif err := recover(); err != nil {\n\t\t\tlog.Printf("recover: %v", err)\n\t\t}\n\t}()\n\n\tpanic("EDDYCJY.")\n}\n')])])]),n("p",[t._v("输出结果：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ go run main.go \n2019/05/11 23:39:47 recover: EDDYCJY.\n")])])]),n("p",[t._v("请思考一下，为什么加上 "),n("code",[t._v("defer")]),t._v(" + "),n("code",[t._v("recover")]),t._v(" 组合就可以保护应用程序？")]),t._v(" "),n("h3",{attrs:{id:"三、不设置-defer-行不"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、不设置-defer-行不"}},[t._v("#")]),t._v(" 三、不设置 defer 行不")]),t._v(" "),n("p",[t._v("上面问题二是 "),n("code",[t._v("defer")]),t._v(" + "),n("code",[t._v("recover")]),t._v(" 组合，那我去掉 "),n("code",[t._v("defer")]),t._v(" 是不是也可以呢？如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('func main() {\n\tif err := recover(); err != nil {\n\t\tlog.Printf("recover: %v", err)\n\t}\n\n\tpanic("EDDYCJY.")\n}\n')])])]),n("p",[t._v("输出结果：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ go run main.go\npanic: EDDYCJY.\n\ngoroutine 1 [running]:\nmain.main()\n\t/Users/eddycjy/go/src/github.com/EDDYCJY/awesomeProject/main.go:10 +0xa1\nexit status 2\n")])])]),n("p",[t._v("竟然不行，啊呀毕竟入门教程都写的 "),n("code",[t._v("defer")]),t._v(" + "),n("code",[t._v("recover")]),t._v(" 组合 “万能” 捕获。但是为什么呢。去掉 "),n("code",[t._v("defer")]),t._v(" 后为什么就无法捕获了？")]),t._v(" "),n("p",[t._v("请思考一下，为什么需要设置 "),n("code",[t._v("defer")]),t._v(" 后 "),n("code",[t._v("recover")]),t._v(" 才能起作用？")]),t._v(" "),n("p",[t._v("同时你还需要仔细想想，我们设置 "),n("code",[t._v("defer")]),t._v(" + "),n("code",[t._v("recover")]),t._v(" 组合后就能无忧无虑了吗，各种 “乱” 写了吗？")]),t._v(" "),n("h3",{attrs:{id:"四、为什么起个-goroutine-就不行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、为什么起个-goroutine-就不行"}},[t._v("#")]),t._v(" 四、为什么起个 goroutine 就不行")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('func main() {\n\tgo func() {\n\t\tdefer func() {\n\t\t\tif err := recover(); err != nil {\n\t\t\t\tlog.Printf("recover: %v", err)\n\t\t\t}\n\t\t}()\n\t}()\n\n\tpanic("EDDYCJY.")\n}\n')])])]),n("p",[t._v("输出结果：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ go run main.go \npanic: EDDYCJY.\n\ngoroutine 1 [running]:\nmain.main()\n\t/Users/eddycjy/go/src/github.com/EDDYCJY/awesomeProject/main.go:14 +0x51\nexit status 2\n")])])]),n("p",[t._v("请思考一下，为什么新起了一个 "),n("code",[t._v("Goroutine")]),t._v(" 就无法捕获到异常了？到底发生了什么事...")]),t._v(" "),n("h2",{attrs:{id:"源码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[t._v("#")]),t._v(" 源码")]),t._v(" "),n("p",[t._v("接下来我们将带着上述 4+1 个小思考题，开始对源码的剖析和分析，尝试从阅读源码中找到思考题的答案和更多为什么")]),t._v(" "),n("h3",{attrs:{id:"数据结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[t._v("#")]),t._v(" 数据结构")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("type _panic struct {\n\targp      unsafe.Pointer\n\targ       interface{} \n\tlink      *_panic \n\trecovered bool\n\taborted   bool \n}\n")])])]),n("p",[t._v("在 "),n("code",[t._v("panic")]),t._v(" 中是使用 "),n("code",[t._v("_panic")]),t._v(" 作为其基础单元的，每执行一次 "),n("code",[t._v("panic")]),t._v(" 语句，都会创建一个 "),n("code",[t._v("_panic")]),t._v("。它包含了一些基础的字段用于存储当前的 "),n("code",[t._v("panic")]),t._v(" 调用情况，涉及的字段如下：")]),t._v(" "),n("ul",[n("li",[t._v("argp：指向 "),n("code",[t._v("defer")]),t._v(" 延迟调用的参数的指针")]),t._v(" "),n("li",[t._v("arg："),n("code",[t._v("panic")]),t._v(" 的原因，也就是调用 "),n("code",[t._v("panic")]),t._v(" 时传入的参数")]),t._v(" "),n("li",[t._v("link：指向上一个调用的 "),n("code",[t._v("_panic")])]),t._v(" "),n("li",[t._v("recovered："),n("code",[t._v("panic")]),t._v(" 是否已经被处理，也就是是否被 "),n("code",[t._v("recover")])]),t._v(" "),n("li",[t._v("aborted："),n("code",[t._v("panic")]),t._v(" 是否被中止")])]),t._v(" "),n("p",[t._v("另外通过查看 "),n("code",[t._v("link")]),t._v(" 字段，可得知其是一个链表的数据结构，如下图：")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://wx3.sinaimg.cn/large/006fVPCvly1g2muc73jp1j30hc099q2x.jpg",alt:"image"}})]),t._v(" "),n("h3",{attrs:{id:"恐慌-panic"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#恐慌-panic"}},[t._v("#")]),t._v(" 恐慌 panic")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('func main() {\n\tpanic("EDDYCJY.")\n}\n')])])]),n("p",[t._v("输出结果：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ go run main.go\npanic: EDDYCJY.\n\ngoroutine 1 [running]:\nmain.main()\n\t/Users/eddycjy/go/src/github.com/EDDYCJY/awesomeProject/main.go:4 +0x39\nexit status 2\n")])])]),n("p",[t._v("我们去反查一下 "),n("code",[t._v("panic")]),t._v(" 处理具体逻辑的地方在哪，如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('$ go tool compile -S main.go\n"".main STEXT size=66 args=0x0 locals=0x18\n\t0x0000 00000 (main.go:23)\tTEXT\t"".main(SB), ABIInternal, $24-0\n\t0x0000 00000 (main.go:23)\tMOVQ\t(TLS), CX\n\t0x0009 00009 (main.go:23)\tCMPQ\tSP, 16(CX)\n\t...\n\t0x002f 00047 (main.go:24)\tPCDATA\t$2, $0\n\t0x002f 00047 (main.go:24)\tMOVQ\tAX, 8(SP)\n\t0x0034 00052 (main.go:24)\tCALL\truntime.gopanic(SB)\n')])])]),n("p",[t._v("显然汇编代码直指内部实现是 "),n("code",[t._v("runtime.gopanic")]),t._v("，我们一起来看看这个方法做了什么事，如下（省略了部分）：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('func gopanic(e interface{}) {\n\tgp := getg()\n\t...\n\tvar p _panic\n\tp.arg = e\n\tp.link = gp._panic\n\tgp._panic = (*_panic)(noescape(unsafe.Pointer(&p)))\n    \n\tfor {\n\t\td := gp._defer\n\t\tif d == nil {\n\t\t\tbreak\n\t\t}\n\n\t\t// defer...\n\t\t...\n\t\td._panic = (*_panic)(noescape(unsafe.Pointer(&p)))\n\n\t\tp.argp = unsafe.Pointer(getargp(0))\n\t\treflectcall(nil, unsafe.Pointer(d.fn), deferArgs(d), uint32(d.siz), uint32(d.siz))\n\t\tp.argp = nil\n\n\t\t// recover...\n\t\tif p.recovered {\n\t\t\t...\n\t\t\tmcall(recovery)\n\t\t\tthrow("recovery failed") // mcall should not return\n\t\t}\n\t}\n\n\tpreprintpanics(gp._panic)\n\n\tfatalpanic(gp._panic) // should not return\n\t*(*int)(nil) = 0      // not reached\n}\n')])])]),n("ul",[n("li",[t._v("获取指向当前 "),n("code",[t._v("Goroutine")]),t._v(" 的指针")]),t._v(" "),n("li",[t._v("初始化一个 "),n("code",[t._v("panic")]),t._v(" 的基本单位 "),n("code",[t._v("_panic")]),t._v(" 用作后续的操作")]),t._v(" "),n("li",[t._v("获取当前 "),n("code",[t._v("Goroutine")]),t._v(" 上挂载的 "),n("code",[t._v("_defer")]),t._v("（数据结构也是链表）")]),t._v(" "),n("li",[t._v("若当前存在 "),n("code",[t._v("defer")]),t._v(" 调用，则调用 "),n("code",[t._v("reflectcall")]),t._v(" 方法去执行先前 "),n("code",[t._v("defer")]),t._v(" 中延迟执行的代码，若在执行过程中需要运行 "),n("code",[t._v("recover")]),t._v(" 将会调用 "),n("code",[t._v("gorecover")]),t._v(" 方法")]),t._v(" "),n("li",[t._v("结束前，使用 "),n("code",[t._v("preprintpanics")]),t._v(" 方法打印出所涉及的 "),n("code",[t._v("panic")]),t._v(" 消息")]),t._v(" "),n("li",[t._v("最后调用 "),n("code",[t._v("fatalpanic")]),t._v(" 中止应用程序，实际是执行 "),n("code",[t._v("exit(2)")]),t._v(" 进行最终退出行为的")])]),t._v(" "),n("p",[t._v("通过对上述代码的执行分析，可得知 "),n("code",[t._v("panic")]),t._v(" 方法实际上就是处理当前 "),n("code",[t._v("Goroutine(g)")]),t._v(" 上所挂载的 "),n("code",[t._v("._panic")]),t._v(" 链表（所以无法对其他 "),n("code",[t._v("Goroutine")]),t._v(" 的异常事件响应），然后对其所属的 "),n("code",[t._v("defer")]),t._v(" 链表和 "),n("code",[t._v("recover")]),t._v(" 进行检测并处理，最后调用退出命令中止应用程序")]),t._v(" "),n("h3",{attrs:{id:"无法恢复的恐慌-fatalpanic"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#无法恢复的恐慌-fatalpanic"}},[t._v("#")]),t._v(" 无法恢复的恐慌 fatalpanic")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("func fatalpanic(msgs *_panic) {\n\tpc := getcallerpc()\n\tsp := getcallersp()\n\tgp := getg()\n\tvar docrash bool\n\n\tsystemstack(func() {\n\t\tif startpanic_m() && msgs != nil {\n\t\t    ...\n\t\t\tprintpanics(msgs)\n\t\t}\n\n\t\tdocrash = dopanic_m(gp, pc, sp)\n\t})\n\n\tsystemstack(func() {\n\t\texit(2)\n\t})\n\n\t*(*int)(nil) = 0\n}\n")])])]),n("p",[t._v("我们看到在异常处理的最后会执行该方法，似乎它承担了所有收尾工作。实际呢，它是在最后对程序执行 "),n("code",[t._v("exit")]),t._v(" 指令来达到中止运行的作用，但在结束前它会通过 "),n("code",[t._v("printpanics")]),t._v(" 递归输出所有的异常消息及参数。代码如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('func printpanics(p *_panic) {\n\tif p.link != nil {\n\t\tprintpanics(p.link)\n\t\tprint("\\t")\n\t}\n\tprint("panic: ")\n\tprintany(p.arg)\n\tif p.recovered {\n\t\tprint(" [recovered]")\n\t}\n\tprint("\\n")\n}\n')])])]),n("p",[t._v("所以不要以为所有的异常都能够被 "),n("code",[t._v("recover")]),t._v(" 到，实际上像 "),n("code",[t._v("fatal error")]),t._v(" 和 "),n("code",[t._v("runtime.throw")]),t._v(" 都是无法被 "),n("code",[t._v("recover")]),t._v(" 到的，甚至是 oom 也是直接中止程序的，也有反手就给你来个 "),n("code",[t._v("exit(2)")]),t._v(" 教做人。因此在写代码时你应该要相对注意些，“恐慌” 是存在无法恢复的场景的")]),t._v(" "),n("h3",{attrs:{id:"恢复-recover"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#恢复-recover"}},[t._v("#")]),t._v(" 恢复 recover")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('func main() {\n\tdefer func() {\n\t\tif err := recover(); err != nil {\n\t\t\tlog.Printf("recover: %v", err)\n\t\t}\n\t}()\n\n\tpanic("EDDYCJY.")\n}\n')])])]),n("p",[t._v("输出结果：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ go run main.go \n2019/05/11 23:39:47 recover: EDDYCJY.\n")])])]),n("p",[t._v("和预期一致，成功捕获到了异常。但是 "),n("code",[t._v("recover")]),t._v(" 是怎么恢复 "),n("code",[t._v("panic")]),t._v(" 的呢？再看看汇编代码，如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('$ go tool compile -S main.go\n"".main STEXT size=110 args=0x0 locals=0x18\n\t0x0000 00000 (main.go:5)\tTEXT\t"".main(SB), ABIInternal, $24-0\n\t...\n\t0x0024 00036 (main.go:6)\tLEAQ\t"".main.func1·f(SB), AX\n\t0x002b 00043 (main.go:6)\tPCDATA\t$2, $0\n\t0x002b 00043 (main.go:6)\tMOVQ\tAX, 8(SP)\n\t0x0030 00048 (main.go:6)\tCALL\truntime.deferproc(SB)\n\t...\n\t0x0050 00080 (main.go:12)\tCALL\truntime.gopanic(SB)\n\t0x0055 00085 (main.go:12)\tUNDEF\n\t0x0057 00087 (main.go:6)\tXCHGL\tAX, AX\n\t0x0058 00088 (main.go:6)\tCALL\truntime.deferreturn(SB)\n\t...\n\t0x0022 00034 (main.go:7)\tMOVQ\tAX, (SP)\n\t0x0026 00038 (main.go:7)\tCALL\truntime.gorecover(SB)\n\t0x002b 00043 (main.go:7)\tPCDATA\t$2, $1\n\t0x002b 00043 (main.go:7)\tMOVQ\t16(SP), AX\n\t0x0030 00048 (main.go:7)\tMOVQ\t8(SP), CX\n\t...\n\t0x0056 00086 (main.go:8)\tLEAQ\tgo.string."recover: %v"(SB), AX\n\t...\n\t0x0086 00134 (main.go:8)\tCALL\tlog.Printf(SB)\n\t...\n')])])]),n("p",[t._v("通过分析底层调用，可得知主要是如下几个方法：")]),t._v(" "),n("ul",[n("li",[t._v("runtime.deferproc")]),t._v(" "),n("li",[t._v("runtime.gopanic")]),t._v(" "),n("li",[t._v("runtime.deferreturn")]),t._v(" "),n("li",[t._v("runtime.gorecover")])]),t._v(" "),n("p",[t._v("在上小节中，我们讲述了简单的流程，"),n("code",[t._v("gopanic")]),t._v(" 方法会调用当前 "),n("code",[t._v("Goroutine")]),t._v(" 下的 "),n("code",[t._v("defer")]),t._v(" 链表，若 "),n("code",[t._v("reflectcall")]),t._v(" 执行中遇到 "),n("code",[t._v("recover")]),t._v(" 就会调用 "),n("code",[t._v("gorecover")]),t._v(" 进行处理，该方法代码如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("func gorecover(argp uintptr) interface{} {\n\tgp := getg()\n\tp := gp._panic\n\tif p != nil && !p.recovered && argp == uintptr(p.argp) {\n\t\tp.recovered = true\n\t\treturn p.arg\n\t}\n\treturn nil\n}\n")])])]),n("p",[t._v("这代码，看上去挺简单的，核心就是修改 "),n("code",[t._v("recovered")]),t._v(" 字段。该字段是用于标识当前 "),n("code",[t._v("panic")]),t._v(" 是否已经被 "),n("code",[t._v("recover")]),t._v(" 处理。但是这和我们想象的并不一样啊，程序是怎么从 "),n("code",[t._v("panic")]),t._v(" 流转回去的呢？是不是在核心方法里处理了呢？我们再看看 "),n("code",[t._v("gopanic")]),t._v(" 的代码，如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('func gopanic(e interface{}) {\n\t...\n\tfor {\n\t\t// defer...\n\t\t...\n\t\tpc := d.pc\n\t\tsp := unsafe.Pointer(d.sp) // must be pointer so it gets adjusted during stack copy\n\t\tfreedefer(d)\n\t\t\n\t\t// recover...\n\t\tif p.recovered {\n\t\t\tatomic.Xadd(&runningPanicDefers, -1)\n\n\t\t\tgp._panic = p.link\n\t\t\tfor gp._panic != nil && gp._panic.aborted {\n\t\t\t\tgp._panic = gp._panic.link\n\t\t\t}\n\t\t\tif gp._panic == nil { \n\t\t\t\tgp.sig = 0\n\t\t\t}\n\n\t\t\tgp.sigcode0 = uintptr(sp)\n\t\t\tgp.sigcode1 = pc\n\t\t\tmcall(recovery)\n\t\t\tthrow("recovery failed") \n\t\t}\n\t}\n    ...\n}\n')])])]),n("p",[t._v("我们回到 "),n("code",[t._v("gopanic")]),t._v(" 方法中再仔细看看，发现实际上是包含对 "),n("code",[t._v("recover")]),t._v(" 流转的处理代码的。恢复流程如下：")]),t._v(" "),n("ul",[n("li",[t._v("判断当前 "),n("code",[t._v("_panic")]),t._v(" 中的 "),n("code",[t._v("recover")]),t._v(" 是否已标注为处理")]),t._v(" "),n("li",[t._v("从 "),n("code",[t._v("_panic")]),t._v(" 链表中删除已标注中止的 "),n("code",[t._v("panic")]),t._v(" 事件，也就是删除已经被恢复的 "),n("code",[t._v("panic")]),t._v(" 事件")]),t._v(" "),n("li",[t._v("将相关需要恢复的栈帧信息传递给 "),n("code",[t._v("recovery")]),t._v(" 方法的 "),n("code",[t._v("gp")]),t._v(" 参数（每个栈帧对应着一个未运行完的函数。栈帧中保存了该函数的返回地址和局部变量）")]),t._v(" "),n("li",[t._v("执行 "),n("code",[t._v("recovery")]),t._v(" 进行恢复动作")])]),t._v(" "),n("p",[t._v("从流程来看，最核心的是 "),n("code",[t._v("recovery")]),t._v(" 方法。它承担了异常流转控制的职责。代码如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('func recovery(gp *g) {\n\tsp := gp.sigcode0\n\tpc := gp.sigcode1\n\n\tif sp != 0 && (sp < gp.stack.lo || gp.stack.hi < sp) {\n\t\tprint("recover: ", hex(sp), " not in [", hex(gp.stack.lo), ", ", hex(gp.stack.hi), "]\\n")\n\t\tthrow("bad recovery")\n\t}\n\n\tgp.sched.sp = sp\n\tgp.sched.pc = pc\n\tgp.sched.lr = 0\n\tgp.sched.ret = 1\n\tgogo(&gp.sched)\n}\n')])])]),n("p",[t._v("粗略一看，似乎就是很简单的设置了一些值？但实际上设置的是编译器中伪寄存器的值，常常被用于维护上下文等。在这里我们需要结合 "),n("code",[t._v("gopanic")]),t._v(" 方法一同观察 "),n("code",[t._v("recovery")]),t._v(" 方法。它所使用的栈指针 "),n("code",[t._v("sp")]),t._v(" 和程序计数器 "),n("code",[t._v("pc")]),t._v(" 是由当前 "),n("code",[t._v("defer")]),t._v(" 在调用流程中的 "),n("code",[t._v("deferproc")]),t._v(" 传递下来的，因此实际上最后是通过 "),n("code",[t._v("gogo")]),t._v(" 方法跳回了 "),n("code",[t._v("deferproc")]),t._v(" 方法。另外我们注意到：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("gp.sched.ret = 1\n")])])]),n("p",[t._v("在底层中程序将 "),n("code",[t._v("gp.sched.ret")]),t._v(" 设置为了 1，也就是"),n("strong",[t._v("没有实际调用")]),t._v(" "),n("code",[t._v("deferproc")]),t._v(" 方法，直接修改了其返回值。意味着默认它已经处理完成。直接转移到 "),n("code",[t._v("deferproc")]),t._v(" 方法的下一条指令去。至此为止，异常状态的流转控制就已经结束了。接下来就是继续走 "),n("code",[t._v("defer")]),t._v(" 的流程了")]),t._v(" "),n("p",[t._v("为了验证这个想法，我们可以看一下核心的跳转方法 "),n("code",[t._v("gogo")]),t._v(" ，代码如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// void gogo(Gobuf*)\n// restore state from Gobuf; longjmp\nTEXT runtime·gogo(SB),NOSPLIT,$8-4\n\tMOVW\tbuf+0(FP), R1\n\tMOVW\tgobuf_g(R1), R0\n\tBL\tsetg<>(SB)\n\n\tMOVW\tgobuf_sp(R1), R13\t// restore SP==R13\n\tMOVW\tgobuf_lr(R1), LR\n\tMOVW\tgobuf_ret(R1), R0\n\tMOVW\tgobuf_ctxt(R1), R7\n\tMOVW\t$0, R11\n\tMOVW\tR11, gobuf_sp(R1)\t// clear to help garbage collector\n\tMOVW\tR11, gobuf_ret(R1)\n\tMOVW\tR11, gobuf_lr(R1)\n\tMOVW\tR11, gobuf_ctxt(R1)\n\tMOVW\tgobuf_pc(R1), R11\n\tCMP\tR11, R11 // set condition codes for == test, needed by stack split\n\tB\t(R11)\n")])])]),n("p",[t._v("通过查看代码可得知其主要作用是从 "),n("code",[t._v("Gobuf")]),t._v(" 恢复状态。简单来讲就是将寄存器的值修改为对应 "),n("code",[t._v("Goroutine(g)")]),t._v(" 的值，而在文中讲了很多次的 "),n("code",[t._v("Gobuf")]),t._v("，如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("type gobuf struct {\n\tsp   uintptr\n\tpc   uintptr\n\tg    guintptr\n\tctxt unsafe.Pointer\n\tret  sys.Uintreg\n\tlr   uintptr\n\tbp   uintptr\n}\n")])])]),n("p",[t._v("讲道理，其实它存储的就是 "),n("code",[t._v("Goroutine")]),t._v(" 切换上下文时所需要的一些东西")]),t._v(" "),n("h2",{attrs:{id:"拓展"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#拓展"}},[t._v("#")]),t._v(" 拓展")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('const(\n\tOPANIC       // panic(Left)\n\tORECOVER     // recover()\n\t...\n)\n...\nfunc walkexpr(n *Node, init *Nodes) *Node {\n    ...\n\tswitch n.Op {\n\tdefault:\n\t\tDump("walk", n)\n\t\tFatalf("walkexpr: switch 1 unknown op %+S", n)\n\n\tcase ONONAME, OINDREGSP, OEMPTY, OGETG:\n\tcase OTYPE, ONAME, OLITERAL:\n\t    ...\n\tcase OPANIC:\n\t\tn = mkcall("gopanic", nil, init, n.Left)\n\n\tcase ORECOVER:\n\t\tn = mkcall("gorecover", n.Type, init, nod(OADDR, nodfp, nil))\n\t...\n}\n')])])]),n("p",[t._v("实际上在调用 "),n("code",[t._v("panic")]),t._v(" 和 "),n("code",[t._v("recover")]),t._v(" 关键字时，是在编译阶段先转换为相应的 OPCODE 后，再由编译器转换为对应的运行时方法。并不是你所想像那样一步到位，有兴趣的小伙伴可以研究一下")]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("本文主要针对 "),n("code",[t._v("panic")]),t._v(" 和 "),n("code",[t._v("recover")]),t._v(" 关键字进行了深入源码的剖析，而开头的 4+1 个思考题，就是希望您能够带着疑问去学习，达到事半功倍的功效")]),t._v(" "),n("p",[t._v("另外本文和 "),n("code",[t._v("defer")]),t._v(" 有一定的关联性，因此需要有一定的基础知识。若刚刚看的时候这部分不理解，学习后可以再读一遍加深印象")]),t._v(" "),n("p",[t._v("在最后，现在的你可以回答这几个思考题了吗？说出来了才是真的懂 ：）")])])}),[],!1,null,null,null);e.default=r.exports}}]);