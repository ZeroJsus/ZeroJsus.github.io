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

递归算法纳入6月议程 __通过递归扁平化多维度数组__
`let a = [1,[11,22,[111,222,{'a':'b'}],33],2,3,4,5]`
`function typeit(arr){`
    `let res = [].concat(...arr);`
    `return res.some(item=>Array.isArray(item))? typeit(res):res;`
`}`
`let response = typeit(a)`
`console.log(response)`

对于解构赋值的理解不够深入-->实践过少 
`const csvFileLine = '1997,John Doe,US,john@doe.com,New York';`
`const { 2: country, 4: state } = csvFileLine.split(',');`

web notification技术 注意在非安全域名下不能长期调用
web socket
