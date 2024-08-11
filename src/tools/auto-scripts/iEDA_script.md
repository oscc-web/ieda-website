#  iEDA-Script

## 1 模块划分与说明

iEDA-Script：一个iEDA专用执行脚本，用于测试、评估和解析数据。其主要工具流程如下：

<!-- <img src="../img/iEDA_script/iEDA_script2.png"> -->

图1 iEDA工具流程

```
scripts
├── design                   #iEDA flows for different designs
│   ├── ispd18               #tbd
│   └── sky130_gcd           #flow of gcd in sky130
│       ├── iEDA             
│       ├── iEDA_config      # iEDA parameters configuration files
│       ├── README.md
│       ├── result           # iEDA result output files
│       ├── run_iEDA_gui.py  # Python3 script for running all iEDA flow with GUI layout
│       ├── run_iEDA.py      # Python3 script for running all iEDA flow
│       ├── run_iEDA.sh      # POSIX shell script for running all iEDA flow
│       └── script           # TCL script files
├── foundry
│   ├── README.md
│   └── sky130               # SkyWater Open Source PDK
│       ├── lef              # lef files
│       ├── lib              # lib files
│       ├── sdc              # sdc files
│       └── spef             # folder for spef files if needed
└── hello.tcl                # Test running iEDA
```

**模块说明**

script目录包含物理后端设计需要的所有流程脚本和结果分析评估脚本，并且按流程、功能划分好模块；流程脚本可支持顶层自动化运行脚本run_iEDA.py的调用，也可以支持独立运行。

<!-- <img src="../img/iEDA_script/iEDA_script1.png"> -->

图2 iEDA-Script工程目录划分，其中run_iEDA.py为脚本主入口

```
scripts/design/sky130_gcd/script
├── DB_script                           # Data process flow scripts
│   ├── db_init_lef.tcl                 # initialize lef
│   ├── db_init_lib_drv.tcl             # initialize lib only for flow of drv 
│   ├── db_init_lib_fixfanout.tcl       # initialize lib only for flow of fix fanout
│   ├── db_init_lib_hold.tcl            # initialize lib only for flow of optimize hold
│   ├── db_init_lib_setup.tcl           # initialize lib only for flow of optimize setup
│   ├── db_init_lib.tcl                 # initialize lib for common flow
│   ├── db_init_sdc.tcl                 # initialize sdc 
│   ├── db_init_spef.tcl                # initialize spef
│   ├── db_path_setting.tcl             # set paths for all processing technology files, including TechLEF，LEF, Lib, sdc and spef
│   ├── run_db_checknet.tcl             # check net connectivity based on data built by DEF (.def) and LEF (.lef & .tlef)
│   ├── run_db_report_evl.tcl           # report wire length and congestion based on data built by DEF (.def) and LEF (.lef & .tlef)
│   ├── run_db.tcl                      # test building data by DEF (.def) and LEF (.lef & .tlef)
│   ├── run_def_to_gds_text.tcl         # transform data from DEF (.def) to GDSII (.gdsii)
│   ├── run_def_to_verilog.tcl          # transform data from DEF (.def) to netlist (.v)
│   ├── run_netlist_to_def.tcl          # transform data from netlist (.v) to DEF (.def)
│   └── run_read_verilog.tcl            # test read verilog file (.v)
├── iCTS_script                         # CTS flow scripts
│   ├── run_iCTS_eval.tcl               # report wire legnth for CTS result
│   ├── run_iCTS_STA.tcl                # report CTS STA
│   └── run_iCTS.tcl                    # run CTS
├── iDRC_script                         # DRC(Design Rule Check) flow scipts
│   ├── run_iDRC_gui.tcl                # show GUI for DRC result
│   └── run_iDRC.tcl                    # run DRC
├── iFP_script                          # Floorplan flow scripts
│   ├── module                          # submodule for Floorplan scripts
│   │   ├── create_tracks.tcl           # create tracks for routing layers
│   │   ├── pdn.tcl                     # create pdn networks 
│   │   └── set_clocknet.tcl            # set clock net
│   └── run_iFP.tcl                     # run Floorplan
├── iGUI_script                         # GUI flow scipts
│   └── run_iGUI.tcl                    # run GUI
├── iNO_script                          # NO(Netlist Optimization) flow scipts
│   └── run_iNO_fix_fanout.tcl          # run Fix Fanout
├── iPL_script                          # Placement flow scripts
│   ├── run_iPL_eval.tcl                # report congestion statistics and wire legnth for Placement result
│   ├── run_iPL_filler.tcl              # run standard cell filler
│   ├── run_iPL_gui.tcl                 # run gui flow that shows Global Placement Processing result
│   ├── run_iPL_legalization_eval.tcl   # report congestion statistics and wire legnth for Legalization result
│   ├── run_iPL_legalization.tcl        # run Cell Legalization
│   └── run_iPL.tcl                     # run Placement
├── iRT_script                          # Routing flow scripts
│   ├── run_iRT_DRC.tcl                 # run DRC for Routing result
│   ├── run_iRT_eval.tcl                # report wire legnth for Routing result
│   ├── run_iRT_STA.tcl                 # run STA for Routing result
│   └── run_iRT.tcl                     # run Routing
├── iSTA_script                         # STA flow scripts
│   ├── init_iSTA.tcl                   # STA initialization
│   ├── report_iSTA.tcl                 # report STA result
│   └── run_iSTA.tcl                    # run STA
└── iTO_script                          # TO(Timing Optimization) flow script
    ├── run_iTO_drv_STA.tcl             # run STA for DRV result
    ├── run_iTO_drv.tcl                 # run DRV
    ├── run_iTO_hold_STA.tcl            # run STA for Fix Hold Violation result
    ├── run_iTO_hold.tcl                # run Fix Hold Violation
    ├── run_iTO_setup_STA.tcl           # run STA for Fix Setup Violation result
    └── run_iTO_setup.tcl               # run Fix Setup Violation
```

