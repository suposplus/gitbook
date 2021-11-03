(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{407:function(t,s,n){"use strict";n.r(s);var e=n(22),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"gh-pages分支发布静态项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gh-pages分支发布静态项目"}},[t._v("#")]),t._v(" gh-pages分支发布静态项目")]),t._v(" "),n("p",[t._v("对于"),n("code",[t._v("React")]),t._v(" "),n("code",[t._v("Vue")]),t._v("  之类的项目，开发完成之后上传到"),n("code",[t._v("Git")]),t._v(" 仓库，但是如果想通过借助"),n("code",[t._v("Git")]),t._v("提供的pages，来实现打包之后"),n("code",[t._v("dist")]),t._v("静态文件的预览就比较困难；")]),t._v(" "),n("p",[t._v("解决方案：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("克隆项目到本地\n"),n("code",[t._v('git clone "git@github.com:xxx.git"')])])]),t._v(" "),n("li",[n("p",[t._v("安装依赖打包构建\n"),n("code",[t._v("npm i && npm run build")]),t._v(" 或 "),n("code",[t._v("yarn install && yarn run build")])])]),t._v(" "),n("li",[n("p",[t._v("进入"),n("code",[t._v("build")]),t._v(" 文件夹下\n"),n("code",[t._v("cd build")])])]),t._v(" "),n("li",[n("p",[t._v("然后就是"),n("code",[t._v("git")]),t._v(" 初始化，创建"),n("code",[t._v("gh-pages")]),t._v("分支，然后将"),n("code",[t._v("dist")]),t._v("文件夹下的文件提交推送到远程仓库")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout --orphan gh-pages\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"feat: init project"')]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@github.com:xxx.git\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin gh-pages\n")])])])]),t._v(" "),n("li",[n("p",[t._v("然后在 Github 该项目下，setting 设置中的 pages 选择 gh-pages  分支；")])])]),t._v(" "),n("p",[t._v("原理解释：")]),t._v(" "),n("p",[t._v("其实就是创建了一个新的分支，然后将打包后的文件"),n("code",[t._v("dist")]),t._v("，上传至该分支，这样源代码和打包后的静态文件都在一个 project 下，通过不同的 branch 来进行管理；")]),t._v(" "),n("p",[t._v("Github 的 pages 地址指向静态文件所在的分支即可；")])])}),[],!1,null,null,null);s.default=a.exports}}]);