(window.webpackJsonp=window.webpackJsonp||[]).push([[649],{1103:function(s,t,a){"use strict";a.r(t);var n=a(44),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"jq-命令详解及示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jq-命令详解及示例"}},[s._v("#")]),s._v(" jq 命令详解及示例")]),s._v(" "),a("p",[a("code",[s._v("jq")]),s._v(" 是一款命令行的 "),a("code",[s._v("json")]),s._v(" 处理工具。类似于 "),a("code",[s._v("lodash")]),s._v(" 一样，它可以对 "),a("code",[s._v("json")]),s._v(" 做各种各样的处理: "),a("code",[s._v("pick")]),s._v("，"),a("code",[s._v("get")]),s._v("，"),a("code",[s._v("filter")]),s._v("，"),a("code",[s._v("sort")]),s._v("，"),a("code",[s._v("map")]),s._v("...")]),s._v(" "),a("p",[s._v("由于 "),a("code",[s._v("jq")]),s._v(" 本身比较简单，以下总结一些经常用到的示例。如果需要更多的细节，可以参考 "),a("a",{attrs:{href:"https://stedolan.github.io/jq/manual/",target:"_blank",rel:"noopener noreferrer"}},[s._v("jq 官方文档"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("先创建一个样例 "),a("code",[s._v("demo.jsonl")]),s._v("，"),a("code",[s._v("jsonl")]),s._v(" 即每行都是一个 "),a("code",[s._v("json")]),s._v("，常用在日志格式中")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"age"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"friend"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"age"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"friend"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("由于在后端 API 中会是以 "),a("code",[s._v("json")]),s._v(" 的格式返回，再次创建一个样例 "),a("code",[s._v("demo.json")])]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"age"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"friend"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"age"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"friend"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),s._v(" "),a("ul",[a("li",[s._v("原文链接: "),a("a",{attrs:{href:"https://blog.zhequtao.com/op/jq",target:"_blank",rel:"noopener noreferrer"}},[s._v("jq命令使用及示例"),a("OutboundLink")],1),s._v(" · "),a("a",{attrs:{href:"https://github.com/ChinaArJun/op-note/blob/master/jq.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("github"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("系列文章: "),a("a",{attrs:{href:"https://blog.zhequtao.com/op",target:"_blank",rel:"noopener noreferrer"}},[s._v("当我有台服务器时我做了什么"),a("OutboundLink")],1),s._v(" · "),a("a",{attrs:{href:"https://github.com/ChinaArJun/op-note",target:"_blank",rel:"noopener noreferrer"}},[s._v("github"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"jq-命令详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jq-命令详解"}},[s._v("#")]),s._v(" jq 命令详解")]),s._v(" "),a("p",[a("code",[s._v("jq")]),s._v(" 主要可以分作两部分，options 即选项，filter 即各种转换操作，类似于 "),a("code",[s._v("lodash")]),s._v(" 的各种函数")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("jq "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" filter "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("强烈建议参考 "),a("a",{attrs:{href:"https://stedolan.github.io/jq/manual/",target:"_blank",rel:"noopener noreferrer"}},[s._v("jq 官方手册"),a("OutboundLink")],1),s._v("，命令示例一应俱全")])]),s._v(" "),a("h3",{attrs:{id:"option"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option"}},[s._v("#")]),s._v(" option")]),s._v(" "),a("p",[s._v("我仅常用以下几个选项")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("-s")]),s._v(": 把读取的 "),a("code",[s._v("jsonl")]),s._v(" 视作数组来处理 (如 group, sort 只能以数组作为输入)")]),s._v(" "),a("li",[a("code",[s._v("-c")]),s._v(": 不对输出的 "),a("code",[s._v("json")]),s._v(" 做格式化，一行输出")])]),s._v(" "),a("h3",{attrs:{id:"filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filter"}},[s._v("#")]),s._v(" filter")]),s._v(" "),a("p",[s._v("filter 各种转换操作就很多了，如 "),a("code",[s._v("get")]),s._v("，"),a("code",[s._v("map")]),s._v("，"),a("code",[s._v("filter")]),s._v("，"),a("code",[s._v("map")]),s._v("，"),a("code",[s._v("pick")]),s._v("，"),a("code",[s._v("uniq")]),s._v("，"),a("code",[s._v("group")]),s._v(" 等操作")]),s._v(" "),a("ul",[a("li",[a("code",[s._v(".")]),s._v(": 代表自身")]),s._v(" "),a("li",[a("code",[s._v(".a.b")]),s._v(": 相当于 "),a("code",[s._v("_.get(input, 'a.b')")])]),s._v(" "),a("li",[a("code",[s._v("select(bool)")]),s._v(": 相当于 "),a("code",[s._v("_.filter(boolFn)")])]),s._v(" "),a("li",[a("code",[s._v("map_values")]),s._v(": 相当于 "),a("code",[s._v("_.map")]),s._v("，不过 "),a("code",[s._v("jq")]),s._v(" 无法单独操作 "),a("code",[s._v("key")])]),s._v(" "),a("li",[a("code",[s._v("sort")])]),s._v(" "),a("li",[a("code",[s._v("group_by")])])]),s._v(" "),a("blockquote",[a("p",[s._v("更多 filter 参考 "),a("a",{attrs:{href:"https://stedolan.github.io/jq/manual/",target:"_blank",rel:"noopener noreferrer"}},[s._v("jq 官方手册"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"jq-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jq-examples"}},[s._v("#")]),s._v(" jq examples")]),s._v(" "),a("p",[s._v("虽然 "),a("code",[s._v("jq")]),s._v(" 的功能很强大，但平时使用最为频繁的也就以下几个示例。当然复杂的情形也会有，参考我过去一篇使用 "),a("code",[s._v("jq")]),s._v(" 改 "),a("code",[s._v("ts")]),s._v(" 类型错误的一篇文章: "),a("a",{attrs:{href:"https://blog.zhequtao.com/post/sequelize-upgrade.html#_07-%E5%BD%92%E5%B9%B6%E4%B8%8E%E5%88%86%E7%B1%BB%EF%BC%8C%E9%80%90%E4%B8%AA%E5%87%BB%E7%A0%B4",target:"_blank",rel:"noopener noreferrer"}},[s._v("sequelize 升级记录"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"json-to-jsonl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-to-jsonl"}},[s._v("#")]),s._v(" json to jsonl")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" demo.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.[]'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"friend"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"friend"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"jsonl-to-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsonl-to-json"}},[s._v("#")]),s._v(" jsonl to json")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -s: 代表把 jsonl 组成数组处理")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" demo.jsonl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq -s "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"friend"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"friend"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h3",{attrs:{id:"get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[s._v("#")]),s._v(" . (_.get)")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" demo.jsonl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.name'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),s._v("\n")])])]),a("h3",{attrs:{id:"pick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pick"}},[s._v("#")]),s._v(" {} (_.pick)")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" demo.jsonl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{name, friendname: .friend.name}'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"friendname"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"friendname"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"select-filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-filter"}},[s._v("#")]),s._v(" select (_.filter)")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" demo.jsonl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'select(.age > 24) | {name}'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"map-values-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map-values-map"}},[s._v("#")]),s._v(" map_values (_.map)")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" demo.jsonl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{age} | map_values(.+10)'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("34")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"sort-by-sortby"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sort-by-sortby"}},[s._v("#")]),s._v(" sort_by (_.sortBy)")]),s._v(" "),a("p",[a("code",[s._v("sort_by")]),s._v(" 需要先把 "),a("code",[s._v("jsonl")]),s._v(" 转化为 "),a("code",[s._v("json")]),s._v(" 才能进行")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按照 age 降序排列")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -s: jsonl to json")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -.age: 降序")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .[]: json to jsonl")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# {}: pick")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" demo.jsonl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq -s "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'. | sort_by(-.age) | .[] | {name, age}'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按照 age 升序排列")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" demo.jsonl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq -s "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'. | sort_by(.age) | .[] | {name, age}'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);