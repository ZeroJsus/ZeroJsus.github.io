---
layout: post
title: '使用indexDB替代Storage'
date: 2018-3-14 23:00:00 +0800
categories: blog
tags: '迭代'
---

一、为什么进行迭代
    存储数据结构简单时:
    Cookie存储字节太少 至多只有4095字节 个数每个域下最少20个
    LocalStorage: 不受限制 清空后消失
    SessionStorage: 不受限制 浏览器重启后更新
    存储数据结构复杂时:
    indexDB(支持web Worker) 事务型数据库 异步操作访问

二、类库选择
    根据mdn推荐 一共三种
    localForage 最优不解释
    dexie.js
    ZangoDB

三、替代
    在获取多个存储数据的时候，可以使用一个通用函数创建多个promise统一获取，该通用函数使用async/await特征