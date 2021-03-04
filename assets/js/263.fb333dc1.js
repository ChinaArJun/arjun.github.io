(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{699:function(v,_,t){"use strict";t.r(_);var d=t(44),r=Object(d.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"skr-shop-通用抽奖工具之需求分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#skr-shop-通用抽奖工具之需求分析"}},[v._v("#")]),v._v(" [Skr-Shop]通用抽奖工具之需求分析")]),v._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),t("p",[v._v("首先我们先来回顾下"),t("strong",[v._v("营销体系")]),v._v("的组成：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("营销体系")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("活动营销系统")])]),v._v(" "),t("tr",[t("td",[v._v("销售营销系统")])])])]),v._v(" "),t("p",[v._v("今天带来的是"),t("strong",[v._v("活动营销系统")]),v._v("下的第一个独立子系统"),t("strong",[v._v("通用抽奖工具")]),v._v("的介绍，本篇文章主要分为如下4部分：")]),v._v(" "),t("ul",[t("li",[v._v("常见抽奖场景与归类")]),v._v(" "),t("li",[v._v("抽奖需求配置")]),v._v(" "),t("li",[v._v("常见奖品类型")]),v._v(" "),t("li",[v._v("抽奖五要素")])]),v._v(" "),t("h2",{attrs:{id:"常见抽奖场景与归类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见抽奖场景与归类"}},[v._v("#")]),v._v(" 常见抽奖场景与归类")]),v._v(" "),t("p",[v._v("下面是我列出来的一些常见的抽奖场景，红包雨、糖果雨、打地鼠、大转盘(九宫格)、考眼力、答题闯关、游戏闯关、支付刮刮乐、积分刮刮乐等等活动营销场景。")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("活动名称")]),v._v(" "),t("th",[v._v("描述")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("红包雨")]),v._v(" "),t("td",[v._v("每日整点抢红包🧧抽奖，每个整点一般可参与一次")])]),v._v(" "),t("tr",[t("td",[v._v("糖果雨")]),v._v(" "),t("td",[v._v("每日整点抢糖果🍬抽奖，每个整点一般可参与一次")])]),v._v(" "),t("tr",[t("td",[v._v("打地鼠")]),v._v(" "),t("td",[v._v("每日整点打地鼠抽奖，每个整点一般可参与一次")])]),v._v(" "),t("tr",[t("td",[v._v("大转盘(九宫格)")]),v._v(" "),t("td",[v._v("某个时间段，转盘抽奖，每个场一般可参N次")])]),v._v(" "),t("tr",[t("td",[v._v("考眼力")]),v._v(" "),t("td",[v._v("某个时间段，旋转杯子猜小球在哪个被子里，猜对可抽奖，一般每日可参与N次")])]),v._v(" "),t("tr",[t("td",[v._v("答题闯关")]),v._v(" "),t("td",[v._v("每过一关，可参与抽奖，越到后面奖品越贵重")])]),v._v(" "),t("tr",[t("td",[v._v("游戏闯关")]),v._v(" "),t("td",[v._v("每过一关，可参与抽奖，越到后面奖品越贵重")])]),v._v(" "),t("tr",[t("td",[v._v("支付刮刮乐")]),v._v(" "),t("td",[v._v("支付订单后可刮奖，支付金额越大奖品越贵重")])]),v._v(" "),t("tr",[t("td",[v._v("积分刮刮乐")]),v._v(" "),t("td",[v._v("积分刮奖，消费积分额度越大奖品越贵重")])])])]),v._v(" "),t("p",[v._v("通过上面的活动描述，我们把整个抽奖场景归为以下三类：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("类型")]),v._v(" "),t("th",[v._v("活动名称")]),v._v(" "),t("th",[v._v("维度")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("按时间抽奖")]),v._v(" "),t("td",[v._v("红包雨、糖果雨、打地鼠、幸运大转盘(九宫格)、考眼力")]),v._v(" "),t("td",[v._v("时间维度")])]),v._v(" "),t("tr",[t("td",[v._v("按抽奖次数抽奖")]),v._v(" "),t("td",[v._v("答题闯关、游戏闯关")]),v._v(" "),t("td",[v._v("参与该活动次数维度")])]),v._v(" "),t("tr",[t("td",[v._v("按数额范围区间抽奖")]),v._v(" "),t("td",[v._v("支付刮刮乐、积分刮刮乐")]),v._v(" "),t("td",[v._v("数额区间维度")])])])]),v._v(" "),t("p",[v._v("接着我们来看下每类抽奖活动具体的抽奖需求配置。")]),v._v(" "),t("h2",{attrs:{id:"抽奖需求配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抽奖需求配置"}},[v._v("#")]),v._v(" 抽奖需求配置")]),v._v(" "),t("p",[v._v("本小节每类抽奖活动的需求配置，分为如下三个部分：")]),v._v(" "),t("ul",[t("li",[v._v("活动配置")]),v._v(" "),t("li",[v._v("场次配置")]),v._v(" "),t("li",[v._v("奖品配置")])]),v._v(" "),t("h3",{attrs:{id:"首先，第一类-按时间抽奖的需求配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首先，第一类-按时间抽奖的需求配置"}},[v._v("#")]),v._v(" 首先，第一类: "),t("code",[v._v("按时间抽奖")]),v._v("的需求配置")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("类型")]),v._v(" "),t("th",[v._v("活动名称")]),v._v(" "),t("th",[v._v("特点")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("按时间抽奖")]),v._v(" "),t("td",[v._v("红包雨、糖果雨、打地鼠、幸运大转盘(九宫格)、考眼力")]),v._v(" "),t("td",[v._v("时间维度")])])])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("按时间抽奖")]),v._v(" "),t("th",[v._v("是否多场次")]),v._v(" "),t("th",[v._v("单场次次数限制(次)")]),v._v(" "),t("th",[v._v("总场次次数限制(次)")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("红包雨")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("1")]),v._v(" "),t("td",[v._v("N")])]),v._v(" "),t("tr",[t("td",[v._v("糖果雨")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("1")]),v._v(" "),t("td",[v._v("N")])]),v._v(" "),t("tr",[t("td",[v._v("打地鼠")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("N")]),v._v(" "),t("td",[v._v("N")])]),v._v(" "),t("tr",[t("td",[v._v("幸运大转盘(九宫格)")]),v._v(" "),t("td",[v._v("否")]),v._v(" "),t("td",[v._v("N")]),v._v(" "),t("td",[v._v("N")])]),v._v(" "),t("tr",[t("td",[v._v("考眼力")]),v._v(" "),t("td",[v._v("否")]),v._v(" "),t("td",[v._v("N")]),v._v(" "),t("td",[v._v("N")])])])]),v._v(" "),t("p",[v._v("通过上面的分析我们得到了"),t("strong",[v._v("活动")]),v._v("和"),t("strong",[v._v("场次")]),v._v("的概念: 一个活动需要支持多场次的配置。")]),v._v(" "),t("ul",[t("li",[v._v("活动activity:配置活动的日期范围")]),v._v(" "),t("li",[v._v("场次session:配置每场的具体时间范围")])]),v._v(" "),t("p",[t("strong",[v._v("红包雨的需求配置示例：")])]),v._v(" "),t("blockquote",[t("p",[v._v("活动特征：红包雨需要支持多场次。")])]),v._v(" "),t("p",[v._v("比如双十二期间三天、每天三场整点红包雨配置如下：")]),v._v(" "),t("p",[v._v("活动、场次配置：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("双十二红包雨")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("活动配置：")])]),v._v(" "),t("tr",[t("td",[v._v("2019-12-10 ~ 2019-12-12")])]),v._v(" "),t("tr",[t("td",[v._v("场次配置：")])]),v._v(" "),t("tr",[t("td",[v._v("10:00:00 ~ 10:01:00")])]),v._v(" "),t("tr",[t("td",[v._v("12:00:00 ~ 12:01:00")])]),v._v(" "),t("tr",[t("td",[v._v("18:00:00 ~ 18:01:00")])])])]),v._v(" "),t("p",[v._v("奖品配置：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("场次")]),v._v(" "),t("th",[v._v("奖品1")]),v._v(" "),t("th",[v._v("奖品2")]),v._v(" "),t("th",[v._v("---")]),v._v(" "),t("th",[v._v("奖品N")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("场次10:00:00 ~ 10:01:00")]),v._v(" "),t("td",[v._v("优惠券2元")]),v._v(" "),t("td",[v._v("空奖")]),v._v(" "),t("td",[v._v("---")]),v._v(" "),t("td",[v._v("无")])]),v._v(" "),t("tr",[t("td",[v._v("场次12:00:00 ~ 12:01:00")]),v._v(" "),t("td",[v._v("优惠券5元")]),v._v(" "),t("td",[v._v("空奖")]),v._v(" "),t("td",[v._v("---")]),v._v(" "),t("td",[v._v("无")])]),v._v(" "),t("tr",[t("td",[v._v("场次18:00:00 ~ 18:01:00")]),v._v(" "),t("td",[v._v("优惠券10元")]),v._v(" "),t("td",[v._v("优惠券20元")]),v._v(" "),t("td",[v._v("---")]),v._v(" "),t("td",[v._v("空奖")])])])]),v._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[v._v("上面配置的结果如下：\n\n2019-12-10日三场整点红包雨：\n2019-12-10 10:00:00 "),t("span",{pre:!0,attrs:{class:"token strike"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("~")]),t("span",{pre:!0,attrs:{class:"token content"}},[v._v(" 10:01:00\n2019-12-10 12:00:00 ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("~")])]),v._v(" 12:01:00\n2019-12-10 18:00:00 ~ 18:01:00\n\n2019-12-11日三场整点红包雨：\n2019-12-11 10:00:00 "),t("span",{pre:!0,attrs:{class:"token strike"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("~")]),t("span",{pre:!0,attrs:{class:"token content"}},[v._v(" 10:01:00\n2019-12-11 12:00:00 ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("~")])]),v._v(" 12:01:00\n2019-12-11 18:00:00 ~ 18:01:00\n\n2019-12-12日三场整点红包雨：\n2019-12-12 10:00:00 "),t("span",{pre:!0,attrs:{class:"token strike"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("~")]),t("span",{pre:!0,attrs:{class:"token content"}},[v._v(" 10:01:00\n2019-12-12 12:00:00 ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("~")])]),v._v(" 12:01:00\n2019-12-12 18:00:00 ~ 18:01:00\n")])])]),t("p",[t("strong",[v._v("幸运大转盘的需求配置示例：")])]),v._v(" "),t("blockquote",[t("p",[v._v("活动特征：幸运大转盘不需要多场次。")])]),v._v(" "),t("p",[v._v("比如年货节2020-01-20 ～ 2020-02-10期间幸运大转盘配置如下：")]),v._v(" "),t("p",[v._v("活动、场次配置：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("双十二幸运大转盘")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("活动配置：")])]),v._v(" "),t("tr",[t("td",[v._v("2019-12-10 ~ 2019-12-12")])]),v._v(" "),t("tr",[t("td",[v._v("场次配置：")])]),v._v(" "),t("tr",[t("td",[v._v("00:00:00 ~ 23:59:59")])])])]),v._v(" "),t("p",[v._v("奖品配置：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("场次")]),v._v(" "),t("th",[v._v("奖品1")]),v._v(" "),t("th",[v._v("奖品2")]),v._v(" "),t("th",[v._v("---")]),v._v(" "),t("th",[v._v("奖品N")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("场次00:00:00 ~ 23:59:59")]),v._v(" "),t("td",[v._v("优惠券2元")]),v._v(" "),t("td",[v._v("空奖")]),v._v(" "),t("td",[v._v("---")]),v._v(" "),t("td",[v._v("无")])])])]),v._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[v._v("上面配置的结果如下：\n\n幸运大转盘抽奖活动将于 2019-12-10 00:00:00 ~ 2019-12-12 23:59:59 进行\n")])])]),t("p",[v._v("注意与思考：双十二幸运大转盘不需要多个场次，只配置一个场次即可，完全复用活动场次模型。")]),v._v(" "),t("h3",{attrs:{id:"接着，第二类-按抽奖次数抽奖的需求配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接着，第二类-按抽奖次数抽奖的需求配置"}},[v._v("#")]),v._v(" 接着，第二类: "),t("code",[v._v("按抽奖次数抽奖")]),v._v("的需求配置")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("类型")]),v._v(" "),t("th",[v._v("活动名称")]),v._v(" "),t("th",[v._v("特点")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("按抽奖次数抽奖")]),v._v(" "),t("td",[v._v("答题闯关、游戏闯关")]),v._v(" "),t("td",[v._v("(成功参与)当前活动次数维度")])])])]),v._v(" "),t("p",[t("strong",[v._v("答题闯关的需求配置示例：")])]),v._v(" "),t("blockquote",[t("p",[v._v("活动特征：每一关的奖品不同，一般越到后面中大奖的几率越大。")])]),v._v(" "),t("p",[v._v("活动、场次配置：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("双十二答题闯关")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("活动配置：")])]),v._v(" "),t("tr",[t("td",[v._v("2019-12-10 ~ 2019-12-12")])]),v._v(" "),t("tr",[t("td",[v._v("场次配置：")])]),v._v(" "),t("tr",[t("td",[v._v("00:00:00 ~ 23:59:59")])])])]),v._v(" "),t("p",[v._v("奖品配置：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("双十二答题闯关")]),v._v(" "),t("th",[v._v("奖品")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("第一关")]),v._v(" "),t("td",[v._v("优惠券2元")])]),v._v(" "),t("tr",[t("td",[v._v("第二关")]),v._v(" "),t("td",[v._v("优惠券5元")])]),v._v(" "),t("tr",[t("td",[v._v("第三关")]),v._v(" "),t("td",[v._v("优惠券10元")])]),v._v(" "),t("tr",[t("td",[v._v("第四关")]),v._v(" "),t("td",[v._v("优惠券20元")])]),v._v(" "),t("tr",[t("td",[v._v("第五关")]),v._v(" "),t("td",[v._v("优惠券50元")])]),v._v(" "),t("tr",[t("td",[v._v("第六关")]),v._v(" "),t("td",[v._v("优惠券100元")])])])]),v._v(" "),t("p",[v._v("注意与思考：同理活动&场次配置完全复用，同幸运大转盘配置(不需要支持多场次)。")]),v._v(" "),t("h3",{attrs:{id:"最后，第三类-按数额范围区间抽奖的需求配置："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最后，第三类-按数额范围区间抽奖的需求配置："}},[v._v("#")]),v._v(" 最后，第三类: "),t("code",[v._v("按数额范围区间抽奖")]),v._v("的需求配置：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("类型")]),v._v(" "),t("th",[v._v("活动名称")]),v._v(" "),t("th",[v._v("特点")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("按数额范围区间抽奖")]),v._v(" "),t("td",[v._v("支付刮刮乐、积分刮刮乐")]),v._v(" "),t("td",[v._v("数额区间维度")])])])]),v._v(" "),t("p",[t("strong",[v._v("支付刮刮乐的需求配置示例：")])]),v._v(" "),t("blockquote",[t("p",[v._v("活动特征：不同的订单金额，一般金额越大中大奖的几率越大。")])]),v._v(" "),t("p",[v._v("活动、场次配置:")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("双十二答题闯关")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("活动配置：")])]),v._v(" "),t("tr",[t("td",[v._v("2019-12-10 ~ 2019-12-12")])]),v._v(" "),t("tr",[t("td",[v._v("场次配置：")])]),v._v(" "),t("tr",[t("td",[v._v("00:00:00 ~ 23:59:59")])])])]),v._v(" "),t("p",[v._v("奖品配置：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("订单金额")]),v._v(" "),t("th",[v._v("奖品1")]),v._v(" "),t("th",[v._v("奖品2")]),v._v(" "),t("th",[v._v("---")]),v._v(" "),t("th",[v._v("奖品N")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("0~100")]),v._v(" "),t("td",[v._v("优惠券2元")]),v._v(" "),t("td",[v._v("空奖")]),v._v(" "),t("td",[v._v("---")]),v._v(" "),t("td",[v._v("无")])]),v._v(" "),t("tr",[t("td",[v._v("100~200")]),v._v(" "),t("td",[v._v("优惠券5元")]),v._v(" "),t("td",[v._v("空奖")]),v._v(" "),t("td",[v._v("---")]),v._v(" "),t("td",[v._v("无")])]),v._v(" "),t("tr",[t("td",[v._v("200~1000")]),v._v(" "),t("td",[v._v("优惠券10元")]),v._v(" "),t("td",[v._v("优惠券20元")]),v._v(" "),t("td",[v._v("---")]),v._v(" "),t("td",[v._v("空奖")])]),v._v(" "),t("tr",[t("td",[v._v("1000以上")]),v._v(" "),t("td",[v._v("优惠券50元")]),v._v(" "),t("td",[v._v("笔记本电脑")]),v._v(" "),t("td",[v._v("---")]),v._v(" "),t("td",[v._v("空奖")])])])]),v._v(" "),t("p",[v._v("注意与思考：同理活动&场次配置完全复用，同幸运大转盘配置(不需要支持多场次)。")]),v._v(" "),t("blockquote",[t("p",[v._v("总结: 通过上面的分析我们得到了抽奖工具的两个要素"),t("strong",[v._v("活动")]),v._v("和"),t("strong",[v._v("场次")]),v._v("。")])]),v._v(" "),t("h2",{attrs:{id:"常见奖品类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见奖品类型"}},[v._v("#")]),v._v(" 常见奖品类型")]),v._v(" "),t("blockquote",[t("p",[v._v("抽奖抽什么？")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("常见奖品类型")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("优惠券")])]),v._v(" "),t("tr",[t("td",[v._v("积分")])]),v._v(" "),t("tr",[t("td",[v._v("实物")])]),v._v(" "),t("tr",[t("td",[v._v("空奖")])])])]),v._v(" "),t("blockquote",[t("p",[v._v("总结: 我们得到了抽奖工具的另一个要素"),t("strong",[v._v("奖品")]),v._v("。")])]),v._v(" "),t("h2",{attrs:{id:"抽奖五要素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抽奖五要素"}},[v._v("#")]),v._v(" 抽奖五要素")]),v._v(" "),t("p",[v._v("通过上面的分析我们已经得到了抽奖的"),t("strong",[v._v("三要素")])]),v._v(" "),t("ul",[t("li",[v._v("活动")]),v._v(" "),t("li",[v._v("场次")]),v._v(" "),t("li",[v._v("奖品")])]),v._v(" "),t("blockquote",[t("p",[v._v("那还有什么要素我们还没聊到呢？接下来来看。")])]),v._v(" "),t("h4",{attrs:{id:"第四要素：中奖概率"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第四要素：中奖概率"}},[v._v("#")]),v._v(" 第四要素：中奖概率")]),v._v(" "),t("p",[v._v("抽奖自然离不开奖品的中奖概率的设置。关于中奖概率我们支持如下灵活的配置：")]),v._v(" "),t("ol",[t("li",[v._v("手动设置奖品中奖概率")]),v._v(" "),t("li",[v._v("自动概率，根据当前奖品的数量、奖品的权重得到中奖概率")])]),v._v(" "),t("p",[v._v("比如我们某次大促活动红包雨的配置如下：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("活动配置")]),v._v(" "),t("th",[v._v("描述")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("活动时间")]),v._v(" "),t("td",[v._v("2019-12-10~2019-12-12")])]),v._v(" "),t("tr",[t("td",[v._v("活动名称")]),v._v(" "),t("td",[v._v("2019双十二大促整点红包雨")])]),v._v(" "),t("tr",[t("td",[v._v("活动描述")]),v._v(" "),t("td",[v._v("2019双十二大促全端整点红包雨活动")])]),v._v(" "),t("tr",[t("td",[v._v("手动设置奖品概率")]),v._v(" "),t("td",[v._v("是")])])])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("场次")]),v._v(" "),t("th",[v._v("奖品类型")]),v._v(" "),t("th",[v._v("具体奖品")]),v._v(" "),t("th",[v._v("奖品数量")]),v._v(" "),t("th",[v._v("中奖概率")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("10:00:00 ~ 10:01:00")]),v._v(" "),t("td",[v._v("优惠券")]),v._v(" "),t("td",[v._v("2元优惠券")]),v._v(" "),t("td",[v._v("2000")]),v._v(" "),t("td",[v._v("50%")])]),v._v(" "),t("tr",[t("td",[v._v("-")]),v._v(" "),t("td",[v._v("优惠券")]),v._v(" "),t("td",[v._v("5元优惠券")]),v._v(" "),t("td",[v._v("1000")]),v._v(" "),t("td",[v._v("20%")])]),v._v(" "),t("tr",[t("td",[v._v("-")]),v._v(" "),t("td",[v._v("空奖")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("5000")]),v._v(" "),t("td",[v._v("30%")])]),v._v(" "),t("tr",[t("td",[v._v("12:00:00 ~ 12:01:00")]),v._v(" "),t("td",[v._v("优惠券")]),v._v(" "),t("td",[v._v("2元优惠券")]),v._v(" "),t("td",[v._v("2000")]),v._v(" "),t("td",[v._v("50%")])]),v._v(" "),t("tr",[t("td",[v._v("-")]),v._v(" "),t("td",[v._v("优惠券")]),v._v(" "),t("td",[v._v("5元优惠券")]),v._v(" "),t("td",[v._v("1000")]),v._v(" "),t("td",[v._v("20%")])]),v._v(" "),t("tr",[t("td",[v._v("-")]),v._v(" "),t("td",[v._v("空奖")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("5000")]),v._v(" "),t("td",[v._v("30%")])]),v._v(" "),t("tr",[t("td",[v._v("18:00:00 ~ 18:01:00")]),v._v(" "),t("td",[v._v("优惠券")]),v._v(" "),t("td",[v._v("2元优惠券")]),v._v(" "),t("td",[v._v("2000")]),v._v(" "),t("td",[v._v("50%")])]),v._v(" "),t("tr",[t("td",[v._v("-")]),v._v(" "),t("td",[v._v("优惠券")]),v._v(" "),t("td",[v._v("5元优惠券")]),v._v(" "),t("td",[v._v("1000")]),v._v(" "),t("td",[v._v("20%")])]),v._v(" "),t("tr",[t("td",[v._v("-")]),v._v(" "),t("td",[v._v("空奖")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("5000")]),v._v(" "),t("td",[v._v("30%")])])])]),v._v(" "),t("p",[v._v("备注：每轮场次中奖概率之和必须为100%，否则剩余部分默认添加为空奖的中奖概率。")]),v._v(" "),t("h4",{attrs:{id:"第五要素：均匀投奖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第五要素：均匀投奖"}},[v._v("#")]),v._v(" 第五要素：均匀投奖")]),v._v(" "),t("blockquote",[t("p",[v._v("如何均匀的抽走奖品?")])]),v._v(" "),t("p",[v._v("答案: 均匀投奖。")]),v._v(" "),t("p",[v._v("具体方式为拆分总奖品数量，到各个细致具体的时间段。以双十二幸运大转盘为例：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("场次")]),v._v(" "),t("th",[v._v("奖品类型")]),v._v(" "),t("th",[v._v("具体奖品")]),v._v(" "),t("th",[v._v("奖品数量")]),v._v(" "),t("th",[v._v("中奖概率")]),v._v(" "),t("th",[v._v("投奖时间(默认提前5分钟投奖)")]),v._v(" "),t("th",[v._v("投奖数量")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("00:00:00 ~ 23:59:59")]),v._v(" "),t("td",[v._v("优惠券")]),v._v(" "),t("td",[v._v("2元优惠券")]),v._v(" "),t("td",[v._v("2000")]),v._v(" "),t("td",[v._v("50%")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")])]),v._v(" "),t("tr",[t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("00:00:00")]),v._v(" "),t("td",[v._v("2000")])]),v._v(" "),t("tr",[t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("06:00:00")]),v._v(" "),t("td",[v._v("2000")])]),v._v(" "),t("tr",[t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("12:00:00")]),v._v(" "),t("td",[v._v("2000")])]),v._v(" "),t("tr",[t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("18:00:00")]),v._v(" "),t("td",[v._v("2000")])])])]),v._v(" "),t("p",[v._v("这里我们就得到了抽奖的"),t("strong",[v._v("第五个要素：均匀投奖")]),v._v("。")]),v._v(" "),t("h2",{attrs:{id:"结语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[v._v("#")]),v._v(" 结语")]),v._v(" "),t("p",[v._v("通过上面的分析，我们得到抽奖五要素如下：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("抽奖五要素")]),v._v(" "),t("th",[v._v("要素名称")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("第一要素")]),v._v(" "),t("td",[v._v("活动")])]),v._v(" "),t("tr",[t("td",[v._v("第二要素")]),v._v(" "),t("td",[v._v("场次")])]),v._v(" "),t("tr",[t("td",[v._v("第三要素")]),v._v(" "),t("td",[v._v("奖品")])]),v._v(" "),t("tr",[t("td",[v._v("第四要素")]),v._v(" "),t("td",[v._v("中奖概率")])]),v._v(" "),t("tr",[t("td",[v._v("第五要素")]),v._v(" "),t("td",[v._v("均匀投奖")])])])]),v._v(" "),t("p",[v._v("同时我们通过"),t("strong",[v._v("抽奖五要素")]),v._v("也得到了"),t("strong",[v._v("通用抽奖工具")]),v._v("配置一场抽奖活动的5个基本步骤：")]),v._v(" "),t("ol",[t("li",[v._v("活动配置")]),v._v(" "),t("li",[v._v("场次配置")]),v._v(" "),t("li",[v._v("奖品配置")]),v._v(" "),t("li",[v._v("奖品中奖概率配置")]),v._v(" "),t("li",[v._v("奖品投奖配置")])]),v._v(" "),t("p",[v._v("最后，接着一篇文章，我们将来介绍"),t("strong",[v._v("通用抽奖工具")]),v._v("的DB设计和配置后台设计。")])])}),[],!1,null,null,null);_.default=r.exports}}]);