---
title: "EDA学习-Week1"
order: 5
---
## DAY1：EDA基础入门

**学习小注：** 接下来就要正式开始学习EDA了，了解EDA流程，各个环节的目的与参考指标有哪些，课题介绍可以先浏览[iEDA B站视频号](https://space.bilibili.com/1189298533)，若学习中有什么问题想法，也可以联系询问iEDA的相关课题的老师同学。

**以防看完就忘**，在阅读书籍时，建议在阅读前整理EDA主要流程，构建思维导图；然后在阅读过程中补充细节。

### 一、具体要求

**学习内容**

学习《数字集成电路物理设计》 第一章和第二章，以及《超大规模集成电路物理设计：从图分割到时序收敛》第一章。
1. 了解芯片设计基本流程，前端（需求制定，架构设计，功能设计），后端（逻辑综合，物理设计，签核分析，物理验证）
2. 了解物理设计[VLSI流程](/train/eda/Part_1-chip_basic/1_2_VLSI_flow.md)、工具、子步骤。
3. [芯片设计标准格式文件](/train/eda/Part_2-chip_files/README.md)，包括Verilog、LEF/DEF、Liberty、SPEF、SDC等

    
### 二、学习成果展示

 整理书籍阅读笔记，并将笔记链接贴到每日记录中。

### 三、参考资料

- **书籍推荐**：《超大规模集成电路物理设计》、《数字集成电路物理设计》。
- **[图像资料](https://gitee.com/oscc-project/iTraining/tree/master/EDA/ppt)**：《EDA后端数据流图_郭帆.png》、《EDA后端流程图_伍振东.png》、《EDA后端流程思维导图_王瑞.png》.

---

## DAY2 逻辑综合入门

### 一、具体要求

**学习内容**

   1. 逻辑编译，了解硬件编程语言Verilog编译到内部逻辑图GTech的过程
      - 《集成电路设计自动化》（第三章 逻辑综合）  
   2. 逻辑表示，了解逻辑表示包括BDD、AIG、MIG等表示方法
      - [逻辑完备集](https://en.wikipedia.org/wiki/Functional_completeness)
   3. 逻辑优化，了解布尔优化、逻辑等价、复杂逻辑分解，状态机优化等基本概念和方法
      - 《集成电路设计自动化》（第三章 逻辑综合）  
      - 论文 DAG-Aware AIG Rewriting A Fresh Look at Combinational Logic Synthesis(**选学**)
      - 论文 Delay optimization using SOP balancing(**选学**)
   4. 工艺映射，将逻辑图映射到工艺门电路的过程，以及工艺映射中Cut、SuperGate等概念、面积、时序和功耗优化方法
      - 《Electronic Design Automation for IC Implementation, Circuit Design》，第2章 Logic Synthesis，第3章 Power Analysis and  Optimization from Circuit  to Register-Transfer Levels
      - 论文 Cut ranking and pruning: enabling a general and efficient FPGA mapping solution(**选学**)
      - 论文 Combinational and sequential mapping with priority cuts(**选学**)
  
### 二、学习成果展示

   - 整理书籍阅读笔记，并分享笔记链接到每日记录中.

### 三、参考资料

   - **书籍推荐**：
    1. 《集成电路设计自动化》
    2. 《Electronic Design Automation for IC Implementation, Circuit Design》
    3. Logic Synthesis in a Nutshell, J. H. Jiang, S. Devadas
    4. Synthesis and Optimization of Digital Circuits, DeMicheli

   - **视频链接**：
     - [iEDA-Tutorial-第四期：iEDA-iMAP工具介绍](https://www.bilibili.com/video/BV1TC4y1d7Jh)
     - [iEDA-Tutorial-第四期：iEDA-AiMAP工艺映射算法](https://www.bilibili.com/video/BV1kj411479e)
     - [iEDA-Tutorial-第四期：iEDA-并行化逻辑重写算法](https://www.bilibili.com/video/BV1F94y187se)
     - [iEDA-Tutorial-第四期：iEDA-iATPG工具介绍](https://www.bilibili.com/video/BV1cu4y147L7)

   - **工具**：
      1. iMap: https://gitee.com/oscc-project/iMAP
      2. berkeley-abc: https://github.com/berkeley-abc/abc
      3. yosys: https://github.com/YosysHQ/yosys

---

## DAY3 布图和布局入门

### 一、具体要求

**学习内容**

  1. 布图（FloorPlan）基础知识，包括分割（Partition）、IO规划、电源网络规划、宏单元放置等，具体可以学习
    - 《超大规模集成电路物理设计：从图分割到时序收敛/VSLI Physical Design: From Graph Partitioning to Timing Closure》 第三章
    - 《Handbook of Algorithms For Physical Design Automation》: Part III(**选学**)
    - 《Electronic Design Automation》：Chaper 10
  2. 布局基础知识，包括超图概念，线长模型，密度模型，优化方法等，可学习书籍
    - 《Handbook of Algorithms For Physical Design Automation》 Part Ⅳ
    - 《Electronic Design Automation》Chaper 11
    - 《超大规模集成电路物理设计：从图分割到时序收敛》第4章 全局和详细布局。
  3. 最优化/组合优化基础，可学习书籍《Combinatorial optimization. Theory and algorithms》(**选学**)

### 二、学习成果展示
   - 整理书籍阅读笔记，并分享笔记链接到每日记录中.

### 三、参考资料
   - **书籍推荐**：《超大规模集成电路物理设计》、《数字集成电路物理设计》。
   - **视频链接：**
     - [iEDA-Tutorial-第二期：iEDA-iFP及iPDN工具架构、特性与使用](https://www.bilibili.com/video/BV1W14y1B7n)
     - [iEDA-Tutorial-第二期：iEDA-iPL 问题介绍、架构、使用与规划](https://www.bilibili.com/video/BV1GN411h7b3/?spm_id_from=333.999.0.0&vd_source=db6d06160a4c6ef1c3194042b1b9bbe2)
     - [iEDA-Tutorial-第二期：iEDA-iPL关键技术](https://www.bilibili.com/video/BV1CX4y1j7eb)

---

## DAY4 时钟树综合入门

### 一、具体要求
**学习内容**

  1. 时钟树综合基础，包括时钟树构成（时钟源、时钟缓冲器、时钟反相器），时钟树拓扑（Tree、Mesh等），时钟树综合常用算法（Zero Skew、Useful Skew等）
   《Electronic Design Automation: Synthesis, Verification, and Test 》 CHAPTER 13 Synthesis of clock and power/ground networks
    [BIU Lecture](https://www.eng.biu.ac.il/temanad/files/2017/02/Lecture-8-CTS.pdf)
    Modern CTS Summary Paper: Performance Analysis on Skew Optimized Clock Tree Synthesis
  2. CTS设计原则，Ultimate Guide: [Clock Tree Synthesis](https://anysilicon.com/clock-tree-synthesis/)
  3. 商业工具（Innovus）[Design Flow](https://vlsitalks.com/physical-design/cts/)(**选学**)
  4. DME，《A computer aided design software module for clock tree synthesis in very large scale integration design》(**选学**)
  5. 时序计算(**选学**)
    Linear Delay: Timing characterization of clock buffers for clock tree synthesis
    PERI: Closed-form expressions for extending step delay and slew metrics to ramp inputs for RC trees
    Bakoglu Metric: Circuits, interconnections, and packaging for VLSI


### 二、学习成果展示

   - 整理书籍阅读笔记，并分享笔记链接到每日记录中.

### 三、参考资料

   - **书籍推荐**：《数字集成电路物理设计》第四章 时钟树综合，《超大规模集成电路物理设计：从图分割到时序收敛/VSLI Physical Design: From Graph Partitioning to Timing Closure》第七章 Special Routing
   - **视频链接**：[iEDA-Tutorial-第五期：iEDA-iCTS问题、研究内容和计划](https://www.bilibili.com/video/BV1rT4y1W7JF/?spm_id_from=333.999.0.0)

---

## DAY5 布线入门

### 一、具体要求
**学习内容**

  1. 学习绕线基本概念，包括Routing Track（Column），Gcell， 斯坦纳树（Steiner Tree），常见DRC规则（Short、Space、Min Area）等基础概念
  2. 学习绕线基本流程，包括Global Routing、Detail Routing（包含Track Assignment，Pin Access、Rip-Up and Reroute等）
  3. 学习绕线基本算法，迷宫算法，模式布线、AStar算法。
  
  可学习以下章节：
  - 《超大规模集成电路物理设计：从图分割到时序收敛/VSLI Physical Design: From Graph Partitioning to Timing Closure》第五章和第六章
  - 《数字集成电路物理设计》 第5章 布线， 附录7 LEF文档简介，附录9 DEF文档简介

### 二、学习成果展示

   - 整理书籍阅读笔记，并分享笔记链接到每日记录中.

### 三、参考资料

   - **书籍推荐**：《数字集成电路物理设计》《超大规模集成电路物理设计：从图分割到时序收敛/VSLI Physical Design: From Graph Partitioning to Timing Closure》
   - **视频链接**：[iEDA-Tutorial-第五期：iEDA-iRT整体，GR问题，研究内容与计划](https://www.bilibili.com/video/BV1C94y1g75d/?spm_id_from=333.999.0.0)
   - **视频链接**：[iEDA-Tutorial-第五期：iEDA-iRT详细布线问题、研究内容与计划](https://www.bilibili.com/video/BV1yG411q7EX/?spm_id_from=333.999.0.0)
   - **视频链接**：[iEDA-Tutorial-第五期：iEDA-iDRC问题、研究内容与计划](https://www.bilibili.com/video/BV1s94y1g7nT/?spm_id_from=333.999.0.0)

---

## DAY6-DAY7 静态时序分析和优化

### 一、具体要求
**学习内容**

  1.数字电路基础知识，包括MOSFET、组合逻辑电路、时序逻辑电路，可学习书籍《数字电路与逻辑设计》第1-5章。
  2.Verilog语言学习,包括Module、Port、Netlist，可学习书籍《Verilog HDL数字设计与综合》第1-6章。
  3.时序基础概念，包括Delay、Transition Time（Slew）、Skew，Clock Domain，Cell Library，Slack，Timing Arc、Timing Path，可学习书籍《Static Timing Analysis for  Nanometer Designs》第1-2章。
  4. 延时计算（Delay Calculation），包括Cell Delay、SPEF、Interconnect Delay计算方法，可学习书籍《Static Timing Analysis for  Nanometer Designs》第3-5章，另外可阅读补充书籍和论文关于AWE、Arnodi等模型降阶的计算方法(**选学**)。
  5. 时序约束（SDC），包括create_clock，set_input_delay，set_output_delay，set_max_fanout，set_max_transition等，可学习书籍《Static Timing Analysis for  Nanometer Designs》第7章。
  6.时序传播和分析（STA），包括Setup/Hold，Multicycle Path，Recovery/Removal，可学习书籍《Static Timing Analysis for  Nanometer Designs》第8章。
  7. 时序分析优化方法（Gate Sizing，Buffering等），可以学习书籍《超大规模集成电路物理设计：从图分割到时序收敛/VSLI Physical Design: From Graph Partitioning to Timing Closure》第八章：对时序收敛、时序优化技术有个初步认识


### 二、学习成果展示

   - 整理书籍阅读笔记，并分享笔记链接到每日记录中.

### 三、参考资料

   - **书籍推荐**：《数字集成电路物理设计》、《MK_Static Timing Analysis For Nanometer Designs》、《集成电路静态时序分析与建模》、《Electronic Design Automation for IC Implementation, Circuit Design, and Process Technology》第十章：Gate sizing survey
   - **视频链接**：
     - [iEDA-Tutorial-第一期：iSTA和iPW整体介绍](https://www.bilibili.com/video/BV1sp4y137bc/?spm_id_from=333.788.recommend_more_video.1)
     - [iEDA-Tutorial-第一期：iSTA工具架构、特性、API与使用](https://www.bilibili.com/video/BV1a14y1B7uz)
     - [iEDA-Tutorial-第一期：iSTA关键技术研究](https://www.bilibili.com/video/BV16X4y177xr)
     - [iEDA-Tutorial-第二期：iEDA-iTO工具架构、特性与关键技术](https://www.bilibili.com/video/BV1LX4y177oQ/?spm_id_from=333.999.0.0&vd_source=db6d06160a4c6ef1c3194042b1b9bbe2)
     - [2023 开源芯片技术生态论坛：基于Yosys和iSTA的数字前端时序评估](https://www.bilibili.com/video/BV1TF411k7kF)
  - **补充阅读材料**：
    1. Neil H. E. Weste, David Money Harris 《CMOS VLSI Design A Circuits and Systems Perspective (4th Edition) 》
    2. 喻文健《超大规模集成电路分析与综合》
    3. 刘峰《集成电路静态时序分析与建模 》
    4. Eli Chiprout, Michel S. Nakhla  《Asymptotic Waveform Evaluation And Moment Matching for Interconnect Analysis 》
    5. Sheldon Tan, Lei He《Advanced Model Order Reduction Techniques In VLSI Design》
    6. 论文《PRIMA: Passive Reduced-Order
    Interconnect Macromodeling Algorithm》
    7. 论文《TICER Realizable Reduction of Extracted RC Circuits》
    8. 手册《prime time user guide》
