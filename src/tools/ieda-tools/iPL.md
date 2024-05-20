# iPL布局工具介绍

## 1 背景简介

1、布局问题：给定有连接线关系（线网）的单元集合以及布局区域，布局对单元进行放置。一般布局目标是最小化线网总线长/时序/功耗，要求单元满足合法性（在布局区域内、对齐Row/Site、单元相互不重叠等）的规定。

- 线网：单条线网可连接多个Pin点（Pin点位置在单元上或者是在IO处）；线网走线方向只有横纵方向。
- 单元：形状通常是矩形。单元类型有宏单元、标准单元（时序单元、逻辑单元）等；单元状态有已固定、待放置等。

<img src="../img/iPL/iPL_1.png">

图1 iPL主要流程图

2、布局问题-竞赛问题时间轴

<img src="../img/iPL/iPL_8.png">

图2 iEDA团队的陈仕健、赵雪岩、李江考、邱奕杭同学，指导老师李兴权、黄志鹏，打通软件数据流，实现布局合法化，获得2022 ICCAD Contest Problem B的First Place。

<img src="../img/iPL/iPL_7.png">

图3 竞赛题目列表

<img src="../img/iPL/iPL_6.png">

图4 布局问题发展历程

## 2 主要实现

### 2.1 功能实现

<img src="../img/iPL/iPL_5.png">

图5 iPL中实现的主要布局流程，一步到位求解大规模布局问题是NP难的，因此一般划分为三个阶段：全局布局、合法化和详细布局。

- Place std cell into proper location
  - satisfy layer poly, well, contact, and metal 1 design rule
  - optimize wirelength, timing, congestion
- Place macro cell location automatically
- Incremental placement
- Timing-driven placement (coming soon)
- Congestion-driven placement (coming soon)

<img src="../img/iPL/iPL_4.png">

图6 布局示意图

### 2.2 工具API实现

| 方法名                         | 子方法                           | 类型     | 参数列表                  | 返回值        | 方法描述                                       |
| ------------------------------ | -------------------------------- | -------- | ------------------------- | ------------- | ---------------------------------------------- |
| initAPI                        | *                                | action   | pl_json_path, idb_builder | self          | 初始化iPL                                      |
| runFlow                        | runGP                            | action   | void                      | self          | 运行全局布局                                   |
| runFlow                        | runBufferInsertion               | action   | void                      | self          | 运行Buffer插入                                 |
| runFlow                        | runLG                            | action   | void                      | self          | 运行合法化                                     |
| runFlow                        | runDP                            | action   | void                      | self          | 运行详细布局                                   |
| runFlow                        | writeBackSourceDataBase          | action   | void                      | self          | 布局数据写回数据源                             |
| runIncrLG                      | *                                | action   | inst_list                 | self          | 运行增量式合法化                               |
| updatePlacerDB                 | *                                | action   | void/inst_list            | self          | 从数据源更新（指定）数据                       |
| obtainAvailable WhiteSpaceList | *                                | action   | row_range,site_range      | rectanglelist | 获取指定区域下的可用布局空间（供插入单元使用） |
| checkLegality                  | *                                | accessor | void                      | bool          | 检查当前布局结果的合法性                       |
| isSTAStarted                   | *                                | accessor | void                      | bool          | 检查是否已启动STA                              |
| isPlacerDBStarted              | *                                | accessor | void                      | bool          | 检查是否已初始化PlacerDB                       |
| isAbucasLGStarted              | *                                | accessor | void                      | bool          | 检查是否已启动Abucas合法器                     |
| reportPLInfo                   | reportHPWLInfo                   | accessor | feed                      | self          | 报告HPWL信息                                   |
| reportPLInfo                   | reportSTWLInfo                   | accessor | feed                      | self          | 报告STWL信息                                   |
| reportPLInfo                   | reportLongNetInfo                | accessor | feed                      | self          | 报告长线网信息                                 |
| reportPLInfo                   | reportLayoutInfo                 | accessor | feed                      | self          | 报告版图违例信息                               |
| reportPLInfo                   | reportPeakBinDensity             | accessor | feed                      | self          | 报告Bin区域的峰值密度                          |
| reportPLInfo                   | reportTimingInfo                 | accessor | feed                      | self          | 报告布局时序信息                               |
| reportPLInfo                   | reportCongestionInfo             | accessor | feed                      | self          | 报告布局拥塞信息                               |
| obtainTimingInfo               | obtainPinEarly(Late)Slack        | action   | pin_name                  | value         | 获取Pin上的Slack信息                           |
| obtainTimingInfo               | obtainPinEarly(Late)ArrivalTime  | action   | pin_name                  | value         | 获取Pin上的ArrivalTime信息                     |
| obtainTimingInfo               | obtainPinEarly(Late)RequiredTime | action   | pin_name                  | value         | 获取Pin上的RequiredTime信息                    |
| obtainTimingInfo               | obtainWNS/TNS                    | action   | clk_name                  | value         | 获取WNS/TNS信息                                |
| obtainTimingInfo               | updateTiming                     | action   | void                      | self          | 更新时序评估                                   |
| obtainCongesionInfo            | obtainPinDens                    | action   | void                      | value         | 获取Pin Density信息                            |
| obtainCongesionInfo            | obtainNetCong                    | action   | rudy_type                 | value         | 获取线网拥塞信息                               |
| obtainCongesionInfo            | evalGRCong                       | action   | void                      | value         | 更新拥塞评估                                   |

