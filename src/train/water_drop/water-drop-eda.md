---
title: "（删）水滴计划——EDA"
order: 11
---
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

● 逻辑综合，布图，布局，时钟树综合，布线，电路优化等工具的功能；

● 熟悉相关数据文件格式，LEF/DEF/Verilog/SPEF/sdc/；

● 评估自己对物理设计中哪个阶段比较感兴趣或者比较擅长；

● 参考书目：《超大规模集成电路物理设计 从图分割到时序收敛》、《集成电路设计自动化_清华_2020》等
（3）**EDA进阶**：

● 熟练使用开源iEDA和工具跑芯片设计后端流程；

● 熟悉各个步骤开源工具命令脚本和参数：综合布图规划（iFP），布局（iPL），时钟树综合（iCTS），布线（iRT），参数提取（iRCX），修时序（iTO）等等

● 参考iEDA工程的ReadMe用户手册：
https://gitee.com/oscc-project/iEDA/blob/master/docs/user_guide/iEDA_user_guide.md

<img src="/res/images/practice/water_drop/water_drop_plan_eda_1.png" style="zoom:90%;" />
<center>图1 iEDA工程点工具流程</center>

**2 学习具体规划**


| 所属周        | 所属天                | 学习内容          | 具体要求                                                     | 输出物                                                       | 参考链接                                                     |
| ------------- | --------------------- | ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 第四周        | 第二十二天            | EDA基础入门       | 1、书籍阅读： （1）数字集成电路物理设计 第1章 集成电路物理设计方法； 第2章 物理设计建库与验证 （2）超大规模集成电路物理设计 从图分割到时序收敛 第1章 绪论 2、EDA基础： ● 了解芯片设计基本流程；前端：需求制定，架构设计，功能设计；后端：逻辑综合，物理设计，签核分析，物理验证； ● 了解物理设计流程，工具，子步骤 3、特别注意：看书的过程比较繁琐，如果没有目的性、方向性，看完以后基本就忘，请在看书前尽量梳理EDA主要流程，构造自己的思维导图，然后看书过程中对思维导图进行添枝拓叶，细化学习！ | 1、书籍阅读的笔记整理，整理的笔记链接贴到每日记录中          | [1、参考资料： （1）书籍推荐：超大规模集成电路物理设计 从图分割到时序收敛、数字集成电路物理设计 （2）材料：《EDA后端数据流图_郭帆.png》、《EDA后端流程图_伍振东.png》、《EDA后端流程思维导图_王瑞.png》 https://gitee.com/oscc-project/iTraining/tree/master/EDA/ppt](https://gitee.com/oscc-project/iTraining/tree/master/EDA/ppt) |
| 第四周        | 第二十三天            | 逻辑综合入门      | 1、书籍阅读：（1）集成电路设计自动化 第2章 高层次综合（2）Electronic Design Automation for IC Implementation, Circuit Design, and Process Technology  第2、3章节（3）Electronic Design Automation: Synthesis, Verification, and Test 1.2节 | 1、书籍阅读的笔记整理，整理的笔记链接贴到每日记录中          | 1、参考资料： （1）书籍推荐：集成电路设计自动化 、Electronic Design Automation for IC Implementation, Circuit Design, and Process Technology、Electronic Design Automation: Synthesis, Verification, and Test（2）视频：《[iEDA-Tutorial-第四期：iEDA-iMAP工具介绍](https://www.bilibili.com/video/BV1TC4y1d7Jh/?spm_id_from=333.788.recommend_more_video.3&vd_source=3fef201155774a793bf8d2d19b4dbd97)》（3）代码工具：[iMAP](https://github.com/OSCC-Project/iMap) |
| 第四周        | 第二十四天            | 布局入门          | 1、书籍阅读： （1）数字集成电路物理设计 第3章 布图规划和布局 （2）超大规模集成电路物理设计 从图分割到时序收敛 第4章 全局和详细布局 | 1、书籍阅读的笔记整理，整理的笔记链接贴到每日记录中          | 1、参考资料： （1）书籍推荐：超大规模集成电路物理设计 从图分割到时序收敛、数字集成电路物理设计 （2）视频：《iEDA-Tutorial-第二期：iEDA-iFP及iPDN工具架构、特性与使用》 https://www.bilibili.com/video/BV1W14y1B7nr （3）视频：《iEDA-Tutorial-第一期：iSTA关键技术研究》 https://www.bilibili.com/video/BV1GN411h7b3 （4）视频：《iEDA-Tutorial-第二期：iEDA-iPL关键技术》 https://www.bilibili.com/video/BV1CX4y1j7eb |
| 第四周        | 第二十五天            | 时钟树综合入门    | 1、书籍阅读： （1）数字集成电路物理设计 第4章 时钟树综合     | 1、书籍阅读的笔记整理，整理的笔记链接贴到每日记录中          | [1、参考资料： （1）书籍推荐：数字集成电路物理设计 （2）视频：《iEDA-Tutorial-第一期：iEDA-iSTA和iPW整体介绍》 https://www.bilibili.com/video/BV1sp4y137bc](https://www.bilibili.com/video/BV1sp4y137bc) |
| 第四周        | 第二十六天            | 布线入门          | 1、书籍阅读： （1）数字集成电路物理设计 第5章 布线 附录7 LEF文档简介 附录9 DEF文档简介 | 1、书籍阅读的笔记整理，整理的笔记链接贴到每日记录中          | 1、参考资料： （1）书籍推荐：数字集成电路物理设计            |
| 第四周        | 第二十七天-第二十八天 | 静态时序分析入门  | 1、书籍阅读： （1）数字集成电路物理设计 第6章 静态时序分析 附录5 SDC文档简介 附录10C SPEF文档简介 附录11 SDF文档简介 （2）MK_Static Timing Analysis For Nanometer Designs书籍的前五章 或者 集成电路静态时序分析与建模 书籍的前六章，二者分别对应英文版本和中文版本，选一本阅读即可 | 1、书籍阅读的笔记整理，整理的笔记链接贴到每日记录中          | 1、参考资料： （1）书籍推荐：数字集成电路物理设计、MK_Static Timing Analysis For Nanometer Designs、集成电路静态时序分析与建模  （2）视频：《iEDA-Tutorial-第一期：iSTA工具架构、特性、API与使用》 https://www.bilibili.com/video/BV1a14y1B7uz （3）视频：《iEDA-Tutorial-第一期：iSTA关键技术研究》 https://www.bilibili.com/video/BV16X4y177xr （4）视频：《2023 开源芯片技术生态论坛：基于Yosys和iSTA的数字前端时序评估》 https://www.bilibili.com/video/BV1TF411k7kF |
| 第五周        | 第二十九天-第三十天   | EDA流程整体学习   | 1、材料阅读： （1）《EDA设计流程-v1.0.pptx》 （2）《数字IC 后端设计.pdf》 （3）《数字集成电路设计自动化方法教学经验分享-v2.0(1).pptx》 （4）《数字IC后端设计概述.pptx》 | 1、材料阅读的笔记整理，整理的笔记链接贴到每日记录中          | [1、参考资料： （1）材料：《EDA设计流程-v1.0.pptx》、《数字IC 后端设计.pdf》、《 数字集成电路设计自动化方法教学经验分享-v2.0(1).pptx》、《数字IC后端设计概述.pptx》 https://gitee.com/oscc-project/iTraining/tree/master/EDA/ppt](https://gitee.com/oscc-project/iTraining/tree/master/EDA/ppt) |
| 第五周        | 第三十一天            | EDA流程整体学习   | 1、材料阅读： （1）《EDA设计流程-v1.0.pptx》 （2）《数字IC 后端设计.pdf》 （3）《数字集成电路设计自动化方法教学经验分享-v2.0(1).pptx》 （4）《数字IC后端设计概述.pptx》 | 1、材料阅读的笔记整理，整理的笔记链接贴到每日记录中          | 1、参考资料： （1）材料：《EDA设计流程-v1.0.pptx》、《数字IC 后端设计.pdf》、《 数字集成电路设计自动化方法教学经验分享-v2.0(1).pptx》、《数字IC后端设计概述.pptx》 https://gitee.com/oscc-project/iTraining/tree/master/EDA/ppt |
| 第五周        | 第三十二天-第三十三天 | EDA基础学习总结   | 1、以问答的形式描述以下必知必会： （1）布局：请简述一个你学习的布局算法，包括：输入、输出、数据结构设计、算法主要思想，时间复杂度等； （2）布线：请简述一个你学习的布局算法，包括：输入、输出、数据结构设计、算法主要思想，时间复杂度等； （3）静态时序分析：请简述单元库，互连寄生，单元时延（NLDM表格），线网时延（Elmore计算），串扰噪声的定义，时序检查（Setup/Hold）,时序路径定义，时序约束命令； （4）EDA性能：如何解决EDA软件中的性能问题？ （5）EDA后端：请简述EDA后端软件开发的流程。每个阶段主要在做哪些工作? （6）EDA工具：常见的EDA仿真工具和Debug工具分别有哪些？它们有什么优势和不足？ | 1、将必知必会的回答整理成文档，文档链接贴到每日记录中        | [1、参考资料： （1）视频：《iEDA-Tutorial-第二期：iEDA-iMP关键技术》 https://www.bilibili.com/video/BV1GV41157js （2）书籍推荐：数字集成电路物理设计、超大规模集成电路物理设计 从图分割到时序收敛](https://www.bilibili.com/video/BV1GV41157js) |
| 第五周-第六周 | 第三十四天-第三十八天 | iEDA Flow流程实践 | 此部分分为两个方向，包括系统和算法，同时该部分也是水滴计划实践的重点关注部分，请同学们重视： 1、整体目标： 熟悉iEDA后端flow流程的点工具的运行结果，关注的主要指标和特征，了解和懂得修改iEDA点工具的配置文件中的配置。 ● 熟练使用开源iEDA和工具跑芯片设计后端流程； ● 熟悉各个步骤开源工具命令脚本和参数：综合布图规划（iFP），布局（iPL），时钟树综合（iCTS），布线（iRT），参数提取（iRCX），修时序（iTO）等等； ● 跑通RTL->Netlist->FP_Def->PL_Def->CTS_Def->RT_Def->GDS全流程，根据日志内容解读日志关键参数，关键步骤，描述全流程后端设计过程。 2、任务要求： （1）对于系统方向：要求熟练掌握如何运行iEDA全流程，每个点工具流程所蕴含的指标； （2）对于算法方向：除了会跑iEDA全流程外，还要对具体感兴趣的点工具中的具体配置、具体参数进行掌握，同时了解该点工具的相关tcl文件的相互调用； （3）具体任务如下： ● 任务1：在iEDA中跑开源工具后端，设计为gcd，工艺为sky130 ● 任务2：更换设计，将gcd改为uart，工艺为sky130 ● 任务3：更换工艺库，设计为gcd，工艺为nangate45 ● 任务4：参考log日志以及report报告，对任务1、2、3中的特征的值进行记录：根据【参考资料】中的《水滴计划-iEDA demo学习》 3、相关任务的design和foundary可以复制到自己的目录（130服务器）： /home/dengqinyi/shuidi/design /home/dengqinyi/shuidi/foundary PR提交要求：上传到代码仓库： iTraining/EDA/codes/2023-07/yourname 不用上传log和report具体内容，只需： （1）一个readme.md文件，列出： ①foundary + design + [服务器编号] + 绝对路径 ②"水滴计划-iEDA demo学习"腾讯文档的链接 （2）"水滴计划-iEDA demo学习"腾讯文档内容的截图，可按照不同Flow流程提交多个截图 | 1、输出特征结果文件记录，按照参考文档，一列为一次Flow的结果，任务1、2、3分别有一列结果记录，共计3列的结果。 | 1、参考资料： （1）材料：《iEDA各点工具需要关注的特征参考》 水滴计划-iEDA demo学习 （2）材料：《iEDA 从 Netlist 到 GDS 的开源芯片设计 EDA 平台》 https://gitee.com/oscc-project/iEDA/blob/master/README.md （3）视频：《iEDA-项目介绍：iEDA流程脚本的设计与使用概述》 https://www.bilibili.com/video/BV1xx4y1X7Wq （4）视频：《2023 开源芯片技术生态论坛：iEDA构建实践》 https://www.bilibili.com/video/BV1mp4y1P7C7 （5）视频：《2023 开源芯片技术生态论坛：iEDA平台介绍》 https://www.bilibili.com/video/BV1T94y147pX （6）视频：《2023 开源芯片技术生态论坛：iEDA支撑一次28nm流片的经历》 https://www.bilibili.com/video/BV1Th4y1S7Xj/ |
| 第六周-第七周 | 第三十九天-第四十四天 | iEDA工程代码实践  | 此部分分为两个方向，包括系统和算法，同时该部分也是水滴计划答辩的重中之重，请同学们重视： 1、对于系统方向： （1）整体目标：关注数据流变化、平台提供的服务、iEDA的各点工具的API接口以及逻辑交互等等。 （2）任务与要求： ● 任务1：代码阅读与理解：沉下心来进行代码阅读，对第十六天的“画出iEDA项目的架构图，并对架构图加以描述成文字”中的架构图及描述加以完善； ● 任务2：遵循iEDA平台的模块划分，完成以下功能：用iEDA读取gcd设计文件，根据EDA后端设计流程，依次运行iEDA点工具流程，参考现有点工具的报告（report目录下的输出文件，如cts_db.rpt、drc.rpt、drv_db.rpt、filler_db.rpt、fixfanout_db.rpt、fp_db.rpt、hold_db.rpt、lg_db.rpt、pl_db.rpt rt_db.rpt等）输出结果，需要实现对各流程的相关参数（如CORE Usage，IO pin Number，Instance Number，Net Number等等参数）的变化进行汇总，同学们需要设计相应的Json数据结构，来展示各流程的参数变化。  2、对于算法方向： 主要分为三大方向：布局、布线、静态时序分析&签核，请同学们首先选出自身的一个感兴趣方向，然后对其进行深入学习。 （1）整体目标：对iEDA项目的某个点工具进行深入学习，包括实现布图规划和布局的iFP及iPL点工具，实现布线的iRT点工具，实现静态时序分析的iSTA点工具等，熟悉某个点工具的数据流变化，掌握点工具的架构实现和算法实现，了解点工具中的具体方法和接口等。 （2）任务与要求： ● 任务1：代码阅读与理解：沉下心来进行代码阅读，对第十六天的“画出iEDA项目的架构图，并对架构图加以描述成文字”中的架构图及描述加以完善； ● 任务2：代码设计： 布局流程中，可以分为三个阶段处理：总体布局(Global Placement)、合法化(Legalization)、详细布局(Detailed Placement)。在全局布局中把单元放到合适的位置，忽略单元重叠。合法化则是把单元放到行上，消除单元之间的重叠。 在本次实践作业中，我们对布局合法化模块进行实现，算法的输入为已经经过粗略放置的电路设计中所有单元的位置坐标，输出为合法的单元的坐标，参考iEDA已有合法化的实现方法——Abacus[1]算法中的接口设计和逻辑交互，我们需要实现Tetris[2]算法来进行合法化。 a） 算法优化目标： ● 所有单元的竖直移动距离以及未来的水平移动距离之和最小。 b）Abacus算法主要步骤如下（动态规划算法，会移动已经合法化的单元）： ●单元分散到行：根据单元的横坐标对各个单元进行排序。每次处理一个单元，该单元首先移动到最近的行； ●行内合法化：计算该单元在本行的代价，以及移动到该行的上方和下方的代价，其中约束是对每一行中所有单元进行放置，使它们的总移动最小并且不重叠。代价计算是对一行中的所有单元簇以及簇的最佳位置，依靠簇的最优位置得到簇中的每一单元的最优坐标以及簇的代价；一行中所有簇的代价为该行的总代价； ●单元放置：将该单元放置到代价最小的行，同时更新簇，以及该行中的所有单元的坐标根据该单元移动过来后的最优簇的坐标进行更新。 c）Tetris算法主要步骤如下（贪心算法，不会移动已经合法化的单元）： ●候选空间选取：首先对所有单元按照横坐标顺序进行排列，按顺序在每一行选取最左端的一个空白区域作为候选空间。 ●单元放置：对于每个单元，在所有候选空间中挑出最近的一个，并将该单元放入。在放置逻辑单元后，更新已占用的格子信息，标记相应的格子为已占用状态。逐个放置剩余的单元，直到所有单元都被放置。 参考文献： [1] P. Spindler, U. Schlichtmann, and F. M. Johannes. Abacus: fast legalization of standard cell Circuits with minimal movement. In Proceedings of ACM International Symposium on Physical Design, pp. 47–53, 2008. 【Abacus】 [2] Method and system for high speed detailed placement of cells within an integrated circuit design 发明人：Dwight Hill 申请号：US09273809, 公开日期：2002.04.09. 【Tetris】  3、组织一次答疑活动，陶思敏老师、黄增荣老师及助教给同学们答疑，会议时间选在其中一天的晚上。 | 1、代码设计按照编码规范进行实现，并按照要求实现相应功能，提交PR到代码仓库中 2、输出完善后的iEDA架构图及其文字描述。 | 1、参考资料： （1）材料：《iEDA 用户手册》 https://gitee.com/oscc-project/iEDA/blob/master/docs/user_guide/iEDA_user_guide.md （2）材料：《iEDA 从 Netlist 到 GDS 的开源芯片设计 EDA 平台》 https://gitee.com/oscc-project/iEDA/blob/master/README.md （3）视频：《iEDA-项目介绍：EDA平台、人工智能与人才培养》 https://www.bilibili.com/video/BV1Bu4y1B7KJ （4）更详细的课程介绍文档：iEDA支持课程实践 （5）材料：《Paper of Abacus.pdf》、《Patent of Tetris.pdf》 https://gitee.com/oscc-project/iTraining/tree/master/EDA/ppt |
| 第七周        | 第四十五天-第四十六天 | 学习与总结        | 1、设置了两天缓冲时间，在此期间同学们可以对因故未完成的内容加以完成，未完成的任务进行补充，需要对上述所有任务中的PR，由助教检查通过后，可以申请答辩。 2、如已全部完成的同学，可以认真整理和复习所学习的内容。 3、任务：按照要求输出答辩PPT。要求如下： （1）个人简介，一两句话概括，前期答疑/周会已对各位同学有所了解 （2）C++实习总结 5min ● 描述已掌握的C++和C++ Modern的相关内容，用列表大纲的形式展示，类似于求职简历里的技术栈罗列；(1min) ● 描述A*算法大作业，类似于做学术报告，可以参考iEDA第二期Tutorial中各位同学做的算法部分的报告，应该在PPT中至少包含：数据结构设计、输入输出描述、主要算法思想，实验结果汇总，运用的C++ Modern新特性；(4min) 听完C++实习总结后，团队中主要负责老师及助教老师对每个人C++学习情况进行打断点评，或等全部展示完再进行点评 （3）EDA实习总结 8min ● PPT展示，展示一些已学习的内容 / 笔记整理展示 / iEDA相关assignment学习情况； (3min) ● 现场通过VSCode打开iEDA工程代码，结合assignment的代码讲解对eda后端流程的理解情况； (5min) 听完EDA实习总结后，团队中主要负责老师及助教老师对每个人EDA学习情况进行打断点评，或等全部展示完再进行点评 （4）感兴趣的内容 2min ● 自身感兴趣的EDA模块内容，自由发挥，可从算法流程 / 论文 / 自身选择原因 / 感兴趣的点等入手； (2min) （5）各位老师及助教进行提问和总结不足  共计： 每人有15min左右展示时间及10min-12min的提问时间 | 1、输出水滴答辩PPT                                           | 1、参考资料： （1）材料：《水滴计划-答辩ppt模板.pptx》 https://gitee.com/oscc-project/iTraining/tree/master/C++/ppt （2）视频：《iEDA-水滴计划：学习成果答辩总结与展示交流(王瑞)》 https://www.bilibili.com/video/BV1y34y1T7GV （3）视频：《iEDA-水滴计划：学习成果答辩总结与展示交流(郭帆)》 https://www.bilibili.com/video/BV18w411D7mj （4）视频：《iEDA-水滴计划：学习成果答辩总结与展示交流(伍振东)》 https://www.bilibili.com/video/BV1Mu4y1y7JL |
| 第七周        | 第四十七天            | 水滴答辩          | 1、跟助教提前预约一个时间段，可选择的时间段包括： （1）10:00-11:30 （2）14:30-16:30 （3）19:30-21:30 | 无                                                           | 无                                                           |
