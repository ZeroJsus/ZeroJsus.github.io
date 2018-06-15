---
layout: post
title: 'weekly7'
date: 2018-5-21 08:00:00 +0800
categories: blog
tags: '知识周报'
---

提升JS方法的技巧 (对Iterator)
1.  扩展运算操作符(...)
2.  对iterator对象使用for of循环进行遍历
3.  arr.includes(key) //查询对应的arr中是否存在指定的值 存在则返回true IE完全不支持
4.  arr.some(callback) //查询数组中是否有满足callback函数的值 => Boolean
5.  arr.every(callback) //查询数组中是否全部值都满足callback函数 => Boolean
6.  arr.filter(callback) //处理数组使数组只返回满足callback条件的内容
7.  arr.map(callback) //对数组中所有的值都进行callback操作 返回一个每个arr中的值都被处理过后的新数组
8.  arr.reduce(callback) //callback中可以指定让数组中对应数值进行操作的方法(一般做运算)
9.  arr.find(callback) //返回arr中满足callback条件的第一个数

iframe熟悉 iframe加载完成后执行的事件onload只能获取到对应iframe中全局的对象或者window.onload之后的对象
iframe中的属性有 contentWindow 获取目标iframe中的Window对象 => 只能获取到
                contentDocument 获取目标iframe中的Document对象

[Sass语法复习](https://www.sass.hk/docs/#t7-3-6)

JSON对象中的多数组对象中的键值对中的键替换 可以使用序列化反序列化加上正则来实现

受控组件与非受控组件(React概念) Vue中的可以通过v-if来动态控制组件的受控与非受控-->vue-antd-ui中树组件的渲染问题

orientationchange复习 监听屏幕水平或者竖直变动 addEventListener第三个参数理解-->详见JSApi中的Learning Notes
 
[UML统一建模语言](https://baike.baidu.com/item/UML%E5%9B%BE/6963758),标准建模语言是用来对**软件密集系统**进行_可视化建模_的一种语言。模型大多以图标的方式显示出来，用于软件架构层次。
[在线UML工具带协作](https://www.processon.com)