---
title: "C++学习-Week1 "
order: 2
# icon: book
# icon: bell
# icon: align-center
# icon: code
# icon: lightbulb
# icon: list-check
# icon: image
# icon: quote-left
# icon: spinner
# icon: circle-half-stroke
# icon: up-right-and-down-left-from-center
# icon: at
# icon: square-plus
# icon: square-root-variable
# icon: diagram-project
# icon: paperclip
# icon: eraser
# icon: superscript
icon: file-lines
# icon: table-columns
# icon: square-check
---
## DAY1: 实习前期准备

::: tip
**学习小注：** 在开始学习之前不妨花半小时，先浏览一下Week3 day15的参考资料，对EDA有简要了解，学习方向与总体目标会更加清晰。
以下是学习的一些心得交流，供参考：

``` note
      a. 记录关键概念：在学习过程中，记录下每个主题的关键概念和原理。这有助于你构建知识框架。
      b. 反思学习过程：思考在学习过程中遇到的挑战和解决方案，以及这些经历如何帮助你更好地理解材料。
      c. 分享实际例子：提供实际的代码示例或应用场景，这可以帮助更直观地理解抽象概念。
      d. 讨论学习策略：分享你在学习过程中使用的策略，如分块学习、间隔重复等。
      e. 鼓励交流：鼓励他人分享他们的学习心得，创建一个互助的学习氛围。
      f. 使用清晰语言：在分享时使用简洁明了的语言，确保不同背景的人都能理解。
      g. 利用多种媒介：可以通过博客、视频、演讲或社交媒体等多种方式分享你的学习心得，学习形式包括不局限于知识点总结笔记、思维导图、流程图等。
```
:::

### 一、具体要求

（一）**编程环境搭建**:

- 安装 VS Code 及相关插件安装(Clang、Google Test、CMake、DoxyGen、Remote-SSH)；
  - **Remote-SSH**
    学习要求: 了解SSH协议和远程服务器的概念，通过SSH连接服务器。
    功能: 允许VS Code通过SSH连接到远程服务器，进行代码编辑、运行和调试。
- 阅读相关PPT了解工具功能；

（二）**Gitee工程下载**:

