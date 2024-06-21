---
title: "3.1 逻辑综合阶段"
order: 1
---

逻辑综合上承 **RTL级的电路设计(.v文件)**，下启**后端布局布线的物理设计**，前后端的分界线，其目标是基于某个特定的工艺库，将RTL级描述的电路转换成门级网表描述的电路，使用 SDC约束体现PAP(性能、面积、功耗)。

Design Compiler，简称DC，是 Synopsys 公司用于做综合的核心工具，它可以方便地将HDL语言描述的电路转换到基于工艺库的门级网表。

逻辑综合是使用软件的方法来设计硬件，然后将门级电路实现与优化的工作留给综合工具的一种设计方法。它是根据一个系统逻辑功能与性能的要求，在一个包含众多结构、功能、性能均已知的逻辑元件的单元库的支持下， 寻找出一个逻辑网络结构的最佳实现方案。即在满足设计电路的功能、 速度及面积等限制条件下，将行为级描述转化为指定的技术库中单元电路的连接。


## 1 DC设计对象

DC在综合的过程中给，会把电路划分为不同的处理对象，称之为**设计对象(Design Objects)**，具体如下:

- **Design**：待综合的对象。

- **Port**：整个Design最外部的输入和输出端口。

- **Clock**：时钟信号源的引脚或端口。(数字电路采用的是基于时钟的同步电路，时钟上的任何问题都会对电路造成重要影响，因此**一定要单独处理时钟端口**)

- **Cell**：设计中包含的子设计的实例，也称为instance。(例化的模块)

- **Reference**：所指向的设计原型，即单元是参考的实例。(例化的原型)

- **Pin**：cell 自身的引脚。

- **Net**：内部连线，端口和引脚间及引脚和引脚间的连线。

<div style="text-align:center;">
  <img src="/res/images/train_eda_3/261446eb25fb434a9e317087beca8c1b.png" alt="ASIC Flow" width="700" />
  <h4>图1 原理图</h4>
</div>

<div style="text-align:center;">
  <img src="/res/images/train_eda_3/dc52015074794ebcbc2ee871bf523d78.png" alt="ASIC Flow" width="600" />
  <h4>图2 VHDL</h4>
</div>

<div style="text-align:center;">
  <img src="/res/images/train_eda_3/0f1c750940e9437c99f74f6fba755962.png" alt="ASIC Flow" width="600" />
  <h4>图3 Verilog</h4>
</div>

需要注意的是，设计对象会出现同名的问题，如下：

![](/res/images/train_eda_3/7cf683c48a83423ea419fb044a4c4e01.png)

约束添加到不同的设计对象是会带来不同的结果的，上例中的指令就没有清楚的指出设计对象是哪一个。不同版本的 DC 对同名设计对象的处理可能会不同，可以使用 get_*命令来指定设计对象(该命令返回当前设计中的对象)，如 set_1oad5[get_nets sum]，这样返回的就是nets类型的设计对象中名字为 sum 的那一个。

## 2 DC 工作原理

某种程度讲时序收敛是逻辑综合的重要目标，施加时序相关约束是综合的重要步骤（SDC文件），DC 内嵌静态时序分析引擎，Design Time，**基于时序约束完成设计的优化和映射**，为后续时序约束设置更符合实际。

逻辑综合中，内部有一个静态时序分析引擎，会把整个电路划分为不同的时序路径，路径的起点是 **input port 、clock**，终点是 **寄存器D端，output port**。

![](/res/images/train_eda_3/01d545f8a26c47868d5cf1235a1efc15.png)

在静态时序分析的基础上，逻辑综合会有两个指标：**建立时间**和**保持时间**。[具体可于第5部分学习STA的基础知识]

DC在综合过程中以**最大化建立时**间为重点，如果建立时间不满足要求，只能重新迭代，以违规路径为优化目标重新综合;如果保持时间不满足，多倾向于推迟到布图后再进行修正，

