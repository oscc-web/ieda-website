---
title: "2.4 DEF文件"
order: 4
---

在本文中，我们将讨论一个广泛使用且非常流行的文件，该文件用于从一个电子设计自动化（EDA）工具传输数据到另一个工具。是的，我们将讨论 设计交换格式[Design Exchange Format] 或DEF文件，其扩展名为.def。在本文中，我们将讨论def文件的使用，这个文件包含哪些信息以及信息如何在各个部分中排列。

DEF最早是布图规划是生成的，作为输入文件相继输入布局布线后完善，最终将转为GDS版图进行物理验证，通过后将进行流片。

## 1 介绍

DEF文件用于以ASCII格式表示集成电路（IC）的物理布局。DEF文件与 库交换格式 [Library Exchange Format，LEF] 文件密切相关。因此，两个文件都是物理设计正确显示所必需的。DEF文件格式由Cadence Design System开发。每当我们需要将设计数据库从一个EDA工具转移到另一个EDA工具以进行进一步的实现或分析时，我们使用DEF文件来传输设计数据。例如，对PnR数据库进行IR分析或STA分析时，我们以DEF文件的形式传输设计数据库。

DEF文件包含电路的特定设计信息，它是在物理设计过程中任何节点上设计的表示，不仅包含电路的连接关系，而且描述电路布局布线后单元及互连线的具体物理信息。DEF传达了逻辑设计数据和物理设计数据。

逻辑设计数据包括内部连接性（由网表表示）、组信息和物理约束。物理数据包括组件的放置位置和方向以及布线几何。

## 2 部分组成

标准的DEF文件主要包含以下部分，声明的顺序也很重要。

- [ VERSION 声明 ]
- [ DIVIDERCHAR 声明 ]
- [ BUSBITCHARS 声明 ]
- [ DESIGN 声明 ]
- [ TECHNOLOGY 声明 ]
- [ UNITS 声明 ]
- [ DIAAREA 声明 ]  
<br>
- [ ROW 声明 ]
- [ TRACKS 声明 ]
- [ CELLGRID 声明 ]
- [ VIAS 声明 ]
<br>

- [ NONDEFAULTRULES 声明 ]
- [ COMPONENTS 声明 ]
- [ PINS 部分 ]
- [ BLOCKAGE 部分 ]
<br>

- [ FILLS 部分 ]
- [ SPECIALNETS 部分 ]
- [ NETS 部分 ]
- [ SCANCHAINS 部分 ] #扫描链
- [ GROUPS 部分 ]
- [ BEGINEXT 部分 ]
- [ END DESIGN 声明 ]

在这里，我们将拿一个样本DEF文件来描述文件的各个部分。

### （1）标题 [HEADER] 声明：

<div style="text-align:center;">
  <img src="/res/images/train_eda_2/def_header.png" alt="ASIC Flow" width="400" />
  <h4>图1 DEF文件的标题声明</h4>
</div>

在标题部分，会提到DEF的版本、设计名称、技术名称、单位和 晶圆片 [Die] 面积。

单位（UNIT）用于国际标准单位与DEF数据库单位之间的转换。

设计名称（DESIGN），与END DESIGN相对应，DEF中对设计的描述都包含在DESIGN和END DESIGN之间。

芯片面积（DIEAREA）确定芯片面积大小。

### （2）行 [ROW] 声明：

多个小的SITE构成的布局区域被称为行，标准单元的宽度通常是一个 SITE的整数倍，因此单元的可布局区域是由SITE构成的许多行所组成的。SITE定义在LEF文件中，可回顾2.3 LEF文件。芯片中每一行都会在 DEF 中描述出来。

语法：

```
[ROW rowName siteName origX origY siteOrient [DO numX BY numY [STEP stepX stepY]] [+ PROPERTY {propName propVal} …] … ;] …
```

这里是一个DEF文件中行 [ROW] 部分的示例。

<div style="text-align:center;">
  <img src="/res/images/train_eda_2/def_row.png" alt="ASIC Flow" width="500" />
  <h4>图2 DEF文件的行描述</h4>
</div>

- rowName：指定该行的行名。

- siteName：指定用于该行的LEF节点。

- origX 和 origY：指定该行中第一个节点的位置。

- siteOrientation：指定该行中所有节点的方向。

- Do numX BY numY：

    - 指定创建该行的重复节点集。
    - 其中一个值必须为1。
    - 如果 numY 为1，则行将是水平的。

- STEP stepX stepY：

    - 指定水平和垂直行中节点之间的间距。


### （3）轨道 [TRACK] 声明：

用于描述设计的布线轨道。

语法：

```
[TRACKS [{X | Y} start DO numtracksSTEP space [LAYER layerName…] ;] …]
```

例子：

<div style="text-align:center;">
  <img src="/res/images/train_eda_2/def_track.png" alt="ASIC Flow" width="400" />
  <h4>图3 DEF 文件中的 Track 语句</h4>