## 2 Flow运行流程

准备好iEDA和工艺文件后，您可以选择自动运行sky130流程脚本，也可以分步骤运行各个点工具脚本，所有的结果都默认保存在script/sky130/result文件夹

不管是自动运行顶层 run_iEDA.py 脚本还是单独运行点工具脚本，基于 iEDA 平台设计的脚本都有着相似的步骤，具体流程如下

**step 1 路径设置**

首先必须先配置工艺环境路径，为方便查找和配置路径参数，脚本将TechLEF、LEF、Lib、sdc、spef的路径统一在文件 ./script/DB_script/db_path_setting.tcl配置，如下表所示

| 功能                              | 配置命令                   | 参考 TCL 样例                                           |
| --------------------------------- | -------------------------- | ------------------------------------------------------- |
| 设置 TechLef 路径                 | set TECH_LEF_PATH xxx      | set TECH_LEF_PATH "./lef/sky130_fd_sc_hs.tlef"          |
| 设置 Lef 路径                     | set LEF_PATH xxx           | set LEF_PATH ./lef/sky130_ef_io__com_bus_slice_10um.lef |
| 设置 Lib 路径                     | set LIB_PATH xxx           | set LIB_PATH ./lib/sky130_dummy_io.lib                  |
| 设置 Fix Fanout Lib 路径          | set LIB_PATH_FIXFANOUT xxx | set LIB_PATH_FIXFANOUT ./lib/sky130_dummy_io.lib        |
| 设置 Fix DRV Violation Lib 路径   | set LIB_PATH_DRV xxx       | set LIB_PATH_DRV ./lib/sky130_dummy_io.lib              |
| 设置 Fix Hold Violation Lib 路径  | set LIB_PATH_HOLD xxx      | set LIB_PATH_HOLD ./lib/sky130_dummy_io.lib             |
| 设置 Fix Setup Violation Lib 路径 | set LIB_PATH_SETUP xxx     | set LIB_PATH_SETUP ./lib/sky130_dummy_io.lib            |
| 设置 SDC 路径                     | set SDC_PATH xxx           | set SDC_PATH "./sdc/gcd.sdc"                            |
| 设置 SPEF 路径                    | set SPEF_PATH xxx          | set SPEF_PATH "./spef/xxx.spef"                         |

**step 2 配置点工具Config**
所有点工具的参数设置Config都在路径 ./iEDA_config 中，可查看后面章节的 **输入输出一览表** 修改对应的点工具Config文件

**step 3 读 .def 设计文件**
以 CTS 为例，执行 def_init 命令，读取布局后的结果

```
#===========================================================
##   read def
#===========================================================
def_init -path ./result/iPL_result.def
```

步骤 1 - 3 后，Tech LEF、LEF、DEF 文件数据将被加载，这是点工具启动的前提条件

**step 4 启动点工具**
以 CTS 为例，执行 run_cts 命令，将启动 CTS 流程

```
#===========================================================
##   run CTS
#===========================================================
run_cts -config ./iEDA_config/cts_default_config.json
```

**step 5 保存点工具运行结果**
以 CTS 为例，执行完点工具流程后，将点工具运行结果保存在路径 ./result/ 中

```
#===========================================================
##   Save def
#===========================================================
def_save -path ./result/iCTS_result.def

#===========================================================
##   Save netlist 
#===========================================================
netlist_save -path ./result/iCTS_result.v -exclude_cell_names {}
```

**step 6 输出报告**
以 CTS 为例，数据存储后，将输出设计结果相关的总体报告，报告路径存储在 ./result/report/ 中

```
#===========================================================
##   report 
#===========================================================
report_db -path "./result/report/cts_db.rpt"
```

**step 7 退出**

```
#===========================================================
##   Exit 
#===========================================================
flow_exit
```

以上步骤为执行单个点工具的一般流程，其中步骤 1 - 3 初始化配置和数据库，为必须的步骤，步骤 4 之后，可以按照需求灵活接入各个点工具或模块命令