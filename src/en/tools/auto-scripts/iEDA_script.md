
#  iEDA-Script

## 1 Module Division and Description

iEDA-Script: a specialized script for iEDA, used for testing, evaluating, and analyzing data. The main tool flow of the iEDA-Script is as follows:

<!-- <img src="../img/iEDA_script/iEDA_script2.png"> -->

Figure 1: iEDA Tool Flow

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



**Module Description**

The script directory contains all the physical backend design scripts and result analysis and evaluation scripts required for the different designs, and the modules are divided into subdirectories based on the flow and functionality. The flow scripts can be called by the top-level automatic running scripts (run_iEDA.py, run_iEDA.sh) or can be run independently.

<!-- <img src="../img/iEDA_script/iEDA_script1.png"> -->

Figure 2: iEDA-Script Project Directory Structure, with run_iEDA.py as the main script

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


## 2 Flow Running Process

After setting up iEDA and the PDK, you can choose to run the sky130_gcd flow scripts either automatically using the top-level running scripts (run_iEDA.py, run_iEDA.sh) or run them independently. All the results are saved in the script/design/sky130_gcd/result directory.

The general process for running a single point tool is as follows:


**Step 1 Path Setting**

First of all, the process environment path must be configured. To facilitate the search and configuration of path parameters, the paths of TechLEF, LEF, Lib, sdc, and spef are uniformly configured in the file `./script/DB_script/db_path_setting.tcl` for the script. The details are shown in the following table:

| Function | Configuration Command | Reference TCL Example |
| ---- | ---- | ---- |
| Set TechLef Path | set TECH_LEF_PATH xxx | set TECH_LEF_PATH "./lef/sky130_fd_sc_hs.tlef" |
| Set Lef Path | set LEF_PATH xxx | set LEF_PATH./lef/sky130_ef_io__com_bus_slice_10um.lef |
| Set Lib Path | set LIB_PATH xxx | set LIB_PATH./lib/sky130_dummy_io.lib |
| Set Fix Fanout Lib Path | set LIB_PATH_FIXFANOUT xxx | set LIB_PATH_FIXFANOUT./lib/sky130_dummy_io.lib |
| Set Fix DRV Violation Lib Path | set LIB_PATH_DRV xxx | set LIB_PATH_DRV./lib/sky130_dummy_io.lib |
| Set Fix Hold Violation Lib Path | set LIB_PATH_HOLD xxx | set LIB_PATH_HOLD./lib/sky130_dummy_io.lib |
| Set Fix Setup Violation Lib Path | set LIB_PATH_SETUP xxx | set LIB_PATH_SETUP./lib/sky130_dummy_io.lib |
| Set SDC Path | set SDC_PATH xxx | set SDC_PATH "./sdc/gcd.sdc" |
| Set SPEF Path | set SPEF_PATH xxx | set SPEF_PATH "./spef/xxx.spef" |

**Step 2 Configuration Point Tool Config**
The parameter settings Config of all point tools are in the path `./iEDA_config`. You can check the **Input and Output List** in the later chapters to modify the corresponding point tool Config file.

**Step 3 Read.def Design File**
Taking CTS as an example, execute the `def_init` command to read the result after layout.

```
#===========================================================
##   read def
#===========================================================
def_init -path./result/iPL_result.def
```

After steps 1 - 3, the data of Tech LEF, LEF, and DEF files will be loaded, which is a prerequisite for the startup of the point tool.

**Step 4 Start Point Tool**
Taking CTS as an example, execute the `run_cts` command to start the CTS process.

```
#===========================================================
##   run CTS
#===========================================================
run_cts -config./iEDA_config/cts_default_config.json
```

**Step 5 Save Point Tool Running Results**
Taking CTS as an example, after the point tool process is completed, the running results of the point tool are saved in the path `./result/`.

```
#===========================================================
##   Save def
#===========================================================
def_save -path./result/iCTS_result.def

#===========================================================
##   Save netlist 
#===========================================================
netlist_save -path./result/iCTS_result.v -exclude_cell_names {}
```

**Step 6 Output Report**
Taking CTS as an example, after the data is stored, the overall report related to the design result will be output, and the report path is stored in `./result/report/`.

```
#===========================================================
##   report 
#===========================================================
report_db -path "./result/report/cts_db.rpt"
```

**Step 7 Exit**

```
#===========================================================
##   Exit 
#===========================================================
flow_exit
```

The above steps are the general process of executing a single point tool. Among them, steps 1 - 3 initialize the configuration and database and are necessary steps. After step 4, various point tools or module commands can be flexibly connected as needed. 