---
layout: post
title: 'weekly8'
date: 2018-5-27 08:00:00 +0800
categories: blog
tags: '知识周报'
---

window.print() --> 此方法调用每个浏览器的打印模式 @media print{ // 用于指定页面在处于打印模式下的样式 }

URL.createObjectURL --> 将blob数据转换成一个url连接(和canvas的toDataURL方法类似) 后者是转base64

ESLint 学习规范我的代码结构

router.addRoutes([router_item]) // 在Vue中向路由组件动态添加路由 此路由不会更新至 router.options.routes中 跳转只能使用push来进行跳转 浏览器的访问会无效