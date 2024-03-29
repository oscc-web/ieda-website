# 物理设计中的ECO流程
February 28, 2021 by [Team VLSI](https://teamvlsi.com/author/team-vlsi)

tapeout [流片] 是物理设计流程的最后阶段，对于参与项目的整个团队来说，这无疑是一次巨大的精神放松。将一个干净的布局文件以gds/oasis格式发送给代工厂进行加工，在通过代工厂设置的所有检查后，这个过程被称为tapeout。但在进行tapeout之前，可能会有许多不眠之夜，物理设计工程师/签核工程师花费时间关闭设计。我们需要进行许多签核分析，如物理签核、时序签核和IR签核，这些检查需要在接近完成的状态下才能将我们的布局发送给代工厂。所有这些最终的成果都是在ECO（工程变更指令）阶段完成的。在本文中，我们将讨论ECO周期的各个方面以及它的工作原理。

## ECO阶段:

ECO阶段是设计阶段，在这个阶段我们关闭PnR阶段尚未关闭的所有签核检查。通常在PnR阶段，我们可以做到时序、DRC和IR的签核，但最终的关闭是在ECO阶段完成的。在ECO阶段，我们关闭PnR实施活动，并且只通过ECO解决所有未完成的问题。但在进入ECO阶段之前，我们需要获得良好的时序和DRC数值，并且必须确信所有未完成的问题都可以在ECO阶段中解决。在ECO阶段，我们专注于关闭每个未完成的问题，生成ECO文件并逐步在PnR工具上实施它们。

## 什么是ECO周期以及它的工作原理?

在ECO周期中，我们逐一进行各种分析，用于关闭PnR阶段尚未关闭的检查。有专门的签核工具帮助我们分析问题，并提出我们需要进行的更改以关闭问题。建议的更改记录在一个ECO文件中。

一旦为修复生成了ECO文件，我们将其实施到已进行分析的PnR数据库上。在实施ECO文件之后，我们保存更新后的数据库，用于下一个ECO生成和实施。我们重复进行这个ECO周期，逐一关闭所有问题。可能需要多个ECO周期来关闭单个问题。

<div style="text-align:center;">
  <img src="ECO Cycle.png" alt="ASIC Flow" width="300" />
  <h5>ECO周期</h5>
</div>

因此，每个ECO周期基本上有以下步骤：

1. 对最新数据库上的问题进行分析
2. 为修复问题生成ECO文件
3. 在分析的数据库上实施ECO
4. 保存经过ECO实施后的数据库，以供下一个ECO周期使用

## 签核工具

签核工具是非常专门的工具，用于全面分析特定问题，并能够生成用于修复的ECO文件。根据问题的不同，我们有各种类型的签核工具，如时序签核工具、物理签核工具和IR签核工具。一些常用的签核工具如下：

**时序签核：**
1. PrimeTime或PT (Synopsys的产品)
2. Tempus (Cadence Design Systems的产品)
3. Tweaker (Dorado的产品，现在是Synopsys的一部分)

**物理验证签核工具：**
1. Calibre (Mentorgaphics的产品，现在是Siemens的一部分)
2. IC Verification或ICV (Synopsys的产品)

**IR签收工具：**
1. Redhawk (Ansys的产品)
2. Voltus (Cadence Design Systems的产品)

## ECO文件

ECO文件以PnR工具命令的形式包含了一系列修复所需的更改。根据分析的结果，有时我们从签收工具本身生成ECO文件，有时我们自己创建ECO文件。

例如，为了修复建立时间，我们需要将组合单元的大小增加或者将其转换为较低的电压温度单元。对于几百个违规路径，这些单元的转换可能达到数千个或更多。因此，签收工具将为需要更改的每个单元生成命令，并将它们写入一个称为ECO文件的文件中。然后我们在PnR工具中源化这些文件，随后进行优化布局和ECO布线。

## ECO实施

一旦我们以ECO文件的形式获得了任何问题的解决方案，我们需要加载用于生成ECO文件的数据库，并对ECO文件进行源化。ECO实施通常在工具的批处理模式下完成。在源化ECO文件之前，我们需要删除填充物。一旦ECO文件被源化，所有必要的更改都会被执行。现在可能会改变单元的大小或者添加/删除一些单元，因此我们需要进行精细布局，然后进行ECO布线。这两个步骤将处理任何单元的重叠和布线。更新后的数据库需要保存供下一个ECO阶段使用，或者在所有问题都得到解决时保存为最终数据库。

## 谢谢

原文链接：https://teamvlsi.com/2021/02/eco-flow-in-physical-design.html