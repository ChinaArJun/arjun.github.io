(window.webpackJsonp=window.webpackJsonp||[]).push([[737],{1193:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("标记全链路日志有助于更好的解决 bug 和分析接口性能，本篇文章使用 "),a("code",[t._v("node")]),t._v(" 来作为示例")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/ChinaArJun/apollo-server-starter/blob/master/lib/logger.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码示例"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.zhequtao.com/post/requestid-and-tracing/",target:"_blank",rel:"noopener noreferrer"}},[t._v("本文地址"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/arjun/blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"当一个请求到来时，会产生哪些日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#当一个请求到来时，会产生哪些日志"}},[t._v("#")]),t._v(" 当一个请求到来时，会产生哪些日志")]),t._v(" "),a("ul",[a("li",[t._v("本次请求报文")]),t._v(" "),a("li",[t._v("本次请求涉及到的数据库操作")]),t._v(" "),a("li",[t._v("本次请求涉及到的缓存操作")]),t._v(" "),a("li",[t._v("本次请求涉及到的服务请求")]),t._v(" "),a("li",[t._v("本次请求所遭遇的异常")]),t._v(" "),a("li",[t._v("本次请求执行的关键函数")]),t._v(" "),a("li",[t._v("本次请求所对应的响应体")])]),t._v(" "),a("h2",{attrs:{id:"如何查询本次从请求到响应全链路的所有日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何查询本次从请求到响应全链路的所有日志"}},[t._v("#")]),t._v(" 如何查询本次从请求到响应全链路的所有日志")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("requestId")]),t._v(" 唯一标识每个请求，有时它又被称为 "),a("code",[t._v("sessionId")]),t._v(" 或者 "),a("code",[t._v("transactionId")]),t._v("。")]),t._v(" "),a("ol",[a("li",[t._v("使用 "),a("code",[t._v("requestId")]),t._v(" 标记每次请求全链路日志，所要标记的日志种类如上所示")]),t._v(" "),a("li",[t._v("通过把 "),a("code",[t._v("X-Request-Id")]),t._v(" (X-Session-Id) 标记在请求头中，在整个链路进行传递")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("context")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" KoaContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" requestId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-request-id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uuid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'requestId'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" requestId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" requestId\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/todos/:id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findByPk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("logging")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// log ctx.requestId")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"如何以侵入性更小的方式来标记每次请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何以侵入性更小的方式来标记每次请求"}},[t._v("#")]),t._v(" 如何以侵入性更小的方式来标记每次请求")]),t._v(" "),a("p",[t._v("如上，在每次数据库查询时手动对 "),a("code",[t._v("requestId")]),t._v(" 进行标记过于繁琐。可以统一设计 "),a("code",[t._v("logger")]),t._v(" 函数进行标记")]),t._v(" "),a("p",[t._v("具体代码可见我一个脚手架中的 "),a("a",{attrs:{href:"https://github.com/ChinaArJun/apollo-server-starter/blob/master/lib/logger.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("logger.ts"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("这里使用了流行的日志库 "),a("a",{attrs:{href:"https://github.com/winstonjs/winston",target:"_blank",rel:"noopener noreferrer"}},[t._v("winston (13582 Star)"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" winston"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" format "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'winston'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" requestId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'requestId'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" info\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" logger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" winston"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createLogger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  format"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("combine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timestamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"如何在-logger-ts-中绑定-requestid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何在-logger-ts-中绑定-requestid"}},[t._v("#")]),t._v(" 如何在 logger.ts 中绑定 requestId")]),t._v(" "),a("p",[t._v("或者说如何在 "),a("code",[t._v("logger.ts")]),t._v(" 如何获得整个请求响应生命周期中的 "),a("code",[t._v("requestId")])]),t._v(" "),a("ul",[a("li",[t._v("通过 "),a("a",{attrs:{href:"https://github.com/nodejs/node/blob/master/doc/api/async_hooks.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("async_hooks"),a("OutboundLink")],1),t._v(" 可以追踪异步行为的生命周期")]),t._v(" "),a("li",[t._v("通过 "),a("a",{attrs:{href:"https://github.com/Jeff-Lewis/cls-hooked",target:"_blank",rel:"noopener noreferrer"}},[t._v("cls-hooked"),a("OutboundLink")],1),t._v(" 可以获得每次异步请求的 requestId")])]),t._v(" "),a("p",[t._v("具体代码可见 "),a("a",{attrs:{href:"https://github.com/ChinaArJun/apollo-server-starter/blob/master/lib/session.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("session.ts"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createNamespace "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cls-hooked'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" session "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createNamespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello, world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" session "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"如何从全链路日志中得益"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何从全链路日志中得益"}},[t._v("#")]),t._v(" 如何从全链路日志中得益")]),t._v(" "),a("ol",[a("li",[t._v("当 "),a("code",[t._v("sentry")]),t._v(" (警报系统) 中收到一条异常警报时，通过 "),a("code",[t._v("requestId")]),t._v(" 可以在 "),a("code",[t._v("elk")]),t._v(" (日志系统) 中获取到关于该异常的所有关键日志 (sql, redis, 关键函数的输入输出)")]),t._v(" "),a("li",[t._v("当客户端一条请求过慢时，通过请求头获取到的 "),a("code",[t._v("requestId")]),t._v(" 可以在 "),a("code",[t._v("elk")]),t._v(" 中分析该请求的所有数据库查询时间，请求响应时间，缓存是否命中等指标")]),t._v(" "),a("li",[t._v("查找 API 对应执行的 SQL 语句以及条数，判断是否有冗余 SQL 语句的查询")])]),t._v(" "),a("p",[t._v("另外可以通过 "),a("a",{attrs:{href:"https://zipkin.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("zipkin"),a("OutboundLink")],1),t._v(" 来追踪全链路耗时。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("欢迎关注我的公众号"),a("strong",[t._v("中关村程序员")]),t._v("，在这里记录着我的技术成长，欢迎交流")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://blog.zhequtao.com/qrcode.jpg",alt:"欢迎关注公众号中关村程序员，在这里记录我的技术成长，欢迎交流"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);