DC针对最坏情况下的关键时序路径进行优化。采用所谓**最大最小算法**，对于数据路径取最大延时而时钟路径取最小延时，不违反建立时间约束;对于数据路径取最小延时而时钟路径取最大延时，不违反保持时间约束。

这是DC的一种综合策略，具体为时序约束的施加方法、时间违规的修正方法。

## 3 DC 三个阶段

![](/res/images/train_eda_3/1c5cdbee401a4696be6f1f2e1a036283.png)

- **转译:** 将 HDL代码转换成 DC 内部的数据库(GTECH 库)，该数据库和工艺无关;

- **优化:** 根据设计目标(频率、面积、功耗)对电路进行优化(与工艺无关，运用布尔变换或代数变换技术)，包括结构优化(Architectural level synthsis)、逻辑优化 (Logic level or GTECH optimization)和门级优化(Gate-level or Mappingoptimization)

- **映射:** 在目标库中选择合适的逻辑单元(包括组合逻辑和时序逻辑)，产生设计的门级电路

(映射是将通用网表 GTECH 库元件映射到目标库中的门级标准单元，如寄存器，与门,或门等。此时的电路网表包含了相关的工艺参数，如网表(V文件)、延时信息(SDF文件)、约東信息(SDC文件)等。ddc 文件会包含以上文件的信息。)

此时与工艺库、工艺参数有关优化和映射是同时进行的，转译和优化没有执行步骤上的先后，因此综合是一个**选代过程**。

GTECH(aeneric technology)网表即通用网表，与工艺网表相比较，GTECH 网表**没有具体的工艺信息**，指的是其使用的逻辑门单元是一个符号，包含通用逻辑门(例如与或非，触发器等等)和通用运算符(加减乘除、移位、比较、选择等等)，**GTECH 网表中仅包含逻辑功能，但可以对功耗、时延和面积建模。**

以16选1多路选择器(muliplexer，MUX)为例，GTECH 网表将其表示成 16 输入、4 个输入选择、1个输出的 16 x1 MUX；而工艺网表依据工艺库信息可能将其表示成多个 4x1MUX 的级联形式。

![](/res/images/train_eda_3/5e6fa61e3cc547ec8ba3a2352170f584.png)

## 4 DC 文件管理

Design Compier 读取设计的 RTL代码，基于用户施加的各种约束，完成RTL级电路到目标工艺库上门级网表的转化。其输入输出文件内容如下:

![](/res/images/train_eda_3/52900f70519b4311bfde07396543ca11.png)

为了方便管理输入输出文件，通常在工作目录下根据文件内容建立如下目录结构来存放对应文件。

![](/res/images/train_eda_3/aba1df878ee54ecb86170d8e843e5350.png)

## 5 DC 基本流程

1. 读取库文件(包括目标库、链接库、符号库等)

2. 添加时序约束和设计规则约束(环境约束、面积约束、时序约束等)

3. 综合RTL设计(将RTL代码转换为用标准单元表示的门级网表)

4. 分析结果

5. 输出设计数据

![](/res/images/train_eda_3/eac9c2d808144767a7c11dc6bdfefa37.png)

## 6 DC 库文件

DC在运行过程中使用到的几种库文件如下:
- 目标库 target library
- 链接库 link library.
- 符号库 symbol library
- 算数运算库 synthetic library

### target library

(设计人员希望 DC 推断出并最终映射到其上的逻辑单元对应的工艺库。)

![](/res/images/train_eda_3/a7b4bf169885479daa537420d201eb2f.png)

读入的 HDL 代码首先由 synopsys 自带的 GTECH 库转换成 Design Compier 内部交换的格式，然后经过映射到工艺库和优化生成门级网表。

