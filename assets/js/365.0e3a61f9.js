(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{803:function(t,e,n){"use strict";n.r(e);var c=n(44),a=Object(c.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("context 包的代码并不长，"),n("code",[t._v("context.go")]),t._v(" 文件总共不到 500 行，其中还有很多大段的注释，代码可能也就 200 行左右的样子，是一个非常值得研究的代码库。")]),t._v(" "),n("p",[t._v("先看一张整体的图：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/59145775-173af280-8a1b-11e9-8867-c99ce02edb09.png",alt:"structure"}})]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("名称")]),t._v(" "),n("th",[t._v("作用")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Context")]),t._v(" "),n("td",[t._v("接口")]),t._v(" "),n("td",[t._v("定义了 Context 接口的四个方法")])]),t._v(" "),n("tr",[n("td",[t._v("emptyCtx")]),t._v(" "),n("td",[t._v("结构体")]),t._v(" "),n("td",[t._v("实现了 Context 接口，它其实是个空的 context")])]),t._v(" "),n("tr",[n("td",[t._v("CancelFunc")]),t._v(" "),n("td",[t._v("函数")]),t._v(" "),n("td",[t._v("取消函数")])]),t._v(" "),n("tr",[n("td",[t._v("canceler")]),t._v(" "),n("td",[t._v("接口")]),t._v(" "),n("td",[t._v("context 取消接口，定义了两个方法")])]),t._v(" "),n("tr",[n("td",[t._v("cancelCtx")]),t._v(" "),n("td",[t._v("结构体")]),t._v(" "),n("td",[t._v("可以被取消")])]),t._v(" "),n("tr",[n("td",[t._v("timerCtx")]),t._v(" "),n("td",[t._v("结构体")]),t._v(" "),n("td",[t._v("超时会被取消")])]),t._v(" "),n("tr",[n("td",[t._v("valueCtx")]),t._v(" "),n("td",[t._v("结构体")]),t._v(" "),n("td",[t._v("可以存储 k-v 对")])]),t._v(" "),n("tr",[n("td",[t._v("Background")]),t._v(" "),n("td",[t._v("函数")]),t._v(" "),n("td",[t._v("返回一个空的 context，常作为根 context")])]),t._v(" "),n("tr",[n("td",[t._v("TODO")]),t._v(" "),n("td",[t._v("函数")]),t._v(" "),n("td",[t._v("返回一个空的 context，常用于重构时期，没有合适的 context 可用")])]),t._v(" "),n("tr",[n("td",[t._v("WithCancel")]),t._v(" "),n("td",[t._v("函数")]),t._v(" "),n("td",[t._v("基于父 context，生成一个可以取消的 context")])]),t._v(" "),n("tr",[n("td",[t._v("newCancelCtx")]),t._v(" "),n("td",[t._v("函数")]),t._v(" "),n("td",[t._v("创建一个可取消的 context")])]),t._v(" "),n("tr",[n("td",[t._v("propagateCancel")]),t._v(" "),n("td",[t._v("函数")]),t._v(" "),n("td",[t._v("向下传递 context 节点间的取消关系")])]),t._v(" "),n("tr",[n("td",[t._v("parentCancelCtx")]),t._v(" "),n("td",[t._v("函数")]),t._v(" "),n("td",[t._v("找到第一个可取消的父节点")])]),t._v(" "),n("tr",[n("td",[t._v("removeChild")]),t._v(" "),n("td",[t._v("函数")]),t._v(" "),n("td",[t._v("去掉父节点的孩子节点")])]),t._v(" "),n("tr",[n("td",[t._v("init")]),t._v(" "),n("td",[t._v("函数")]),t._v(" "),n("td",[t._v("包初始化")])]),t._v(" "),n("tr",[n("td",[t._v("WithDeadline")]),t._v(" "),n("td",[t._v("函数")]),t._v(" "),n("td",[t._v("创建一个有 deadline 的 context")])]),t._v(" "),n("tr",[n("td",[t._v("WithTimeout")]),t._v(" "),n("td",[t._v("函数")]),t._v(" "),n("td",[t._v("创建一个有 timeout 的 context")])]),t._v(" "),n("tr",[n("td",[t._v("WithValue")]),t._v(" "),n("td",[t._v("函数")]),t._v(" "),n("td",[t._v("创建一个存储 k-v 对的 context")])])])]),t._v(" "),n("p",[t._v("上面这张表展示了 context 的所有函数、接口、结构体，可以纵览全局，可以在读完文章后，再回头细看。")]),t._v(" "),n("p",[t._v("整体类图如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/59153629-c1a12d00-8a90-11e9-89a4-eaf3e34f190e.png",alt:"classes"}})]),t._v(" "),n("h1",{attrs:{id:"接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[t._v("#")]),t._v(" 接口")]),t._v(" "),n("h2",{attrs:{id:"context"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" Context")]),t._v(" "),n("p",[t._v("现在可以直接看源码：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("type Context interface {\n\t// 当 context 被取消或者到了 deadline，返回一个被关闭的 channel\n\tDone() <-chan struct{}\n\n\t// 在 channel Done 关闭后，返回 context 取消原因\n\tErr() error\n\n\t// 返回 context 是否会被取消以及自动取消时间（即 deadline）\n\tDeadline() (deadline time.Time, ok bool)\n\n\t// 获取 key 对应的 value\n\tValue(key interface{}) interface{}\n}\n")])])]),n("p",[n("code",[t._v("Context")]),t._v(" 是一个接口，定义了 4 个方法，它们都是"),n("code",[t._v("幂等")]),t._v("的。也就是说连续多次调用同一个方法，得到的结果都是相同的。")]),t._v(" "),n("p",[n("code",[t._v("Done()")]),t._v(" 返回一个 channel，可以表示 context 被取消的信号：当这个 channel 被关闭时，说明 context 被取消了。注意，这是一个只读的channel。 我们又知道，读一个关闭的 channel 会读出相应类型的零值。并且源码里没有地方会向这个 channel 里面塞入值。换句话说，这是一个 "),n("code",[t._v("receive-only")]),t._v(" 的 channel。因此在子协程里读这个 channel，除非被关闭，否则读不出来任何东西。也正是利用了这一点，子协程从 channel 里读出了值（零值）后，就可以做一些收尾工作，尽快退出。")]),t._v(" "),n("p",[n("code",[t._v("Err()")]),t._v(" 返回一个错误，表示 channel 被关闭的原因。例如是被取消，还是超时。")]),t._v(" "),n("p",[n("code",[t._v("Deadline()")]),t._v(" 返回 context 的截止时间，通过此时间，函数就可以决定是否进行接下来的操作，如果时间太短，就可以不往下做了，否则浪费系统资源。当然，也可以用这个 deadline 来设置一个 I/O 操作的超时时间。")]),t._v(" "),n("p",[n("code",[t._v("Value()")]),t._v(" 获取之前设置的 key 对应的 value。")]),t._v(" "),n("h2",{attrs:{id:"canceler"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#canceler"}},[t._v("#")]),t._v(" canceler")]),t._v(" "),n("p",[t._v("再来看另外一个接口：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("type canceler interface {\n\tcancel(removeFromParent bool, err error)\n\tDone() <-chan struct{}\n}\n")])])]),n("p",[t._v("实现了上面定义的两个方法的 Context，就表明该 Context 是可取消的。源码中有两个类型实现了 canceler 接口："),n("code",[t._v("*cancelCtx")]),t._v(" 和 "),n("code",[t._v("*timerCtx")]),t._v("。注意是加了 "),n("code",[t._v("*")]),t._v(" 号的，是这两个结构体的指针实现了 canceler 接口。")]),t._v(" "),n("p",[t._v("Context 接口设计成这个样子的原因：")]),t._v(" "),n("ul",[n("li",[t._v("“取消”操作应该是建议性，而非强制性")])]),t._v(" "),n("p",[t._v("caller 不应该去关心、干涉 callee 的情况，决定如何以及何时 return 是 callee 的责任。caller 只需发送“取消”信息，callee 根据收到的信息来做进一步的决策，因此接口并没有定义 cancel 方法。")]),t._v(" "),n("ul",[n("li",[t._v("“取消”操作应该可传递")])]),t._v(" "),n("p",[t._v("“取消”某个函数时，和它相关联的其他函数也应该“取消”。因此，"),n("code",[t._v("Done()")]),t._v(" 方法返回一个只读的 channel，所有相关函数监听此 channel。一旦 channel 关闭，通过 channel 的“广播机制”，所有监听者都能收到。")]),t._v(" "),n("h1",{attrs:{id:"结构体"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结构体"}},[t._v("#")]),t._v(" 结构体")]),t._v(" "),n("h2",{attrs:{id:"emptyctx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#emptyctx"}},[t._v("#")]),t._v(" emptyCtx")]),t._v(" "),n("p",[t._v("源码中定义了 "),n("code",[t._v("Context")]),t._v(" 接口后，并且给出了一个实现：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("type emptyCtx int\n\nfunc (*emptyCtx) Deadline() (deadline time.Time, ok bool) {\n\treturn\n}\n\nfunc (*emptyCtx) Done() <-chan struct{} {\n\treturn nil\n}\n\nfunc (*emptyCtx) Err() error {\n\treturn nil\n}\n\nfunc (*emptyCtx) Value(key interface{}) interface{} {\n\treturn nil\n}\n")])])]),n("p",[t._v("看这段源码，非常 happy。因为每个函数都实现的异常简单，要么是直接返回，要么是返回 nil。")]),t._v(" "),n("p",[t._v("所以，这实际上是一个空的 context，永远不会被 cancel，没有存储值，也没有 deadline。")]),t._v(" "),n("p",[t._v("它被包装成：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("var (\n\tbackground = new(emptyCtx)\n\ttodo       = new(emptyCtx)\n)\n")])])]),n("p",[t._v("通过下面两个导出的函数（首字母大写）对外公开：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("func Background() Context {\n\treturn background\n}\n\nfunc TODO() Context {\n\treturn todo\n}\n")])])]),n("p",[t._v("background 通常用在 main 函数中，作为所有 context 的根节点。")]),t._v(" "),n("p",[t._v("todo 通常用在并不知道传递什么 context的情形。例如，调用一个需要传递 context 参数的函数，你手头并没有其他 context 可以传递，这时就可以传递 todo。这常常发生在重构进行中，给一些函数添加了一个 Context 参数，但不知道要传什么，就用 todo “占个位子”，最终要换成其他 context。")]),t._v(" "),n("h2",{attrs:{id:"cancelctx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cancelctx"}},[t._v("#")]),t._v(" cancelCtx")]),t._v(" "),n("p",[t._v("再来看一个重要的 context：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("type cancelCtx struct {\n\tContext\n\n\t// 保护之后的字段\n\tmu       sync.Mutex\n\tdone     chan struct{}\n\tchildren map[canceler]struct{}\n\terr      error\n}\n")])])]),n("p",[t._v("这是一个可以取消的 Context，实现了 canceler 接口。它直接将接口 Context 作为它的一个匿名字段，这样，它就可以被看成一个 Context。")]),t._v(" "),n("p",[t._v("先来看 "),n("code",[t._v("Done()")]),t._v(" 方法的实现：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("func (c *cancelCtx) Done() <-chan struct{} {\n\tc.mu.Lock()\n\tif c.done == nil {\n\t\tc.done = make(chan struct{})\n\t}\n\td := c.done\n\tc.mu.Unlock()\n\treturn d\n}\n")])])]),n("p",[t._v("c.done 是“懒汉式”创建，只有调用了 Done() 方法的时候才会被创建。再次说明，函数返回的是一个只读的 channel，而且没有地方向这个 channel 里面写数据。所以，直接调用读这个 channel，协程会被 block 住。一般通过搭配 select 来使用。一旦关闭，就会立即读出零值。")]),t._v(" "),n("p",[n("code",[t._v("Err()")]),t._v(" 和 "),n("code",[t._v("String()")]),t._v(" 方法比较简单，不多说。推荐看源码，非常简单。")]),t._v(" "),n("p",[t._v("接下来，我们重点关注 "),n("code",[t._v("cancel()")]),t._v(" 方法的实现：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('func (c *cancelCtx) cancel(removeFromParent bool, err error) {\n    // 必须要传 err\n\tif err == nil {\n\t\tpanic("context: internal error: missing cancel error")\n\t}\n\tc.mu.Lock()\n\tif c.err != nil {\n\t\tc.mu.Unlock()\n\t\treturn // 已经被其他协程取消\n\t}\n\t// 给 err 字段赋值\n\tc.err = err\n\t// 关闭 channel，通知其他协程\n\tif c.done == nil {\n\t\tc.done = closedchan\n\t} else {\n\t\tclose(c.done)\n\t}\n\t\n\t// 遍历它的所有子节点\n\tfor child := range c.children {\n\t    // 递归地取消所有子节点\n\t\tchild.cancel(false, err)\n\t}\n\t// 将子节点置空\n\tc.children = nil\n\tc.mu.Unlock()\n\n\tif removeFromParent {\n\t    // 从父节点中移除自己 \n\t\tremoveChild(c.Context, c)\n\t}\n}\n')])])]),n("p",[t._v("总体来看，"),n("code",[t._v("cancel()")]),t._v(" 方法的功能就是关闭 channel：c.done；递归地取消它的所有子节点；从父节点从删除自己。达到的效果是通过关闭 channel，将取消信号传递给了它的所有子节点。goroutine 接收到取消信号的方式就是 select 语句中的"),n("code",[t._v("读 c.done")]),t._v(" 被选中。")]),t._v(" "),n("p",[t._v("我们再来看创建一个可取消的 Context 的方法：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("func WithCancel(parent Context) (ctx Context, cancel CancelFunc) {\n\tc := newCancelCtx(parent)\n\tpropagateCancel(parent, &c)\n\treturn &c, func() { c.cancel(true, Canceled) }\n}\n\nfunc newCancelCtx(parent Context) cancelCtx {\n\treturn cancelCtx{Context: parent}\n}\n")])])]),n("p",[t._v("这是一个暴露给用户的方法，传入一个父 Context（这通常是一个 "),n("code",[t._v("background")]),t._v("，作为根节点），返回新建的 context，新 context 的 done channel 是新建的（前文讲过）。")]),t._v(" "),n("p",[t._v("当 WithCancel 函数返回的 CancelFunc 被调用或者是父节点的 done channel 被关闭（父节点的 CancelFunc 被调用），此 context（子节点） 的 done channel 也会被关闭。")]),t._v(" "),n("p",[t._v("注意传给 WithCancel 方法的参数，前者是 true，也就是说取消的时候，需要将自己从父节点里删除。第二个参数则是一个固定的取消错误类型：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('var Canceled = errors.New("context canceled")\n')])])]),n("p",[t._v("还注意到一点，调用子节点 cancel 方法的时候，传入的第一个参数 "),n("code",[t._v("removeFromParent")]),t._v(" 是 false。")]),t._v(" "),n("p",[t._v("两个问题需要回答：1. 什么时候会传 true？2. 为什么有时传 true，有时传 false？")]),t._v(" "),n("p",[t._v("当 "),n("code",[t._v("removeFromParent")]),t._v(" 为 true 时，会将当前节点的 context 从父节点 context 中删除：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("func removeChild(parent Context, child canceler) {\n\tp, ok := parentCancelCtx(parent)\n\tif !ok {\n\t\treturn\n\t}\n\tp.mu.Lock()\n\tif p.children != nil {\n\t\tdelete(p.children, child)\n\t}\n\tp.mu.Unlock()\n}\n")])])]),n("p",[t._v("最关键的一行：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("delete(p.children, child)\n")])])]),n("p",[t._v("什么时候会传 true 呢？答案是调用 "),n("code",[t._v("WithCancel()")]),t._v(" 方法的时候，也就是新创建一个可取消的 context 节点时，返回的 cancelFunc 函数会传入 true。这样做的结果是：当调用返回的 cancelFunc 时，会将这个 context 从它的父节点里“除名”，因为父节点可能有很多子节点，你自己取消了，所以我要和你断绝关系，对其他人没影响。")]),t._v(" "),n("p",[t._v("在取消函数内部，我知道，我所有的子节点都会因为我的一："),n("code",[t._v("c.children = nil")]),t._v(" 而化为灰烬。我自然就没有必要再多做这一步，最后我所有的子节点都会和我断绝关系，没必要一个个做。另外，如果遍历子节点的时候，调用 child.cancel 函数传了 true，还会造成同时遍历和删除一个 map 的境地，会有问题的。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/59315867-37ee9b00-8cee-11e9-8c19-9a4cf7606d14.png",alt:"context cancel"}})]),t._v(" "),n("p",[t._v("如上左图，代表一棵 context 树。当调用左图中标红 context 的 cancel 方法后，该 context 从它的父 context 中去除掉了：实线箭头变成了虚线。且虚线圈框出来的 context 都被取消了，圈内的 context 间的父子关系都荡然无存了。")]),t._v(" "),n("p",[t._v("重点看 "),n("code",[t._v("propagateCancel()")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('func propagateCancel(parent Context, child canceler) {\n\t// 父节点是个空节点\n\tif parent.Done() == nil {\n\t\treturn // parent is never canceled\n\t}\n\t// 找到可以取消的父 context\n\tif p, ok := parentCancelCtx(parent); ok {\n\t\tp.mu.Lock()\n\t\tif p.err != nil {\n\t\t\t// 父节点已经被取消了，本节点（子节点）也要取消\n\t\t\tchild.cancel(false, p.err)\n\t\t} else {\n\t\t\t// 父节点未取消\n\t\t\tif p.children == nil {\n\t\t\t\tp.children = make(map[canceler]struct{})\n\t\t\t}\n\t\t\t// "挂到"父节点上\n\t\t\tp.children[child] = struct{}{}\n\t\t}\n\t\tp.mu.Unlock()\n\t} else {\n\t\t// 如果没有找到可取消的父 context。新启动一个协程监控父节点或子节点取消信号\n\t\tgo func() {\n\t\t\tselect {\n\t\t\tcase <-parent.Done():\n\t\t\t\tchild.cancel(false, parent.Err())\n\t\t\tcase <-child.Done():\n\t\t\t}\n\t\t}()\n\t}\n}\n')])])]),n("p",[t._v("这个方法的作用就是向上寻找可以“挂靠”的“可取消”的 context，并且“挂靠”上去。这样，调用上层 cancel 方法的时候，就可以层层传递，将那些挂靠的子 context 同时“取消”。")]),t._v(" "),n("p",[t._v("这里着重解释下为什么会有 else 描述的情况发生。"),n("code",[t._v("else")]),t._v(" 是指当前节点 context 没有向上找到可以取消的父节点，那么就要再启动一个协程监控父节点或者子节点的取消动作。")]),t._v(" "),n("p",[t._v("这里就有疑问了，既然没找到可以取消的父节点，那 "),n("code",[t._v("case <-parent.Done()")]),t._v(" 这个 case 就永远不会发生，所以可以忽略这个 case；而 "),n("code",[t._v("case <-child.Done()")]),t._v(" 这个 case 又啥事不干。那这个 "),n("code",[t._v("else")]),t._v(" 不就多余了吗？")]),t._v(" "),n("p",[t._v("其实不然。我们来看 "),n("code",[t._v("parentCancelCtx")]),t._v(" 的代码：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("func parentCancelCtx(parent Context) (*cancelCtx, bool) {\n\tfor {\n\t\tswitch c := parent.(type) {\n\t\tcase *cancelCtx:\n\t\t\treturn c, true\n\t\tcase *timerCtx:\n\t\t\treturn &c.cancelCtx, true\n\t\tcase *valueCtx:\n\t\t\tparent = c.Context\n\t\tdefault:\n\t\t\treturn nil, false\n\t\t}\n\t}\n}\n")])])]),n("p",[t._v("这里只会识别三种 Context 类型：*cancelCtx，*timerCtx，*valueCtx。若是把 Context 内嵌到一个类型里，就识别不出来了。")]),t._v(" "),n("p",[t._v("由于 context 包的代码并不多，所以我直接把它 copy 出来了，然后在 else 语句里加上了几条打印语句，来验证上面的说法：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("type MyContext struct {\n    // 这里的 Context 是我 copy 出来的，所以前面不用加 context.\n\tContext\n}\n\nfunc main() {\n\tchildCancel := true\n\n\tparentCtx, parentFunc := WithCancel(Background())\n\tmctx := MyContext{parentCtx}\n\n\tchildCtx, childFun := WithCancel(mctx)\n\n\tif childCancel {\n\t\tchildFun()\n\t} else {\n\t\tparentFunc()\n\t}\n\n\tfmt.Println(parentCtx)\n\tfmt.Println(mctx)\n\tfmt.Println(childCtx)\n\n    // 防止主协程退出太快，子协程来不及打印 \n\ttime.Sleep(10 * time.Second)\n}\n")])])]),n("p",[t._v("我自已在 else 里添加的打印语句我就不贴出来了，感兴趣的可以自己动手实验下。我们看下三个 context 的打印结果：")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("context.Background.WithCancel\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("context.Background.WithCancel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("context.Background.WithCancel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".WithCancel\n")])])]),n("p",[t._v("果然，mctx，childCtx 和正常的 parentCtx 不一样，因为它是一个自定义的结构体类型。")]),t._v(" "),n("p",[n("code",[t._v("else")]),t._v(" 这段代码说明，如果把 ctx 强行塞进一个结构体，并用它作为父节点，调用 WithCancel 函数构建子节点 context 的时候，Go 会新启动一个协程来监控取消信号，明显有点浪费嘛。")]),t._v(" "),n("p",[t._v("再来说一下，select 语句里的两个 case 其实都不能删。")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("select {\n\tcase <-parent.Done():\n\t\tchild.cancel(false, parent.Err())\n\tcase <-child.Done():\n}\n")])])]),n("p",[t._v("第一个 case 说明当父节点取消，则取消子节点。如果去掉这个 case，那么父节点取消的信号就不能传递到子节点。")]),t._v(" "),n("p",[t._v("第二个 case 是说如果子节点自己取消了，那就退出这个 select，父节点的取消信号就不用管了。如果去掉这个 case，那么很可能父节点一直不取消，这个 goroutine 就泄漏了。当然，如果父节点取消了，就会重复让子节点取消，不过，这也没什么影响嘛。")]),t._v(" "),n("h2",{attrs:{id:"timerctx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#timerctx"}},[t._v("#")]),t._v(" timerCtx")]),t._v(" "),n("p",[t._v("timerCtx 基于 cancelCtx，只是多了一个 time.Timer 和一个 deadline。Timer 会在 deadline 到来时，自动取消 context。")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("type timerCtx struct {\n\tcancelCtx\n\ttimer *time.Timer // Under cancelCtx.mu.\n\n\tdeadline time.Time\n}\n")])])]),n("p",[t._v("timerCtx 首先是一个 cancelCtx，所以它能取消。看下 cancel() 方法：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("func (c *timerCtx) cancel(removeFromParent bool, err error) {\n\t// 直接调用 cancelCtx 的取消方法\n\tc.cancelCtx.cancel(false, err)\n\tif removeFromParent {\n\t\t// 从父节点中删除子节点\n\t\tremoveChild(c.cancelCtx.Context, c)\n\t}\n\tc.mu.Lock()\n\tif c.timer != nil {\n\t\t// 关掉定时器，这样，在deadline 到来时，不会再次取消\n\t\tc.timer.Stop()\n\t\tc.timer = nil\n\t}\n\tc.mu.Unlock()\n}\n")])])]),n("p",[t._v("创建 timerCtx 的方法：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("func WithTimeout(parent Context, timeout time.Duration) (Context, CancelFunc) {\n\treturn WithDeadline(parent, time.Now().Add(timeout))\n}\n")])])]),n("p",[n("code",[t._v("WithTimeout")]),t._v(" 函数直接调用了 "),n("code",[t._v("WithDeadline")]),t._v("，传入的 deadline 是当前时间加上 timeout 的时间，也就是从现在开始再经过 timeout 时间就算超时。也就是说，"),n("code",[t._v("WithDeadline")]),t._v(" 需要用的是绝对时间。重点来看它：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("func WithDeadline(parent Context, deadline time.Time) (Context, CancelFunc) {\n\tif cur, ok := parent.Deadline(); ok && cur.Before(deadline) {\n\t\t// 如果父节点 context 的 deadline 早于指定时间。直接构建一个可取消的 context。\n\t\t// 原因是一旦父节点超时，自动调用 cancel 函数，子节点也会随之取消。\n\t\t// 所以不用单独处理子节点的计时器时间到了之后，自动调用 cancel 函数\n\t\treturn WithCancel(parent)\n\t}\n\t\n\t// 构建 timerCtx\n\tc := &timerCtx{\n\t\tcancelCtx: newCancelCtx(parent),\n\t\tdeadline:  deadline,\n\t}\n\t// 挂靠到父节点上\n\tpropagateCancel(parent, c)\n\t\n\t// 计算当前距离 deadline 的时间\n\td := time.Until(deadline)\n\tif d <= 0 {\n\t\t// 直接取消\n\t\tc.cancel(true, DeadlineExceeded) // deadline has already passed\n\t\treturn c, func() { c.cancel(true, Canceled) }\n\t}\n\tc.mu.Lock()\n\tdefer c.mu.Unlock()\n\tif c.err == nil {\n\t\t// d 时间后，timer 会自动调用 cancel 函数。自动取消\n\t\tc.timer = time.AfterFunc(d, func() {\n\t\t\tc.cancel(true, DeadlineExceeded)\n\t\t})\n\t}\n\treturn c, func() { c.cancel(true, Canceled) }\n}\n")])])]),n("p",[t._v("也就是说仍然要把子节点挂靠到父节点，一旦父节点取消了，会把取消信号向下传递到子节点，子节点随之取消。")]),t._v(" "),n("p",[t._v("有一个特殊情况是，如果要创建的这个子节点的 deadline 比父节点要晚，也就是说如果父节点是时间到自动取消，那么一定会取消这个子节点，导致子节点的 deadline 根本不起作用，因为子节点在 deadline 到来之前就已经被父节点取消了。")]),t._v(" "),n("p",[t._v("这个函数的最核心的一句是：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("c.timer = time.AfterFunc(d, func() {\n\tc.cancel(true, DeadlineExceeded)\n})\n")])])]),n("p",[t._v("c.timer 会在 d 时间间隔后，自动调用 cancel 函数，并且传入的错误就是 "),n("code",[t._v("DeadlineExceeded")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('var DeadlineExceeded error = deadlineExceededError{}\n\ntype deadlineExceededError struct{}\n\nfunc (deadlineExceededError) Error() string   { return "context deadline exceeded" }\n')])])]),n("p",[t._v("也就是超时错误。")])])}),[],!1,null,null,null);e.default=a.exports}}]);