---
title: "C++学习-Week2"
order: 3
---
## DAY8-DAY9：C++进阶学习

### 一、具体要求

- 学习 C++ 基本语法和面向对象编程基础，选择自己喜欢的学习资料（书籍/视频/教程），以下仅供参考，目标是掌握C++基本语法和面向对象编程基础：

（一）**基础较好的同学学习规划**:

   - 学习 C++ Primer Plus 的指定章节内容：
     - 第7章至第13章（必看）
     - 第14章至第17章（推荐看）
     - 第18章（可选看）
   - 每章挑选2-3个章节习题并完成，注意代码规范，将代码提交到 git 仓库中，或者直接跳过本部分的学习。

（二）**基础较为一般的同学学习规划**:

   - 结合《C++那些事》教程进行学习，教程链接：[C++那些事](https://light-city.github.io/)。
   - 学习基础进阶部分，实战系列的重点实战练习，惯用法，设计模式中的单例模式，并记录笔记。
   
（三）**学习目标**:

   - **C++进阶**:
     - C++对C的扩展：命名空间，const，volatile，引用和指针；
     - 类：类和对象，类的默认参数，类的封装和访问控制权限，类的简单编程，类的构造函数，类的析构函数，Explicit，类的拷贝构造和赋值函数，移动构造和文本赋值函数，深拷贝和浅拷贝问题，多个对象的构造和析构，C++函数重载；
     - 对象的分配和释放：类和对象的动态分配和释放内存，静态成员变量和函数的使用，C++编译器对成员方法的处理机制，this，友元函数，友元类；
     - 运算符重载：运算符重载概念，常用运算符重载，自定义的智能指针类，实现一个自定义的 String 类；
     - 类的继承，派生和多态：继承中的访问控制，继承中的构造和析构，多继承，虚继承，多态的使用，区分成员函数的重载和重写，虚函数表指针，列表初始化，虚函数，抽象类的使用，虚析构和纯虚析构函数；
     - 函数模板，类模板：函数模板的基本语法，函数模板的重载的调用规则，编译器对模板的编译过程，类模板的概念和基本语法，继承中的类模板，类模板中友元函数，友元函数模板；
     - 异常，IO流：C++类型转换，异常抛出和捕获，cin, cout，C++文件IO类的使用.

（四）**Pull Request提交步骤**:

   - Gitee 仓库地址：[C++ Codes](https://gitee.com/oscc-project/iTraining/tree/master/C++/codes)
   - 操作步骤：
     - Fork 本仓库；
     - 新建分支：{学习者的名字} 分支（将学习者的名字替换到分支名称）；
     - 上传内容至 iTraining/C++/codes/{年份-月份}/{学习者的名字}；
     - 新建 Pull Request 到 master 分支；

### 二、学习成果展示

- 提交每日的学习记录；
- 整理 C++ 学习笔记；
- 完成 C++ Primer Plus 的习题，提交 PR；

### 三、参考资料

（一）**C++ 参考资料**:

   - 书籍推荐: C++ Primer Plus、C++编程思想
   - [《C++那些事》教程](https://light-city.github.io/)

（二）**编程辅助工具视频教程**:

   - [《iEDA-水滴计划：Copilot插件及ChatGPT工具在编程中的应用》](https://www.bilibili.com/video/BV1eh4y1C7Ys)

## DAY10-DAY11: 数据结构学习

### 一、具体要求

- 简单学习数据结构书籍中图论、搜索两章的内容；
- 学习STL和Boost相关库。

STL重点学习以下内容，详细可以在《C++ Primer》第二部分第9-10章
   a. 容器库包括vector、queue、stack、list、set、map、unordered_set、unordered_map
   b. 算法库包括排序、搜索、复制、修改、删除、替换
   c. 迭代器包括输入迭代器、输出迭代器、前向迭代器、双向迭代器、随机访问迭代器
   d. 常见函数Functor，如std::less、std::greater

[STL官方文档](https://www.cppreference.com/Cpp_STL_ReferenceManual.pdf)
[C++ STL Tutorial](https://www.runoob.com/cplusplus/cpp-stl-tutorial.html)

Boost重点学习图Graph库，提供了各种各样的图算法和数据结构，例如图遍历、最短路径、最大流等。几何库Geometry，提供了各种各样的几何算法和数据结构，例如线段相交、多边形面积、点到直线距离等。

[Boost图Graph](https://www.boost.org/doc/libs/1_75_0/libs/graph/doc/index.html)
[Boost几何Geometry](https://www.boost.org/doc/libs/1_85_0/libs/geometry/)

### 二、学习成果展示

- 提交每日的学习记录；
- 整理图论、数据结构学习的相关学习笔记；

### 三、参考文献

（一）**数据结构参考资料**：

   - 书籍推荐：数据结构-dsacpp、王道数据结构考研复习用书

**学习小注：** 数据结构是基础性学习，枯燥乏味，但基础不牢，地动山摇，要引起重视。

   

## DAY12-DAY14：C++ Modern特性学习

### 一、具体要求

（一）**Modern C++ 学习及笔记整理**:

   - 重点掌握 auto、智能指针、移动构造、lambda 等 C++ Modern 新特性；
   - 参考资料的两本书分别对应中文版和英文版，选一本进行阅读。

（二）**组织一次答疑活动**:

   - 由陶思敏老师及助教组织答疑，会议时间选定为其中一天的晚上。

### 二、学习成果展示

- 提交每日的学习记录；
- 整理实操新特性的demo代码和运行结果和Readme到Markdown文档中（不用上传代码，代码也整理到文档中即可）

### 三、参考资料

（一）**书籍推荐**：

   - 《Effective Modern C++》
   
（二）**视频教程**：

   - [《iEDA-水滴计划：C++20入门》](https://www.bilibili.com/video/BV1Em4y1x7oe)

（三）**更多视频学习**：

   - [《iEDA-水滴计划：C++常用知识点》](https://www.bilibili.com/video/BV19F411y7sq)
