---
title: "4.8 OCV、AOCV和POCV对比"
order: 8
--- 

在本文中，对OCV（芯片上的变异）、AOCV（高级芯片上的变异）和POCV（参数化芯片上的变异）进行了比较研究。文章还讨论了为什么以及如何新的变异模型相对于之前的模型有所改进，并在时间悲观方面表现更好。

## 介绍：

我们已经在之前的文章中讨论过芯片上的变异（OCV）。建议阅读那篇文章以更好地理解OCV及其来源。简而言之，有两种类型的工艺变异：

1. 系统性变异（或全局变异）
2. 随机变异（或本地变异）

系统性变异具有可预测性质，并且随着技术节点的成熟可以进行建模和调整。但是随机变异具有高度不可预测性质，难以对其进行建模。系统性变异在PVT中得到处理，对于随机变异，我们对单元延迟应用一个降低因子。这种工艺变异可能会改变晶体管的电流参数，最终影响单元的延迟。如果单元的延迟受到影响，可能导致制造后的时序故障，导致芯片的后硅失败。

为了避免这种失败，并使设计免受此类工艺变异的影响，我们必须牢记未来的工艺变异，并在进行静态时序分析（STA）时考虑预期的延迟变异。

## 芯片上的变异（OCV）：

在OCV中，将一个固定的时间降低因子应用于设计中所有单元的延迟，以便在制造过程中工艺变异影响了任何单元的延迟时，不会影响时序要求，芯片在制造后也不会失败。

制造过程的变异可能会增加或减少单元的延迟。因此，在设置降低因子时，我们需要设置早期值和晚期值。STA工具将根据路径和分析类型考虑早期或晚期的时序降低。以下是设置OCV定时降低因子的示例。
```
% set_timing_derate -cell_delay-rise -data -early 0.92

% set_timing_derate -cell_delay-rise -data -late 1.10

% set_timing_derate -cell_delay-rise -clock -early 0.95

% set_timing_derate -cell_delay-rise -clock -late 1.06

% set_timing_derate -cell_delay-fall -data -early 0.90

% set_timing_derate -cell_delay-fall -data -late 1.12

% set_timing_derate -cell_delay-fall -clock -early 0.94

% set_timing_derate -cell_delay-fall -clock -late 1.07
```

在上面的示例中，第1行设置了8%的早期定时降低因子，第2行设置了10%的晚期定时降低因子，适用于数据路径上升沿。类似地，第4行和第5行将上升沿时的5%早期和6%晚期定时降低因子设置为时钟路径。

<div style="text-align:center;">
  <img src="/res/images/train_eda_4/setup_timing_ocv.png" alt="ASIC Flow" width="500" />
  <h5>图1 设置分析的降低因子</h5>
</div>

<div style="text-align:center;">
  <img src="/res/images/train_eda_4/hold_timing_ocv.png" alt="ASIC Flow" width="500" />
  <h5>图2 保持分析的降低因子</h5>
</div>

图1和2显示STA工具在不同路径的设置和保持分析中考虑的降低因子。在reg2reg路径时序分析中，有一个发射锁存器从中发出数据和一个捕获锁存器捕获数据。从时钟源到发射锁存器的时钟引脚之间的路径称为发射时钟路径，从时钟源到捕获锁存器的时钟引脚之间的路径称为捕获时钟路径。在设置分析中，最坏情况可能是晚期数据路径、晚期发射时钟路径和早期捕获时钟路径，可能导致设置时间失败。因此，STA工具将考虑数据路径和发射时钟路径的晚期定时降低因子以及捕获时钟路径的早期降低因子。

对于保持分析，快速数据路径、早期发射时钟和晚期捕获时钟可能是最糟糕的情况。因此，STA工具始终考虑最坏情况，并对数据路径和发射时钟路径采用早期定时降低因子，对捕获时钟路径采用晚期降低因子。

### OCV中的问题：
在OCV中，对所有单元使用的固定时间降低因子过于悲观。实际上，会出现随机变异效应的抵消。某个特定路径中的所有单元可能不能全部延迟或全部提前。总体上，总是存在混合类型效应，这会导致总体效果的抵消。

