(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1078:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"在阿里云oss托管你的个人网站"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在阿里云oss托管你的个人网站"}},[t._v("#")]),t._v(" 在阿里云OSS托管你的个人网站")]),t._v(" "),n("p",[n("code",[t._v("OSS")]),t._v(" 即 "),n("code",[t._v("object storage service")]),t._v("，对象存储服务。我们可以通过阿里云的 "),n("code",[t._v("OSS")]),t._v(" 来托管自己的前端应用，个人网站或者博客")]),t._v(" "),n("p",[t._v("在 "),n("a",{attrs:{href:"https://github.com/ChinaArJun/op-note/blob/master/deploy-fe-with-netlify.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 netlify 托管你的前端应用"),n("OutboundLink")],1),t._v(" 中我也介绍到另一种专业的网站托管服务平台 "),n("code",[t._v("netlify")]),t._v("。那相比 "),n("code",[t._v("netlify")]),t._v("，阿里云的 oss 有什么好处呢？只有一个，网络问题，并且可以结合阿里云的CDN使用。")]),t._v(" "),n("p",[t._v("如果你的域名已经备案，且执着于网络时延，推荐在阿里云的 "),n("code",[t._v("oss")]),t._v(" 部署你的应用。你可以直接在阿里云官网购买 "),n("code",[t._v("oss")]),t._v("，"),n("strong",[t._v("按量付费")]),t._v("，对于个人来说，每个月的花费不足一块。")]),t._v(" "),n("ul",[n("li",[t._v("原文链接: "),n("a",{attrs:{href:"https://github.com/ChinaArJun/op-note/blob/master/deploy-fe-with-alioss.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("在阿里云OSS托管你的前端应用"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("系列文章: "),n("a",{attrs:{href:"https://github.com/ChinaArJun/op-note",target:"_blank",rel:"noopener noreferrer"}},[t._v("个人服务器运维指南"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"新建-bucket-及设置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新建-bucket-及设置"}},[t._v("#")]),t._v(" 新建 Bucket 及设置")]),t._v(" "),n("p",[n("code",[t._v("Bucket")]),t._v(" 是 OSS 中的存储空间。可以跳转到阿里云的 OSS 控制台，根据官方文档 "),n("a",{attrs:{href:"https://help.aliyun.com/document_detail/31885.html?spm=a2c4g.11186623.6.575.51d628bco7rs4U",target:"_blank",rel:"noopener noreferrer"}},[t._v("创建 Bucket"),n("OutboundLink")],1),t._v(" 创建 "),n("code",[t._v("Bucket")]),t._v("。")]),t._v(" "),n("p",[t._v("Bucket 新建成功后，点击 "),n("code",[t._v("基础设置")]),t._v(" 标签页")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("配置读写权限为 "),n("strong",[t._v("公共读")])])]),t._v(" "),n("li",[n("p",[t._v("配置静态页面，默认首页是 "),n("code",[t._v("index.html")]),t._v("，404 页面是 "),n("code",[t._v("404.html")]),t._v("(根据你的错误页面而定)")])])]),t._v(" "),n("h2",{attrs:{id:"上传文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#上传文件"}},[t._v("#")]),t._v(" 上传文件")]),t._v(" "),n("p",[t._v("我们可以使用点击上传按钮或者拖拽的方式来上传文件。但是不方便自动化，我们可以选择使用阿里云的工具 "),n("code",[t._v("ossutil")]),t._v(" 来上传文件，详细文档参考 "),n("a",{attrs:{href:"https://help.aliyun.com/document_detail/120057.html?spm=a2c4g.11186623.2.18.5a777815w2WDpM#section-2ju-iy1-c1g",target:"_blank",rel:"noopener noreferrer"}},[t._v("ossutil"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ ossutil "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -rf .vuepress/dist oss://shanyue-blog/\n")])])]),n("p",[t._v("使用 "),n("code",[t._v("ossutil")]),t._v(" 时，需要创建 "),n("code",[t._v("access key")]),t._v("，参考文档 "),n("a",{attrs:{href:"https://help.aliyun.com/document_detail/53045.html?spm=a2c4g.11186623.2.20.607a448azQVK0g#task-1715673",target:"_blank",rel:"noopener noreferrer"}},[t._v("创建AccessKey"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"绑定域名以及开通-cdn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#绑定域名以及开通-cdn"}},[t._v("#")]),t._v(" 绑定域名以及开通 CDN")]),t._v(" "),n("p",[t._v("在阿里云的 OSS 控制台，选中 Bucket，点击域名管理标签页，绑定用户域名，并配置CDN加速，一路确认")]),t._v(" "),n("p",[n("img",{attrs:{src:a(432),alt:"绑定用户域名"}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(433),alt:"配置CDN加速"}})]),t._v(" "),n("h2",{attrs:{id:"申请证书"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#申请证书"}},[t._v("#")]),t._v(" 申请证书")]),t._v(" "),n("p",[n("img",{attrs:{src:a(434),alt:"申请证书"}})]),t._v(" "),n("h2",{attrs:{id:"cname"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cname"}},[t._v("#")]),t._v(" CNAME")]),t._v(" "),n("p",[n("img",{attrs:{src:a(435),alt:"配置CNAME"}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(436),alt:"配置CDN加速"}})]),t._v(" "),n("h2",{attrs:{id:"trailing-slash-问题与-http-rewrite"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#trailing-slash-问题与-http-rewrite"}},[t._v("#")]),t._v(" Trailing slash 问题与 http rewrite")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("/posts/")]),t._v(" -> "),n("code",[t._v("/posts/index.html")])]),t._v(" "),n("li",[n("code",[t._v("/about")]),t._v(" -> "),n("code",[t._v("/about.html")])])]),t._v(" "),n("p",[n("img",{attrs:{src:a(437),alt:"配置 rewrite"}}),t._v(" "),n("img",{attrs:{src:a(438),alt:"配置 rewrite"}})]),t._v(" "),n("h2",{attrs:{id:"使用-github-actions-自动部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-github-actions-自动部署"}},[t._v("#")]),t._v(" 使用 github actions 自动部署")]),t._v(" "),n("p",[t._v("最后只需要配置自动部署了，这里使用 "),n("code",[t._v("github actions")]),t._v("，具体细节参考我的上一篇文章: "),n("a",{attrs:{href:"https://github.com/ChinaArJun/op-note/blob/master/github-action-guide.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("github actions 入门指南及实践"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("在 github 上可以参考我的配置 "),n("a",{attrs:{href:"https://github.com/arjun/blog/blob/master/.github/workflows/nodejs.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("ChinaArJun/blog"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" deploy to aliyun oss\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("push"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切代码到 runner")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v1\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("submodules")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载 git submodule")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" srt32/git"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("actions@v0.0.3\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" git submodule update "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("init "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("recursive\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 node:10")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" use Node.js 10.x\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v1\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node-version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10.x\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm install")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install and build\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),n("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n        npm install\n        npm run build")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("CI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置阿里云OSS的 id/secret，存储到 github 的 secrets 中")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" setup aliyun oss\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" manyuanrong/setup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ossutil@master\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" oss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("beijing.aliyuncs.com\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("access-key-id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.OSS_KEY_ID "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("access-key-secret")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.OSS_KEY_SECRET "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cp files to aliyun\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ossutil cp "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rf .vuepress/dist oss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//shanyue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("blog/\n")])])]),n("p",[t._v("部署成功")]),t._v(" "),n("p",[n("img",{attrs:{src:a(319),alt:"部署成功"}})])])}),[],!1,null,null,null);s.default=e.exports},319:function(t,s,a){t.exports=a.p+"assets/img/action-result.cd3043ed.png"},432:function(t,s,a){t.exports=a.p+"assets/img/alioss-domain.73a57d0e.png"},433:function(t,s,a){t.exports=a.p+"assets/img/alioss-cdn.dafea18e.png"},434:function(t,s,a){t.exports=a.p+"assets/img/alioss-https.62739652.png"},435:function(t,s,a){t.exports=a.p+"assets/img/alioss-cname.19759d0d.png"},436:function(t,s,a){t.exports=a.p+"assets/img/alioss-proxy.13750e1a.png"},437:function(t,s,a){t.exports=a.p+"assets/img/alioss-rewrite.1f3908ca.png"},438:function(t,s,a){t.exports=a.p+"assets/img/alioss-rewrites.5d7125be.png"}}]);