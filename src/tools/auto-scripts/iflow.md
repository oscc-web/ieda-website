---
title: "iFlow"
order: 1
---

# 1. 后端设计流程介绍

## 1.1 芯片设计流程（从功能定义到回片）

> 芯片设计基本流程入下图所示：

<center><img src="/res/images/tools/script/iflow_1.png" style="zoom:60%;" /></center>
<center>图1 芯片设计流程</center>

数字IC后端设计流程：（从综合后的网表到GDS）

<center><img src="/res/images/tools/script/iflow_2.png" style="zoom:60%;" /></center>
<center>图2 数字IC后端设计流程</center>

## 1.2 逻辑综合（Synthesis）

### 1.2.1 逻辑基础

将前端的RTL代码映射到特定的工艺库上，添加约束信息，对RTL代码进行逻辑优化生成门级网表。

* 综合工具：yosys
* 综合过程：Translation + Optimization + Mapping

  * Translation：yosys利用其内部的IP库对RTL代码进行结构级和逻辑级的优化，生成GTECH格式的网表。（与工艺库无关）
  * Optimization：根据约束信息（时序、面积、功耗约束）对单元进行结构优化。
  * Mapping：将单元映射成工艺库中对应的门级电路。

 <center><img src="/res/images/tools/script/iflow_3.png" style="zoom:60%;" /></center>
<center> 图3 综合过程</center>

> 综合的基本策略：

* Top-down：以顶层模块为当前设计模块，一次性完成整个设计的综合。
  * 优点：中规模设计优化效果好，模块边界不需额外处理。
  * 缺点：对于超大规模设计综合速度慢，甚至无法收敛。
* Bottom-up：先综合底层模块，顶层模块再调用综合生成的子模块，进而完成整个综合过程。
  * 优点：降低对内存的需求，适合超大规模设计。
  * 缺点：模块边界需额外处理。

### 1.2.2 输入文件

* RTL代码（包括Verilog、VHDL）。
* 库文件（.lib文件），包含所有标准单元和宏单元的信息：
  * cell 的信息：功能、面积、功耗等。
  * 连线负载模型：电阻、电容。
  * 工作环境：工艺、电压、温度。
  * 涉及约束规则：最大最小电容、最大最小转换时间、最大最小扇出。
* 约束文件（.sdc文件），包含设计中所有的时序约束：PVT（选worst case）、Input drives（驱动能力）、Transition times（转换时间）、Capacitive output loads（驱动电容负载）、内部寄生的RC（线负载模型）：
  * 环境条件PVT（process、voltage、temperature）：工艺、电压和温度等周围环境对器件延迟的影响。（fast、typical、slow）温度越高，速度越慢；电压越高，速度越快。

<center><img src="/res/images/tools/script/iflow_4.png" style="zoom:70%;" /></center>
<center>图4 不同PVT条件对器件延迟的影响</center>
  * 线负载模型：为了精确计算路径延迟，除了门单元延迟还有连线延迟。
  * 驱动强度：添加了驱动单元，输入会有一个斜率，也就是告诉DC这个输入端口是由一个真实的外部单元驱动的，不是理想的，DC就知道到达输入端口的转换时间，可以精确计算输入电路的延迟。
  * 电容负载：指定端口上的外部电容负载，可以精确计算输出电路的延迟。
  * 最大转换时间（Max transition）：信号从0->1或1->0变化的时间。

<center><img src="/res/images/tools/script/iflow_5.png" style="zoom:60%;" /></center>
<center> 图5 转换时间</center>
  * 最大扇出（Max fanout）：单个逻辑门直接驱动的最大数目，图6中BUF1的扇出为3。

<center><img src="/res/images/tools/script/iflow_6.png" style="zoom:50%;" /></center>
<center> 图6 最大扇出示例</center>
  * 最大电容（Max capacitance）：输出可以驱动的最大负载值，图7中BUF2的capacitance值为0.05+0.03+0.02+0.07=0.17。

<center><img src="/res/images/tools/script/iflow_7.png" style="zoom:50%;" /></center>
<center> 图7 最大电容示例</center>
  * 时序约束：时序路径是点到点的数据通路，数据沿着时序路径进行传递。

