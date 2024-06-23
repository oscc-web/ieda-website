---
title: "2.6 PnR和签核阶段所需的输入文件"
order: 6
---

在 PnR [Place and Route] 和 签核 [Signoff] 的各个阶段，我们将讨论所需的输入文件。我们可以将输入文件分为两类，一类是必需的，另一类是可选的。

## 1. PnR 阶段:

### 1.1 预布局阶段

必选输入：

- 门级网表（Gate level netlist）
- 逻辑库（Logical Library）
- 物理库（Physical Library）
- SDC 文件（SDC file）

可选输入：

- 区块分割定义（Block partition def）
- 引脚定义（Pin def）
- 电源规划脚本（Power plan script）
- 井接触布局规则（Welltap placement rule）
- 宏单元布局指南（Macro placement guidelines）
- MMMC 设置文件（MMMC Setup file）
- 端点单元（EndCap）、去耦电容单元（Decap cell）列表
- 备用单元模块定义和规则

这些输入文件用于预布局阶段，用于指导布局工具在设计中放置各个元素，并确保满足特定约束和规则。这些文件的准备和正确使用对于获得良好的布局和时序性能非常重要。

注意：

1. 逻辑库、物理库和SDC文件在每个阶段都是必需的。
2. 网表在每个阶段都会被修改，并且更新后的网表将在下一个阶段使用。

### 1.2 布局

必选输入：

- 预布局数据库（Preplace database）

可选输入：

- 布局限制脚本（Placement blockage script）
- 路径组脚本（Path groups script）
- 布局设置脚本（Placement setting script）
- 时序和拥塞优化脚本（Timing and Congestion Optimization scripts）
- 时钟树约束（在早期时钟流中）（Clock tree constraints）

### 1.3 时钟树综合

必选输入：

- 布局数据库（Placement database）
- 时钟树约束（Clock tree constraints）

### 1.4 布线

- 时钟树综合数据库（CTS database）

### 1.5 芯片完成

- 布线数据库（Route database）
- 填充单元列表（Filler cell list）

## 2. 金属填充

- 芯片完成阶段的OASIS/GDS文件

## 3. RC提取

- ICT文件/Quantus Techfile（qrcTechFile）
- MMMC设置文件
- LEF文件
- DEF文件
- 合并的OASIS/GDS文件

这些输入文件用于PnR和签核的各个阶段，涵盖了从布局到金属填充和RC提取的不同步骤。这些文件和脚本的准备和使用对于确保设计达到预期的性能和布局质量至关重要。

## 4. IR分析

### 4.1 技术/库文件

- LEF文件（.lef）
- LIB文件（.lib）
- 技术文件（.tech）
- 标准单元的GDS文件（.gds）
- GDS图层映射文件
- 设备模型文件*
- 标准单元的SPICE网表*

### 4.2 设计文件

- DEF文件
- 网表文件
- SPEF文件
- STA文件*（时序窗口、斜率、实例频率、时钟域信息）
- VCD文件*
- PLOC文件*

&emsp; ***文件仅用于动态分析**

### 4.3 IR分析类型：

1. 静态IR分析
2. 动态IR分析
3. 电磁分析

## 5. 静态时序分析

必选输入：

- 设计网表
- SDC文件
- LIB文件
- SPEF文件
- MMMC视图定义文件 

可选输入：
- 基于实例的IR降压文件
- SI库文件
- 基准/增量延迟注释文件

## 6. 物理验证

### 6.1 设计规则检查 [DRC]

- 合并的GDS文件
- DRC规则文件

### 6.2 极化效应

- 合并的GDS文件
- DRC规则文件

### 6.3 布局与原理图检查 [LVS]

- PD网表
- 合并的GDS文件

### 6.4 逻辑等效性检查 [LEC]

- Golden网表
- PD网表
- LEC约束文件（如果有）

## 谢谢

原文链接：https://teamvlsi.com/2021/11/input-files-required-for-pnr-and.html