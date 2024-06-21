---
title: "EDA学习-Week2"
order: 6
---

### DAY29-DAY30：EDA流程整体学习

#### (1) 具体要求

1. **材料阅读**：
   - 《EDA设计流程-v1.0.pptx》
   - 《数字IC 后端设计.pdf》
   - 《数字集成电路设计自动化方法教学经验分享-v2.0(1).pptx》
   - 《数字IC后端设计概述.pptx》

#### (2) 学习成果展示

- 整理书籍阅读笔记，并将笔记链接贴到每日记录中。

#### (3) 参考资料

[材料链接](https://gitee.com/oscc-project/iTraining/tree/master/EDA/ppt)：
   - 《EDA设计流程-v1.0.pptx》
   - 《数字IC 后端设计.pdf》
   - 《数字集成电路设计自动化方法教学经验分享-v2.0(1).pptx》
   - 《数字IC后端设计概述.pptx》

### DAY31：EDA流程整体学习

#### (1) 具体要求

1. **材料阅读**：
   - 《EDA设计流程-v1.0.pptx》
   - 《数字IC 后端设计.pdf》
   - 《数字集成电路设计自动化方法教学经验分享-v2.0(1).pptx》
   - 《数字IC后端设计概述.pptx》

#### (2) 学习成果展示

- 整理书籍阅读笔记，并将笔记链接贴到每日记录中。

#### (3) 参考资料

[材料链接](https://gitee.com/oscc-project/iTraining/tree/master/EDA/ppt)：
   - 《EDA设计流程-v1.0.pptx》
   - 《数字IC 后端设计.pdf》
   - 《数字集成电路设计自动化方法教学经验分享-v2.0(1).pptx》
   - 《数字IC后端设计概述.pptx》


### DAY32-DAY33：EDA基础学习总结

#### (1) 具体要求

1. **以问答的形式描述以下必知必会**：
   - 布局：
     - 请简述一个你学习的布局算法，包括：输入、输出、数据结构设计、算法主要思想，时间复杂度等；
   - 布线：
     - 请简述一个你学习的布局算法，包括：输入、输出、数据结构设计、算法主要思想，时间复杂度等；
   - 静态时序分析：
     - 请简述单元库，互连寄生，单元时延（NLDM表格），线网时延（Elmore计算），串扰噪声的定义，时序检查（Setup/Hold）,时序路径定义，时序约束命令； 
   - EDA性能：
     - 如何解决EDA软件中的性能问题？ 
   - EDA后端：
     - 请简述EDA后端软件开发的流程。每个阶段主要在做哪些工作? 
   - EDA工具：
     - 常见的EDA仿真工具和Debug工具分别有哪些？它们有什么优势和不足？

#### (2) 学习成果展示
   - 将必知必会的回答整理成文档，并在每日记录中贴上文档链接。

#### (3) 参考资料

- 视频：[《iEDA-Tutorial-第二期：iEDA-iMP关键技术》](https://www.bilibili.com/video/BV1GV41157js)
- 书籍推荐：数字集成电路物理设计、超大规模集成电路物理设计 从图分割到时序收敛



### DAY34-DAY38：iEDA Flow流程实践

#### (1) 具体要求

此部分分为两个方向，包括系统和算法，同时该部分也是水滴计划实践的重点关注部分，请同学们重视：

1. **整体目标**
- 熟悉iEDA后端flow流程的点工具的运行结果，关注的主要指标和特征，了解和懂得修改iEDA点工具的配置文件中的配置
  - 熟练使用开源iEDA和工具跑芯片设计后端流程；
  - 熟悉各个步骤开源工具命令脚本和参数：综合布图规划（iFP），布局（iPL），时钟树综合（iCTS），布线（iRT），参数提取（iRCX），修时序（iTO）等等； 
  - 跑通RTL->Netlist->FP_Def->PL_Def->CTS_Def->RT_Def->GDS全流程，根据日志内容解读日志关键参数，关键步骤，描述全流程后端设计过程。

2. **任务要求**
- 对于系统方向：
   - 熟练运行iEDA全流程，了解每个点工具流程所包含的指标。
- 对于算法方向：
   - 能够运行iEDA全流程，并掌握具体感兴趣的点工具中的具体配置和参数，了解点工具的tcl文件相互调用。
- 具体任务如下：
   - 任务1：在iEDA中跑开源工具后端，设计为gcd，工艺为sky130；
   - 任务2：更换设计，将gcd改为uart，工艺为sky130；
   - 任务3：更换工艺库，设计为gcd，工艺为nangate45；
   - 任务4：参考log日志以及report报告，对任务1、2、3中的特征的值进行记录（根据【参考资料】中的《水滴计划-iEDA demo学习》）；

3. 相关任务的design和foundary可以复制到自己的目录（130服务器）： /home/dengqinyi/shuidi/design /home/dengqinyi/shuidi/foundary 
- PR提交要求：上传到代码仓库： iTraining/EDA/codes/2023-07/yourname 不用上传log和report具体内容，只需： 
  - 一个readme.md文件，列出： ①foundary + design + [服务器编号] + 绝对路径 ②"水滴计划-iEDA demo学习"腾讯文档的链接；
  - "水滴计划-iEDA demo学习"腾讯文档内容的截图，可按照不同Flow流程提交多个截图；

#### (2) 学习成果展示

- 输出特征结果文件记录，按照参考文档，一列为一次Flow的结果，任务1、2、3分别有一列结果记录，共计3列的结果。

### (3) 参考资料
1. 材料：
   - 《iEDA各点工具需要关注的特征参考》水滴计划-iEDA demo学习
   - [iEDA 从 Netlist 到 GDS 的开源芯片设计 EDA 平台](https://gitee.com/oscc-project/iEDA/blob/master/README.md)
2. 视频链接：
   1. [iEDA-项目介绍：iEDA流程脚本的设计与使用概述](https://www.bilibili.com/video/BV1xx4y1X7Wq)
   2. [2023 开源芯片技术生态论坛：iEDA构建实践](https://www.bilibili.com/video/BV1mp4y1P7C7)
   3. [2023 开源芯片技术生态论坛：iEDA平台介绍](https://www.bilibili.com/video/BV1T94y147pX)
   4. [2023 开源芯片技术生态论坛：iEDA支撑一次28nm流片的经历](https://www.bilibili.com/video/BV1Th4y1S7Xj)

