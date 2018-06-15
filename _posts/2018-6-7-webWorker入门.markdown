---
layout: post
title: 'webWorker入门'
date: 2018-6-7 23:00:00 +0800
categories: blog
tags: '迭代技术'
---

webWorker是将脚本代码放置与浏览器后台线程进行执行

一定要理解webpack对于vue是怎样的存在 在vue中要引用一些文件的绝对路径 比如在vue中使用webworker 要使用file-loader来加载文件到webpack中[rules配置才行-->因为如果使用内联加载其中的es6内容会被全局的babel加载一个对于es6方法的兼容配置文件的加载但是在浏览器的后台进程当中,后台进程是浏览器本身编译器 不具备webpack中的cmd自动加载功能会导致import/require报错], 之后导入对应路径的文件获取一个路径地址 这个地址 就是此文件对应的绝对路径
[webworker](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)

webworker对象类型是一个MessageEvent的类型，其中的data为从客户端中通过postMessage到worker中的数据