</div>

描述：

- { X | Y } start

    - 指定第一个轨道的方向和位置
    - X 表示垂直线，Y 表示水平线
    - 起点是第一条线的 X 或 Y 坐标
    - 起始轨道从 start 数字开始
- Do numtracks 
    - 指定网格中要创建的轨道数
- STEP space
    - 指定轨道之间的间距
- LAYER layerName
    - 指定用于此轨道的布线层
    - 我们可以指定多个层

### （4）全局单元格网络 [GCell Grid] 声明：

语法：

```
[GCELLGRID {X start DO numColumns+1 STEP space} … {Y start DO numRows+1 STEP space ;} …]
```

例子：

<div style="text-align:center;">
  <img src="/res/images/train_eda_2/def_gcell.png" alt="ASIC Flow" width="400" />
  <h4>图4 DEF 文件中的 GCell 语句</h4>
</div>

描述：

- { X | Y } start

    - 指定第一个垂直 (x) 和第一个水平 (y) 轨道的位置

- Do numColumns+1

- Do numRows+1

    - 指定网格中的列数或行数

- STEP space

    - 指定轨道之间的间距

### （5）通孔 [VIA] 声明：

例子：

<div style="text-align:center;">
  <img src="/res/images/train_eda_2/def_via.png" alt="ASIC Flow" width="400" />
  <h4>图5 DEF 文件中的 Via 语句</h4>
</div>

描述：

所有过孔都由三个层上的形状组成

1. 切割层

2. 两个布线 (或主片) 层，通过该切割层连接

### （6）非默认规则 [NDR] 声明：

语法：

```
NONDEFAULTRULES numRules;

{- ruleName

[+ HARDSPACING]

{+ LAYER layerName

WIDTH minWidth

[DIAGWIDTH diagWidth]

[SPACING minSpacing]

[WIREEXT wireExt]

} …

[+ VIA viaName] …

[+ VIARULE viaRuleName] …

[+ MINCUTS cutLayerNamenumCuts] …

[+ PROPERTY {propNamepropVal} …] …

;} …

END NONDEFAULTRULES
```

例子：

<div style="text-align:center;">
  <img src="/res/images/train_eda_2/def_ndr.png" alt="ASIC Flow" width="200" />
  <h4>图6 DEF 文件中的 NDR</h4>
</div>

描述：

- 它定义了在此设计中使用的任何非默认规则，这些规则未在 LEF 文件中指定。

- 此部分还可以包含默认规则和 LEF 非默认规则定义以供参考。

### （7）组件[COMPONENTS]部分：

描述单元布局后的物理属性。

- 定义设计组件、其位置和相关属性
- DEF 文件中的一个大部分

语法：

```
COMPONENTS numComps;

[– compNamemodelName

[+ EEQMASTER macroName]

[+ SOURCE {NETLIST | DIST | USER | TIMING}]

[+ {FIXED pt orient | COVER ptorient | PLACED ptorient

| UNPLACED} ]

[+ HALO [SOFT] left bottom right top]

[+ ROUTEHALO haloDistminLayermaxLayer]

[+ WEIGHT weight]

[+ REGION regionName]

[+ PROPERTY {propNamepropVal} …]…

;] …

END COMPONENTS
```

例子：

<div style="text-align:center;">
  <img src="/res/images/train_eda_2/def_component.png" alt="ASIC Flow" width="700" />
  <h4>图7 DEF 文件中的组件部分</h4>
</div>

第一行显示，COMPONENTS共有274722个单元。

icc_clock 为单元在设计中的是i梨花名称，后面紧接着为单元在库中的模型名称。PLACED为单元放置在芯片的坐标位置，最后的字母表示单元的摆放朝向。


### （8）引脚 [PINS] 部分：

- 定义外部引脚
- 每个引脚定义为外部引脚分配引脚名称，并将引脚名称与相应的内部网络名称相关联
- 引脚名称和网络名称可以相同。

例子：

<div style="text-align:center;">
  <img src="/res/images/train_eda_2/def_pin.png" alt="ASIC Flow" width="700" />
  <h4>图8 DEF 文件中的引脚部分</h4>
</div>

### （9）障碍物 [BLOCKAGE] 部分：

- 定义设计中的放置和路由障碍物
- PUSHDOWN：指定障碍物从设计的顶级向下推入

例子：

<div style="text-align:center;">
  <img src="/res/images/train_eda_2/def_blockage.png" alt="ASIC Flow" width="300" />
  <h4>图9 DEF 文件中的障碍物部分</h4>
</div>


### （10）特殊线 [SPECIAL NET] 部分：

语法：

