(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{809:function(e,t,n){"use strict";n.r(t);var r=n(44),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("这是一个非常精典的例子。实现字符串和 bytes 切片之间的转换，要求是 "),n("code",[e._v("zero-copy")]),e._v("。想一下，一般的做法，都需要遍历字符串或 bytes 切片，再挨个赋值。")]),e._v(" "),n("p",[e._v("完成这个任务，我们需要了解 slice 和 string 的底层数据结构：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("type StringHeader struct {\n\tData uintptr\n\tLen  int\n}\n\ntype SliceHeader struct {\n\tData uintptr\n\tLen  int\n\tCap  int\n}\n")])])]),n("p",[e._v("上面是反射包下的结构体，路径：src/reflect/value.go。只需要共享底层 []byte 数组就可以实现 "),n("code",[e._v("zero-copy")]),e._v("。")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("func string2bytes(s string) []byte {\n\tstringHeader := (*reflect.StringHeader)(unsafe.Pointer(&s))\n\n\tbh := reflect.SliceHeader{\n\t\tData: stringHeader.Data,\n\t\tLen:  stringHeader.Len,\n\t\tCap:  stringHeader.Len,\n\t}\n\n\treturn *(*[]byte)(unsafe.Pointer(&bh))\n}\n\nfunc bytes2string(b []byte) string{\n\tsliceHeader := (*reflect.SliceHeader)(unsafe.Pointer(&b))\n\n\tsh := reflect.StringHeader{\n\t\tData: sliceHeader.Data,\n\t\tLen:  sliceHeader.Len,\n\t}\n\n\treturn *(*string)(unsafe.Pointer(&sh))\n}\n")])])]),n("p",[e._v("代码比较简单，不作详细解释。通过构造 slice header 和 string header，来完成 string 和 byte slice 之间的转换。")])])}),[],!1,null,null,null);t.default=a.exports}}]);