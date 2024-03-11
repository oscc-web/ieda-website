# 对VLSI工程师有帮助的前20个TCL语法，有助于提高TCL脚本编写技能
September 23, 2021 by [Team VLSI](https://teamvlsi.com/author/team-vlsi)

在VLSI行业中，没有TCL（工具命令语言）将很难生存。TCL在VLSI行业广泛应用，因为许多工具都基于TCL。我们可以直接使用TCL CLI（命令行解释器）与工具交互。

观察到许多初学者最初对开始TCL脚本编写感到犹豫。大多数情况下，用户了解基本的TCL命令，但如何连接它们并创建脚本是唯一的问题。我想说，即使您知道一些基本的TCL命令，也可以开始为您的日常需求编写自己的脚本。最重要的是开始编写脚本的过程。在这里，我介绍了20个我经常在TCL脚本中使用的常见TCL语法，并希望它能够帮助您打破僵局。随着练习的进行，改进和完善会随之而来，但开始是最重要的。这20个语法肯定会帮助您开始并极大地改进您的TCL脚本。

## 1. foreach循环

**用途：**

我们需要在元素列表中对每个元素进行迭代，并对每个元素执行一些操作时使用。

**语法：**
```
foreach var Var_list {
//对每个var的操作
}
```
**示例：**

假设我们想打印出一个块中所有宏实例的实例名称、引用名称和宏的总数。
```
set macros [dbGet [dbGet top.insts.cell.baseClass block -p2].name]set i 0
foreach macro $macros {
set refName [dbGet top.insts.name $macro -p].cell.name
puts “$macro – $refName “
incr i
}
puts total macro count = $i
```

## 2. 嵌套的foreach循环

**用途：**

如果我们需要对列表的每个元素进行迭代，然后进一步需要对与该元素关联的每个参数进行迭代时使用。

**语法：**
```
foreach i list1 {
 //list2是根据i派生的
foreach j list2 {
     //对j的操作
}
}
```

**示例：**

假设我们需要查找正交块每个边缘的通孔引脚列表和通孔引脚的总数。可以编写如下脚本。
```
set edges [dbget top.terms.edge -u]set i 0
foreach edge $edges {
    set j 0
    foreach pin [dbget [dbget top.terms.edge $edge -p].name ft* ] {
        puts “$edge $pin”
        incr j
    }
    puts “$edge : total ft pin count = $j”
    incr i
}
puts “Toal edge of block = $i”
```

## 3. for循环

**用途：**

当我们希望在特定起始点和终点之间以一定的增量重复循环时使用。

**语法：**
```
for {初始化}{条件}{增量} {
语句
}
```

**示例：**

假设我们想知道innovus工具中从M5到M10的所有金属层的宽度和间距。
```
for {set i 5}{$i <= 10}{incr i}{
    set width [dbGet [dbGet top.head.layers.name M{$i} -p].minWidth]
    set pitch [dbGet [dbGet top.head.layers.name M{$i} -p].pitchX]
    puts “M{$i} $width $pitch”
}
```

## 4. 嵌套for循环

与上面的示例相同，只是语法不同，并且一个循环在另一个循环内部运行。

**语法：**
```
for {初始化}{条件}{增量} {
    for {初始化}{条件}{增量} {
        statements
    }
}
```

## 5. while循环

**用途：**

当我们需要重复循环直到特定条件为真时使用。

**语法：**

```
while {条件} {
  //语句
}
```

**示例：**

假设我们需要逐行读取文件的所有行，并动态将其存储在变量中。
```
set fp [open my_report.tcl r]while {[gets $fp data] >= 0} {
    if {[regexp “VIOLATED” $data]} {
        //desired statement for operation
    }
}
```

## 6. if-else条件

**用途：**
当某个条件为真时执行某些操作。我们可以加上else语句或者跳过它。

**语法：**
```
if {布尔条件} {
  //语句
} else {
  //语句
}
```

**示例：**

假设我们需要将SVT单元转换为ULVT单元。
```
if {[regexp SVT $cell_ref]} {
  set eco_ref [regsub {SVT} $cell_ref “ULVT”]
}
```

## 7. if-elseif… else condition

**用途： **

当一个前面的if条件不为真时，我们想检查另一个if条件时使用。 

**语法：** 
```
if {布尔条件} { 
  //语句 
} elseif {布尔条件} { 
  //语句 
} else { 
  //语句 
} 
```

**示例：**

假设我们需要在脚本中读取报告文件，并生成一个eco文件，其中如果存在Weak Driver，则需要将驱动器从D1增大到D3，D2增大到D4，D3增大到D5。我们可以按照以下方式编写脚本。
```
set fp [open existing.rpt r ]set fp1 [open new_ecofile w+]while {[gets $fp data] >= 0 } {
    if {[regexp “Weak Driver” $data]} {
        set inst [lindex $data 7]         set cell [lindex $data 8]         if {[regexp D1BWP $cell]} {
            regsub “D1BWP” $cell “D3BWP” newCell
        } elseif {[regexp D2BWP $cell]} {
            regsub “D2BWP” $cell “D4BWP” newCell
        } elseif {[regexp D3BWP $cell]} {
            regsub “D3BWP” $cell “D5BWP” newCell
        }
        if { [ info exists newCell ]} {
        puts $fp1 “ecoChangeCell -inst {$inst} -cell $newCell”
    }
}
close $fp
close $fp1
```

## 8. 算术运算 

**用途：**

当我们需要对一些数字进行加法/减法/乘法/除法时使用。 

**语法：**

`set s [expr $a + $b + $c]set d [expr $a – $b ]set m [expr $a * $b]set d1 [expr $a / $b ]`

**示例：**

如果我们想知道4X、8X和16X去耦电容单元加起来需要多少空间。

`set cell4X [dbget [dbget head.libCells.name $decap4 -p].size_x -u]set cell8X [dbget [dbget head.libCells.name $decap8 -p].size_x -u]set cell16X [dbget [dbget head.libCells.name $decap16 -p].size_x -u]set distX [expr $cell16X + $cell16X + $cell4X]puts $distX
`

**注意：**

在以下情况下要小心。例如：

>expr 3/2
>1

>expr 3/2.0
>1.5

## 9. regexp

**用途：**

用于匹配正则表达式。正则表达式有一个广泛的列表，我们将只看到我们经常使用的一些。

**语法：**

`regexp {模式} $字符串`

**示例：**

假设我们想要将D1、SVT单元更改为D2、LVT，我们可以使用regexp检查单元，然后我们可以执行regsub进行替换并生成一个eco文件。

```
if {[regexp {D1BWP240H11.*PDSVT} $clock_cell_ref]} {
    regsub {D1BWP240H11} $clock_cell_ref {D2BWP240H8} new_clock_cell_ref
    regsub {PDSVT} $new_clock_cell_ref {PDLVT} new_clock_cell_ref
    puts $fp_w “ecoChangeCell -inst $clock_cell -cell $new_clock_cell_ref”
}
```

## 10. regsub

**用途：**

用于替换正则表达式

**语法：**

`regsub {旧模式} $字符串 {新模式} 新字符串名称`

**示例：**

如regexp部分所述

## 11. 读取文件

**用途：**

在TCL脚本中，我们经常需要读取报告文件，以便根据报告中的违规情况进行一些修复。我们逐行读取文件，并动态将数据存储在文件指针变量中。

**语法：**

`set fp [open existing_file_name r]`

**示例：**

我们可以这样逐行读取文件中的内容。
```
set fp1 [open $old r]     while {[gets $fp1 data] >= 0 } { 
         // $data variable will get string line by line of old file
     }
    close $fp1
```

## 12. 写入文件

**示例：**

我们可以编写文件并关闭它，如下所示。
```
set fp2 [open $new w+] puts $fp2 “我们想要逐行写入文件的任何内容” 
close $fp2
```

## 13. proc

**用途：**

如果我们需要反复使用几行代码，我们可以使用这些代码编写一个proc，并可以通过proc名称轻松调用。无需每次都编写代码。

**语法：**
```
proc proc_name {} {
// 代码行
}
proc_name
```
**示例：**

如果我们需要找到一个块的基本详细信息，我们可以编写一个proc，类似于这样。
```
proc blockInfo {} {
    puts “Block name: [dbget top.name]”
    puts “All Layers: [dbget head.layers.name]”
    puts “Block Area: [dbget top.fPlan.area]”
    puts “Box size: [dbget top.fPlan.box_size]”
    puts “Boxes: [dbget top.fPlan.boxes]”
    puts “Toatl pins: [dbget top.numTerms], Inputs – [dbget top.numInputs], Outputs –                    [llength [dbget top.terms.isOutput 1 -p]]”
    puts “Macro Count: [llength [dbget top.insts.cell.baseClass block -p2]]”
    // Many more parameters can be added
}
```
我们只需要在上面的文件中调用上述proc，并且它将显示块的所有上述信息。

## 14. 带参数的proc

**用途：**

有时我们需要在proc中传递一些参数，并且我们希望根据用户参数获得proc的结果。

**语法：**
```
proc proc_name { arg1 arg2 arg3 …} {
  // 代码行
}
proc_name arg1 arg2 arg3
```

**示例：**

假设我们想编写一个通用proc，如果我们传递net_name，它应该返回特定net的net_length。我们可以按照以下方式编写。
```
proc netLength {net_name} {
    set net_length 0
    set net_wires_length [dbget [dbget top.nets.name $net_name -p].wires.length]     foreach i $net_wires_length {
        set net_length [expr $net_length + $i]     }
    puts $net_length
}
```

**注意：**

我们还可以设置proc参数的默认值。因此，如果用户不传递参数值，proc将采用默认值。

**语法：**
```
proc proc_name {{arg1 10} {arg2 20}} {
set a $arg1
set b $arg2
// 更多语句
}
```

因此，如果我们像这样调用proc

`proc_name`

它将采用arg1和arg2的默认值，并将a设置为10，b设置为20。

但是，如果我们这样调用proc

`proc_name 50`

它将设置a为50，b为20

我们还可以这样调用

`proc_name 50 45`

在上述方法中，proc将设置a为50，b为45

## 15. exec

**用途：**

在tcl脚本中使用bash命令

**语法：**

`exec date
`
**示例：**

`set timestamp_prefix [exec date +%m%d_%H_%M]`

## 16. bGet/dbSet/dbQuery

**用途：**

这些是innovus工具特定的命令，在与innovus工具相关的脚本中广泛使用。

**语法**和**示例**将在单独的文章中讨论。

## 17. 列表操作

**用途：**

有各种列表操作，各种操作在各种方式上都很重要，并且经常使用。

**语法：**

llenght, lappend, lindex, lreplace, lset, lsort等。

**示例：**

请使用man命令获取更多详细信息

## 18. 别名 

**用途：** 

将长命令或带有开关的命令缩短为短命令。 

**语法：**

`alias short_commad “original_commad”`

**示例：**
```
alias si “selectInst”
alias sn “selectNet”
```
## 19. grep 

**用途：**

查找特定模式 

**语法：**

exec grep “pattern” $file_name egrep和zgrep也可用于替代grep。

**示例：**

将在单独的文章中详细讨论

## 20. sed 

**用途：**

sed称为流编辑器，它可以执行许多任务。通常我们使用sed来替换或删除文件或字符串中的特定模式。 

**语法：**

`exec sed`

示例1：如果我们想完全用另一行替换具有特定唯一模式的行。我们可以这样做。

`exec sed -i “s|Pattern .*|$new_line|” $file_name`

示例2：如果我们想在特定唯一模式的行后写入存储在文件中的代码行。我们可以这样做
```
set num [exec sed -n “/^Source Script.*/=” $file_name ]
incr num
exec sed -i “$num r $script_file” $file_name
```
示例3：如果我们想删除所有包含特定模式的行

`exec sed -i “/DEL*/d” $file_name`

注意：grep、sed和awk是各种操作非常方便的命令，这些命令将在后续文章中详细解释。

## 谢谢

原文链接：https://teamvlsi.com/2021/09/top-20-tcl-syntax-helpful-to-improve-tcl-scripting-skill-for-vlsi-engineers.html