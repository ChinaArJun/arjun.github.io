(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{812:function(v,_,t){"use strict";t.r(_);var a=t(44),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("直接在终端执行：")]),v._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[v._v("go\n")])])]),t("p",[v._v("就能得到和 go 相关的命令简介：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/60248752-e2bda680-98f5-11e9-8b3b-7deaf70a919c.png",alt:"go commands"}})]),v._v(" "),t("p",[v._v("和编译相关的命令主要是：")]),v._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[v._v("go build\ngo "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("install")]),v._v("\ngo run\n")])])]),t("h1",{attrs:{id:"go-build"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go-build"}},[v._v("#")]),v._v(" go build")]),v._v(" "),t("p",[t("code",[v._v("go build")]),v._v(" 用来编译指定 packages 里的源码文件以及它们的依赖包，编译的时候会到 "),t("code",[v._v("$GoPath/src/package")]),v._v(" 路径下寻找源码文件。"),t("code",[v._v("go build")]),v._v(" 还可以直接编译指定的源码文件，并且可以同时指定多个。")]),v._v(" "),t("p",[v._v("通过执行 "),t("code",[v._v("go help build")]),v._v(" 命令得到 "),t("code",[v._v("go build")]),v._v(" 的使用方法：")]),v._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[v._v("usage: go build "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("-o output"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("-i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("build flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("packages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v("\n")])])]),t("p",[t("code",[v._v("-o")]),v._v(" 只能在编译单个包的时候出现，它指定输出的可执行文件的名字。")]),v._v(" "),t("p",[t("code",[v._v("-i")]),v._v(" 会安装编译目标所依赖的包，安装是指生成与代码包相对应的 "),t("code",[v._v(".a")]),v._v(" 文件，即静态库文件（后面要参与链接），并且放置到当前工作区的 pkg 目录下，且库文件的目录层级和源码层级一致。")]),v._v(" "),t("p",[v._v("至于 build flags 参数，"),t("code",[v._v("build, clean, get, install, list, run, test")]),v._v(" 这些命令会共用一套：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("参数")]),v._v(" "),t("th",[v._v("作用")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("-a")]),v._v(" "),t("td",[v._v("强制重新编译所有涉及到的包，包括标准库中的代码包，这会重写 /usr/local/go 目录下的 "),t("code",[v._v(".a")]),v._v(" 文件")])]),v._v(" "),t("tr",[t("td",[v._v("-n")]),v._v(" "),t("td",[v._v("打印命令执行过程，不真正执行")])]),v._v(" "),t("tr",[t("td",[v._v("-p n")]),v._v(" "),t("td",[v._v("指定编译过程中命令执行的并行数，n 默认为 CPU 核数")])]),v._v(" "),t("tr",[t("td",[v._v("-race")]),v._v(" "),t("td",[v._v("检测并报告程序中的数据竞争问题")])]),v._v(" "),t("tr",[t("td",[v._v("-v")]),v._v(" "),t("td",[v._v("打印命令执行过程中所涉及到的代码包名称")])]),v._v(" "),t("tr",[t("td",[v._v("-x")]),v._v(" "),t("td",[v._v("打印命令执行过程中所涉及到的命令，并执行")])]),v._v(" "),t("tr",[t("td",[v._v("-work")]),v._v(" "),t("td",[v._v("打印编译过程中的临时文件夹。通常情况下，编译完成后会被删除")])])])]),v._v(" "),t("p",[v._v("我们知道，Go 语言的源码文件分为三类：命令源码、库源码、测试源码。")]),v._v(" "),t("blockquote",[t("p",[v._v("命令源码文件：是 Go 程序的入口，包含 "),t("code",[v._v("func main()")]),v._v(" 函数，且第一行用 "),t("code",[v._v("package main")]),v._v(" 声明属于 main 包。")])]),v._v(" "),t("blockquote",[t("p",[v._v("库源码文件：主要是各种函数、接口等，例如工具类的函数。")])]),v._v(" "),t("blockquote",[t("p",[v._v("测试源码文件：以 "),t("code",[v._v("_test.go")]),v._v(" 为后缀的文件，用于测试程序的功能和性能。")])]),v._v(" "),t("p",[v._v("注意，"),t("code",[v._v("go build")]),v._v(" 会忽略 "),t("code",[v._v("*_test.go")]),v._v(" 文件。")]),v._v(" "),t("p",[v._v("我们通过一个很简单的例子来演示 "),t("code",[v._v("go build")]),v._v(" 命令。我用 Goland 新建了一个 "),t("code",[v._v("hello-world")]),v._v(" 项目（为了展示引用自定义的包，和之前的 hello-world 程序不同），项目的结构如下：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/60383032-5b5f6700-9a9e-11e9-9613-03d9ba13b889.png",alt:"example structure"}})]),v._v(" "),t("p",[v._v("最左边可以看到项目的结构，包含三个文件夹：bin，pkg，src。其中 src 目录下有一个 main.go，里面定义了 main 函数，是整个项目的入口，也就是前面提过的所谓的命令源码文件；src 目录下还有一个 util 目录，里面有 util.go 文件，定义了一个可以获取本机 IP 地址的函数，也就是所谓的库源码文件。")]),v._v(" "),t("p",[v._v("中间是 main.go 的源码，引用了两个包，一个是标准库的 fmt；一个是 util 包，util 的导入路径是 "),t("code",[v._v("util")]),v._v("。所谓的导入路径是指相对于 Go 的源码目录 "),t("code",[v._v("$GoRoot/src")]),v._v(" 或者 "),t("code",[v._v("$GoPath/src")]),v._v(" 的下的子路径。例如 main 包里引用的 fmt 的源码路径是 "),t("code",[v._v("/usr/local/go/src/fmt")]),v._v("，而 util 的源码路径是 "),t("code",[v._v("/Users/qcrao/hello-world/src/util")]),v._v("，正好我们设置的 GoPath = /Users/qcrao/hello-world。")]),v._v(" "),t("p",[v._v("最右边是库函数的源码，实现了获取本机 IP 的函数。")]),v._v(" "),t("p",[v._v("在 src 目录下，直接执行 "),t("code",[v._v("go build")]),v._v(" 命令，在同级目录生成了一个可执行文件，文件名为 "),t("code",[v._v("src")]),v._v("，使用 "),t("code",[v._v("./src")]),v._v(" 命令直接执行，输出：")]),v._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[v._v("hello world"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("!")]),v._v("\nLocal IP: "),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("192.168")]),v._v(".1.3\n")])])]),t("p",[v._v("我们也可以指定生成的可执行文件的名称：")]),v._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[v._v("go build -o bin/hello\n")])])]),t("p",[v._v("这样，在 bin 目录下会生成一个可执行文件，运行结果和上面的 "),t("code",[v._v("src")]),v._v(" 一样。")]),v._v(" "),t("p",[v._v("其实，util 包可以单独被编译。我们可以在项目根目录下执行：")]),v._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[v._v("go build util\n")])])]),t("p",[v._v("编译程序会去 $GoPath/src 路径找 util 包（其实是找文件夹）。还可以在 "),t("code",[v._v("./src/util")]),v._v(" 目录下直接执行 "),t("code",[v._v("go build")]),v._v(" 编译。")]),v._v(" "),t("p",[v._v("当然，直接编译库源码文件不会生成 .a 文件，因为：")]),v._v(" "),t("blockquote",[t("p",[v._v("go build 命令在编译只包含库源码文件的代码包（或者同时编译多个代码包）时，只会做检查性的编译，而不会输出任何结果文件。")])]),v._v(" "),t("p",[v._v("为了展示整个编译链接的运行过程，我们在项目根目录执行如下的命令：")]),v._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[v._v("go build -v -x -work -o bin/hello src/main.go\n")])])]),t("p",[t("code",[v._v("-v")]),v._v(" 会打印所编译过的包名字，"),t("code",[v._v("-x")]),v._v(" 打印编译期间所执行的命令，"),t("code",[v._v("-work")]),v._v(" 打印编译期间生成的临时文件路径，并且编译完成之后不会被删除。")]),v._v(" "),t("p",[v._v("执行结果：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/60386219-e3586780-9ac4-11e9-871f-5acfa83372d0.png",alt:"编译过程"}})]),v._v(" "),t("p",[v._v("从结果来看，图中用箭头标注了本次编译过程涉及 2 个包：util，command-line-arguments。第二个包比较诡异，源码里根本就没有这个名字好吗？其实这是 "),t("code",[v._v("go build")]),v._v(" 命令检测到 [packages] 处填的是一个 "),t("code",[v._v(".go")]),v._v(" 文件，因此创建了一个虚拟的包：command-line-arguments。")]),v._v(" "),t("p",[v._v("同时，用红框圈出了 compile, link，也就是先编译了 util 包和 "),t("code",[v._v("main.go")]),v._v(" 文件，分别得到 "),t("code",[v._v(".a")]),v._v(" 文件，之后将两者进行链接，最终生成可执行文件，并且移动到 bin 目录下，改名为 hello。")]),v._v(" "),t("p",[v._v("另外，第一行显示了编译过程中的工作目录，此目录的文件结构是：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/60386682-06861580-9acb-11e9-8367-d37ce03a46cc.png",alt:"临时工作目录"}})]),v._v(" "),t("p",[v._v("可以看到，和 hello-world 目录的层级基本一致。command-line-arguments 就是虚拟的 main.go 文件所处的包。exe 目录下的可执行文件在最后一步被移动到了 bin 目录下，所以这里是空的。")]),v._v(" "),t("p",[v._v("整体来看，"),t("code",[v._v("go build")]),v._v(" 在执行时，会先递归寻找 main.go 所依赖的包，以及依赖的依赖，直至最底层的包。这里可以是深度优先遍历也可以是宽度优先遍历。如果发现有循环依赖，就会直接退出，这也是经常会发生的循环引用编译错误。")]),v._v(" "),t("p",[v._v("正常情况下，这些依赖关系会形成一棵倒着生长的树，树根在最上面，就是 main.go 文件，最下面是没有任何其他依赖的包。编译器会从最左的节点所代表的包开始挨个编译，完成之后，再去编译上一层的包。")]),v._v(" "),t("p",[v._v("这里，引用郝林老师几年前在 github 上发表的 go 命令教程，可以从参考资料找到原文地址。")]),v._v(" "),t("blockquote",[t("p",[v._v("从代码包编译的角度来说，如果代码包 A 依赖代码包 B，则称代码包 B 是代码包 A 的依赖代码包（以下简称依赖包），代码包 A 是代码包 B 的触发代码包（以下简称触发包）。")])]),v._v(" "),t("blockquote",[t("p",[v._v("执行 "),t("code",[v._v("go build")]),v._v(" 命令的计算机如果拥有多个逻辑 CPU 核心，那么编译代码包的顺序可能会存在一些不确定性。但是，它一定会满足这样的约束条件：依赖代码包 -> 当前代码包 -> 触发代码包。")])]),v._v(" "),t("p",[v._v("顺便推荐一个浏览器插件 Octotree，在看 github 项目的时候，此插件可以在浏览器里直接展示整个项目的文件结构，非常方便：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/60390988-d9f7eb00-9b16-11e9-83ec-64c3c0beb6ad.png",alt:"github 插件"}})]),v._v(" "),t("p",[v._v("到这里，你一定会发现，对于 hello-wrold 文件夹下的 pkg 目录好像一直没有涉及到。")]),v._v(" "),t("p",[v._v("其实，pkg 目录下面应该存放的是涉及到的库文件编译后的包，也就是一些 "),t("code",[v._v(".a")]),v._v(" 文件。但是 go build 执行过程中，这些 "),t("code",[v._v(".a")]),v._v(" 文件放在临时文件夹中，编译完成后会被直接删掉，因此一般不会用到。")]),v._v(" "),t("p",[v._v("前面我们提到过，在 go build 命令里加上 "),t("code",[v._v("-i")]),v._v(" 参数会安装这些库文件编译的包，也就是这些 "),t("code",[v._v(".a")]),v._v(" 文件会放到 pkg 目录下。")]),v._v(" "),t("p",[v._v("在项目根目录执行 "),t("code",[v._v("go build -i src/main.go")]),v._v(" 后，pkg 目录里增加了 util.a 文件：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/60386864-84e3b700-9acd-11e9-9513-68a52ff460bb.png",alt:"pkg"}})]),v._v(" "),t("p",[t("code",[v._v("darwin_amd64")]),v._v(" 表示的是：")]),v._v(" "),t("blockquote",[t("p",[v._v("GOOS 和 GOARCH。这两个环境变量不用我们设置，系统默认的。")])]),v._v(" "),t("blockquote",[t("p",[v._v("GOOS 是 Go 所在的操作系统类型，GOARCH 是 Go 所在的计算架构。")])]),v._v(" "),t("blockquote",[t("p",[v._v("Mac 平台上这个目录名就是 darwin_amd64。")])]),v._v(" "),t("p",[v._v("生成了 util.a 文件后，再次编译的时候，就不会再重新编译 util.go 文件，加快了编译速度。")]),v._v(" "),t("p",[v._v("同时，在根目录下生成了名称为 main 的可执行文件，这是以 main.go 的文件名命令的。")]),v._v(" "),t("p",[v._v("hello-world 这个项目的代码已经上传到了 github 项目 "),t("code",[v._v("Go-Questions")]),v._v("，这个项目由问题导入，企图串连 Go 的所有知识点，正在完善，期待你的 star。 地址见参考资料【Go-Questions hello-world项目】。")]),v._v(" "),t("h1",{attrs:{id:"go-install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go-install"}},[v._v("#")]),v._v(" go install")]),v._v(" "),t("p",[t("code",[v._v("go install")]),v._v(" 用于编译并安装指定的代码包及它们的依赖包。相比 "),t("code",[v._v("go build")]),v._v("，它只是多了一个“安装编译后的结果文件到指定目录”的步骤。")]),v._v(" "),t("p",[v._v("还是使用之前 hello-world 项目的例子，我们先将 pkg 目录删掉，在项目根目录执行：")]),v._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[v._v("go "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("install")]),v._v(" src/main.go\n\n或者\n\ngo "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("install")]),v._v(" util\n")])])]),t("p",[v._v("两者都会在根目录下新建一个 "),t("code",[v._v("pkg")]),v._v(" 目录，并且生成一个 "),t("code",[v._v("util.a")]),v._v(" 文件。")]),v._v(" "),t("p",[v._v("并且，在执行前者的时候，会在 GOBIN 目录下生成名为 main 的可执行文件。")]),v._v(" "),t("p",[v._v("所以，运行 "),t("code",[v._v("go install")]),v._v(" 命令，库源码包对应的 "),t("code",[v._v(".a")]),v._v(" 文件会被放置到 "),t("code",[v._v("pkg")]),v._v(" 目录下，命令源码包生成的可执行文件会被放到 GOBIN 目录。")]),v._v(" "),t("p",[t("code",[v._v("go install")]),v._v(" 在 GoPath 有多个目录的时候，会产生一些问题，具体可以去看郝林老师的 "),t("code",[v._v("Go 命令教程")]),v._v("，这里不展开了。")]),v._v(" "),t("h1",{attrs:{id:"go-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go-run"}},[v._v("#")]),v._v(" go run")]),v._v(" "),t("p",[t("code",[v._v("go run")]),v._v(" 用于编译并运行命令源码文件。")]),v._v(" "),t("p",[v._v("在 hello-world 项目的根目录，执行 go run 命令：")]),v._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[v._v("go run -x -work src/main.go\n")])])]),t("p",[v._v("-x 可以打印整个过程涉及到的命令，-work 可以看到临时的工作目录：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/60391387-ae2d3300-9b1f-11e9-9355-a8f59c2eac9b.png",alt:"go run 过程"}})]),v._v(" "),t("p",[v._v("从上图中可以看到，仍然是先编译，再连接，最后直接执行，并打印出了执行结果。")]),v._v(" "),t("p",[v._v("第一行打印的就是工作目录，最终生成的可执行文件就是放置于此：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/60391357-30692780-9b1f-11e9-8be4-48041779e293.png",alt:"go run 结果"}})]),v._v(" "),t("p",[v._v("main 就是最终生成的可执行文件。")])])}),[],!1,null,null,null);_.default=e.exports}}]);