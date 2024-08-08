---
title: "2.5 物理设计中的CCO文件"
order: 5
---

时钟树综合是构建和优化时钟树的过程，其方式是使时钟均匀分布，并且每个顺序元素的时钟都在目标全局偏差限制内。要构建时钟树，我们必须向 APR 工具提供某些约束作为输入，这些约束通常称为时钟约束，对于 Innovus 工具，此约束文件通常称为 ccopt 文件。

在本文中，我们将了解一些重要的时钟树约束，这些约束在每个设计中都很常用，以及它们的实际含义以及提供这些约束的原因。如今，如果您要参加物理设计的面试，且经验在0-5年之间，那么您将不可避免地面临与时钟树约束相关的问题。

时钟树约束：
- 时钟树单元列表
- 首选时钟树布线层和非默认规则（NDR）
- 目标偏移
- 目标最大过渡
- 目标最大电容
- 最大扇出
- 单元密度
- 单元边界留白

## 时钟树单元列表 

我们在时钟树构建中使用时钟反相器和时钟缓冲器。有时我们只使用时钟反相器而不使用时钟缓冲器。我们还在时钟树中使用时钟门控单元。因此，我们必须提供希望在时钟树中使用的单元列表。

`set_ccopt_property inverter_cells {}`

`set_ccopt_property buffer_cells {}`

`set_ccopt_property clock_gating_cells {}`

`set_ccopt_property logic_cells {}`

## 首选时钟树布线层和非默认规则（NDR） 

我们需要为时钟树网络提供顶部和底部首选的布线层。通常我们在这里定义主干网和叶网。将时钟连接到时序元件的时钟引脚的网络称为叶网，将时钟传递到叶网的网络称为主干网。

`set_ccopt_property -name trunckRoute -top_preferred_layer <> -bottom_preferred_layer <> -preferred_routing_layer_effort high -non_default_rule 2w2s`

`set_ccopt_property -name leafRoute -top_preferred_layer <> -bottom_preferred_layer <> -preferred_routing_layer_effort high -non_default_rule 1w2s`

## 目标偏移 

偏移平衡是时钟树优化中的挑战之一。我们将目标偏移提供为时钟树约束。PnR工具将尝试在给定的偏移限制内平衡偏移。

`set_ccopt_property -target_skew <>`

## 目标最大过渡 

我们为时钟树网络提供了时钟网的最大过渡限制。工具将尝试满足最大过渡限制。

`set_ccopt_property -target_max_trans <>`

## 目标最大电容 

我们为时钟树网络提供了时钟网的最大电容限制。工具将尝试分配负载电容并尝试满足最大电容限制。

`set_ccopt_property -target_max_capacitance <>`

## 最大扇出 

我们通过这个约束限制时钟树中任何实例的最大扇出。工具将尝试根据此限制构建时钟树。

`set_ccopt_property -max_fanout <>`

## 单元密度 

对时钟树实例设置最大单元密度限制是必需的。

`set_ccopt_property -cell_density <>`

## 单元边界留白 [Halo]

我们需要在时钟树实例周围提供一个Halo以避免更密集的放置可能导致IR / 串扰问题。因此，我们在单元周围提供x和y方向上的单元边界留白约束。

`set_ccopt_property -cell_halo_x <>`

`set_ccopt_property -cell_halo_y <>`

这些是在构建时钟树之前提供的主要约束。还有一些其他约束，但上述章节已经解释了主要约束。下图总结了时钟树约束。

** 谢谢**

原文链接：https://teamvlsi.com/2021/06/clock-tree-constraints-in-vlsi-ccopt-file-in-physical-design-cts-constraints.html