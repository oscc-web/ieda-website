---
title: "iPA - Power Analysis"
order: 10
---

# iPower User Manual

## Introduction to iPower

### Software Architecture Diagram

<img src="/res/images/tools/tool/resources/iPower.png" width="100%" height="35%" alt="iPower-structure" />

### Supported Features

* Supports parsing VCD waveform files.
* Supports outputting power analysis reports, including different types of power consumption (internal power, switching power, and leakage power) and different grouped power consumption (clock network, combinational logic, sequential logic, etc.).

## Example of Using the iPower Tool

### Writing a tcl File (run_ipw.tcl)

* Example tcl file:../source/data/example1/run_ipw.tcl

First, according to the iSTA README.md, complete the parsing of verilog,.lib files, link design, parse sdc, spef files, perform timing analysis and obtain the timing report.

#### Parsing the vcd File

```
read_vcd test.vcd -top_name top-i
```

#### Obtaining the Power Report

```
report_power
```

## Running iPower Through the tcl File

```bash
./iPower run_ipwr.tcl
```