---
title: "1.1 Chip Types"
order: 1
---

You must have heard professional terms like IC, ASIC, VLSI, FPGA, as well as processes such as chip front-end, back-end, design, manufacturing, etc. However, you may not know these terms in detail. Next, we will start from the definitions of these terms to uncover the "veil" of **terminology** in the chip field, and clarify the **internal structure** of chip design.

## 1 "General-Purpose" vs. "Application-Specific" Chips

IC stands for Integrated Circuit, which is another technical term for **chip**.

Integrated circuits can be divided into two main categories according to their purpose: one is **general-purpose chips**, such as CPU, GPU, DSP, etc.; the other is **application-specific chips**, including FPGA, ASIC, etc. This classification is important, as the two are fundamentally different. It is worth noting that there are many ways to classify chips, but here we adopt the classification based on design philosophy, which is the basis for later understanding.

Here, the difference between "general-purpose" and "application-specific" refers to **whether the chip is designed only to perform a particular type of computation**. To use a simple analogy: a general-purpose chip is like a "bank teller" who can process various complex tasks, whereas an application-specific chip is like an "ATM", standardizing and hardening some processes in hardware, acting as an emotionless processing machine. "General-purpose" and "application-specific" here do not refer to whether a chip is used in only one product or use case. For example, the CPU developed by Intel for PCs is only used in PCs, but it is not an "application-specific" chip as we mean here.

**# To learn more about "general-purpose" and "application-specific" chips, [click here](https://zhuanlan.zhihu.com/p/374131234).**

## 2 Full-Custom, Semi-Custom, and Programmable ASICs

Application-Specific Integrated Circuit (ASIC) refers to a chip designed and manufactured according to the specific requirements of a user and an electronic system.

According to mainstream classification, ASICs can be divided into **full-custom, semi-custom, and programmable**. There are many ways to do ASIC design, with the two most popular methods being:

1. CPLD (Complex Programmable Logic Device)
2. FPGA (Field-Programmable Gate Array)

**Common Features:**

- Programmability: Both CPLDs and FPGAs can be programmed and configured according to user needs to implement different logic functions and circuit designs.

- High Integration: Both can integrate multiple logic gates, flip-flops, and other electronic devices into a single chip to achieve complex circuit functionality.

- Reconfigurability: Both CPLDs and FPGAs can be programmed repeatedly, allowing multiple modifications and reconfigurations of the circuit design.

**Differences:**

- Architecture: CPLDs use a programmable logic array and programmable interconnects, whereas FPGAs use a programmable logic array and programmable connections. This gives FPGAs advantages in logic density and flexibility, while CPLDs tend to perform better in timing reliability and power consumption.

- Scale: FPGAs are typically larger than CPLDs, with higher logic resources and more programmable units. Therefore, FPGAs are suitable for designs that need higher complexity and flexibility.

- Timing Performance: CPLDs generally have better timing performance and are suitable for applications with strict timing requirements, such as clock distribution and synchronization circuit design. FPGAs are relatively less strong in timing but better suited for parallel processing and large-scale data processing.

- Power Consumption: CPLDs usually use static memory cells and therefore consume less power. FPGAs use dynamic memory cells, resulting in higher power consumption.

**Overall, CPLDs are suitable for applications that require higher timing reliability and power control, while FPGAs are more suitable for applications that need higher logic density and flexibility. The choice depends on the specific application requirements and design goals.**

**# To further learn about "ASIC chip classification, advantages, and applications," [click here](https://www.sgpjbg.com/info/32937.html).**

## 3 Hierarchical Structure of Chips

Before introducing SoCs (System on Chip), let's first look at the hierarchical structure of a chip from large to small (to better understand internal structure):

* System Level: Chip system architecture design, with IP modules having independent and complete functions. For example, a mobile phone, which has multiple functions such as gaming, calling, listening to music, etc.

  ```
  Port* compute_optimal_route_for_packet (Packet_t *packet, Channel_t *channel){
      static Queue_t *packet_queue; packet_queue = add_packet(packet_queue, packet); ......
  }
  ```

* Module level: The entire system is divided into many functional modules, each with its own duties and responsible for a specific function.

<div style="text-align:center;">
    <img src="/res/images/train_eda_1/20190925223756583.png" alt="6" style="zoom:40%;">
</div>      

* Register Transfer Level (RTL): Functions are implemented through registers, forming RTL code. A complex functional module consists of many registers and combinational logic.

