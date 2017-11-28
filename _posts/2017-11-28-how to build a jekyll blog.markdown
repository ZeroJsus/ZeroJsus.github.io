---
layout: post
title: '如何搭建Jekyll博客'
date: 2017-11-28 08:00:00 +0800
categories: blog
---

1.创建一个仓库
创建一个以usernmae.github.io为名称的github仓库 这个仓库的地址就是该博客论坛的地址，github默认支持jekyll，直接上传html文件可以通过url+文件名直接访问成功

2.在本地构建jekyll 搭建github-page的开发环境

2.1安装ruby+Devkit

2.2使用gem安装jekyll+bundle(非必须【推荐】)

2.3运行bundle install安装依赖

2.4运行jekyll serve --watch启动本地服务器

2.5使用bundle update进行本地依赖文件的更新

3.将本地代码同步至创建的github仓库

4.实时更新代码以及使用插件
使用git同步更新代码，在Gemfile中定义需要使用到的插件

此blog的[GitHub]地址

[Github]: https://github.com/ZeroJsus/ZeroJsus.github.io
