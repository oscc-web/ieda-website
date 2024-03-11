# IO接口分析：对块级别IO引脚的约束
November 8, 2020 by [Team VLSI](https://teamvlsi.com/author/team-vlsi)

我们都知道，为了使PnR工具能够优化这些接口路径，必须对块的所有输入和输出引脚进行约束。本文将讨论如何约束输入或输出引脚。我们还将讨论这些约束的实际含义以及这些约束如何影响时序分析。

<div style="text-align:center;">
  <img src="interfacePath.png" alt="ASIC Flow" width="500" />
</div>

在上图中，显示了两条时序路径，一条是从CIN到FF1，另一条是从FF2到COUT。从CIN到FF1的路径称为输入到寄存器（In2Reg）路径，而从FF2到COUT的路径称为寄存器到输出（Reg2Out）路径。与输入和输出引脚相关的任何时序路径都称为接口时序路径。

## 输入接口：

<div style="text-align:center;">
  <img src="inputInterface.png" alt="ASIC Flow" width="500" />
</div>

如果考虑到块级PnR实现，输入到寄存器路径可能是寄存器到寄存器路径的一部分，如上图所示。寄存器FF11位于块外，但从CIN到FF1的路径的一部分位于块内。因此，为了满足寄存器到寄存器路径FF11到FF1的时序，我们可以将该路径分为两部分。

<div style="text-align:center;">
  <img src="inputDelay.png" alt="ASIC Flow" width="500" />
</div>

第一部分是从FF11的时钟引脚到块CIN的输入引脚的延迟，第二部分是从CIN引脚到FF1的D引脚的延迟，如上图所示。第一部分称为CIN引脚的输入延迟。由于此路径超出了块范围，如果工具无法计算此路径，则没有时序信息。因此，我们需要在SDC文件中提供此路径的延迟作为CIN引脚的输入延迟。根据这个输入延迟值，PnR工具将估算从CIN到FF1的D引脚的时序裕度并优化路径。在块级别上，我们只需要关闭从CIN到FF1的时序，即输入到寄存器路径。

**例如，**

假设时钟周期为1纳秒。对于建立分析，从FF11到FF1的路径所需时间为850皮秒。

假设从FF11的时钟引脚到CIN的路径的最大延迟为550皮秒。

那么在块级别上，对于建立分析，我们需要关闭剩余的路径，即从CIN到FF1的路径，时间为850 - 550 = 300皮秒。

<br>

输入延迟路径也有两部分，一部分是FF11的时钟到Q延迟，另一部分是从Q到CIN的组合延迟。这条路径将有最大延迟和最小延迟，分别在建立分析和保持分析中单独使用。因此，当应用输入延迟时，我们应用两个延迟，最大输入延迟和最小输入延迟。在SDC文件中应用此延迟的命令如下。

**设置输入延迟：**

```
create_clock -name RLCK -period 1 [get_ports RCLK]

set_input_delay -max 0.55 -clock RCLK [get_ports CIN]

set_input_delay -min 0.45 -clock RCLK [get_ports CIN]
```

上述一组SDC命令将设置CIN输入引脚的最大输入延迟为550皮秒，最小输入延迟为450皮秒。我们可以更简单地理解这一点，即数据将在输入延迟后从CIN引脚发射。因此，更大的输入延迟意味着更少的时间可用于到达捕获触发器FF1。类似的逻辑也适用于保持分析。

## 输出接口：

<div style="text-align:center;">
  <img src="outputInterface.png" alt="ASIC Flow" width="500" />
</div>

在块级别上，从FF2到COUT的寄存器到输出路径是从FF2到FF22的完整路径的一部分，如上图所示。触发器FF22和从COUT到FF22的路径位于块外，这条路径可以在这里被视为虚拟路径。

<div style="text-align:center;">
  <img src="outputDelay.png" alt="ASIC Flow" width="500" />
</div>

从FF2到FF22的路径可以看作是上图所示的两部分。第一部分是从FF2到COUT，位于块内，第二部分是从COUT到FF22，位于块外且虚拟。第二部分路径的延迟称为COUT引脚的输出延迟。这个延迟是在寄存器FF22之前、在块外的组合延迟。在指定COUT引脚的输出延迟时，我们需要指定最大和最小延迟。

**例如，**

假设时钟周期为1纳秒。对于建立分析，从FF2到FF22的路径所需时间为800皮秒。

假设从COUT到FF222的路径的最大延迟为250皮秒。

那么在块级别上，对于建立分析，我们需要关闭剩余的路径，即从FF2到COUT的路径，时间为800 - 250 = 550皮秒。

<br>

在SDC文件中，我们指定最大和最小输出延迟，分别用于建立分析和保持分析。输出延迟是从输出引脚到下一个寄存器的延迟。

**设置输出延迟：**

```
create_clock -name RLCK -period 1 [get_ports RCLK]

set_output_delay -max 0.25 -clock RCLK [get_ports COUT]

set_output_delay -min 0.20 -clock RCLK [get_ports COUT]
```

上述一组SDC命令将设置COUT输出引脚的最大输出延迟为250皮秒，最小输入延迟为200皮秒。我们可以想象这样，就好像在块外有一个虚拟触发器，从COUT引脚到那个虚拟触发器的延迟就是COUT引脚的输出延迟。这里的输出延迟是以建立分析为参考进行解释，但类似的概念也适用于保持分析。

## 谢谢

原文链接：https://teamvlsi.com/2020/11/io-interface-analysis-constraints-for-io-pins-on-block-level.html