<div style="text-align:center;">
    <img src="/res/images/train_eda_1/image.png" alt="6" style="zoom:30%;" />
</div>

* Gate level: Through synthesis tools, RTL code is converted into circuits, and the circuits are mapped into gate-level netlists made of GTech or standard cell libraries;
<div style="text-align:center;">
  <img src="/res/images/train_eda_1/image1.png" alt="6" style="zoom:25%;" />
</div>

* Transistor level: Each element in the standard cell library has been pre-designed, and the key component is the transistor, which is the most atomic level;

<div style="text-align:center;">
  <img src="/res/images/train_eda_1/image2.png" alt="6" style="zoom:25%;" />
</div>

* Layout level: After physical implementation of the gate-level netlist, a layout GDS is generated, which serves as the blueprint for chip manufacturing;

<div style="text-align:center;">
  <img src="/res/images/train_eda_1/image3.png" alt="6" style="zoom:25%;" />
</div>

* Mask level: Chip manufacturers design masks by layering the layout, which guide the photolithography machines for exposure; advanced processes may require multiple exposures;
<div style="text-align:center;">
  <img src="/res/images/train_eda_1/image4.png" alt="6" style="zoom:25%;" />
</div>

**# To further learn about "chip hierarchical structure," please [click here](https://blog.csdn.net/YinShiJiaW/article/details/101391597).**


## 4 SoC、MPU、MCU、CPU、GPU、DSP 简介

- **SoC (System on Chip)**
 
  **系统级芯片**，既像MCU那样有内置RAM，ROM的同时，又像MPU那样强大的不单单是放简单的代码，而是可以放系统级代码，也就是说可以运行操作系统。**可以理解为**一个SoC芯片集成了计算机系统中所有必要的功能模块，不需要额外与其他芯片协同工作，但是仍需要与外部器件协同工作以构建出完整的系统。

  **例子：智能手机中的芯片通常采用SoC的设计。** 当你使用智能手机进行游戏时，SoC中的CPU负责处理游戏逻辑、运算和控制，而GPU则负责图形渲染，将游戏画面显示在屏幕上。此外，调制解调器模块负责处理无线通信，使你能够连接到移动网络并进行通话或上网。同时，摄像头处理器则负责处理拍照和录像功能，使你能够拍摄高质量的照片和视频。

- **CPU（Central Processing Unit）中央处理器**

  计算机系统的运算和控制核心，是信息处理、程序运行的**最终执行单元**。以下是一些CPU存在的常见形式：**单片CPU芯片**（嵌入式系统、智能手机、平板电脑）、**多芯片模块**（AMD 的 Ryzen Threadripper 处理器系列）、**超大规模集成电路**（一些特定应用的超高性能CPU）、**定制化解决方案**（专用计算设备、科学研究设备）。
  
  **例子：** 当你使用手机上的社交媒体应用浏览朋友圈时，**CPU**会负责处理应用程序发出的命令，从服务器上获取数据，对数据进行处理和显示。当你打开手机上的游戏时，CPU会负责处理游戏的逻辑运算、图形渲染等任务。即使是简单的操作，比如拨打电话、发送短信，CPU也会参与其中，确保手机能够正常工作。

- **微处理器（MPU）**

  在微机中，CPU被集成在一片超大规模集成电路芯片上，被称为MPU。也就是说，MPU是单片CPU芯片，是微机的心脏。

  **例子：智能家居控制器是一个使用MPU的实际例子。** 智能家居系统通常需要一个中央控制单元来管理和控制各种智能设备，比如灯光、温度调节器、安全摄像头等等。这个中央控制单元可以由MPU组成，通过连接网络和各种传感器，监测和控制各个智能设备的状态和功能。MPU负责处理控制指令、数据交互和联网通信等任务，使智能家居系统能够实现自动化控制和智能化管理。

```
问：微机芯片是SoC芯片吗？

回：微型计算机（Microcomputer）通常是指个人电脑（PC），而不是单片机（Microcontroller）。因此，对于个人电脑而言，它的处理器芯片不是SoC芯片。个人电脑的CPU（中央处理器）通常以模块化的形式存在，由多个芯片组成，例如一些历史悠久的x86架构处理器，包括Intel Pentium和AMD Athlon。这些芯片通常由中央处理器（CPU）、北桥芯片、南桥芯片等多个组件组成，每个组件都具有不同的功能。

然而，在现代嵌入式系统中，单片机（Microcontroller）和芯片组（Chipset）之间的差别已经逐渐模糊，SoC的应用也变得越来越普遍了。现代嵌入式系统中的SoC芯片通常集成了处理器核心、存储器控制器、周边设备接口、无线通信模块、传感器接口等多个功能模块，以实现更高的集成度和更低的功耗。在这种情况下，SoC芯片可以看作是一个完整的计算机系统，与微型计算机系统的芯片组有着相似的设计目标。

综上所述，微型计算机（个人电脑）的处理器芯片通常不是SoC芯片，而是模块化设计的多个芯片组成。但在现代嵌入式系统中，SoC芯片已经变得越来越普遍，集成了多个功能模块，实现了更高的集成度和更低的功耗。
```

