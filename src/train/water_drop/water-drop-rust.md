---
title: "（删）水滴计划——Rust"
order: 12
---
**水滴计划Rust实习部分**

**1 学习内容概述**
1、Rust实习的周期共计3周，主要通过书籍阅读及代码实操的形式进行学习，首先在链接为Gitee仓库中下载项目，工程目录按照每周的任务内容进行划分，如下所示：

    ● Week 1：实习前期准备、VSCode插件学习(rust-analyzer)、工具学习(cargo)、Rust语言基础知识学习；

    ● Week 2：Rust进阶学习、数据结构和算法学习；

    ● Week 3：实用讲座分享、Rust大作业训练。

2、Gitee仓库地址： https://gitee.com/oscc-project/iTraining

操作步骤：

    ● Fork本仓库

    ● 新建分支：dengqinyi分支（dngqinyi换成学习者的名字）

    ● 内容上传在iTraining/Rust/codes/2023-07/dengqinyi（2023-07换成对应开始学习的年份-月份，dengqinyi换成学习者的名字）

    ● 新建Pull Request到master分支

3、每日学习记录：[xx大学-张三-学习记录](https://docs.qq.com/sheet/DVWxnZXh4RU1QTnRp?tab=BB08J2)（请复制一份副本，不要直接在上面填写），在文档中列出自己每天的学习情况和遇到的问题，助教会进行解答。

Demo学习记录日报（供参考）：[华南理工大学-邓钦艺-学习记录](https://docs.qq.com/sheet/DS1pXeWhDSklvdXRo?u=72bd27c38bd746ab8ea486398d8f64a6)

| | | | | | |
|-|-|-|-|-|-|
|所属周|所属天|学习内容|具体要求|输出物|参考链接|
|第一周|第1天|准备阶段|1、编程环境搭建： VS Code安装及Rust-analyzer插件安装 2、安装Rust和Cargo工具链 |1、整理关于编程环境搭建中遇到的问题和解决方案的笔记  2、使用Cargo创建工程，编写Hello word程序，完成程序编译、执行|1.iEDA团队B站视频号 https://space.bilibili.com/1189298533 2.iEDA语雀 Rust学习 https://ieda.yuque.com/kzqyb5/lfqbw8 3.清华Rust课程 https://lab.cs.tsinghua.edu.cn/rust/ 4.Rust官方学习文档 https://doc.rust-lang.org/book/  https://www.rust-lang.org/learn/get-started|
|第一周|第2-3天|Rust基础知识学习|1、基本数据类型整型、浮点型、字符串、tuple、array等，变量可变性mut 2、复合数据类型enum、struct、trait 3、容器类型vector、hashmap、hashset、BTreeMap、BTreeSet 4、Rust流程控制if while for，以及pattern match语句if let、while let 5、Rust函数Function、闭包、迭代器学习 6、Rust宏Macro编写|1、完成对应小练习 https://exercism.org/tracks/rust|1.Rust官方例子 https://rustwiki.org/zh-CN/rust-by-example/index.html 2.官方 rustlings 小练习  https://rustlings.cool/ 3. Google 出的 Rust 教程 https://google.github.io/comprehensive-rust/welcome.html|
|第一周|第4-7天|Rust进阶知识学习|1、类型系统泛型编程、trait系统、类型转换 2、所有权系统包括所有权机制、Copy和Clone、引用和借用、生命周期、Slice切片 3、智能指针Box、Rc、RefCell 4、并发编程，Atomic，多线程和异步Async/Await并发，Mutex、Arc 5、错误处理Result、Panic、Option、？操作符 6、面向函数编程|1、完成对应小练习 https://exercism.org/tracks/rust|1. 官方 rust 死灵书 https://doc.rust-lang.org/nomicon/intro.html 2. Rust 语言圣经 https://course.rs/basic/intro.html 3. Rust 程序设计语言 https://kaisery.github.io/trpl-zh-cn/title-page.html 4. Rust 原子操作和锁 https://marabos.nl/atomics/ 5. Rust 原子和锁—中文翻译 https://atomics.rs/about-book.html 6. Awesome-rust rust 相关资料、第三方库列表 https://github.com/rust-unofficial/awesome-rust 7. Learn Rust Easy 一本中文入门书 https://rustycab.github.io/LearnRustEasy/ 8. 书籍、博客、视频 《Rust 编程之道》 《Rust 权威指南》 《Rust 程序设计·第二版》 《深入理解 Rust 并发编程》 《Rust 实战》 《The Rust Programming Language》 《Rust For Rustaceans》 《Programming Rust—Fast, Safe Systems Development》 《Command-Line Rust》 《Rust Crash Course》 《Systems Programming Rust》 《Rust Atomics and Locks》  9.社区 The Week in Rust https://this-week-in-rust.org/ Rust 语言中文社区 https://rustcc.cn/|
|第二周|第1-2天|Rust工程管理和测试|1、Rust crate管理和module系统 2、Rust单元测试框架和测试用例编写 3、发布crate到crate.io|1、完成一个小项目，包含Cargo.toml等的文件组织，测试，模块crate划分|1.Rust小抄 https://cheats.rs/|
|第二周|第3-7天|Rust数据结构和算法学习|1、Rust语言编写的链表、树、图数据结构 2、Rust算法递归、分治、回溯、DFS、BFS、动态规划等 3、学习Rust标准库中常见数据结构和算法接口|1、完成数据结构练习  https://gitee.com/ieda-itraining/i-training-rust/tree/master/materials/Rust-Program-Assignment|1. hello算法 https://github.com/krahets/hello-algo/tree/main/codes/rust  2. The Algorithms  https://github.com/TheAlgorithms/Rust|
|第三周|第1-2天|Rust综合实战准备|1、学习Effective Rust，并Rust讲座交流 2、学习张汉东老师的Rust讲座课程资料和视频 3、了解iEDA，iEDA介绍讲座|1、输出学习心得和总结|1. Effective Rust  https://www.lurklurk.org/effective-rust/ 2. 张汉东 Rust https://ieda.yuque.com/g/kzqyb5/lfqbw8/folder/34500773|
|第三周|第3-7天|Rust综合实战|1、学习C++和Rust混合编程，unsafe Rust 2、选择Rust实现iEDA中的一个模块，并接入iEDA平台|1、 接入iEDA并能提升性能|1.《iEDA 用户手册》 https://gitee.com/oscc-project/iEDA/blob/master/docs/user_guide/iEDA_user_guide.md  2.《iEDA 从 Netlist 到 GDS 的开源芯片设计 EDA 平台》 https://gitee.com/oscc-project/iEDA/blob/master/README.md|
