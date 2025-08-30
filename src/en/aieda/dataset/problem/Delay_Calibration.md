---
title: "Delay calibration dataset"
order: 2
---

# Delay calibration dataset #

## Download ##

[时序校准数据集](https://gitee.com/i-eda/i-bm/tree/master/Delay_Calibration_Dataset/demo)

## Dataset Description ##
1. 使用内部开源静态时序分析工具iSTA生成时序报告；
2. 使用商业静态时序分析工具Prime Time生成对应的时序报告；
3. 通过iSTA报告中的时序路径信息，提取每条时序路径中的特征数据，包括影响单元时延和互连线时延的特征；
4. 确定PT报告中对应路径的时延，该时延值作为标签，认为是Ground truth
5. 将每条路径从iSTA中提取的特征数据和从PT中提取的对应的标签值保存到.txt文件中

### File descriptions ###
- 在文档中每一条时序路径的特征和标签，以features开始，到下一条路径的features结束
- 每一条时序路径包含从iSTA报告中提取的15个特征和从PT中提取的4个标签
- 每一行中的数据是这条时序路径中的每一个pin的一个特征构成，每一行代表一个特征。比如，第一行是这条路径中每一个pin的名称
- 下面对每一个特征进行解释：

| 特征 | 描述 |
|-------|-------|
| pin name | pin名称|
| cell name | instance名称+pin名称 |
| fanout | 互连线的扇出 |
|rise_fall| 上升/下降|
| is_net | 标记是否为互连线 |
| capacitance | 负载电容 |
| slew | 翻转时间|
| incr_elmore | Elmore方法增加时延 |
| incr_d2m | D2M方法增加时延 |
| incr_ecm | ECM方法增加时延|
| incr_d2mc | MD2M方法增加时延 |
| at_elmore | Elmore方法到达时延 |
| at_d2m | D2M方法到达时延|
| at_ecm | ECM方法到达时延 |
| at_d2mc | MD2M方法到达时延 |
| cap_pt | PT报告的负载电容|
| slew_pt | PT报告的翻转时间 |
| incr_pt | PT报告的增加时延 |
| at_pt | PT报告的到达时延 |

- 上述特征和标签，可以根据需求做特征工程判断使用哪些特征最有效。

## Updates ##


## Citation ##


## Contact ##
Please feel free to send any questions or comments to ieda.oscc@gmail.com.