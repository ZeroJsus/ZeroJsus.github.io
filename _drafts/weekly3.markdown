---
layout: post
title: 'weekly3'
date: 2018-4-21 08:00:00 +0800
categories: blog
tags: '知识周报'
---

target 优化项目整理 async与await with try...catch进阶用法 Object.assgin的对象合并方法 vue提供自定义watch函数来自定义监听指定data值

(进阶)Reflect内置对象 拦截以及获取对象相关信息 es6+新增内置对象 Reflect.ownKeys获取对象的所有键名 包括常规的和Symbol的

(进阶)Symbol原始数据类型 可以生成唯一key es6新增原始类型 常用于对象的属性名 用于保证对象不会出现同名的属性 能防止某一个键被不小心改写或覆盖 Symbol作为对象属性名的时候 不能使用点运算符进行获取 赋值的时候也请使用方括号和Object.defineProperty进行定义 使用Symbol解决公共方法中的魔术字符串 Object.getOwnPropertySymbol方法 获取指定对象的所有Symbol属性名 Reflect.ownKeys也可以获取到

序列化之后反序列化也是深拷贝的一种方式

es6+

str.padStrat{头部填充}|padEnd{尾部填充} (length[,填充字符串/填充数字]) padStart/End 是否被弃用?
Object.values //Object.keys的兄弟方法 一个获取值数组 一个获取键数组
Object.entries //将对象的key:value二维数组化 {a:b,c:d} => [[a,b],[c,d]]
EcmaScript 内存控制 https://segmentfault.com/a/1190000009878632 内存控制由于 SharedArrayBuffer(共享内存) 会出现Spectre漏洞将会逐渐被禁用
ArrayBuffer 表示通用的、固定长度的原始二进制数据缓存区 （被用于base64转换和本地文件读取）
增强的对象字面量 Enhanced Object Literals 未了解

Generators遍历器生成函数 Iterators迭代器的掌握不熟练

Generators遍历器生成函数 一种异步编程解决方案 可以按步骤执行异步状态 调用生成一个遍历对象 yield和return语句用于设置每一个状态的返回值 yield表达式不带返回值 但是对应状态的next方法中传入返回值 可以让yield方法自带返回值 只有在第二个next执行时 带入参数才是有效的 可以多包一层函数使得第一层就可以生效 yield* fn()   可以用来在一个遍历器生成函数中执行另一个遍历器生成函数

Iterators迭代器 相当于创建一个指针对象 每调用一次next()都会返回设定好的数据结构和信息 在需要迭代器的方法中设定[Symbol.iterator] 方法对应的next返回方法来设定next调用时指针的位置

记住 函数做默认参数可以用于做参数验证

...运算符也是一种遍历