例如，考虑一个包含6个缓冲区的数据路径，每个单元的典型延迟为20ps。考虑20%的晚期和早期降低因子。因此，假设所有单元的延迟都晚于预期，这条路径的最大延迟将为144ps。但实际上，很少会出现所有单元只晚或只早的情况。很可能一些会晚一些，一些会早一些，因此将会产生效果的抵消，实际延迟始终小于144ps。图3显示了OCV降低因子的延迟变化。

<div style="text-align:center;">
  <img src="/res/images/train_eda_4/ocv_derate.png" alt="ASIC Flow" width="500" />
  <h5>图3 延迟随 OCV 降级变化</h5>
</div>

OCV固定降低因子的概念是在90nm以上的技术节点中建模的。对于这样较高的技术节点来说，这是很好的。但在较低的技术节点，特别是高频设计中，由于固定降低因子的悲观性较高，时序更加困难。因此，对于较低的技术节点，我们需要解决这个问题。因此，进阶芯片上的变异（AOCV）的概念产生了，它不使用固定降低因子。

## 进阶芯片上的变异（AOCV）：
在AOCV中，根据单元在时序路径中的路径深度和距离，对每个单元应用降低因子，并且还会根据单元类型和单元的驱动强度而变化。距离由网和单元的边界框定义，如图4所示。

<div style="text-align:center;">
  <img src="/res/images/train_eda_4/distance.png" alt="ASIC Flow" width="500" />
  <h5>图4 单元和网络距离的边界框</h5>
</div>

**距离**: 如果距离增加，则系统性变异会增加，为了缓解这种变异，我们需要使用更高的降低值。所以随着距离增加，降低值也会增加。

**路径深度**: 如果距离固定且路径深度增加，则系统性变异将保持不变，但随机变异将趋向于互相抵消。因此，随着路径深度的增加，降低因子将减少。图5说明了时序路径中的路径深度。

<div style="text-align:center;">
  <img src="/res/images/train_eda_4/pathDepth.png" alt="ASIC Flow" width="500" />
  <h5>图5 时序路径中的路径深度</h5>
</div>

**单元类型**：降低因子基于单元类型，例如AND门和OR门不能展现相同的变异。降低值还随单元的驱动强度变化，例如AND2X2和AND2X6将具有不同的驱动降低值。

### AOCV分析模式：

AOCV支持两种分析模式：

1. 仅时钟
2. 时钟和数据 

在仅时钟模式中，AOCV降低因子仅应用于时钟路径，因此减少了工作量并提高了运行时效率。而在时钟和数据模式中，AOCV降低因子应用于整个设计。观察到AOCV中减少了时序悲观主义，当我们转换到仅时钟AOCV降低模式时，已经修复了大量时间违例，并且在转换到时钟和数据AOCV模式时，违例进一步减少。

AOCV分析支持多个AOCV降低表。通常使用两种类型的表，即1D表或2D表。1D表包含随距离或深度变化的降低值，而AOCV 2D降低表包含随距离和深度一起变化的降低值。图6展示了一个AOCV 2D降低表的示例。

<div style="text-align:center;">
  <img src="/res/images/train_eda_4/aocv2Dtable.png" alt="ASIC Flow" width="500" />
  <h5>图6 AOCV 2D降级表示例</h5>
</div>

### PrimeTime AOCV流程：
与OCV固定降低流程相比，AOCV降低分析中添加了一些额外步骤。PrimeTime工具的AOCV降低分析流程如图7所示。

<div style="text-align:center;">
  <img src="/res/images/train_eda_4/ptAOCVFlow.png" alt="ASIC Flow" width="500" />
  <h5>图7 PrimeTime AOCV降级流程</h5>
</div>

**AOCV中的问题：**

AOCV在40nm技术节点以下表现不佳，为了改善这一点，我们需要进一步改善时序悲观主义。AOCV中使用的基于距离和深度的降低因子适用于40nm以上的技术节点，但对于低于该节点的节点，我们需要进一步改进。为了解决这些问题，发展出了参数化芯片上的变异（POCV）。POCV在20nm及以下技术节点中非常有效。