## 3 关键技术

### 3.1 模块设计

<img src="../img/iPL/iPL_9.png">

图7 iPL模块划分

- PlacerDB模块：封装并维护布局所需的版图数据（layout）和设计数据（Design）
- Operator模块：提取布局数据进行操作，期间调用solver模块进行求解，evaluator模块评估指标，checker模块检查布局结果
- Solver模块：集合一些成熟的求解工具辅助布局
- Checker模块：对当前布局进行违例检查、功能检测、报告输出Evaluator模块：评估当前布局指标
- Wrapper模块：从数据源读取布局数据，布局结果写回数据源
- API：iPL与外部的交互接口

### 3.2 可布线性方案

- 线长梯度：WA 线长光滑模型
- 密度梯度：e-Density 静电场模型
- 优化算法：Nesterov梯度下降算法
- 拥塞评估方法(由iEDA evaluator提供API)：
  - LUT-RUDY（Look Up Table-based RUDY）
  - Early-GR
- 细粒度单元膨胀：
  - 选择峰值拥塞网格的单元进行膨胀
  - H/V双方向独立膨胀
  - 动态膨胀率调整
  - 超线性膨胀指数修正

当全局布局所有单元足够散开(density overflow < 0.2)，开始进行可布线性评估和优化

<img src="../img/iPL/iPL_10.png">

图8 iPL可布线性方案流程

## 4 输入输出

**输入**

- 网表优化def文件 ./result/iTO_fix_fanout_result.def

**输出**

- ./result/iPL_result.def
- ./result/iPL_result.v

**评测和报告**

- ./result/report/pl_db.rpt

iPL工具的中间报告默认存放在目录：`./scripts/design/sky130_gcd/result/pl/`

<img src="../img/iPL/iPL_2.png">

图9 当前的布局结果是否存在违例的检查，详细违例情况在同级目录下文件violation_record.txt

<img src="../img/iPL/iPL_3.png">

图10 布局优化的线长指标报告，长线网的详细报告在同级目录下文件wirelength_record.txt；单元分布的密度信息，详细报告在同级目录下文件density_record.txt；布局结果的时序信息，详细报告在同级目录下文件timing_record.txt；布局结果的可布线性信息，详细报告在同级目录下文件congestion_record.txt

- report/violation_record.txt ：布局违例的单元

- report/wirelength_record.txt ：布局的HPWL线长、STWL线长以及长线线长统计
- report/density_record.txt ：布局的峰值bin密度
- report/timing_record.txt ：布局的时序信息（wns、tns），调用Flute进行简易绕线
- report/congestion_record.txt：布局的可布线性信息

## 5 **参数说明**

参考iEDA_config/pl_default_config.json: `./scripts/design/sky130_gcd/iEDA_config/pl_default_config.json`