- **MCU（Microcontroller）单片机**

  是将CPU、RAM等功能集成到一块硅片上构成的一个**小而完善的微型计算机系统**，在工业控制领域广泛应用。MCU和SoC的设计目标、集成度和应用场景不同，MCU通常用于相对简单的嵌入式系统，而SoC则用于更复杂的嵌入式系统和移动终端设备。MCU不是SoC芯片。

  **例子：** Arduino Uno是一款基于ATmega328P单片机的开发板，它集成了处理器核心、存储器、输入输出接口以及其他功能模块。它具有丰富的引脚资源，可以连接各种传感器、执行器和外部设备，方便进行物联网和嵌入式系统开发。其他功能模块。它具有丰富的引脚资源，可以连接各种传感器、执行器和外部设备，方便进行物联网和嵌入式系统开发。

- **GPU（Graphics Processing Unit）图像处理器**

  又称显卡。在大多数的个人计算机中，GPU仅仅是用来绘制图像的。如果CPU想画一个二维图形，只需要发个指令给GPU，GPU就可以迅速计算出该图形的所有像素，并且在显示器上指定位置画出相应的图形。由于GPU会产生大量的热量，所以通常显卡上都会有独立的散热装置。

- **DSP（Digital Signal Processor）数字信号处理器**

  是一种专用的**数字信号处理器芯片**，专门用于处理数字信号，如音频、视频、雷达信号等。DSP在实时数据处理、滤波、编解码、音频处理等领域有着较高的性能和效率，常被用于无线通信、音频处理、图像处理等应用。

  **例子:** TMS320C6748是德州仪器（Texas Instruments）生产的一款高性能DSP芯片。它专门设计用于数字信号处理应用，具有强大的计算能力和丰富的外设接口，广泛应用于音频、视频、通信、医疗、工业控制和汽车等领域。

**# 若想拓展学习“这些术语”，请[点击这里](https://www.cnblogs.com/grooovvve/p/11604016.html)。**

## 5 ASIC vs VLSI 

VLSI和ASIC是不同的两个概念。

VLSI（Very Large Scale Integrate circuit）是指**集成电路的规模**，有时也指制造集成电路所使用的工艺，VLSI工艺一般都在1um以下。

ASIC(Application Specified Integrate Circuit)指相对于通用集成电路而言的**用户专用的电路**。

VLSI技术当然可以用在ASIC中，但非VLSI技术，如LSI，MSI技术等，也可以用于ASIC中,当然现在的ASIC大多用VLSI技术，不过它又可以分成全定制(Full-custom)，半定制(semi-custom)和可编程电路(如FPGA,CPLD等)。

对于ASIC设计并没有专门去学的, 因为设计集成电路的人可以搞ASIC，研究通讯的人也可以搞ASIC, 凡是需要设计的电路的人都可以搞ASIC。ASIC的形式也有多种, 说得通俗一点就是**把电路板上的好几块集成块集成到一块集成电路上就可以说是ASIC**。

倒是VLSI的设计是一门比较专业的学科, 但也包含了许多方面.如果你希望以后能从事集成电路的设计工作, **学VLSI设计是一门基础的课程**, 其中有集成电路制造工艺方面的知识, 有电路设计方面的知识.我不知你指的故障检测是哪方面的, 如果是VLSI的测试，则包含了一部分故障检测的内容.

**# 节选自博客，若想拓展学习“ASIC和VLSI区别的”，请[点击这里](https://www.cnblogs.com/PhiloSky/p/3419854.html)。**


## 6 引用

[1] https://zhuanlan.zhihu.com/p/374131234
[2] https://www.sgpjbg.com/info/32937.html
[3] https://www.cnblogs.com/grooovvve/p/11604016.html
[4] https://blog.csdn.net/YinShiJiaW/article/details/101391597
[5] https://www.cnblogs.com/PhiloSky/p/3419854.html