POCV比OCV和AOCV更为现实。该方法不使用基于距离和深度的降低因子，而是使用延迟标准差来建模单元的延迟变异。POCV相对于AOCV的优势还在于它减少了图形分析（GBA）和路径分析（PBA）之间的松弛悲观主义。

## 参数化芯片上的变异（POCV）：
POCV先进的变异技术在不需要昂贵的统计库特性化的情况下提供统计优势。在POCV中，不是将特定的降低因子应用于单元，而是基于单元的延迟变异（σ）计算单元延迟。在POCV中，假定单元的正常延迟值遵循正态分布曲线。图8展示了正态分布曲线以及数据与均值之间的标准差示例。

<div style="text-align:center;">
  <img src="/res/images/train_eda_4/normalDistributioncurve.png" alt="ASIC Flow" width="500" />
  <h5>图8 数据偏离均值的标准差</h5>
</div>

正态分布中，68%的数据落在1σ范围内，95%的数据落在2σ范围内，99.7%的数据落在3σ范围内。

### POCV分析：

- POCV使用名义延迟值（µ）来代替延迟的最小或最大值来建模随机变异。
- 时序分析是以名义延迟值（µ）和延迟变异（σ）进行的。
    - 工具从时序库或包含POCV系数值C的外部文件中获取σ的值。
    - 然后每个弧时间按统计学方式计算为名义延迟和变异的总和。
    - 然后工具通过统计组合这些弧延迟来计算路径的延迟，并执行设置和保持时序分析。
- 默认情况下，工具以均值的3σ进行POCV分析，但也可以指定其他值。标准偏差值越大，时序悲观主义越强。

### POCV输入数据：
延迟变异σ的输入可以通过以下方式之一提供给工具。

**1. 使用单个POCV系数（C）：**

一个包含每个库单元、层次单元或设计的延迟系数值C的外部文件。每个单元的每个时序弧仅有一个C值，不管输入过渡或输出负载如何。按以下方式基于C计算延迟变异σ。

<center>延迟变异（σ）= C * 名义延迟（µ）</center>

POCV系数文件示例:
```version: 4.0
ocvm_type: pocvm
object_type: lib_cell
rf_type: rise fall
delay_type: cell
derate_type: early
object_spec: */INV*
coefficient: 0.0693
```

**2. 使用库变异格式（LVF）:**

 POCV变异的信息直接以LVF格式提供到库中。在LVF格式中，有两个索引，一个用于输入过渡，另一个用于输出负载。POCV LVF格式的示例如下所示。

```ocv_sigma_cell_rise (“pocv_template_4x4”) {

    sigma_type : “late”;

    index_1(“0.01, 0.04, 0.12, 0.80”);

    index_2(“0.01, 0.02, 0.03, 0.10”);

    values( “σ11, σ12, σ13, σ14”,

            “σ21, σ22, σ23, σ24”,

            “σ31, σ32, σ33, σ34”,

            “σ41, σ42, σ43, σ44”, );

}
```

通常，index-1表示输入过渡，index-2表示输出负载。如果设计中同时存在这两种数据类型，则默认情况下，单个POCV系数文件的优先级高于POCV slew-load表或LVF格式文件。

### POCV延迟计算：

<center><b>单元延迟 = 名义延迟（µ） ± （C * 名义延迟） * N</b></center>

其中
&emsp; C = POCV系数
&emsp; N = 标准偏差的数量

或者

<center><b>单元延迟 = 名义延迟（µ） ± 变异</b></center>

### PrimeTime POCV分析流程：

PrimeTime工具用于POCV降低分析的流程如图9所示。

<div style="text-align:center;">
  <img src="/res/images/train_eda_4/pocvPTflow.png" alt="ASIC Flow" width="400" />
  <h5>图9 PrimeTime POCV分析流程</h5>
</div>

## POCV和AOCV的比较：

以下是POCV和AOCV之间的基本比较: 

<div style="text-align:center;">
  <img src="/res/images/train_eda_4/image-35.png" alt="ASIC Flow" width="700" />
</div>


## 谢谢

[1] https://teamvlsi.com/2020/07/ocv-aocv-and-pocv-in-vlsi-comparative.html