---
title: "iEDA-Chip-003"
order: 3
---

### **芯片参数**

第2次：20220812，在110nm工艺在“一生一芯”三期设计，百万门级的处理器芯片，实现25MHz的流片结果；

SoC规格：

* 一个11级顺序单发射RV64I MAC处理器核
* 实现AXI4总线互联网络，集成一个PLL，设计有三个时钟域
* 集成了UART、QSPI Flash、ChipLink、SDRAM、VGA、PS/2外设

芯片参数：

```
•工艺：28nm
•面积：约1.5 × 1.5 cm
•功耗：dynamic = 317mW，leakage = 29 mW
•频率：200MHz
•规模：1.5M Gates
•特性：11级流水线带cache，IP： UART、VGA、PS/2、SPI、SDRAM、 片上两个PLL模块输出时钟，支持Linux
```

### **版图结果**
<img src="/res/images/activities/tapeout/fig3.png" alt="6" style="zoom:70%;" title ="iEDA第三次支持芯片设计并流片版图和板卡测试结果" />
<center>iEDA第三次支持芯片设计并流片版图和板卡测试结果</center>