<center><img src="/res/images/tools/script/iflow_8.png" style="zoom:60%;" /></center>
<center>图8 四种时序路径</center>

    > Path1：输入端口到寄存器

    假设外部输入电路延迟为4ns, 时钟周期$T_{clk}$为10ns，则输入端到寄存器（内部逻辑）最大延迟为10 - 4 - $T_{setup}$(ns)，式中$T_{setup}$为建立时间。

    > Path2：寄存器到寄存器

    延时应满足$T_{comp}$ < $T_{clk}$ - $T_{ck2q}$ - $T_{setup}$，式中$T_{comp}$为组合逻辑延迟，$T_{ck2q}$为寄存器CK端到Q端的延迟。

    > Path3：寄存器到输出端口

    假设外部输出路径延迟为4ns，时钟周期$T_{clk}$为10ns，内部逻辑最大延迟为10 - 4 - $T_{ck2q}$。

    > Path4：输入端口到输出端口

    组合逻辑延迟：$T_{clk}$ - $T_{input\_delay}$ - $T_{output\_delay}$

## 1.3 形式化验证（Formal Verification）

### 1.3.1 形式化验证

通过逻辑抽象的方法将两个设计进行对比，保证功能一致（只比较逻辑，不检查时序）。如图9所示，形式化验证包括RTL vs netlist（综合后），netlist（综合后） vs netlist（PR后），由于yosys综合后缺少商业工具formality需要的svf文件，因此无法进行RTL vs netlist（综合后）的对比。

<center><img src="/res/images/tools/script/iflow_9.png" style="zoom:75%;" /></center>
<center>图9 形式化验证流程</center>

### 1.3.2 比较原理

* 将设计划分成多个Logic Cone 和Compare Point组合。（Logic Cone：一组输入最终收敛到一个比较点的锥形逻辑，可以是寄存器输出、端口输入、黑盒的输出。Compare Point：比较点，包括寄存器输入、端口输出、黑盒的输入）

<center><img src="/res/images/tools/script/iflow_10.png" style="zoom:75%;" /></center>
<center> 图10 形式化验证比较原理</center>
* 逻辑接口的比对，比对reference design 和implementation design的Compare point是否匹配（该过程叫match）。

<center><img src="/res/images/tools/script/iflow_11.png" style="zoom:50%;" /></center>
<center> 图11 match过程</center>
* 逻辑功能的比对，给Logic cones激励，看Compare point输出结果是否一致（该过程叫verify）。

<center><img src="/res/images/tools/script/iflow_12.png" style="zoom:65%;" /></center>
<center> 图12 verify过程</center>

### 1.3.3 导致unmatch的原因

表1 形式化验证unmatch的原因及解决办法

| 表现                         | 可能原因                         | 解决办法                                         |
| ---------------------------- | -------------------------------- | ------------------------------------------------ |
| ref和imp不匹配的点数量不一样 | 设计被重命名了                   | -手动设置 user match -打开signature analysis选项 |
| ref 中unmatch 数量比 imp中多 | 综合时逻辑优化掉冗余寄存器       | 不需特殊处理                                     |
|                              | 有些missing cell 产生了Black box | 读入missing cell                                 |
| ref 中unmatch 数量比 imp中少 | 综合过程中产生了额外逻辑         | 检查逻辑映射                                     |

## 1.4 布局布线

### 1.4.1 布局布线

布局布线是将电路网表转换成物理版图的过程，其设计流程如图13所示：

<center><img src="/res/images/tools/script/iflow_13.png" style="zoom:60%;" /></center>
<center>13 布局布线设计流程</center>

### 1.4.2 Init

> 输入数据：

* 综合或DFT后的门级网表。
* 物理库：techlef和cell lef。
* 时序库：.lib，商业工具还会用到.db。

### 1.4.3 Floorplan

1. **面积规划**

<center><img src="/res/images/tools/script/iflow_14.png" style="zoom:60%;" /></center>
<center>图14 芯片面积规划</center>

   * Die area：整个layout占的面积。
   * Core area：可用于摆放单元的面积。
   * 标准单元利用率 = 标准单元总面积/（Core area -宏单元面积），初始经验值在70%-80%之间, 由于开源EDA工具布局布线功能尚未成熟，利用率过高可能会导致影响绕线，可通过降低利用率解决。
2. **宏单元摆放位置规划**

   考虑的问题：时序最优（反复迭代）、布线不阻塞（反复迭代）、供电是否可行、宏单元摆放导致的狭窄通道、宏单元Port位置。

   宏单元摆放预留的窄通道一方面可以放标准单元，另一方面有利于宏单元Port布线，减少拥堵。
3. **Port 摆放位置规划**

   一般根据Port功能及信号走向分组摆放。
4. **电源规划**

