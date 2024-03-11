---
title: "第一章 ASIC设计流程"
order: 1
---
<h1 style="text-align: center;">1.1 ASIC设计流程概述</h1>
<p style="text-align: center;">May 7, 2020 by <a href="https://teamvlsi.com/author/team-vlsi">Team VLSI</a></p>


在这篇文章中，将要展示 **ASIC** [Application Specific Integrated Circuit : **专用集成电路**] 设计流程。ASIC流程的第一步是设计规范，这个规范通常来自于客户端，客户会写下他们想要在芯片中开发的功能和所需的规格。接下来，整个设计过程将经历不同的设计周期，通常需要6到24个月才能完成设计，具体取决于芯片内部的复杂性。


完整的ASIC设计过程可以分为两部分。

1. 前端设计 [Front End Design]

2. 后端设计 [Back End Design]

## 前端设计

前端设计过程从客户端收到的规范开始。首先，**RTL** [Register Transfer Level : **寄存器传输级别**] 设计工程师通常使用 **HDL** [Hardware Description Language : **硬件描述语言**]，如Verilog或VHDL将规范转换为RTL代码。这些RTL代码描述了芯片的逻辑功能和数据流。

一旦RTL代码编写完成，RTL设计人员会使用RTL模拟器对代码进行功能验证。在模拟器中，设计人员可以模拟各种输入情况，并检查设计的功能是否正常。如果没有发现错误，并且功能验证工程师对代码进行了验证，那么RTL代码就可以进入下一个阶段，即逻辑综合。

接着经过一些阶段，后端设计流程最终生成 **GDS** [Graphics Data System ： **图形数据系统**] 文件。这个完整的ASIC设计流程从RTL代码开始，经过逻辑综合、布局和布线，最终生成GDS文件。因此，它也被称为RTL到GDS（RTL2GDS）流程。这个流程图展示了整个前端设计流程的大致步骤。

<div style="text-align:center;">
  <img src="asic_flow1.png" alt="ASIC Flow" width="500" />
</div>

## 后端设计

从前端工程师那里收到的 RTL 代码与后端设计技术无关，现在下一步是 **逻辑综合** [Logic Synthesis]。

### 逻辑综合

在逻辑综合中，设计的高级描述（RTL 代码）被转换为给定标准单元库和某些设计约束的优化门级表示。现在，代码采用特定标准单元库的门级网表的形式。在此阶段必须进行 **LEC** [Logic Equivalence Check : **逻辑一致性检查**]，以确保在综合过程中不会发生逻辑变化。在逻辑综合期间，我们还会得到有关时序功率和设计面积的各种报告。在此阶段，我们还将获得一个 SDC [Synopsys设计约束] 文件，该文件将在下一阶段使用。**DFT** [Design For Testability : **可测试性设计**] 插入测试逻辑也在此阶段完成，以在制造完成后验证芯片。

### 布局与布线

DFT 插入后的门级网表和 SDC 文件作为 **PnR** [Place and Route : **布局与布线**] 的输入，并基于标准单元库，开始 PnR。PnR 阶段的目标是以最小的面积和最小的延迟放置所有标准单元、宏单元和 I/O 焊盘，并以没有 **DRC** [Design Rule Check : **设计规则检查**] 错误的方式将它们布线在一起。该阶段的最终输出是GDSII文件形式的设计版图，这是业界版图文件的事实标准。

PnR阶段是一个非常具有挑战性的阶段，设计周期时间长，具体取决于芯片的复杂性。这个阶段进一步分为各个子阶段。主要阶段从 **设计导入** [Design Import]开始，然后是 **布图规划** [FloorPlan]、**电源规划** [Power Plan]、**布局** [Placement]、**CTS** [Clock Tree Synthesis : **时钟树综合**] 和 **布线** [Routing]。

在布线之后，我们预计设计已经满足了时序和所有DRC，但是在现代芯片中，在这个阶段关闭设计并不容易。因此，我们进一步进入 **签核** [signoff] 阶段。

### 签核

如果后端布局设计中存在一些时序违例，我们会进行进一步的 **ECO** [Engineering Change Order : 工程变更] 阶段，以解决这些时序违例。除了时序违例，还可能存在诸如 **电压下降** [IR Drop]、**DRC** [Design Rule Check : **设计规则检查**] 违例等问题，所有这些问题都会在此阶段得到解决，并以GDSII格式输出最终的不含任何违例的版图文件。这个过程在ASIC流程中被称为 **流片** [tapeout]。这是最终的设计阶段，而GDSII文件则被发送到制造实验室用于芯片的制造。

## 谢谢

原文链接：https://teamvlsi.com/2020/05/asic-design-flow-overview-v1.html
