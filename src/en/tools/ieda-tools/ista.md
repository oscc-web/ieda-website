---
title: "iSTA - Static Timing Analysis"
order: 9
---

# iSTA User Guide

> ## Introduction to iSTA

### Software Structure Diagram

<div align="center">

<img src="/res/images/tools/tool/resources/iSTA.png" width="80%" height="35%" alt="iSTA-logo" />

  **iSTA - An Open Source Intelligent Static Timing Analysis Tool for Integrated Circuit Design**

</div>

### Supported Functions

- Fully supports reading of standard input files (Def/Verilog, sdc, spef/sdf, liberty);
- For delay calculation, in addition to supporting NLDM/Elmore calculation models, it also supports CCS current models and Arnoldi reduced-order models;
- Timing analysis supports Clock Gate analysis, Removal/Recovery analysis and Muliticycle analysis;
- Timing path analysis modes support OCV mode and AOCV mode;
- Noise analysis initially supports the influence of Crosstalk and will be further improved in the future;
- Provides the timing analysis engine timing engine for physical design calls.

---

> ## iSTA Usage Example

### Writing a tcl File (run_ista.tcl)

The example tcl file is located at: /src/operation/iSTA/source/data/example1/run_ista.tcl

#### Set the output path for the timing report

```bash
set work_dir "../src/operation/iSTA/source/data/example1"
set_design_workspace $work_dir/rpt
```

#### Read the verilog file

```bash
read_netlist $work_dir/example1.v
```

#### Read the.lib file

```bash
set LIB_FILES $work_dir/example1_slow.lib
read_liberty $LIB_FILES
```

#### Link the design to the netlist

```bash
link_design top
```

#### Read the sdc file

```bash
read_sdc  $work_dir/example1.sdc
```

#### Read the spef file

```bash
read_spef $work_dir/example1.spef
```

#### Obtain the timing report

```bash
report_timing
```

The timing report is located in the output path of the timing report set in the first step, including

- top.rpt (Reports WNS, TNS and timing paths)
- top.cap (Reports violation capacitance)
- top.fanout (Reports violation fanout)
- top.trans (Reports violation transition time)
- top_hold.skew (Reports clock skew in hold mode)
- top_setup.skew (Reports clock skew in setup mode)

### Compiling iSTA (iSTA is located at: bin/)

### Running the tcl file using iSTA

```bash
 cd bin/
./iSTA run_ista.tcl
```