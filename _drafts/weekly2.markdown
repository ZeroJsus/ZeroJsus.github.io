---
layout: post
title: 'weekly2'
date: 2018-3-3 08:00:00 +0800
categories: blog
tags: '知识周报'
---

ci: Gitlab Docker+Drone

处理electron下jquery加载问题
<!-- Insert this line above script imports  -->
<script>if (typeof module === 'object') {window.module = module; module = undefined;}</script>
<!-- 这里是script脚本文件的加载位置 -->
<!-- Insert this line after script imports -->
<script>if (window.module) module = window.module;</script>

使用html5获取的用户位置信息 因为国内已经将google墙了所以获取不到对应的信息 对应接口是navigator.geolocation.getCurrentPosition(succfn,errfn,option) option三个选项分别是控制精准度，查找的超时时间以及上一次获取地址的缓存有效时间

