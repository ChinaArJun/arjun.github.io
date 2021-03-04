(window.webpackJsonp=window.webpackJsonp||[]).push([[603],{1047:function(_,e,t){"use strict";t.r(e);var v=t(44),a=Object(v.a)({},(function(){var _=this,e=_.$createElement,t=_._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"innodb-统计数据是如何收集的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb-统计数据是如何收集的"}},[_._v("#")]),_._v(" InnoDB 统计数据是如何收集的")]),_._v(" "),t("p",[_._v("标签： MySQL 是怎样运行的")]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("我们前边唠叨查询成本的时候经常用到一些统计数据，比如通过"),t("code",[_._v("SHOW TABLE STATUS")]),_._v("可以看到关于表的统计数据，通过"),t("code",[_._v("SHOW INDEX")]),_._v("可以看到关于索引的统计数据，那么这些统计数据是怎么来的呢？它们是以什么方式收集的呢？本章将聚焦于"),t("code",[_._v("InnoDB")]),_._v("存储引擎的统计数据收集策略，看完本章大家就会明白为啥前边老说"),t("code",[_._v("InnoDB")]),_._v("的统计信息是不精确的估计值了（言下之意就是我们不打算介绍"),t("code",[_._v("MyISAM")]),_._v("存储引擎统计数据的收集和存储方式，有想了解的同学自己个儿看看文档哈）。")]),_._v(" "),t("h2",{attrs:{id:"两种不同的统计数据存储方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两种不同的统计数据存储方式"}},[_._v("#")]),_._v(" 两种不同的统计数据存储方式")]),_._v(" "),t("p",[t("code",[_._v("InnoDB")]),_._v("提供了两种存储统计数据的方式：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("永久性的统计数据")]),_._v(" "),t("p",[_._v("这种统计数据存储在磁盘上，也就是服务器重启之后这些统计数据还在。")])]),_._v(" "),t("li",[t("p",[_._v("非永久性的统计数据")]),_._v(" "),t("p",[_._v("这种统计数据存储在内存中，当服务器关闭时这些这些统计数据就都被清除掉了，等到服务器重启之后，在某些适当的场景下才会重新收集这些统计数据。")])])]),_._v(" "),t("p",[_._v("设计"),t("code",[_._v("MySQL")]),_._v("的大叔们给我们提供了系统变量"),t("code",[_._v("innodb_stats_persistent")]),_._v("来控制到底采用哪种方式去存储统计数据。在"),t("code",[_._v("MySQL 5.6.6")]),_._v("之前，"),t("code",[_._v("innodb_stats_persistent")]),_._v("的值默认是"),t("code",[_._v("OFF")]),_._v("，也就是说"),t("code",[_._v("InnoDB")]),_._v("的统计数据默认是存储到内存的，之后的版本中"),t("code",[_._v("innodb_stats_persistent")]),_._v("的值默认是"),t("code",[_._v("ON")]),_._v("，也就是统计数据默认被存储到磁盘中。")]),_._v(" "),t("p",[_._v("不过"),t("code",[_._v("InnoDB")]),_._v("默认是"),t("span",{staticStyle:{color:"red"}},[_._v("以表为单位来收集和存储统计数据的")]),_._v("，也就是说我们可以把某些表的统计数据（以及该表的索引统计数据）存储在磁盘上，把另一些表的统计数据存储在内存中。怎么做到的呢？我们可以在创建和修改表的时候通过指定"),t("code",[_._v("STATS_PERSISTENT")]),_._v("属性来指明该表的统计数据存储方式：")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("CREATE TABLE 表名 (...) Engine=InnoDB, STATS_PERSISTENT = (1|0);\n\nALTER TABLE 表名 Engine=InnoDB, STATS_PERSISTENT = (1|0);\n")])])]),t("p",[_._v("当"),t("code",[_._v("STATS_PERSISTENT=1")]),_._v("时，表明我们想把该表的统计数据永久的存储到磁盘上，当"),t("code",[_._v("STATS_PERSISTENT=0")]),_._v("时，表明我们想把该表的统计数据临时的存储到内存中。如果我们在创建表时未指定"),t("code",[_._v("STATS_PERSISTENT")]),_._v("属性，那默认采用系统变量"),t("code",[_._v("innodb_stats_persistent")]),_._v("的值作为该属性的值。")]),_._v(" "),t("h2",{attrs:{id:"基于磁盘的永久性统计数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于磁盘的永久性统计数据"}},[_._v("#")]),_._v(" 基于磁盘的永久性统计数据")]),_._v(" "),t("p",[_._v("当我们选择把某个表以及该表索引的统计数据存放到磁盘上时，实际上是把这些统计数据存储到了两个表里：")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("mysql> SHOW TABLES FROM mysql LIKE 'innodb%';\n+---------------------------+\n| Tables_in_mysql (innodb%) |\n+---------------------------+\n| innodb_index_stats        |\n| innodb_table_stats        |\n+---------------------------+\n2 rows in set (0.01 sec)\n")])])]),t("p",[_._v("可以看到，这两个表都位于"),t("code",[_._v("mysql")]),_._v("系统数据库下边，其中：")]),_._v(" "),t("ul",[t("li",[t("p",[t("code",[_._v("innodb_table_stats")]),_._v("存储了关于表的统计数据，每一条记录对应着一个表的统计数据。")])]),_._v(" "),t("li",[t("p",[t("code",[_._v("innodb_index_stats")]),_._v("存储了关于索引的统计数据，每一条记录对应着一个索引的一个统计项的统计数据。")])])]),_._v(" "),t("p",[_._v("我们下边的任务就是看一下这两个表里边都有什么以及表里的数据是如何生成的。")]),_._v(" "),t("h3",{attrs:{id:"innodb-table-stats"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb-table-stats"}},[_._v("#")]),_._v(" innodb_table_stats")]),_._v(" "),t("p",[_._v("直接看一下这个"),t("code",[_._v("innodb_table_stats")]),_._v("表中的各个列都是干嘛的：")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[_._v("字段名")]),_._v(" "),t("th",{staticStyle:{"text-align":"left"}},[_._v("描述")])])]),_._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[_._v("database_name")])]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("数据库名")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[_._v("table_name")])]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("表名")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[_._v("last_update")])]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("本条记录最后更新时间")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[_._v("n_rows")])]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("表中记录的条数")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[_._v("clustered_index_size")])]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("表的聚簇索引占用的页面数量")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[_._v("sum_of_other_index_sizes")])]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("表的其他索引占用的页面数量")])])])]),_._v(" "),t("p",[_._v("注意这个表的主键是"),t("code",[_._v("(database_name,table_name)")]),_._v("，也就是"),t("span",{staticStyle:{color:"red"}},[_._v("innodb_table_stats表的每条记录代表着一个表的统计信息")]),_._v("。我们直接看一下这个表里的内容：")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("mysql> SELECT * FROM mysql.innodb_table_stats;\n+---------------+---------------+---------------------+--------+----------------------+--------------------------+\n| database_name | table_name    | last_update         | n_rows | clustered_index_size | sum_of_other_index_sizes |\n+---------------+---------------+---------------------+--------+----------------------+--------------------------+\n| mysql         | gtid_executed | 2018-07-10 23:51:36 |      0 |                    1 |                        0 |\n| sys           | sys_config    | 2018-07-10 23:51:38 |      5 |                    1 |                        0 |\n| xiaohaizi     | single_table  | 2018-12-10 17:03:13 |   9693 |                   97 |                      175 |\n+---------------+---------------+---------------------+--------+----------------------+--------------------------+\n3 rows in set (0.01 sec)\n")])])]),t("p",[_._v("可以看到我们熟悉的"),t("code",[_._v("single_table")]),_._v("表的统计信息就对应着"),t("code",[_._v("mysql.innodb_table_stats")]),_._v("的第三条记录。几个重要统计信息项的值如下：")]),_._v(" "),t("ul",[t("li",[t("p",[t("code",[_._v("n_rows")]),_._v("的值是"),t("code",[_._v("9693")]),_._v("，表明"),t("code",[_._v("single_table")]),_._v("表中大约有"),t("code",[_._v("9693")]),_._v("条记录，注意这个数据是估计值。")])]),_._v(" "),t("li",[t("p",[t("code",[_._v("clustered_index_size")]),_._v("的值是"),t("code",[_._v("97")]),_._v("，表明"),t("code",[_._v("single_table")]),_._v("表的聚簇索引占用97个页面，这个值是也是一个估计值。")])]),_._v(" "),t("li",[t("p",[t("code",[_._v("sum_of_other_index_sizes")]),_._v("的值是"),t("code",[_._v("175")]),_._v("，表明"),t("code",[_._v("single_table")]),_._v("表的其他索引一共占用175个页面，这个值是也是一个估计值。")])])]),_._v(" "),t("h4",{attrs:{id:"n-rows统计项的收集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#n-rows统计项的收集"}},[_._v("#")]),_._v(" n_rows统计项的收集")]),_._v(" "),t("p",[_._v("为啥老强调"),t("code",[_._v("n_rows")]),_._v("这个统计项的值是估计值呢？现在就来揭晓答案。"),t("code",[_._v("InnoDB")]),_._v("统计一个表中有多少行记录的套路是这样的：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("按照一定算法（并不是纯粹随机的）选取几个叶子节点页面，计算每个页面中主键值记录数量，然后计算平均一个页面中主键值的记录数量乘以全部叶子节点的数量就算是该表的"),t("code",[_._v("n_rows")]),_._v("值。")]),_._v(" "),t("div",{staticClass:"language-! extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("小贴士：\n\n真实的计算过程比这个稍微复杂一些，不过大致上就是这样的啦～\n")])])]),t("p",[_._v("可以看出来这个"),t("code",[_._v("n_rows")]),_._v("值精确与否取决于统计时采样的页面数量，设计"),t("code",[_._v("MySQL")]),_._v("的大叔很贴心的为我们准备了一个名为"),t("code",[_._v("innodb_stats_persistent_sample_pages")]),_._v("的系统变量来控制"),t("span",{staticStyle:{color:"red"}},[_._v("使用永久性的统计数据时，计算统计数据时采样的页面数量")]),_._v("。该值设置的越大，统计出的"),t("code",[_._v("n_rows")]),_._v("值越精确，但是统计耗时也就最久；该值设置的越小，统计出的"),t("code",[_._v("n_rows")]),_._v("值越不精确，但是统计耗时特别少。所以在实际使用是需要我们去权衡利弊，该系统变量的默认值是"),t("code",[_._v("20")]),_._v("。")]),_._v(" "),t("p",[_._v("我们前边说过，不过"),t("code",[_._v("InnoDB")]),_._v("默认是"),t("span",{staticStyle:{color:"red"}},[_._v("以表为单位来收集和存储统计数据的")]),_._v("，我们也可以单独设置某个表的采样页面的数量，设置方式就是在创建或修改表的时候通过指定"),t("code",[_._v("STATS_SAMPLE_PAGES")]),_._v("属性来指明该表的统计数据存储方式：")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("CREATE TABLE 表名 (...) Engine=InnoDB, STATS_SAMPLE_PAGES = 具体的采样页面数量;\n\nALTER TABLE 表名 Engine=InnoDB, STATS_SAMPLE_PAGES = 具体的采样页面数量;\n")])])]),t("p",[_._v("如果我们在创建表的语句中并没有指定"),t("code",[_._v("STATS_SAMPLE_PAGES")]),_._v("属性的话，将默认使用系统变量"),t("code",[_._v("innodb_stats_persistent_sample_pages")]),_._v("的值作为该属性的值。")])])]),_._v(" "),t("h4",{attrs:{id:"clustered-index-size和sum-of-other-index-sizes统计项的收集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clustered-index-size和sum-of-other-index-sizes统计项的收集"}},[_._v("#")]),_._v(" clustered_index_size和sum_of_other_index_sizes统计项的收集")]),_._v(" "),t("p",[_._v("统计这两个数据需要大量用到我们之前唠叨的"),t("code",[_._v("InnoDB")]),_._v("表空间的知识，"),t("span",{staticStyle:{color:"red"}},[_._v("如果大家压根儿没有看那一章，那下边的计算过程大家还是不要看了（看也看不懂）")]),_._v("；如果看过了，那大家就会发现"),t("code",[_._v("InnoDB")]),_._v("表空间的知识真是有用啊啊啊！！！")]),_._v(" "),t("p",[_._v("这两个统计项的收集过程如下：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("从数据字典里找到表的各个索引对应的根页面位置。")]),_._v(" "),t("p",[_._v("系统表"),t("code",[_._v("SYS_INDEXES")]),_._v("里存储了各个索引对应的根页面信息。")])]),_._v(" "),t("li",[t("p",[_._v("从根页面的"),t("code",[_._v("Page Header")]),_._v("里找到叶子节点段和非叶子节点段对应的"),t("code",[_._v("Segment Header")]),_._v("。")]),_._v(" "),t("p",[_._v("在每个索引的根页面的"),t("code",[_._v("Page Header")]),_._v("部分都有两个字段：")]),_._v(" "),t("ul",[t("li",[t("p",[t("code",[_._v("PAGE_BTR_SEG_LEAF")]),_._v("：表示B+树叶子段的"),t("code",[_._v("Segment Header")]),_._v("信息。")])]),_._v(" "),t("li",[t("p",[t("code",[_._v("PAGE_BTR_SEG_TOP")]),_._v("：表示B+树非叶子段的"),t("code",[_._v("Segment Header")]),_._v("信息。")])])])]),_._v(" "),t("li",[t("p",[_._v("从叶子节点段和非叶子节点段的"),t("code",[_._v("Segment Header")]),_._v("中找到这两个段对应的"),t("code",[_._v("INODE Entry")]),_._v("结构。")]),_._v(" "),t("p",[_._v("这个是"),t("code",[_._v("Segment Header")]),_._v("结构：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/26/167e94d5b165a91f?w=598&h=325&f=png&s=109882",alt:"image_1cum7dbc812843ac192pfik1raep.png-107.3kB"}})])]),_._v(" "),t("li",[t("p",[_._v("从对应的"),t("code",[_._v("INODE Entry")]),_._v("结构中可以找到该段对应所有零散的页面地址以及"),t("code",[_._v("FREE")]),_._v("、"),t("code",[_._v("NOT_FULL")]),_._v("、"),t("code",[_._v("FULL")]),_._v("链表的基节点。")]),_._v(" "),t("p",[_._v("这个是"),t("code",[_._v("INODE Entry")]),_._v("结构：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/26/167e94d5b1e44524?w=863&h=535&f=png&s=178111",alt:"image_1cum7f49h1beg5uccbq197n1g1b16.png-173.9kB"}})])]),_._v(" "),t("li",[t("p",[_._v("直接统计零散的页面有多少个，然后从那三个链表的"),t("code",[_._v("List Length")]),_._v("字段中读出该段占用的区的大小，每个区占用"),t("code",[_._v("64")]),_._v("个页，所以就可以统计出整个段占用的页面。")]),_._v(" "),t("p",[_._v("这个是链表基节点的示意图：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/26/167e94d5b17c24e3?w=777&h=451&f=png&s=133034",alt:"image_1cum7hkiihikm4b88j10461plc1j.png-129.9kB"}})])]),_._v(" "),t("li",[t("p",[_._v("分别计算聚簇索引的叶子结点段和非叶子节点段占用的页面数，它们的和就是"),t("code",[_._v("clustered_index_size")]),_._v("的值，按照同样的套路把其余索引占用的页面数都算出来，加起来之后就是"),t("code",[_._v("sum_of_other_index_sizes")]),_._v("的值。")])])]),_._v(" "),t("p",[_._v("这里需要大家注意一个问题，我们说一个段的数据在非常多时（超过32个页面），会以"),t("code",[_._v("区")]),_._v("为单位来申请空间，这里头的问题是"),t("span",{staticStyle:{color:"red"}},[_._v("以区为单位申请空间中有一些页可能并没有使用")]),_._v("，但是在统计"),t("code",[_._v("clustered_index_size")]),_._v("和"),t("code",[_._v("sum_of_other_index_sizes")]),_._v("时都把它们算进去了，所以说聚簇索引和其他的索引占用的页面数可能比这两个值要小一些。")]),_._v(" "),t("h3",{attrs:{id:"innodb-index-stats"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb-index-stats"}},[_._v("#")]),_._v(" innodb_index_stats")]),_._v(" "),t("p",[_._v("直接看一下这个"),t("code",[_._v("innodb_index_stats")]),_._v("表中的各个列都是干嘛的：")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[_._v("字段名")]),_._v(" "),t("th",{staticStyle:{"text-align":"left"}},[_._v("描述")])])]),_._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[_._v("database_name")])]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("数据库名")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[_._v("table_name")])]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("表名")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[_._v("index_name")])]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("索引名")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[_._v("last_update")])]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("本条记录最后更新时间")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[_._v("stat_name")])]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("统计项的名称")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[_._v("stat_value")])]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("对应的统计项的值")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[_._v("sample_size")])]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("为生成统计数据而采样的页面数量")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[_._v("stat_description")])]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("对应的统计项的描述")])])])]),_._v(" "),t("p",[_._v("注意这个表的主键是"),t("code",[_._v("(database_name,table_name,index_name,stat_name)")]),_._v("，其中的"),t("code",[_._v("stat_name")]),_._v("是指统计项的名称，也就是说"),t("span",{staticStyle:{color:"red"}},[_._v("innodb_index_stats表的每条记录代表着一个索引的一个统计项")]),_._v("。可能这会大家有些懵逼这个统计项到底指什么，别着急，我们直接看一下关于"),t("code",[_._v("single_table")]),_._v("表的索引统计数据都有些什么：")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("mysql> SELECT * FROM mysql.innodb_index_stats WHERE table_name = 'single_table';\n+---------------+--------------+--------------+---------------------+--------------+------------+-------------+-----------------------------------+\n| database_name | table_name   | index_name   | last_update         | stat_name    | stat_value | sample_size | stat_description                  |\n+---------------+--------------+--------------+---------------------+--------------+------------+-------------+-----------------------------------+\n| xiaohaizi     | single_table | PRIMARY      | 2018-12-14 14:24:46 | n_diff_pfx01 |       9693 |          20 | id                                |\n| xiaohaizi     | single_table | PRIMARY      | 2018-12-14 14:24:46 | n_leaf_pages |         91 |        NULL | Number of leaf pages in the index |\n| xiaohaizi     | single_table | PRIMARY      | 2018-12-14 14:24:46 | size         |         97 |        NULL | Number of pages in the index      |\n| xiaohaizi     | single_table | idx_key1     | 2018-12-14 14:24:46 | n_diff_pfx01 |        968 |          28 | key1                              |\n| xiaohaizi     | single_table | idx_key1     | 2018-12-14 14:24:46 | n_diff_pfx02 |      10000 |          28 | key1,id                           |\n| xiaohaizi     | single_table | idx_key1     | 2018-12-14 14:24:46 | n_leaf_pages |         28 |        NULL | Number of leaf pages in the index |\n| xiaohaizi     | single_table | idx_key1     | 2018-12-14 14:24:46 | size         |         29 |        NULL | Number of pages in the index      |\n| xiaohaizi     | single_table | idx_key2     | 2018-12-14 14:24:46 | n_diff_pfx01 |      10000 |          16 | key2                              |\n| xiaohaizi     | single_table | idx_key2     | 2018-12-14 14:24:46 | n_leaf_pages |         16 |        NULL | Number of leaf pages in the index |\n| xiaohaizi     | single_table | idx_key2     | 2018-12-14 14:24:46 | size         |         17 |        NULL | Number of pages in the index      |\n| xiaohaizi     | single_table | idx_key3     | 2018-12-14 14:24:46 | n_diff_pfx01 |        799 |          31 | key3                              |\n| xiaohaizi     | single_table | idx_key3     | 2018-12-14 14:24:46 | n_diff_pfx02 |      10000 |          31 | key3,id                           |\n| xiaohaizi     | single_table | idx_key3     | 2018-12-14 14:24:46 | n_leaf_pages |         31 |        NULL | Number of leaf pages in the index |\n| xiaohaizi     | single_table | idx_key3     | 2018-12-14 14:24:46 | size         |         32 |        NULL | Number of pages in the index      |\n| xiaohaizi     | single_table | idx_key_part | 2018-12-14 14:24:46 | n_diff_pfx01 |       9673 |          64 | key_part1                         |\n| xiaohaizi     | single_table | idx_key_part | 2018-12-14 14:24:46 | n_diff_pfx02 |       9999 |          64 | key_part1,key_part2               |\n| xiaohaizi     | single_table | idx_key_part | 2018-12-14 14:24:46 | n_diff_pfx03 |      10000 |          64 | key_part1,key_part2,key_part3     |\n| xiaohaizi     | single_table | idx_key_part | 2018-12-14 14:24:46 | n_diff_pfx04 |      10000 |          64 | key_part1,key_part2,key_part3,id  |\n| xiaohaizi     | single_table | idx_key_part | 2018-12-14 14:24:46 | n_leaf_pages |         64 |        NULL | Number of leaf pages in the index |\n| xiaohaizi     | single_table | idx_key_part | 2018-12-14 14:24:46 | size         |         97 |        NULL | Number of pages in the index      |\n+---------------+--------------+--------------+---------------------+--------------+------------+-------------+-----------------------------------+\n20 rows in set (0.03 sec)\n")])])]),t("p",[_._v("这个结果有点儿多，正确查看这个结果的方式是这样的：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("先查看"),t("code",[_._v("index_name")]),_._v("列，这个列说明该记录是哪个索引的统计信息，从结果中我们可以看出来，"),t("code",[_._v("PRIMARY")]),_._v("索引（也就是主键）占了3条记录，"),t("code",[_._v("idx_key_part")]),_._v("索引占了6条记录。")])]),_._v(" "),t("li",[t("p",[_._v("针对"),t("code",[_._v("index_name")]),_._v("列相同的记录，"),t("code",[_._v("stat_name")]),_._v("表示针对该索引的统计项名称，"),t("code",[_._v("stat_value")]),_._v("展示的是该索引在该统计项上的值，"),t("code",[_._v("stat_description")]),_._v("指的是来描述该统计项的含义的。我们来具体看一下一个索引都有哪些统计项：")]),_._v(" "),t("ul",[t("li",[t("p",[t("code",[_._v("n_leaf_pages")]),_._v("：表示该索引的叶子节点占用多少页面。")])]),_._v(" "),t("li",[t("p",[t("code",[_._v("size")]),_._v("：表示该索引共占用多少页面。")])]),_._v(" "),t("li",[t("p",[t("code",[_._v("n_diff_pfx"),t("b",[_._v("NN")])]),_._v("：表示对应的索引列不重复的值有多少。其中的"),t("code",[_._v("NN")]),_._v("长得有点儿怪呀，啥意思呢？")]),_._v(" "),t("p",[_._v("其实"),t("code",[_._v("NN")]),_._v("可以被替换为"),t("code",[_._v("01")]),_._v("、"),t("code",[_._v("02")]),_._v("、"),t("code",[_._v("03")]),_._v("... 这样的数字。比如对于"),t("code",[_._v("idx_key_part")]),_._v("来说：")]),_._v(" "),t("ul",[t("li",[t("p",[t("code",[_._v("n_diff_pfx01")]),_._v("表示的是统计"),t("code",[_._v("key_part1")]),_._v("这单单一个列不重复的值有多少。")])]),_._v(" "),t("li",[t("p",[t("code",[_._v("n_diff_pfx02")]),_._v("表示的是统计"),t("code",[_._v("key_part1、key_part2")]),_._v("这两个列组合起来不重复的值有多少。")])]),_._v(" "),t("li",[t("p",[t("code",[_._v("n_diff_pfx03")]),_._v("表示的是统计"),t("code",[_._v("key_part1、key_part2、key_part3")]),_._v("这三个列组合起来不重复的值有多少。")])]),_._v(" "),t("li",[t("p",[t("code",[_._v("n_diff_pfx04")]),_._v("表示的是统计"),t("code",[_._v("key_part1、key_part2、key_part3、id")]),_._v("这四个列组合起来不重复的值有多少。")])])]),_._v(" "),t("div",{staticClass:"language-! extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("小贴士：\n\n这里需要注意的是，对于普通的二级索引，并不能保证它的索引列值是唯一的，比如对于idx_key1来说，key1列就可能有很多值重复的记录。此时只有在索引列上加上主键值才可以区分两条索引列值都一样的二级索引记录。对于主键和唯一二级索引则没有这个问题，它们本身就可以保证索引列值的不重复，所以也不需要再统计一遍在索引列后加上主键值的不重复值有多少。比如上边的idx_key1有n_diff_pfx01、n_diff_pfx02两个统计项，而idx_key2却只有n_diff_pfx01一个统计项。\n")])])])])])]),_._v(" "),t("li",[t("p",[_._v("在计算某些索引列中包含多少不重复值时，需要对一些叶子节点页面进行采样，"),t("code",[_._v("size")]),_._v("列就表明了采样的页面数量是多少。")]),_._v(" "),t("div",{staticClass:"language-! extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("小贴士：\n\n对于有多个列的联合索引来说，采样的页面数量是：innodb_stats_persistent_sample_pages × 索引列的个数。当需要采样的页面数量大于该索引的叶子节点数量的话，就直接采用全表扫描来统计索引列的不重复值数量了。所以大家可以在查询结果中看到不同索引对应的size列的值可能是不同的。\n")])])])])]),_._v(" "),t("h3",{attrs:{id:"定期更新统计数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定期更新统计数据"}},[_._v("#")]),_._v(" 定期更新统计数据")]),_._v(" "),t("p",[_._v("随着我们不断的对表进行增删改操作，表中的数据也一直在变化，"),t("code",[_._v("innodb_table_stats")]),_._v("和"),t("code",[_._v("innodb_index_stats")]),_._v("表里的统计数据是不是也应该跟着变一变了？当然要变了，不变的话"),t("code",[_._v("MySQL")]),_._v("查询优化器计算的成本可就差老鼻子远了。设计"),t("code",[_._v("MySQL")]),_._v("的大叔提供了如下两种更新统计数据的方式：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("开启"),t("code",[_._v("innodb_stats_auto_recalc")]),_._v("。")]),_._v(" "),t("p",[_._v("系统变量"),t("code",[_._v("innodb_stats_auto_recalc")]),_._v("决定着服务器是否自动重新计算统计数据，它的默认值是"),t("code",[_._v("ON")]),_._v("，也就是该功能默认是开启的。每个表都维护了一个变量，该变量记录着对该表进行增删改的记录条数，如果发生变动的记录数量超过了表大小的"),t("code",[_._v("10%")]),_._v("，并且自动重新计算统计数据的功能是打开的，那么服务器会重新进行一次统计数据的计算，并且更新"),t("code",[_._v("innodb_table_stats")]),_._v("和"),t("code",[_._v("innodb_index_stats")]),_._v("表。不过"),t("span",{staticStyle:{color:"red"}},[_._v("自动重新计算统计数据的过程是异步发生的")]),_._v("，也就是即使表中变动的记录数超过了"),t("code",[_._v("10%")]),_._v("，自动重新计算统计数据也不会立即发生，可能会延迟几秒才会进行计算。")]),_._v(" "),t("p",[_._v("再一次强调，"),t("code",[_._v("InnoDB")]),_._v("默认是"),t("span",{staticStyle:{color:"red"}},[_._v("以表为单位来收集和存储统计数据的")]),_._v("，我们也可以单独为某个表设置是否自动重新计算统计数的属性，设置方式就是在创建或修改表的时候通过指定"),t("code",[_._v("STATS_AUTO_RECALC")]),_._v("属性来指明该表的统计数据存储方式：")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("CREATE TABLE 表名 (...) Engine=InnoDB, STATS_AUTO_RECALC = (1|0);\n\nALTER TABLE 表名 Engine=InnoDB, STATS_AUTO_RECALC = (1|0);\n")])])]),t("p",[_._v("当"),t("code",[_._v("STATS_AUTO_RECALC=1")]),_._v("时，表明我们想让该表自动重新计算统计数据，当"),t("code",[_._v("STATS_PERSISTENT=0")]),_._v("时，表明不想让该表自动重新计算统计数据。如果我们在创建表时未指定"),t("code",[_._v("STATS_AUTO_RECALC")]),_._v("属性，那默认采用系统变量"),t("code",[_._v("innodb_stats_auto_recalc")]),_._v("的值作为该属性的值。")])]),_._v(" "),t("li",[t("p",[_._v("手动调用"),t("code",[_._v("ANALYZE TABLE")]),_._v("语句来更新统计信息")]),_._v(" "),t("p",[_._v("如果"),t("code",[_._v("innodb_stats_auto_recalc")]),_._v("系统变量的值为"),t("code",[_._v("OFF")]),_._v("的话，我们也可以手动调用"),t("code",[_._v("ANALYZE TABLE")]),_._v("语句来重新计算统计数据，比如我们可以这样更新关于"),t("code",[_._v("single_table")]),_._v("表的统计数据：")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("mysql> ANALYZE TABLE single_table;\n+------------------------+---------+----------+----------+\n| Table                  | Op      | Msg_type | Msg_text |\n+------------------------+---------+----------+----------+\n| xiaohaizi.single_table | analyze | status   | OK       |\n+------------------------+---------+----------+----------+\n1 row in set (0.08 sec)\n")])])]),t("p",[_._v("需要注意的是，"),t("span",{staticStyle:{color:"red"}},[_._v("ANALYZE TABLE语句会立即重新计算统计数据，也就是这个过程是同步的")]),_._v("，在表中索引多或者采样页面特别多时这个过程可能会特别慢，请不要没事儿就运行一下"),t("code",[_._v("ANALYZE TABLE")]),_._v("语句，最好在业务不是很繁忙的时候再运行。")])])]),_._v(" "),t("h3",{attrs:{id:"手动更新innodb-table-stats和innodb-index-stats表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动更新innodb-table-stats和innodb-index-stats表"}},[_._v("#")]),_._v(" 手动更新"),t("code",[_._v("innodb_table_stats")]),_._v("和"),t("code",[_._v("innodb_index_stats")]),_._v("表")]),_._v(" "),t("p",[_._v("其实"),t("code",[_._v("innodb_table_stats")]),_._v("和"),t("code",[_._v("innodb_index_stats")]),_._v("表就相当于一个普通的表一样，我们能对它们做增删改查操作。这也就意味着我们可以"),t("span",{staticStyle:{color:"red"}},[_._v("手动更新某个表或者索引的统计数据")]),_._v("。比如说我们想把"),t("code",[_._v("single_table")]),_._v("表关于行数的统计数据更改一下可以这么做：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("步骤一：更新"),t("code",[_._v("innodb_table_stats")]),_._v("表。")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("UPDATE innodb_table_stats \n    SET n_rows = 1\n    WHERE table_name = 'single_table';\n")])])])]),_._v(" "),t("li",[t("p",[_._v("步骤二：让"),t("code",[_._v("MySQL")]),_._v("查询优化器重新加载我们更改过的数据。")]),_._v(" "),t("p",[_._v("更新完"),t("code",[_._v("innodb_table_stats")]),_._v("只是单纯的修改了一个表的数据，需要让"),t("code",[_._v("MySQL")]),_._v("查询优化器重新加载我们更改过的数据，运行下边的命令就可以了：")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("FLUSH TABLE single_table;\n")])])])])]),_._v(" "),t("p",[_._v("之后我们使用"),t("code",[_._v("SHOW TABLE STATUS")]),_._v("语句查看表的统计数据时就看到"),t("code",[_._v("Rows")]),_._v("行变为了"),t("code",[_._v("1")]),_._v("。")]),_._v(" "),t("h2",{attrs:{id:"基于内存的非永久性统计数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于内存的非永久性统计数据"}},[_._v("#")]),_._v(" 基于内存的非永久性统计数据")]),_._v(" "),t("p",[_._v("当我们把系统变量"),t("code",[_._v("innodb_stats_persistent")]),_._v("的值设置为"),t("code",[_._v("OFF")]),_._v("时，之后创建的表的统计数据默认就都是非永久性的了，或者我们直接在创建表或修改表时设置"),t("code",[_._v("STATS_PERSISTENT")]),_._v("属性的值为"),t("code",[_._v("0")]),_._v("，那么该表的统计数据就是非永久性的了。")]),_._v(" "),t("p",[_._v("与永久性的统计数据不同，非永久性的统计数据采样的页面数量是由"),t("code",[_._v("innodb_stats_transient_sample_pages")]),_._v("控制的，这个系统变量的默认值是"),t("code",[_._v("8")]),_._v("。")]),_._v(" "),t("p",[_._v("另外，由于非永久性的统计数据经常更新，所以导致"),t("code",[_._v("MySQL")]),_._v("查询优化器计算查询成本的时候依赖的是经常变化的统计数据，也就会"),t("span",{staticStyle:{color:"red"}},[_._v("生成经常变化的执行计划")]),_._v("，这个可能让大家有些懵逼。不过最近的"),t("code",[_._v("MySQL")]),_._v("版本都不咋用这种基于内存的非永久性统计数据了，所以我们也就不深入唠叨它了。")]),_._v(" "),t("h2",{attrs:{id:"innodb-stats-method的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb-stats-method的使用"}},[_._v("#")]),_._v(" innodb_stats_method的使用")]),_._v(" "),t("p",[_._v("我们知道"),t("code",[_._v("索引列不重复的值的数量")]),_._v("这个统计数据对于"),t("code",[_._v("MySQL")]),_._v("查询优化器十分重要，因为通过它可以计算出在索引列中平均一个值重复多少行，它的应用场景主要有两个：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("单表查询中单点区间太多，比方说这样：")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("SELECT * FROM tbl_name WHERE key IN ('xx1', 'xx2', ..., 'xxn');\n")])])]),t("p",[_._v("当"),t("code",[_._v("IN")]),_._v("里的参数数量过多时，采用"),t("code",[_._v("index dive")]),_._v("的方式直接访问"),t("code",[_._v("B+")]),_._v("树索引去统计每个单点区间对应的记录的数量就太耗费性能了，所以直接依赖统计数据中的平均一个值重复多少行来计算单点区间对应的记录数量。")])]),_._v(" "),t("li",[t("p",[_._v("连接查询时，如果有涉及两个表的等值匹配连接条件，该连接条件对应的被驱动表中的列又拥有索引时，则可以使用"),t("code",[_._v("ref")]),_._v("访问方法来对被驱动表进行查询，比方说这样：")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("SELECT * FROM t1 JOIN t2 ON t1.column = t2.key WHERE ...;\n")])])]),t("p",[_._v("在真正执行对"),t("code",[_._v("t2")]),_._v("表的查询前，"),t("code",[_._v("t1.comumn")]),_._v("的值是不确定的，所以我们也不能通过"),t("code",[_._v("index dive")]),_._v("的方式直接访问"),t("code",[_._v("B+")]),_._v("树索引去统计每个单点区间对应的记录的数量，所以也只能依赖统计数据中的平均一个值重复多少行来计算单点区间对应的记录数量。")])])]),_._v(" "),t("p",[_._v("在统计索引列不重复的值的数量时，有一个比较烦的问题就是索引列中出现"),t("code",[_._v("NULL")]),_._v("值怎么办，比方说某个索引列的内容是这样：")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("+------+\n| col  |\n+------+\n|    1 |\n|    2 |\n| NULL |\n| NULL |\n+------+\n")])])]),t("p",[_._v("此时计算这个"),t("code",[_._v("col")]),_._v("列中不重复的值的数量就有下边的分歧：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("有的人认为"),t("code",[_._v("NULL")]),_._v("值代表一个未确定的值，所以设计"),t("code",[_._v("MySQL")]),_._v("的大叔才认为任何和"),t("code",[_._v("NULL")]),_._v("值做比较的表达式的值都为"),t("code",[_._v("NULL")]),_._v("，就是这样：")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("mysql> SELECT 1 = NULL;\n+----------+\n| 1 = NULL |\n+----------+\n|     NULL |\n+----------+\n1 row in set (0.00 sec)\n\nmysql> SELECT 1 != NULL;\n+-----------+\n| 1 != NULL |\n+-----------+\n|      NULL |\n+-----------+\n1 row in set (0.00 sec)\n\nmysql> SELECT NULL = NULL;\n+-------------+\n| NULL = NULL |\n+-------------+\n|        NULL |\n+-------------+\n1 row in set (0.00 sec)\n\nmysql> SELECT NULL != NULL;\n+--------------+\n| NULL != NULL |\n+--------------+\n|         NULL |\n+--------------+\n1 row in set (0.00 sec)\n")])])]),t("p",[_._v("所以每一个"),t("code",[_._v("NULL")]),_._v("值都是独一无二的，也就是说统计索引列不重复的值的数量时，应该把"),t("code",[_._v("NULL")]),_._v("值当作一个独立的值，所以"),t("code",[_._v("col")]),_._v("列的不重复的值的数量就是："),t("code",[_._v("4")]),_._v("（分别是1、2、NULL、NULL这四个值）。")])]),_._v(" "),t("li",[t("p",[_._v("有的人认为其实"),t("code",[_._v("NULL")]),_._v("值在业务上就是代表没有，所有的"),t("code",[_._v("NULL")]),_._v("值代表的意义是一样的，所以"),t("code",[_._v("col")]),_._v("列不重复的值的数量就是："),t("code",[_._v("3")]),_._v("（分别是1、2、NULL这三个值）。")])]),_._v(" "),t("li",[t("p",[_._v("有的人认为这"),t("code",[_._v("NULL")]),_._v("完全没有意义嘛，所以在统计索引列不重复的值的数量时压根儿不能把它们算进来，所以"),t("code",[_._v("col")]),_._v("列不重复的值的数量就是："),t("code",[_._v("2")]),_._v("（分别是1、2这两个值）。")])])]),_._v(" "),t("p",[_._v("设计"),t("code",[_._v("MySQL")]),_._v("的大叔蛮贴心的，他们提供了一个名为"),t("code",[_._v("innodb_stats_method")]),_._v("的系统变量，相当于在计算某个索引列不重复值的数量时如何对待"),t("code",[_._v("NULL")]),_._v("值这个锅甩给了用户，这个系统变量有三个候选值：")]),_._v(" "),t("ul",[t("li",[t("p",[t("code",[_._v("nulls_equal")]),_._v("：认为所有"),t("code",[_._v("NULL")]),_._v("值都是相等的。这个值也是"),t("code",[_._v("innodb_stats_method")]),_._v("的默认值。")]),_._v(" "),t("p",[_._v("如果某个索引列中"),t("code",[_._v("NULL")]),_._v("值特别多的话，这种统计方式会让优化器认为某个列中平均一个值重复次数特别多，所以倾向于不使用索引进行访问。")])]),_._v(" "),t("li",[t("p",[t("code",[_._v("nulls_unequal")]),_._v("：认为所有"),t("code",[_._v("NULL")]),_._v("值都是不相等的。")]),_._v(" "),t("p",[_._v("如果某个索引列中"),t("code",[_._v("NULL")]),_._v("值特别多的话，这种统计方式会让优化器认为某个列中平均一个值重复次数特别少，所以倾向于使用索引进行访问。")])]),_._v(" "),t("li",[t("p",[t("code",[_._v("nulls_ignored")]),_._v("：直接把"),t("code",[_._v("NULL")]),_._v("值忽略掉。")])])]),_._v(" "),t("p",[_._v("反正这个锅是甩给用户了，当你选定了"),t("code",[_._v("innodb_stats_method")]),_._v("值之后，优化器即使选择了不是最优的执行计划，那也跟设计"),t("code",[_._v("MySQL")]),_._v("的大叔们没关系了哈～ 当然对于用户的我们来说，"),t("span",{staticStyle:{color:"red"}},[_._v("最好不在索引列中存放NULL值才是正解")]),_._v("。")]),_._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),t("ul",[t("li",[t("p",[t("code",[_._v("InnoDB")]),_._v("以表为单位来收集统计数据，这些统计数据可以是基于磁盘的永久性统计数据，也可以是基于内存的非永久性统计数据。")])]),_._v(" "),t("li",[t("p",[t("code",[_._v("innodb_stats_persistent")]),_._v("控制着使用永久性统计数据还是非永久性统计数据；"),t("code",[_._v("innodb_stats_persistent_sample_pages")]),_._v("控制着永久性统计数据的采样页面数量；"),t("code",[_._v("innodb_stats_transient_sample_pages")]),_._v("控制着非永久性统计数据的采样页面数量；"),t("code",[_._v("innodb_stats_auto_recalc")]),_._v("控制着是否自动重新计算统计数据。")])]),_._v(" "),t("li",[t("p",[_._v("我们可以针对某个具体的表，在创建和修改表时通过指定"),t("code",[_._v("STATS_PERSISTENT")]),_._v("、"),t("code",[_._v("STATS_AUTO_RECALC")]),_._v("、"),t("code",[_._v("STATS_SAMPLE_PAGES")]),_._v("的值来控制相关统计数据属性。")])]),_._v(" "),t("li",[t("p",[t("code",[_._v("innodb_stats_method")]),_._v("决定着在统计某个索引列不重复值的数量时如何对待"),t("code",[_._v("NULL")]),_._v("值。")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);