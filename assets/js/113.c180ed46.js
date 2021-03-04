(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{552:function(e,a,t){"use strict";t.r(a);var n=t(44),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"docker容器数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker容器数据卷"}},[e._v("#")]),e._v(" Docker容器数据卷")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#docker%E5%AE%B9%E5%99%A8%E6%95%B0%E6%8D%AE%E5%8D%B7"}},[e._v("Docker容器数据卷")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E6%98%AF%E4%BB%80%E4%B9%88"}},[e._v("是什么")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E8%83%BD%E5%B9%B2%E5%98%9B"}},[e._v("能干嘛")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E6%95%B0%E6%8D%AE%E5%8D%B7"}},[e._v("数据卷")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E5%AE%B9%E5%99%A8%E5%86%85%E6%B7%BB%E5%8A%A0"}},[e._v("容器内添加")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#dockerfile%E6%B7%BB%E5%8A%A0"}},[e._v("DockerFile添加")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E6%95%B0%E6%8D%AE%E5%8D%B7%E5%AE%B9%E5%99%A8"}},[e._v("数据卷容器")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E6%98%AF%E4%BB%80%E4%B9%88-1"}},[e._v("是什么")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E5%AE%B9%E5%99%A8%E4%B9%8B%E9%97%B4%E4%BC%A0%E9%80%92%E5%85%B1%E4%BA%AB"}},[e._v("容器之间传递共享")])])])])])])]),e._v(" "),t("h2",{attrs:{id:"是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#是什么"}},[e._v("#")]),e._v(" 是什么")]),e._v(" "),t("p",[e._v("先看看docker的理念：")]),e._v(" "),t("ul",[t("li",[e._v("将运用与运行的环境打包形成容器运行，运行可以伴随着容器，但是我们对数据的要求希望是持久化的")]),e._v(" "),t("li",[e._v("容器之间有可能共享数据")])]),e._v(" "),t("p",[e._v("Docker容器产生的数据，如果不通过docker commit生成新的镜像，使得数据作为镜像的一部分保存下来，那么当容器删除后，数据自然也就没有了")]),e._v(" "),t("p",[t("strong",[e._v("为了能保存数据在docker中我们使用卷")])]),e._v(" "),t("p",[t("strong",[t("code",[e._v("一句话类似redis里面的rdb 和aof文件")])])]),e._v(" "),t("h2",{attrs:{id:"能干嘛"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#能干嘛"}},[e._v("#")]),e._v(" 能干嘛")]),e._v(" "),t("p",[t("strong",[t("code",[e._v("卷就是目录或文件")])]),e._v("，存在与一个或多个容器中，由docker挂载到容器，但不属于联合文件系统，因此能够绕过UnionFS，提供一些用于存储或共享数据的特征")]),e._v(" "),t("p",[e._v("卷的设计目标就是"),t("strong",[e._v("数据的持久化")]),e._v("，完全独立于容器的生存周期，因此Docker不会在容器删除时删除其挂载的数据卷")]),e._v(" "),t("p",[e._v("特点：")]),e._v(" "),t("ul",[t("li",[e._v("数据卷可在容器之间共享或重用数据")]),e._v(" "),t("li",[e._v("卷的更改可以直接生效")]),e._v(" "),t("li",[e._v("数据卷中的更改不会包含在镜像的更新中")]),e._v(" "),t("li",[e._v("数据卷的生命周期一直持续到没有容器使用它为止")])]),e._v(" "),t("h2",{attrs:{id:"数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据卷"}},[e._v("#")]),e._v(" 数据卷")]),e._v(" "),t("h3",{attrs:{id:"容器内添加"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器内添加"}},[e._v("#")]),e._v(" 容器内添加")]),e._v(" "),t("p",[e._v("1.直接命令添加")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker run -it -v /宿主机绝对路径目录:/容器内目录  镜像名\n")])])]),t("p",[e._v("例子：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[root@laptop docker]# docker images\nREPOSITORY TAG IMAGE ID CREATED SIZE\ncentos latest 0f3e07c0138f 6 weeks ago 220MB\n\n[root@laptop docker]#  mkdir /myDataVolume\n[root@laptop docker]# docker run -it -v /myDataVolume:/dataVolumeContainer centos\n[root@f71c79781ee3 /]# ls\nbin dev home lib64 media opt root sbin sys usr\ndataVolumeContainer etc lib lost+found mnt proc run srv tmp var\n\n\n[root@laptop /]# ls\nbin dudir.sh lib media oprofile_data root shares @System.solv var\nboot etc lib64 mnt opt run srv tmp zookeeper_server.pid\ndev home lost+found myDataVolume proc sbin sys usr\n")])])]),t("p",[e._v("2.查看数据卷是否挂载成功")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[root@laptop ~]# docker ps\nCONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES\nf71c79781ee3 centos "/bin/bash" 2 minutes ago Up 2 minutes friendly_lehmann\n\n[root@laptop ~]# docker inspect f71c79781ee3\n....\n"HostConfig": {\n"Binds": [\n"/myDataVolume:/dataVolumeContainer"\n],\n....\n\n\n\n"Mounts": [\n{\n"Type": "bind",\n"Source": "/myDataVolume",\n"Destination": "/dataVolumeContainer",\n"Mode": "",\n"RW": true,\n"Propagation": "rprivate"\n}\n],\n...\n')])])]),t("p",[e._v("3.容器和宿主机之间数据共享")]),e._v(" "),t("p",[e._v("4.容器停止退出后，主机修改后数据是否同步  -- "),t("strong",[e._v("经过测试数据是同步的")])]),e._v(" "),t("p",[e._v("5.命令")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker run -it -v /宿主机绝对路径目录:/容器内目录:ro  镜像名   #ro 只读\n容器内不能写，宿主机可以写\n")])])]),t("h3",{attrs:{id:"dockerfile添加"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile添加"}},[e._v("#")]),e._v(" DockerFile添加")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[root@laptop mydocker]# cat dockerfile\n\nFROM centos\nVOLUME ["/dataVolumeContainer1", "/dataVolumeContainer2"]\nCMD echo "finished"\nCMD /bin/bash\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[root@laptop mydocker]# docker build -f dockerfile -t abc/centos .\n\nSending build context to Docker daemon 2.048kB\nStep 1/4 : FROM centos\n---\x3e 0f3e07c0138f\nStep 2/4 : VOLUME ["/dataVolumeContainer1", "/dataVolumeContainer2"]\n---\x3e Running in 97ffe5299e14\nRemoving intermediate container 97ffe5299e14\n---\x3e f47d556c8f0a\nStep 3/4 : CMD echo "finished"\n---\x3e Running in 4bada4dcb5b5\nRemoving intermediate container 4bada4dcb5b5\n---\x3e 23d47518f485\nStep 4/4 : CMD /bin/bash\n---\x3e Running in 9d7b4e16c397\nRemoving intermediate container 9d7b4e16c397\n---\x3e 0760a8000e5d\nSuccessfully built 0760a8000e5d\nSuccessfully tagged abc/centos:latest\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[root@laptop mydocker]# docker images\n\nREPOSITORY TAG IMAGE ID CREATED SIZE\nabc/centos latest 0760a8000e5d 8 seconds ago 220MB\nabc/mytomcat 1.2 f73b412690d6 About an hour ago 507MB\ntomcat latest 882487b8be1d 3 weeks ago 507MB\ncentos latest 0f3e07c0138f 6 weeks ago 220MB\n\n\n[root@laptop mydocker]# docker run -it abc/centos\n\n[root@59f466af5f6b /]# ls -l\n\ntotal 56\nlrwxrwxrwx 1 root root 7 May 11 2019 bin -> usr/bin\ndrwxr-xr-x 2 root root 4096 Nov 15 04:24 dataVolumeContainer1\ndrwxr-xr-x 2 root root 4096 Nov 15 04:24 dataVolumeContainer2\n...\n\n")])])]),t("p",[e._v("宿主机目录路径：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[root@laptop mydocker]# docker ps\n\nCONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES\n59f466af5f6b abc/centos "/bin/sh -c /bin/bash" 2 minutes ago Up 2 minutes sleepy_shaw\n[root@laptop mydocker]# docker inspect 59f466af5f6b\n\n"Volumes": {\n"/dataVolumeContainer1": {},\n"/dataVolumeContainer2": {}\n....\n]\n\n')])])]),t("h2",{attrs:{id:"数据卷容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据卷容器"}},[e._v("#")]),e._v(" 数据卷容器")]),e._v(" "),t("h3",{attrs:{id:"是什么-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#是什么-2"}},[e._v("#")]),e._v(" 是什么")]),e._v(" "),t("p",[e._v("命名的容器挂载数据卷，其它容器通过挂载这个实现数据共享，挂载数据卷的容器，称之为数据卷容器")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/dataVolumeContainer1\n/dataVolumeContainer2\n")])])]),t("h3",{attrs:{id:"容器之间传递共享"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器之间传递共享"}},[e._v("#")]),e._v(" 容器之间传递共享")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("--volumes-from\ndocker run -it xxx --volumes-from xxx  xxxx\n")])])]),t("p",[e._v("容器之间配置信息的传递，数据卷的的生命周期一直持续到没有容器使用它为止")])])}),[],!1,null,null,null);a.default=r.exports}}]);