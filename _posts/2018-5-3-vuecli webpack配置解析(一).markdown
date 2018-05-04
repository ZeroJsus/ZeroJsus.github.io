---
layout: post
title: 'vue脚手架中的webpack配置解析'
date: 2018-5-3 23:00:00 +0800
categories: blog
tags: '迭代'
---
#webpack配置解析
entry output module>rules plugins resolve[非必须]
4.0版本以上注意新增默认src下资源解析的问题 会保存./src不存在
4.6版本与html-webpack-plugin插件存在内置问题

就是将webpack配置对象分成多个配置文件