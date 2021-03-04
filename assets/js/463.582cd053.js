(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{902:function(t,e,n){"use strict";n.r(e);var s=n(44),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("这是一个非常精典的例子。实现字符串和 bytes 切片之间的转换，要求是 "),n("code",[t._v("zero-copy")]),t._v("。想一下，一般的做法，都需要遍历字符串或 bytes 切片，再挨个赋值。")]),t._v(" "),n("p",[t._v("完成这个任务，我们需要了解 slice 和 string 的底层数据结构：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("type StringHeader struct {\n\tData uintptr\n\tLen  int\n}\n\ntype SliceHeader struct {\n\tData uintptr\n\tLen  int\n\tCap  int\n}\n")])])]),n("p",[t._v("上面是反射包下的结构体，路径：src/reflect/value.go。只需要共享底层 Data 和 Len 就可以实现 "),n("code",[t._v("zero-copy")]),t._v("。")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("func string2bytes(s string) []byte {\n\treturn *(*[]byte)(unsafe.Pointer(&s))\n}\nfunc bytes2string(b []byte) string{\n\treturn *(*string)(unsafe.Pointer(&b))\n}\n")])])]),n("p",[t._v("原理上是利用指针的强转，代码比较简单，不作详细解释。")])])}),[],!1,null,null,null);e.default=a.exports}}]);