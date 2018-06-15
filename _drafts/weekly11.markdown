---
layout: post
title: 'weekly11'
date: 2018-6-16 08:00:00 +0800
categories: blog
tags: '知识周报'
---

github pages页面静态页面单独部署是部署在gh-pages分支下？

c3 css世界 以及 css魔法复习

移动端解决方案
1.  框架模式下--> 成熟的vw解决方案 使用vw _推荐_
2.  非框架(原生/类库)-->使用类库(sui 自带flexible)-->参考设计图是px 使用转换工具 px2rem 设计图750 比例二分之一设计图
                    -->(使用flexible 非sui自带)-->参考px 转换是1rem = 设计图宽度px/10 _推荐_
                    -->不使用类库(手动计算 vw/vw比率) _推荐_
3.  使用flexible 并不完美因为不同的设备计算出来的font-size并不完全相同
4.  android4.4以下版本 还是使用flexible+postcss2rem 
5.  使用vw vh头图可能会与上下左右的页面有1px的偏差(造成图片偏差的原因 应该为ui给的图片 与设计图上的图片 比例不相同)

lib-flexible 源码解析?

document.this --> 在对应js函数的开头位置 进行使用才能进行标记

q标记用在p元素中 用于表示此段文本时一段短引用

[C3查询手册](http://css.doyoe.com/) --> 具体实践参考codepen

[vscode插件开发](https://www.jianshu.com/p/520c575e91c3)

[浏览器标识](https://github.com/Valve/fingerprintjs2)

css世界 页数88

pc端单独jq页面的优化 1200 + client.width count 页面的视距比

shrink-to-fit // 自适应宽度

移动端ios的最小字号1px android端的最小字号是8px

[Web Component自定义元素](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/customElements) --> 是不是可以在不用框架的情况下 自定义元素的内容

为什么我们使用前端框架-->不是因为框架的易用以及框架的打包之类的功能, 而是因为UI状态的不好控制

[serviceworker demo](https://github.com/mdn/sw-test)

pwa技术 --> 目前支持很尴尬 未来5年替代 electron技术


查数估-->当前h5页面进行本地的优化 当前页面改成类似首页的东西 
hubuild本地静态资源+android studio打包 ios有本身自带的证书可以进行打包