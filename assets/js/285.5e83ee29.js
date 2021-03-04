(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{722:function(e,a,t){"use strict";t.r(a);var v=t(44),_=Object(v.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"将golang应用部署到docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将golang应用部署到docker"}},[e._v("#")]),e._v(" 将Golang应用部署到Docker")]),e._v(" "),t("p",[e._v("项目地址："),t("a",{attrs:{href:"https://github.com/EDDYCJY/go-gin-example",target:"_blank",rel:"noopener noreferrer"}},[e._v("https"),t("OutboundLink")],1),e._v(" : "),t("a",{attrs:{href:"https://github.com/EDDYCJY/go-gin-example",target:"_blank",rel:"noopener noreferrer"}},[e._v("//github.com/EDDYCJY/go-gin-example"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"涉及知识点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#涉及知识点"}},[e._v("#")]),e._v(" 涉及知识点")]),e._v(" "),t("ul",[t("li",[e._v("Go + Docker")])]),e._v(" "),t("h2",{attrs:{id:"本文目标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本文目标"}},[e._v("#")]),e._v(" 本文目标")]),e._v(" "),t("p",[e._v("将我们的"),t("code",[e._v("go-gin-example")]),e._v("应用部署到一个Docker里，你需要先准备好如下东西：")]),e._v(" "),t("ul",[t("li",[e._v("你需要安装好"),t("code",[e._v("docker")]),e._v("。")]),e._v(" "),t("li",[e._v("如果上外网比较吃力，需要配好多重源。")])]),e._v(" "),t("h2",{attrs:{id:"码头工人"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#码头工人"}},[e._v("#")]),e._v(" 码头工人")]),e._v(" "),t("p",[e._v("在这里简单介绍下Docker，建议深入学习")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521800047226&di=28b2764fccca8a943aea7d79ad8aed98&imgtype=0&src=http%3A%2F%2Fwww.cww.net.cn%2FupLoadFile%2F2014%2F6%2F13%2F201461382247734.png",alt:"图片"}})]),e._v(" "),t("p",[e._v("Docker是一个开源的轻量级容器技术，让开发者可以打包他们的应用以及应用运行的上下文环境到一个可移植的替代中，然后发布到任何支持Docker的系统上运行。通过容器技术，在几乎没有性能开销的情况下，Docker为应用提供了一个隔离运行环境")]),e._v(" "),t("ul",[t("li",[e._v("简化配置")]),e._v(" "),t("li",[e._v("代码流水线管理")]),e._v(" "),t("li",[e._v("提高开发效率")]),e._v(" "),t("li",[e._v("隔离应用")]),e._v(" "),t("li",[e._v("快速，持续部署")])]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("接下来我们正式开始对项目进行"),t("code",[e._v("docker")]),e._v("的所需处理和编写，每一个大标题为步骤大纲")]),e._v(" "),t("h2",{attrs:{id:"高朗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高朗"}},[e._v("#")]),e._v(" 高朗")]),e._v(" "),t("h3",{attrs:{id:"一，编写dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一，编写dockerfile"}},[e._v("#")]),e._v(" 一，编写Dockerfile")]),e._v(" "),t("p",[e._v("在"),t("code",[e._v("go-gin-example")]),e._v("项目根目录创建Dockerfile文件，写入内容")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('FROM golang:latest\n\nENV GOPROXY https://goproxy.cn,direct\nWORKDIR $GOPATH/src/github.com/EDDYCJY/go-gin-example\nCOPY . $GOPATH/src/github.com/EDDYCJY/go-gin-example\nRUN go build .\n\nEXPOSE 8000\nENTRYPOINT ["./go-gin-example"]\n')])])]),t("h4",{attrs:{id:"作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[e._v("#")]),e._v(" 作用")]),e._v(" "),t("p",[t("code",[e._v("golang:latest")]),e._v("既是基础基础，将工作目录设置为"),t("code",[e._v("$GOPATH/src/go-gin-example")]),e._v("，又是内部目录的内容复制到"),t("code",[e._v("$GOPATH/src/go-gin-example")]),e._v("中")]),e._v(" "),t("p",[e._v("在进行"),t("code",[e._v("go build")]),e._v("编译完毕后，将容器启动程序设置为"),t("code",[e._v("./go-gin-example")]),e._v("，也就是我们所编译的替换文件")]),e._v(" "),t("p",[e._v("注意"),t("code",[e._v("go-gin-example")]),e._v("在"),t("code",[e._v("docker")]),e._v("容器里编译，并没有在宿主机现场编译")]),e._v(" "),t("h4",{attrs:{id:"说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[e._v("#")]),e._v(" 说明")]),e._v(" "),t("p",[e._v("Dockerfile文件是用于Docker生成过程的配置文件，文件内容是一条条指令，每一条指令包含一层，因此每一条指令的内容，就是描述该层合理的方式；这些指令基础基础并存最终创造一个新的可能性")]),e._v(" "),t("p",[e._v("你可以认为有用快速创建自定义的Docker更大")]),e._v(" "),t("p",[t("strong",[e._v("1，来自")])]),e._v(" "),t("p",[e._v("指定基础规范（必须有的指令，并且必须是第一条指令）")]),e._v(" "),t("p",[t("strong",[e._v("2，WORKDIR")])]),e._v(" "),t("p",[e._v("格式为"),t("code",[e._v("WORKDIR")]),e._v("<工作目录路径>")]),e._v(" "),t("p",[e._v("使用"),t("code",[e._v("WORKDIR")]),e._v("指令可以来"),t("strong",[e._v("指定工作目录")]),e._v("（或称为当前目录），以后各层的当前目录就被替换指定的目录，如果目录不存在，"),t("code",[e._v("WORKDIR")]),e._v("会帮你建立目录")]),e._v(" "),t("p",[t("strong",[e._v("3，复制")])]),e._v(" "),t("p",[e._v("格式：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('COPY <源路径>... <目标路径>\nCOPY ["<源路径1>",... "<目标路径>"]\n')])])]),t("p",[t("code",[e._v("COPY")]),e._v("指令编写合并目录中的<源路径>的文件/目录"),t("strong",[e._v("复制")]),e._v("到新的一层的附属内部的<目标路径>位置")]),e._v(" "),t("p",[t("strong",[e._v("4，运行")])]),e._v(" "),t("p",[e._v("使用执行命令行命令")]),e._v(" "),t("p",[e._v("格式："),t("code",[e._v("RUN")]),e._v("<命令>")]),e._v(" "),t("p",[t("strong",[e._v("5，曝光")])]),e._v(" "),t("p",[e._v("格式为"),t("code",[e._v("EXPOSE")]),e._v("<端口1> [<端口2> ...]")]),e._v(" "),t("p",[t("code",[e._v("EXPOSE")]),e._v("指令是声明"),t("strong",[e._v("运行时容器提供服务端口，这只是一个声明")]),e._v("，在运行时并不会因为这个声明应用就会开启这个端口的服务")]),e._v(" "),t("p",[e._v("在Dockerfile中写入这样的声明有两个好处")]),e._v(" "),t("ul",[t("li",[e._v("帮助有用使用者理解这个有用的服务的守护端口，以方便配置映射")]),e._v(" "),t("li",[e._v("运行时使用随机端口映射时，也就是"),t("code",[e._v("docker run -P")]),e._v("时，会自动随机映射"),t("code",[e._v("EXPOSE")]),e._v("的端口")])]),e._v(" "),t("p",[t("strong",[e._v("6，入口点")])]),e._v(" "),t("p",[t("code",[e._v("ENTRYPOINT")]),e._v("的格式和"),t("code",[e._v("RUN")]),e._v("指令格式一样，分为两种格式")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("exec")]),e._v(" 格式：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<ENTRYPOINT> "<CMD>"\n')])])])]),e._v(" "),t("li",[t("p",[t("code",[e._v("shell")]),e._v(" 格式：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('ENTRYPOINT [ "curl", "-s", "http://ip.cn" ]\n')])])])])]),e._v(" "),t("p",[t("code",[e._v("ENTRYPOINT")]),e._v("指令是"),t("strong",[e._v("指定容器启动程序及参数")])]),e._v(" "),t("h3",{attrs:{id:"二，积累成果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二，积累成果"}},[e._v("#")]),e._v(" 二，积累成果")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("go-gin-example`的项目根目录下**执行** `docker build -t gin-blog-docker .\n")])])]),t("p",[e._v("该命令作用是创建/重建，"),t("code",[e._v("-t")]),e._v("指定名称为"),t("code",[e._v("gin-blog-docker")]),e._v("，"),t("code",[e._v(".")]),e._v("合并内容为当前某些目录")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ docker build -t gin-blog-docker .\nSending build context to Docker daemon 96.39 MB\nStep 1/6 : FROM golang:latest\n ---\x3e d632bbfe5767\nStep 2/6 : WORKDIR $GOPATH/src/github.com/EDDYCJY/go-gin-example\n ---\x3e 56294f978c5d\nRemoving intermediate container e112997b995d\nStep 3/6 : COPY . $GOPATH/src/github.com/EDDYCJY/go-gin-example\n ---\x3e 3b60960120cf\nRemoving intermediate container 63e310b3f60c\nStep 4/6 : RUN go build .\n ---\x3e Running in 52648a431450\ngo: downloading github.com/gin-gonic/gin v1.3.0\ngo: downloading github.com/go-ini/ini v1.32.1-0.20180214101753-32e4be5f41bb\ngo: downloading github.com/swaggo/gin-swagger v1.0.1-0.20190110070702-0c6fcfd3c7f3\n...\n ---\x3e 7bfbeb301fea\nRemoving intermediate container 52648a431450\nStep 5/6 : EXPOSE 8000\n ---\x3e Running in 98f5b387d1bb\n ---\x3e b65bd4076c65\nRemoving intermediate container 98f5b387d1bb\nStep 6/6 : ENTRYPOINT ./go-gin-example\n ---\x3e Running in c4f6cdeb667b\n ---\x3e d8a109c7697c\nRemoving intermediate container c4f6cdeb667b\nSuccessfully built d8a109c7697c\n")])])]),t("h3",{attrs:{id:"三，验证可行性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三，验证可行性"}},[e._v("#")]),e._v(" 三，验证可行性")]),e._v(" "),t("p",[e._v("查看所有的可能，确定刚刚整合的"),t("code",[e._v("gin-blog-docker")]),e._v("足够存在")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ docker images\nREPOSITORY              TAG                 IMAGE ID            CREATED              SIZE\ngin-blog-docker         latest              d8a109c7697c        About a minute ago   946 MB\ndocker.io/golang        latest              d632bbfe5767        8 days ago           779 MB\n...\n")])])]),t("h3",{attrs:{id:"四，创建并运行一个新容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四，创建并运行一个新容器"}},[e._v("#")]),e._v(" 四，创建并运行一个新容器")]),e._v(" "),t("p",[e._v("执行命令 "),t("code",[e._v("docker run -p 8000:8000 gin-blog-docker")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ docker run -p 8000:8000 gin-blog-docker\ndial tcp 127.0.0.1:3306: connect: connection refused\n[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.\n - using env:    export GIN_MODE=release\n - using code:    gin.SetMode(gin.ReleaseMode)\n\n...\nActual pid is 1\n')])])]),t("p",[e._v("运行成功，你以为大功告变成吗？")]),e._v(" "),t("p",[e._v("你想太多了，仔细看看控制台的输出了一条错误 "),t("code",[e._v("dial tcp 127.0.0.1:3306: connect: connection refused")])]),e._v(" "),t("p",[e._v("我们研判一下，发现是"),t("code",[e._v("Mysql")]),e._v("的问题，接下来第二项我们将解决这个问题")]),e._v(" "),t("h2",{attrs:{id:"mysql的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql的"}},[e._v("#")]),e._v(" MySQL的")]),e._v(" "),t("h3",{attrs:{id:"一，拉取合理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一，拉取合理"}},[e._v("#")]),e._v(" 一，拉取合理")]),e._v(" "),t("p",[e._v("从"),t("code",[e._v("Docker")]),e._v("的公共仓库"),t("code",[e._v("Dockerhub")]),e._v("下载"),t("code",[e._v("MySQL")]),e._v("数量（国内建议配个单位）")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ docker pull mysql\n")])])]),t("h3",{attrs:{id:"二，创建并运行一个新容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二，创建并运行一个新容器"}},[e._v("#")]),e._v(" 二，创建并运行一个新容器")]),e._v(" "),t("p",[e._v("运行"),t("code",[e._v("Mysql")]),e._v("容器，并设置执行成功后返回容器ID")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=rootroot -d mysql\n8c86ac986da4922492934b6fe074254c9165b8ee3e184d29865921b0fef29e64\n")])])]),t("h4",{attrs:{id:"连接mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连接mysql"}},[e._v("#")]),e._v(" 连接MySQL")]),e._v(" "),t("p",[e._v("初始化的"),t("code",[e._v("Mysql")]),e._v("应该遵循")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2018/03/23/5ab4caab04cf1.png",alt:"图片"}})]),e._v(" "),t("h2",{attrs:{id:"golang-mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#golang-mysql"}},[e._v("#")]),e._v(" Golang + MySQL")]),e._v(" "),t("h3",{attrs:{id:"一，删除总计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一，删除总计"}},[e._v("#")]),e._v(" 一，删除总计")]),e._v(" "),t("p",[e._v("由于原本的可能存在问题，我们需要删除它，此处有几种做法")]),e._v(" "),t("ul",[t("li",[e._v("删除原本有问题的合并，重新合并一个新的合并")]),e._v(" "),t("li",[e._v("重新打造一个不同"),t("code",[e._v("name")]),e._v("，"),t("code",[e._v("tag")]),e._v("的新替代")])]),e._v(" "),t("p",[e._v("删除原本的有问题的补充，"),t("code",[e._v("-f")]),e._v("是强制删除及其关联状态")]),e._v(" "),t("p",[e._v("若不执行"),t("code",[e._v("-f")]),e._v("，你需要执行"),t("code",[e._v("docker ps -a")]),e._v("查到所关联的容器，将其"),t("code",[e._v("rm")]),e._v("解除本身依赖关系")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ docker rmi -f gin-blog-docker\nUntagged: gin-blog-docker:latest\nDeleted: sha256:d8a109c7697c3c2d9b4de7dbb49669d10106902122817b6467a031706bc52ab4\nDeleted: sha256:b65bd4076c65a3c24029ca4def3b3f37001ff7c9eca09e2590c4d29e1e23dce5\nDeleted: sha256:7bfbeb301fea9d8912a4b7c43e4bb8b69bdc57f0b416b372bfb6510e476a7dee\nDeleted: sha256:3b60960120cf619181c1762cdc1b8ce318b8c815e056659809252dd321bcb642\nDeleted: sha256:56294f978c5dfcfa4afa8ad033fd76b755b7ecb5237c6829550741a4d2ce10bc\n")])])]),t("h3",{attrs:{id:"二，修改配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二，修改配置文件"}},[e._v("#")]),e._v(" 二，修改配置文件")]),e._v(" "),t("p",[e._v("将项目的配置文件"),t("code",[e._v("conf/app.ini")]),e._v("，内容修改为")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("#debug or release\nRUN_MODE = debug\n\n[app]\nPAGE_SIZE = 10\nJWT_SECRET = 233\n\n[server]\nHTTP_PORT = 8000\nREAD_TIMEOUT = 60\nWRITE_TIMEOUT = 60\n\n[database]\nTYPE = mysql\nUSER = root\nPASSWORD = rootroot\nHOST = mysql:3306\nNAME = blog\nTABLE_PREFIX = blog_\n")])])]),t("h3",{attrs:{id:"三，重新建构合理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三，重新建构合理"}},[e._v("#")]),e._v(" 三，重新建构合理")]),e._v(" "),t("p",[e._v("重复先前的步骤，回到"),t("code",[e._v("gin-blog")]),e._v("的项目根目录下"),t("strong",[e._v("执行")]),e._v(" "),t("code",[e._v("docker build -t gin-blog-docker .")])]),e._v(" "),t("h3",{attrs:{id:"四，创建并运行一个新容器-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四，创建并运行一个新容器-2"}},[e._v("#")]),e._v(" 四，创建并运行一个新容器")]),e._v(" "),t("h2",{attrs:{id:"关联"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关联"}},[e._v("#")]),e._v(" 关联")]),e._v(" "),t("p",[e._v("问：我们需要将"),t("code",[e._v("Golang")]),e._v("容器和"),t("code",[e._v("Mysql")]),e._v("容器关联起来，那么我们需要怎么做呢？")]),e._v(" "),t("p",[e._v("A：增加命令"),t("code",[e._v("--link mysql:mysql")]),e._v("让"),t("code",[e._v("Golang")]),e._v("容器与"),t("code",[e._v("Mysql")]),e._v("容器互联；通过"),t("code",[e._v("--link")]),e._v("，"),t("strong",[e._v("可以在容器内部直接使用其关联的容器别名进行访问")]),e._v("，而不通过IP，但是"),t("code",[e._v("--link")]),e._v("只能解决单机容器间的关联，在分散多机的情况下，需要通过别的方式进行连接")]),e._v(" "),t("h2",{attrs:{id:"运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[e._v("#")]),e._v(" 运行")]),e._v(" "),t("p",[e._v("执行命令 "),t("code",[e._v("docker run --link mysql:mysql -p 8000:8000 gin-blog-docker")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ docker run --link mysql:mysql -p 8000:8000 gin-blog-docker\n[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.\n - using env:    export GIN_MODE=release\n - using code:    gin.SetMode(gin.ReleaseMode)\n...\nActual pid is 1\n')])])]),t("h2",{attrs:{id:"结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结果"}},[e._v("#")]),e._v(" 结果")]),e._v(" "),t("p",[e._v("检查启动输出，接口测试，数据库内部数据，均正常；我们的"),t("code",[e._v("Golang")]),e._v("容器和"),t("code",[e._v("Mysql")]),e._v("容器成功关联运行，大功告成:)")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"评论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#评论"}},[e._v("#")]),e._v(" 评论")]),e._v(" "),t("h3",{attrs:{id:"思考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[e._v("#")]),e._v(" 思考")]),e._v(" "),t("p",[e._v("虽然应用已经能够跑起来了")]),e._v(" "),t("p",[e._v("但如果对"),t("code",[e._v("Golang")]),e._v("和"),t("code",[e._v("Docker")]),e._v("有一定的了解，我希望你能够想到至少2个问题")]),e._v(" "),t("ul",[t("li",[e._v("为什么"),t("code",[e._v("gin-blog-docker")]),e._v("占用空间这么大？（可用"),t("code",[e._v("docker ps -as | grep gin-blog-docker")]),e._v("查看）")]),e._v(" "),t("li",[t("code",[e._v("Mysql")]),e._v(" 容器直接这么使用，数据存储到哪里去了？")])]),e._v(" "),t("h3",{attrs:{id:"创建超小的golang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建超小的golang"}},[e._v("#")]),e._v(" 创建超小的Golang")]),e._v(" "),t("p",[e._v("问：第一个问题，为什么这么庞大体积这么大？")]),e._v(" "),t("p",[e._v("答："),t("code",[e._v("FROM golang:latest")]),e._v("拉取的是官方"),t("code",[e._v("golang")]),e._v("认可的，包含Golang的编译和运行环境，外加一堆GCC，构建工具，相当齐全")]),e._v(" "),t("p",[e._v("这是有问题的，"),t("strong",[e._v("我们可以不在Golang容器中现场编译的")]),e._v("，压根用不到那些东西，我们只需要一个能够运行替换文件的环境即可")]),e._v(" "),t("h4",{attrs:{id:"建立从零开始"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建立从零开始"}},[e._v("#")]),e._v(" 建立从零开始")]),e._v(" "),t("p",[e._v("从头开始，简洁，小巧，基本是个空更长")]),e._v(" "),t("h5",{attrs:{id:"一，修改dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一，修改dockerfile"}},[e._v("#")]),e._v(" 一，修改Dockerfile")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('FROM scratch\n\nWORKDIR $GOPATH/src/github.com/EDDYCJY/go-gin-example\nCOPY . $GOPATH/src/github.com/EDDYCJY/go-gin-example\n\nEXPOSE 8000\nCMD ["./go-gin-example"]\n')])])]),t("h5",{attrs:{id:"二，编译的文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二，编译的文件"}},[e._v("#")]),e._v(" 二，编译的文件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o go-gin-example .\n")])])]),t("p",[e._v("在这里因为使用的是"),t("code",[e._v("scratch")]),e._v("副本，它是空的，因此我们需要将生成的替代文件静态链接所依赖的库")]),e._v(" "),t("h5",{attrs:{id:"三，积累成果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三，积累成果"}},[e._v("#")]),e._v(" 三，积累成果")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ docker build -t gin-blog-docker-scratch .\nSending build context to Docker daemon 133.1 MB\nStep 1/5 : FROM scratch\n ---\x3e \nStep 2/5 : WORKDIR $GOPATH/src/github.com/EDDYCJY/go-gin-example\n ---\x3e Using cache\n ---\x3e ee07e166a638\nStep 3/5 : COPY . $GOPATH/src/github.com/EDDYCJY/go-gin-example\n ---\x3e 1489a0693d51\nRemoving intermediate container e3e9efc0fe4d\nStep 4/5 : EXPOSE 8000\n ---\x3e Running in b5630de5544a\n ---\x3e 6993e9f8c944\nRemoving intermediate container b5630de5544a\nStep 5/5 : CMD ./go-gin-example\n ---\x3e Running in eebc0d8628ae\n ---\x3e 5310bebeb86a\nRemoving intermediate container eebc0d8628ae\nSuccessfully built 5310bebeb86a\n")])])]),t("p",[e._v("注意，假设你的Golang应用没有依赖任何的配置等文件，是可以直接把插入文件给拷贝进去即可，其他都不必担心")]),e._v(" "),t("p",[e._v("这里可以有好几种解决方案")]),e._v(" "),t("ul",[t("li",[e._v("依赖文件统一管理挂载")]),e._v(" "),t("li",[e._v("go-bindata一下")])]),e._v(" "),t("p",[e._v("...")]),e._v(" "),t("p",[e._v("因此这里如果"),t("strong",[e._v("解决了文件依赖的问题")]),e._v("后，就不需要把目录给"),t("code",[e._v("COPY")]),e._v("进去了")]),e._v(" "),t("h5",{attrs:{id:"四，运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四，运行"}},[e._v("#")]),e._v(" 四，运行")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ docker run --link mysql:mysql -p 8000:8000 gin-blog-docker-scratch\n[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.\n - using env:    export GIN_MODE=release\n - using code:    gin.SetMode(gin.ReleaseMode)\n\n[GIN-debug] GET    /auth                     --\x3e github.com/EDDYCJY/go-gin-example/routers/api.GetAuth (3 handlers)\n...\n')])])]),t("p",[e._v("成功运行，程序也正常接收请求")]),e._v(" "),t("p",[e._v("接下来我们再看看占用大小，执行"),t("code",[e._v("docker ps -as")]),e._v("命令")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ docker ps -as\nCONTAINER ID        IMAGE                     COMMAND                  ...         SIZE\n9ebdba5a8445        gin-blog-docker-scratch   "./go-gin-example"       ...     0 B (virtual 132 MB)\n427ee79e6857        gin-blog-docker           "./go-gin-example"       ...     0 B (virtual 946 MB)\n')])])]),t("p",[e._v("从结果而言，占用大小以"),t("code",[e._v("Scratch")]),e._v("既为基础的容器完胜，完成目标")]),e._v(" "),t("h3",{attrs:{id:"mysql挂载数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql挂载数据卷"}},[e._v("#")]),e._v(" Mysql挂载数据卷")]),e._v(" "),t("p",[e._v("假如若不做任何干预，在每次启动一个"),t("code",[e._v("Mysql")]),e._v("容器时，数据库都是空的。另外容器删除之后，数据就丢失了（还有各类意外情况），非常糟糕！")]),e._v(" "),t("h4",{attrs:{id:"数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据卷"}},[e._v("#")]),e._v(" 数据卷")]),e._v(" "),t("p",[e._v("数据卷是被设计为保存持久化数据的，它的生命周期独立于容器，Docker不会在容器被删除后自动删除数据卷，并且也不存在垃圾回收这样的机制来处理没有任何容器引用的数据卷。如果需要在删除容器的同时移除数据卷。可以在删除容器的时候使用"),t("code",[e._v("docker rm -v")]),e._v("这个命令")]),e._v(" "),t("p",[e._v("数据卷是一个可以感知一个或多个容器使用的特殊目录，它绕过UFS，可以提供很多有用的特性：")]),e._v(" "),t("ul",[t("li",[e._v("数据卷可以在容器之间共享和重用")]),e._v(" "),t("li",[e._v("对数据卷的修改会立马体现")]),e._v(" "),t("li",[e._v("对数据卷的更新，不会影响附加")]),e._v(" "),t("li",[e._v("数据卷默认会一直存在，甚至容器被删除")])]),e._v(" "),t("blockquote",[t("p",[e._v("注意：数据卷的使用，而不是Linux下对目录或文件进行mount，替换中的被指定为挂载点的目录中的文件会隐藏掉，能显示看的是挂载的数据卷。")])]),e._v(" "),t("h4",{attrs:{id:"如何挂载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何挂载"}},[e._v("#")]),e._v(" 如何挂载")]),e._v(" "),t("p",[e._v("首先创建一个目录用于存放数据卷；示例目录"),t("code",[e._v("/data/docker-mysql")]),e._v("，注意"),t("code",[e._v("--name")]),e._v("原本名称为"),t("code",[e._v("mysql")]),e._v("的容器，需要将其删除"),t("code",[e._v("docker rm")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=rootroot -v /data/docker-mysql:/var/lib/mysql -d mysql\n54611dbcd62eca33fb320f3f624c7941f15697d998f40b24ee535a1acf93ae72\n")])])]),t("p",[e._v("创建成功，检查目录"),t("code",[e._v("/data/docker-mysql")]),e._v("，下面多了很多数据库文件")]),e._v(" "),t("h4",{attrs:{id:"验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[e._v("#")]),e._v(" 验证")]),e._v(" "),t("p",[e._v("接下来交由你进行验证，目标是创建一些测试表和数据，然后删除当前容器，重新创建的容器，数据库数据也依然存在（当然了数据卷指向要一致）")]),e._v(" "),t("p",[e._v("我已验证完毕，你呢？")]),e._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),t("h3",{attrs:{id:"本系列示例代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本系列示例代码"}},[e._v("#")]),e._v(" 本系列示例代码")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/EDDYCJY/go-gin-example",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-gin-example"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"书籍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#书籍"}},[e._v("#")]),e._v(" 书籍")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.gitbook.com/book/yeasy/docker_practice/details",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker-从入门到实践"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=_.exports}}]);