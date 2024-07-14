---
title: "多边三角形剖分"
order: 1
---
# 多边形三角剖分 (Triangulation)

三角剖分有两种，一种是对多边形的三角剖分，一种是对平面点集的三角剖分。这里讨论的是对多边形的三角剖分。

## 美术馆问题 (Art Gallery Problem)

如何用最少的守卫看守美术馆, 并使得美术馆的每个角落都在守卫的视野之中？
一个等价的问题是：需要多少盏灯来完全照亮整个房间。

<div style="text-align:center;">
  <img src="/res/images/eda_algorithm/geometry/geometry_1.jpg" alt="ASIC Flow" width="200" />
  <h4>图1 美术馆问题</h4>
</div>

美术馆问题

### 朴素的上下界

将美术馆抽象成一个多边形，那么当这个多边形存在核时，显然只需要一个守卫就能完成。
考虑最坏情况，在多边形任意顶点上都放置一个守卫，也一定可以完成。
所以守卫的数量在 ![1](https://math.jianshu.com/math?formula=1) 到 ![n](https://math.jianshu.com/math?formula=n) 之间。

很遗憾，对于一般多边形，求解最少需要多少守卫能够完成任务的问题是 ![NP](https://math.jianshu.com/math?formula=NP) 的。

### Chvátal 美术馆定理 (Chvátal Art Gallery Theorem)

将美术馆抽象为多边形，守卫抽象为点。
对于任意边数为 ![n](https://math.jianshu.com/math?formula=n) 的多边形，最多只需要 ![\lfloor \frac{n }{3} \rfloor](https://math.jianshu.com/math?formula=%5Clfloor%20%5Cfrac%7Bn%20%7D%7B3%7D%20%5Crfloor) 个点就一定能完全覆盖了。而且存在多边形确实需要 ![\lfloor \frac{ n}{3} \rfloor](https://math.jianshu.com/math?formula=%5Clfloor%20%5Cfrac%7B%20n%7D%7B3%7D%20%5Crfloor) 个点才能覆盖。


<div style="text-align:center;">
  <img src="/res/images/eda_algorithm/geometry/geometry_2.jpg" alt="ASIC Flow" width="200" />
  <h4>图2 美术馆定理</h4>
</div>

最坏情况


如上图所示，每一个尖端都需要一个点进行覆盖。这种情况是最坏情况。



如何证明没有更坏的情况？

### Fisk 的简短证明

显然对于一个三角形只需要在其一个顶点上放置一个点就可以覆盖这个三角形。
引入若干条不相交的对角线(diagonal)对多边形进行三角剖分。对角线的定义为：连接多边形一对顶点的线段。
可以证明：任何一个顶点数量为 ![n](https://math.jianshu.com/math?formula=n) 的简单多边形都存在一个三角剖分，使其分解为 ![n-2](https://math.jianshu.com/math?formula=n-2) 个三角形。
证明可以使用数学归纳法的思想。任取多边形的一条对角线，将多边形切分为顶点数量分别为 ![m_1](https://math.jianshu.com/math?formula=m_1) ， ![m_2](https://math.jianshu.com/math?formula=m_2) 的多边形，有 ![m_1,m_2>2](https://math.jianshu.com/math?formula=m_1%2Cm_2%3E2) 且 ![m_1+m_2=n+2](https://math.jianshu.com/math?formula=m_1%2Bm_2%3Dn%2B2) ，又根据假设： ![n](https://math.jianshu.com/math?formula=n) 个顶点的简单多边形能分解为 ![n-2](https://math.jianshu.com/math?formula=n-2) 个三角形。所以包含的三角形数量为 ![(m_1-2)+(m_2-2)=n-2](https://math.jianshu.com/math?formula=(m_1-2)%2B(m_2-2)%3Dn-2)个。

将多边形三角剖分后，形成了一张图 ![G](https://math.jianshu.com/math?formula=G) ，点集为多边形的顶点，边集为多边形的边和对角线的并集。观察 ![G](https://math.jianshu.com/math?formula=G) 的对偶图，容易看出是一棵树。所以对于 ![G](https://math.jianshu.com/math?formula=G) 一定能够进行三染色。
对于相邻的两个三角形，不重合的两个点染色必定相同，而且每个三角形的三个顶点必须一一对应这三种颜色。所以从任意三角形开始反复迭代即可完成对整张图的三染色。

<div style="text-align:center;">
  <img src="/res/images/eda_algorithm/geometry/geometry_3.jpg" alt="ASIC Flow" width="200" />
  <h4>图3 美术馆定理</h4>
</div>

顶点的三染色

在这三种颜色中，任选一种颜色就可以完成覆盖。根据鸽巢原理，最多选择 ![\lfloor \frac{ n }{3} \rfloor](https://math.jianshu.com/math?formula=%5Clfloor%20%5Cfrac%7B%20n%20%7D%7B3%7D%20%5Crfloor) 个点就足够了。

以上是美术馆问题的一个近似解，指出对于任意 ![n](https://math.jianshu.com/math?formula=n) 个点的简单多边形，虽然求解最少使用多少点进行全覆盖是 ![NP](https://math.jianshu.com/math?formula=NP) 的，但是可以证明可以使用不超过 ![\lfloor \frac{ n }{3} \rfloor](https://math.jianshu.com/math?formula=%5Clfloor%20%5Cfrac%7B%20n%20%7D%7B3%7D%20%5Crfloor) 个点进行全覆盖。
在证明的过程中使用了三角剖分这一经典的几何算法，但是对于三角剖分的一些细节还没有考虑。比如：是否任意简单多边形都能进行三角剖分？如果简单多边形带洞，是否依然能三角剖分？

## 三角剖分

首先界定研究对象，这里的三角剖分指的是对简单的，可以带空洞的多边形的三角剖分。
简单多边形是边不相交的多边形，根据 ![Jordan](https://math.jianshu.com/math?formula=Jordan) 曲线定理，这样的多边形将平面分为一个外部区域和内部区域。

规定：对于不带洞的简单多边形，沿着边逆时针走一圈为正方向。对于带洞的简单多边形，沿着外边界逆时针走一圈为正方向，沿着内部的洞顺时针走一圈为正方向。
这样能够保证任何时刻沿着边界前进时，内部区域都在左手侧。

### 双耳定理 (Two Ears theorem)

耳：对于多边形中相邻的三个顶点 ![u,v,w](https://math.jianshu.com/math?formula=u%2Cv%2Cw) ，如果向量 ![\overrightarrow{uv} \times \overrightarrow{vw} >0](https://math.jianshu.com/math?formula=%5Coverrightarrow%7Buv%7D%20%5Ctimes%20%5Coverrightarrow%7Bvw%7D%20%3E0) 且 ![\triangle uvw](https://math.jianshu.com/math?formula=%5Ctriangle%20uvw) 不包含任意其他顶点，则 ![u,v,w](https://math.jianshu.com/math?formula=u%2Cv%2Cw)三点构成一个耳。直观的看就是三个点满足局部凸性而且内部是空的。
对于一个多边形，可以割去一个耳，会在不改变其他性质的情况下，使得多边形的顶点数减小。

双耳定理指出对于任意简单多边形，至少有两个耳。
证明使用了数学归纳法，这里略。实际上证明的思路和下面的三角剖分构造的思路是一样的。

### 三角剖分存在性的证明

使用数学归纳法。
对于一个多边形，有两种属性，顶点数 ![n](https://math.jianshu.com/math?formula=n) 和空洞数 ![h](https://math.jianshu.com/math?formula=h) 。

基础情况：![n=3,h=0](https://math.jianshu.com/math?formula=n%3D3%2Ch%3D0) 时，多边形本身就是三角形，显然存在三角剖分。
假设：对于一个顶点数为 ![n](https://math.jianshu.com/math?formula=n)， 空洞数为 ![h](https://math.jianshu.com/math?formula=h) 的多边形。任意满足： ![h'<h](https://math.jianshu.com/math?formula=h%27%3Ch) 或 ![h'=h,n'<n](https://math.jianshu.com/math?formula=h%27%3Dh%2Cn%27%3Cn)的多边形都存在三角剖分。
实际上这是一个全序关系，对于任意两个多边形，能够基于这个关系进行比较。

考虑多边形 ![P](https://math.jianshu.com/math?formula=P) 最下面的一个顶点 ![j](https://math.jianshu.com/math?formula=j) （如果有多个最下面的点，取最左边的一个点），有两种情况。

1. 如果 ![i,j,k](https://math.jianshu.com/math?formula=i%2Cj%2Ck) 是一个耳，那么直接切去，化为顶点数为 ![n-1](https://math.jianshu.com/math?formula=n-1)的多边形。

2. 如果 ![i,j,k](https://math.jianshu.com/math?formula=i%2Cj%2Ck) 不是耳，那么找到多边形其他点中距离 ![j](https://math.jianshu.com/math?formula=j) 最近的一个点 ![m](https://math.jianshu.com/math?formula=m) ，连接 ![jm](https://math.jianshu.com/math?formula=jm) 进行切开，又有两种情况：

<div style="text-align:center;">
  <img src="/res/images/eda_algorithm/geometry/geometry_6.jpg" alt="ASIC Flow" width="200" />
  <h4>图4 三角剖分</h4>
</div>

   构造性证明

   1. 如上图左所示， ![m](https://math.jianshu.com/math?formula=m) 在外边界上，那么多边形将化为两个规模更小的多边形。
   2. 如上图右所示， ![m](https://math.jianshu.com/math?formula=m) 在空洞上，新的多边形虽然顶点数量增加了，但是空洞的数量减少了。基于上面的全序关系，新多边形和原来相比规模更小。

根据归纳假设，规模更小的多边形存在三角剖分，那么多边形 ![P](https://math.jianshu.com/math?formula=P) 也存在三角剖分。证明结束。

### 一些其他性质

#### 唯一性：

不唯一，最简单的凸四边形就有两种三角剖分。

#### 三角剖分种数的最值：

最小值为 ![1](https://math.jianshu.com/math?formula=1) ，最简单的凹四边形只有一种剖分方式，以此可以构造出其他情况。
最大值在凸多边形的时候达到。
假设多边形顶点数为 ![n](https://math.jianshu.com/math?formula=n) ，那么递推式为：
![C_n=\left \{ \begin{aligned} 1 & , & n=3 \\ \Sigma_{i=1}^{n-3}{C_{i+2}*C_{n-i}} & , & n>3 \end{aligned} \right.](https://math.jianshu.com/math?formula=C_n%3D%5Cleft%20%5C%7B%20%5Cbegin%7Baligned%7D%201%20%26%20%2C%20%26%20n%3D3%20%5C%5C%20%5CSigma_%7Bi%3D1%7D%5E%7Bn-3%7D%7BC_%7Bi%2B2%7D*C_%7Bn-i%7D%7D%20%26%20%2C%20%26%20n%3E3%20%5Cend%7Baligned%7D%20%5Cright.)
即对应第 ![n-2](https://math.jianshu.com/math?formula=n-2) 项的 ![Catalan](https://math.jianshu.com/math?formula=Catalan) 数。

#### 时间复杂度

多边形的三角剖分可以在 ![O(nlogn)](https://math.jianshu.com/math?formula=O(nlogn)) 时间复杂度内完成，下面是三角剖分算法，分为两个步骤：单调多边形分解和单调多边形内三角剖分。

## 单调多边形分解 (Monotone Decomposition)

### 多边形单调性

如果一条链上每条线段对于一条直线 ![l](https://math.jianshu.com/math?formula=l) 的投影只在折点处相交，那么折线对直线 ![l](https://math.jianshu.com/math?formula=l) 具有单调性。

<div style="text-align:center;">
  <img src="/res/images/eda_algorithm/geometry/geometry_5.jpg" alt="ASIC Flow" width="200" />
  <h4>图5 多边形单调性</h4>
</div>

单调折线

如果一个多边形能被分成互补的两条链，而且这两条链都对直线 ![l](https://math.jianshu.com/math?formula=l) 单调，那么这个多边形对 ![l](https://math.jianshu.com/math?formula=l) 单调。

<div style="text-align:center;">
  <img src="/res/images/eda_algorithm/geometry/geometry_4.jpg" alt="ASIC Flow" width="200" />
  <h4>图6 单调折线</h4>
</div>

单调多边形

为了方便，在下面的算法中，单调多边形指的是对 ![y](https://math.jianshu.com/math?formula=y) 轴单调的多边形，正如上图所示，是一个对 ![y](https://math.jianshu.com/math?formula=y) 轴单调的多边形。

对于一个单调多边形，可以快速而简单地进行三角剖分。但是首先必须要把整个的简单多边形分解成若干个单调多边形。
算法如下。

### 顶点类型定义

对于多边形上的每一个点，可以分成 ![5](https://math.jianshu.com/math?formula=5) 类：开始点 (start vertex)，结束点(end vertex)，分裂点 (split vertex)，合并点 (merge vertex)和普通点 (regular vertex)。
假设当前点为![q](https://math.jianshu.com/math?formula=q)，其前驱为![p](https://math.jianshu.com/math?formula=p)，后继为![r](https://math.jianshu.com/math?formula=r)。并且为了方便，我们假设任意两个点之间的纵坐标不同，虽然对于纵坐标相同的情况，这个算法依然正确。

1. 开始点：当且仅当 ![p](https://math.jianshu.com/math?formula=p) 和 ![r](https://math.jianshu.com/math?formula=r) 都在 ![q](https://math.jianshu.com/math?formula=q) 下方，并且内角 ![\angle pqr < \pi](https://math.jianshu.com/math?formula=%5Cangle%20pqr%20%3C%20%5Cpi)。
2. 结束点：当且仅当 ![p](https://math.jianshu.com/math?formula=p) 和 ![r](https://math.jianshu.com/math?formula=r) 都在 ![q](https://math.jianshu.com/math?formula=q) 上方，并且内角 ![\angle pqr < \pi](https://math.jianshu.com/math?formula=%5Cangle%20pqr%20%3C%20%5Cpi)。
3. 分裂点：当且仅当 ![p](https://math.jianshu.com/math?formula=p) 和 ![r](https://math.jianshu.com/math?formula=r) 都在 ![q](https://math.jianshu.com/math?formula=q) 下方，并且内角 ![\angle pqr > \pi](https://math.jianshu.com/math?formula=%5Cangle%20pqr%20%3E%20%5Cpi)。
4. 合并点：当且仅当 ![p](https://math.jianshu.com/math?formula=p) 和 ![r](https://math.jianshu.com/math?formula=r) 都在 ![q](https://math.jianshu.com/math?formula=q) 下方，并且内角 ![\angle pqr > \pi](https://math.jianshu.com/math?formula=%5Cangle%20pqr%20%3E%20%5Cpi)。
5. 普通点：不满足前 ![4](https://math.jianshu.com/math?formula=4) 种的全都是普通点。

分裂点和合并点是破坏多边形单调性的原因，所以需要在这两个点的地方引进一条内对角线，将多边形拆分成两个小的多边形，以此来保证两个小多边形是单调的。显然对于分裂点，我们需要向上引入一条内对角线，对于合并点，需要向下引入一条内对角线。

以分裂点为例，如上图所示，在分裂点 ![v_{i}](https://math.jianshu.com/math?formula=v_%7Bi%7D)处，我们需要找到在左右边境内上方最近的第一个点，图中为 ![helper(e_j)](https://math.jianshu.com/math?formula=helper(e_j)) ，然后引入一条内对角线，与此同时，原本的大多边形也会分裂成两个小多边形。

需要注意的是左右边界，并不是上方最近的第一个点就是我们要找的 ![helper](https://math.jianshu.com/math?formula=helper) ，因为这个点可能出现在其他小多边形中。所以我们需要维护多个小多边形的边界，并且能够查找和修改。