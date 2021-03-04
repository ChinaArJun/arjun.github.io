(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{649:function(a,t,e){"use strict";e.r(t);var r=e(44),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"请入门-makefile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请入门-makefile"}},[a._v("#")]),a._v(" 请入门 Makefile")]),a._v(" "),e("p",[a._v("项目地址：https://github.com/EDDYCJY/go-gin-example")]),a._v(" "),e("h2",{attrs:{id:"知识点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[a._v("#")]),a._v(" 知识点")]),a._v(" "),e("ul",[e("li",[a._v("写一个 Makefile")])]),a._v(" "),e("h2",{attrs:{id:"本文目标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本文目标"}},[a._v("#")]),a._v(" 本文目标")]),a._v(" "),e("p",[a._v("含一定复杂度的软件工程，基本上都是先编译 A，再依赖 B，再编译 C...，最后才执行构建。如果每次都人为编排，又或是每新来一个同事就问你项目 D 怎么构建、重新构建需要注意什么...等等情况，岂不是要崩溃？")]),a._v(" "),e("p",[a._v("我们常常会在开源项目中发现 Makefile，你是否有过疑问？")]),a._v(" "),e("p",[a._v("本章节会简单介绍 Makefile 的使用方式，最后建议深入学习。")]),a._v(" "),e("h2",{attrs:{id:"怎么解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#怎么解决"}},[a._v("#")]),a._v(" 怎么解决")]),a._v(" "),e("p",[a._v("对于构建编排，Docker 有 Dockerfile ，在 Unix 中有神器 "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Make_%28software%29",target:"_blank",rel:"noopener noreferrer"}},[a._v("Make"),e("OutboundLink")],1),a._v(" ....")]),a._v(" "),e("h2",{attrs:{id:"make"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#make"}},[a._v("#")]),a._v(" Make")]),a._v(" "),e("h3",{attrs:{id:"是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#是什么"}},[a._v("#")]),a._v(" 是什么")]),a._v(" "),e("p",[a._v("Make 是一个构建自动化工具，会在当前目录下寻找 Makefile 或 makefile 文件。如果存在，会依据 Makefile 的"),e("strong",[a._v("构建规则")]),a._v("去完成构建")]),a._v(" "),e("p",[a._v("当然了，实际上 Makefile 内都是你根据 make 语法规则，自己编写的特定 Shell 命令等")]),a._v(" "),e("p",[a._v("它是一个工具，规则也很简单。在支持的范围内，编译 A， 依赖 B，再编译 C，完全没问题")]),a._v(" "),e("h3",{attrs:{id:"规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#规则"}},[a._v("#")]),a._v(" 规则")]),a._v(" "),e("p",[a._v("Makefile 由多条规则组成，每条规则都以一个 target（目标）开头，后跟一个 : 冒号，冒号后是这一个目标的 prerequisites（前置条件）")]),a._v(" "),e("p",[a._v("紧接着新的一行，必须以一个 tab 作为开头，后面跟随 command（命令），也就是你希望这一个 target 所执行的构建命令")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[target] ... : [prerequisites] ...\n<tab>[command]\n    ...\n    ...\n")])])]),e("ul",[e("li",[a._v("target：一个目标代表一条规则，可以是一个或多个文件名。也可以是某个操作的名字（标签），称为"),e("strong",[a._v("伪目标（phony）")])]),a._v(" "),e("li",[a._v("prerequisites：前置条件，这一项是"),e("strong",[a._v("可选参数")]),a._v("。通常是多个文件名、伪目标。它的作用是 target 是否需要重新构建的标准，如果前置条件不存在或有过更新（文件的最后一次修改时间）则认为 target 需要重新构建")]),a._v(" "),e("li",[a._v("command：构建这一个 target 的具体命令集")])]),a._v(" "),e("h3",{attrs:{id:"简单的例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单的例子"}},[a._v("#")]),a._v(" 简单的例子")]),a._v(" "),e("p",[a._v("本文将以 "),e("a",{attrs:{href:"https://github.com/EDDYCJY/go-gin-example",target:"_blank",rel:"noopener noreferrer"}},[a._v("go-gin-example"),e("OutboundLink")],1),a._v(" 去编写 Makefile 文件，请跨入 make 的大门")]),a._v(" "),e("h4",{attrs:{id:"分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[a._v("#")]),a._v(" 分析")]),a._v(" "),e("p",[a._v("在编写 Makefile 前，需要先分析构建先后顺序、依赖项，需要解决的问题等")]),a._v(" "),e("h4",{attrs:{id:"编写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写"}},[a._v("#")]),a._v(" 编写")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('.PHONY: build clean tool lint help\n\nall: build\n\nbuild:\n\tgo build -v .\n\ntool:\n\tgo tool vet . |& grep -v vendor; true\n\tgofmt -w .\n\nlint:\n\tgolint ./...\n\nclean:\n\trm -rf go-gin-example\n\tgo clean -i .\n\nhelp:\n\t@echo "make: compile packages and dependencies"\n\t@echo "make tool: run specified go tool"\n\t@echo "make lint: golint ./..."\n\t@echo "make clean: remove object files and cached files"\n')])])]),e("p",[a._v("1、在上述文件中，使用了 "),e("code",[a._v(".PHONY")]),a._v("，其作用是声明 build / clean / tool / lint / help 为"),e("strong",[a._v("伪目标")]),a._v("，声明为伪目标会怎么样呢？")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("声明为伪目标后：在执行对应的命令时，make 就不会去检查是否存在 build / clean / tool / lint / help 其对应的文件，而是每次都会运行标签对应的命令")])]),a._v(" "),e("li",[e("p",[a._v("若不声明：恰好存在对应的文件，则 make 将会认为 xx 文件已存在，没有重新构建的必要了")])])]),a._v(" "),e("p",[a._v("2、这块比较简单，在命令行执行即可看见效果，实现了以下功能：")]),a._v(" "),e("ol",[e("li",[a._v("make: make 就是 make all")]),a._v(" "),e("li",[a._v("make build: 编译当前项目的包和依赖项")]),a._v(" "),e("li",[a._v("make tool: 运行指定的 Go 工具集")]),a._v(" "),e("li",[a._v("make lint: golint 一下")]),a._v(" "),e("li",[a._v("make clean: 删除对象文件和缓存文件")]),a._v(" "),e("li",[a._v("make help: help")])]),a._v(" "),e("h4",{attrs:{id:"为什么会打印执行的命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么会打印执行的命令"}},[a._v("#")]),a._v(" 为什么会打印执行的命令")]),a._v(" "),e("p",[a._v("如果你实际操作过，可能会有疑问。明明只是执行命令，为什么会打印到标准输出上了？")]),a._v(" "),e("h5",{attrs:{id:"原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[a._v("#")]),a._v(" 原因")]),a._v(" "),e("p",[a._v("make 默认会打印每条命令，再执行。这个行为被定义为"),e("strong",[a._v("回声")])]),a._v(" "),e("h5",{attrs:{id:"解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[a._v("#")]),a._v(" 解决")]),a._v(" "),e("p",[a._v("可以在对应命令前加上 @，可指定该命令不被打印到标准输出上")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("build:\n\t@go build -v .\n")])])]),e("p",[a._v("那么还有其他的特殊符号吗？有的，请课后去了解下 +、- 的用途 🤩")]),a._v(" "),e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[a._v("#")]),a._v(" 小结")]),a._v(" "),e("p",[a._v("这是一篇比较简洁的文章，希望可以让您对 Makefile 有一个基本了解。")]),a._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),e("h3",{attrs:{id:"本系列示例代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本系列示例代码"}},[a._v("#")]),a._v(" 本系列示例代码")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/EDDYCJY/go-gin-example",target:"_blank",rel:"noopener noreferrer"}},[a._v("go-gin-example"),e("OutboundLink")],1)])]),a._v(" "),e("h2",{attrs:{id:"关于"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[a._v("#")]),a._v(" 关于")]),a._v(" "),e("h3",{attrs:{id:"修改记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改记录"}},[a._v("#")]),a._v(" 修改记录")]),a._v(" "),e("ul",[e("li",[a._v("第一版：2018年02月16日发布文章")]),a._v(" "),e("li",[a._v("第二版：2019年10月01日修改文章")])]),a._v(" "),e("h2",{attrs:{id:"？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#？"}},[a._v("#")]),a._v(" ？")]),a._v(" "),e("p",[a._v("如果有任何疑问或错误，欢迎在 "),e("a",{attrs:{href:"https://github.com/EDDYCJY/blog",target:"_blank",rel:"noopener noreferrer"}},[a._v("issues"),e("OutboundLink")],1),a._v(" 进行提问或给予修正意见，如果喜欢或对你有所帮助，欢迎 Star，对作者是一种鼓励和推进。")]),a._v(" "),e("h3",{attrs:{id:"我的公众号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我的公众号"}},[a._v("#")]),a._v(" 我的公众号")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://image.eddycjy.com/8d0b0c3a11e74efd5fdfd7910257e70b.jpg",alt:"image"}})])])}),[],!1,null,null,null);t.default=s.exports}}]);