- 将以下Gitee工程下载到本地，并简单点进去探索下组织目录结构划分：
  - [水滴学习部分](https://gitee.com/oscc-project/iTraining)
  - [iEDA部分](https://gitee.com/oscc-project/iEDA)

### 二、学习成果展示

- 提交每日的学习记录；
- 整理关于编程环境搭建中遇到的问题和解决方案的笔记；

### 三、参考链接

（一）**编程环境搭建参考资料**:

- 材料：[《C++工具介绍.pptx》](https://gitee.com/oscc-project/iTraining/tree/master/C++/ppt)
- 材料：[《编程环境.pptx》](https://gitee.com/oscc-project/iTraining/tree/master/C++/ppt)

## DAY2：插件学习

### 一、具体要求

（一）**学习插件基础**:

- 包括 Clang、Google Test、CMake、DoxyGen 以及 CMakeList.txt 文件的基础语法
  - **Clang**
    学习要求: 了解C/C++语言基础，熟悉Clang编译器的使用。
    功能: 提供C/C++语言的语法高亮、智能感知、代码导航、重构工具等。
  - **Google Test**
    学习要求: 熟悉C++单元测试的概念，了解Google Test框架的使用。
    功能: 帮助开发者编写和运行单元测试，确保代码的质量和可靠性。
  - **CMake**
    学习要求: 了解CMake的基本语法和构建系统的概念。
    功能: 通过CMakeLists.txt文件定义项目的构建过程，支持跨平台编译和构建。
  - **DoxyGen**
    学习要求: 了解文档生成工具的使用，熟悉DoxyGen的配置选项。
    功能: 自动从源代码中提取注释生成文档，支持多种输出格式。
- 编写示例代码来熟悉这些插件的使用
- VS code下的Cmake工程文件配置
  - **学习要求**
    - 学习CMake的基本语法和工作原理，知道如何编写CMakeLists.txt文件。
    - 熟悉VSCode的基本使用，包括扩展的安装和管理。
    - 学习如何在VSCode中配置和使用调试器。
  - **功能**
    - 项目构建
    - 配置Cmake构建类型和其他编译选项
    - 实现代码导航与快速查找引用
    - 代码分析，及早发现编译问题
    - 配置启动调试

### 二、学习成果形式

- 输出插件使用的学习笔记，记录遇到的问题及解决方法

### 三、参考资料

（一）**[VScode下Cmake工程配置文件相关资料](https://gitee.com/oscc-project/iTraining/tree/master/C++/tools)**:

- 《Vscode下Cmake 工程配置文件.md》：
  以示例形式展示vscode如何编写launch.json、task.json。
- 《开发环境tools.pdf》：
  主要讲述vscode的介绍、配置。
- 《Glog使用.pptx》：
  讲述Glog使用文档、Glog下载和启动、Glog分级打印、Glog条件打印、Glog调试模式、Glog Check宏、Glog高级功能。
- 《Modern+CMake文档.pdf》：
  从安装、使用CMake生成项目、CMake命令行选项的设置出发，讲述CMake基础知识、基本概念和基本控制语法等内容，并阐述如何构建项目、运行其他程序等操作。

（二）**视频教程**:

- [《iEDA-水滴计划：CMake语法与工程实践》](https://www.bilibili.com/video/BV1xp4y1V7qu)：
  陶思敏老师介绍cmake的安装，相关命令选项，CMakeLists.txt文件的编程规范、语法以及工程实践等等。

**学习小注：** 这部分对于没有接触过编程的同学，学习可能比较茫然，不知所云。不要着急，先简单了解，留个印象，之后编程有一定基础后，遇到困难，再回来看看，会有实际的收获~

## DAY3-DAY4：工具学习

### 一、具体要求

（一）**Git 学习**:

- 包括 fork 工程、创建分支、git add、git commit、git push、git pull、提交 Pull Request 等操作。
  **学习示例：**
  - **Fork 工程**
    a. 访问GitHub/Gitee上的项目页面。
    b. 点击右上角的 "Fork" 按钮，将项目复制到自己的GitHub账户下。
  - **创建分支**
    ```bash
    git clone <仓库URL>  # 克隆仓库到本地
    cd <仓库名>         # 进入仓库目录
    git checkout -b <新分支名>  # 创建并切换到新分支
    ```
  - **添加更改到暂存区**
    ```bash
    git add <文件名>  # 添加单个文件到暂存区
    git add .          # 添加当前目录的所有更改到暂存区
    ```
  - **提交更改到本地仓库**
    ```bash
    git commit -m "提交信息"  # 提交更改到本地仓库
    ```
  - **推送更改到远程仓库**
    ```bash
    git push origin <分支名>  # 将本地分支的更改推送到远程仓库
    ```
  - **从远程仓库拉取更改**
    ```bash
    git pull origin <远程分支名>  # 从远程仓库拉取分支的更改并合并到当前分支
    ```
  - **提交 Pull Request**
    a. 在GitHub上访问你fork的项目。
    b. 点击 "Pull Request" 按钮。
    c. 选择要合并的源分支和目标分支。
    d. 填写Pull Request的描述信息并提交。
- **学习要达到的效果**
  - 理解Git的工作原理和分布式版本控制的概念。
  - 能够熟练地在本地和远程仓库之间同步代码。
  - 掌握基本的分支管理策略，如创建分支、合并分支等。
  - 能够通过Pull Request参与开源项目的协作开发。
  - 学会解决常见的合并冲突。

（二）**终端工具安装及使用**:

- 安装和使用 MobaXterm / Xshell，记录安装过程中遇到的问题

（三）**Linux 基础**:

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
（四）**代码编程规范学习**
（五）**软件设计思想学习**

### 二、学习成果展示

- 提交每日的学习记录；
- 整理Git、Linux、编码规范、软件设计思想等内容的学习笔记；

### 三、参考资料：

（一）**MobaXterm 安装及使用**:

- [《MobaXterm快速入门、高级使用技巧》](https://blog.csdn.net/qq_34435096/article/details/130729092)

讲述使用Mobaxterm的背景、介绍如何快速入门，以及六种高级使用方法：多标签会话、SSH隧道、会话管理器、宏和脚本、远程桌面和自定义设置。

（二）**Linux 基础命令学习**:

- [《Linux常用指令》](https://blog.csdn.net/weixin_57023347/article/details/121194810)
  主要分为Linux使用的基本操作、文件权限相关指令、系统相关指令以及网络相关命令。

（三）**Git 学习参考资料**:
   文档版讲述git使用的详细教程，可搭配陶思敏老师关于git命令的实操视频（后面两个视频）搭配学习：

- [《Git使用详细教程》](https://blog.csdn.net/nanxun201314/article/details/127719569)
- 视频: [《iEDA-水滴计划：git简介与命令实践》](https://www.bilibili.com/video/BV1Ch4y1C7wi)
- 视频: [《iEDA-水滴计划：git简介与命令实践（2）》](https://www.bilibili.com/video/BV1v94y167kd)

（四）**编程规范参考资料**:

   编程规范是为了使软件代码具有可读性，保证软件质量，因此制定本文档。确保编程规范，让你的代码更有参考使用价值。文档学习可搭配陶思敏老师的视频教学配套使用：

- [《编程规范.docx》](https://gitee.com/oscc-project/iTraining/tree/master/C++/code-style)
- 视频: [《iEDA-水滴计划：编程规范概述》](https://www.bilibili.com/video/BV1TN411h72Q)

（五）**软件设计思想参考资料**:

- 视频: [《iEDA-水滴计划：怎样进行软件设计》](https://www.bilibili.com/video/BV1GN411h7Qg)

   陶思敏老师介绍怎样进行软件设计。包括：软件的本质，软件设计过程，软件设计需要考虑的内容等。

## DAY5-DAY7：C++基础学习

**学习小注：** 接下来正式进入C++编程学习，由于大家学习背景不同，可以根据自己的学习习惯、特长与基础情况，调整适合自己的学习计划与方法。编程是一项实践技能，因此编写尽可能多的代码是至关重要的。可以以书籍为导向，也可以在B站、慕课等网站视频学习，尝试解决实际问题，或在在线平台上练习编程挑战。这部分学习形式不做要求。

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
- 学习基础部分，实战系列的重点实战练习，惯用法,并记录笔记。

（三）**学习目标**:

- **C++基础**:
  - 编程基础：常量与变量，进制，运算符，条件控制语句，循环控制语句，数组，字符串；
  - 函数：函数概念，字符串操作函数，自定义函数，递归的使用；
  - 指针：指针变量，指针字长，指针赋值，函数指针参数，指针操作字符串，const，位逻辑运算符，数组指针，指针数组，多维数组函数参数，浅拷贝，深拷贝；
  - 内存管理：变量作用域和生命周期，内存分区，堆的分配和释放，函数调用模型，内存操作函数，宏定义和批处理；
  - 复合类型：结构体，结构体指针，结构体函数参数，复合类型的声明和使用，结构体嵌套指针；
  - 文件操作：文件分类，文件的打开和关闭，文件操作函数，文件读写缓冲区；
  - 简单数据结构和算法：链表的基本概念，单链表的相关操作，大O表示法，线性表顺序存储，线性表链式存储，队列的顺序存储，队列的链式存储，栈的顺序存储，栈的链式存储，二叉树，二叉树的基本操作，常用排序算法；
  - 接口的封装和设计：封装和设计的思想，函数的封装设计，解耦合的设计，函数指针定义的三种方式，回调函数，模块实现和业务分离的思想。

（四）**Pull Request提交步骤**:

- Gitee 仓库地址：[C++ Codes](https://gitee.com/oscc-project/iTraining/tree/master/C++/codes)
- 操作步骤：
  - Fork 本仓库；
  - clone到本地；
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
  李伟国同学介绍：Copilot插件及ChatGPT工具在编程中的应用。包括：基本语句实现，算法补全，新特性，调试和注意事项等。

**学习小注：** 合理使用编程工具可以极大的提高我们的编程效率，但也不要过分依赖，遇到问题自我探索，自我突破也不失为一件趣事。
