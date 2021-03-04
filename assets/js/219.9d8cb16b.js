(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{696:function(t,e,r){"use strict";r.r(e);var n=r(44),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_3-7-优雅的重启服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-优雅的重启服务"}},[t._v("#")]),t._v(" 3.7 优雅的重启服务")]),t._v(" "),r("p",[t._v("项目地址：https://github.com/EDDYCJY/go-gin-example")]),t._v(" "),r("h2",{attrs:{id:"知识点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[t._v("#")]),t._v(" 知识点")]),t._v(" "),r("ul",[r("li",[t._v("信号量的了解。")]),t._v(" "),r("li",[t._v("应用热更新。")])]),t._v(" "),r("h2",{attrs:{id:"本文目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本文目标"}},[t._v("#")]),t._v(" 本文目标")]),t._v(" "),r("p",[t._v("在前面编写案例代码时，我相信你会想到，每次更新完代码，更新完配置文件后，就直接这么 "),r("code",[t._v("ctrl+c")]),t._v(" 真的没问题吗，"),r("code",[t._v("ctrl+c")]),t._v("到底做了些什么事情呢？")]),t._v(" "),r("p",[t._v("在这一节中我们简单讲述 "),r("code",[t._v("ctrl+c")]),t._v(" 背后的"),r("strong",[t._v("信号")]),t._v("以及如何在"),r("code",[t._v("Gin")]),t._v("中"),r("strong",[t._v("优雅的重启服务")]),t._v("，也就是对 "),r("code",[t._v("HTTP")]),t._v(" 服务进行热更新。")]),t._v(" "),r("h2",{attrs:{id:"ctrl-c"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ctrl-c"}},[t._v("#")]),t._v(" ctrl + c")]),t._v(" "),r("blockquote",[r("p",[t._v("内核在某些情况下发送信号，比如在进程往一个已经关闭的管道写数据时会产生"),r("code",[t._v("SIGPIPE")]),t._v("信号")])]),t._v(" "),r("p",[t._v("在终端执行特定的组合键可以使系统发送特定的信号给此进程，完成一系列的动作")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("命令")]),t._v(" "),r("th",[t._v("信号")]),t._v(" "),r("th",[t._v("含义")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("ctrl + c")]),t._v(" "),r("td",[t._v("SIGINT")]),t._v(" "),r("td",[t._v("强制进程结束")])]),t._v(" "),r("tr",[r("td",[t._v("ctrl + z")]),t._v(" "),r("td",[t._v("SIGTSTP")]),t._v(" "),r("td",[t._v("任务中断，进程挂起")])]),t._v(" "),r("tr",[r("td",[t._v("ctrl + \\")]),t._v(" "),r("td",[t._v("SIGQUIT")]),t._v(" "),r("td",[t._v("进程结束 和 "),r("code",[t._v("dump core")])])]),t._v(" "),r("tr",[r("td",[t._v("ctrl + d")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("EOF")])]),t._v(" "),r("tr",[r("td"),t._v(" "),r("td",[t._v("SIGHUP")]),t._v(" "),r("td",[t._v("终止收到该信号的进程。若程序中没有捕捉该信号，当收到该信号时，进程就会退出（常用于 重启、重新加载进程）")])])])]),t._v(" "),r("p",[t._v("因此在我们执行"),r("code",[t._v("ctrl + c")]),t._v("关闭"),r("code",[t._v("gin")]),t._v("服务端时，"),r("strong",[t._v("会强制进程结束，导致正在访问的用户等出现问题")])]),t._v(" "),r("p",[t._v("常见的 "),r("code",[t._v("kill -9 pid")]),t._v(" 会发送 "),r("code",[t._v("SIGKILL")]),t._v(" 信号给进程，也是类似的结果")]),t._v(" "),r("h3",{attrs:{id:"信号"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#信号"}},[t._v("#")]),t._v(" 信号")]),t._v(" "),r("p",[t._v("本段中反复出现"),r("strong",[t._v("信号")]),t._v("是什么呢？")]),t._v(" "),r("p",[t._v("信号是 "),r("code",[t._v("Unix")]),t._v(" 、类 "),r("code",[t._v("Unix")]),t._v(" 以及其他 "),r("code",[t._v("POSIX")]),t._v(" 兼容的操作系统中进程间通讯的一种有限制的方式")]),t._v(" "),r("p",[t._v("它是一种异步的通知机制，用来提醒进程一个事件（硬件异常、程序执行异常、外部发出信号）已经发生。当一个信号发送给一个进程，操作系统中断了进程正常的控制流程。此时，任何非原子操作都将被中断。如果进程定义了信号的处理函数，那么它将被执行，否则就执行默认的处理函数")]),t._v(" "),r("h3",{attrs:{id:"所有信号"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#所有信号"}},[t._v("#")]),t._v(" 所有信号")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ kill -l\n 1) SIGHUP\t 2) SIGINT\t 3) SIGQUIT\t 4) SIGILL\t 5) SIGTRAP\n 6) SIGABRT\t 7) SIGBUS\t 8) SIGFPE\t 9) SIGKILL\t10) SIGUSR1\n11) SIGSEGV\t12) SIGUSR2\t13) SIGPIPE\t14) SIGALRM\t15) SIGTERM\n16) SIGSTKFLT\t17) SIGCHLD\t18) SIGCONT\t19) SIGSTOP\t20) SIGTSTP\n21) SIGTTIN\t22) SIGTTOU\t23) SIGURG\t24) SIGXCPU\t25) SIGXFSZ\n26) SIGVTALRM\t27) SIGPROF\t28) SIGWINCH\t29) SIGIO\t30) SIGPWR\n31) SIGSYS\t34) SIGRTMIN\t35) SIGRTMIN+1\t36) SIGRTMIN+2\t37) SIGRTMIN+3\n38) SIGRTMIN+4\t39) SIGRTMIN+5\t40) SIGRTMIN+6\t41) SIGRTMIN+7\t42) SIGRTMIN+8\n43) SIGRTMIN+9\t44) SIGRTMIN+10\t45) SIGRTMIN+11\t46) SIGRTMIN+12\t47) SIGRTMIN+13\n48) SIGRTMIN+14\t49) SIGRTMIN+15\t50) SIGRTMAX-14\t51) SIGRTMAX-13\t52) SIGRTMAX-12\n53) SIGRTMAX-11\t54) SIGRTMAX-10\t55) SIGRTMAX-9\t56) SIGRTMAX-8\t57) SIGRTMAX-7\n58) SIGRTMAX-6\t59) SIGRTMAX-5\t60) SIGRTMAX-4\t61) SIGRTMAX-3\t62) SIGRTMAX-2\n63) SIGRTMAX-1\t64) SIGRTMAX\n")])])]),r("h2",{attrs:{id:"怎样算优雅"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#怎样算优雅"}},[t._v("#")]),t._v(" 怎样算优雅")]),t._v(" "),r("h3",{attrs:{id:"目的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目的"}},[t._v("#")]),t._v(" 目的")]),t._v(" "),r("ul",[r("li",[t._v("不关闭现有连接（正在运行中的程序）")]),t._v(" "),r("li",[t._v("新的进程启动并替代旧进程")]),t._v(" "),r("li",[t._v("新的进程接管新的连接")]),t._v(" "),r("li",[t._v("连接要随时响应用户的请求，当用户仍在请求旧进程时要保持连接，新用户应请求新进程，不可以出现拒绝请求的情况")])]),t._v(" "),r("h3",{attrs:{id:"流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[t._v("#")]),t._v(" 流程")]),t._v(" "),r("p",[t._v("1、替换可执行文件或修改配置文件")]),t._v(" "),r("p",[t._v("2、发送信号量 "),r("code",[t._v("SIGHUP")])]),t._v(" "),r("p",[t._v("3、拒绝新连接请求旧进程，但要保证已有连接正常")]),t._v(" "),r("p",[t._v("4、启动新的子进程")]),t._v(" "),r("p",[t._v("5、新的子进程开始 "),r("code",[t._v("Accet")])]),t._v(" "),r("p",[t._v("6、系统将新的请求转交新的子进程")]),t._v(" "),r("p",[t._v("7、旧进程处理完所有旧连接后正常结束")]),t._v(" "),r("h2",{attrs:{id:"实现优雅重启"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现优雅重启"}},[t._v("#")]),t._v(" 实现优雅重启")]),t._v(" "),r("h3",{attrs:{id:"endless"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#endless"}},[t._v("#")]),t._v(" endless")]),t._v(" "),r("blockquote",[r("p",[t._v("Zero downtime restarts for golang HTTP and HTTPS servers. (for golang 1.3+)")])]),t._v(" "),r("p",[t._v("我们借助 "),r("a",{attrs:{href:"https://github.com/fvbock/endless",target:"_blank",rel:"noopener noreferrer"}},[t._v("fvbock/endless"),r("OutboundLink")],1),t._v(" 来实现 "),r("code",[t._v("Golang HTTP/HTTPS")]),t._v(" 服务重新启动的零停机")]),t._v(" "),r("p",[r("code",[t._v("endless server")]),t._v(" 监听以下几种信号量：")]),t._v(" "),r("ul",[r("li",[t._v("syscall.SIGHUP：触发 "),r("code",[t._v("fork")]),t._v(" 子进程和重新启动")]),t._v(" "),r("li",[t._v("syscall.SIGUSR1/syscall.SIGTSTP：被监听，但不会触发任何动作")]),t._v(" "),r("li",[t._v("syscall.SIGUSR2：触发 "),r("code",[t._v("hammerTime")])]),t._v(" "),r("li",[t._v("syscall.SIGINT/syscall.SIGTERM：触发服务器关闭（会完成正在运行的请求）")])]),t._v(" "),r("p",[r("code",[t._v("endless")]),t._v(" 正正是依靠监听这些"),r("strong",[t._v("信号量")]),t._v("，完成管控的一系列动作")]),t._v(" "),r("h4",{attrs:{id:"安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("go get -u github.com/fvbock/endless\n")])])]),r("h4",{attrs:{id:"编写"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编写"}},[t._v("#")]),t._v(" 编写")]),t._v(" "),r("p",[t._v("打开 "),r("a",{attrs:{href:"https://github.com/EDDYCJY/go-gin-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("gin-blog"),r("OutboundLink")],1),t._v(" 的 "),r("code",[t._v("main.go")]),t._v("文件，修改文件：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('package main\n\nimport (\n    "fmt"\n    "log"\n    "syscall"\n\n    "github.com/fvbock/endless"\n\n    "gin-blog/routers"\n    "gin-blog/pkg/setting"\n)\n\nfunc main() {\n    endless.DefaultReadTimeOut = setting.ReadTimeout\n    endless.DefaultWriteTimeOut = setting.WriteTimeout\n    endless.DefaultMaxHeaderBytes = 1 << 20\n    endPoint := fmt.Sprintf(":%d", setting.HTTPPort)\n\n    server := endless.NewServer(endPoint, routers.InitRouter())\n    server.BeforeBegin = func(add string) {\n        log.Printf("Actual pid is %d", syscall.Getpid())\n    }\n\n    err := server.ListenAndServe()\n    if err != nil {\n        log.Printf("Server err: %v", err)\n    }\n}\n')])])]),r("p",[r("code",[t._v("endless.NewServer")]),t._v(" 返回一个初始化的 "),r("code",[t._v("endlessServer")]),t._v(" 对象，在 "),r("code",[t._v("BeforeBegin")]),t._v(" 时输出当前进程的 "),r("code",[t._v("pid")]),t._v("，调用 "),r("code",[t._v("ListenAndServe")]),t._v(" 将实际“启动”服务")]),t._v(" "),r("h4",{attrs:{id:"验证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[t._v("#")]),t._v(" 验证")]),t._v(" "),r("h5",{attrs:{id:"编译"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[t._v("#")]),t._v(" "),r("strong",[t._v("编译")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ go build main.go \n")])])]),r("h5",{attrs:{id:"执行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#执行"}},[t._v("#")]),t._v(" "),r("strong",[t._v("执行")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('$ ./main\n[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.\n...\nActual pid is 48601\n')])])]),r("p",[t._v("启动成功后，输出了"),r("code",[t._v("pid")]),t._v("为 48601；在另外一个终端执行 "),r("code",[t._v("kill -1 48601")]),t._v(" ，检验先前服务的终端效果")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('[root@localhost go-gin-example]# ./main\n[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.\n - using env:\texport GIN_MODE=release\n - using code:\tgin.SetMode(gin.ReleaseMode)\n\n[GIN-debug] GET    /auth                     --\x3e ...\n[GIN-debug] GET    /api/v1/tags              --\x3e ...\n...\n\nActual pid is 48601\n\n...\n\nActual pid is 48755\n48601 Received SIGTERM.\n48601 [::]:8000 Listener closed.\n48601 Waiting for connections to finish...\n48601 Serve() returning...\nServer err: accept tcp [::]:8000: use of closed network connection\n')])])]),r("p",[t._v("可以看到该命令已经挂起，并且 "),r("code",[t._v("fork")]),t._v(" 了新的子进程 "),r("code",[t._v("pid")]),t._v(" 为 "),r("code",[t._v("48755")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("48601 Received SIGTERM.\n48601 [::]:8000 Listener closed.\n48601 Waiting for connections to finish...\n48601 Serve() returning...\nServer err: accept tcp [::]:8000: use of closed network connection\n")])])]),r("p",[t._v("大致意思为主进程（"),r("code",[t._v("pid")]),t._v("为48601）接受到 "),r("code",[t._v("SIGTERM")]),t._v(" 信号量，关闭主进程的监听并且等待正在执行的请求完成；这与我们先前的描述一致")]),t._v(" "),r("h5",{attrs:{id:"唤醒"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#唤醒"}},[t._v("#")]),t._v(" "),r("strong",[t._v("唤醒")])]),t._v(" "),r("p",[t._v("这时候在 "),r("code",[t._v("postman")]),t._v(" 上再次访问我们的接口，你可以惊喜的发现，他“复活”了！")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("Actual pid is 48755\n48601 Received SIGTERM.\n48601 [::]:8000 Listener closed.\n48601 Waiting for connections to finish...\n48601 Serve() returning...\nServer err: accept tcp [::]:8000: use of closed network connection\n\n\n$ [GIN] 2018/03/15 - 13:00:16 | 200 |     188.096µs |   192.168.111.1 | GET      /api/v1/tags...\n\n")])])]),r("p",[t._v("这就完成了一次正向的流转了")]),t._v(" "),r("p",[t._v("你想想，每次更新发布、或者修改配置文件等，只需要给该进程发送"),r("strong",[t._v("SIGTERM信号")]),t._v("，而不需要强制结束应用，是多么便捷又安全的事！")]),t._v(" "),r("h4",{attrs:{id:"问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),r("p",[r("code",[t._v("endless")]),t._v(" 热更新是采取创建子进程后，将原进程退出的方式，这点不符合守护进程的要求")]),t._v(" "),r("h3",{attrs:{id:"http-server-shutdown"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-server-shutdown"}},[t._v("#")]),t._v(" http.Server - Shutdown()")]),t._v(" "),r("p",[t._v("如果你的"),r("code",[t._v("Golang >= 1.8")]),t._v("，也可以考虑使用 "),r("code",[t._v("http.Server")]),t._v(" 的 "),r("a",{attrs:{href:"https://golang.org/pkg/net/http/#Server.Shutdown",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shutdown"),r("OutboundLink")],1),t._v(" 方法")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('package main\n\nimport (\n\t"fmt"\n\t"net/http"\n    "context"\n    "log"\n    "os"\n    "os/signal"\n    "time"\n\n\n\t"gin-blog/routers"\n\t"gin-blog/pkg/setting"\n)\n\nfunc main() {\n\trouter := routers.InitRouter()\n\n\ts := &http.Server{\n\t\tAddr:           fmt.Sprintf(":%d", setting.HTTPPort),\n\t\tHandler:        router,\n\t\tReadTimeout:    setting.ReadTimeout,\n\t\tWriteTimeout:   setting.WriteTimeout,\n\t\tMaxHeaderBytes: 1 << 20,\n\t}\n\n    go func() {\n        if err := s.ListenAndServe(); err != nil {\n            log.Printf("Listen: %s\\n", err)\n        }\n    }()\n\t\n    quit := make(chan os.Signal)\n    signal.Notify(quit, os.Interrupt)\n    <- quit\n\n    log.Println("Shutdown Server ...")\n\n    ctx, cancel := context.WithTimeout(context.Background(), 5 * time.Second)\n    defer cancel()\n    if err := s.Shutdown(ctx); err != nil {\n        log.Fatal("Server Shutdown:", err)\n    }\n\n    log.Println("Server exiting")\n}\n')])])]),r("h2",{attrs:{id:"小结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),r("p",[t._v("在日常的服务中，优雅的重启（热更新）是非常重要的一环。而 "),r("code",[t._v("Golang")]),t._v(" 在 "),r("code",[t._v("HTTP")]),t._v(" 服务方面的热更新也有不少方案了，我们应该根据实际应用场景挑选最合适的")]),t._v(" "),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),r("h3",{attrs:{id:"本系列示例代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本系列示例代码"}},[t._v("#")]),t._v(" 本系列示例代码")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/EDDYCJY/go-gin-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-gin-example"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"拓展阅读"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#拓展阅读"}},[t._v("#")]),t._v(" 拓展阅读")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/braintree/manners",target:"_blank",rel:"noopener noreferrer"}},[t._v("manners"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/tylerb/graceful",target:"_blank",rel:"noopener noreferrer"}},[t._v("graceful"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/facebookgo/grace",target:"_blank",rel:"noopener noreferrer"}},[t._v("grace"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/golang/go/commit/0cbb12f0bbaeb3893b3d011fdb1a270291747ab0",target:"_blank",rel:"noopener noreferrer"}},[t._v("plugin: new package for loading plugins · golang/go@0cbb12f · GitHub"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"关于"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[t._v("#")]),t._v(" 关于")]),t._v(" "),r("h3",{attrs:{id:"修改记录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#修改记录"}},[t._v("#")]),t._v(" 修改记录")]),t._v(" "),r("ul",[r("li",[t._v("第一版：2018年02月16日发布文章")]),t._v(" "),r("li",[t._v("第二版：2019年10月01日修改文章")])]),t._v(" "),r("h2",{attrs:{id:"？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#？"}},[t._v("#")]),t._v(" ？")]),t._v(" "),r("p",[t._v("如果有任何疑问或错误，欢迎在 "),r("a",{attrs:{href:"https://github.com/EDDYCJY/blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("issues"),r("OutboundLink")],1),t._v(" 进行提问或给予修正意见，如果喜欢或对你有所帮助，欢迎 Star，对作者是一种鼓励和推进。")]),t._v(" "),r("h3",{attrs:{id:"我的公众号"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#我的公众号"}},[t._v("#")]),t._v(" 我的公众号")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://image.eddycjy.com/8d0b0c3a11e74efd5fdfd7910257e70b.jpg",alt:"image"}})])])}),[],!1,null,null,null);e.default=a.exports}}]);