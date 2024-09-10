---
title: "EDA学习-Week3"
order: 7
icon: file-lines
---


## DAY15-DAY20：iEDA工程代码实践

### 一、具体要求

（一）**对于系统方向**：

- **整体目标：** 关注数据流变化、平台提供的服务、iEDA的各点工具的API接口以及逻辑交互等等。
- **任务与要求：**
  - 任务1：代码阅读与理解：沉下心来进行代码阅读，对第十六天的“画出iEDA项目的架构图，并对架构图加以描述成文字”中的架构图及描述加以完善；
  - 任务2：遵循iEDA平台的模块划分，完成以下功能：
    - 用iEDA读取gcd设计文件，根据EDA后端设计流程，依次运行iEDA点工具流程，参考现有点工具的报告输出结果，需要实现对各流程的相关参数的变化进行汇总，设计相应的Json数据结构，展示各流程的参数变化。
- **学习课程：**
  - 参考iEDA实践：[系统工程实践：S1-数据流处理与分析](/train/practice/systems/s1.md)

（二）**对于算法方向**：

- **整体目标：** 对iEDA项目的某个点工具进行深入学习，包括实现布图规划和布局的iFP及iPL点工具，实现布线的iRT点工具，实现静态时序分析的iSTA点工具等，熟悉点工具的数据流变化，掌握点工具的架构实现和算法实现，了解点工具中的具体方法和接口等。
- **任务与要求：**
  - 任务1：代码阅读与理解：沉下心来进行代码阅读，对第十六天的“画出iEDA项目的架构图，并对架构图加以描述成文字”中的架构图及描述加以完善；
  - 任务2：代码设计：
    - 在本次实践作业中，对布局合法化模块进行实现，实现Tetris算法来进行合法化。
      
      - **算法优化目标：** 所有单元的竖直移动距离以及未来的水平移动距离之和最小。
    - **Abacus算法主要步骤如下**（动态规划算法，会移动已经合法化的单元）：
      
      - 单元分散到行：根据单元的横坐标对各个单元进行排序。每次处理一个单元，该单元首先移动到最近的行；
      - 行内合法化：计算该单元在本行的代价，以及移动到该行的上方和下方的代价，保证单元的总移动最小且不重叠；
      - 单元放置：将该单元放置到代价最小的行，同时更新簇和坐标。
    - **Tetris算法主要步骤如下**（贪心算法，不会移动已经合法化的单元）：
      
      - 候选空间选取：按横坐标顺序排列所有单元，在每行选取最左端的一个空白区域；
      - 单元放置：对每个单元，在候选空间中挑选最近的一个并放置。更新已占用格子信息，逐个放置直到所有单元被安置。
- **学习课程：**
  - 参考iEDA实践：[算法设计实践：A1-布局合法化算法实现](/train/practice/algorithms/a1.md)
  - 参考iEDA实践：[算法设计实践：A3-增量式时序优化算法](/train/practice/algorithms/a2.md)

（三）**参考文献**：

