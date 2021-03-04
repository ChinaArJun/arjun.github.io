(window.webpackJsonp=window.webpackJsonp||[]).push([[648],{1101:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"使用-jq-与-sed-制作掘金面试文章榜单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-jq-与-sed-制作掘金面试文章榜单"}},[t._v("#")]),t._v(" 使用 jq 与 sed 制作掘金面试文章榜单")]),t._v(" "),a("p",[t._v("月: 听说你这次分享 "),a("code",[t._v("jq")]),a("br"),t._v("\n我: 恩，是了"),a("br"),t._v("\n月：这有啥好分享的，现在大家都用 react/vue 了"),a("br"),t._v("\n我: ......"),a("br"),t._v("\n我: 给你官网链接 "),a("a",{attrs:{href:"https://github.com/stedolan/jq",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/stedolan/jq"),a("OutboundLink")],1),a("br"),t._v("\n月: 原来是命令行下的 json 美化工具，好像也没啥可分享的"),a("br"),t._v("\n我: ......"),a("br"),t._v("\n我: 可以用它分析 "),a("code",[t._v("nginx")]),t._v(" 的日志，比如用 "),a("code",[t._v("json")]),t._v(" 表示 "),a("code",[t._v("nginx")]),t._v(" 的日志"),a("br"),t._v("\n月: 线上的ELK它不好用吗？还是分布式的，又有索引，还快，就连查询语句都有自动补全"),a("br"),t._v("\n我: 好像有点道理..."),a("br"),t._v("\n我: 我还可以用它做爬虫！！！")]),t._v(" "),a("p",[t._v("谨以此篇文章讲述 "),a("code",[t._v("jq")]),t._v(" 的实际使用案例，如果能提高你使用命令行的乐趣那更再好不过了。关于 "),a("code",[t._v("jq")]),t._v(" 的用法可以参考我以前的文章: "),a("a",{attrs:{href:"https://github.com/ChinaArJun/op-note/blob/master/jq.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("jq命令详解及示例"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("原文地址: "),a("a",{attrs:{href:"https://github.com/ChinaArJun/op-note/blob/master/jq-sed-case.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 jq 与 sed 制作掘金面试文章榜单"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("系列文章: "),a("a",{attrs:{href:"https://github.com/ChinaArJun/op-note",target:"_blank",rel:"noopener noreferrer"}},[t._v("个人服务器运维指南"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"预览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预览"}},[t._v("#")]),t._v(" 预览")]),t._v(" "),a("p",[t._v("使用以下命令，可以直接获取前端面试榜单")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://web-api.juejin.im/query'")]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'X-Agent: Juejin/Web'")]),t._v(" --data-binary "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"operationName":"","query":"","variables":{"tags":["55979fe6e4b08a686ce562fe"],"category":"5562b415e4b00c57d9b94ac8","first":100,"after":"","order":"HOTTEST"},"extensions":{"query":{"id":"653b587c5c7c8a00ddf67fc66f989d42"}}}\'')]),t._v(" --compressed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n jq -c "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.data.articleFeed.items.edges | .[].node | { likeCount, title, originalUrl } | select(.likeCount > 600) '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq -cs "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'. | sort_by(-.likeCount) | .[] | \"+ 【👍 \\(.likeCount)】[\\(.title)](\\(.originalUrl))\"'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" s/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"//g\n\n+ 【👍 '),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5059")]),t._v("】"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("一个合格"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("优秀"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("的前端都应该阅读这些文章"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https://juejin.im/post/5d387f696fb9a07eeb13ea60"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n+ 【👍 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4695")]),t._v("】"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v("前端面试总结，看完弄懂，工资少说加3K "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 掘金技术征文"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https://juejin.im/post/5b94d8965188255c5a0cdc02"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n+ 【👍 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4425")]),t._v("】"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("中高级前端大厂面试秘籍，为你保驾护航金三银四，直通大厂"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("上"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https://juejin.im/post/5c64d15d6fb9a049d37f9c20"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n+ 【👍 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3013")]),t._v("】"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v("春招前端面试: 闯关记"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("精排精校"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 掘金技术征文"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https://juejin.im/post/5a998991f265da237f1dbdf9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n+ 【👍 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2493")]),t._v("】"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("前端面试考点多？看这些文章就够了（2019年6月更新版）"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https://juejin.im/post/5aae076d6fb9a028cc6100a9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"获取掘金列表接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取掘金列表接口"}},[t._v("#")]),t._v(" 获取掘金列表接口")]),t._v(" "),a("p",[t._v("先来看看 http 的 url: "),a("code",[t._v("https://web-api.juejin.im/query")]),t._v("，用的 "),a("code",[t._v("POST")])]),t._v(" "),a("p",[t._v("再看看 body:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"operationName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"query"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"variables"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"first"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"after"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0168277174789"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"order"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"POPULAR"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extensions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"query"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"21207e9ddb1de777adeaca7a2fb38030"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("最后再看看 http 的 response:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ChinaArJun/blog/master/assets/response.jpg",alt:"response"}})]),t._v(" "),a("p",[t._v("眼前一亮，多么熟悉的数据结构！！!")]),t._v(" "),a("p",[t._v("这不是 "),a("code",[t._v("graphql")]),t._v(" 吗，我上个月(2019/10)还写了一系列文章介绍它: "),a("a",{attrs:{href:"https://github.com/ChinaArJun/graphql-guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 graphql 构建 web 应用"),a("OutboundLink")],1),t._v("，一年前(2018)还用 "),a("code",[t._v("graphql")]),t._v(" 写了一套诗词的前后端: "),a("a",{attrs:{href:"https://github.com/ChinaArJun/shici",target:"_blank",rel:"noopener noreferrer"}},[t._v("ChinaArJun/shici"),a("OutboundLink")],1),t._v(" 与 "),a("a",{attrs:{href:"https://github.com/ChinaArJun/apollo-server-starter",target:"_blank",rel:"noopener noreferrer"}},[t._v("ChinaArJun/shici-server"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("怎么看出来是 "),a("code",[t._v("graphql")]),t._v(" 的呢？")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("/query")]),t._v(" 这是统一的入口")]),t._v(" "),a("li",[a("code",[t._v("extensions.query.id")]),t._v(" 这是 "),a("code",[t._v("APQ")]),t._v("，为了缓存 "),a("code",[t._v("gql")]),t._v("，减少传输体积，减短网络时延，有利于缓存，当然也减少了安全性问题")]),t._v(" "),a("li",[a("code",[t._v("variables")]),t._v(" 这是 "),a("code",[t._v("graphql variables")])]),t._v(" "),a("li",[a("code",[t._v("data.items[].edges")]),t._v(" 这是 "),a("code",[t._v("graphql")]),t._v(" 典型的分页 (虽然我不太喜欢，嵌套数据太多...)")])]),t._v(" "),a("p",[t._v("恩，好像跑偏了")]),t._v(" "),a("p",[t._v("总之，拿到了数据--关于前端面试的数据")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://web-api.juejin.im/query'")]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'X-Agent: Juejin/Web'")]),t._v(" --data-binary "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"operationName":"","query":"","variables":{"tags":["55979fe6e4b08a686ce562fe"],"category":"5562b415e4b00c57d9b94ac8","first":100,"after":"","order":"HOTTEST"},"extensions":{"query":{"id":"653b587c5c7c8a00ddf67fc66f989d42"}}}\'')]),t._v(" --compressed\n")])])]),a("h2",{attrs:{id:"etl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#etl"}},[t._v("#")]),t._v(" ETL")]),t._v(" "),a("p",[t._v("还是 "),a("code",[t._v("etl")]),t._v(" 这个词高大上啊")]),t._v(" "),a("p",[t._v("先用 "),a("code",[t._v("jq")]),t._v(" 取几个数吧: 标题与点赞数。更多用法可以参考我以前的文章: "),a("a",{attrs:{href:"https://github.com/ChinaArJun/op-note/blob/master/jq.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("jq命令详解及示例"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("为了更容易看到 "),a("code",[t._v("jq")]),t._v(" 的用法，把 "),a("code",[t._v("jq")]),t._v(" 另起一行，其中")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("-c")]),t._v(": 一整行显示")]),t._v(" "),a("li",[a("code",[t._v(".[]")]),t._v(": json-array to jsonl")]),t._v(" "),a("li",[a("code",[t._v("{}")]),t._v(": 类似于 "),a("code",[t._v("lodash.pick")])])]),t._v(" "),a("p",[a("strong",[t._v("我们此时根据命令获取到所有高赞文章")]),t._v("，但它此时是无序的")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://web-api.juejin.im/query'")]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'X-Agent: Juejin/Web'")]),t._v(" --data-binary "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"operationName":"","query":"","variables":{"tags":["55979fe6e4b08a686ce562fe"],"category":"5562b415e4b00c57d9b94ac8","first":100,"after":"","order":"HOTTEST"},"extensions":{"query":{"id":"653b587c5c7c8a00ddf67fc66f989d42"}}}\'')]),t._v(" --compressed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  jq -c "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.data.articleFeed.items.edges | .[].node | {title, likeCount}'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"中高级前端大厂面试秘籍，为你保驾护航金三银四，直通大厂(上)"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"likeCount"')]),t._v(":4423"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018前端面试总结，看完弄懂，工资少说加3K | 掘金技术征文"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"likeCount"')]),t._v(":4690"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"一个合格(优秀)的前端都应该阅读这些文章"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"likeCount"')]),t._v(":5052"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"前端面试考点多？看这些文章就够了（2019年6月更新版）"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"likeCount"')]),t._v(":2492"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018春招前端面试: 闯关记(精排精校) | 掘金技术征文"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"likeCount"')]),t._v(":3013"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ChinaArJun/blog/master/assets/jq-juejin.jpg",alt:"response"}})]),t._v(" "),a("h3",{attrs:{id:"数据筛选与排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据筛选与排序"}},[t._v("#")]),t._v(" 数据筛选与排序")]),t._v(" "),a("p",[t._v("再来筛选下点赞数大于 600 的")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("select"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".likeCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("再来倒排个序")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("jq  -s "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'. | sort_by(-.likeCount) | .[]'")]),t._v("\n")])])]),a("p",[a("strong",[t._v("搞定，此时榜单上全是点赞数大于600且排好序的")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://web-api.juejin.im/query'")]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'X-Agent: Juejin/Web'")]),t._v(" --data-binary "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"operationName":"","query":"","variables":{"tags":["55979fe6e4b08a686ce562fe"],"category":"5562b415e4b00c57d9b94ac8","first":100,"after":"","order":"HOTTEST"},"extensions":{"query":{"id":"653b587c5c7c8a00ddf67fc66f989d42"}}}\'')]),t._v(" --compressed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n jq -c "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.data.articleFeed.items.edges | .[].node | {title, likeCount, originalUrl } | select(.likeCount > 600) '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq -s "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'. | sort_by(-.likeCount) | .[]'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"一个合格(优秀)的前端都应该阅读这些文章"')]),t._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"likeCount"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5052")]),t._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"originalUrl"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://juejin.im/post/5d387f696fb9a07eeb13ea60"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018前端面试总结，看完弄懂，工资少说加3K | 掘金技术征文"')]),t._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"likeCount"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4690")]),t._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"originalUrl"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://juejin.im/post/5b94d8965188255c5a0cdc02"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"中高级前端大厂面试秘籍，为你保驾护航金三银四，直通大厂(上)"')]),t._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"likeCount"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4423")]),t._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"originalUrl"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://juejin.im/post/5c64d15d6fb9a049d37f9c20"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ChinaArJun/blog/master/assets/jq-juejin-sort.jpg",alt:"response"}})]),t._v(" "),a("h3",{attrs:{id:"使用-sed-处理生成-markdown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-sed-处理生成-markdown"}},[t._v("#")]),t._v(" 使用 sed 处理生成 markdown")]),t._v(" "),a("p",[t._v("我们此时已经生成了结构化的数据，如果我们使用 "),a("code",[t._v("react")]),t._v(" 渲染数据的话，"),a("code",[t._v("json")]),t._v(" 自然不错。但我们现在需要生成 "),a("code",[t._v("markdown")]),t._v("，所以再处理处理")]),t._v(" "),a("p",[t._v("先使用 "),a("code",[t._v("jq")]),t._v(" 生成链接样式")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+ 【👍 \\(.likeCount)】[\\(.title)](\\(.originalUrl))"')]),t._v("\n")])])]),a("p",[t._v("在使用 "),a("code",[t._v("sed")]),t._v(" 删除全部双引号，关于 "),a("code",[t._v("sed")]),t._v("，可以参考我的文章: "),a("a",{attrs:{href:"https://github.com/ChinaArJun/op-note/blob/master/linux-sed.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("sed 命令详解及示例"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" s/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"//g\n')])])]),a("p",[t._v("此时，成功生成了 "),a("code",[t._v("markdown")]),t._v(" 数据")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://web-api.juejin.im/query'")]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'X-Agent: Juejin/Web'")]),t._v(" --data-binary "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"operationName":"","query":"","variables":{"tags":["55979fe6e4b08a686ce562fe"],"category":"5562b415e4b00c57d9b94ac8","first":100,"after":"","order":"HOTTEST"},"extensions":{"query":{"id":"653b587c5c7c8a00ddf67fc66f989d42"}}}\'')]),t._v(" --compressed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n jq -c "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.data.articleFeed.items.edges | .[].node | { likeCount, title, originalUrl } | select(.likeCount > 600) '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq -cs "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'. | sort_by(-.likeCount) | .[] | \"+ 【👍 \\(.likeCount)】[\\(.title)](\\(.originalUrl))\"'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" s/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"//g\n\n+ 【👍 '),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5059")]),t._v("】"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("一个合格"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("优秀"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("的前端都应该阅读这些文章"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https://juejin.im/post/5d387f696fb9a07eeb13ea60"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n+ 【👍 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4695")]),t._v("】"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v("前端面试总结，看完弄懂，工资少说加3K "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 掘金技术征文"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https://juejin.im/post/5b94d8965188255c5a0cdc02"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n+ 【👍 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4425")]),t._v("】"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("中高级前端大厂面试秘籍，为你保驾护航金三银四，直通大厂"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("上"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https://juejin.im/post/5c64d15d6fb9a049d37f9c20"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n+ 【👍 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3013")]),t._v("】"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v("春招前端面试: 闯关记"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("精排精校"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 掘金技术征文"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https://juejin.im/post/5a998991f265da237f1dbdf9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n+ 【👍 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2493")]),t._v("】"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("前端面试考点多？看这些文章就够了（2019年6月更新版）"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https://juejin.im/post/5aae076d6fb9a028cc6100a9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n+ 【👍 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2359")]),t._v("】"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("「中高级前端面试」JavaScript手写代码无敌秘籍"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https://juejin.im/post/5c9c3989e51d454e3a3902b6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);