<center><img src="/res/images/tools/script/iflow_15.png" style="zoom:60%;" /></center>
<center><img src="/res/images/tools/script/iflow_15_1.png" style="zoom:60%;" /></center>
<center>图15 不同金属层的电源线与通孔</center>

   如图15所示，电源线的奇数层用于横向布线，偶数层用于纵向布线。TM1、TM2用于设计电源主网络，M2-M8用于次级电源网络，M1为标准单元库电源网络。

   供电能力满足要求：

   $I_{sup(TM2)}>P_{total}/V_{sup}$

   $I_{sup(TM1)}>P_{total}/V_{sup}$

   $I_{sup(M4)}>P_{stdcel}/V_{sup}$

   $I_{sup(M5)}>P_{macrocel}/V_{sup}$

   式中，$P_{total}$为整个设计的总功耗，$P_{stdcel}$为标准单元总功耗，$P_{macrocel}$为宏单元总功耗，$V_{sup}$为供电电压。

   电源规划需要考虑的因素：

   * 布线资源：可用于实现电源网络的金属层及最大供电能力。
   * 供电需求：给定电压下，最大电流需求。
   * 元件电源PIN脚：需了解如宏单元以及标准单元VDD,VSS的PIN及其与电源网络的大致连接方式。
   * 窄通道：需要特别关注窄通道标准单元的供电。

### 1.4.4 CTS时钟树综合（Clock Tree Synthesis）

时钟树综合是保证从Clock 的root点长到各个sink 点的clock buffer/inverter tree，时钟信号到达各个寄存器时钟端的时间偏差（skew）尽可能小。

<center><img src="/res/images/tools/script/iflow_16.png" style="zoom:60%;" /></center>
<center>图16 CTS前后时钟线的布局</center>

如图16所示，时钟树综合之前是一个时钟源扇出到很多寄存器的时钟端，时钟树综合之后是由多级的buffer构成了一个时钟树。

1. **时钟源**

   外部晶振+内部时钟发生器+内部PLL产生的高频时钟+内部分频产生各种频率的时钟。
   先从晶振或时钟发生器产生一定频率的时钟（如25MHz），再经过PLL产生倍频时钟（高频时钟），最后再经过分频电路产生各种频点的时钟送到各个功能模块。
2. **锁相环（PLL）数量**

   PLL所占面积较大，因此PLL数量尽可能少，先对各个功能模块的时钟频率需求进行统计，设计分频器，最后计算出PLL的数量。
3. **PLL位置**

   PLL的位置决定了时钟树的长度（Clock Tree Latency），需要理清各路时钟的复用关系，PLL倍频后的时钟供给哪些模块以及这些模块的位置。
4. **时钟约束**

   * 第一部分是晶振 -> PLL
   * 第二部分是PLL -> clock gen 模块（产生分频时钟信号）
   * 第三部分是分频器输出 -> 各个功能模块
5. **CTS 步骤**

   1. 生长时钟树
   2. 优化时钟树及时序
   3. 时钟树绕线
   4. 手动调节时钟树
   5. 查看时钟树报告，重复前面4个过程

### 1.4.5 Route

<center><img src="/res/images/tools/script/iflow_17.png" style="zoom:60%;" /></center>
<center>图17 基于格点的布线图</center>

* track：黄色和蓝色的虚线，没有宽度，基于格点的布线要求所有的金属走线都要在track上。
* pitch：两条track之间的间距。
* trace：实际走在track上的金属走线，有宽度。
* grid point：两条track的交点。
* 标准单元的高宽都是pitch的整数倍，布局时标准单元的pin都放到了grid point上。

> Route的步骤：

1. **Global routing（全局布线）**

   全局布线是为了规划布线路径，确定大体位置及走向，并不会做实际的连线。
2. **Track assignment（track分配）**

   把每一根线分配到track上，并对连线进行实际的布线，布线时尽可能使金属长而减少孔的数量，这个阶段不做DRC设计规则检查。
3. **Detail Routing（详细布线）**

   使用全局布线和track分配过程中产生的路径进行布线和布孔。由于track分配时只考虑尽量走长线，所以会有很多DRC违规产生，详细布线时使用固定尺寸的sbox来修复违规，sbox是整个版图平均划分的小格子，小格子内部违规会被修复，但小格子边界的DRC违规就修复不了，这就需要在接下来的步骤中完成修复。
4. **Search and repair**

   修复在详细布线中没有完全消除的DRC 违例，在此步骤中通过逐渐加大sbox的尺寸来寻找和修复DRC违例。