- [Abacus算法：P. Spindler, U. Schlichtmann, and F. M. Johannes. Abacus: fast legalization of standard cell Circuits with minimal movement. In Proceedings of ACM International Symposium on Physical Design, pp. 47–53, 2008.](http://localhost:8091/train/water_drop/water-drop-eda.html#_1-%E5%AD%A6%E4%B9%A0%E5%86%85%E5%AE%B9%E6%A6%82%E8%BF%B0)

  - **算法优化目标：** 所有单元的竖直移动距离以及未来的水平移动距离之和最小。
  - **Abacus算法主要步骤如下**（动态规划算法，会移动已经合法化的单元）：
    
    - 单元分散到行：根据单元的横坐标对各个单元进行排序。每次处理一个单元，该单元首先移动到最近的行；
    - 行内合法化：计算该单元在本行的代价，以及移动到该行的上方和下方的代价，保证单元的总移动最小且不重叠；
    - 单元放置：将该单元放置到代价最小的行，同时更新簇和坐标。
- [Tetris算法：Method and system for high speed detailed placement of cells within an integrated circuit design; Dwight Hill; US09273809; 2002.04.09.](http://localhost:8091/train/water_drop/water-drop-eda.html#_1-%E5%AD%A6%E4%B9%A0%E5%86%85%E5%AE%B9%E6%A6%82%E8%BF%B0)

  - **Tetris算法主要步骤如下**（贪心算法，不会移动已经合法化的单元）：
    
    - 候选空间选取：按横坐标顺序排列所有单元，在每行选取最左端的一个空白区域；
    - 单元放置：对每个单元，在候选空间中挑选最近的一个并放置。更新已占用格子信息，逐个放置直到所有单元被安置。



### 二、学习成果展示

- 代码设计按照编码规范进行实现，并按照要求实现相应功能，提交PR到代码仓库中；
- 输出完善后的iEDA架构图及其文字描述；


### 三、参考资料

（一）**材料：**

- [《iEDA 用户手册》](/tools/ieda-platform/guide.md)
- [《iEDA 从 Netlist 到 GDS 的开源芯片设计 EDA 平台》](https://gitee.com/oscc-project/iEDA/blob/master/README.md)
- 《Paper of Abacus.pdf》、《Patent of Tetris.pdf》 [链接](https://gitee.com/oscc-project/iTraining/tree/master/EDA/ppt)
《Paper of Abacus.pdf》介绍了一种名为“Abacus”的新方法，用于在最小移动的情况下合法化标准单元电路的布局。通过按位置对单元进行排序，并逐个合法化单元，这种方法在移动单元时采用了动态规划，以减少总体移动量。
《Patent of Tetris.pdf》介绍了一种用于在集成电路设计中高速进行单元详细放置的方法和系统，通过对单元进行排序和摆放，提高了放置效率，从而实现更高性能的集成电路设计。

（二）**视频：**

- [《iEDA-项目介绍：EDA平台、人工智能与人才培养》](https://www.bilibili.com/video/BV1Bu4y1B7KJ)

（三）**更详细的课程介绍文档：** iEDA支持课程实践
学习小注：此部分的学习很接近项目了，如果遇到较大问题，可以请教布局组陈仕健师兄。



## DAY21-DAY22：学习与总结

### 一、具体要求


（一）完善学习内容：

- 设置了两天缓冲时间，在此期间同学们可以对因故未完成的内容加以完成，未完成的任务进行补充。需要对上述所有任务中的PR，由助教检查通过后，可以申请答辩；
- 如已全部完成的同学，可以认真整理和复习所学习的内容。

（二）按照要求输出答辩PPT，要求：
   - **个人简介**：一两句话概括，前期答疑/周会已对各位同学有所了解。
   - **C++实习总结** 5min:
     - 描述已掌握的C++和C++ Modern的相关内容，用列表大纲的形式展示，类似于求职简历里的技术栈罗列。(1min)
     - 描述A*算法大作业，类似于做学术报告，可以参考iEDA第二期Tutorial中各位同学做的算法部分的报告，应该在PPT中至少包含：数据结构设计、输入输出描述、主要算法思想、实验结果汇总，运用的C++ Modern新特性。(4min)
   - **EDA实习总结** 8min:
     - PPT展示，展示一些已学习的内容 / 笔记整理展示 / iEDA相关assignment学习情况。(3min)
     - 现场通过VSCode打开iEDA工程代码，结合assignment的代码讲解对EDA后端流程的理解情况。(5min)
   - **感兴趣的内容** 2min:
     - 自身感兴趣的EDA模块内容，自由发挥，可从算法流程 / 论文 / 自身选择原因 / 感兴趣的点等入手。(2min)


- **各位老师及助教进行提问和总结不足**。

（三）注意：
   - 听完C++实习总结后，团队中主要负责老师及助教老师对每个人C++学习情况进行打断点评，或等全部展示完再进行点评；
   - 每人有15min左右展示时间及10min-12min的提问时间；

### 二、学习成果展示

输出水滴答辩PPT；

### 三、参考资料

- **材料：** [《水滴计划-答辩ppt模板.pptx》](https://gitee.com/oscc-project/iTraining/tree/master/C++/ppt)
  - **视频：**
  以下为2023期学员的答辩视频，以供学习：
    - [《iEDA-水滴计划：学习成果答辩总结与展示交流(王瑞)》](https://www.bilibili.com/video/BV1y34y1T7GV)
    - [《iEDA-水滴计划：学习成果答辩总结与展示交流(郭帆)》](https://www.bilibili.com/video/BV18w411D7mj)
    - [《iEDA-水滴计划：学习成果答辩总结与展示交流(伍振东)》](https://www.bilibili.com/video/BV1Mu4y1y7JL)

   2024期学员的答辩视频，以供学习：
    - [《2024年EDA人才培养计划：学习成果答辩总结与展示交流（万云鹏）》](https://www.bilibili.com/video/BV1GgsKeZESF/?spm_id_from=333.999.0.0&vd_source=db6d06160a4c6ef1c3194042b1b9bbe2)
    - [《2024年EDA人才培养计划：学习成果答辩总结与展示交流（李子超）》](https://www.bilibili.com/video/BV1uGsseuE3P/?spm_id_from=333.999.0.0&vd_source=db6d06160a4c6ef1c3194042b1b9bbe2)
    - [《2024年EDA人才培养计划：学习成果答辩总结与展示交流（苏坚荣）》](https://www.bilibili.com/video/BV1sospe8Exv/?spm_id_from=333.999.0.0&vd_source=db6d06160a4c6ef1c3194042b1b9bbe2)
    - [《2024年EDA人才培养计划：学习成果答辩总结与展示交流（刘谦）》](https://www.bilibili.com/video/BV1gesteDEE3/?spm_id_from=333.999.0.0&vd_source=db6d06160a4c6ef1c3194042b1b9bbe2)
    - [《2024年EDA人才培养计划：学习成果答辩总结与展示交流（宋彬彬）》](https://www.bilibili.com/video/BV121sTeQEJ5/?spm_id_from=333.999.0.0&vd_source=db6d06160a4c6ef1c3194042b1b9bbe2)
    - [《2024年EDA人才培养计划：学习成果答辩总结与展示交流（张锦森）》](https://www.bilibili.com/video/BV1McsTeXEzR/?spm_id_from=333.999.0.0&vd_source=db6d06160a4c6ef1c3194042b1b9bbe2)
    - [《2024年EDA人才培养计划：学习成果答辩总结与展示交流（龙泽昊）》](https://www.bilibili.com/video/BV1tvs5ekETZ/?spm_id_from=333.999.0.0&vd_source=db6d06160a4c6ef1c3194042b1b9bbe2)


## DAY23：水滴答辩

- 请提前预约一个时间段进行答辩，选择时间段：
  1. 10:00-11:30
  2. 14:30-16:30
  3. 19:30-21:30

  参考水滴计划PPT和总结
    - [《2024水滴计划答辩PPT和总结》](https://gitee.com/oscc-project/iTraining/tree/master/Summary/2024_07)
