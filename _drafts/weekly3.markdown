---
layout: post
title: 'weekly3'
date: 2018-4-21 08:00:00 +0800
categories: blog
tags: '知识周报'
---

target 优化项目整理 async与await with try...catch进阶用法 Object.assgin的对象合并方法 vue提供自定义watch函数来自定义监听指定data值(this.$watch)

(进阶)Reflect内置对象 拦截以及获取对象相关信息 es6+新增内置对象 Reflect.ownKeys获取对象的所有键名 包括常规的和Symbol的

(进阶)Symbol原始数据类型 可以生成唯一key es6新增原始类型 常用于对象的属性名 用于保证对象不会出现同名的属性 能防止某一个键被不小心改写或覆盖 Symbol作为对象属性名的时候 不能使用点运算符进行获取 赋值的时候也请使用方括号和Object.defineProperty进行定义 使用Symbol解决公共方法中的魔术字符串 Object.getOwnPropertySymbol方法 获取指定对象的所有Symbol属性名 Reflect.ownKeys也可以获取到【返回的值是一个array】

序列化之后反序列化也是深拷贝的一种方式

es6+

str.padStart{头部填充}|padEnd{尾部填充} (length[,填充字符串/填充数字]) // 此处的length是指代新生成的字符串的长度 padStart/End ES7+ 目前只有原生chrome平台测试成功
Object.values //Object.keys的兄弟方法 一个获取值生成数组 一个获取键生成数组
Object.entries //将对象的key:value二维数组化 {a:b,c:d} => [[a,b],[c,d]]
EcmaScript 内存控制 https://segmentfault.com/a/1190000009878632 内存控制由于 SharedArrayBuffer(共享内存) 会出现Spectre漏洞将会逐渐被禁用
ArrayBuffer 表示通用的、固定长度的原始二进制数据缓存区 （被用于base64转换和本地文件读取）

Generators遍历器生成函数 Iterators迭代器的掌握不熟练

Generators遍历器生成函数(一种指针实现的顺序函数) 一种异步编程解决方案 可以按步骤执行异步状态 调用生成一个遍历对象 yield和return语句用于设置每一个状态的返回值 yield表达式不带返回值 但是对应状态的next方法中传入返回值 可以让yield方法自带返回值 只有在第二个next执行时 带入参数才是有效的 可以多包一层函数使得第一层就可以生效 yield* fn()   可以用来在一个遍历器生成函数中执行另一个遍历器生成函数 这些重叠调用的遍历器生成器可以被for of循环 递归一次遍历出全部 每一次next()执行返回的是当前断言处的对象value是断言的值 done是递归执行是否执行完全(若是为true，则下一次调用next返回值为undefined) 一个函数只有一个return 所以当指针到return之后 之后的语句便不再执行 返回都为undefined

Iterators迭代器 相当于创建一个指针对象 每调用一次next()都会返回设定好的数据结构和信息 在需要迭代器的方法中设定[Symbol.iterator] 方法中对应的next返回方法来设定next调用时指针的位置
只要能够被迭代的都具备[Symbol.iterator] 直接调用[Symbol.iterator]可以直接获得一个ArrayIterator

记住 函数做默认参数可以用于做参数验证

...运算符也是一种遍历

增强的对象字面量 Enhanced Object Literals => 1.对象中定义的函数方法 可以使用与Vue中定义方法的相同方式进行(函数类属性的省略) 2.对象中定义继承 在对象定义中使用__proto__可以直接指定继承类(直接实例化)，其余方法的定义与对象中定义函数方法相同 3.对象的属性现在可以进行动态计算 4.现在可以使用另一个对象==>_测试使用扩展操作符进行对象扩充_(可以成功)