| 参数名称                                      | 功能说明                                                     | 参数范围                     | 默认值        |
| --------------------------------------------- | ------------------------------------------------------------ | ---------------------------- | ------------- |
| is_max_length_opt                             | 是否开启最大线长优化                                         | [0,1]                        | 0             |
| max_length_constraint                         | 指定最大线长                                                 | [0-1000000]                  | 1000000       |
| is_timing_aware_mode                          | 是否开启时序模式                                             | [0,1]                        | 0             |
| ignore_net_degree                             | 忽略超过指定pin个数的线网                                    | [10-10000]                   | 100           |
| num_threads                                   | 指定的CPU线程数                                              | [1-64]                       | 8             |
| [GP-Wirelength] init_wirelength_coef          | 设置初始线长系数                                             | [0.0-1.0]                    | 0.25          |
| [GP-Wirelength] reference_hpwl                | 调整密度惩罚的参考线长                                       | [100-1000000]                | 446000000     |
| [GP-Wirelength] min_wirelength_force_bar      | 控制线长边界                                                 | [-1000-0]                    | -300          |
| [GP-Density] target_density                   | 指定的目标密度                                               | [0.0-1.0]                    | 0.8           |
| [GP-Density] bin_cnt_x                        | 指定水平方向上Bin的个数                                      | [16,32,64,128,256,512,1024]  | 512           |
| [GP-Density] bin_cnt_y                        | 指定垂直方向上Bin的个数                                      | [16,32,64,128,256,512,1024]  | 512           |
| [GP-Nesterov] max_iter                        | 指定最大的迭代次数                                           | [50-2000]                    | 2000          |
| [GP-Nesterov] max_backtrack                   | 指定最大的回溯次数                                           | [0-100]                      | 10            |
| [GP-Nesterov] init_density_penalty            | 指定初始状态的密度惩罚                                       | [0.0-1.0]                    | 0.00008       |
| [GP-Nesterov] target_overflow                 | 指定目标的溢出值                                             | [0.0-1.0]                    | 0.1           |
| [GP-Nesterov] initial_prev_coordi_update_coef | 初始扰动坐标时的系数                                         | [10-10000]                   | 100           |
| [GP-Nesterov] min_precondition                | 设置precondition的最小值                                     | [1-100]                      | 1             |
| [GP-Nesterov] min_phi_coef                    | 设置最小的phi参数                                            | [0.0-1.0]                    | 0.95          |
| [GP-Nesterov] max_phi_coef                    | 设置最大的phi参数                                            | [0.0-1.0]                    | 1.05          |
| [BUFFER] max_buffer_num                       | 指定限制最大buffer插入个数                                   | [0-1000000]                  | 35000         |
| [BUFFER] buffer_type                          | 指定可插入的buffer类型名字                                   | 工艺相关                     | 列表[...,...] |
| [LG] max_displacement                         | 指定单元的最大移动量                                         | [10000-1000000]              | 50000         |
| [LG] global_right_padding                     | 指定单元间的间距（以Site为单位）                             | [0,1,2,3,4...]               | 1             |
| [DP] max_displacement                         | 指定单元的最大移动量                                         | [10000-1000000]              | 50000         |
| [DP] global_right_padding                     | 指定单元间的间距（以Site为单位）                             | [0,1,2,3,4...]               | 1             |
| [Filler] first_iter                           | 指定第一轮迭代使用的Filler                                   | 工艺相关                     | 列表[...,...] |
| [Filler] second_iter                          | 指定第二轮迭代使用的Filler                                   | 工艺相关                     | 列表[...,...] |
| [Filler] min_filler_width                     | 指定Filler的最小宽度（以Site为单位）                         | 工艺相关                     | 1             |
| [MP] fixed_macro                              | 指定固定的宏单元 (string macro_name)                         | 设计相关                     | 列表[...,...] |
| [MP] fixed_macro_coordinate                   | 指定固定宏单元的位置坐标（int location_x, int location_y）   | 设计相关                     | 列表[...,...] |
| [MP] blockage                                 | 指定宏单元阻塞矩形区域，宏单元应该避免摆放在该区域（int left_bottom_x, int left_bottom_y, int right_top_x, int right_top_y) | 设计相关                     | 列表[...,...] |
| [MP] guidance_macro                           | 指定指导摆放宏单元，每个宏单元可以设置期望摆放的区域 (string macro_name) | 设计相关                     | 列表[...,...] |
| [MP] guidance                                 | 指定对应宏单元的指导摆放区域（int left_bottom_x, int left_bottom_y, int right_top_x, int right_top_y） | 设计相关                     | 列表[...,...] |
| [MP] solution_type                            | 指定解的表示方式                                             | ["BStarTree","SequencePair"] | "BStarTree"   |
| [MP] perturb_per_step                         | 指定模拟退火每步扰动次数                                     | [10-1000]                    | 100           |
| [MP] cool_rate                                | 指定模拟退火温度冷却率                                       | [0.0-1.0]                    | 0.92          |
| [MP] parts                                    | 指定标准单元划分数（int)                                     | [10-100]                     | 66            |
| [MP] ufactor                                  | 指定标准单元划分不平衡值 (int)                               | [10-1000]                    | 100           |
| [MP] new_macro_density                        | 指定虚拟宏单元密度                                           | [0.0-1.0]                    | 0.6           |
| [MP] halo_x                                   | 指定宏单元的halo（横向）                                     | [0-1000000]                  | 0             |
| [MP] halo_y                                   | 指定宏单元的halo（纵向）                                     | [0-1000000]                  | 0             |
| [MP] output_path                              | 指定输出文件路径                                             |                              | "./result/pl" |