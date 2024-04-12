# VLSI中的集成时钟门控

August 21, 2021 by [Team VLSI](https://teamvlsi.com/author/team-vlsi)

低功耗ASIC设计是当下的需求，尤其是对于手持电子设备。在所有手持产品中，用户要求更长的电池寿命。只有在我们嵌入到设备中的 SoC [ System on Chip : 片上系统] 消耗更少功率时，才能实现这一点。有各种低功耗设计技术正在被应用于降低 特定应用集成电路 [application-specific integrated circuits : ASIC] 的功耗。时钟门控技术是一种广泛应用于低功耗设计的技术之一。集成时钟门控 [Integrated Clock Gating : ICG] 电路是一种专门设计的电路，用于时钟门控技术。本文将介绍ICG电路的架构、功能和布局。

## 为什么使用ICG电路？

当我们在ICG电路上施加低电平时钟使能信号时，ICG电路会基本上停止通过它的时钟传播。这种现象被称为时钟门控。当我们不需要操作一个大组逻辑单元时，我们使用ICG电路来阻止时钟信号传播到该组。这是通过在模块内部生成并应用于ICG电路的EN引脚的时钟使能信号来实现的。我们知道一个SoC的总功耗是动态功耗和静态功耗的总和。时钟树对动态功耗有很大的贡献，因为时钟信号具有最大的切换活动。ICG电路允许在其之后停止时钟信号传播，并有助于降低设计中的动态功耗消耗。

## ICG电路的架构：

有多种实现时钟门控技术的方式，也有许多ICG电路的架构。这里最常见的架构是基于锁存器和AND门的ICG电路。

<div style="text-align:center;">
  <img src="ICG_cell1-300x145.png" alt="ASIC Flow" width="500" />
  <h4>图1 基于锁存器和AND门的ICG电路</h4>
</div>

防止毛刺是ICG电路的一个特点。基于锁存器和AND门的ICG电路在这方面表现良好，因此这种时钟门控电路的架构被广泛使用。虽然有多种ICG电路的架构，但本文仅限于讨论该架构。

## ICG电路的功能：

<div style="text-align:center;">
  <img src="ICG_wave-300x127.png" alt="ASIC Flow" width="500" />
  <h4>图2 ICG单元的波形</h4>
</div>

如上图所示，它提供了无毛刺的时钟门控输出。只有在使能信号高电平时才传递时钟信号，并在使能信号低电平时停止时钟传播。

## 为什么不仅使用AND门作为时钟门控？

AND门作为时钟门控存在问题，它无法提供无毛刺的输出，而无毛刺的时钟波是非常理想的。

<div style="text-align:center;">
  <img src="and_gating-300x154.png" alt="ASIC Flow" width="500" />
  <h4>图3 AND门作为时钟门控</h4>
</div>

如果在时钟信号低电平时时钟使能信号发生变化，对门控时钟没有影响。但如果在时钟信号高电平时时钟使能信号发生变化，门控时钟将出现毛刺。为了抑制这种毛刺，更倾向于使用基于锁存器和AND门的ICG电路。

ICG电路的布局将在下一篇文章中讨论。


## 谢谢

原文链接：https://teamvlsi.com/2021/08/integrated-clock-gating-icg-cell-in-vlsi.html