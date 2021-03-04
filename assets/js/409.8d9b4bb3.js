(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{848:function(t,n,e){"use strict";e.r(n);var a=e(44),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("关于 channel 的使用，有几点不方便的地方：")]),t._v(" "),e("ol",[e("li",[t._v("在不改变 channel 自身状态的情况下，无法获知一个 channel 是否关闭。")]),t._v(" "),e("li",[t._v("关闭一个 closed channel 会导致 panic。所以，如果关闭 channel 的一方在不知道 channel 是否处于关闭状态时就去贸然关闭 channel 是很危险的事情。")]),t._v(" "),e("li",[t._v("向一个 closed channel 发送数据会导致 panic。所以，如果向 channel 发送数据的一方不知道 channel 是否处于关闭状态时就去贸然向 channel 发送数据是很危险的事情。")])]),t._v(" "),e("p",[t._v("一个比较粗糙的检查 channel 是否关闭的函数：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("func IsClosed(ch <-chan T) bool {\n\tselect {\n\tcase <-ch:\n\t\treturn true\n\tdefault:\n\t}\n\n\treturn false\n}\n\nfunc main() {\n\tc := make(chan T)\n\tfmt.Println(IsClosed(c)) // false\n\tclose(c)\n\tfmt.Println(IsClosed(c)) // true\n}\n")])])]),e("p",[t._v("看一下代码，其实存在很多问题。首先，IsClosed 函数是一个有副作用的函数。每调用一次，都会读出 channel 里的一个元素，改变了 channel 的状态。这不是一个好的函数，干活就干活，还顺手牵羊！")]),t._v(" "),e("p",[t._v("其次，IsClosed 函数返回的结果仅代表调用那个瞬间，并不能保证调用之后会不会有其他 goroutine 对它进行了一些操作，改变了它的这种状态。例如，IsClosed 函数返回 true，但这时有另一个 goroutine 关闭了 channel，而你还拿着这个过时的 “channel 未关闭”的信息，向其发送数据，就会导致 panic 的发生。当然，一个 channel 不会被重复关闭两次，如果 IsClosed 函数返回的结果是 true，说明 channel 是真的关闭了。")]),t._v(" "),e("p",[t._v("有一条广泛流传的关闭 channel 的原则：")]),t._v(" "),e("blockquote",[e("p",[t._v("don't close a channel from the receiver side and don't close a channel if the channel has multiple concurrent senders.")])]),t._v(" "),e("p",[t._v("不要从一个 receiver 侧关闭 channel，也不要在有多个 sender 时，关闭 channel。")]),t._v(" "),e("p",[t._v("比较好理解，向 channel 发送元素的就是 sender，因此 sender 可以决定何时不发送数据，并且关闭 channel。但是如果有多个 sender，某个 sender 同样没法确定其他 sender 的情况，这时也不能贸然关闭 channel。")]),t._v(" "),e("p",[t._v("但是上面所说的并不是最本质的，最本质的原则就只有一条：")]),t._v(" "),e("blockquote",[e("p",[t._v("don't close (or send values to) closed channels.")])]),t._v(" "),e("p",[t._v("有两个不那么优雅地关闭 channel 的方法：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("使用 defer-recover 机制，放心大胆地关闭 channel 或者向 channel 发送数据。即使发生了 panic，有 defer-recover 在兜底。")])]),t._v(" "),e("li",[e("p",[t._v("使用 sync.Once 来保证只关闭一次。")])])]),t._v(" "),e("p",[t._v("那到底应该如何优雅地关闭 channel？")]),t._v(" "),e("p",[t._v("根据 sender 和 receiver 的个数，分下面几种情况：")]),t._v(" "),e("ol",[e("li",[t._v("一个 sender，一个 receiver")]),t._v(" "),e("li",[t._v("一个 sender， M 个 receiver")]),t._v(" "),e("li",[t._v("N 个 sender，一个 reciver")]),t._v(" "),e("li",[t._v("N 个 sender， M 个 receiver")])]),t._v(" "),e("p",[t._v("对于 1，2，只有一个 sender 的情况就不用说了，直接从 sender 端关闭就好了，没有问题。重点关注第 3，4 种情况。")]),t._v(" "),e("p",[t._v('第 3 种情形下，优雅关闭 channel 的方法是：the only receiver says "please stop sending more" by closing an additional signal channel。')]),t._v(" "),e("p",[t._v("解决方案就是增加一个传递关闭信号的 channel，receiver 通过信号 channel 下达关闭数据 channel 指令。senders 监听到关闭信号后，停止接收数据。代码如下：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('func main() {\n\trand.Seed(time.Now().UnixNano())\n\n\tconst Max = 100000\n\tconst NumSenders = 1000\n\n\tdataCh := make(chan int, 100)\n\tstopCh := make(chan struct{})\n\n\t// senders\n\tfor i := 0; i < NumSenders; i++ {\n\t\tgo func() {\n\t\t\tfor {\n\t\t\t\tselect {\n\t\t\t\tcase <- stopCh:\n\t\t\t\t\treturn\n\t\t\t\tcase dataCh <- rand.Intn(Max):\n\t\t\t\t}\n\t\t\t}\n\t\t}()\n\t}\n\n\t// the receiver\n\tgo func() {\n\t\tfor value := range dataCh {\n\t\t\tif value == Max-1 {\n\t\t\t\tfmt.Println("send stop signal to senders.")\n\t\t\t\tclose(stopCh)\n\t\t\t\treturn\n\t\t\t}\n\n\t\t\tfmt.Println(value)\n\t\t}\n\t}()\n\n\tselect {\n\tcase <- time.After(time.Hour):\n\t}\n}\n')])])]),e("p",[t._v("这里的 stopCh 就是信号 channel，它本身只有一个 sender，因此可以直接关闭它。senders 收到了关闭信号后，select 分支 “case <- stopCh” 被选中，退出函数，不再发送数据。")]),t._v(" "),e("p",[t._v("需要说明的是，上面的代码并没有明确关闭 dataCh。在 Go 语言中，对于一个 channel，如果最终没有任何 goroutine 引用它，不管 channel 有没有被关闭，最终都会被 gc 回收。所以，在这种情形下，所谓的优雅地关闭 channel 就是不关闭 channel，让 gc 代劳。")]),t._v(" "),e("p",[t._v('最后一种情况，优雅关闭 channel 的方法是：any one of them says "let\'s end the game" by notifying a moderator to close an additional signal channel。')]),t._v(" "),e("p",[t._v("和第 3 种情况不同，这里有 M 个 receiver，如果直接还是采取第 3 种解决方案，由 receiver 直接关闭 stopCh 的话，就会重复关闭一个 channel，导致 panic。因此需要增加一个中间人，M 个 receiver 都向它发送关闭 dataCh 的“请求”，中间人收到第一个请求后，就会直接下达关闭 dataCh 的指令（通过关闭 stopCh，这时就不会发生重复关闭的情况，因为 stopCh 的发送方只有中间人一个）。另外，这里的 N 个 sender 也可以向中间人发送关闭 dataCh 的请求。")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('func main() {\n\trand.Seed(time.Now().UnixNano())\n\n\tconst Max = 100000\n\tconst NumReceivers = 10\n\tconst NumSenders = 1000\n\n\tdataCh := make(chan int, 100)\n\tstopCh := make(chan struct{})\n\n\t// It must be a buffered channel.\n\ttoStop := make(chan string, 1)\n\n\tvar stoppedBy string\n\n\t// moderator\n\tgo func() {\n\t\tstoppedBy = <-toStop\n\t\tclose(stopCh)\n\t}()\n\n\t// senders\n\tfor i := 0; i < NumSenders; i++ {\n\t\tgo func(id string) {\n\t\t\tfor {\n\t\t\t\tvalue := rand.Intn(Max)\n\t\t\t\tif value == 0 {\n\t\t\t\t\tselect {\n\t\t\t\t\tcase toStop <- "sender#" + id:\n\t\t\t\t\tdefault:\n\t\t\t\t\t}\n\t\t\t\t\treturn\n\t\t\t\t}\n\n\t\t\t\tselect {\n\t\t\t\tcase <- stopCh:\n\t\t\t\t\treturn\n\t\t\t\tcase dataCh <- value:\n\t\t\t\t}\n\t\t\t}\n\t\t}(strconv.Itoa(i))\n\t}\n\n\t// receivers\n\tfor i := 0; i < NumReceivers; i++ {\n\t\tgo func(id string) {\n\t\t\tfor {\n\t\t\t\tselect {\n\t\t\t\tcase <- stopCh:\n\t\t\t\t\treturn\n\t\t\t\tcase value := <-dataCh:\n\t\t\t\t\tif value == Max-1 {\n\t\t\t\t\t\tselect {\n\t\t\t\t\t\tcase toStop <- "receiver#" + id:\n\t\t\t\t\t\tdefault:\n\t\t\t\t\t\t}\n\t\t\t\t\t\treturn\n\t\t\t\t\t}\n\n\t\t\t\t\tfmt.Println(value)\n\t\t\t\t}\n\t\t\t}\n\t\t}(strconv.Itoa(i))\n\t}\n\n\tselect {\n\tcase <- time.After(time.Hour):\n\t}\n\n}\n')])])]),e("p",[t._v("代码里 toStop 就是中间人的角色，使用它来接收 senders 和 receivers 发送过来的关闭 dataCh 请求。")]),t._v(" "),e("p",[t._v("这里将 toStop 声明成了一个 缓冲型的 channel。假设 toStop 声明的是一个非缓冲型的 channel，那么第一个发送的关闭 dataCh 请求可能会丢失。因为无论是 sender 还是 receiver 都是通过 select 语句来发送请求，如果中间人所在的 goroutine 没有准备好，那 select 语句就不会选中，直接走 default 选项，什么也不做。这样，第一个关闭 dataCh 的请求就会丢失。")]),t._v(" "),e("p",[t._v("如果，我们把 toStop 的容量声明成 Num(senders) + Num(receivers)，那发送 dataCh 请求的部分可以改成更简洁的形式：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('...\ntoStop := make(chan string, NumReceivers + NumSenders)\n...\n\t\t\tvalue := rand.Intn(Max)\n\t\t\tif value == 0 {\n\t\t\t\ttoStop <- "sender#" + id\n\t\t\t\treturn\n\t\t\t}\n...\n\t\t\t\tif value == Max-1 {\n\t\t\t\t\ttoStop <- "receiver#" + id\n\t\t\t\t\treturn\n\t\t\t\t}\n...\n')])])]),e("p",[t._v("直接向 toStop 发送请求，因为 toStop 容量足够大，所以不用担心阻塞，自然也就不用 select 语句再加一个 default case 来避免阻塞。")]),t._v(" "),e("p",[t._v("可以看到，这里同样没有真正关闭 dataCh，原样同第 3 种情况。")]),t._v(" "),e("p",[t._v("以上，就是最基本的一些情形，但已经能覆盖几乎所有的情况及其变种了。只要记住：")]),t._v(" "),e("blockquote",[e("p",[t._v("don't close a channel from the receiver side and don't close a channel if the channel has multiple concurrent senders.")])]),t._v(" "),e("p",[t._v("以及更本质的原则：")]),t._v(" "),e("blockquote",[e("p",[t._v("don't close (or send values to) closed channels.")])]),t._v(" "),e("h1",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("p",[t._v("https://go101.org/article/channel-closing.html")])])}),[],!1,null,null,null);n.default=s.exports}}]);