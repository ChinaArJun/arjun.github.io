(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{667:function(t,e,r){"use strict";r.r(e);var a=r(44),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_5-4-grpc-grpc-gateway-能不能不用证书？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-grpc-grpc-gateway-能不能不用证书？"}},[t._v("#")]),t._v(" 5.4 gRPC+gRPC Gateway 能不能不用证书？")]),t._v(" "),r("p",[t._v("如果你以前有涉猎过 gRPC+gRPC Gateway 这两个组件，你肯定会遇到这个问题，就是 "),r("strong",[t._v("“为什么非得开 TLS，才能够实现同端口双流量，能不能不开？”")]),t._v(" 又或是 "),r("strong",[t._v("“我不想用证书就实现这些功能，行不行？”")]),t._v("。我被无数的人问过无数次这些问题，也说服过很多人，但说服归说服，不代表放弃。前年不行，不代表今年不行，在今天我希望分享来龙去脉和具体的实现方式给你。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.imgur.com/cjLNsWj.png",alt:"image"}})]),t._v(" "),r("h2",{attrs:{id:"过去"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#过去"}},[t._v("#")]),t._v(" 过去")]),t._v(" "),r("h3",{attrs:{id:"为什么-h2-不行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么-h2-不行"}},[t._v("#")]),t._v(" 为什么 h2 不行")]),t._v(" "),r("p",[t._v("因为 "),r("code",[t._v("net/http2")]),t._v(' 仅支持 "h2" 标识，而 "h2" 标识 HTTP/2 必须使用传输层安全性（TLS）的协议，此标识符用于 TLS 应用层协议协商字段以及识别 HTTP/2 over TLS。')]),t._v(" "),r("p",[t._v("简单来讲，也就 "),r("code",[t._v("net/http2")]),t._v(" 必须使用 TLS 来交互。通俗来讲就要用证书，那么理所当然，也就无法支持非 TLS 的情况了。")]),t._v(" "),r("h3",{attrs:{id:"寻找-h2c"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#寻找-h2c"}},[t._v("#")]),t._v(" 寻找 h2c")]),t._v(" "),r("p",[t._v('那这条路不行，我们再想想别的路？那就是 HTTP/2 规范中的 "h2c" 标识了，"h2c" 标识允许通过明文 TCP 运行 HTTP/2 的协议，此标识符用于 HTTP/1.1 升级标头字段以及标识 HTTP/2 over TCP。')]),t._v(" "),r("p",[t._v("但是这条路，早在 2015 年就已经有在 "),r("a",{attrs:{href:"https://github.com/golang/go/issues/13128#issuecomment-153193762",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),r("OutboundLink")],1),t._v(" 中进行讨论，当时 @bradfitz 明确表示 “不打算支持 h2c，对仅支持 TLS 的情况非常满意，一年后再问我一次”，原文回复如下：")]),t._v(" "),r("blockquote",[r("p",[t._v("We do not plan to support h2c. I don't want to receive bug reports from users who get bitten by transparent proxies messing with h2c. Also, until there's widespread browser support, it's not interesting. I am also not interested in being the chicken or the egg to get browser support going. I'm very happy with the TLS-only situation, and things like https://LetsEncrypt.org/ will make TLS much easier (and automatic) soon.")])]),t._v(" "),r("blockquote",[r("p",[t._v("Ask me again in one year.")])]),t._v(" "),r("h3",{attrs:{id:"琢磨其他方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#琢磨其他方式"}},[t._v("#")]),t._v(" 琢磨其他方式")]),t._v(" "),r("h4",{attrs:{id:"使用-cmux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-cmux"}},[t._v("#")]),t._v(" 使用 cmux")]),t._v(" "),r("p",[t._v("基于多路复用器 "),r("a",{attrs:{href:"https://github.com/soheilhy/cmux",target:"_blank",rel:"noopener noreferrer"}},[t._v("soheilhy/cmux"),r("OutboundLink")],1),t._v(" 的另类实现 "),r("a",{attrs:{href:"https://github.com/Stoakes/grpc-gateway-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stoakes/grpc-gateway-example"),r("OutboundLink")],1),t._v("。若对 "),r("code",[t._v("cmux")]),t._v(" 的实现方式感兴趣，还可以看看 "),r("a",{attrs:{href:"https://blog.dgraph.io/post/cmux/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Golang: Run multiple services on one port》"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h4",{attrs:{id:"使用第三方-h2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用第三方-h2"}},[t._v("#")]),t._v(" 使用第三方 h2")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/veqryn/h2c",target:"_blank",rel:"noopener noreferrer"}},[t._v("veqryn/h2c"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("这种属于自己实现了 h2c 的逻辑，以此达到效果。")]),t._v(" "),r("h2",{attrs:{id:"现在"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#现在"}},[t._v("#")]),t._v(" 现在")]),t._v(" "),r("p",[t._v('经过社区的不断讨论，最后在 2018 年 6 月，代表 "h2c" 标志的 '),r("code",[t._v("golang.org/x/net/http2/h2c")]),t._v(" 标准库正式合并进来，自此我们就可以使用官方标准库（h2c），这个标准库实现了 HTTP/2 的未加密模式，因此我们就可以利用该标准库在同个端口上既提供 HTTP/1.1 又提供 HTTP/2 的功能了。")]),t._v(" "),r("h3",{attrs:{id:"使用标准库-h2c"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用标准库-h2c"}},[t._v("#")]),t._v(" 使用标准库 h2c")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('import (\n\t...\n\n\t"golang.org/x/net/http2"\n\t"golang.org/x/net/http2/h2c"\n\t"google.golang.org/grpc"\n\n\t"github.com/grpc-ecosystem/grpc-gateway/runtime"\n\n\tpb "github.com/EDDYCJY/go-grpc-example/proto"\n)\n\n...\n\nfunc grpcHandlerFunc(grpcServer *grpc.Server, otherHandler http.Handler) http.Handler {\n\treturn h2c.NewHandler(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n\t\tif r.ProtoMajor == 2 && strings.Contains(r.Header.Get("Content-Type"), "application/grpc") {\n\t\t\tgrpcServer.ServeHTTP(w, r)\n\t\t} else {\n\t\t\totherHandler.ServeHTTP(w, r)\n\t\t}\n\t}), &http2.Server{})\n}\n\nfunc main() {\n\tserver := grpc.NewServer()\n\n\tpb.RegisterSearchServiceServer(server, &SearchService{})\n\n\tmux := http.NewServeMux()\n\tgwmux := runtime.NewServeMux()\n\tdopts := []grpc.DialOption{grpc.WithInsecure()}\n\n\terr := pb.RegisterSearchServiceHandlerFromEndpoint(context.Background(), gwmux, "localhost:"+PORT, dopts)\n\t...\n\tmux.Handle("/", gwmux)\n\thttp.ListenAndServe(":"+PORT, grpcHandlerFunc(server, mux))\n}\n')])])]),r("p",[t._v("我们可以看到关键之处在于调用了 "),r("code",[t._v("h2c.NewHandler")]),t._v(" 方法进行了特殊处理，"),r("code",[t._v("h2c.NewHandler")]),t._v(" 会返回一个 "),r("code",[t._v("http.handler")]),t._v("，主要的内部逻辑是拦截了所有 "),r("code",[t._v("h2c")]),t._v(" 流量，然后根据不同的请求流量类型将其劫持并重定向到相应的 "),r("code",[t._v("Hander")]),t._v(" 中去处理。")]),t._v(" "),r("h3",{attrs:{id:"验证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[t._v("#")]),t._v(" 验证")]),t._v(" "),r("h4",{attrs:{id:"http-1-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1"}},[t._v("#")]),t._v(" HTTP/1.1")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('$ curl -X GET \'http://127.0.0.1:9005/search?request=EDDYCJY\'\n{"response":"EDDYCJY"}\n')])])]),r("h4",{attrs:{id:"http-2-grpc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-2-grpc"}},[t._v("#")]),t._v(" HTTP/2(gRPC)")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('...\nfunc main() {\n\tconn, err := grpc.Dial(":"+PORT, grpc.WithInsecure())\n\t...\n\tclient := pb.NewSearchServiceClient(conn)\n\tresp, err := client.Search(context.Background(), &pb.SearchRequest{\n\t\tRequest: "gRPC",\n\t})\n}\n')])])]),r("p",[t._v("输出结果：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ go run main.go\n2019/06/21 20:04:09 resp: gRPC h2c Server\n")])])]),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),r("p",[t._v("在本文中我介绍了大致的前因后果，且介绍了几种解决方法，我建议你选择官方的 "),r("code",[t._v("h2c")]),t._v(" 标准库去实现这个功能，也简单。在最后，不管你是否曾经为这个问题烦恼过许久，又或者正在纠结，都希望这篇文章能够帮到你。")]),t._v(" "),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),r("ul",[r("li",[t._v("https://github.com/golang/go/issues/13128")]),t._v(" "),r("li",[t._v("https://github.com/golang/go/issues/14141")]),t._v(" "),r("li",[t._v("https://github.com/golang/net/commit/c4299a1a0d8524c11563db160fbf9bddbceadb21")]),t._v(" "),r("li",[t._v("https://go-review.googlesource.com/c/net/+/112997/")])])])}),[],!1,null,null,null);e.default=n.exports}}]);