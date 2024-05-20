---
title: "实践一（工程类）"
order: 2
---
## **数据流处理与分析**

### **1 问题背景**

合理的逻辑交互设计可以提高系统的可靠性和稳定性，并且能够更好地满足用户的需求。因此，我们需要关注各个模块之间的信息流动和交互方式，保证系统的正常运行和用户的良好体验。对于iEDA项目而言，为了实现不同点工具之间的交互，我们需要关注平台的数据流变化、平台提供的服务、iEDA的各点工具的API接口以及逻辑交互等等。

### **2 问题描述**

1、**实现要求**：遵循iEDA平台的模块划分，完成以下功能：用iEDA读取gcd设计文件，根据EDA后端设计流程，依次运行iEDA点工具流程，参考现有点工具的报告（report目录下的输出文件，如cts_db.rpt、drc.rpt、drv_db.rpt、filler_db.rpt、fixfanout_db.rpt、fp_db.rpt、hold_db.rpt、lg_db.rpt、pl_db.rpt rt_db.rpt等）输出结果，需要实现对各流程的相关参数（如CORE Usage，IO pin Number，Instance Number，Net Number等等参数）的变化进行汇总，同学们需要设计相应的Json数据结构，来展示各流程的参数变化，Json示例如下，其中示例仅供参考，同学们可以自行设计。

```
{
    "Instance Number": {     #各点工具都输出的参数
        "iDB(database)-floorplan": 932,
        "iNO-fix_fanout": 932,
        "iPL-filler": 2048,
        "iPL-legalization": 942,
        "iPL-placement": 932,
        "iCTS-cts": 943,
        "iTO-fix_drv": 942,
        "iTO-fix_hold": 942,
        "iRT-routing": 942,
    },
    "Core Usage": {
        "iDB(database)-floorplan": 0.392942,
        "iNO-fix_fanout": 0.392942,
        "iPL-filler": 0.972277,
        "iPL-legalization": 0.396726,
        "iPL-placement": 0.392942,
        "iCTS-cts": 0.396963,
        "iTO-fix_drv": 0.396726,
        "iTO-fix_hold": 0.396726,
        "iRT-routing": 0.396726,
    },
    "Cut Different Layer Spacing": 0, # 在iDRC工具生成的drc.rpt中独有配置参数设置
    "Metal Parallel Run Length Spacing": 580
}
```

报告生成目录示例：iEDA/scripts/design/sky130_gcd/result/report

iEDA工程链接如下：https://gitee.com/oscc-project/iEDA

<center><img src="/res/images/practice/course/course1_1.png" style="zoom:100%;" /></center>
<center>图1 iEDA手册截图，上面列了report中各字段的含义</center>


iEDA作为基础底座，包含下面的主要的内容模块：文件系统，数据库等等

<center><img src="/res/images/practice/course/course1_2.png" style="zoom:100%;" /></center>
<center>图2 iEDA项目基础设施</center>

**2、通过iEDA运行脚本的方法：**

