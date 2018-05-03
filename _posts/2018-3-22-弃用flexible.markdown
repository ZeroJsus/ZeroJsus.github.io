---
layout: post
title: '使用vm替代flexible布局'
date: 2018-3-22 23:00:00 +0800
categories: blog
tags: '趋势'
---

vm/vh　数值为元素分别占视图对应范围的百分比
css构建升级为postcss+sass
postcss-import 
postcss-url 和楼上一起对非脚本资源文件进行路径处理
postcss-aspect-ratio-mini 使得css支持直接设置对应元素的宽高比
postcss-cssnext cssnext对css中未来的新特征进行支持
postcss-px-to-viewport 根据viewport来转换px to 指定单位
postcss-write-svg 使用css进行svg图片的绘制
cssnano 压缩处理css
postcss-viewport-units 计算viewport的单位（会导致页面样式出错）
viewport-units-buggyfill viewport polyfill （不使用script引用的话会导致vue中子模块中的背景图片加载失败）
注: 所有字体需要设置字体大小不然会出现字体过小的情况
vm以及rem测试　在viewport兼容性高的移动端浏览器下使用vw　在兼容不高的地方使用rem