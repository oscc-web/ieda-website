---
title: "Week1 水滴计划 C++"
order: 1
---

## DAY1: 实习前期准备

### （1）具体要求
1. **编程环境搭建**:
   - 安装 VS Code 及相关插件(Clang、Google Test、CMake、DoxyGen、Remote-SSH)；
   - 阅读相关PPT了解工具功能；
   
2. **Gitee工程下载**:
   - 将以下Gitee工程下载到本地，并简单点进去探索下组织目录结构划分：
     - [水滴学习部分](https://gitee.com/oscc-project/iTraining)
     - [iEDA部分](https://gitee.com/oscc-project/iEDA)
   
3. **每日记录表格准备**:
   - 点击下载一份副本 [xx大学-张三-学习记录](
https://docs.qq.com/sheet/DVWxnZXh4RU1QTnRp)，在文档中记录每天学习情况和问题。
   
4. **学术诚信学习**:
   - 推崇正确的做法以维护学术诚信，避免以下不当行为：
     - 遇到问题了, 随便改改试试, 说不定就过了； 
       【随便改改有bug过不了，assignment的A*网上一大把，Your code fine，copy mine. 赶紧找大腿/助教/老师来搞定也不想多花时间精力按照《提问的智慧》和《请不要这样提问》中建议的方式来提问，然而水滴答辩时四位老师其实一眼就看出是抄的了，请保持学术诚信！】
     - 这个函数/文件/命令/脚本/生成日志看不懂，反正也不是我写的, 算了就这样吧；
     - 宁愿在百度中舒服地浪费生命, 也不想用谷歌快速解决问题；
     - 让看书的任务反正很难去检查，非assignment的任务不看也没关系；
     - 反正整个水滴阶段有将近两个月的时间, 先开摆后面再开始做, 应该还能赶上；

    - 正确的做法是： 
      - 多思考为什么； 
      【从问题开始着手理解也是个不错的方法】
      - 独立解决问题； 
      【即使是调一个很弱智的bug, "顺带"能学到的东西也比你想象中多得多。换句话说, 如果你选择抱大腿, 你失去的机会也比你想象中多得多】
      - 尝试尽可能理解每一处细节； 
      【将来调bug的时候, 这些细节就是你手中强有力的工具。换句话说, 当你在调bug的时候感到无从下手, 一定是你不了解其中的细节 】
      - 用正确的工具做事情； 
      【百度（×），谷歌（√），这才是节省时间的科学方法, 而不是偷懒】 
      - 按时完成； 
      【拒绝拖延这样你才有时间做到上面几点。按时和认真填写每日记录，坚持一个半月，能清晰看到自己的进步】


### （2）学习成果展示
- 提交每日的学习记录；
- 整理关于编程环境搭建中遇到的问题和解决方案的笔记；

### （3）参考链接
1. **编程环境搭建参考资料**:
   - 材料：[《C++工具介绍.pptx》](https://gitee.com/oscc-project/iTraining/tree/master/C++/ppt)
   - 材料：[《编程环境.pptx》](https://gitee.com/oscc-project/iTraining/tree/master/C++/ppt)
   
2. **每日记录模板**:
   - 材料：《xx大学-张三-学习记录》
   
3. **水滴计划学习概述**:
   - 视频：[《iEDA-水滴计划：iEDA-水滴计划学习体系概述》](https://www.bilibili.com/video/BV1fz4y1W7si)
   
4. **iEDA团队信息**:
   - B站视频号：[iEDA团队视频](https://space.bilibili.com/1189298533)
   - 网站：[iEDA团队网站](https://ieda.oscc.cc)
   
5. **学术诚信参考资料**:
   - 材料：[《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md)
   - 材料：[《请不要这样提问》](https://github.com/tangx/Stop-Ask-Questions-The-Stupid-Ways/blob/master/README.md)


## DAY2：插件学习

### (1) 具体要求

1. **学习插件基础**:
   - 包括 Clang、Google Test、CMake、DoxyGen 以及 CMakeList.txt 文件的基础语法
   - 编写示例代码来熟悉这些插件的使用

### (2) 学习成果形式

- 输出插件使用的学习笔记，记录遇到的问题及解决方法

### (3) 参考资料： 

1. **[Vscode下Cmake工程配置文件]((https://gitee.com/oscc-project/iTraining/tree/master/C++/tools))**:
   - 《Vscode下Cmake 工程配置文件.mdopen in new window》、《开发环境tools.pdf》、《Glog使用.pptx》
   
2. **视频教程**:
   - [《iEDA-水滴计划：CMake语法与工程实践》](https://www.bilibili.com/video/BV1xp4y1V7qu)


## DAY3-DAY4：工具学习

### (1) 具体要求

1. **Git 学习**:
   - 包括 fork 工程、创建分支、git add、git commit、git push、git pull、提交 Pull Request 等操作
   - 学习解决冲突和更新远程仓库代码到本地等内容

2. **终端工具安装及使用**:
   - 安装和使用 MobaXterm / Xshell，记录安装过程中遇到的问题

3. **Linux 基础**:
   - 学习重点内容包括：
     - 文件传输方法(cp/scp/rsync)
     如何从/home/zhuangchunan目录cp或scp或rsync常用lib包到自己目录;
     - 文件权限设置(chmod)
     777 750 读、写、执行 用户 用户组 其他用户区分清楚;
     - 进程监控(top/htop)
     - 磁盘空间查询(df -h)
     - 目录下文件大小查看(du -sh)
     - 文件操作(kill进程/ls/pwd/mkdir/tree)
     - 编辑器(vim/cat/tail/nohup)
     - 终端复用工具(tmux)

    此处只列举了一部分命令，开发时常用命令大概上百条，熟能生巧，需平时多查阅资料和实践。

4. **代码编程规范学习**

5. **软件设计思想学习**


### (2) 学习成果展示

- 提交每日的学习记录；

- 整理Git、Linux、编码规范、软件设计思想等内容的学习笔记；

### 参考资料：

1. **MobaXterm 安装及使用**:
   - [《MobaXterm快速入门、高级使用技巧》](https://blog.csdn.net/qq_34435096/article/details/130729092)

2. **Linux 基础命令学习**:
   - [《Linux常用指令》](https://blog.csdn.net/weixin_57023347/article/details/121194810)

3. **Git 学习参考资料**:
   - [《Git使用详细教程》](https://blog.csdn.net/nanxun201314/article/details/127719569)
   - 视频: [《iEDA-水滴计划：git简介与命令实践》](https://www.bilibili.com/video/BV1Ch4y1C7wi)
   - 视频: [《iEDA-水滴计划：git简介与命令实践（2）》](https://www.bilibili.com/video/BV1v94y167kd)

4. **编程规范参考资料**:
   - [《编程规范.docx》](https://gitee.com/oscc-project/iTraining/tree/master/C++/code-style)
   - 视频: [《iEDA-水滴计划：编程规范概述》](https://www.bilibili.com/video/BV1TN411h72Q)

5. **软件设计思想参考资料**:
   - 视频: [《iEDA-水滴计划：怎样进行软件设计》](https://www.bilibili.com/video/BV1GN411h7Qg)


## DAY5-DAY7：C++基础学习

### (1) 具体要求

- 学习 C++ 基本语法和面向对象编程基础，选择自己喜欢的学习资料（书籍/视频/教程），以下仅供参考，目标是掌握C++基本语法和面向对象编程基础：

1. **基础较好的同学学习规划**:
   - 学习 C++ Primer Plus 的指定章节内容：
     - 第7章至第13章（必看）
     - 第14章至第17章（推荐看）
     - 第18章（可选看）
   - 每章挑选2-3个章节习题并完成，注意代码规范，将代码提交到 git 仓库中，或者直接跳过本部分的学习。

2. **基础较为一般的同学学习规划**:
   - 结合《C++那些事》教程进行学习，教程链接：[C++那些事](https://light-city.github.io/)。
   - 学习基础进阶部分，实战系列的重点实战练习，惯用法，设计模式中的单例模式，并记录笔记。

3. **学习目标**:
   - **C++基础**:
     - 编程基础：常量与变量，进制，运算符，条件控制语句，循环控制语句，数组，字符串；
     - 函数：函数概念，字符串操作函数，自定义函数，递归的使用；
     - 指针：指针变量，指针字长，指针赋值，函数指针参数，指针操作字符串，const，位逻辑运算符，数组指针，指针数组，多维数组函数参数，浅拷贝，深拷贝；
     - 内存管理：变量作用域和生命周期，内存分区，堆的分配和释放，函数调用模型，内存操作函数，宏定义和批处理；
     - 复合类型：结构体，结构体指针，结构体函数参数，复合类型的声明和使用，结构体嵌套指针；
     - 文件操作：文件分类，文件的打开和关闭，文件操作函数，文件读写缓冲区；
     - 简单数据结构和算法：链表的基本概念，单链表的相关操作，大O表示法，线性表顺序存储，线性表链式存储，队列的顺序存储，队列的链式存储，栈的顺序存储，栈的链式存储，二叉树，二叉树的基本操作，常用排序算法；
     - 接口的封装和设计：封装和设计的思想，函数的封装设计，解耦合的设计，函数指针定义的三种方式，回调函数，模块实现和业务分离的思想。
   - **C++进阶**:
     - C++对C的扩展：命名空间，const，volatile，引用和指针；
     - 类：类和对象，类的默认参数，类的封装和访问控制权限，类的简单编程，类的构造函数，类的析构函数，Explicit，类的拷贝构造和赋值函数，移动构造和文本赋值函数，深拷贝和浅拷贝问题，多个对象的构造和析构，C++函数重载；
     - 对象的分配和释放：类和对象的动态分配和释放内存，静态成员变量和函数的使用，C++编译器对成员方法的处理机制，this，友元函数，友元类；
     - 运算符重载：运算符重载概念，常用运算符重载，自定义的智能指针类，实现一个自定义的 String 类；
     - 类的继承，派生和多态：继承中的访问控制，继承中的构造和析构，多继承，虚继承，多态的使用，区分成员函数的重载和重写，虚函数表指针，列表初始化，虚函数，抽象类的使用，虚析构和纯虚析构函数；
     - 函数模板，类模板：函数模板的基本语法，函数模板的重载的调用规则，编译器对模板的编译过程，类模板的概念和基本语法，继承中的类模板，类模板中友元函数，友元函数模板；
     - 异常，IO流：C++类型转换，异常抛出和捕获，cin, cout，C++文件IO类的使用.

4. **Pull Request提交步骤**:
   - Gitee 仓库地址：[C++ Codes](https://gitee.com/oscc-project/iTraining/tree/master/C++/codes)
   - 操作步骤：
     - Fork 本仓库；
     - 新建分支：{学习者的名字} 分支（将学习者的名字替换到分支名称）；
     - 上传内容至 iTraining/C++/codes/{年份-月份}/{学习者的名字}；
     - 新建 Pull Request 到 master 分支；

### (2) 学习成果展示

- 提交每日的学习记录；
- 整理 C++ 学习笔记；
- 完成 C++ Primer Plus 的习题，提交 PR；

### (3) 参考资料：

1. **C++ 参考资料**:
   - 书籍推荐: C++ Primer Plus、C++编程思想
   - [《C++那些事》教程](https://light-city.github.io/)

2. **编程辅助工具视频教程**:
   - [《iEDA-水滴计划：Copilot插件及ChatGPT工具在编程中的应用》](https://www.bilibili.com/video/BV1eh4y1C7Ys)
