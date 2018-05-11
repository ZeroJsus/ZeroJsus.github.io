---
layout: post
title: 'weekly4'
date: 2018-5-14 08:00:00 +0800
categories: blog
tags: '知识周报'
---
#webpack基础+进阶

document.execCommand 例如可以实现快速将选中的数据复制到粘贴板 --> 参考codepen中对应实例的实现

window.getSelection() 获取当前鼠标选中的内容

-webkit-background-clip: text; 将背景裁剪为文字的样式 只有chrome支持？ --> can I use 支持率较好

p标签的限制对应行数 超出省略 
>p{
>  display:-webkit-box;
>  -webkit-box-orient: vertical;
>  -webkit-line-clamp:3;
>  overflow:hidden;
>}

[设置对应浏览器内核的滚动条样式](https://www.lyblog.net/detail/314.html) --> 代码实现参照我的codepen

通过不同浏览器对事件的支持情况对事件进行处理
例:
`if (typeof window.addEventListener != 'undefined') {`
`    window.addEventListener('message', handleMessage, false);`
`} else if (typeof window.attachEvent != 'undefined') {`
`    window.attachEvent('onmessage', handleMessage);`
`}`

window.attachEvent是针对IE浏览器中的事件绑定其中的事件名称需要加上on开头

// 关于window.open的使用了解 --> 对应案例参考 我的codepen页面
[MDN_window.open](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/open)


// 焦点管理
document.activeElement document.hasFocus

//  HTMLInputElement.setSelectionRange prop=(begin,end) 获取当前获取焦点的input对象中的取值的范围


css 
[box-orient](https://developer.mozilla.org/en-US/docs/Web/CSS/box-orient) 指定元素在水平和竖直方向的排列方式 
[display:box](https://www.zhihu.com/question/22991944) 与flex的差异?
[line-clamp](https://caniuse.com/#search=line-clamp) 多行文本省略的新属性 目前在移动端的兼容性比在pc端的兼容性要好很多
[阿里云line-clamp讲解](https://www.aliyun.com/jiaocheng/636050.html)
[css参考手册line-clamp讲解](http://www.css88.com/book/css/webkit/text/line-clamp.htm)

python jupyter