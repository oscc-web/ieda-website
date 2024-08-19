---
title: "iSTA-静态时序分析"
order: 9
---


# iSTA用户指南

> ## iSTA简介

### 软件结构图

<div align="center">

<img src="/res/images/tools/tool/resources/iSTA.png" width="80%" height="35%" alt="iSTA-logo" />

  **iSTA--一款用于集成电路设计的开源智能静态时序分析工具**

</div>

### 支持功能

- 完善地支持标准输入文件（Def/Verilog，sdc，spef/sdf, liberty）读取；
- 延时计算除了支持NLDM/Elmore计算模型，还支持CCS电流模型，Arnoldi降阶模型；
- 时序分析支持Clock Gate分析，Removal/Recovery分析和Muliticycle分析；
- 时序路径分析模式支持OCV模式和AOCV模式；
- 噪声分析初步支持了Crosstalk的影响，未来将进一步完善；
- 提供时序分析引擎timing engine供物理设计调用。

---

> ## iSTA使用示例

### 编写tcl文件(run_ista.tcl)

示例tcl文件位于: /src/operation/iSTA/source/data/example1/run_ista.tcl

#### 设置时序报告输出路径

```bash
set work_dir "../src/operation/iSTA/source/data/example1"
set_design_workspace $work_dir/rpt
```

#### 读取verilog文件

```bash
read_netlist $work_dir/example1.v
```

#### 读取.lib文件

```bash
set LIB_FILES $work_dir/example1_slow.lib
read_liberty $LIB_FILES
```

#### 链接设计到网表

```bash
link_design top
```

#### 读取sdc文件

```bash
read_sdc  $work_dir/example1.sdc
```

#### 读取spef文件

```bash
read_spef $work_dir/example1.spef
```

#### 获取时序报告

```bash
report_timing
```

时序报告位于第一步设置的时序报告输出路径下，包括

- top.rpt（报告 WNS,TNS 和时序路径）

如图所示，报告最开始显示的路径是WNS（Worst Negative Slack）路径，默认max(Setup)/min(Hold)分别显示三条。
接下来是TNS报告，每个时钟报告一个TNS，分为max/min。

<div align="center">

<img src="/res/images/tools/tool/ista/rpt.png" width="80%" height="35%" alt="iSTA-rpt" />

  **iSTA时序报告WNS、TNS部分**

</div>

后面开始是每个路径的详细报告。时序路径的报告部分，主要包含Arrival Time和Require Time，以及报告的slack三部分。
Arrival Time和Require Time的分为Point、Fanout、Capacitance、Resistance、Transition、
Delta Delay、Incr、Path列，如图所示：

<div align="center">

<img src="/res/images/tools/tool/ista/rpt_path.png" width="80%" height="35%" alt="iSTA-rpt" />

  **iSTA时序报告详细路径Arrival Time和Require Time部分**

</div>

路径Slack部分在路径的最后面，如图所示：

<div align="center">

<img src="/res/images/tools/tool/ista/rpt_slack.png" width="80%" height="35%" alt="iSTA-rpt" />

  **iSTA时序报告详细路径Slack部分**

</div>

- top.cap（报告违例电容）

电容报告包含Net/Pin列、MaxCapacitance、Capacitance、CapacitanceSlack、LibCellPort列，详细如下

<div align="center">

<img src="/res/images/tools/tool/ista/cap.png" width="80%" height="35%" alt="iSTA-rpt" />

  **iSTA时序报告cap报告**

</div>

- top.fanout（报告违例扇出）

Fanout报告和电容报告类似，包含Net/Pin列、MaxFanout、Fanout、FanoutSlack、LibCellPort列，详细如下

<div align="center">

<img src="/res/images/tools/tool/ista/fanout.png" width="80%" height="35%" alt="iSTA-rpt" />

  **iSTA时序报告fanout报告**

</div>

- top.trans（报告违例转换时间）

Fanout报告同样类似，包含Net/Pin列、MaxSlewTime、SlewTime、SlewSlack、LibCellPort列，详细如下

<div align="center">

<img src="/res/images/tools/tool/ista/trans.png" width="80%" height="35%" alt="iSTA-rpt" />

  **iSTA时序报告transition报告**

</div>

- top_setup.skew（报告hold模式下的时钟偏斜)

skew报告类似于时钟路径报告，skew是时钟到达两个时钟Pin的差值，两个时钟Pin分别为发射时钟
和接收时钟的Pin，两两构成一个时序路径。skew报告分为三部分发射时钟Pin的latency，
接收时钟Pin的latency，skew报告。

<div align="center">

<img src="/res/images/tools/tool/ista/skew.png" width="80%" height="35%" alt="iSTA-rpt" />

  **iSTA时序报告skew报告**

</div>

- top_hold.skew（报告setup模式下的时钟偏斜）
和setup报告类似，只是是hold时序路径的clock skew。

### 编译iSTA（iSTA位于:bin/）

### 使用iSTA运行tcl文件

```bash
 cd bin/
 ./iSTA run_ista.tcl
```
