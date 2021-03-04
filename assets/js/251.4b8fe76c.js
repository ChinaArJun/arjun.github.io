(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{686:function(t,a,e){"use strict";e.r(a);var s=e(44),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_9-1-爬取豆瓣电影-top250"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-爬取豆瓣电影-top250"}},[t._v("#")]),t._v(" 9.1 爬取豆瓣电影 Top250")]),t._v(" "),e("p",[t._v("爬虫是标配了，看数据那一刻很有趣。第一个就从最最最简单最基础的爬虫开始写起吧！")]),t._v(" "),e("p",[t._v("项目地址：https://github.com/go-crawler/douban-movie")]),t._v(" "),e("h2",{attrs:{id:"目标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[t._v("#")]),t._v(" 目标")]),t._v(" "),e("p",[t._v("我们的目标站点是 "),e("a",{attrs:{href:"https://movie.douban.com/top250",target:"_blank",rel:"noopener noreferrer"}},[t._v("豆瓣电影 Top250"),e("OutboundLink")],1),t._v("，估计大家都很眼熟了")]),t._v(" "),e("p",[t._v("本次爬取8个字段，用于简单的概括分析。具体的字段如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2018/03/20/5ab11596b8810.png",alt:"image"}})]),t._v(" "),e("p",[t._v("简单的分析一下目标源")]),t._v(" "),e("ul",[e("li",[t._v("一页共25条")]),t._v(" "),e("li",[t._v("含分页（共10页）且分页规则是正常的")]),t._v(" "),e("li",[t._v("每一项的数据字段排序都是规则且不变")])]),t._v(" "),e("h2",{attrs:{id:"开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[t._v("#")]),t._v(" 开始")]),t._v(" "),e("p",[t._v("由于量不大，我们的爬取步骤如下")]),t._v(" "),e("ul",[e("li",[t._v("分析页面，获取所有的分页")]),t._v(" "),e("li",[t._v("分析页面，循环爬取所有页面的电影信息")]),t._v(" "),e("li",[t._v("爬取的电影信息入库")])]),t._v(" "),e("h3",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ go get -u github.com/PuerkitoBio/goquery\n")])])]),e("h3",{attrs:{id:"运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[t._v("#")]),t._v(" 运行")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ go run main.go\n")])])]),e("h3",{attrs:{id:"代码片段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码片段"}},[t._v("#")]),t._v(" 代码片段")]),t._v(" "),e("h4",{attrs:{id:"_1、获取所有分页"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、获取所有分页"}},[t._v("#")]),t._v(" 1、获取所有分页")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('func ParsePages(doc *goquery.Document) (pages []Page) {\n\tpages = append(pages, Page{Page: 1, Url: ""})\n\tdoc.Find("#content > div > div.article > div.paginator > a").Each(func(i int, s *goquery.Selection) {\n\t\tpage, _ := strconv.Atoi(s.Text())\n\t\turl, _ := s.Attr("href")\n\n\t\tpages = append(pages, Page{\n\t\t\tPage: page,\n\t\t\tUrl:  url,\n\t\t})\n\t})\n\n\treturn pages\n}\n')])])]),e("h4",{attrs:{id:"_2、分析豆瓣电影信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、分析豆瓣电影信息"}},[t._v("#")]),t._v(" 2、分析豆瓣电影信息")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('func ParseMovies(doc *goquery.Document) (movies []Movie) {\n\tdoc.Find("#content > div > div.article > ol > li").Each(func(i int, s *goquery.Selection) {\n\t\ttitle := s.Find(".hd a span").Eq(0).Text()\n\n\t\t...\n\n\t\tmovieDesc := strings.Split(DescInfo[1], "/")\n\t\tyear := strings.TrimSpace(movieDesc[0])\n\t\tarea := strings.TrimSpace(movieDesc[1])\n\t\ttag := strings.TrimSpace(movieDesc[2])\n\n\t\tstar := s.Find(".bd .star .rating_num").Text()\n\n\t\tcomment := strings.TrimSpace(s.Find(".bd .star span").Eq(3).Text())\n\t\tcompile := regexp.MustCompile("[0-9]")\n\t\tcomment = strings.Join(compile.FindAllString(comment, -1), "")\n\n\t\tquote := s.Find(".quote .inq").Text()\n\n\t\t...\n\n\t\tlog.Printf("i: %d, movie: %v", i, movie)\n\n\t\tmovies = append(movies, movie)\n\t})\n\n\treturn movies\n}\n')])])]),e("h3",{attrs:{id:"数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据"}},[t._v("#")]),t._v(" 数据")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2018/03/21/5ab1309594741.png",alt:"image"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2018/03/21/5ab131ca582f8.png",alt:"image"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2018/03/21/5ab130d3a00d9.png",alt:"image"}})]),t._v(" "),e("p",[t._v("看到这些数据，你有什么想法呢，真是好奇 :=)")])])}),[],!1,null,null,null);a.default=n.exports}}]);