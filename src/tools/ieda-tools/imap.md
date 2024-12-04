---
title: "iMap-工艺映射"
order: 1
---



## 1. 简介

> iMap项目的目标是实现后端逻辑综合中的工艺映射任务，以及围绕工艺映射相关的优化方案等。


<center><img src="/res/images/tools/tool/imap/111858_4dac4cb8_8873045.webp" style="zoom:65%;" /></center>

工艺映射是芯片设计中的后端软件中不可或缺的一步，其功能上主要是将前端的RTL代码转换为后端物理设计所需的门级netlist。然后版图设计以及物理设计阶段进一步进行相关的处理。

### 1.1 设计需求和目标

> iMap的设计目标是实现FPGP以及ASIC通用的工艺映射工具，并且工艺映射的结果达到可和其他开源逻辑综合工具可比的结果。

设计需求:

1. 支持FPGA以及ASIC工艺映射算法；
2. 支持结构工艺映射以及异构工艺映射算法(布尔匹配)；
3. 支持depth-oriented的工艺映射算法；
4. 支持area-oriented的工艺映射算法；
5. 支持与工艺相关的工艺映射优化算法；
6. 支持多轮工艺映射优化算法（多种cost的折衷方案）；
7. 支持与物理设计有关的工艺映射优化算法，不限于timing、power、routability等；
8. 支持与AI技术的融合，比如cut的选择等，实现快速工艺映射算法的方案；
9. ...

目标：

1. 实现上述算法，达到一个多功能的工艺映射算法包，满足定制化的工艺映射算法方案；
2. iMap在结果上达到和开源方案甚至闭源方案一定的可比性；
3. ...

### 1.2 专有名词

| 名词（缩写） | 详细定义                                         |
| ------------ | ------------------------------------------------ |
| LS           | logic Synthesis, 逻辑综合                        |
| DB           | Database，数据库，这里指以基础数据类组成的数据库 |
| AIG          | And Inverter Graph， 只包含{与门、非门}的图      |
| L            |                                                  |

### 1.3 参考文档

主要参考的论文、博客等各种专业或技术性文档的链接；

## 2. 数据结构

iMap前期的主要数据结构式基于mockturtle的基础上，进行相关数据feature添加以及实现，后期主要会基于iLS-DB继续实现。

