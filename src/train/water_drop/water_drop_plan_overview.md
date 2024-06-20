---
title: "水滴计划前言（必看）"
order: 1
---

（水滴计划目的，效果，已有成就，主要划分的模块和各模块的简要介绍）

**水滴计划C++实习部分**

**1 学习内容概述**

1、C++实习的周期共计3周，主要通过书籍阅读及代码实操的形式进行学习，首先在链接为Gitee仓库中下载项目，工程目录按照每周的任务内容进行划分，如下所示：

    ● Week 1：实习前期准备、插件学习、工具学习、C++基础知识学习；

    ● Week 2：C++进阶学习、数据结构学习、C++ Modern新特性学习；

    ● Week 3：实用讲座分享、iEDA入门学习、C++大作业训练、C++标准流程开发实践学习。

2、Gitee仓库地址： https://gitee.com/oscc-project/iTraining

操作步骤：

    ● Fork本仓库

    ● 新建分支：dengqinyi分支（dngqinyi换成学习者的名字）

    ● 内容上传在iTraining/C++/codes/2023-07/dengqinyi（2023-07换成对应开始学习的年份-月份，dengqinyi换成学习者的名字）

    ● 新建Pull Request到master分支

3、每日学习记录：[xx大学-张三-学习记录](https://docs.qq.com/sheet/DVWxnZXh4RU1QTnRp?tab=BB08J2)（请复制一份副本，不要直接在上面填写），在文档中列出自己每天的学习情况和遇到的问题，助教会进行解答。

Demo学习记录日报（供参考）：[华南理工大学-邓钦艺-学习记录](https://docs.qq.com/sheet/DS1pXeWhDSklvdXRo?u=72bd27c38bd746ab8ea486398d8f64a6)

## **2 代码格式要求**

    往期学习者不够重视编程规范，因此在此单独成节进行强调下，以命名为例：

    ● 局部变量名单词之间使用下划线隔开；

    ● 类的变量成员用下划线作为前缀如 _file_name;

    ● 类的函数名使用驼峰类型；如doSomething();

    ● 类的成员存取使用 如get_file_name() set_file_name()；

    ● 类名是PASCAL风格，即首字母大写 如MyClass；

    ● 常量用k作为前缀后面是PASCAL风格如 kFileName;

    ● 全局变量用g作为前缀后面是PASCAL风格如 gFileName;

    ● 接口类必须以Interface为后缀；

    ● 宏定义全大写，中间用下划线隔开 FILE_NAME;

    ● 源文件名和类名保持一致，采用首字母大写PASCAL风格，如MyClass.cc MyClass.h

更多规范**请认真阅读以下文档**，参考及实践：https://gitee.com/oscc-project/iTraining/tree/master/C++/code-style


## **水滴计划EDA实习部分**

### **1 学习内容概述**

1、EDA实习的周期共计4周，主要通过书籍阅读及代码实操的形式进行学习，首先在链接为Gitee仓库中下载项目，主要学习内容如下所示：

（1）**数字电路基础**：

    ● 了解数字电路相关的基本概念；

    ● 逻辑代数、门电路、组合逻辑电路、触发器、波形；

    ● 参考书目：《数字电路与逻辑设计》

（2）**EDA基础**：

    ● 了解芯片设计基本流程；前端：需求制定，架构设计，功能设计；后端：逻辑综合，物理设计，签核分析，物理验证；

    ● 了解物理设计流程，工具，子步骤；

    ● 布图，布局，时钟树综合，布线，电路优化等工具的功能；

    ● 熟悉相关数据文件格式，LEF/DEF/Verilog/SPEF/sdc/；

    ● 评估自己对物理设计中哪个阶段比较感兴趣或者比较擅长；

    ● 参考书目：《超大规模集成电路物理设计 从图分割到时序收敛》、《集成电路设计自动化_清华_2020》等

（3）**EDA进阶**：

    ● 熟练使用开源iEDA和工具跑芯片设计后端流程；

    ● 熟悉各个步骤开源工具命令脚本和参数：综合布图规划（iFP），布局（iPL），时钟树综合（iCTS），布线（iRT），参数提取（iRCX），修时序（iTO）等等

    ● 参考[iEDA工程的ReadMe用户手册](https://gitee.com/oscc-project/iEDA/blob/master/docs/user_guide/iEDA_user_guide.md)


<img src="/res/images/practice/water_drop/water_drop_plan_eda_1.png" style="zoom:90%;" />
<center>图1 iEDA工程点工具流程</center>

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