**注：时钟树布线具有最高的优先权。**

## 1.4.6 Insert fillers

使每一排的标准单元的N井连在一起，提高供电网络稳定性。

插冗余通孔：尽量将单通孔替换成双通孔提高成品率。

## 1.4.7 导出文件

导出版图gds文件和Verilog门级网表供后续流程使用。

## 1.5 静态时序分析（Static Prime Analysis, STA）

静态时序分析是一种通过检查所有路径时序信息从而验证电路时序有效性的方法，其原理如图18所示。

<center><img src="/res/images/tools/script/iflow_18.png" style="zoom:60%;" /></center>
<center>图18 STA原理</center>

1. 把设计划分为若干路径
2. 分别计算每个路径的延迟
3. 检查每个路径的延迟是否满足要求

### 1.5.1 建立时间与保持时间

<center><img src="/res/images/tools/script/iflow_19.png" style="zoom:60%;" /></center>
<center>图19 时序路径图</center>

1. **建立时间$T_{setup}$**

   时钟上升沿到来之前数据保持稳定的时间。

   数据到达UFF1 D端的时间arrival time：

   $T_a$ = $T_{launch}$ + $T_{ck2q}$ + $T_{db}$

   满足setup所允许的最长时间required time：

   $T_r$ = $T_{capture}$ + $T_{clk}$ - $T_{setup}$

   $T_{slack}$ = $T_r$ - $T_a$ > 0 ，即 $T_{capture}$ + $T_{clk}$ - $T_{setup}$ - $T_{launch}$ - $T_{ck2q}$ - $T_{db}$ > 0

   令$T_{capture}$ - $T_{launch}$ = $T_{skew}$，整理得：

   $T_{skew}$ + $T_{clk}$ > $T_{setup}$ + $T_{ck2q}$ + $T_{db}$

   修复$T_{setup}$时序违例方法：

   1. 增加$T_{clk}$：降频。
   2. 降低$T_{db}$：优化组合逻辑、划分流水线、减少关键路径上的负载。
   3. 降低$T_{ck2q}$：换更快的时序逻辑单元，如HVT->LVT。
2. **保持时间$T_{hold}$**

   时钟上升沿到来之后数据保持稳定的时间。

   数据到达DFF1的D端时间arrival time：

   $T_a$ = $T_{launch}$ + $T_{ck2q}$ + $T_{db}$

   满足hold所允许的最长时间required time：

   $T_r$ = $T_{capture}$ + $T_{hold}$

   $T_{slack}$ = $T_a$ - $T_r$ > 0 ，即$T_{launch}$ + $T_{ck2q}$ + $T_{db}$ - $T_{capture}$ - $T_{hold}$ > 0

   令$T_{capture}$ - $T_{launch}$ = $T_{skew}$，整理得：

   $T_{skew}$ + $T_{hold}$ < $T_{ck2q}$ + $T_{db}$

   修复$T_{hold}$时序违例方法：

   1. 增大$T_{db}$：增加组合路径延迟，插buffer。
   2. 降低$T_{skew}$：甚至采用负的skew。

### 1.5.2 输入文件

1. db文件：和综合的db文件一致，并需要ss、ff等多corner下的库
2. 门级网表
3. 约束文件.db
4. 反标文件：sdf、spef

   SDF（Standard delay format）：标准延时格式，描述了设计中的时序信息，指明了模块管脚和管脚之间的延迟、时钟到数据的延迟和内部连接延迟，sdf 文件可直接用于电路后仿。

   SPEF(standard parasitic exchange format) ：标准寄生交换格式，从网表中提取出来的表示RC值信息，在提取工具与时序验证工具之间传递RC信息的文件格式。SPEF提供RC信息，延时计算相对更准确。

<center><img src="/res/images/tools/script/iflow_20.png" style="zoom:60%;" /></center>
<center>图20 SDF与SPEF对比</center>

   SDF文件反标包括单元延时和连线延时，寄生SPEF反标描述了RC参数，SDF反标比SPEF反标运行速度快。

# 2. 开源EDA流程iFlow介绍

## 2.1 Build iFlow

系统环境：iFlow支持在Ubuntu 20.04下使用，不推荐使用20.04以下的版本。

安装依赖工具及库：

Tools

* build-essential 12.8
* cmake 3.16.3
* clang 10.0
* bison 3.5.1
* flex 2.6.4
* swig 4.0
* klayout 0.26

Library

* libeigen3-dev 3.3.7-2
* libbo

预览前10K字符片段







