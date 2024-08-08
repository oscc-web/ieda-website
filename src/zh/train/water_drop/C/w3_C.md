---
title: "C++学习-Week3"
order: 4
---
## DAY15：讲座分享

### 一、具体要求

（一）**讲座分享**：

- 14:30 - 15:30 陶思敏老师分享主题演讲，同时大家可以分享对水滴计划的一些改进建议，对C++编程感兴趣的部分，对C++并发编程/容器等的掌握程度等；
- 15:30 - 16:30 黄增荣老师分享主题演讲，同时大家可以咨询自己对iEDA项目的一些存在的问题，自己感兴趣的方向，对开源EDA的理解和看法等等；
- 如果演讲内容无排期，请自行观看参考资料的线上视频。

（二）**实践学习**

- 下载并查阅iEDA项目的Gitee仓库，了解其代码结构等。

### 二、学习成果展示

- 提交每日的学习记录；

### 三、参考资料

- 论文：
  - [荣获ISEDA 2023的Best Paper](https://arxiv.org/pdf/2308.01857)
  - [iEDA：ASPDAC-24](https://ieeexplore.ieee.org/abstract/document/10473983)
  - [iPD：ASPDAC-24](https://ieeexplore.ieee.org/abstract/document/10473932)
  
- 仓库：
  - [iEDA项目仓库Gitee](https://gitee.com/oscc-project/iEDA)
  - [iEDA项目仓库GitHub](https://github.com/OSCC-Project/iEDA)

- 视频链接：
  - [iEDA-水滴计划简介](https://www.bilibili.com/video/BV1TM4y1H7WT)
  黄增荣老师介绍 iEDA：从网表到版图的开源芯片设计EDA平台简介。包括：概述iEDA项目的架构设计，工程包目录解读，核心代码/配置脚本文件的编译与解读，从软件工程思想举例介绍iEDA项目的模块设计和业务逻辑交互等等。

  - [iEDA项目介绍](https://www.bilibili.com/video/BV1yF411Q7D8)
  李兴权老师介绍iEDA项目介绍开源EDA项目简介。包括：开源EDA项目的目标、任务、时间规划和预期成果，开源EDA的工具链组成，已有开源EDA工具简介和存在问题，iEDA的架构、系统平台、开源社区设想等等。

  - [2023 开源芯片技术生态论坛](https://www.bilibili.com/video/BV1Th4y1S7Xj)
  黄增荣老师介绍iEDA支撑一次28nm流片的经历。包括：介绍布图规划iFP/iPDN，网表优化iNO，布局iPL，时钟树综合iCTS，布线iRT，设计规则检测iDRC，介绍各个点工具的目标、流程脚本、报告分析等等。

## DAY16: iEDA初体验

### 一、具体要求

（一）EDA项目代码阅读，了解其工程架构，接口，配置文件，简单的交互逻辑等；
（二）尝试画出自己学习了解的iEDA，可以以学习笔记、思维导图、流程图等梳理。

### 二、学习成果展示

- 制作iEDA项目的架构图并加以文字描述；
- 概括iEDA工程各目录的主要内容；
- 对上两项内容提交PR到指定仓库iTraining/EDA中；
- 提交每日的学习记录；

### 三、参考资料

- [iEDA 用户手册](https://gitee.com/oscc-project/iEDA/blob/master/docs/user_guide/iEDA_user_guide.md)
描述iEDA系统部署图、使用前环境的准备、工具流程以及GUI操作手册。

- [iEDA 开源芯片设计平台介绍](https://gitee.com/oscc-project/iEDA/blob/master/README.md)
主要划分为iEDA和iEDA用户指导两个部分，讲述iEDA名字来源、主要结构、工具等内容。

## DAY17-DAY21：C++大作业

已知如下图地图，黑色表示障碍物无法通行，要求实现避障算法寻找从红色起点出发到达绿色终点的最优路径。

<!-- ![](/res/images/train/water_drop/image.png) -->

<center> <img src="/res/images/train/water_drop/image.png" alt="6" style="zoom:55%;" /></center> 
<center> 二维网格路径搜索</center>

要求：
（1）	对图中的地图进行建模，抽象成类，对数据进行封装；
（2）	思考寻路算法的实现，对问题进行拆解，对算法实现也要求抽象接口类；
（3）	使用给定的C++工程模板，按照模板编写CMakeLists.txt，以及Google Test单元测试，DoxyGen注释的使用。

### 一、具体要求

（一）**实现A*算法**：

   - 对地图进行建模，抽象成类并封装数据；
   - 实现寻路算法，拆解问题，算法实现要求抽象接口类；
   - 使用给定的C++工程模板，按照[模板](https://github.com/filipdutescu/modern-cpp-template.git)编写CMakeLists.txt，Google Test单元测试，使用DoxyGen注释；
   - **扩展要求**
     - 实现带权重的障碍节点的A*寻路算法；
     - 采用可视化UI界面展示地图及寻路结果；
     
（二）**输出C++实习总结的PPT**：

   - 描述已掌握的C++及C++ Modern的内容，用列表大纲的形式展示，类似技术栈罗列；（1 min）
   - 描述A*算法大作业，类似于做学术报告，可以参考iEDA第二期Tutorial中各位同学做的算法部分的报告，应该在PPT中至少包含：数据结构设计、输入输出描述、主要算法思想，实验结果汇总，运用的C++ Modern新特性； (4 min)

### 二、学习成果展示

- 提交每日的学习记录；
- 实验报告中应该至少包含数据结构设计、输入描述、输出描述、主要算法思想的文字描述，测试用例及用例运行结果（如设计两点间通路、死路情况的样例、不同情况通路中对应的最优路径cost消耗）； 代码和实验报告(作为readme.md)一起提交Pull Request；
- 准备并提交实训总结的PPT。

### 三、参考资料

- [题目.docx](https://gitee.com/oscc-project/iTraining/tree/master/C++/CPP-Program-Assignment/Assignment_3)
- [水滴计划-答辩ppt模板.pptx](https://gitee.com/oscc-project/iTraining/tree/master/C++/ppt)
- 实现带权重的障碍节点的A*寻路算法参考视频：[A*算法实验-带权重版本](https://www.bilibili.com/video/BV1544y1w7PR)
- [A*思路分享](https://gitee.com/oscc-project/iTraining/blob/master/C++/ppt/AStar%E9%A1%B9%E7%9B%AE%E6%80%9D%E8%B7%AF%E5%88%86%E4%BA%AB_%E6%9B%BE%E6%99%BA%E5%9C%A3.pptx)

**学习小注：** 至此，C++的系统学习就告一段落，若学有余力提前完成的同学，不妨简单思考三点如何实现最短路径。