目标库是由晶圆厂提供的，格式是.b ，是 DC 的内部格式，不可读，可以由文本可读的 .1ib 格式转换得到。目标库中包含了各个门级单元的行为(逻辑功能)、引脚、面积以及时序信息(有的工艺库还有功耗方面的参数)，DC 在综合时就是根据目标库中给出的单元电路的延迟信息来计算路径的延迟。并根据各个单元延时、面积和驱动能力的不同选择合适的单元来优化电路。

工艺库(日标库)的示例如下，DC 优化的一个常用方法是在逻辑功能相同的前提下替换单元的大小尺寸，替换依据就是工艺库中包含的各种信息。

![](/res/images/train_eda_3/609fc600432845169bb5ac8d34925d0a.png)

### link library

(说明网表的叶单元和子设计的参考，每个单元和设计都要在链接库中找到其参考以保证设计的完整。一般情况下链接库包含目标库PAD工艺库、ROM/RAM等宏单元库，以及 DC 读入内存的设计文件，同时该库还可以包含旧的工艺库已完成不同工艺之间的再映射。)

![](/res/images/train_eda_3/24e4daf4fd714307ba36063ec810c811.png)

1. 通常情况下，**链接库对应 IP**，比如购买的付费 IP、存储器、IO、PAD等等。目标库更多的指的是标准单元，所以两者可能一样也可能不一样，这个我们都要做具体的指定。

2. 设置 link library 的时候，注意设置 search path 如下所示:

![](/res/images/train_eda_3/5778a19b94554bb4bef4becc6f45e993.png)

如上图所示，在这样一个目录情况下，虽然设置了 1ink_1ibrary ，但是 DC 在 1ink 的时候却报错， 找不到 ToP.v 中引用的DECODEIP模块。 这是因为没有设置搜索路径，DC找不到文件，这也说明 1ink_1ibrary 默认是在运行 DC 的目录下寻找相关引用。要使上例的 DECODE 能被找到，需要设置 search path。如下图所示:

![](/res/images/train_eda_3/13be0fbc620746b4aa872b25b017ae94.png)

使用 analyze & elabroate 命令的也可以读取文件，如下:

![](/res/images/train_eda_3/02440f2f9da6451b8bffc58ac8d51db3.png)

### symbol library
(工艺库元件的符号表示，用于图形化显示综合的门级网表;若只使用命令行接口，该库可以不指定。)

![](/res/images/train_eda_3/c9b0e98212bb444ba4d6857198edb44d.png)

### synthetic library
(综合库，它包含了一些经验证的、可综合的、独立于工艺的 IP，也称为**DesignWare**。dw_foundation.sldb 是Synopsys 提供的DesignWare 库，它包含了基本的算术运算逻辑、控制逻辑、可综合存储器等!P，在综合时调用这些!P有助于提高电路性能和减少运行时间。)

![](/res/images/train_eda_3/7a9b63e7677540c8aeca5236a8d7d8bb.png)

DC综合的时候，默认综合为性能相对较差的电路结构，比如将加法器(verilog中的运算符“+”)综合为串行进位加法器，如果想要使用高性能的加法器，如超前进位加法器，这时候就需要设定算数运算库，让 DC 在综合的时候调用 Designware库。同时也需要在 1ink_library设置相应的库以使得在连接的时候 DC 可以搜索到相应的运算符的实现。(这是一个较为高级的功能，需要高级的licence)


## 文章来源

[1] https://www.icourse163.org/learn/SWJTU-1207492806?tid=1470116659#/learn/content?type=detail&id=1253638057&cid=1284287406
[2] https://blog.csdn.net/one11070910/article/details/128243158?spm=1001.2014.3001.5502
[3] https://blog.csdn.net/Tranquil_ovo/article/details/129876980?spm=1001.2101.3001.6650.3&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-3-129876980-blog-111463698.235%5Ev43%5Epc_blog_bottom_relevance_base2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-3-129876980-blog-111463698.235%5Ev43%5Epc_blog_bottom_relevance_base2&utm_relevant_index=6
