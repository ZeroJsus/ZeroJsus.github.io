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

lib-flexible 源码解析?

document.this --> 在对应js函数的开头位置 进行使用才能进行标记

q标记用在p元素中 用于表示此段文本时一段短引用

当前复习到达多列(2018-6-11) 笔记参考codepen

[vscode插件开发](https://www.jianshu.com/p/520c575e91c3)