基础数据结构相关描述以及图示可参考文档：[https://ieda.yuque.com/g/kzqyb5/qhfw3z/folder/24620660](https://gitee.com/link?target=https://ieda.yuque.com/g/kzqyb5/qhfw3z/folder/24620660)

下图是iMap在数据结构上的一个大致框架：
<center><img src="/res/images/tools/tool/imap/113723_2cc541c4_8873045.webp" style="zoom:65%;" /></center>

### 2.1 基础数据结构

#### 2.1.1 node —— 对应逻辑电路图中的点

> *源代码在工具中的路径：fpga-map-tool/src/iFPGA/include/database/network/details/node.hpp*

其中的结构体**node_data**表示一个node中存储的主要信息——node的ID

node_data:

```
index: 
phase:
```

phase

其中的结构体**node_state**以union的结构记录node的一些状态信息，如：有多少个fanout

```
union node_state {
  struct
  { 
    uint64_t h1 : 32;
    uint64_t h2 : 32;
  };
  uint64_t n{0};
};
```

**node目前分为两种类型，分别是：fixed_node和mixed_node。**

##### （1）fixed_node : 以模板的方式实现，主要特点是fanin的数量固定

```
// 参数列表：输入数量、node_data的size、模板T为node_state
template<int Fanin ,int StateSize , typename T=node_state> 
struct fixed_node
{
  using pointer_type = node_data;
  std::array< pointer_type, Fanin >       children; // 固定大小的数组存储这个节点的“孩子”，即该节点入边链接的节点
  std::array< T, StateSize >     data;         // the state of the node
  uint64_t next{0};                        // the linked list in hash table
};
```

##### （2）mixed_node:以模板的方式实现，主要特点是fanin的数量不固定，可以为多个

```
// 参数列表：node_data的size、模板T为node_state
template<int StateSize, typename T=node_state>
struct mixed_node
{
  using pointer_type = node_data;
  std::vector< pointer_type >           children; // 用vector存储节点的“孩子”，数量不固定
  std::array< T, StateSize >            data;
};
```

#### 2.1.2 signal——对应逻辑电路图中的边

> *源代码在工具中的路径：fpga-map-tool/src/iFPGA/include/database/network/details/signal.hpp*

其主要的内容为：

(1) complement : 表示这条边是否逻辑取反，complement为1则是取反边，为0则取正

(2) index : 代表这条边是ID为index的node的fanout

```
struct signal
{
  union 
  {
    struct
    {
      uint64_t complement : 1;
      uint64_t index      : 63;
    };
    uint64_t data;
  };
};  // end struct signal
```

#### 2.1.3 storage——对应逻辑电路图

> *源代码在工具中的路径：fpga-map-tool/src/iFPGA/include/database/network/details/storage.hpp*

其主要的数据成员有：

```
std::vector<node_type> nodes; // 存储图中所有node，其在容器中的序号便是其在图中的序号
  std::vector<uint64_t> inputs; // 存储图中属于是主输入的node的序号
  std::vector<typename node_type::pointer_type> outputs; // 存储出边为output的node的node_data
  std::unordered_map<uint64_t, latch_info> latch_information;

  std::vector<uint64_t> hash; // vector用作hash表
  uint64_t num_entries;
  T data;
```

其成员函数都是与哈希相关的函数：

`uint64_t abc_hash(const node_type& n, uint64_t size) // 输入一个node的引用，返回其对应的hash值`

`uint64_t hash_find(const node_type& n) // 查询输入的node是否之前被创建过，若之前存在该节点，则会在hash表中查询到该node的id`

`void hash_reserve(uint64_t size) // 改变hash表的大小`

`void hash_insert(node_type n, uint64_t index) // 向hash表中插入一个node的信息`

`void hash_erase(node_type n) // 删除hash表中对应node n的信息`

`uint64_t hash_size() // 返回目前hash表的大小`

### 2.2 AIG

> *源代码在工具中的路径：fpga-map-tool/src/iFPGA/include/database/network/aig_network.hpp*

**And-Inverter Graph(AIG)** 是有向无环图，表示电路或网络的逻辑功能的结构实现。AIG 由表示逻辑与的两个输入节点、标有变量名称的节点、可选地包含代表逻辑否定的标记的边组成。

如下图所示：

<center><img src="/res/images/tools/tool/imap/200350_f1db9ee2_9646530.webp" style="zoom:65%;" /></center>

**其数据结构有：**

（1）node ：

```
对应图中的点，类型为输入数固定为2的fixed_node，例如上图中：id为0的常量节点、id为1 ~ 5的主输入节点、id为6 ~ 12的and节点，以及作为choice node的11（本质还是and node）。
```

（2） signal ：

```
对应图中的边，例如上图中：id为2和6的两个node间的常规边，则其complement为0；id为8和10之间的取反边，则其complement为1；id为10和11之间的互补等价边，其中node10是代表点，node11是choice点，两者的function成互补关系，这些涉及一些相关的算法，之后进行详细描述。
```

由工具源代码中的 `using aig_storage = storage< fixed_node<2,2>, aig_storage_data >;`可以看出aig本质就是使用的点为输入数为2的node的storage，至于其中的**aig_storage_data**记录了aig的一些特殊信息，如下：

```
struct aig_storage_data
{
  uint32_t              num_pis{0u}; // 该aig network的主输入个数
  uint32_t              num_pos{0u}; // 该aig network的主输出个数
  std::vector<uint32_t> latches{};  
  uint32_t              trav_id{0u};  
};
```

**其成员函数可分为以下几大类：**

（1）与主输入/输出还有一些时序电路的部件有关的函数，如：

创建一些部件的函数:

```
signal create_pi( std::string const& name = std::string() ) // 创建一个主输入
uint32_t create_po( signal const& f, std::string const& name = std::string() ) // 创建一个主输出
signal create_ro( std::string const& name = std::string() ) // 创建一个寄存器的输出
```

相关的判断函数：

`bool is_pi( node const& n ) const // 判断某点是否为主输入`

（2）创建内部节点的函数，如：

单参数的：

`signal create_not( signal const& a )  // 将输入的signal取反（complement取反）后返回，对应下图中的inverter`

双参数的：

` signal create_and( signal a, signal b ) // 将两个node的输出的signal都取正当作入边，创建一个and节点，返回新创建节点的取正的输出signal，对应下图中的and`

`signal create_nand( signal const& a, signal const& b ) // 将两个node的输出的signal都取正当作入边，创建一个and节点，返回新创建节点的取反的输出signal，对应下图中的nand`

**注解：node单独来看只是一个and门，但是当结合它的两个入边和一个出边的正反性选择，可以组合出各种逻辑门，并且满足逻辑完备性。例如：nand门，其布尔表达式为Y=!(A&B)，其中Y为新创建的节点的输出signal，等于两个输入节点A、B的取正signal作and运算，即创建以A、B的signal为输入的node（and gate），最后将新创建的node的输出signal取反，得到最终的输出。**

<center><img src="/res/images/tools/tool/imap/162616_38c2ae69_9646530.webp" style="zoom:65%;" /></center>

三参数的：

`signal create_xor3( signal const& a, signal const& b, signal const& c ) // 创建级联的异或门 `

**注意：其实只有create_and()函数内部有实际的数据方面的操作，代码量较多，其它逻辑门的创建函数都是在调用create_and()的基础上对相关的signal作一些取反操作，代码量较少。**

（3）一些为具体的算法服务的函数，如：

`std::optional<std::pair<node, signal>> replace_in_node( node const& n, node const& old_node, signal new_signal )`

（4）一些查询整体信息的函数，如：

`uint32_t num_pis() const // 获得这个aig中主输入的数量`

（5）一些针对node和signal的函数，如：

`node get_node( signal const& f ) const // 查询某signal是id为多少的node的输出`

```
uint32_t node_to_index( node const& n ) const // 查询某节点的id
```

```
node pi_at( uint32_t index ) const // 查询某pi是所有pi中的第几个
```

（6）对整个aig中的某类元素做遍历的函数，如：

```
template<typename Fn>
  void foreach_pi( Fn&& fn ) const // 遍历aig中的pi，并对其做指定的操作
```

### 2.3 cut

> *源代码在工具中的路径：fpga-map-tool/src/iFPGA/include/database/cut/cut.hpp*

某节点n的cut C代表aig中一组节点的集合，满足条件从aig的PIs到节点n的任何路径都必须通过集合C中的至少一个节点。

例如：下图中节点集合C={2,3,4,5}就是节点10的一个cut，其满足上述定义中的要求；然而集合{2,3,4}不是节点10的cut，因为存在路径5-9-10不会通过该集合中的任何点。

<center><img src="/res/images/tools/tool/imap/200415_c530d967_9646530.webp" style="zoom:65%;" /></center>

| 专有名词       | 解释                                                                  |
| -------------- | --------------------------------------------------------------------- |
| trivial cut    | 当某节点n的一个cut中只包含 节点n自身，那这种cut称为节点n的trivial cut |
| leaves         | 某cut C中的节点被称为C的leaves                                        |
| K-feasible cut | 如果cut C的元素个数少于等于K，称C为K-feasible cut                     |

**cut的主要的数据成员如下：**

```
std::array<uint32_t, MaxLeaves> _leaves; // 存储cut中的leaves，MaxLeaves限制了leaves的数量上限
  uint32_t                        _length{0}; // 记录当前状态leaves的数量
  uint64_t                        _signature{0}; // signature与算法相关，之后作详细解释
```

**其成员函数分为以下几大类：**

（1）对数据成员进行一些基本操作的函数：

```
template<typename Container>
  void set_leaves( Container const& c ) // 设置该cut的leaves
```

（2）一些运算符重载的函数：

```
T* operator->() // 得到数据成员_data
template<int MaxLeaves, typename T>
std::ostream& operator<<( std::ostream& os, cut<MaxLeaves, T> const& c ) // 打印出一个cut的内容
```

（3）一些为算法服务的函数：

```
template<int MaxLeaves, typename T>
bool cut<MaxLeaves, T>::dominates( cut const& that ) const // 判断两个cut间的主导关系
```

### 2.4 cut set

> *源代码在工具中的路径：fpga-map-tool/src/iFPGA/include/database/cut/cut_set.hpp*

cut set是指某节点的cut的集合，一个节点可能不止一个cut，如下图所示：

<center><img src="/res/images/tools/tool/imap/202937_590c5f3b_9646530.webp" style="zoom:65%;" /></center>

**其数据成员如下：**

```
std::vector<CutType>          _cuts; // 存储cut set中的所有单个的cut
  std::array<CutType*, MaxCuts> _pcuts; // 存储cut的指针；用于控制存储cut的数量的上限；
  uint8_t                       _length{0u}; // 现存cut的数量
```

**其成员函数有以下几大类：**

（1）对cut set做一些基本的数据操作：

`void clear() // 清空存储cut和其指针的容器`

`CutType& add_cut(Iterator begin, Iterator end) // 添加一个cut`

（2）重载运算符的函数：

`friend std::ostream& operator<<( std::ostream& os, cut_set const& set ) // 打印所有存储的cut`

（3）服务算法的函数：

`void update_best( uint32_t index) // 更新best cut`

### 2.5 truth table

> *truth_table相关函数在工具中的路径fpga-map-tool-main\src\iFPGA\include\database\cut\cut_enumeration.hpp*

> *kitty源代码在工具中的路径：fpga-map-tool-main\src\iFPGA\include\lib\kitty\include\kitty*

真值表的基础实现由第三方工具kitty提供。

truth table的主要作用是表示一个cut的功能函数，直观地说，节点m的cut c的函数是节点m在cut c中的节点上的函数，体现节点m和cut中的点的逻辑关系。

在表示功能函数的形式时，用X1，X2，......，Xk表示不同的布尔变量，符号σc是一种将变量Xi（1<=i<=k）分配给cut中每一个节点的映射。简单来说，点n的一个cut c中的点在cut中的序号为k，则该节点的功能函数对应的变量为Xk。然后，节点n的cut c的函数用πσ(m, c)表示。

<center><img src="/res/images/tools/tool/imap/203302_857e1175_9646530.webp" style="zoom:65%;" /></center>

例：对于node e 的cut c1= {b,c}，若X1代表b的功能函数，X2代表c的功能函数，则有πσ1 (e, c1) = ¬X1 · X2，体现了节点e、c、c之间的逻辑关系。

## 3. 算法概述

### 3.1 k-feasible-cut

k-feasible-cut的概念在之前的章节**2.3 cut**中比较详细地讲解过，这里要补充的是cut对truth table计算的作用，通过cut体现不同node之间的关系，从而向后增量式地计算出每个节点的功能函数，以truth table的形式直接体现。以及在计算过程中要注意的一些具体细节方面的算法。

#### 3.1.1 cut-generation

> *源代码在工具中的路径：fpga-map-tool/src/iFPGA/include/database/cut/cut_enumeration.hpp*

cut的生成算法，增量式的生成算法。某点n的cut set的计算方式简单来说就是点n的两个输入点的cut set的笛卡尔积。如下图的例子，node9的cut set就等于它的两条入边对应的node5和node6的cut set作笛卡尔积。

<center><img src="/res/images/tools/tool/imap/202644_69f35f97_9646530.webp" style="zoom:65%;" /></center>

#### 3.1.2 cut-function computation

> *源代码在工具中的路径：fpga-map-tool/src/iFPGA/include/database/cut/cut_enumeration.hpp*

增量式cut的布尔函数的计算，主要是对truth table的计算。

这里要注意的是cut function计算时，比如下图中的cut c1={1，2，3，7}，node 11将其cut c2={2，3，7}的cut function向后续点node12传递时，是否要传递互补的函数是由node11和node12之间的signal的complement和cut c2的phase标志共同决定的，简单来说，计算的式子是TT（向后传递）=TT（原本的真值表）^complment^phase。

<center><img src="/res/images/tools/tool/imap/142703_2380b3e9_9646530.webp" style="zoom:65%;" /></center>

#### 3.1.3 cut-dominates

> *源代码在工具中的路径：fpga-map-tool/src/iFPGA/include/database/cut/cut.hpp*

用于判断两个cut之间是否存在**主导关系**，其实这是cut之间的子集问题： 对于上图示例，我们可以发现对于and gate 10来说，其中的两个cut: {2,3,4,5}与{2,3,4,5,6}存在子集现象。如果从实际出发考虑看，经过{2,3,4,5}则一定会经过{2,3,4,5,6}，所以这里{2,3,4,5,6}是属于冗余的cut, 学术上我们认为{2,3,4,5} dominates {2,3,4,5,6}，会将被dominated的cut**删除**。

这个算法的具体实现在cut.hpp中的函数：

`bool cut<MaxLeaves, T>::dominates( cut const& that ) const`

另一个cut作为参数输入，和本对象的cut作运算，若本cut被输入的cut所主导，则返回false，否则返回true。

#### 3.1.4 cut-signature

> *源代码在工具中的路径：fpga-map-tool/src/iFPGA/include/database/cut/cut.hpp*

关于cut signature的计算问题，**作用**：（1）用于快速筛查cut之间的dominate关系；（2）快速得出两个cut不相同。

dominate算法概要：

算出两个cut的sign，计算公式如下：

<center><img src="/res/images/tools/tool/imap/194135_977afeb7_9646530.webp" style="zoom:65%;" /></center>

其中c代表某cut，sign（c）代表其对应的signature，id（n）指该cut中的元素，对应包含的节点的id，m等于机器字大小，⊕ 符号代表位或运算。上一张PPT中的两个例子c1={2，3，4，5}的signature为m位的二进制数，其中第2，3，4，5位上是1，其它位上为0；c2={2，3，4，5，6}的signature为m位的二进制数，其中第2，3，4，5，6位上是1，其它位上为0。

例：假设m=8，则sign（c1）= 0011 1100，sign（c2）=0111 1100。将sign（c1）与sign（c2）作位与操作，得结果0111 1100，其不等于sign（c1），则c1并不主导c2，而其等于sign（c2），所以c2主导c1，最后被主导的c1将被删去。

快速判断两个cut不相同也是依据sign，判断不相同就很简单，只要sign（c1）！=sign（c2），则两个cut不存在相等的可能性，但注意，这并不说明两个cut就相同，需要再进行其它方法来判断，确实相同的话就只要保留其中一份就行了。

**总的来说两个作用都是为了在计算出某点的cut set后去除掉其中冗余的cut。**

#### 3.1.5 priority-cut

优先割的应用，主要是在可容忍范围内质量的下降，对工艺映射在时间上以及内存上的加速。

<center><img src="/res/images/tools/tool/imap/114432_56dbb688_9646530.webp" style="zoom:65%;" /></center>

经典的cut枚举算法主要有两个缺点：

（1）当电路网表比较大时，可能会占用很多的内存资源。

（2）随着k值（LUT输入大小）的增大，算法复杂度指数上升。

而priority-cut算法对其作出改进，主要的修改点在于创建的cut set中的cut的数量是有上限的，并且cut set中的cut是有优先级的，根据优化目标的不同，会有不同的目标函数。根据目标函数来决定当前新增的cut的质量，质量越差的cut会被排到余越后的位置，如果这个cut的排名超过了cut上限数，该cut就会被遗弃。

priority算法的主要贡献点有两个：

（1）每个节点的cut数量上限设为C，内存和运行时间得到明显提高。

（2）随着LUT输入大小k值的增大，运行时间的增大由指数增长转变为线性增长。

### 3.2 cut-truth-table storage model

目前实现的iFPGA mapper里面的cut的truth table存储模型，包括仿真以及工艺映射时都会使用到。

<center><img src="/res/images/tools/tool/imap/cut-truth-table.webp" style="zoom:65%;" /></center>

### 3.3 AIG merge

> *源代码在工具中的路径：fpga-map-tool-main\src\iFPGA\include\operations\algorithms\choice_miter.hpp*

多个AIGs融合成一个AIG，通过计算choice来减少structural bias的一个手段。要融合的几个AIG是同一个原始的AIG经过了不同的优化处理的结果，它们功能上还是等效的，但是内部结构可能会有差别。

<center><img src="/res/images/tools/tool/imap/aig-merge.webp" style="zoom:65%;" /></center>

像上图就是两个等价AIG融合后的结果，我们把两个AIG分别叫做net1和net2，原本net1中的节点有{a,b,c,d,e,p,q,r,t,o}，而net2有{a,b,c,d,e,p,s,u,n}，两个AIG有很多两者都拥有的功能相同的点{a,b,c,d,e,p}，于是这些点只生成一份，供两个AIG使用。这种的结构就是AIG merge后的结构，我们一般称其为miter。

其算法思想我们以下图为例：

<center><img src="/res/images/tools/tool/imap/183701_741386ad_9646530.webp" style="zoom:65%;" /></center><center><img src="/res/images/tools/tool/imap/183719_0a81b968_9646530.webp" style="zoom:65%;" /></center><center><img src="/res/images/tools/tool/imap/183708_9465e7a5_9646530.webp" style="zoom:65%;" /></center><center><img src="/res/images/tools/tool/imap/183744_15b59fb0_9646530.webp" style="zoom:65%;" /></center><center><img src="/res/images/tools/tool/imap/183753_94cb2776_9646530.webp" style="zoom:65%;" /></center>

将GIA-1和GIA-2 merge成miter，算法步骤如下：

**1、创建出miter的所有PIs，和输入的AIG的PIs一致。**

<center><img src="/res/images/tools/tool/imap/184007_cf8e2505_9646530.webp" style="zoom:65%;" /></center>

**2、对每个AIG做{**

**对AIG中每个PO做深度优先遍历中间节点{**

**将AIG的中间节点复制给miter，并通过hash消除冗余的中间节点**

**}**

**将PO复制给miter**

**}**

<center><img src="/res/images/tools/tool/imap/184326_532270a3_9646530.webp" style="zoom:65%;" /></center>

如上图所示，将第一个AIG的PO7对应的所有中间节点复制给了miter。

<center><img src="/res/images/tools/tool/imap/184600_3eef9d5d_9646530.webp" style="zoom:65%;" /></center>

如上图所示，两个AIG的相同的PO都复制给了miter，算法会在之后的步骤中消除冗余的PO。

**3、删除冗余的POs**

<center><img src="/res/images/tools/tool/imap/193917_fa3faed0_9646530.webp" style="zoom:65%;" /></center>

**注记：dangling node的定义，没有fanout的node。**

<center><img src="/res/images/tools/tool/imap/194352_42302625_9646530.webp" style="zoom:65%;" /></center>

### 3.4 choice computation

> *源代码在工具中的路径：fpga-map-tool-main\src\iFPGA\include\operations\algorithms\choice_computation.hpp*

根据融合的AIG，来计算AIG中功能相等或相反的choice点，来实现无损的（loseless）逻辑综合过程。

<center><img src="/res/images/tools/tool/imap/135903_8ac021dd_9646530.webp" style="zoom:65%;" /></center>

上图中，图（I）和图（II）在上一步merge成图（III）后，在通过本节的算法变成图（IV）的aig with choice。其中点t'和 点u'是互补等价的关系，t'是u'的代表点，u'是t'的choice node。

该算法的大致流程：

1、先用随机模拟的方法，将随机输入向量分配给miter的PIs，并计算每个节点相应的仿真向量。收集具有相同模拟向量的节点（或者互补）到一个数组中，称为模拟等价类Si。对于每个Si，我们选择拓扑序最低的节点(根据G上的拓扑顺序)作为代表。每个节点n都用其具有代表性的simrep[n]进行标记。这一步便分出了可能等效的节点划分。

2、然后将miter中所有的Pis复制给aig with choice（以下我们简称G）。

3、将miter中的内部节点n复制给G。当t'被创建出来后，由于u'的simrep中的代表点是t'，则两点作SAT-solver证明两者是互补等价，则u'点与t'点间逻辑上有一条互补等价边，两者共用一个fanout，即点o'。

### 3.5 fast equivalent classes checking

关于node.phase的计算问题，主要用于快速的等价类内的功能相等或相反的快速判断；

<center><img src="/res/images/tools/tool/imap/142841_2febd87e_9646530.webp" style="zoom:65%;" /></center>

### 3.3 technology mapping

工艺映射主要是指将工艺无关的RTL电路描述转换成使用特定工艺库描述的过程。

#### 3.3.1 depth-oriented mapping

> *源代码在工具中的路径：fpga-map-tool-main\src\iFPGA\include\operations\algorithms\\klut_mapping.hpp*

函数为 `void mapping_depth_oriented(int mode)`，这是传统的工艺映射中使用的算法，下图中是传统基于depth-oriented的工艺映射的流程伪代码：

<center><img src="/res/images/tools/tool/imap/165026_cd5362ad_9646530.webp" style="zoom:65%;" /></center>

<center><img src="/res/images/tools/tool/imap/165202_f07a1257_9646530.webp" style="zoom:65%;" /></center>

工艺映射流程为：
1、计算出aig中每个点的k-feasibale cuts并保存；
2、为每个点找到一个cuts中level（深度）最小的cut作为代表； **注：cut的level是其包含的点中level最大的那个点的level加上1所得。**
3、更新每个点的代表cut并保存它的面积；
4、返回最终的mapping结果；

**缺点：depth-oriented的优化方案会产生重复的节点。**

#### 3.3.2 area-oriented mapping

> *源代码在工具中的路径：fpga-map-tool-main\src\iFPGA\include\operations\algorithms\\klut_mapping.hpp*

**定义：**基于area recovery的方法，可以避免重复节点产生，算是在传统工艺映射上的改进。本文提出的算法与前面的传统技术映射相似，它以拓扑顺序考虑所有节点，并最小化深度，然后进行多次映射优化。最后，像传统映射一样生成映射的LUT网络。

**主要创新：**除了传统的区域恢复之外，在映射优化过程中还进行了边缘恢复，以减少技术映射后的pin连接（或edge）的总数。因此，placer可以生成一个总线长较短的结果。

**作用：**面积流的主要目标是“预测”全局LUT数量，这样映射优化就可以在匹配阶段选择面积最小的cut。类似地，边缘流“预测”一个节点fanin中pin连接的总数。通过最小化这个数量，减少了在placement和routing时的电线数量，从而提高了路由性。

**大致结构：**由两个主要部分组成：1、利用边缘流启发式方法进行全局选择逻辑cone，以最小化eage的数量。2、采用精确的边缘算法来最小化给定cut的MFFC的edge数量。

基于area recovery方法的工艺映射流程称为WireMap，以下是其总体的流程伪代码，其不同在于在传统的流程上加入了globalAreaEdgeRecvery和localAreaEdgeRecovery这两个流程。

<center><img src="/res/images/tools/tool/imap/165321_4fd4330e_9646530.webp" style="zoom:65%;" /></center>

在这之前先介绍几个概念：

（1）fanin (fanout) cone of node n：通过给定的某点n可到达网络中其它节点的一个集合。

（2）Maximum Fanout Free Cone (MFFC) of node n ：点n的fanin cone的子集，要满足条件——从该子集中的每一个节点到POs的每条路径都要经过点n。

（3）Area flow：

定义：某点的area flow值代表用于mapping该点当前的cut的LUT的面积成本。
计算方法：它可以通过一次从PIs到POs被计算出来，PIs的area flow值预先设为0。某个点n的area flow值的计算公式为：<center><img src="/res/images/tools/tool/imap/170133_bcfb6cab_9646530.webp" style="zoom:65%;" /></center>

式子解释：Leafi(n)是n的cut中的第i个元素；NumFanout(n)是当前mapping中节点n的fanout数量，若该点没被当前的映射所使用到，那将NumFanout(n)设为1。
作用：area flow估计了cone之间的共享，而不需要重切分它们。

（4）exact local area定义：某点n的exact local area是该点被mapping后使当前mapping的面积增加的量。

（5）Exact area of a cut定义：该cut的MFFC中的LUT的面积之和。即，如果该cut被设为节点n的代表cut，则其对应的LUT被加入到mapping中。

（6）exact area of a cut计算方式：从该cut的根节点进行DFS遍历。

（7）edge flow cost function：<center><img src="/res/images/tools/tool/imap/170654_03bda3e7_9646530.webp" style="zoom:65%;" /></center>

Edge(n)：节点n当前被用在mapping中的代表cut的fanin edges的总数。
Leafi(n)：节点n的代表cut中的点元素。
NumFanouts(n) ：节点n在当前mapping状态中fanout的数量。

接下来介绍两个**关键**的流程：

（1）globalAreaEdgeRecvery的伪代码：

<center><img src="/res/images/tools/tool/imap/171212_9179b07a_9646530.webp" style="zoom:65%;" /></center><center><img src="/res/images/tools/tool/imap/171217_9df5d8fa_9646530.webp" style="zoom:65%;" /></center>

对应的函数为：`void global_area_edge_recovery()`

（2）LocalAreaEdgeRecovery的伪代码:

<center><img src="/res/images/tools/tool/imap/171515_76ce83c9_9646530.webp" style="zoom:65%;" /></center><center><img src="/res/images/tools/tool/imap/171521_7338e87b_9646530.webp" style="zoom:65%;" /></center>

对应的函数为：`void local_area_edge_recovery()`

> 方法来源论文：Jang S, Chan B, Chung K, et al. Wiremap: FPGA technology mapping for improved routability and enhanced LUT merging[J]. ACM Transactions on Reconfigurable Technology and Systems (TRETS), 2009, 2(2): 1-24.

下图是该方法的一个例子：

<center><img src="/res/images/tools/tool/imap/172145_ca1d50e7_9646530.webp" style="zoom:65%;" /></center>

<center><img src="/res/images/tools/tool/imap/172246_636e84bd_9646530.webp" style="zoom:65%;" /></center>

#### 3.3.3 mapping with choice

> *源代码在工具中的路径：fpga-map-tool-main\src\iFPGA\include\operations\algorithms\\klut_mapping.hpp*

针对于aig with choice的mapping方法，注意拓扑序对mapping过程的影响；

对于普通的aig的mapping流程管理由类 ` klut_mapping_impl1`控制，而对于aig with choice的mapping流程管理由类 `klut_mapping_impl2`控制。

总体来说普通aig mapping的流程aig with choice mapping时都会有，但是具体细节会不同，要考虑到choice的存在。

#### 3.3.4 multy-iteration mapping

## 4. 工具流程概述

### 4.1 flow manager

> *源代码在工具中的路径：fpga-map-tool/src/iFPGA/include/flow/flow_manager.hpp*

`struct flow_manager`控制让整个工具按照流程运行起来

其构造函数为：

```
flow_manager(const std::string& path_network, const std::string& path_configuration,
               const std::string& output_verilog, const std::string& output_lut)
  : _path_input(path_network), _config_user_file(path_configuration), 
    _output_verilog(output_verilog), _output_lut(output_lut),
    _min_nodes(INT_MAX), _min_depth(INT_MAX), _state(false)
```

其中的参数列表对应的功能如下：

| 参数名                     | 解释                                                             |
| -------------------------- | ---------------------------------------------------------------- |
| string& path_network       | 输入的aig文件的路径（aig文件以.aig结尾）                         |
| string& path_configuration | 输入的配置文件的路径，配置文件中主要描述了后面各种算法所需的参数 |
| string& path_configuration | 输出verilog文件的路径                                            |
| string& output_lut         | 输出LUT network的路径                                            |

**主要流程如下图所示：**

<center><img src="/res/images/tools/tool/imap/165311_cd065abe_9646530.webp" style="zoom:65%;" /></center>

### 4.2 输入

通过flow_manager的成员函数 ` void read_in(const std::string& path)`读取指定路径下的aig文件

而具体读取方法是由**Reader**类来实现的

> *Reader类的源代码在工具中的路径：fpga-map-tool/src/iFPGA/include/operations/io/reader.hpp*

Reader类的数据成员如下：

```
bool                          _state;             // aig文件读取成功与否的标志
  int                           _type;              // 读取文件的类型，用数字标号表示
  std::string                   _path_in;           // 要读取的文件的路径
  Ntk                           _aig;               // 逻辑network的模板，如：aig netwok就是其中一种类型
```

输入的文件的类型与其数字标号的关系如下：

```
enum FileType{
  aag = 0,
  aig,
  verilog,
  blif
};
```

读取的具体操作在Reader类的构造函数中，是调用了第三方库里的工具lorina解析了输入文件。

> lorina的源代码在工具中的路径：fpga-map-tool/src/iFPGA/include/lib/lorina

### 4.3 配置参数

通过flow manager的成员函数 `bool get_configurations()`读取配置文件的路径，然后运行另一个成员函数 `void configure_params()`读取配置文件中的参数并赋给存储这些参数的数据成员。

配置文件是.yaml文件，用第三方库YAML对其进行解析，以识别关键字的方式获得相应的参数。

配置文件分为两个：

（1）consumer_config.yaml：里面的参数用于控制一些优化算法是否要运行。

（2）internal_config.yaml：里面的参数用于指定一些算法内部使用的参数。

### 4.4 逻辑优化

逻辑优化分为对深度的优化和对面积的优化，网络的深度变低可以使时延降低，而面积即aig中的节点数减少可以使整个网络的复杂度降低，工艺映射时需要的LUT越少，对应逻辑电路图变成实际的电路需要的电子元件更少。

（1）深度的优化（balance）：

工具目前使用的是一种叫sop balancing的理论去实现深度的优化，例如下图所示，两边的aig的功能相等，但是左边的深度为4而右边的深度为3，工具需要将左边的结构尽量转化成左边那种深度更小的结构，电路的时延就会更小。

<center><img src="/res/images/tools/tool/imap/193050_b7448e83_9646530.webp" style="zoom:65%;" /></center>

flow manager的成员函数 `void opt_balance()`提供了balance优化的接口。

（2）面积的优化（rewrite）：

例如下图所示，两边的aig的功能相等，但是左边有3个节点，右边只有两个节点，面积更小，工具需要将左边这种情况的结构转化成右边这种的结构。

<center><img src="/res/images/tools/tool/imap/200940_8a352969_9646530.webp" style="zoom:65%;" /></center>

flow manager的成员函数 `void opt_rewrite()`提供了rewrite优化的接口。

### **4.5 逻辑映射**

工艺映射主要是指将工艺无关的RTL电路描述转换成使用特定工艺库描述的过程，在本工具中，RTL电路用aig网络去表示，而工艺库的电子元件用LUT（查找表）逻辑上去表示。一个k个输入的LUT可以实现任意的k输入的

逻辑表达，目的是利用LUT覆盖需要实现的逻辑，并使得映射后电路面积和深度尽可能小。4输入的LUT覆盖的一个例子如下图所示：

![](https://office-cn-hangzhou.imm.aliyuncs.com/api/v3/office/copy/SG1hRzY4dEF5bExkR2pqYnV0MkFrbWZNM0orL3MwK1RsQU9QL0dVNWsxS1JHMFJ0ZjhLM0FkWlAzc1hRUDVDb05xakRYN3hPN0dXZXRLL1EzV3k5UklGOFlwbzBKTEUxdzg1V2t1ODNoTFF5RXNPYnFSdlVBd3liSXVuM0tZc1RGOU5Ga1hMVzJoV3RQQ1plNktsd2xQNWdKb1Qyd3NtdVRadm9yeStwbEhDcDF3R21vQ2JsZXd4bHREOTUyYVorbDlnS3pvdnR0YmJjeEt1K1l5cFFxbHZ6MkJYbGM3YTNZY3cyVVhmeUZ6YklsSFIzUU1vSEdVMHk=/attach/object/0f8b708f08667f307b52fcc2437f1432e1062e7b)

<center><img src="/res/images/tools/tool/imap/201148_afdacd17_9646530.webp" style="zoom:65%;" /></center>

flow manager的成员函数 `mapper()`提供工艺映射的接口。

### 4.6 输出

输出的部分包括：输出最终的结果，以 `lut-network`和 `Verilog`的形式输出在指定在指定文件路径下；输出最终结果的评估分数，主要是从delay和area两个方面去给出分数。

（1）输出结果：flow manager的成员函数 `void write_out(const iFPGA_NAMESPACE::aig_network& aig, const iFPGA_NAMESPACE::klut_network& klut)`提供了输出结果的接口。`write_out`函数调用了 `Writer`类的两个成员函数 `write2Verilog`和 `write2LUT` 分别输出Verilog和lut network形式的结果。

> *Writer类的源代码在工具中的路径：fpga-map-tool/src/iFPGA/include/operations/io/writer.hpp*

（2）输出评估分数：flow manager的成员函数 `void report(const klut_network& klut, iFPGA_NAMESPACE::mapping_qor_storage qor)`提供输出评估分数的接口，展现方式是将指标对应的分数打印在控制台中。
