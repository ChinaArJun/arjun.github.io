(window.webpackJsonp=window.webpackJsonp||[]).push([[607],{1052:function(n,e,a){"use strict";a.r(e);var _=a(44),s=Object(_.a)({},(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"optimizer-trace-表的神奇功效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optimizer-trace-表的神奇功效"}},[n._v("#")]),n._v(" optimizer trace 表的神奇功效")]),n._v(" "),a("p",[n._v("标签： MySQL 是怎样运行的")]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("对于"),a("code",[n._v("MySQL 5.6")]),n._v("以及之前的版本来说，查询优化器就像是一个黑盒子一样，你只能通过"),a("code",[n._v("EXPLAIN")]),n._v("语句查看到最后优化器决定使用的执行计划，却无法知道它为什么做这个决策。这对于一部分喜欢刨根问底的小伙伴来说简直是灾难：“我就觉得使用其他的执行方案比"),a("code",[n._v("EXPLAIN")]),n._v("输出的这种方案强，凭什么优化器做的决定和我想的不一样呢？”")]),n._v(" "),a("p",[n._v("在"),a("code",[n._v("MySQL 5.6")]),n._v("以及之后的版本中，设计"),a("code",[n._v("MySQL")]),n._v("的大叔贴心的为这部分小伙伴提出了一个"),a("code",[n._v("optimizer trace")]),n._v("的功能，这个功能可以让我们方便的查看优化器生成执行计划的整个过程，这个功能的开启与关闭由系统变量"),a("code",[n._v("optimizer_trace")]),n._v("决定，我们看一下：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("mysql> SHOW VARIABLES LIKE 'optimizer_trace';\n+-----------------+--------------------------+\n| Variable_name   | Value                    |\n+-----------------+--------------------------+\n| optimizer_trace | enabled=off,one_line=off |\n+-----------------+--------------------------+\n1 row in set (0.02 sec)\n")])])]),a("p",[n._v("可以看到"),a("code",[n._v("enabled")]),n._v("值为"),a("code",[n._v("off")]),n._v("，表明这个功能默认是关闭的。")]),n._v(" "),a("div",{staticClass:"language-! extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("小贴士：\n\none_line的值是控制输出格式的，如果为on那么所有输出都将在一行中展示，不适合人阅读，所以我们就保持其默认值为off吧。\n")])])]),a("p",[n._v("如果想打开这个功能，必须首先把"),a("code",[n._v("enabled")]),n._v("的值改为"),a("code",[n._v("on")]),n._v("，就像这样：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('mysql> SET optimizer_trace="enabled=on";\nQuery OK, 0 rows affected (0.00 sec)\n')])])]),a("p",[n._v("然后我们就可以输入我们想要查看优化过程的查询语句，当该查询语句执行完成后，就可以到"),a("code",[n._v("information_schema")]),n._v("数据库下的"),a("code",[n._v("OPTIMIZER_TRACE")]),n._v("表中查看完整的优化过程。这个"),a("code",[n._v("OPTIMIZER_TRACE")]),n._v("表有4个列，分别是：")]),n._v(" "),a("ul",[a("li",[a("p",[a("code",[n._v("QUERY")]),n._v("：表示我们的查询语句。")])]),n._v(" "),a("li",[a("p",[a("code",[n._v("TRACE")]),n._v("：表示优化过程的JSON格式文本。")])]),n._v(" "),a("li",[a("p",[a("code",[n._v("MISSING_BYTES_BEYOND_MAX_MEM_SIZE")]),n._v("：由于优化过程可能会输出很多，如果超过某个限制时，多余的文本将不会被显示，这个字段展示了被忽略的文本字节数。")])]),n._v(" "),a("li",[a("p",[a("code",[n._v("INSUFFICIENT_PRIVILEGES")]),n._v("：表示是否没有权限查看优化过程，默认值是0，只有某些特殊情况下才会是"),a("code",[n._v("1")]),n._v("，我们暂时不关心这个字段的值。")])])]),n._v(" "),a("p",[n._v("完整的使用"),a("code",[n._v("optimizer trace")]),n._v("功能的步骤总结如下：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('# 1. 打开optimizer trace功能 (默认情况下它是关闭的):\nSET optimizer_trace="enabled=on";\n\n# 2. 这里输入你自己的查询语句\nSELECT ...; \n\n# 3. 从OPTIMIZER_TRACE表中查看上一个查询的优化过程\nSELECT * FROM information_schema.OPTIMIZER_TRACE;\n\n# 4. 可能你还要观察其他语句执行的优化过程，重复上边的第2、3步\n...\n\n# 5. 当你停止查看语句的优化过程时，把optimizer trace功能关闭\nSET optimizer_trace="enabled=off";\n')])])]),a("p",[n._v("现在我们有一个搜索条件比较多的查询语句，它的执行计划如下：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("mysql> EXPLAIN SELECT * FROM s1 WHERE\n    ->     key1 > 'z' AND\n    ->     key2 < 1000000 AND\n    ->     key3 IN ('a', 'b', 'c') AND\n    ->     common_field = 'abc';\n+----+-------------+-------+------------+-------+----------------------------+----------+---------+------+------+----------+------------------------------------+\n| id | select_type | table | partitions | type  | possible_keys              | key      | key_len | ref  | rows | filtered | Extra                              |\n+----+-------------+-------+------------+-------+----------------------------+----------+---------+------+------+----------+------------------------------------+\n|  1 | SIMPLE      | s1    | NULL       | range | idx_key2,idx_key1,idx_key3 | idx_key2 | 5       | NULL |   12 |     0.42 | Using index condition; Using where |\n+----+-------------+-------+------------+-------+----------------------------+----------+---------+------+------+----------+------------------------------------+\n1 row in set, 1 warning (0.00 sec)\n")])])]),a("p",[n._v("可以看到该查询可能使用到的索引有3个，那么为什么优化器最终选择了"),a("code",[n._v("idx_key2")]),n._v("而不选择其他的索引或者直接全表扫描呢？这时候就可以通过"),a("code",[n._v("otpimzer trace")]),n._v("功能来查看优化器的具体工作过程：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("SET optimizer_trace=\"enabled=on\";\n\nSELECT * FROM s1 WHERE \n    key1 > 'z' AND \n    key2 < 1000000 AND \n    key3 IN ('a', 'b', 'c') AND \n    common_field = 'abc';\n    \nSELECT * FROM information_schema.OPTIMIZER_TRACE\\G    \n")])])]),a("p",[n._v("我们直接看一下通过查询"),a("code",[n._v("OPTIMIZER_TRACE")]),n._v("表得到的输出（我使用"),a("code",[n._v("#")]),n._v("后跟随注释的形式为大家解释了优化过程中的一些比较重要的点，大家重点关注一下）：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('*************************** 1. row ***************************\n# 分析的查询语句是什么\nQUERY: SELECT * FROM s1 WHERE\n    key1 > \'z\' AND\n    key2 < 1000000 AND\n    key3 IN (\'a\', \'b\', \'c\') AND\n    common_field = \'abc\'\n\n# 优化的具体过程\nTRACE: {\n  "steps": [\n    {\n      "join_preparation": {     # prepare阶段\n        "select#": 1,\n        "steps": [\n          {\n            "IN_uses_bisection": true\n          },\n          {\n            "expanded_query": "/* select#1 */ select `s1`.`id` AS `id`,`s1`.`key1` AS `key1`,`s1`.`key2` AS `key2`,`s1`.`key3` AS `key3`,`s1`.`key_part1` AS `key_part1`,`s1`.`key_part2` AS `key_part2`,`s1`.`key_part3` AS `key_part3`,`s1`.`common_field` AS `common_field` from `s1` where ((`s1`.`key1` > \'z\') and (`s1`.`key2` < 1000000) and (`s1`.`key3` in (\'a\',\'b\',\'c\')) and (`s1`.`common_field` = \'abc\'))"\n          }\n        ] /* steps */\n      } /* join_preparation */\n    },\n    {\n      "join_optimization": {    # optimize阶段\n        "select#": 1,\n        "steps": [\n          {\n            "condition_processing": {   # 处理搜索条件\n              "condition": "WHERE",\n              # 原始搜索条件\n              "original_condition": "((`s1`.`key1` > \'z\') and (`s1`.`key2` < 1000000) and (`s1`.`key3` in (\'a\',\'b\',\'c\')) and (`s1`.`common_field` = \'abc\'))",\n              "steps": [\n                {\n                  # 等值传递转换\n                  "transformation": "equality_propagation",\n                  "resulting_condition": "((`s1`.`key1` > \'z\') and (`s1`.`key2` < 1000000) and (`s1`.`key3` in (\'a\',\'b\',\'c\')) and (`s1`.`common_field` = \'abc\'))"\n                },\n                {\n                  # 常量传递转换    \n                  "transformation": "constant_propagation",\n                  "resulting_condition": "((`s1`.`key1` > \'z\') and (`s1`.`key2` < 1000000) and (`s1`.`key3` in (\'a\',\'b\',\'c\')) and (`s1`.`common_field` = \'abc\'))"\n                },\n                {\n                  # 去除没用的条件\n                  "transformation": "trivial_condition_removal",\n                  "resulting_condition": "((`s1`.`key1` > \'z\') and (`s1`.`key2` < 1000000) and (`s1`.`key3` in (\'a\',\'b\',\'c\')) and (`s1`.`common_field` = \'abc\'))"\n                }\n              ] /* steps */\n            } /* condition_processing */\n          },\n          {\n            # 替换虚拟生成列\n            "substitute_generated_columns": {\n            } /* substitute_generated_columns */\n          },\n          {\n            # 表的依赖信息\n            "table_dependencies": [\n              {\n                "table": "`s1`",\n                "row_may_be_null": false,\n                "map_bit": 0,\n                "depends_on_map_bits": [\n                ] /* depends_on_map_bits */\n              }\n            ] /* table_dependencies */\n          },\n          {\n            "ref_optimizer_key_uses": [\n            ] /* ref_optimizer_key_uses */\n          },\n          {\n          \n            # 预估不同单表访问方法的访问成本\n            "rows_estimation": [\n              {\n                "table": "`s1`",\n                "range_analysis": {\n                  "table_scan": {   # 全表扫描的行数以及成本\n                    "rows": 9688,\n                    "cost": 2036.7\n                  } /* table_scan */,\n                  \n                  # 分析可能使用的索引\n                  "potential_range_indexes": [\n                    {\n                      "index": "PRIMARY",   # 主键不可用\n                      "usable": false,\n                      "cause": "not_applicable"\n                    },\n                    {\n                      "index": "idx_key2",  # idx_key2可能被使用\n                      "usable": true,\n                      "key_parts": [\n                        "key2"\n                      ] /* key_parts */\n                    },\n                    {\n                      "index": "idx_key1",  # idx_key1可能被使用\n                      "usable": true,\n                      "key_parts": [\n                        "key1",\n                        "id"\n                      ] /* key_parts */\n                    },\n                    {\n                      "index": "idx_key3",  # idx_key3可能被使用\n                      "usable": true,\n                      "key_parts": [\n                        "key3",\n                        "id"\n                      ] /* key_parts */\n                    },\n                    {\n                      "index": "idx_key_part",  # idx_keypart不可用\n                      "usable": false,\n                      "cause": "not_applicable"\n                    }\n                  ] /* potential_range_indexes */,\n                  "setup_range_conditions": [\n                  ] /* setup_range_conditions */,\n                  "group_index_range": {\n                    "chosen": false,\n                    "cause": "not_group_by_or_distinct"\n                  } /* group_index_range */,\n                  \n                  # 分析各种可能使用的索引的成本\n                  "analyzing_range_alternatives": {\n                    "range_scan_alternatives": [\n                      {\n                        # 使用idx_key2的成本分析\n                        "index": "idx_key2",\n                        # 使用idx_key2的范围区间\n                        "ranges": [\n                          "NULL < key2 < 1000000"\n                        ] /* ranges */,\n                        "index_dives_for_eq_ranges": true,   # 是否使用index dive\n                        "rowid_ordered": false,     # 使用该索引获取的记录是否按照主键排序\n                        "using_mrr": false,     # 是否使用mrr\n                        "index_only": false,    # 是否是索引覆盖访问\n                        "rows": 12,     # 使用该索引获取的记录条数\n                        "cost": 15.41,  # 使用该索引的成本\n                        "chosen": true  # 是否选择该索引\n                      },\n                      {\n                        # 使用idx_key1的成本分析\n                        "index": "idx_key1",\n                        # 使用idx_key1的范围区间\n                        "ranges": [\n                          "z < key1"\n                        ] /* ranges */,\n                        "index_dives_for_eq_ranges": true,   # 同上\n                        "rowid_ordered": false,   # 同上\n                        "using_mrr": false,   # 同上\n                        "index_only": false,   # 同上\n                        "rows": 266,   # 同上\n                        "cost": 320.21,   # 同上\n                        "chosen": false,   # 同上\n                        "cause": "cost"   # 因为成本太大所以不选择该索引\n                      },\n                      {\n                        # 使用idx_key3的成本分析\n                        "index": "idx_key3",\n                        # 使用idx_key3的范围区间\n                        "ranges": [\n                          "a <= key3 <= a",\n                          "b <= key3 <= b",\n                          "c <= key3 <= c"\n                        ] /* ranges */,\n                        "index_dives_for_eq_ranges": true,   # 同上\n                        "rowid_ordered": false,   # 同上\n                        "using_mrr": false,   # 同上\n                        "index_only": false,   # 同上\n                        "rows": 21,   # 同上\n                        "cost": 28.21,   # 同上\n                        "chosen": false,   # 同上\n                        "cause": "cost"   # 同上\n                      }\n                    ] /* range_scan_alternatives */,\n                    \n                    # 分析使用索引合并的成本\n                    "analyzing_roworder_intersect": {\n                      "usable": false,\n                      "cause": "too_few_roworder_scans"\n                    } /* analyzing_roworder_intersect */\n                  } /* analyzing_range_alternatives */,\n                  \n                  # 对于上述单表查询s1最优的访问方法\n                  "chosen_range_access_summary": {\n                    "range_access_plan": {\n                      "type": "range_scan",\n                      "index": "idx_key2",\n                      "rows": 12,\n                      "ranges": [\n                        "NULL < key2 < 1000000"\n                      ] /* ranges */\n                    } /* range_access_plan */,\n                    "rows_for_plan": 12,\n                    "cost_for_plan": 15.41,\n                    "chosen": true\n                  } /* chosen_range_access_summary */\n                } /* range_analysis */\n              }\n            ] /* rows_estimation */\n          },\n          {\n            \n            # 分析各种可能的执行计划\n            #（对多表查询这可能有很多种不同的方案，单表查询的方案上边已经分析过了，直接选取idx_key2就好）\n            "considered_execution_plans": [\n              {\n                "plan_prefix": [\n                ] /* plan_prefix */,\n                "table": "`s1`",\n                "best_access_path": {\n                  "considered_access_paths": [\n                    {\n                      "rows_to_scan": 12,\n                      "access_type": "range",\n                      "range_details": {\n                        "used_index": "idx_key2"\n                      } /* range_details */,\n                      "resulting_rows": 12,\n                      "cost": 17.81,\n                      "chosen": true\n                    }\n                  ] /* considered_access_paths */\n                } /* best_access_path */,\n                "condition_filtering_pct": 100,\n                "rows_for_plan": 12,\n                "cost_for_plan": 17.81,\n                "chosen": true\n              }\n            ] /* considered_execution_plans */\n          },\n          {\n            # 尝试给查询添加一些其他的查询条件\n            "attaching_conditions_to_tables": {\n              "original_condition": "((`s1`.`key1` > \'z\') and (`s1`.`key2` < 1000000) and (`s1`.`key3` in (\'a\',\'b\',\'c\')) and (`s1`.`common_field` = \'abc\'))",\n              "attached_conditions_computation": [\n              ] /* attached_conditions_computation */,\n              "attached_conditions_summary": [\n                {\n                  "table": "`s1`",\n                  "attached": "((`s1`.`key1` > \'z\') and (`s1`.`key2` < 1000000) and (`s1`.`key3` in (\'a\',\'b\',\'c\')) and (`s1`.`common_field` = \'abc\'))"\n                }\n              ] /* attached_conditions_summary */\n            } /* attaching_conditions_to_tables */\n          },\n          {\n            # 再稍稍的改进一下执行计划\n            "refine_plan": [\n              {\n                "table": "`s1`",\n                "pushed_index_condition": "(`s1`.`key2` < 1000000)",\n                "table_condition_attached": "((`s1`.`key1` > \'z\') and (`s1`.`key3` in (\'a\',\'b\',\'c\')) and (`s1`.`common_field` = \'abc\'))"\n              }\n            ] /* refine_plan */\n          }\n        ] /* steps */\n      } /* join_optimization */\n    },\n    {\n      "join_execution": {    # execute阶段\n        "select#": 1,\n        "steps": [\n        ] /* steps */\n      } /* join_execution */\n    }\n  ] /* steps */\n}\n\n# 因优化过程文本太多而丢弃的文本字节大小，值为0时表示并没有丢弃\nMISSING_BYTES_BEYOND_MAX_MEM_SIZE: 0\n\n# 权限字段\nINSUFFICIENT_PRIVILEGES: 0\n\n1 row in set (0.00 sec)\n')])])]),a("p",[n._v("大家看到这个输出的第一感觉就是这文本也太多了点儿吧，其实这只是优化器执行过程中的一小部分，设计"),a("code",[n._v("MySQL")]),n._v("的大叔可能会在之后的版本中添加更多的优化过程信息。不过杂乱之中其实还是蛮有规律的，优化过程大致分为了三个阶段：")]),n._v(" "),a("ul",[a("li",[a("p",[a("code",[n._v("prepare")]),n._v("阶段")])]),n._v(" "),a("li",[a("p",[a("code",[n._v("optimize")]),n._v("阶段")])]),n._v(" "),a("li",[a("p",[a("code",[n._v("execute")]),n._v("阶段")])])]),n._v(" "),a("p",[n._v("我们所说的基于成本的优化主要集中在"),a("code",[n._v("optimize")]),n._v("阶段，对于单表查询来说，我们主要关注"),a("code",[n._v("optimize")]),n._v("阶段的"),a("code",[n._v('"rows_estimation"')]),n._v("这个过程，这个过程深入分析了对单表查询的各种执行方案的成本；对于多表连接查询来说，我们更多需要关注"),a("code",[n._v('"considered_execution_plans"')]),n._v("这个过程，这个过程里会写明各种不同的连接方式所对应的成本。反正优化器最终会选择成本最低的那种方案来作为最终的执行计划，也就是我们使用"),a("code",[n._v("EXPLAIN")]),n._v("语句所展现出的那种方案。")]),n._v(" "),a("p",[n._v("如果有小伙伴对使用"),a("code",[n._v("EXPLAIN")]),n._v("语句展示出的对某个查询的执行计划很不理解，大家可以尝试使用"),a("code",[n._v("optimizer trace")]),n._v("功能来详细了解每一种执行方案对应的成本，相信这个功能能让大家更深入的了解"),a("code",[n._v("MySQL")]),n._v("查询优化器。")])])}),[],!1,null,null,null);e.default=s.exports}}]);