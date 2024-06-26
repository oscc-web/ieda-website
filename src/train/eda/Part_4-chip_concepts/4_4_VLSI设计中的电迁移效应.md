---
title: "4.4 电迁移效应"
order: 4
---

电迁移是集成电路设计中一个十分关键的问题，特别是在技术节点较低的情况下，由于金属互连的横截面积变得非常小，电迁移效应（electro-migration effect）变得愈发显著。简单来说，电迁移效应指的是在金属导线中，当电子受到大电流作用时，会导致电子迁移的现象。

### 电迁移机制：

当高电流密度通过金属互连时，电流载体电子的动量可能通过碰撞转移给金属离子，使得离子沿着电子流的方向移动，这一现象被称为电迁移效应。电流密度 J 被定义为单位横截面积上的电流，即

<center><b><big> J = I/A </big></b></center>
其中:

&emsp;I为电流，A为互连横截面积。

随着技术节点的缩小，金属互连的横截面积减小，电流密度在较低技术节点中显著增加。自 90 纳米技术节点以来，电迁移一直是一个挑战，尤其是在更低节点如 28 纳米及以下。

### 电迁移现象：

<div style="text-align:center;">
  <img src="/res/images/train_eda_4/image-21_copy.png" alt="ASIC Flow" width="500" />
  <h5>图1 电迁移现象</h5>
</div>

图1 展示了电迁移效应的现象：在金属互连之间施加电位差，形成从阳极到阴极的电场，导致电子朝着电场的反方向移动，从而产生电流。这些移动的电子具有动量，在与金属离子碰撞时，将使离子产生漂移现象。如果电流密度很高，电子风的力会超过电场力。

电迁移问题可能立即影响互连，也可能在运行几个月甚至几年后才显现，这取决于电流密度。因此，ASIC（Application-Specific Integrated Circuit，特定应用集成电路）的可靠性将受到电迁移效应的影响。

失效平均时间（MTTF）是评估集成电路寿命的一个关键指标，使用 Black 方程计算 MTTF，如下所示：
<div style="text-align:center;">
  <img src="/res/images/train_eda_4/image-22_copy.png" alt="ASIC Flow" width="200" />
</div>

其中：
&emsp;A = 横截面积
&emsp;J = 电流密度
&emsp;N = 缩放因子（通常设置为2）
&emsp;Ea = 激活能
&emsp;K = 玻尔兹曼常数
&emsp;T = 开尔文温度

### 电迁移的影响：
一旦金属离子开始从原始位置移动，它们将在互连中造成问题。这可能导致离子在某个位置过多积累或者离子不足。因此，互连中可能出现膨胀或虚空。

另外，当电子流过金属线时，将同金属线的原子发生碰撞，碰撞导致金属的电阻增大，并且会发热。在一定时间内如果有大量的电子同金属原子发生碰撞，金属原子就会沿着电子的方向进行流动。这将会导致两个问题：第一，移动后的原子将在金属上留下一个空位，如果大量的原子被移动，则连线断开；第二，被移动的原子必须停在某一个地方，在电流方向的末端形成大量堆积。以铜导线为例，电流的趋肤效应导致电子都是在铜导线表面移动。当发生碰撞后，表面的原子不断被撞击的向导线末端移动。原子离开的地方铜线不断变细甚至断开，原子堆积的地方铜线不断变粗甚至有可能和周围铜线接触导致短路。

<div style="text-align:center;">
  <img src="/res/images/train_eda_4/image-23.png" alt="ASIC Flow" width="500" />
  <h5>图2 互连中的膨胀和虚空形成</h5>
</div>

图2显示了膨胀和虚空的形成。

**虚空**：如果流入的离子通量小于流出的离子通量，则会在互连中创建一个虚空。虚空可能导致互连中的不连续，导致开路。

**膨胀**：如果流入的离子通量大于流出的离子通量，则会导致离子积聚并在互连中创建膨胀。膨胀可能增加金属互连的宽度并触及相邻的金属互连，可能导致短路。

### 电迁移的预防技术：
随着技术节点的缩小，使用的互连也在改变。最初，纯铝被用作互连，然后行业开始使用Al-Cu合金，后来转向铜互连。与铝互连相比，铜互连可以承受大约5倍的电流，同时保持类似的可靠性要求。

**影响材料EM能力的因素有：导线长度、导线半径、电流密度、温度、通流时间。**

- 导线长度越长，原子数量越多 

- 导线半径越小，电子分布区域越小，电子越集中 

- 电流密度越大，电子数量越多 

- 温度越高，电子能量越大，原子越活跃 

- 通流时间越长，碰撞发生的次数越多

**在物理设计过程中，以下技术可用于预防电迁移问题。**

- 增加金属宽度以降低电流密度
- 降低频率
- 降低供电电压
- 保持导线长度短
- 减少时钟线中的缓冲区大小

为了预防电迁移问题，物理签收阶段将执行电迁移检查，以符合晶圆厂提供的电迁移规则。

## 谢谢

[1] https://blog.csdn.net/m0_61623740/article/details/120162795
[2] https://teamvlsi.com/2020/08/electromigration-effect-in-vlsi.html