```
[SPECIALNETS numNets;

[– netName

[ ( {compNamepinName| PIN pinName} [+ SYNTHESIZED] ) ] …

[+ VOLTAGE volts]

[specialWiring] …

[+ SOURCE {DIST | NETLIST | TIMING | USER}]

[+ FIXEDBUMP]

[+ ORIGINAL netName]

[+ USE {ANALOG | CLOCK | GROUND | POWER | RESET | SCAN | SIGNAL | TIEOFF}]

[+ PATTERN {BALANCED | STEINER | TRUNK | WIREDLOGIC}]

[+ ESTCAP wireCapacitance]

[+ WEIGHT weight]

[+ PROPERTY {propNamepropVal} …] …

;] …

END SPECIALNETS]
```

例子：

<div style="text-align:center;">
  <img src="/res/images/train_eda_2/def_specialNet.png" alt="ASIC Flow" width="500" />
  <h4>图10 DEF 文件中的特殊网络部分</h4>
</div>

### （11）网络 [NETS] 部分：

NETS描述的是信号互连线的连接网表，除了基本的连接关系外，还可以包括每条信号线的物理属性，如互连线的频率、电容大小、作用等。信号互连线的定义都包含在关键字 NETS中。

语法：

```
NETS numNets;

[– { netName

[ ( {compNamepinName| PIN pinName} [+ SYNTHESIZED] ) ] …

| MUSTJOIN ( compNamepinName) }

[+ SHIELDNET shieldNetName] …

[+ VPIN vpinName[LAYER layerName] ptpt

[PLACED pt orient | FIXED ptorient | COVER ptorient] ] …

[+ SUBNET subnetName

[ ( {compNamepinName| PIN pinName| VPIN vpinName} ) ] …

[NONDEFAULTRULE rulename]

[regularWiring] …] …

[+ XTALK class]

[+ NONDEFAULTRULE ruleName]

[regularWiring] …

[+ SOURCE {DIST | NETLIST | TEST | TIMING | USER}]

[+ FIXEDBUMP]

[+ FREQUENCY frequency]

[+ ORIGINAL netName]

[+ USE {ANALOG | CLOCK | GROUND | POWER | RESET | SCAN | SIGNAL

| TIEOFF}]

[+ PATTERN {BALANCED | STEINER | TRUNK | WIREDLOGIC}]

[+ ESTCAP wireCapacitance]

[+ WEIGHT weight]

[+ PROPERTY {propNamepropVal} …] …

;] …

END NETS
```

例子：

<div style="text-align:center;">
  <img src="/res/images/train_eda_2/def_net.png" alt="ASIC Flow" width="500" />
  <h4>图11 DEF 文件中的网络部分</h4>
</div>

"rxmac_ppi_if_mri_rxstatus[92]"：这是信号网络的名称，表示这个信号网络在芯片设计中扮演的角色或功能。

"(PIN rxmac_ppi_if_mri_rxstatus[92])（buf_in_74 I）（antprot_in_372 I）"：这部分描述了信号的来源和去向。"(PIN rxmac_ppi_if_mri_rxstatus[92])" 表示该信号由名为 "rxmac_ppi_if_mri_rxstatus[92]" 的引脚输出，"（buf_in_74 I）（antprot_in_372 I）" 表示该信号输入到编号为74的缓冲器（buffer）和编号为372的天线保护器（antenna protector）中。

接下来是具体的布线信息：

"+ ROUTED M2( 1740 702395 ) VIA23_1cut_240_110_ALL_2_1 W"：表示信号经过了层M2，从坐标 (1740, 702395) 连接到名为VIA23_1的通孔，使用了一个宽度为240、高度为110的切割操作，切割方式为ALL，方向为2（水平），索引为1，朝向W。
"NEW M4(75 702300)(1760*) NEW M3(1760 702365 ) VIA34_1cut_110_240_ALL_1_2"：表示信号经过了层M4，从坐标 (75, 702300) 到 (1760, 702365)，通过名为VIA34的通孔连接，使用了一个宽度为110、高度为240的切割操作，切割方式为ALL，方向为1（垂直），索引为2。
随后一部分 "NEW M1( 3485 703700 ) VIA12_1cut_V_50_240_ALL_1_2 W(3270*)(*703600)" 描述了信号路径的最后一部分，连接了层M1和相应的通孔，使用了切割操作和金属填充。


## 3 区分 pitch、spacing、width、site、row、track 概念

pitch & spacing & width & track 是布线的概念。每个金属层布线的轨道即track，会有垂直和水平之分。轨道的宽度为width，两个轨道中心线之间的距离为pitch，两个轨道之间的间隙为spacing。

site & row 是布局的概念。site定义在LEF文件中，定义了其宽与高。标准单元的高度都是固定的，即site的高度，而标准单元的宽度要求为site的整数倍。而若干个site组成了一条条平行线，这些平行线即row。


## 引用

[1] https://teamvlsi.com/2020/08/def-file-in-vlsi-design-exchange.html
[2] LEF/DEF Language Reference