（1）以gcd设计为例，采用sky130工艺依次运行布图规划（iFP）、扇出优化（iNO_fix_fanout）和布局（iPL）、CTS（ICTS）等点工具。

    ● sky130工艺库位置：iEDA/scripts/foundry/sky130

    ● 运行脚本主入口：iEDA/scripts/design/sky130_gcd/run_iEDA.py

    ● gcd设计的网表文件：iEDA/scripts/design/sky130_gcd/result/verilog/gcd.v

    ● sdc约束文件：iEDA/scripts/foundry/sky130/sdc/gcd.sdc

    ● 运行指令：

    ○ 进入到iEDA工程：cd [iEDA工程父目录]/iEDA

    ○ 更新代码为最新代码：git pull

    ○ 编译构建工程：bash[build.sh](https://build.sh)

    ○ 复制可执行文件到样例目录：cp bin/iEDA scripts/design/sky130_gcd/

    ○ 进入到样例目录：cd scripts/design/sky130_gcd

    ○ 修改文件并注释掉23行到文件末尾的内容：vim[run_iEDA.py](https://run_iEDA.py)

    ○ 运行脚本：python[run_iEDA.py](https://run_iEDA.py)

**3、项目文件目录概述**：

* iEDA主目录概述：

| iEDA子目录名称 | 内容概况                                         |
| -------------- | ------------------------------------------------ |
| cmake          | 包含构建和管理Cmake项目的配置信息                |
| docs           | 包含项目的相关学习资料和项目向导                 |
| scripts        | 需要读取的数据和工艺文件，以及脚本文件和输出结果 |
| src            | iEDA项目点工具和平台相关源代码                   |

* iEDA/src目录概述：

| iEDA/src子目录名称 | 内容概况                                                                                                                |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| analysis           | 对外提供的算法分析拓展接口                                                                                              |
| apps               | 结合相关业务，设置的一些常见应用                                                                                        |
| database           | 将数据解析以后使用不同的类进行存放                                                                                      |
| evaluation         | 对不同点工具流程的算法进行评估的模块                                                                                    |
| interface          | 对外提供的可以使用的交互接口代码，包括gui，python，tcl，shell等                                                         |
| operation          | 点工具功能模块的实现，包括：iCTS，iDRS，iECO，iFP，iLR，iLO，iMP，iNO，iPDN，iPL，iPW，iRT，iSTA，iTM，iTO等（见图3-2） |
| platform           | 结合了具体业务需求，结合使用点工具封装的接口，实现一些应用于具体业务的中间数据的读取、处理、分析、存储、应用等等        |
| solver             | 提供指定算法解决方案，包含聚类布线布局等                                                                                |
| third_party        | 使用到的第三方依赖库                                                                                                    |
| utility            | 实用程序的开发，可简化开发过程                                                                                          |

<center><img src="/res/images/practice/course/course1_3.png" style="zoom:100%;" /></center>
<center>iEDA点工具（红色部分为开发迭代中，未上线）</center>


### **3 输入输出**

#### **算法输入**

    以cts流程为例，首先可以通过【iEDA运行主脚本】读取【设计文件】，运行floorplan、fix_fanout、place以及cts的流程，每个流程会生成对应的.def文件和log、report等文件，查阅report目录下的[designName]_hold.skew和[designName]_setup.skew文件，

    主要文件如下：

    ● 设计文件：iEDA/scripts/design/sky130_gcd/result/verilog/gcd.v

    ● cts配置文件：iEDA/scripts/design/sky130_gcd/iEDA_config/cts_default_config.json

    ● iEDA运行主脚本：iEDA/scripts/design/sky130_gcd/run_iEDA.py


<center><img src="/res/images/practice/course/course1_4.png" style="zoom:100%;" /></center>
<center>图4 iEDA运行主脚本，可以通过运行的主脚本进入到对应的点工具主脚本，查看运行不同点工具的配置和子脚本信息算法输出</center>




#### **算法输出**

算法输出主要为两部分：参考各流程获得的Summary报告，设计对应的Json文件输出。输出示例见问题描述，同学们可以自行设计Json中的数据结构。其中，现有工程中实现的Summary报告样例截图如下。

现有的Summary报告实现如下图5、6、7所示（仅供参考）：

<center><img src="/res/images/practice/course/course1_5.png" style="zoom:100%;" /></center>
<center>图5 cts_db.rpt文件截图，文件起始部分介绍了跑流程的时间，运行的点工具阶段、运行时间和占用内存，运行的设计等信息；其次介绍了一些Area和Number的统计信息；然后介绍不同Instance的分布情况和数量等信息。</center>

<center><img src="/res/images/practice/course/course1_6.png" style="zoom:100%;" /></center>
<center>图6 cts_db.rpt文件截图（续1），统计了不同金属层的线网数量和长度等信息。</center>

<center><img src="/res/images/practice/course/course1_7.png" style="zoom:100%;" /></center>
<center>图7 cts_db.rpt文件截图（续2），介绍了引脚分布情况。</center>
